import React from "react";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlipCard from "./FlipCard";
import blockchainImage from "@/assets/blockchain-voting.jpg";
import eatifyImage from "@/assets/eatify-app.jpg";
import busTrackingImage from "@/assets/bus-tracking.jpg";
import pastryShopImage from "@/assets/pastry-shop.jpg";
import mockMateImage from "@/assets/mockmate-platform.jpg";
import ludoGame from "@/assets/ludo-game.jpg";

const ProjectsFlip = () => {
  const projects = [
    {
      id: 1,
      title: "Blockchain-based Voting System",
      summary: "Secure, transparent voting platform using blockchain technology",
      image: blockchainImage,
      details: "A comprehensive blockchain-based voting system that ensures transparency, security, and immutability. Features smart contracts for vote verification, real-time vote counting, and voter anonymity protection.",
      tech: ["Blockchain", "Smart Contracts", "React", "Web3.js", "Solidity"],
      links: { github: "#", demo: "#" },
      tags: ["Blockchain", "Security"],
      startedAt: "2024-03",
      updatedAt: "2024-05",
      keyAchievement: "Zero vote tampering with 99.9% uptime"
    },
    {
      id: 2,
      title: "Eatify - Food Delivery App",
      summary: "Flutter-based food delivery application with real-time tracking",
      image: eatifyImage,
      details: "A feature-rich food delivery mobile application built with Flutter. Includes restaurant browsing, order management, real-time delivery tracking, payment integration, and user reviews system.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Payment Gateway"],
      links: { github: "#", demo: "#" },
      tags: ["Mobile", "Flutter", "Processing"],
      startedAt: "2024-01",
      updatedAt: "2024-03",
      keyAchievement: "Served 500+ orders with 4.8-star rating"
    },
    {
      id: 3,
      title: "Smart Bus Tracking System",
      summary: "ML-powered bus tracking with GPS and ETA predictions",
      image: busTrackingImage,
      details: "An intelligent bus tracking system that uses machine learning for accurate ETA predictions. Features GPS tracking, route optimization, passenger capacity monitoring, and real-time notifications.",
      tech: ["Python", "Machine Learning", "GPS API", "React", "MongoDB"],
      links: { github: "#", demo: "#" },
      tags: ["ML", "IoT", "Processing"],
      startedAt: "2023-09",
      updatedAt: "2024-08",
      keyAchievement: "92% ETA accuracy with 50+ daily users"
    },
    {
      id: 4,
      title: "Pastry Shop Website",
      summary: "Responsive e-commerce website for local pastry business",
      image: pastryShopImage,
      details: "A modern, responsive e-commerce website for a local pastry shop. Features product catalog, online ordering, payment processing, inventory management, and customer review system.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      links: { github: "#", demo: "#" },
      tags: ["Frontend", "E-commerce"],
      startedAt: "2023-06",
      updatedAt: "2023-08",
      keyAchievement: "Increased online sales by 150%"
    },
    {
      id: 5,
      title: "MockMate - Mock Interview Platform",
      summary: "AI-powered mock interview platform for technical skill assessment",
      image: mockMateImage,
      details: "A comprehensive mock interview platform that uses AI to simulate real technical interviews. Features coding challenges, behavioral questions, real-time feedback, and performance analytics to help candidates prepare for their dream jobs.",
      tech: ["React", "Node.js", "AI/ML", "WebRTC", "MongoDB"],
      links: { github: "#", demo: "#" },
      tags: ["AI", "Interview", "Processing"],
      startedAt: "2024-08",
      updatedAt: "2024-12",
      keyAchievement: "AI-powered feedback system with 95% accuracy"
    },
    {
      id: 6,
      title: "Ludo Game with AI",
      summary: "Python-based Ludo game with AI opponents and multiplayer support",
      image: ludoGame,
      details: "A digital recreation of the classic Ludo board game featuring AI opponents, multiplayer gameplay, and modern graphics. Includes intelligent AI players, game state management, and interactive UI with sound effects.",
      tech: ["Python", "Pygame", "AI Algorithms", "Game Logic", "UI Design"],
      links: { github: "#", demo: "#" },
      tags: ["Game", "AI"],
      startedAt: "2022-12",
      updatedAt: "2023-02",
      keyAchievement: "AI opponents with 85% win rate"
    }
  ];

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any project card to flip and see detailed information, technologies used, and achievements.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <FlipCard
                  front={
                    <div className="h-full flex flex-col">
                      {/* Project Image */}
                      <div className="h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {project.summary}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                          <Button size="sm" className="gradient-hero text-white flex-1">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </Button>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                          Click to see details
                        </p>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.details}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs bg-skill-bg/40">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Key Achievement */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1">
                            <Star size={14} />
                            Key Achievement:
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.keyAchievement}</p>
                        </div>
                        
                        {/* Timeline */}
                        <div className="mb-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={12} />
                              Started: {formatDate(project.startedAt)}
                            </div>
                            <div>Updated: {formatDate(project.updatedAt)}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links.github, '_blank');
                          }}
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button 
                          size="sm" 
                          className="gradient-hero text-white flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links.demo, '_blank');
                          }}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFlip;