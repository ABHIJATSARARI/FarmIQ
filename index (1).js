const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const TWILIO_WHATSAPP_NUMBER = "whatsapp:+14155238886";
const SEEN_USERS_FILE = "seen_users.json";

// ─── UPDATE THIS URL after uploading your logo ───────────
const FARMIQ_LOGO_URL = "https://YOUR-LOGO-URL-HERE.png";
// ─────────────────────────────────────────────────────────

function loadSeenUsers() {
  try { return JSON.parse(fs.readFileSync(SEEN_USERS_FILE, "utf8")); }
  catch { return {}; }
}
function saveSeenUsers(data) {
  fs.writeFileSync(SEEN_USERS_FILE, JSON.stringify(data));
}

const seenUsers = loadSeenUsers();
const conversations = {};
const processing = {};

const SYSTEM_PROMPT = `You are FarmIQ, an AI-powered farming advisor for small farmers across India and Africa.

RESPONSE FORMAT — follow this exactly every single time, no exceptions:

🌱 *FarmIQ Advisor*

[Your advice here — 2 to 3 short, complete sentences. Never cut off mid-sentence.]

_Need more help? Just ask!_

STRICT RULES:
- Always start with exactly: 🌱 *FarmIQ Advisor*
- Always end with exactly: _Need more help? Just ask!_
- Keep advice to 2-3 COMPLETE sentences. Never trail off.
- If steps needed, use max 3 bullet points: • like this
- If serious disease or pest: add "⚠️ Also consult your local agricultural officer."
- Simple language only
- Reply in the same language the user writes in (Hindi, English, or Swahili)
- Never ask more than ONE clarifying question

Topics: crop diseases, pests, planting schedules, soil health, irrigation, fertilizers, post-harvest storage.`;

async function getFarmingAdvice(userMessage, phoneNumber) {
  if (!conversations[phoneNumber]) conversations[phoneNumber] = [];

  conversations[phoneNumber].push({
    role: "user",
    parts: [{ text: userMessage }],
  });

  const recentHistory = conversations[phoneNumber].slice(-10);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: recentHistory,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      maxOutputTokens: 400,
      temperature: 0.4,
    },
  });

  const reply = response.text;

  conversations[phoneNumber].push({
    role: "model",
    parts: [{ text: reply }],
  });

  return reply;
}

async function handleMessage(incomingMsg, fromNumber) {
  try {
    if (!seenUsers[fromNumber]) {
      seenUsers[fromNumber] = true;
      saveSeenUsers(seenUsers);

      // Send logo first (only if URL has been set)
      if (FARMIQ_LOGO_URL !== "https://YOUR-LOGO-URL-HERE.png") {
        await twilioClient.messages.create({
          from: TWILIO_WHATSAPP_NUMBER,
          to: fromNumber,
          mediaUrl: [FARMIQ_LOGO_URL],
        });
      }

      // Then send welcome text
      await twilioClient.messages.create({
        from: TWILIO_WHATSAPP_NUMBER,
        to: fromNumber,
        body: `👋 *Welcome to FarmIQ!*\n\nI'm your free AI farming advisor. Ask me anything about your crops — diseases, pests, planting times, soil, and more.\n\n🌍 I understand Hindi, English & Swahili.\n\n_What's your farming question today?_`,
      });
    }

    const reply = await getFarmingAdvice(incomingMsg, fromNumber);

    await twilioClient.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: fromNumber,
      body: reply,
    });

    console.log(`Replied to ${fromNumber}: ${reply}`);
  } catch (error) {
    console.error("Error:", error);
    await twilioClient.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: fromNumber,
      body: "Sorry, I'm having trouble right now. Please try again. — FarmIQ",
    });
  } finally {
    delete processing[fromNumber];
  }
}

app.post("/webhook", (req, res) => {
  const incomingMsg = req.body.Body;
  const fromNumber = req.body.From;

  console.log(`Incoming from ${fromNumber}: ${incomingMsg}`);

  // Respond to Twilio instantly to prevent retries/duplicates
  res.status(200).send("OK");

  // Skip if already processing this user
  if (processing[fromNumber]) {
    console.log(`Skipping duplicate from ${fromNumber}`);
    return;
  }

  processing[fromNumber] = true;
  handleMessage(incomingMsg, fromNumber);
});

app.get("/", (req, res) => {
  res.send("🌱 FarmIQ bot is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FarmIQ bot running on port ${PORT}`);
});
