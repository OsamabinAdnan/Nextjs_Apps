import GeneratePassword from '@/components/password-generator';
import ThemeToggle from '@/components/theme-toggle';


export default function Home() {
  return (
    <>
        <main className="relative z-10">
          <ThemeToggle/>
          <GeneratePassword />
        </main>
      
    </>

  );
}
