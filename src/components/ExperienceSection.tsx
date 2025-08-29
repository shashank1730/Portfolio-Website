import { Briefcase, GraduationCap, Award, ArrowRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'AI Engineer',
      company: 'Infoshare Systems Inc.',
      period: 'May 2024 - Present',
      location: 'Remote',
      description: 'Building AI-powered solutions for HR automation and tender processing, significantly improving efficiency in screening and decision-making processes.',
      achievements: [
        'Automated screening of 1,000+ resumes per job posting using LangGraph and local LLMs, cutting HR review time by 65%',
        'Built AI-powered web portal with NextJS enabling instant access to auto-generated fit scores and reports',
        'Designed RAG-based retrieval system achieving 85% skill-match accuracy between resumes and job descriptions',
        'Automated tender document processing reducing sales team review time by 70%',
        'Deployed scalable solutions on AWS EC2 with S3 for secure storage'
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'University of Texas at Arlington',
      period: 'Aug 2023 - May 2025',
      location: 'Arlington, TX',
      description: 'Pursued advanced coursework in AI/ML, data structures, and distributed systems with a perfect 4.0/4.0 CGPA.',
      achievements: [
        'Maintaining perfect 4.0/4.0 CGPA in advanced CS coursework',
        'Focusing on GenAI, Machine Learning, and Software Engineering',
        'Expected graduation: May 2025'
      ],
      icon: <GraduationCap className="h-6 w-6" />
    },

    {
      type: 'work',
      title: 'Software Developer - Intern',
      company: 'Best Koki Automotive Pvt Ltd',
      period: 'Apr 2022 - Jul 2023',
      location: 'India',
      description: 'Developed predictive maintenance systems and real-time monitoring dashboards for manufacturing operations, significantly improving efficiency and reducing downtime.',
      achievements: [
        'Reduced unplanned downtime by 30% through ML-powered anomaly detection',
        'Deployed live dashboards across 50+ machines using React.js on Raspberry Pi',
        'Built C-level dashboards in Grafana for real-time operational insights',
        'Reduced defective part rejection from 35% to 19% with RFID integration'
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science (Honors)',
      company: 'Lovely Professional University',
      period: 'Jul 2019 - May 2023',
      location: 'Punjab, India',
      description: 'Honors degree in Computer Science with strong foundation in programming, data structures, algorithms, and software development practices.',
      achievements: [
        'Graduated with Honors (CGPA: 8.4/10)',
        'Strong coursework in Data Structures, Algorithms, and Software Engineering',
        'Active participation in coding competitions and hackathons'
      ],
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const skills = [
    { category: 'AI/ML', techs: ['RAG', 'LangChain', 'LangGraph', 'OpenAI', 'Ollama', 'TensorFlow', 'PyTorch', 'MLOps'] },
    { category: 'Web Dev', techs: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'JavaScript', 'HTML/CSS', 'Figma'] },
    { category: 'Data & Analytics', techs: ['Spark', 'PySpark', 'Databricks', 'Tableau', 'Seaborn', 'Matplotlib'] },
    { category: 'Cloud & Tools', techs: ['AWS EC2', 'AWS S3', 'ChromaDB', 'Docker', 'Git', 'Agile', 'Shell'] }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sketch font-bold mb-4 sketch-underline">
            Experience & Skills
          </h2>
          <p className="text-xl text-muted-foreground font-handwritten max-w-2xl mx-auto">
            My journey through the world of code, coffee, and continuous learning ☕
          </p>
          <div className="sketch-divider" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-sketch font-semibold mb-8 text-center lg:text-left">
              My Journey 📍
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-full bg-border -z-10" />
                  )}
                  
                  <div className="sketch-card flex gap-6 relative">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-full ${
                      exp.type === 'education' ? 'bg-accent/20 text-accent-foreground' : 'bg-primary/20 text-primary'
                    }`}>
                      {exp.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-xl font-sketch font-semibold">
                          {exp.title}
                        </h4>
                        <span className="text-sm font-handwritten text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-handwritten font-semibold">
                        <span>{exp.company}</span>
                        <ArrowRight className="h-4 w-4" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-sketch font-semibold text-center lg:text-left">
              My Toolbox 🛠️
            </h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="sketch-card p-6">
                  <h4 className="font-sketch text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skillGroup.category}
                  </h4>
                  
                  <div className="space-y-2">
                    {skillGroup.techs.map((tech, techIndex) => (
                      <div key={techIndex} className="group">
                        <div className="flex items-center justify-between">
                          <span className="font-handwritten">{tech}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  i < (4 + Math.random()) // Random skill level for demo
                                    ? 'bg-primary'
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fun Stats */}
            <div className="sketch-card p-6 bg-primary/5 border-primary/20">
              <h4 className="font-sketch text-lg font-semibold mb-4 text-primary">
                Fun Stats 📊
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>☕ Cups of coffee consumed</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>🐛 Bugs squashed</span>
                  <span className="font-semibold">1,234+</span>
                </div>
                <div className="flex justify-between">
                  <span>🚀 Projects launched</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span>🎉 Happy clients</span>
                  <span className="font-semibold">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;