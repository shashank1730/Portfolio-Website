import { useState } from "react";
import {
  ExternalLink,
  Github,
  Lock,
  TrendingUp,
} from "lucide-react";
import { buildMailto } from "@/lib/site";

type VisualVariant =
  | "loan"
  | "insurance"
  | "resume"
  | "vault"
  | "youtube"
  | "portal"
  | "maintenance"
  | "dashboard"
  | "road";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  visual: VisualVariant;
  impact: string;
  kind: "Work" | "Personal";
  liveUrl?: string;
  githubUrl?: string;
  confidential?: boolean;
};

const ProjectVisual = ({ variant }: { variant: VisualVariant }) => {
  const nodeClass =
    "rounded-xl border-2 border-foreground bg-card shadow-[3px_3px_0px_0px_hsl(var(--border))]";
  const accentNode = "rounded-xl border-2 border-primary bg-primary text-primary-foreground";
  const connector = "h-0.5 flex-1 border-t-2 border-dashed border-foreground/35";

  const visuals: Record<VisualVariant, JSX.Element> = {
    loan: (
      <div className="relative flex h-full items-center justify-center px-7">
        <div className={`${nodeClass} w-16 rotate-[-5deg] p-3 transition-transform duration-300 group-hover:-translate-y-1`}>
          <div className="mb-2 h-2 w-8 rounded bg-foreground/70" />
          <div className="space-y-1">
            <div className="h-1.5 rounded bg-border" />
            <div className="h-1.5 rounded bg-border" />
            <div className="h-1.5 w-8 rounded bg-border" />
          </div>
        </div>
        <div className={connector} />
        <div className={`${accentNode} grid h-16 w-16 place-items-center font-display text-3xl font-bold transition-transform duration-300 group-hover:scale-110`}>
          AI
        </div>
        <div className={connector} />
        <div className={`${nodeClass} w-20 rotate-[4deg] p-3 transition-transform duration-300 group-hover:-translate-y-1`}>
          {["OCR", "Docs", "Ready"].map((item) => (
            <div key={item} className="mb-1.5 flex items-center gap-1.5 text-[0.62rem] font-bold">
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-primary text-[0.5rem] text-primary-foreground">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    insurance: (
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full border-2 border-dashed border-foreground/30 transition-transform duration-500 group-hover:rotate-45" />
        <div className="absolute h-14 w-14 rounded-full border-2 border-primary/60" />
        <div className={`${accentNode} z-10 grid h-14 w-14 place-items-center font-display text-2xl font-bold`}>Risk</div>
        <div className={`${nodeClass} absolute left-8 top-7 px-3 py-2 text-xs font-bold transition-transform duration-300 group-hover:-translate-x-1`}>Policy</div>
        <div className={`${nodeClass} absolute right-8 top-9 px-3 py-2 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1`}>Vision</div>
        <div className={`${nodeClass} absolute bottom-7 px-3 py-2 text-xs font-bold transition-transform duration-300 group-hover:translate-y-1`}>Claims</div>
      </div>
    ),
    resume: (
      <div className="relative flex h-full items-center justify-center gap-4 px-7">
        <div className="relative h-24 w-20">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`${nodeClass} absolute h-20 w-16 p-2 transition-transform duration-300 group-hover:-translate-y-1`}
              style={{ left: i * 8, top: i * 5, transform: `rotate(${i * 4 - 5}deg)` }}
            >
              <div className="mb-2 h-2 w-8 rounded bg-foreground/70" />
              <div className="space-y-1">
                <div className="h-1.5 rounded bg-border" />
                <div className="h-1.5 rounded bg-border" />
                <div className="h-1.5 w-7 rounded bg-border" />
              </div>
            </div>
          ))}
        </div>
        <div className={connector} />
        <div className={`${nodeClass} w-24 p-3`}>
          <p className="mb-2 text-xs font-bold">Fit score</p>
          {[92, 84, 71].map((width) => (
            <div key={width} className="mb-1.5 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-primary transition-all duration-500 group-hover:w-full" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
    ),
    vault: (
      <div className="relative flex h-full items-center justify-center gap-4">
        <div className={`${nodeClass} h-24 w-24 rounded-full p-3 transition-transform duration-500 group-hover:rotate-12`}>
          <div className="grid h-full place-items-center rounded-full border-2 border-foreground">
            <div className="h-8 w-8 rounded-full border-2 border-primary" />
          </div>
        </div>
        <div className="space-y-2">
          {["Admin", "Legal", "Sales"].map((role) => (
            <div key={role} className={`${role === "Legal" ? accentNode : nodeClass} px-3 py-1.5 text-xs font-bold`}>
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    youtube: (
      <div className="relative flex h-full items-center justify-center gap-4 px-6">
        <div className={`${nodeClass} w-28 p-2`}>
          <div className="grid h-16 place-items-center rounded-xl border-2 border-foreground bg-foreground">
            <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary" />
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-1.5 rounded bg-border" />
            <div className="h-1.5 w-14 rounded bg-border" />
          </div>
        </div>
        <div className={connector} />
        <div className={`${accentNode} w-24 p-3 text-center text-xs font-bold transition-transform duration-300 group-hover:-rotate-3`}>
          Summary
          <div className="mt-2 space-y-1">
            <div className="h-1.5 rounded bg-primary-foreground/70" />
            <div className="h-1.5 rounded bg-primary-foreground/70" />
          </div>
        </div>
      </div>
    ),
    portal: (
      <div className="relative flex h-full items-center justify-center px-7">
        <div className={`${nodeClass} w-44 p-3 transition-transform duration-300 group-hover:-translate-y-1`}>
          <div className="mb-3 flex gap-1">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-foreground/30" />
            <span className="h-2 w-2 rounded-full bg-foreground/30" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`h-8 rounded-lg border border-border ${i === 2 ? "bg-primary" : "bg-secondary"}`} />
            ))}
          </div>
        </div>
        <div className={`${accentNode} absolute right-9 top-7 px-3 py-1.5 text-xs font-bold`}>Match</div>
      </div>
    ),
    maintenance: (
      <div className="relative flex h-full items-center justify-center gap-4 px-7">
        <div className={`${nodeClass} grid h-24 w-24 place-items-center`}>
          <div className="h-12 w-14 rounded-xl border-2 border-foreground bg-secondary" />
          <div className="absolute mt-16 flex gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-foreground bg-card" />
            <span className="h-3 w-3 rounded-full border-2 border-foreground bg-card" />
          </div>
        </div>
        <svg viewBox="0 0 120 55" className="h-20 w-32 overflow-visible">
          <path d="M4 35 C18 35 18 12 32 12 S48 48 62 48 S76 18 90 18 S104 35 116 35" fill="none" stroke="hsl(var(--foreground))" strokeWidth="4" strokeLinecap="round" />
          <circle cx="91" cy="18" r="6" fill="hsl(var(--primary))" className="transition-transform duration-300 group-hover:scale-125" />
        </svg>
      </div>
    ),
    dashboard: (
      <div className="relative flex h-full items-center justify-center px-7">
        <div className={`${nodeClass} w-44 p-3`}>
          <div className="mb-3 h-3 w-20 rounded bg-foreground/70" />
          <div className="grid grid-cols-4 items-end gap-2">
            {[34, 52, 28, 70].map((height, i) => (
              <div key={height} className={`${i === 3 ? "bg-primary" : "bg-foreground"} rounded-t-lg transition-all duration-500 group-hover:h-20`} style={{ height }} />
            ))}
          </div>
        </div>
      </div>
    ),
    road: (
      <div className="relative flex h-full items-center justify-center">
        <div className="relative h-28 w-44 overflow-hidden rounded-2xl border-2 border-foreground bg-card">
          <div className="absolute inset-x-8 top-0 h-full skew-x-[-12deg] bg-foreground" />
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-card/80 [background-image:linear-gradient(to_bottom,transparent_0_12px,hsl(var(--primary))_12px_24px)]" />
          <div className="absolute left-4 top-4 h-8 w-8 rounded-lg border-2 border-primary bg-primary/20 transition-transform duration-300 group-hover:translate-x-4" />
          <div className="absolute bottom-4 right-5 h-7 w-10 rounded-lg border-2 border-primary bg-primary/20 transition-transform duration-300 group-hover:-translate-x-4" />
        </div>
      </div>
    ),
  };

  return visuals[variant];
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI Agents", "RAG", "Full Stack", "ML & Vision"];

  const projects: Project[] = [
    {
      title: "AI Mortgage Loan Processing",
      description:
        "Built AI agents that automate loan readiness — OCR, document classification, and checklist validation. Added a prompt-tuning framework that turns plain-language rules (e.g. 'exclude bonus income') into structured validation logic.",
      tags: ["LLMs", "OCR", "Prompt Tuning", "Evals"],
      category: "AI Agents",
      visual: "loan",
      impact: "End-to-end loan automation",
      kind: "Work",
      confidential: true,
    },
    {
      title: "Multi-Agent Insurance Underwriting",
      description:
        "Orchestrated a multi-agent system for underwriting, claims, and policy verification. A Vision-Language agent scores property risk from Zillow / Street View imagery; a RAG agent cross-validates hundreds of policies in real time.",
      tags: ["LangGraph", "Vision-Language", "Chroma", "Groq"],
      category: "AI Agents",
      visual: "insurance",
      impact: "~70% less manual review",
      kind: "Work",
      confidential: true,
    },
    {
      title: "AI Resume Screening Portal",
      description:
        "Agentic pipeline that screens 1,000+ resumes per posting with locally-hosted LLMs, plus a Next.js portal giving HR instant fit-scores and reasoning reports with section-wise RAG retrieval.",
      tags: ["Next.js", "LangGraph", "ChromaDB", "RAG"],
      category: "Full Stack",
      visual: "resume",
      impact: "65% faster HR review",
      kind: "Work",
      confidential: true,
    },
    {
      title: "VaultRAG — Role-Aware AI Assistant",
      description:
        "A secure, open-source RAG system on self-hosted LLMs with strict Role-Based Access Control — it embeds and retrieves only role-authorized documents and surfaces answer sources as clear file cards.",
      tags: ["FastAPI", "ChromaDB", "Ollama", "RBAC"],
      category: "RAG",
      visual: "vault",
      impact: "Compliant, self-governed AI",
      kind: "Personal",
      githubUrl: "https://github.com/shashank1730",
    },
    {
      title: "LLM YouTube Summarizer Extension",
      description:
        "Real-time video summarization powered by Ollama with FastAPI transcript ingestion. Modular ReAct-style agents via LangGraph, Pydantic-validated routing, and LangSmith observability for debugging chains.",
      tags: ["LangGraph", "FastAPI", "LangSmith", "Ollama"],
      category: "RAG",
      visual: "youtube",
      impact: "20% faster responses",
      kind: "Personal",
      githubUrl: "https://github.com/shashank1730",
    },
    {
      title: "Smart Submission Portal",
      description:
        "Academic conference platform that streamlines paper submissions with automatic reviewer assignment by expertise, a secure payment gateway, and real-time live chat — designed in Figma, deployed on AWS.",
      tags: ["React.js", "Node.js", "MySQL", "AWS"],
      category: "Full Stack",
      visual: "portal",
      impact: "Reviewer auto-matching",
      kind: "Personal",
      githubUrl: "https://github.com/shashank1730",
    },
    {
      title: "Predictive Maintenance System",
      description:
        "Ensemble ML anomaly detection on factory-floor signals to catch failures early, with backend APIs for M2M / RFID tracking across 20+ machines to eliminate manual logging errors.",
      tags: ["Anomaly Detection", "RFID", "Python", "React"],
      category: "ML & Vision",
      visual: "maintenance",
      impact: "−30% unplanned downtime",
      kind: "Work",
      confidential: true,
    },
    {
      title: "Live Machine Monitoring Dashboards",
      description:
        "Real-time React dashboards running on Raspberry Pi across 50+ machines, centralizing production data, plus C-level Grafana dashboards for instant decisions on capacity and workflow.",
      tags: ["React.js", "Grafana", "Raspberry Pi", "Linux"],
      category: "Full Stack",
      visual: "dashboard",
      impact: "50+ machines monitored",
      kind: "Work",
      confidential: true,
    },
    {
      title: "Semantic Segmentation for Roads",
      description:
        "Real-time traffic-scene segmentation with a U-Net encoder-decoder for pixel-level understanding, refined with K-means clustering for sharper object boundaries — groundwork for ADAS.",
      tags: ["U-Net", "PyTorch", "Scikit-Learn", "Computer Vision"],
      category: "ML & Vision",
      visual: "road",
      impact: "Pixel-level scene parsing",
      kind: "Personal",
      githubUrl: "https://github.com/shashank1730",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-24 px-4">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="eyebrow mb-4">My Work</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">
            Things I've built & shipped
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
            Production AI systems and side projects — from multi-agent platforms to RAG apps and computer vision.
          </p>
          <div className="sketch-divider max-w-md mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-card rounded-2xl border-2 border-border shadow-sketch">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_hsl(var(--sketch-dark))]"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="sketch-card group flex flex-col p-0 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Header band */}
              <div className="relative h-40 border-b-2 border-border bg-[linear-gradient(90deg,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(hsl(var(--secondary))_1px,transparent_1px)] bg-[size:18px_18px]">
                <ProjectVisual variant={project.visual} />
                <span className="absolute top-3 left-3 chip bg-card border-border text-foreground">
                  {project.kind}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-card px-2.5 py-1 rounded-full border border-border">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  {project.impact}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <h3 className="text-2xl font-display font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="chip chip-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer actions */}
                <div className="flex items-center gap-3 pt-2">
                  {project.confidential ? (
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Lock className="h-3.5 w-3.5" />
                      Proprietary — built on the job
                    </span>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="sketch-card max-w-2xl mx-auto p-8 bg-card border-foreground">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 text-primary">
              Got an idea? Let's build it 🚀
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always up for turning a wild idea into a shipped product.
            </p>
            <a
              href={buildMailto({
                subject: "Let's collaborate!",
                body: "Hi Shashank,\n\nI'd love to build something together. Here's what I have in mind:\n",
              })}
              className="btn-sketch-primary text-lg px-8 py-4"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
