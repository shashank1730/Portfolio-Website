import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web', 'AI/ML', 'Data', 'Full Stack'];
  
  const projects = [
    {
      title: "VaultRAG: Role-Aware AI Chat Assistant",
      description: "Built a secure, open-source RAG system using self-hosted LLMs and strict Role-Based Access Control to prevent unauthorized access. Developed full-stack pipeline that embeds and retrieves only role-authorized documents using vector database with visual UI displaying answer sources as file cards.",
      tags: ['AI/ML', 'FastAPI', 'Streamlit', 'ChromaDB', 'Ollama', 'LangChain'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "LLM-Powered YouTube Summarizer Extension",
      description: "Advanced RAG-based real-time video summarization extension powered by Ollama LLM with FastAPI for real-time transcript ingestion. Architected modular ReAct-style agent workflows using LangGraph with Pydantic validation and achieved 20% improvement in response time.",
      tags: ['AI/ML', 'FastAPI', 'LangGraph', 'Ollama', 'Pydantic', 'LangSmith'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Smart Submission Portal for Research Conferences",
      description: "Academic conference management system using Figma, React.js, Node.js, and MySQL, streamlining paper submissions with automated reviewer assignment based on expertise and research areas. Integrated secure payment gateway for seamless registrations and real-time live chat, deployed on AWS.",
      tags: ['Full Stack', 'React.js', 'Node.js', 'MySQL', 'AWS', 'Figma'],
      category: 'Full Stack',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Semantic Segmentation for Traffic and Road Imagery",
      description: "Real-time traffic scene segmentation system using U-Net architecture with encoder-decoder structure for feature extraction and pixel-level segmentation. Integrated K-means clustering via Scikit-Learn to enhance boundary refinement and object differentiation, laying groundwork for ADAS applications.",
      tags: ['AI/ML', 'Python', 'TensorFlow', 'Scikit-Learn', 'Computer Vision'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Predictive Maintenance System",
      description: "Implemented anomaly detection using ensemble ML algorithms to reduce unplanned downtime by 30%. Handled backend APIs for M2M communication with RFID tracking across 20+ machines.",
      tags: ['AI/ML', 'Python', 'React.js', 'RFID', 'Raspberry Pi'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Live Machine Monitoring Dashboard",
      description: "Developed real-time dashboards using React.js on Linux-based Raspberry Pi systems. Deployed across 50+ machines for centralized monitoring and C-level dashboard in Grafana for operational insights.",
      tags: ['Web', 'React.js', 'Grafana', 'Raspberry Pi', 'Linux'],
      category: 'Web',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 bg-gradient-paper">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sketch font-bold mb-4 sketch-underline">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground font-handwritten max-w-2xl mx-auto">
            A collection of projects I've poured my heart (and countless hours) into ☕
          </p>
          <div className="sketch-divider" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-card rounded-lg border-2 border-border shadow-sketch">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md font-handwritten transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_hsl(var(--sketch-dark))]'
                    : 'bg-transparent text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`sketch-card group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-handwritten font-semibold">
                    ✨ Featured
                  </span>
                </div>
              )}

              {/* Project Preview Area */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">
                  📱
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-sketch font-semibold sketch-underline">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-md text-sm font-handwritten border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 btn-sketch-primary text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 btn-sketch text-sm"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="sketch-card max-w-2xl mx-auto p-8 bg-primary/5 border-primary/20">
            <h3 className="text-3xl font-sketch font-semibold mb-4 text-primary">
              Got an Idea? Let's Build It! 🚀
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-handwritten">
              I'm always excited to work on new projects and turn wild ideas into reality.
            </p>
            <Button className="btn-sketch-primary text-lg px-8 py-4">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;