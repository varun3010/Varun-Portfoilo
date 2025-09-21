import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "3+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile methodology & cross-functional teams"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "High-Five & Star Awards at Centific"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "40% performance improvement in logistics systems"
    }
  ];

  const strengths = ["Self-Learner", "Creative", "Team-Player", "Adaptability"];
  const interests = ["Learning New Technologies", "Playing Cricket", "Traveling"];
  const languages = [
    { name: "English", level: 5 },
    { name: "Telugu", level: 5 },
    { name: "Hindi", level: 5 }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a track record of delivering high-performance applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Main content */}
          <div className="space-y-8">
            {/* Career Objective */}
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Career Focus</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Organized and skilled MERN stack developer with professional experience in cutting-edge technologies, 
                dynamic agile methodology, and deadline-driven environments. Specialized in developing applications 
                that involve different challenges and complexities, with expertise in ReactJS, React Native, NodeJS, 
                MySQL, and MongoDB.
              </p>
            </Card>

            {/* Current Role */}
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Current Role</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>April 2022 - Present</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Software Engineer @ Centific</h4>
                <p className="text-muted-foreground">
                  Contributing to logistics microservices (Driver, Trailer, Power) that improved system performance by over 40%. 
                  Building scalable backend services and implementing reliable service communication using modern technologies.
                </p>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-secondary">B.Tech in Electronics and Communication</h4>
                <p className="text-muted-foreground">Sree Venkateswara College of Engineering</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>June 2018 - July 2022 • NLR, AP, India</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right column - Highlights and personal info */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 bg-card-gradient shadow-card border-border/50 hover:shadow-primary transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>

            {/* Strengths */}
            <Card className="p-6 bg-card-gradient shadow-card border-border/50">
              <h4 className="text-lg font-semibold mb-4">Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <Badge key={strength} variant="secondary" className="bg-skill-gradient">
                    {strength}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 bg-card-gradient shadow-card border-border/50">
              <h4 className="text-lg font-semibold mb-4">Interests</h4>
              <div className="space-y-2">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6 bg-card-gradient shadow-card border-border/50">
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{language.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < language.level ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;