import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonSection from "@/components/HackathonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SolarSystem from "@/components/SolarSystem";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <SolarSystem />
      
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        
        <main className="flex-1 w-full">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <HackathonSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
