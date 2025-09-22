import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Code, Database, GitBranch } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Assets (Driver-HOS) - Mastery Logistics Systems",
      description: "Maintained driver details including driving status, time periods, shift status, and cycle status for logistics operations.",
      technologies: ["JavaScript", "React.js", "NestJS", "TypeScript", "Node.js", "MongoDB", "Mongoose", "Apollo GraphQL", "Kafka"],
      achievements: [
        "Built efficient, reusable Frontend code with React functional components",
        "Developed reliable Backend services with Node.js and NestJS",
        "Implemented real-time status tracking system"
      ],
      icon: Code
    },
    {
      title: "Assets (Driver-Trailer-Power) - Mastery Logistics Systems",
      description: "Comprehensive system for maintaining Driver, Trailer, and Power information for logistics clients with improved performance.",
      technologies: ["JavaScript", "React.js", "TypeScript", "Node.js", "MySQL", "Kafka", "Apollo GraphQL", "TypeORM"],
      achievements: [
        "Achieved 40+ system performance improvement",
        "Created scalable Kafka APIs for service communication",
        "Built maintainable frontend with React and reliable backend with TypeORM"
      ],
      icon: Database
    }
  ];

  const responsibilities = [
    {
      icon: Users,
      title: "Agile Methodology",
      description: "Daily scrums and Sprint meetings (planning, Review) to meet deadlines and expectations"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building efficient, reusable, and reliable Frontend and Backend code"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Working with MongoDB, MySQL, and implementing data flow optimization"
    },
    {
      icon: GitBranch,
      title: "Service Architecture",
      description: "Implementing microservices and reliable service communication using Kafka"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Star Award",
      organization: "Centific PVT. LTD",
      description: "Recognition for outstanding performance and contribution to team success"
    },
    {
      year: "2023",
      title: "High-Five Award",
      organization: "Centific PVT. LTD",
      description: "Acknowledged for exceptional work quality and team collaboration"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building scalable logistics solutions and contributing to significant performance improvements
          </p>
        </div>

        {/* Current Role */}
        <div className="mb-16">
          <Card className="p-8 bg-card-gradient shadow-card border-border/50">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Software Engineer</h3>
                    <p className="text-xl text-primary font-semibold">Centific Pvt Ltd</p>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>April 2022 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Hyderabad, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Collaborated with the Mastery team, contributing to the development and maintenance of logistics 
                  software solutions that significantly improved system performance and operational efficiency.
                </p>

                {/* Key Impact */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-semibold text-accent mb-2">Key Impact</h4>
                  <p className="text-muted-foreground">
                    Contributed to logistics microservices that achieved <span className="text-accent font-semibold">40+ performance improvement</span> 
                    in system operations, enhancing overall efficiency for logistics clients.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Key Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-card border-border/50 hover:shadow-primary transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-skill-gradient text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Key Achievements</h5>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Core Responsibilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-card border-border/50 hover:shadow-accent transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <responsibility.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">{responsibility.title}</h4>
                <p className="text-sm text-muted-foreground">{responsibility.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Recognition & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-card border-border/50 hover:shadow-primary transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary">{achievement.year}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;