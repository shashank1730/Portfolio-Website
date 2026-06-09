import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import { site } from "@/lib/site";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [{
    id: 'home',
    icon: <Home className="h-4 w-4" />,
    label: 'Home'
  }, {
    id: 'about',
    icon: <User className="h-4 w-4" />,
    label: 'About'
  }, {
    id: 'projects',
    icon: <FolderOpen className="h-4 w-4" />,
    label: 'Projects'
  }, {
    id: 'experience',
    icon: <Briefcase className="h-4 w-4" />,
    label: 'Experience'
  }, {
    id: 'contact',
    icon: <Mail className="h-4 w-4" />,
    label: 'Contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="flex items-center gap-1 bg-card/85 backdrop-blur-md border-2 border-border rounded-full px-3 py-2 shadow-card">
          {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === item.id ? 'bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_hsl(var(--sketch-dark))]' : 'hover:bg-primary/10 text-foreground'}`}>
              {item.icon}
              <span>{item.label}</span>
            </button>)}
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-6 right-6 z-50 lg:hidden p-3 bg-card border-2 border-border rounded-full shadow-card">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 right-6 bg-card border-2 border-border rounded-2xl shadow-card p-4 space-y-2">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeSection === item.id ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10 text-foreground'}`}>
                {item.icon}
                <span>{item.label}</span>
              </button>)}
          </div>
        </div>}

      {/* Signature */}
      <div className="fixed bottom-6 left-6 z-50 hidden sm:block">
        <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl px-4 py-2 shadow-card">
          <p className="font-sketch text-xl font-bold text-primary leading-none">{site.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{site.role}</p>
        </div>
      </div>
    </>;
};
export default Navigation;