import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Blockchain-based Voting System",
      summary: "Secure and transparent digital voting platform using blockchain technology",
      details: "Built a decentralized voting system ensuring transparency, security, and immutability of votes using smart contracts and cryptographic hashing.",
      tech: ["Blockchain", "Smart Contracts", "Web3", "React", "Node.js"],
      tags: ["blockchain", "fullstack", "security"],
      category: "blockchain",
      date: "2024-03",
      github: "#",
      demo: "#",
      outcomes: "Successfully demonstrated 99.9% vote integrity with zero tampering incidents in testing"
    },
    {
      id: 2,
      title: "Eatify - Food Delivery App",
      summary: "Cross-platform food delivery application built with Flutter",
      details: "Complete food delivery solution with real-time tracking, payment integration, restaurant management, and user-friendly interface for seamless ordering experience.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Payment Gateway"],
      tags: ["mobile", "flutter", "fullstack"],
      category: "mobile",
      date: "2024-01",
      github: "#",
      demo: "#",
      outcomes: "Designed for 10,000+ concurrent users with 3-second average order processing time"
    },
    {
      id: 3,
      title: "Smart Bus Tracking System",
      summary: "ML-powered bus tracking with GPS integration and ETA prediction",
      details: "Intelligent transportation system using machine learning algorithms to predict accurate arrival times, optimize routes, and provide real-time location tracking.",
      tech: ["Python", "Machine Learning", "GPS API", "React", "TensorFlow"],
      tags: ["ml", "fullstack", "iot"],
      category: "ml",
      date: "2023-11",
      github: "#",
      demo: "#",
      outcomes: "Achieved 95% ETA accuracy with 40% reduction in passenger wait times"
    },
    {
      id: 4,
      title: "Dynamic Traffic Management",
      summary: "AI-driven traffic optimization system for smart cities",
      details: "Advanced traffic management system using computer vision and AI to analyze traffic patterns, optimize signal timing, and reduce congestion in urban areas.",
      tech: ["Python", "OpenCV", "AI/ML", "IoT", "React Dashboard"],
      tags: ["ai", "iot", "fullstack"],
      category: "ai",
      date: "2023-09",
      github: "#",
      demo: "#",
      outcomes: "Reduced traffic congestion by 35% in simulation testing environments"
    },
    {
      id: 5,
      title: "Pastry Shop Website",
      summary: "Modern e-commerce website for a local pastry business",
      details: "Responsive e-commerce platform with online ordering, inventory management, payment processing, and admin dashboard for business operations.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      tags: ["frontend", "fullstack", "ecommerce"],
      category: "web",
      date: "2023-07",
      github: "#",
      demo: "#",
      outcomes: "Increased online orders by 150% for the local business within first month"
    },
    {
      id: 6,
      title: "Plants vs Zombies Game",
      summary: "Recreation of the classic tower defense game using Python Pygame",
      details: "Fully functional game with multiple levels, various plant types, zombie AI, sound effects, and scoring system built from scratch using Pygame.",
      tech: ["Python", "Pygame", "OOP", "Game Development"],
      tags: ["game", "python"],
      category: "game",
      date: "2023-05",
      github: "#",
      demo: "#",
      outcomes: "Featured in college gaming showcase with 500+ downloads from peers"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.tags.includes("fullstack")).length },
    { id: "mobile", label: "Mobile", count: projects.filter(p => p.tags.includes("mobile") || p.tags.includes("flutter")).length },
    { id: "ml", label: "ML/AI", count: projects.filter(p => p.tags.includes("ml") || p.tags.includes("ai")).length },
    { id: "game", label: "Games", count: projects.filter(p => p.tags.includes("game")).length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags.includes(activeFilter) || 
        project.category === activeFilter
      );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects spanning web development, mobile apps, 
              machine learning, and innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 ${
                  activeFilter === category.id 
                    ? "gradient-hero text-white" 
                    : "border-glass-border hover:bg-card-hover"
                }`}
              >
                <Filter size={16} />
                {category.label}
                <Badge variant="secondary" className="ml-1 bg-muted text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass-effect border-0 hover:bg-card-hover transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                      <Tag size={20} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {formatDate(project.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary leading-tight">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-skill-bg/40 hover:bg-skill-bg/60 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Project Details */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.details}
                  </p>

                  {/* Outcomes */}
                  <div className="p-3 rounded-lg bg-muted/30 border border-glass-border">
                    <p className="text-xs font-medium text-primary mb-1">Key Achievement:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.outcomes}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-hero text-white hover:opacity-90 transition-all duration-300"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Demo
                    </Button>
                  </div>

                  {/* Updated Indicator */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-glass-border">
                    <span>Updated: {formatDate(project.date)}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show message if no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No projects found for the selected category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveFilter("all")}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;