import sqlIcon from "@/assets/sql-icon.png";
import uiuxIcon from "@/assets/uiux-icon.png";
import genaiIcon from "@/assets/genai-icon.png";
import promptIcon from "@/assets/prompt-icon.png";
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FlipCard from "./FlipCard";

const ExperienceFlip = () => {
  const experiences = [
    {
      id: 1,
      role: "Java Developer Intern",
      organization: "Tech Solutions Inc.",
      period: "Jun 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      description: "Developed ATM simulation system with advanced security features and transaction management.",
      responsibilities: [
        "Built comprehensive ATM simulation with PIN validation and transaction limits",
        "Implemented secure authentication system using OOP principles",
        "Created detailed transaction logging and balance management features",
        "Developed user-friendly console interface with error handling"
      ],
      outcomes: [
        "Successfully delivered fully functional ATM system ahead of deadline",
        "Achieved 100% test coverage with zero security vulnerabilities",
        "Received outstanding performance rating from mentor"
      ],
      tech: ["Java", "OOP", "Security", "System Design", "Testing"],
      current: false
    },
    {
      id: 2,
      role: "Full Stack Development Intern",
      organization: "NoviTech R&D",
      period: "Mar 2024 - May 2024",
      location: "Chennai, TN",
      type: "Internship",
      description: "Worked on modern web applications using cutting-edge technologies and agile methodologies.",
      responsibilities: [
        "Developed responsive web applications using React and Node.js",
        "Implemented RESTful APIs with proper authentication and authorization",
        "Collaborated with design team to create pixel-perfect UI components",
        "Participated in code reviews and maintained high code quality standards"
      ],
      outcomes: [
        "Delivered 3 production-ready features with 99.9% uptime",
        "Reduced page load times by 45% through optimization techniques",
        "Mentored 2 junior developers on modern development practices"
      ],
      tech: ["React", "Node.js", "MongoDB", "REST API", "Git"],
      current: false
    },
    {
      id: 3,
      role: "Python Development Intern",
      organization: "Besant Technologies",
      period: "Dec 2023 - Feb 2024",
      location: "Bangalore, KA",
      type: "Internship",
      description: "Focused on Python programming, automation, and data analysis projects.",
      responsibilities: [
        "Developed automation scripts for data processing and analysis",
        "Built web scrapers and data collection tools using Python libraries",
        "Created interactive dashboards using Tkinter and data visualization libraries",
        "Implemented machine learning models for predictive analysis"
      ],
      outcomes: [
        "Automated 5 manual processes, saving 20+ hours weekly",
        "Built ML model with 92% accuracy for data prediction",
        "Created comprehensive documentation and training materials"
      ],
      tech: ["Python", "Pandas", "Tkinter", "Machine Learning", "Data Analysis"],
      current: false
    },
    {
      id: 4,
      role: "Core Java Developer",
      organization: "Stack Queue Education",
      period: "Sep 2023 - Nov 2023",
      location: "Online",
      type: "Project Work",
      description: "Developed online application form system with database integration and validation.",
      responsibilities: [
        "Designed and implemented online application form with Java backend",
        "Created MySQL database schema with proper normalization",
        "Built form validation system with client and server-side checks",
        "Implemented user authentication and session management"
      ],
      outcomes: [
        "Successfully handled 500+ form submissions without data loss",
        "Achieved 99.8% form validation accuracy rate",
        "Completed project 2 weeks ahead of schedule"
      ],
      tech: ["Java", "MySQL", "JDBC", "HTML/CSS", "JavaScript"],
      current: false
    },
    {
      id: 5,
      role: "Flutter Workshop Participant",
      organization: "Mobile Development Academy",
      period: "Aug 2023",
      location: "Coimbatore, TN",
      type: "Workshop",
      description: "Intensive Flutter development workshop focusing on cross-platform mobile app development.",
      responsibilities: [
        "Built complete mobile applications from scratch using Flutter",
        "Learned state management patterns and best practices",
        "Implemented Firebase integration for backend services",
        "Created responsive UI components for different screen sizes"
      ],
      outcomes: [
        "Completed 3 functional mobile apps during the workshop",
        "Gained proficiency in Dart programming language",
        "Networked with 50+ fellow developers and industry experts"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Mobile UI/UX"],
      current: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'internship':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'project work':
        return 'bg-project-accent/20 text-project-accent border-project-accent/30';
      case 'workshop':
        return 'bg-skill-bg/40 text-skill-bg border-skill-bg/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience & Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any experience card to flip and see detailed responsibilities, achievements, and technologies used.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <FlipCard
                  front={
                    <div className="h-full flex flex-col p-6">
                      {/* Experience Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                          <Briefcase size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <h4 className="text-base font-semibold text-muted-foreground mb-2">
                            {exp.organization}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="mb-4">
                        <Badge className={`${getTypeColor(exp.type)} border`}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {exp.description}
                      </p>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Click to see details
                      </p>
                    </div>
                  }
                  back={
                    <div className="h-full flex flex-col">
                      <h3 className="text-lg font-bold text-foreground mb-2">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{exp.organization}</p>
                      
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-skill-bg/40">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1">
                          <ChevronRight size={14} />
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.slice(0, 2).map((responsibility, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1">
                          <Award size={14} />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.outcomes.slice(0, 2).map((outcome, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-project-accent/60 flex-shrink-0 mt-1.5"></div>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

          {/* Technology Known Section */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Technology Known
              </h3>
              <p className="text-lg text-muted-foreground">
                Technologies and frameworks I work with
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "React", icon: "⚛️" },
                { name: "SQL", icon: sqlIcon },
                { name: "Python", icon: "🐍" },
                { name: "Java", icon: "☕" },
                { name: "Flutter", icon: "📱" },
                { name: "UI/UX", icon: uiuxIcon },
                { name: "Firebase", icon: "🔥" },
                { name: "Git", icon: "📂" },
                { name: "JavaScript", icon: "🟨" },
                { name: "HTML/CSS", icon: "🎨" },
                { name: "Gen AI", icon: genaiIcon },
                { name: "Prompt Engineering", icon: promptIcon }
              ].map((tech, index) => (
                <div 
                  key={tech.name} 
                  className="glass-effect rounded-lg p-4 text-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {typeof tech.icon === 'string' && tech.icon.includes('.png') ? (
                    <div className="w-8 h-8 mx-auto mb-2">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="text-3xl mb-2">{tech.icon}</div>
                  )}
                  <p className="text-sm font-medium text-white">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFlip;