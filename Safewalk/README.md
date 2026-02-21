# 🛡️ Safewalk — Emergency SOS

A lightweight, fully static emergency safety web app. Press the **SOS** button to:
- 🔔 Trigger the **custom alarm sound** (`alarm.wav`)
- 📍 Get your **GPS coordinates** and a Google Maps link
- 📱 Open a pre-filled **SMS / Call** link to your saved emergency contact

---

## 🚀 Deploy to GitHub Pages

### 1. Push this repository to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/safewalk.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/safewalk/
```

---

## 📁 Project Structure

```
safewalk/
├── docs/                   ← GitHub Pages static site (deploy this)
│   ├── index.html          ← Full app, all logic inlined
│   ├── style.css           ← Premium dark-mode UI
│   ├── alarm.wav           ← Custom SOS alarm sound
│   ├── manifest.json       ← PWA metadata
│   └── .nojekyll           ← Disables Jekyll processing
├── src/                    ← Original React source (for future development)
├── server/                 ← Original Express server (for future development)
├── public/                 ← Original public assets
└── package.json
```

> **Note:** The `docs/` folder is the deployable static site. The `src/` and `server/` folders contain the original React + Node.js codebase for future server-side development (e.g. Twilio SMS).

---

## 🔑 Features

| Feature | How it works |
|---|---|
| Emergency contact | Saved to `localStorage` — persists across visits |
| Alarm sound | Custom WAV file plays in a loop via HTML5 `<audio>` |
| GPS location | Browser Geolocation API → Google Maps link |
| SMS alert | Opens native SMS app pre-filled with your location (mobile) |
| Stop alarm | Pause button halts the alarm at any time |

---

## 📄 License

MIT