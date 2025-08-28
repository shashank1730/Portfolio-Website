import { Coffee, Code, Heart, MapPin } from "lucide-react";
import sketchAvatar from "@/assets/sketch-avatar.jpg";
const AboutSection = () => {
  const quickFacts = [{
    icon: <Code className="h-5 w-5" />,
    label: "Favorite Stack",
    value: "React + FastAPI + RAG/LLMs"
  }, {
    icon: <Coffee className="h-5 w-5" />,
    label: "Currently Learning",
    value: "LangGraph & Agentic AI"
  }, {
    icon: <Heart className="h-5 w-5" />,
    label: "Experience",
    value: "5+ Years Development"
  }, {
    icon: <MapPin className="h-5 w-5" />,
    label: "Based In",
    value: "Arlington, TX"
  }];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sketch font-bold mb-4 sketch-underline">
            About Me
          </h2>
          <div className="sketch-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar and Story */}
          <div className="space-y-8">
            <div className="flex justify-center md:justify-start">
              <div className="sketch-card w-64 h-64 p-4">
                <img src={sketchAvatar} alt="Shashank Nallabothu - Sketch Avatar" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            
            <div className="sketch-card space-y-4">
              <h3 className="text-2xl font-sketch font-semibold text-primary">
                The Story Behind the Code
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Hey there! I'm Shashank, a passionate Full Stack AI Engineer with 5+ years of experience 
                  creating AI-powered applications that solve real-world problems. I'm skilled in RAG pipelines, 
                  LangChain/LangGraph, and deploying scalable LLM systems.
                </p>
                <p>Completed my Master's in Computer Science at UT Arlington with a perfect 4.0 GPA, I combine strong web development expertise (React, FastAPI) with a proven track record of improving efficiency and decision-making in HRTech, sales, and manufacturing domains.</p>
                <p>
                  From automating resume screening that cuts HR review time by 65% to building predictive 
                  maintenance systems that reduce downtime by 30%, I love turning complex AI capabilities 
                  into user-friendly solutions that make a real impact! 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <h3 className="text-3xl font-sketch font-semibold text-center md:text-left mb-8">
              Quick Facts About Me
            </h3>
            
            <div className="grid gap-4">
              {quickFacts.map((fact, index) => <div key={index} className="sketch-card flex items-center gap-4 p-6 hover:shadow-hover transition-all duration-300">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="font-sketch text-sm text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="font-handwritten text-lg font-semibold">
                      {fact.value}
                    </p>
                  </div>
                </div>)}
            </div>
            
            {/* Tech Stack Highlight */}
            <div className="sketch-card p-6 bg-primary/5 border-primary/20">
              <h4 className="font-sketch text-xl font-semibold mb-4 text-primary">
                My Playground 🛠️
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'FastAPI', 'LangChain', 'LangGraph', 'RAG', 'OpenAI', 'AWS', 'ChromaDB'].map(tech => <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-handwritten border border-primary/20">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;