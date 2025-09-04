import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";
const profileImage = "/lovable-uploads/750acb66-bcdf-4576-ae1b-1dd932fd95a9.png";

const Hero = () => {

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Main Content */}
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Akshaya Kumar
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground">
                  Computer Science Engineer & Full Stack Developer
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl mb-8 text-muted-foreground leading-relaxed">
                  Passionate about creating innovative solutions through code. Currently pursuing B.E. in CSE 
                  with expertise in full-stack development, mobile apps, and machine learning.
                </p>
              </div>


              {/* Social Links */}
              <div className="flex gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open('https://github.com/Akshayakumar0207', '_blank')}
                >
                  <Github size={24} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open('https://www.linkedin.com/in/akshaya-kumar-74a439300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                >
                  <Linkedin size={24} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  onClick={() => window.open('mailto:akshayakumarcse02@gmail.com', '_blank')}
                >
                  <Mail size={24} />
                </Button>
              </div>

              {/* Currently Working On */}
              <div className="glass-effect rounded-2xl p-6 max-w-md animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-semibold mb-2 text-primary">Currently Working On</h3>
                <p className="text-sm text-muted-foreground">
                  Working on final year project "Campus Bus Tracking System"
                </p>
              </div>
            </div>

            {/* Right Content - Portrait */}
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Portrait Container with Glass Effect */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full glass-effect p-4 transform hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={profileImage}
                      alt="Akshaya Kumar - Professional Portrait"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating Elements around Portrait */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-hero animate-float opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-project-accent animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 rounded-full bg-skill-bg animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>

          {/* Download Resume - Centered below */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Akshaya_Kumar_Resume.pdf';
                  link.click();
                }}
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </Button>
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