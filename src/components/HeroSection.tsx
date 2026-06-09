import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { FloatingDoodles } from "./SketchElements";
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

  const metrics = [
    { value: "70%", label: "less manual review" },
    { value: "3-5x", label: "more policies/day" },
    { value: "<5m", label: "risk scoring" },
  ];

  const systemCards = [
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Agentic workflows",
      copy: "LangGraph systems that actually ship.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Production evals",
      copy: "Reliability across OCR, retrieval, and LLM output.",
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "Outcome obsessed",
      copy: "Latency, cost, accuracy, and user workflow wins.",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden pt-28 pb-16">
      <FloatingDoodles />

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-[0.09] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 grid-glow opacity-25" />

      {/* Content */}
      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">
                <Sparkles className="h-4 w-4" />
                {site.role}
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-[0.86]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block">AI systems</span>
              <span className="block text-primary">that survive</span>
              <span className="block">real users.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              I'm <span className="text-foreground font-semibold">{site.name}</span> — a
              forward deployed AI engineer embedding with teams to turn messy workflows into
              <span className="text-primary font-semibold"> production-grade agentic products</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-7 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card/80 px-4 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                {site.location}
              </span>
              <span className="rounded-full border-2 border-border bg-card/80 px-4 py-2">
                RAG · Agents · Evals · Product
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
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
                See the Work
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-9"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="p-3 rounded-full border-2 border-foreground bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="glass-card p-5 md:p-6"
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="relative z-10 space-y-4">
              <div className="rounded-[1.35rem] border-2 border-foreground bg-foreground text-background shadow-[8px_8px_0px_0px_hsl(var(--primary))]">
                <div className="flex items-center justify-between border-b border-background/15 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-background/60">agent-command-center.ts</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <p className="text-background/55">const mission = &#123;</p>
                  <p><span className="text-orange-300">role</span>: "Forward Deployed AI Engineer",</p>
                  <p><span className="text-orange-300">mode</span>: "100% AI-Native",</p>
                  <p><span className="text-orange-300">ships</span>: ["RAG", "Agents", "Evals"],</p>
                  <p><span className="text-orange-300">output</span>: "less manual work, better decisions"</p>
                  <p className="text-background/55">&#125;</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card text-center">
                    <p className="text-3xl font-display font-bold text-primary">{metric.value}</p>
                    <p className="text-[0.72rem] text-muted-foreground leading-tight">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                {systemCards.map((card) => (
                  <div key={card.title} className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card/80 p-4">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">{card.icon}</div>
                    <div>
                      <p className="font-semibold">{card.title}</p>
                      <p className="text-sm text-muted-foreground">{card.copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-foreground/25 bg-secondary/60 p-4 text-sm text-foreground">
                <Terminal className="h-4 w-4 shrink-0" />
                Currently building AI products where prompts meet product judgment.
              </div>
            </div>
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
