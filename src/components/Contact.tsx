import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "varunmamidala85@gmail.com",
      href: "mailto:varunmamidala85@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9951412566",
      href: "tel:+919951412566",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/varunmamidala",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/varunmamidala",
      color: "hover:text-primary"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "#home",
      color: "hover:text-accent"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className={`text-lg font-medium ${contact.color} hover:underline transition-colors`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className={`${social.color} hover:scale-110 transition-all duration-300`}
                      onClick={() => {
                        if (social.href.startsWith('#')) {
                          const element = document.querySelector(social.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          window.open(social.href, '_blank');
                        }
                      }}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('mailto:varunmamidala85@gmail.com?subject=Let\'s Connect&body=Hello Varun, I\'d like to discuss a potential opportunity.', '_blank')}
                >
                  <Send className="w-5 h-5" />
                  Send a Message
                </Button>
                <Button 
                  className="w-full" 
                  variant="glass" 
                  size="lg"
                  onClick={() => {
                    // Download the resume file
                    const link = document.createElement('a');
                    link.href = '/Varun_Mamidala_Resume.pdf';
                    link.download = 'Varun_Mamidala_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>

          {/* Professional Summary */}
          <div className="space-y-8">
            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Why Work With Me?</h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Full-Stack Expertise</h4>
                      <p className="text-muted-foreground">End-to-end development with React.js, Node.js, NestJS, and modern databases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-secondary">Proven Track Record</h4>
                      <p className="text-muted-foreground">3+ years of experience with measurable performance improvements (40%+)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-accent">Modern Technologies</h4>
                      <p className="text-muted-foreground">TypeScript, GraphQL, Microservices, Kafka, and cloud platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Agile Methodology</h4>
                      <p className="text-muted-foreground">Collaborative development with testing, CI/CD, and deadline-driven delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient shadow-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Available For</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-skill-gradient rounded-lg">
                  <h4 className="font-semibold mb-2">Full-time</h4>
                  <p className="text-sm text-muted-foreground">Remote or Hybrid</p>
                </div>
                
                <div className="text-center p-4 bg-skill-gradient rounded-lg">
                  <h4 className="font-semibold mb-2">Contract</h4>
                  <p className="text-sm text-muted-foreground">Project-based</p>
                </div>
                
                <div className="text-center p-4 bg-skill-gradient rounded-lg">
                  <h4 className="font-semibold mb-2">Consulting</h4>
                  <p className="text-sm text-muted-foreground">Technical guidance</p>
                </div>
                
                <div className="text-center p-4 bg-skill-gradient rounded-lg">
                  <h4 className="font-semibold mb-2">Mentoring</h4>
                  <p className="text-sm text-muted-foreground">Code reviews</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-hero-gradient/10 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how my expertise in modern web technologies can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('mailto:varunmamidala85@gmail.com?subject=Project Discussion&body=Hello Varun, I\'d like to discuss a potential project collaboration.', '_blank')}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start a Conversation
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="group"
                onClick={() => window.open('tel:+919951412566', '_blank')}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule a Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;