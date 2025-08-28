import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FloatingDoodles, SketchArrow } from "./SketchElements";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingDoodles />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-sketch font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block sketch-underline"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hey, I'm
            </motion.span>
            <motion.span 
              className="block text-primary animate-sketch-bounce"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            >
              Shashank Nallabothu
            </motion.span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-handwritten max-w-2xl mx-auto">
              Full Stack AI Engineer with 5+ years of experience creating 
              <span className="text-primary font-semibold"> AI-powered applications that solve real-world problems</span> ✨
            </p>
            
            {/* Sketch Doodle Arrow */}
            <SketchArrow className="-right-4 top-0 hidden md:block" />
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-sketch-primary text-lg px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-sketch text-lg px-8 py-4">
                View My Work
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { href: "mailto:nallabothushashank125@gmail.com", icon: Mail },
              { href: "https://github.com/shashank1730", icon: Github },
              { href: "https://linkedin.com/in/shashank1730", icon: Linkedin }
            ].map(({ href, icon: Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                className="p-3 rounded-full border-2 border-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 sketch-underline"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;