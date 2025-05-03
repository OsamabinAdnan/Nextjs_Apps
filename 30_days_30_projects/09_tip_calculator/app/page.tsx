import ThemeToggle from "@/components/Theme_Toggle";
import ThreeBackground from "@/components/ThreeBackground";
import TipCalculator from "@/components/tip-calculator";


export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ThreeBackground/>
        <ThemeToggle/>
        <TipCalculator/>
      </main>
    
    </>
  );
}
