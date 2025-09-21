import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  TestTube, 
  Wrench,
  Layers,
  GitBranch
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: skillsRef, visibleItems: visibleSkills } = useStaggeredAnimation(Array(6), 200);
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5 & CSS", level: 90 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 85 },
        { name: "ExpressJS", level: 88 },
        { name: "GraphQL", level: 82 },
        { name: "Apollo GraphQL", level: 80 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "SQL Server", level: 85 },
        { name: "Cosmos DB", level: 80 },
        { name: "Mongoose", level: 85 },
        { name: "TypeORM", level: 82 }
      ]
    },
    {
      title: "Testing",
      icon: TestTube,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: [
        { name: "Cypress", level: 80 },
        { name: "Jest", level: 78 },
        { name: "Jasmine", level: 75 },
        { name: "Unit Testing", level: 82 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      skills: [
        { name: "Docker", level: 75 },
        { name: "GitHub", level: 90 },
        { name: "Azure", level: 80 },
        { name: "CI/CD", level: 78 }
      ]
    },
    {
      title: "Architecture",
      icon: Layers,
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: [
        { name: "Microservices", level: 85 },
        { name: "Kafka", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "System Design", level: 82 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-secondary";
    return "bg-accent";
  };

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center space-y-4 mb-16 transition-all duration-800 ${sectionVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full stack with focus on modern, scalable technologies
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`p-6 bg-card-gradient shadow-card border-border/50 hover:shadow-primary transition-all duration-700 group ${
                visibleSkills.has(index) ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className="mt-16">
          <Card className="p-8 bg-card-gradient shadow-card border-border/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Technology Stack Overview</h3>
              <p className="text-muted-foreground">
                Full-stack development with modern technologies and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Frontend Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  React.js with TypeScript for building responsive, interactive user interfaces
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Server className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold">Backend Mastery</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js and NestJS for scalable, maintainable server-side applications
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <GitBranch className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold">Modern Workflow</h4>
                <p className="text-sm text-muted-foreground">
                  Agile development with CI/CD, testing, and collaborative practices
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;