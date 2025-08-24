import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, Trophy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About", icon: User, path: "/" },
    { id: "projects", label: "Projects", icon: Code, path: "/" },
    { id: "experience", label: "Experience", icon: Briefcase, path: "/" },
    { id: "achievements", label: "Achievements", icon: Trophy, path: "/" },
    { id: "contact", label: "Contact", icon: Mail, path: "/" },
    { id: "tools", label: "Tools", icon: Menu, path: "/tools" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: { id: string; path: string }) => {
    if (item.path !== "/") {
      window.location.href = item.path;
      return;
    }
    
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-hero bg-clip-text text-transparent animate-gradient">
            Akshaya Kumar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item)}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? "gradient-hero text-white" 
                    : "hover:bg-card-hover"
                }`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-glass-border">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item)}
                  className={`flex items-center space-x-2 justify-start ${
                    activeSection === item.id 
                      ? "gradient-hero text-white" 
                      : "hover:bg-card-hover"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;