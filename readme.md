<div align="center">

<img src="https://github.com/ABHIJATSARARI/FarmIQ/blob/main/logo.png?raw=true" alt="FarmIQ Logo" width="500"/>

# 🌱 FarmIQ — AI Farming Advisor on WhatsApp

### Instant crop advice for 500M+ small farmers. No app. No English. No data plan needed.

[![WhatsApp](https://img.shields.io/badge/Try%20FarmIQ%20Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/14155238886?text=Hi%20FarmIQ%2C%20I%20want%20to%20test%20the%20bot)
[![Built on Replit](https://img.shields.io/badge/Built%20on-Replit-F26207?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/@rapidhunter250/farmiq-bot)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![INNOSpark 2026](https://img.shields.io/badge/INNOSpark-Global%20Pitch%202026-FF6B35?style=for-the-badge)](https://innospark.devpost.com)

---

> *"I grew up in a rural area watching farmers lose harvests to problems a single piece of advice could have prevented. FarmIQ is that advice — free, instant, in their language, on the phone they already have."*
> — Abhi, Founder

</div>

---

## 🚀 Try FarmIQ Right Now

> **Step 1** — Click the button below to open WhatsApp

<div align="center">

[![Chat on WhatsApp](https://img.shields.io/badge/%F0%9F%92%AC%20Open%20WhatsApp%20%E2%86%92%20Send%20%22join%20simple--went%22-25D366?style=for-the-badge&logoColor=white&labelColor=128C7E)](https://wa.me/14155238886?text=join%20simple-went)

</div>

> **Step 2** — Send this message to join the sandbox:
> ```
> join simple-went
> ```
> **Step 3** — Ask FarmIQ anything about your crops! Try:
> ```
> My tomato leaves are turning yellow. What should I do?
> ```

---

## 🌍 The Problem

| Stat | Reality |
|------|---------|
| 🌾 **500M+** | Small farmers across India & Sub-Saharan Africa |
| 📉 **Up to 40%** | Crops lost annually to preventable causes |
| 👨‍🌾 **1 : 3,000** | Agricultural officers to farmers ratio |
| 📱 **2 Billion** | People already using WhatsApp daily |

**The gap:** Farmers know something is wrong. They just don't know what to do — and no one is there to tell them. Existing solutions require smartphones, internet, and English. Most farmers have none of that. But almost all of them have WhatsApp.

---

## 💡 The Solution

```
Farmer texts problem in any language
         ↓
FarmIQ AI analyzes the query
         ↓
Instant, specific advice sent back via WhatsApp
         ↓
Follow-up questions handled conversationally
         ↓
Serious cases referred to local agricultural officer
```

### Why WhatsApp?
- ✅ No app download required
- ✅ Works on any basic Android phone
- ✅ No extra data plan needed
- ✅ Farmers already know how to use it
- ✅ Works even on 2G connections

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🌱 **AI Crop Advisor** | Powered by Google Gemini 2.5 Flash |
| 🌍 **Multilingual** | Hindi, English & Swahili |
| 💬 **Conversational** | Remembers context across messages |
| ⚡ **Instant** | Responds in seconds |
| 🆓 **Free for farmers** | Zero cost to end users |
| 📱 **Zero install** | Pure WhatsApp — no app needed |
| ⚠️ **Safety first** | Refers serious cases to agricultural officers |
| 🔄 **No duplicates** | Smart processing lock prevents double replies |

---

## 📱 Live Demo

### English
> **Farmer:** My rice crop has brown spots on leaves
>
> **🌱 FarmIQ Advisor**
>
> Brown spots on rice leaves usually indicate fungal brown spot disease. Remove affected leaves immediately and avoid overhead watering to reduce spread. Apply a recommended fungicide like Mancozeb — your local agri shop will have it.
>
> ⚠️ Also consult your local agricultural officer.
>
> *Need more help? Just ask!*

---

### Hindi
> **Farmer:** मेरी गेहूं की फसल पीली हो रही है, क्या करूं?
>
> **🌱 FarmIQ Advisor**
>
> गेहूं की पत्तियों का पीला होना आमतौर पर नाइट्रोजन की कमी या पीला रतुआ रोग के कारण होता है। पहले जांचें कि पत्तियों पर पीली धारियां हैं या नहीं — धारियां हों तो रतुआ है। यूरिया का छिड़काव करें और स्थानीय कृषि अधिकारी से सलाह लें।
>
> *Need more help? Just ask!*

---

### Pest Control
> **Farmer:** There are small white insects under my mango leaves
>
> **🌱 FarmIQ Advisor**
>
> Those sound like mealybugs or whiteflies — common mango pests. Mix 5ml neem oil with 1 litre water and spray under the leaves every 7 days. For severe infestations, use imidacloprid from your local agri store.
>
> ⚠️ Also consult your local agricultural officer.
>
> *Need more help? Just ask!*

---

## 🏗️ Tech Stack

```
WhatsApp Message
      ↓
Twilio WhatsApp API  ←→  Webhook (Express.js)
                               ↓
                     Google Gemini 2.5 Flash AI
                               ↓
                     Replit (Node.js hosting)
                               ↓
                     Reply sent back to farmer
```

| Layer | Technology |
|-------|-----------|
| **Messaging** | Twilio WhatsApp Sandbox API |
| **AI Brain** | Google Gemini 2.5 Flash (free tier) |
| **Server** | Node.js + Express.js |
| **Hosting** | Replit |
| **Memory** | In-memory conversation history + JSON persistence |
| **Languages** | JavaScript (Node.js) |

---

## 🚀 Self-Host in 15 Minutes

### Prerequisites
- [Twilio account](https://twilio.com) (free)
- [Gemini API key](https://aistudio.google.com) (free)
- [Replit account](https://replit.com) (free)

### Setup

**1. Clone & install**
```bash
git clone https://github.com/YOUR-USERNAME/farmiq-bot
cd farmiq-bot
npm install
```

**2. Set environment variables**
```bash
GEMINI_API_KEY=your_key_here
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
```

**3. Run**
```bash
node index.js
# FarmIQ bot running on port 3000
```

**4. Connect Twilio**

Set your Twilio WhatsApp Sandbox webhook to:
```
https://YOUR-DOMAIN/webhook
```
Method: `HTTP POST`

**5. Test it**

Send a WhatsApp message to `+1 415 523 8886` and watch FarmIQ respond!

---

## 📊 Traction

| Metric | Result |
|--------|--------|
| ✅ Live bot | Fully deployed and working |
| 💬 Test conversations | 10+ real farming queries tested |
| 🌾 Crops covered | Tomato, Rice, Wheat, Mango, Onion |
| 🌍 Languages tested | Hindi ✅ English ✅ Swahili ✅ |
| 📱 Devices tested | Android WhatsApp, WhatsApp Web |
| ⚡ Response time | Under 5 seconds |

---

## 🗺️ Roadmap

```
NOW ──────────────────────────────────────────────────────► FUTURE

[✅ Working bot]  [🔄 NGO Pilot]  [📈 10K farmers]  [🌍 100K farmers]
     Phase 1          Phase 2          Phase 3           Phase 4

• WhatsApp bot    • 2 NGO partners  • KVK integration  • 5 languages
• 3 languages     • 100 farmers     • India + Africa    • Premium tier
• 5 crops         • 10 crop types   • Govt programs     • 100K users
```

---

## 💰 Business Model

| Revenue Stream | Description |
|---------------|-------------|
| 🆓 **Free for farmers** | Core advice always free |
| 🏛️ **NGO licensing** | NGOs pay for branded advisory programs |
| 🏦 **Govt contracts** | Extension program integrations |
| 📊 **Agri data insights** | Anonymized crop health data for agribusinesses |

---

## 👨‍💻 About the Founder

**Abhi** — Built FarmIQ as a solo founder for the INNOSpark Global Pitch Competition 2026.

Growing up in a rural area, Abhi witnessed firsthand how farmers struggled without access to timely agricultural information. FarmIQ is his answer to that gap — technology that meets farmers exactly where they are, with no barriers to access.

---

## 🏆 Competition

This project was built for the **[INNOSpark Global Pitch Competition 2026](https://innospark.devpost.com)** — the largest student-led pitch competition in the world.

- 🥇 $2,220 first place prize
- 🌍 Virtual, global competition
- 🎓 Open to all high school students worldwide

---

<div align="center">

## 🌱 Ready to try FarmIQ?

[![Try FarmIQ on WhatsApp](https://img.shields.io/badge/🌱%20Try%20FarmIQ%20Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/14155238886?text=join%20simple-went)

*Free for farmers. Always.*

---

Made with ❤️ for farmers everywhere

**⭐ Star this repo if you believe every farmer deserves access to expert advice**

</div>
