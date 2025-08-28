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
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t-2 border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="sketch-divider mb-8" />
          <p className="font-handwritten text-muted-foreground">
            Made with ❤️ and lots of ☕ by Shashank Nallabothu
          </p>
          <p className="font-handwritten text-sm text-muted-foreground mt-2">
            © 2024 Shashank Nallabothu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
