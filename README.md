# Weather Dashboard

A premium, production-grade **Weather Dashboard** built with **HTML5, CSS3 and Vanilla JavaScript (ES6 Modules)**. It looks and feels like a commercial App Store product — glassmorphism, animated weather backgrounds, interactive charts, voice search, offline support and an installable PWA — with zero frameworks.

![Weather Dashboard](./favicon.svg)

---

## Project Overview

Weather Dashboard is a single-page application that delivers current conditions, an hourly and 5-day forecast, air quality, sun & moon data, interactive Chart.js graphs and an animated weather background that reacts to the current sky. It is designed to be fast, accessible, responsive and fully usable offline.

Highlights:

- **Premium UI/UX** — glassmorphism cards, soft shadows, animated gradients, smooth transitions.
- **Live animated backgrounds** — rain, snow, clouds, stars, sun rays rendered on a canvas.
- **Interactive charts** — temperature, humidity, pressure, wind and rain probability (Chart.js).
- **Search** — debounced autocomplete, keyboard navigation, voice search and GPS.
- **Settings** — temperature, wind, pressure and time units; language; theme; animation toggle.
- **Offline-first PWA** — service worker, cache API, offline page and last-cached weather.
- **Accessibility** — semantic HTML, ARIA, keyboard navigation, high-contrast and reduced-motion support.
- **Multi-language** — English, Spanish, French, German, Hindi, Chinese.

---

## Features

### Weather information
Current temperature, feels like, description, icon, humidity, wind speed + direction + gust, pressure + trend, visibility, cloud cover, rain chance, UV index, dew point, heat index, air quality (AQI, PM2.5, PM10, CO, NO₂, SO₂, O₃), sunrise, sunset, moonrise, moonset, moon phase, current date/time, timezone, latitude and longitude.

### Forecast
- 5-day forecast cards (date, day, icon, condition, min/max temp, humidity, rain probability).
- Hourly forecast (scrollable, 12-hour).
- 24-hour data in charts.

### Charts (Chart.js)
Temperature, humidity, pressure, wind speed and rain probability — responsive, animated and theme-aware.

### Search
City search with autocomplete, debounced input, keyboard navigation (↑/↓/Enter/Esc), voice search (Web Speech API), GPS location, recent searches, favorites and clear history.

### Settings panel
Temperature unit (°C/°F), wind unit (m/s, km/h, mph), pressure unit (hPa, mb, mmHg, inHg), time format (12/24h), language, theme (light/dark), animation toggle. All preferences persist in localStorage.

### Backgrounds
Automatically switches scene + particles for clear, clouds, rain, thunderstorm, snow, mist/fog and night.

### Animations
Fade, slide, scale, ripple, floating icons, animated numbers, skeleton loading, shimmer, hover lift, button and card animations — all 60 FPS and disabled under `prefers-reduced-motion`.

### States
Empty/welcome screen with popular-city shortcuts, skeleton loading, spinner, disabled buttons, and full error handling (city not found, network, offline, rate limit, invalid key, GPS denied, server).

### Extra features
Weather comparison (two cities side by side), share, copy, download as PDF, download as PNG, print, weather alerts, real-time clock, sunrise/sunset countdown, interactive OpenWeatherMap map (temperature / rain / wind / clouds layers), wind compass, voice weather summary (text-to-speech), multi-language and installable PWA.

### Accessibility
Semantic HTML5, ARIA labels and roles, full keyboard navigation, high-contrast support, screen-reader-friendly live regions, reduced-motion support and visible focus states.

### Security
The API key lives only in `js/config.js` (or a local `.env` file). All user input is sanitized before use, and every API failure is caught and mapped to a typed error.

---

## Screenshots

Add screenshots to the `screenshots/` folder and reference them here:

```
1. screenshots/desktop.png   — Full dashboard on desktop
2. screenshots/mobile.png    — Responsive mobile view
3. screenshots/charts.png    — Interactive charts
4. screenshots/settings.png  — Settings panel
```

---

## Folder Structure

