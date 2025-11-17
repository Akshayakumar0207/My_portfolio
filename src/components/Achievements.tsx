import { Trophy, FileText, Users, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dtmsPaper from "@/assets/dtms-paper.pptx";
import paperCitation from "@/assets/paper-cer.jpg";

type ResearchPaper = {
  id: number;
  title: string;
  venue: string;
  year: string;
  abstract: string;
  status: string;
  authors: string;
  paperLink: string;
  citationImage: string;
  citationLabel?: string;
};

const Achievements = () => {
  const research: ResearchPaper[] = [
    {
      id: 1,
      title: "IoT Based Dynamic Traffic Management System",
      venue: "International Conference on Additive Manufacturing Technologies by SERB (New Delhi) at Mahendra Institute of Technology, Namakkal",
      year: "2024",
      abstract: "Proposes an IoT-driven adaptive control framework that senses real-time congestion levels across urban corridors and dynamically synchronizes traffic signals to reduce wait time, improve emergency routing, and ensure safer commuting.",
      status: "Presented",
      authors: "Jayasutha P, Akshaya K, Kavya A, Kavya M",
      paperLink: dtmsPaper,
      citationImage: paperCitation,
      citationLabel: "ICAMT 2024 Certificate of Presentation"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon",
      year: "2024",
      note: "Participated twice in the Smart India Hackathon, building AI-powered traffic management solutions that consistently impressed juries with innovation and execution.",
      category: "Competition",
      icon: Trophy
    },
    {
      id: 2,
      title: "Best Technical Presentation",
      year: "2024",
      note: "Awarded for presenting blockchain-based voting system at the Annual Technical Symposium, demonstrating clear understanding of complex concepts.",
      category: "Presentation",
      icon: Users
    },
    {
      id: 4,
      title: "Tech Symposium - Outstanding Contributor",
      year: "2023",
      note: "Recognized for exceptional contribution to the organizing committee and successful coordination of technical events.",
      category: "Leadership",
      icon: Users
    },
    {
      id: 5,
      title: "TANCAM National Level Hackathon",
      year: "2024",
      note: "Competed against 500+ teams, cleared two rounds out of three, and secured 23rd place with an innovative smart mobility prototype.",
      category: "Competition",
      icon: Trophy
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'competition':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'presentation':
        return 'bg-project-accent/20 text-project-accent border-project-accent/30';
      case 'leadership':
        return 'bg-skill-bg/40 text-skill-bg border-skill-bg/30';
      case 'open source':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'presented':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'under review':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'draft':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Akshaya Kumar
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Research & Achievements
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic contributions and recognitions that showcase dedication to learning and innovation.
            </p>
          </div>

          {/* Research Publications */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <FileText className="text-primary" size={32} />
              Research Publications
            </h3>
            
            <div className="space-y-6">
              {research.map((paper, index) => (
                <Card key={paper.id} className="glass-effect border-0 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-102 animate-fade-in-up">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-primary mb-3 leading-tight">
                          {paper.title}
                        </CardTitle>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <Badge variant="outline" className="flex items-center gap-2">
                            <Calendar size={14} />
                            {paper.year}
                          </Badge>
                          <Badge className={`${getStatusColor(paper.status)} border`}>
                            {paper.status}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Venue:</strong> {paper.venue}
                        </p>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          <strong>Authors:</strong> {paper.authors}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-primary mb-2">Abstract</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-glass-border">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        asChild
                      >
                        <a 
                          href={paper.paperLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Open presentation deck"
                        >
                          <FileText size={14} className="mr-2" />
                          Read Paper
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"
                        asChild
                      >
                        <a 
                          href={paper.citationImage} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title={paper.citationLabel ?? "View citation proof"}
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Citation
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <Trophy className="text-primary" size={32} />
              Awards & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                <Card 
                    key={achievement.id} 
                    className="glass-effect border-0 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary hover:bg-primary-hover flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <IconComponent size={24} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                            <h4 className="font-bold text-primary leading-tight">
                              {achievement.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              <Badge className={`${getCategoryColor(achievement.category)} border text-xs`}>
                                {achievement.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {achievement.year}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.note}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <Card className="glass-effect border-0 text-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Research Paper Published
                  </p>
                </CardContent>
              </Card>
              
               <Card className="glass-effect border-0 text-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    3+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Awards & Recognition
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 text-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    3+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hackathon Participations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 text-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Technical Presentations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Card className="glass-effect border-0 max-w-2xl mx-auto hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-primary">
                  Interested in Collaboration?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to collaborate on research projects, participate in hackathons, 
                  or contribute to innovative technical solutions. Let's create something amazing together!
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                  <ExternalLink className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;