import { Trophy, FileText, Users, Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const research = [
    {
      id: 1,
      title: "Machine Learning Applications in Smart Transportation Systems",
      venue: "National Conference on Emerging Technologies",
      year: "2024",
      abstract: "This paper explores the implementation of machine learning algorithms in optimizing urban transportation networks, focusing on predictive analytics for traffic flow management and intelligent routing systems.",
      link: "#",
      status: "Published",
      authors: "Akshaya Kumar, Dr. Rajesh Sharma, Prof. Anita Menon"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Smart City Hackathon - Second Place",
      year: "2024",
      note: "Developed an AI-powered traffic management solution that impressed judges with its innovative approach to urban mobility challenges.",
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
      id: 3,
      title: "Code Innovation Challenge Winner",
      year: "2023",
      note: "Won first place in college-level coding competition for developing an efficient algorithm for dynamic programming optimization.",
      category: "Competition",
      icon: Award
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
      title: "Open Source Contribution Recognition",
      year: "2023",
      note: "Acknowledged for consistent contributions to open-source projects, helping improve documentation and bug fixes for community tools.",
      category: "Open Source",
      icon: Award
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Research & Achievements
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic contributions, competitive achievements, and recognition for 
              technical excellence and innovation in computer science.
            </p>
          </div>

          {/* Research Publications */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="text-primary" size={32} />
              Research Publications
            </h3>
            
            <div className="space-y-6">
              {research.map((paper, index) => (
                <Card key={paper.id} className="glass-effect border-0 hover:bg-card-hover transition-all duration-300">
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
                      >
                        <FileText size={14} className="mr-2" />
                        Read Paper
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Citation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="text-primary" size={32} />
              Awards & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={achievement.id} 
                    className="glass-effect border-0 hover:bg-card-hover transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
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
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Research Paper Published
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Awards & Recognition
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    3+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hackathon Participations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
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
            <Card className="glass-effect border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
                  Interested in Collaboration?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to collaborate on research projects, participate in hackathons, 
                  or contribute to innovative technical solutions. Let's create something amazing together!
                </p>
                <Button 
                  size="lg" 
                  className="gradient-hero text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
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