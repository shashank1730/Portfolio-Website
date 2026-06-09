import { Briefcase, GraduationCap, Award, MapPin, Download, BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Forward Deployed AI Engineer",
      company: "Addy AI, Inc.",
      period: "Dec 2025 – Present",
      location: "Detroit, MI",
      description:
        "Leading AI-driven mortgage loan processing — turning fuzzy lending rules into reliable, automated agent workflows.",
      achievements: [
        "Led mortgage loan processing workflows integrating OCR, document classification, and checklist validation to automate loan readiness and borrower eligibility.",
        "Built an automated prompt-tuning framework that enhances base prompts from structured user feedback, improving checklist accuracy.",
        "Shipped custom AI agents per checklist type — users tweak business logic in plain language, which auto-generates structured prompts.",
        "Owned end-to-end Evals across the pipeline (OCR → classification → checklist validation) for production-grade reliability.",
        "Optimized LLM usage and inference to cut AI operational cost while holding output quality.",
      ],
    },
    {
      type: "work",
      title: "AI Engineer",
      company: "Infoshare Systems Inc.",
      period: "Jul 2025 – Dec 2025",
      location: "Remote",
      description:
        "Architected multi-agent AI systems for insurance and HRTech, taking ideas from prototype to scaled production.",
      achievements: [
        "Built a multi-agent system automating underwriting, claims, and policy verification — ~70% less manual review, 3–5× more policies/day.",
        "Created a Vision-Language agent scoring property risk from Zillow / Street View imagery, cutting evaluation from ~30–45 min to <5 min.",
        "Shipped a RAG Policy agent for real-time retrieval and cross-validation, accelerating coverage checks by 80%.",
        "Automated screening of 1,000+ resumes/posting with LangGraph + local LLMs, cutting HR review time 65%, with a Next.js fit-score portal.",
        "Ran orchestration with LangGraph, vector retrieval via Chroma, and Groq LLM APIs at scale.",
      ],
    },
    {
      type: "education",
      title: "M.S. in Computer Science",
      company: "University of Texas at Arlington",
      period: "Aug 2023 – May 2025",
      location: "Arlington, TX",
      description:
        "Advanced coursework in AI/ML, distributed systems, and software engineering.",
      achievements: [
        "Focused on GenAI, RAG, and applied machine learning.",
        "Strong grounding in scalable software and data systems.",
      ],
    },
    {
      type: "work",
      title: "Software Developer — Intern",
      company: "Best Koki Automotive",
      period: "Jan 2023 – Jul 2023",
      location: "India",
      description:
        "Built predictive-maintenance and real-time monitoring systems for the factory floor.",
      achievements: [
        "Reduced unplanned downtime 30% with ensemble-ML anomaly detection.",
        "Integrated RFID M2M across 20+ machines, cutting defective-part rejection from 35% to 19%.",
        "Deployed React dashboards on Raspberry Pi across 50+ machines and built C-level Grafana dashboards.",
      ],
    },
    {
      type: "education",
      title: "B.Tech in Computer Science (Honors)",
      company: "Lovely Professional University",
      period: "2019 – 2023",
      location: "Punjab, India",
      description:
        "Honors degree with a strong foundation in DSA, OOP, and software development.",
      achievements: [
        "Solid grounding in Data Structures, Algorithms, and Software Engineering.",
        "Active in coding competitions and hackathons.",
      ],
    },
  ];

  const skills = [
    { category: "Languages", techs: ["Python", "JavaScript", "Scala", "SQL", "Shell", "Java"] },
    { category: "AI / ML", techs: ["RAG", "LLMs", "LangChain", "LangGraph", "TensorFlow", "PyTorch", "NLP", "MLOps"] },
    { category: "Web", techs: ["FastAPI", "React.js", "Next.js", "Node.js", "REST APIs", "Figma"] },
    { category: "Data & Big Data", techs: ["Spark", "Databricks", "Tableau", "Seaborn", "Matplotlib"] },
    { category: "Tools & Cloud", techs: ["AWS", "Docker", "Git", "ChromaDB", "Agile"] },
  ];

  const impact = [
    { value: "~70%", label: "less manual review in underwriting" },
    { value: "65%", label: "faster HR resume screening" },
    { value: "−30%", label: "factory downtime" },
    { value: "80%", label: "faster policy coverage checks" },
    { value: "1,000+", label: "resumes screened per posting" },
    { value: "<5 min", label: "property risk evaluation" },
  ];

  const certifications = [
    { name: "Meta Front-End Developer", issuer: "Meta" },
    { name: "Career Essentials in Software Development", issuer: "Microsoft" },
    { name: "Supervised ML: Regression & Classification", issuer: "Stanford" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="eyebrow mb-4">Experience & Skills</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">
            My journey so far
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
            From the factory floor to forward-deployed AI — shipping outcomes, not just code.
          </p>
          <div className="sketch-divider max-w-md mx-auto" />
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-sketch-primary mt-2"
          >
            <Download className="h-5 w-5" />
            View Full Resume
          </a>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {impact.map((stat) => (
            <div key={stat.label} className="sketch-card p-5 text-center bg-card">
              <p className="text-4xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[2.25fr_0.95fr] gap-10">
          {/* Timeline */}
          <div>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Main story</p>
                <h3 className="text-4xl font-display font-bold">Timeline</h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                The important part: where the work happened, what got shipped, and the measurable outcome.
              </p>
            </div>

            <div className="relative space-y-6 before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-14">
                  {/* Node */}
                  <div
                    className={`absolute left-0 top-1 flex items-center justify-center w-11 h-11 rounded-full border-2 ${
                      exp.type === "education"
                        ? "bg-card text-foreground border-foreground"
                        : "bg-foreground text-background border-foreground"
                    }`}
                  >
                    {exp.type === "education" ? (
                      <GraduationCap className="h-5 w-5" />
                    ) : (
                      <Briefcase className="h-5 w-5" />
                    )}
                  </div>

                  <div className={`sketch-card ${index < 2 ? "border-foreground shadow-[6px_6px_0px_0px_hsl(var(--border))]" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-2xl font-display font-bold leading-tight">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="chip">{exp.period}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground/90">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills + Certs */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">My Toolbox</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="sketch-card p-5">
                    <h4 className="text-lg font-display font-bold mb-3 text-primary flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.techs.map((tech, techIndex) => (
                        <span key={techIndex} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-border bg-card/60 p-5 opacity-75">
              <h4 className="text-lg font-display font-bold mb-4 text-muted-foreground">
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium leading-tight text-foreground/80">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
