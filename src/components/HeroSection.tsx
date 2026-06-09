import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingDoodles, SketchArrow } from "./SketchElements";
import { site, buildMailto } from "@/lib/site";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { href: buildMailto({ subject: "Let's connect!" }), icon: Mail, label: "Email" },
    { href: site.github, icon: Github, label: "GitHub" },
    { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      <FloatingDoodles />

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" />
              {site.role}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block text-foreground">Hey, I'm</span>
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, type: "spring", stiffness: 90 }}
            >
              Shashank Nallabothu
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I embed with teams to ship
              <span className="text-foreground font-semibold"> AI-powered products</span> that solve
              <span className="text-primary font-semibold"> real, messy, real-world problems</span> — RAG pipelines, multi-agent systems & production-grade LLM apps. ✨
            </p>

            <SketchArrow className="-right-4 top-0 hidden md:block" />
          </motion.div>

          {/* Location pill */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Based in {site.location}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-sketch-primary text-lg px-8 py-4"
            >
              <Download className="h-5 w-5" />
              View Resume
            </a>
            <button onClick={scrollToProjects} className="btn-sketch text-lg px-8 py-4">
              View My Work
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
          >
            {socials.map(({ href, icon: Icon, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="p-3 rounded-full border-2 border-foreground bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProjects}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
