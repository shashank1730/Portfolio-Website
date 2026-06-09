import { Compass, Sparkles, Rocket, MapPin, Workflow, Users, Target } from "lucide-react";
import { site } from "@/lib/site";
import sketchAvatar from "@/assets/sketch-avatar.jpg";

const AboutSection = () => {
  const quickFacts = [
    {
      icon: <Compass className="h-5 w-5" />,
      label: "Beyond the Stack",
      value: "The 'favorite stack' era is over — I think product first, tools second.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      label: "Currently",
      value: "Going 100% AI-Native",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      label: "What I Do",
      value: "Ship production AI products, end-to-end",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Based In",
      value: site.location,
    },
  ];

  const playground = [
    "LangGraph", "LangChain", "RAG", "FastAPI", "React.js", "Next.js",
    "OpenAI", "Ollama", "ChromaDB", "Evals", "AWS",
  ];

  const principles = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "User-close engineering",
      copy: "I stay near the operators, underwriters, recruiters, and loan teams who live with the workflow every day.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Agents with guardrails",
      copy: "The interesting part is not a prompt. It is orchestration, retrieval, evals, feedback loops, and ownership.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Product > stack",
      copy: "The stack is only useful if it makes the product faster, clearer, cheaper, and easier to trust.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4">About Me</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">
            The story behind the code
          </h2>
          <div className="sketch-divider max-w-md mx-auto" />
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="bento-card lg:col-span-5 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="inline-flex rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide">
                Product-minded builder
              </div>
              <h3 className="mt-6 text-5xl md:text-6xl font-display font-bold leading-none">
                I turn messy operations into AI-native products.
              </h3>
            </div>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I sit close to the business problem, design the workflow, build the system,
              evaluate the outputs, and keep iterating until the AI feels dependable enough
              for real teams to use.
            </p>
          </div>

          <div className="bento-card lg:col-span-3 p-4">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1.25rem] border-2 border-foreground bg-secondary">
              <img
                src={sketchAvatar}
                alt="Shashank Nallabothu"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border-2 border-foreground bg-card p-4">
                <p className="font-display text-2xl font-bold leading-none">{site.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {site.role}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-4">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bento-card flex items-start gap-4 p-5">
                <div className="p-3 rounded-xl border-2 border-foreground bg-card shrink-0">
                  {fact.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                    {fact.label}
                  </p>
                  <p className="text-foreground font-semibold mt-1">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bento-card lg:col-span-7">
            <h3 className="text-3xl font-display font-bold mb-5">Operating principles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border-2 border-border bg-secondary/40 p-5">
                  <div className="mb-4 inline-flex rounded-xl border-2 border-foreground bg-card p-2">
                    {principle.icon}
                  </div>
                  <h4 className="font-bold">{principle.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card lg:col-span-5 bg-foreground text-background">
            <h3 className="text-3xl font-display font-bold mb-5 text-primary">My Playground</h3>
            <p className="mb-5 text-sm text-background/70">
              Tools change. Product judgment compounds.
            </p>
            <div className="flex flex-wrap gap-2">
              {playground.map((tech) => (
                <span key={tech} className="rounded-full border border-background/20 px-3 py-1 text-xs font-semibold text-background/90">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
