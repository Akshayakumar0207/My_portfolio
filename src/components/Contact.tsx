import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const to = "akshayakumarcse02@gmail.com";
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      setIsSubmitted(true);
      toast({
        title: "Opening your email app...",
        description: "Your message details have been passed to your email client. You can review and send it to Akshaya.",
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshayakumarcse02@gmail.com",
      href: "mailto:akshayakumarcse02@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88701 60044",
      href: "tel:+918870160044"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salem, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Salem,Tamil+Nadu,India"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Akshayakumar0207",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshaya-kumar-74a439300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/itz_akshayakumar?igsh=NnZnczA4M21idzdn",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, want to collaborate, or just want to say hello? 
              I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="glass-effect border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    <Send size={28} />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle size={32} className="text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-400">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, collaboration idea, or just say hello..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-background/50 border-glass-border focus:border-primary transition-colors resize-none"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full gradient-hero text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2" size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {/* Contact Details */}
              <Card className="glass-effect border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-effect border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-xl bg-background/50 border border-glass-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-card-hover ${social.color}`}
                          aria-label={social.label}
                        >
                          <IconComponent size={20} />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-effect border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <h4 className="font-semibold text-primary">Currently Available</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm actively looking for internship opportunities and exciting projects to work on. 
                    Feel free to reach out for collaborations, freelance work, or just to connect!
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="glass-effect border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
                  Ready to Start Something Great?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a project in mind, need technical consultation, or want to explore 
                  collaboration opportunities, I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gradient-hero text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    onClick={() => document.getElementById("name")?.focus()}
                  >
                    Start a Conversation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => {
                      const to = "akshayakumarcse02@gmail.com";
                      const subject = encodeURIComponent("Hello Akshaya 👋");
                      const body = encodeURIComponent("Hi Akshaya,\n\nI came across your portfolio and would like to connect with you regarding...");
                      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
                      window.open(gmailLink, "_blank");
                    }}
                  >
                    Send Direct Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;