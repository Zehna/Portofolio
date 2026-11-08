import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import { TechStackSection } from "@/components/TechStackSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BentoGrid />
        <TechStackSection />
      </main>
      <Footer />
    </div>
  );
}
