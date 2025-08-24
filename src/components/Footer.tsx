import { Heart, ArrowUp, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    portfolio: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Achievements", href: "#achievements" }
    ],
    connect: [
      { label: "GitHub", href: "https://github.com/akshayakumar", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/akshayakumar", external: true },
      { label: "Email", href: "mailto:akshaya.kumar@email.com", external: true },
      { label: "Resume", href: "#", external: true }
    ]
  };

  const handleLinkClick = (href: string, external: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener noreferrer");
    } else {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background-secondary border-t border-glass-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full gradient-hero animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-project-accent/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-skill-bg/40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
                  Akshaya Kumar
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Computer Science Engineer passionate about creating innovative solutions 
                  through code. Always excited to take on new challenges and collaborate 
                  on meaningful projects.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code size={16} className="text-primary" />
                  <span>Currently pursuing B.E. in CSE | CGPA: 8.5</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-glass-border hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://github.com/akshayakumar", "_blank")}
                >
                  <Github size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-glass-border hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://linkedin.com/in/akshayakumar", "_blank")}
                >
                  <Linkedin size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-glass-border hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300"
                  onClick={() => window.open("mailto:akshaya.kumar@email.com", "_blank")}
                >
                  <Mail size={18} />
                </Button>
              </div>
            </div>

            {/* Portfolio Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Portfolio</h4>
              <ul className="space-y-3">
                {footerLinks.portfolio.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href, false)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Connect</h4>
              <ul className="space-y-3">
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.external || false)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} Akshaya Kumar. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>and lots of</span>
                <Code size={16} className="text-primary" />
              </div>
            </div>

            {/* Back to Top Button */}
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-glass-border hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-glass-border/50">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">
                This portfolio is continuously updated with my latest work and achievements.
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  Available for opportunities
                </span>
                <span>•</span>
                <span>Last updated: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Built with React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;