import { useState } from "react";
import { ExternalLink, Github, Lock, TrendingUp } from "lucide-react";
import { buildMailto } from "@/lib/site";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  emoji: string;
  gradient: string;
  impact: string;
  kind: "Work" | "Personal";
  liveUrl?: string;
  githubUrl?: string;
  confidential?: boolean;
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
      emoji: "🏦",
      gradient: "from-orange-500/20 to-amber-400/10",
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
      emoji: "🛡️",
      gradient: "from-sky-500/20 to-cyan-400/10",
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
      emoji: "📄",
      gradient: "from-violet-500/20 to-fuchsia-400/10",
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
      emoji: "🔐",
      gradient: "from-emerald-500/20 to-teal-400/10",
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
      emoji: "▶️",
      gradient: "from-rose-500/20 to-orange-400/10",
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
      emoji: "📝",
      gradient: "from-indigo-500/20 to-blue-400/10",
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
      emoji: "🏭",
      gradient: "from-amber-500/20 to-yellow-400/10",
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
      emoji: "📊",
      gradient: "from-teal-500/20 to-green-400/10",
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
      emoji: "🛣️",
      gradient: "from-slate-500/20 to-cyan-400/10",
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
      <div className="container mx-auto max-w-6xl">
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
              <div
                className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  {project.emoji}
                </span>
                <span className="absolute top-3 left-3 chip bg-card/80 backdrop-blur-sm border-border text-foreground">
                  {project.kind}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-card/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border">
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
          <div className="sketch-card max-w-2xl mx-auto p-8 bg-primary/5 border-primary/20">
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
