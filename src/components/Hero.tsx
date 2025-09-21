import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code2, Database, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold">
              <span className="gradient-text">Varun</span>
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground/90">
              Mamidala
            </h2>
            <div className="flex items-center justify-center gap-4 text-xl lg:text-2xl text-muted-foreground">
              <Code2 className="w-6 h-6 text-primary" />
              <span>Full-Stack Developer</span>
              <Database className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            3+ years of experience building <span className="text-primary font-semibold">high-performance</span>, 
            <span className="text-accent font-semibold"> scalable web applications</span> using modern technologies 
            like React.js, Node.js, NestJS, and GraphQL.
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['React.js', 'Node.js', 'NestJS', 'GraphQL', 'TypeScript', 'MongoDB', 'MSSQL', 'Kafka'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-skill-gradient rounded-full text-sm font-medium glass-morphism"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="group"
              onClick={() => {
                // Create a link to download the resume
                const link = document.createElement('a');
                link.href = 'mailto:varunmamidala85@gmail.com?subject=Resume Request&body=Hello Varun, I would like to request your resume.';
                link.click();
              }}
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://github.com/varunmamidala', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/varunmamidala', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:scale-110 transition-all duration-300"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Globe className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;