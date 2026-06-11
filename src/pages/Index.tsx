import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import NotebookPage from "@/components/NotebookPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      <main className="notebook-stack">
        <NotebookPage id="home" fold={false}>
          <HeroSection />
        </NotebookPage>

        <NotebookPage id="about">
          <AboutSection />
        </NotebookPage>

        <NotebookPage id="projects">
          <ProjectsSection />
        </NotebookPage>

        <NotebookPage id="experience">
          <ExperienceSection />
        </NotebookPage>

        <NotebookPage id="contact">
          <ContactSection />
        </NotebookPage>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t-2 border-border">
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
