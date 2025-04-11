# Magic Calculator

A modern, interactive calculator built with Next.js, TypeScript, and Tailwind CSS featuring dark mode support and smooth animations.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Input Validation**: Comprehensive error checking for calculations
- **Smooth Animations**: Pleasant user experience with fluid transitions
- **Keyboard Support**: Use number keys and operators for quick calculations
- **Error Handling**: Clear error messages for invalid operations
- **Accessible**: Built with accessibility in mind using ARIA labels

## 🛠️ Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Lucide Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OsamabinAdnan/Nextjs_Apps/tree/main/30_days_30_projects/05_simple_calculator.git
```

2. Navigate to project directory:
```bash
cd 05_simple_calculator
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit:
```
http://localhost:3000
```

## 💻 Usage

1. Enter the first number in the "First Number" input field
2. Enter the second number in the "Second Number" input field
3. Click on an operation button (+, -, ×, ÷) to perform the calculation
4. View the result in the result field
5. Use the "Clear All" button to reset the calculator

### Keyboard Shortcuts

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `Enter` : Perform addition
- `Escape` : Clear all inputs

## 🎨 Customization

### Themes
The calculator supports both light and dark modes. Click the theme toggle button in the top-right corner to switch between themes.

### Styling
The UI is built with Tailwind CSS and can be customized by modifying the classes in the component files.

## 🔧 Component Structure

```typescript
Calculator/
├── calculator.tsx      // Main calculator component
├── ui/                 // UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── label.tsx
```

## 🚦 Error Handling

The calculator includes comprehensive error handling for:
- Empty inputs
- Invalid numbers
- Division by zero
- Calculation errors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Live Demo
[Simple Calculator](https://standard-calculator-osamabinadnan.vercel.app/)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/OsamabinAdnan/Nextjs_Apps/tree/main/30_days_30_projects/05_simple_calculator](https://github.com/OsamabinAdnan/Nextjs_Apps/tree/main/30_days_30_projects/05_simple_calculator)