import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const skills = [
    "React", "Flutter", "Java", "Python", "JavaScript", "UI/UX", "MongoDB", "Firebase"
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-project-accent/20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-hero bg-clip-text text-transparent animate-gradient">
                Akshaya Kumar
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              Computer Science Engineer & Full Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code. Currently pursuing B.E. in CSE 
              with expertise in full-stack development, mobile apps, and machine learning.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-skill-bg/50 backdrop-blur border-glass-border hover:bg-skill-bg/70 transition-all duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="gradient-hero hover:opacity-90 text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ExternalLink className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
              <Mail className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
              <Download className="ml-2" size={20} />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="ghost" size="lg" className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </Button>
          </div>

          {/* Current Focus */}
          <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-semibold mb-2 text-primary">Currently Working On</h3>
            <p className="text-sm text-muted-foreground">
              Advanced Machine Learning projects and Full Stack Development with modern frameworks
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;