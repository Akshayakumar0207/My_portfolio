import { Briefcase, Calendar, MapPin, Award, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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

  const formatPeriod = (period: string) => {
    // Convert to a more readable format if needed
    return period;
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Experience & Learning Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional experience through internships, workshops, and project work 
              that have shaped my technical expertise and problem-solving skills.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id} 
                className={`glass-effect border-0 hover:bg-card-hover transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up ${
                  exp.current ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-primary mb-2">
                          {exp.role}
                        </CardTitle>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {exp.organization}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {formatPeriod(exp.period)}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`${getTypeColor(exp.type)} border`}>
                        {exp.type}
                      </Badge>
                      {exp.current && (
                        <Badge className="gradient-hero text-white animate-pulse">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="font-semibold text-primary mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-skill-bg/40 hover:bg-skill-bg/60 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Layout for Responsibilities and Outcomes */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-primary flex items-center gap-2">
                        <ChevronRight size={16} />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-primary flex items-center gap-2">
                        <Award size={16} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-project-accent/60 flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional Experiences
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Technologies Mastered
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Projects Delivered
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;