import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import certIBM from "@/assets/cert-ibm.jpg";
import certKaggle from "@/assets/cert-kaggle.jpg";
import certNovitech from "@/assets/cert-novitech.jpg";
import certLnT from "@/assets/cert-lnt.jpg";
import certIIT from "@/assets/cert-iit.jpg";

const About = () => {
  const education = [
    {
      degree: "B.E. – Computer Science & Engineering",
      institution: "Mahendra Institute of Technology, Namakkal",
      period: "2022–2026",
      score: "CGPA: 8.5",
      current: true
    },
    {
      degree: "Higher Secondary",
      institution: "Govt. Girls Model School, Salem",
      period: "2020–2022",
      score: "83%",
      current: false
    },
    {
      degree: "SSLC",
      institution: "Govt. Girls Model School, Salem",
      period: "2018–2020",
      score: "78%",
      current: false
    }
  ];

  const certifications = [
    { title: "Data Structures & Algorithms", issuer: "IBM", year: "2024", image: certIBM },
    { title: "Google Python Course", issuer: "Kaggle", year: "2024", image: certKaggle },
    { title: "Full Stack Development", issuer: "NoviTech R&D", year: "2023", image: certNovitech },
    { title: "Advanced Java Programming", issuer: "L&T EduTech", year: "2023", image: certLnT },
    { title: "Machine Learning Fundamentals", issuer: "IIT Madras", year: "2023", image: certIIT }
  ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Flutter", "UI/UX Design"],
    backend: ["Java (Core & OOP)", "Python", "REST API"],
    database: ["MySQL", "Firebase", "MongoDB"],
    tools: ["Git", "GitHub", "Figma", "Android Studio", "VS Code"],
    others: ["Prototyping", "Tkinter Library", "Machine Learning"]
  };

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Science student with a strong foundation in full-stack development, 
              mobile applications, and emerging technologies.
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Computer Science Engineer</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} />
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a dedicated Computer Science Engineering student with a passion for creating innovative 
                  digital solutions. My journey in technology spans from frontend development with modern 
                  frameworks to backend systems and mobile applications. I have hands-on experience with 
                  full-stack development, machine learning projects, and have contributed to various research 
                  initiatives. My goal is to leverage technology to solve real-world problems and create 
                  meaningful impact through code.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Pipeline */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
            <div className="relative">
              {/* Pipeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-muted h-full rounded-full"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Pipeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10 shadow-lg"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full ${index % 2 === 0 ? 'pr-1/2 mr-8' : 'pl-1/2 ml-8'}`}>
                      <Card className={`glass-effect border-0 transition-all duration-300 hover:bg-card-hover transform hover:scale-105 ${edu.current ? 'ring-2 ring-primary' : ''}`}>
                        <CardContent className="p-6">
                          <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-semibold text-primary">
                              {edu.degree}
                            </h4>
                            <p className="text-muted-foreground">{edu.institution}</p>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Calendar size={12} />
                                {edu.period}
                              </Badge>
                              <Badge variant="secondary" className="bg-skill-bg/50">
                                {edu.score}
                              </Badge>
                              {edu.current && (
                                <Badge className="gradient-hero text-white">Current</Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-effect border-0 hover:bg-card-hover transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} certification`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;