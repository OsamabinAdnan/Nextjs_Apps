# Random Joke Generator 😂

A fun and interactive Random Joke Generator built with Next.js and TypeScript. Get ready to laugh with random jokes fetched from an external API!

## 🌟 Features

- **Random Jokes**: Fetches random jokes from a public API
- **Interactive UI**: Clean and responsive user interface
- **Loading States**: Smooth loading transitions
- **Error Handling**: Graceful error management
- **Responsive Design**: Works perfectly on all devices
- **TypeScript Support**: Full type safety
- **3D Background**: Immersive starry background effect

## 🚀 Live Demo

[Live Demo](https://random-joke-generator-osamabinadnan.vercel.app/) 

## 🛠️ Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Three Fiber
- Drei
- Shadcn UI Components

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
cd random-joke-generator
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

- The application loads with an initial random joke
- Click the "Get Another Joke" button to fetch a new joke
- Enjoy the interactive 3D background while reading jokes!

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Random_Joke.tsx    # Main joke generator component
│   ├── Background3D.tsx   # 3D background component
│   └── ui/               # UI components
├── lib/
│   └── utils.ts         # Utility functions
└── public/             # Static assets
```

## 🎨 Features to Add

- [ ] Add categories for jokes
- [ ] Implement joke saving functionality
- [ ] Add share buttons for social media
- [ ] Include dark/light theme toggle
- [ ] Add animation effects

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](YOUR_ISSUES_LINK_HERE).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👏 Acknowledgments

- Jokes API: [Official Joke API](https://official-joke-api.appspot.com)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)

