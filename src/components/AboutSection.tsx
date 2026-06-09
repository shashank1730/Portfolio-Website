import { Compass, Sparkles, Rocket, MapPin } from "lucide-react";
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

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4">About Me</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">
            The story behind the code
          </h2>
          <div className="sketch-divider max-w-md mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Avatar and Story */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="sketch-card shrink-0 w-44 h-44 p-3 rotate-[-2deg]">
                <img
                  src={sketchAvatar}
                  alt="Shashank Nallabothu"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="text-3xl font-display font-bold text-primary">
                  Hey, I'm Shashank 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A <span className="text-foreground font-semibold">Forward Deployed AI Engineer</span> who
                  ships AI-powered products that solve real, messy, real-world problems — across
                  mortgage, insurance, and HRTech.
                </p>
              </div>
            </div>

            <div className="sketch-card space-y-4">
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
                <p>
                  I sit close to the user — embedding with teams, turning fuzzy requirements into
                  <span className="text-foreground font-semibold"> production-grade systems</span> with
                  RAG pipelines, multi-agent orchestration (LangChain / LangGraph), and rigorous
                  evals that keep things reliable.
                </p>
                <p>
                  I care less about the framework of the week and more about
                  <span className="text-foreground font-semibold"> outcomes</span> — cutting review
                  time, dropping costs, and making complex AI feel effortless.
                </p>
                <p className="text-foreground font-semibold">
                  Basically: a product person who can also ship the code. 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-display font-bold">Quick facts</h3>

            <div className="grid gap-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="sketch-card flex items-start gap-4 p-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                      {fact.label}
                    </p>
                    <p className="text-foreground font-medium mt-0.5">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Playground */}
            <div className="sketch-card p-6 bg-primary/5 border-primary/20">
              <h4 className="text-xl font-display font-bold mb-4 text-primary">
                My Playground 🛠️
              </h4>
              <div className="flex flex-wrap gap-2">
                {playground.map((tech) => (
                  <span key={tech} className="chip chip-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