```
weather-dashboard/
├── index.html
├── README.md
├── favicon.svg
├── manifest.json
├── robots.txt
├── sitemap.xml
├── package.json
├── vite.config.js
├── .env.example
├── css/
│   ├── variables.css
│   ├── animations.css
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── ui.js
│   ├── helpers.js
│   ├── storage.js
│   ├── chart.js
│   ├── animation.js
│   └── config.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── backgrounds/
├── public/
│   ├── sw.js
│   ├── offline.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   ├── icon-192.svg
│   └── icon-512.svg
└── screenshots/
```

---

## Technologies Used

| Area | Technology |
|------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, glassmorphism) |
| Logic | Vanilla JavaScript (ES6 modules) |
| Weather data | OpenWeatherMap One Call API 3.0 + Air Pollution + Geocoding |
| Charts | Chart.js 4 (CDN) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Google Fonts — Inter |
| PWA | Service Worker + Cache API + Web App Manifest |
| Build/dev | Vite (optional — the app also runs on any static server) |

---

## How to Get an API Key

1. Go to <https://home.openweathermap.org/users/sign_up> and create a free account.
2. Navigate to **API keys** at <https://home.openweathermap.org/api_keys>.
3. Generate a new key. Free keys activate within ~10 minutes.
4. Subscribe to **One Call by Call** (free tier includes 1,000 calls/day) — required for One Call API 3.0.

---

## How to Configure config.js

Open `js/config.js` and replace the placeholder:

```js
export const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

**Recommended — use an environment variable instead of hardcoding:**

1. Copy `.env.example` to `.env` in the project root.
2. Edit `.env`:
   ```
   VITE_OPENWEATHER_API_KEY=your_real_key_here
   ```
3. Vite injects it as `import.meta.env.VITE_OPENWEATHER_API_KEY`, which `config.js` reads automatically.

> Without a valid key the app runs in **demo mode** with realistic sample data so you can explore every feature.

### Security note
For production, proxy requests through a server or edge function so the key never ships in the client bundle. The current setup is fine for portfolios, demos and interviews.

---

## How to Run the Project

### Option A — Vite (recommended)

```bash
npm install
npm run dev
```

Open the printed URL (default <http://localhost:5173>).

### Option B — VS Code Live Server

1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

### Option C — Any static server (no Live Server)

Because the app uses ES6 modules, you must serve it over HTTP (not `file://`).

```bash
# Python 3
python3 -m http.server 8000

# Node (no install)
npx serve .
```

Then open <http://localhost:8000>.

---

## Deployment Instructions

### GitHub Pages

1. Push the project to a GitHub repository.
2. Run `npm run build` and push the `dist/` folder (or use the root if you skip Vite).
3. Repository **Settings → Pages → Source → Deploy from branch**, select `main` and `/dist` (or root).
4. Your dashboard is live at `https://<username>.github.io/<repo>/`.

### Netlify

1. Drag the project folder (or `dist/`) onto <https://app.netlify.com/drop>, or connect the repo.
2. Build command: `npm run build` · Publish directory: `dist`.
3. Add `VITE_OPENWEATHER_API_KEY` under **Site settings → Environment variables**.

### Vercel

1. Import the repo at <https://vercel.com/new>.
2. Framework preset: **Vite** (or "Other" for static).
3. Add `VITE_OPENWEATHER_API_KEY` under **Environment Variables**.
4. Deploy.

> For all three, set the base path correctly if the app is not served from the domain root. `vite.config.js` already uses `base: "./"` so relative paths work on sub-paths.

---

## Browser Compatibility

Tested on the latest versions of Chrome, Firefox, Edge, Safari and Opera, plus Android Chrome and iOS Safari. Voice search and TTS depend on browser support and gracefully degrade with a toast message when unavailable.

---

## License

MIT © 2026 Weather Dashboard. Free to use for portfolios, learning and commercial projects.

---

## Future Improvements

- Server-side API key proxy for production security.
- Push notifications for severe weather alerts.
- Radar animation layer (tile-based timelapse).
- More languages and full UI localisation of every label.
- Unit tests for `helpers.js` and `api.js`.
- Map widgets for temperature, rain, wind and clouds with click-to-inspect.
