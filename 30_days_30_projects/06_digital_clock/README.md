# 🕒 Digital Clock with Vanta.js Animated Background

A responsive, real-time digital clock built with **Next.js**, **React**, **Tailwind CSS**, and **Vanta.js**. It features animated backgrounds using WebGL and allows toggling between 12-hour and 24-hour time formats.

---

## 🔗 Live Demo

[🌐 Click here to view the live demo](https://your-live-demo-link.com)

> Replace the link above with your actual deployed URL (e.g., Vercel, Netlify)

---

## 📸 Screenshot

![Preview](Public/screenshot.png)

> Replace with a screenshot of your app

---

## ✨ Features

- ⏱️ Real-time digital clock (updates every second)
- 🌓 Toggle between **12-hour** and **24-hour** formats
- 🌌 Dynamic animated background using **Vanta.js**
- 💅 Elegant glassmorphism card with blurred background
- 🎯 Built with **Next.js 13+ App Router**
- 🔧 Developed using **React**, **Tailwind CSS**, and **TypeScript**
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology   | Description                          |
|--------------|--------------------------------------|
| Next.js      | React framework for server/client apps |
| React        | UI library for building interfaces    |
| Tailwind CSS | Utility-first CSS framework           |
| Vanta.js     | Animated WebGL backgrounds            |
| Three.js     | Required by Vanta.js                  |
| TypeScript   | Typed superset of JavaScript          |

---

## 🚀 Getting Started

### 📦 Clone the repo

```bash
git clone https://github.com/yourusername/digital-vanta-clock.git
cd digital-vanta-clock
```

### 🧰 Install dependencies

```bash
npm install
# or
yarn install
```

### 🧪 Run the development server

```bash
npm run dev
# or
yarn dev
```

Open your browser at http://localhost:3000

### 📂 File Structure

.
├── app/
│   └── page.tsx              # Main page with clock
├── components/
│   ├── DigitalClock.tsx      # Clock logic and Vanta background
│   ├── ui/
│   │   ├── button.tsx        # Reusable Button
│   │   └── card.tsx          # Reusable Card
│   └── vanta.d.ts            # Vanta module declaration for TS
├── public/                   # Static assets
├── styles/                   # Tailwind base styles
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # You're here

### 🌏 Live Demo

**[Digital Clock Live](https://digital-clock-osamabinadnan.vercel.app/)**

### 📄 License

MIT License.
Free for personal and commercial use. Attribution appreciated.

