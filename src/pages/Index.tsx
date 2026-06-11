import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      <main className="notebook-stack">
        <section id="home" className="notebook-page notebook-page-hero">
          <HeroSection />
        </section>
        
        <section id="about" className="notebook-page page-fold">
          <AboutSection />
        </section>
        
        <section id="projects" className="notebook-page page-fold">
          <ProjectsSection />
        </section>
        
        <section id="experience" className="notebook-page page-fold">
          <ExperienceSection />
        </section>
        
        <section id="contact" className="notebook-page page-fold">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="notebook-page page-fold py-12 px-4 bg-card border-t-2 border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="sketch-divider mb-8 max-w-md mx-auto" />
          <p className="font-display text-2xl text-primary font-bold">Shashank Nallabothu</p>
          <p className="text-sm text-muted-foreground mt-1">
            Forward Deployed AI Engineer · Detroit, Michigan
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Made with ❤️ and lots of ☕ · © {new Date().getFullYear()} Shashank Nallabothu
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
