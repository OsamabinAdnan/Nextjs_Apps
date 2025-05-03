# Tip Calculator

A modern, responsive tip calculator built with Next.js, TypeScript, and Framer Motion. This application helps users calculate tips and split bills among multiple people with an elegant user interface.

![Live Demo](https://your-demo-link-here.com) 

## Features

- 💰 Calculate tips with custom percentage or quick selections
- 👥 Split bills among multiple people
- 🎨 Modern, responsive UI with smooth animations
- 🌓 Dark/Light mode support
- ✨ Interactive UI elements with hover effects
- ⚡ Real-time calculations
- 🔄 Reset functionality
- ❌ Input validation with error messages
- 🎆 Dynamic 3D particle background animation

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **3D Graphics:** Three.js with @react-three/fiber & @react-three/drei
- **State Management:** React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/osamabinadnan/tip-calculator.git
```

2. Navigate to the project directory:
```bash
cd tip-calculator
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

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Enter the bill amount in the "Bill Amount" field
2. Select a tip percentage using the quick selection buttons or enter a custom percentage
3. Enter the number of people splitting the bill
4. Click "Calculate" to see the results
5. Use "Reset" to clear all inputs and start over

## Features in Detail

### Animated 3D Background
- Stunning particle field animation created with Three.js
- Multiple color groups with seamless blending
- Dynamic rotation and movement patterns
- Optimized performance with:
  - Memoized particle positions
  - Efficient rendering using Points geometry
  - Frustum culling optimization
  - Depth write disabled for better particle blending
- Customizable parameters:
  - Particle count (default: 3000)
  - Color schemes
  - Animation speed
  - Particle size
  - Rotation factors

### Bill Amount Input
- Accepts decimal numbers
- Validates for negative values
- Real-time error feedback

### Tip Selection
- Quick selection buttons for common tip percentages (10%, 15%, 20%, 25%)
- Custom tip percentage input option
- Validation for negative values

### People Split
- Minimum value of 1 person
- Input validation
- Automatic per-person calculation

### Results Display
- Shows tip amount per person
- Displays total amount per person
- Additional group total shown when splitting between multiple people
- Animated appearance/disappearance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei)

## Contact

Name - [@yourlinkedin](https://linkedin.com/osamabinadnan)

Project Link: [https://github.com/osamabinadnan/tip-calculator](https://github.com/osamabinadnan/tip-calculator)

---

Made with ❤️ by [Your Name]