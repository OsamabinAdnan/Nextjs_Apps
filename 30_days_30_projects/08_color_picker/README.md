# Color Picker Web Application

A sleek and modern color picker built with Next.js, offering real-time color format conversion and an intuitive user interface.

## Live Demo
🔗 [View Demo]() <!-- Add your deployment link here -->

## Features
- 🎨 Interactive color selection
- 🔄 Real-time color format conversion (HEX/RGB/HSL)
- 📋 Quick copy-to-clipboard functionality
- 🌓 Dark/Light theme toggle
- 🌈 Dynamic background gradient
- 📱 Responsive design
- 🚀 Fast and lightweight

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui
- React Hot Toast

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/color-picker.git
cd color-picker
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open browser at `http://localhost:3000`

## Project Structure
```
08_color_picker/
├── components/
│   ├── color_picker.tsx
│   ├── Theme_Toggle.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── app/
│   └── page.tsx
└── README.md
```

## Usage
1. Use the color input field to select a color
2. Switch between color formats using HEX/RGB/HSL buttons
3. Click "Copy to Clipboard" to copy the current color value
4. Toggle between light/dark themes using the theme switch

## Key Features Explained

### Color Formats
The app supports three color formats:
- **HEX**: Standard 6-digit hexadecimal color code (e.g., #FF5733)
- **RGB**: Red, Green, Blue values (e.g., rgb(255, 87, 51))
- **HSL**: Hue, Saturation, Lightness values (e.g., hsl(12, 100%, 60%))

### Theme Toggle
- Seamlessly switch between light and dark modes
- Theme preference is saved in local storage
- UI elements automatically adjust to current theme

### Responsive Design
- Adapts to different screen sizes
- Mobile-friendly interface
- Smooth animations and transitions

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/color-picker](https://github.com/yourusername/color-picker)

---

Built with ❤️ using Next.js and TypeScript