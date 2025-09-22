import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-morphism shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="gradient-text">Varun</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('mailto:varunmamidala85@gmail.com?subject=Hire Me&body=Hello Varun, I\'d like to discuss a job opportunity.', '_blank')}
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-morphism border-t border-border/50 shadow-card">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
              <div className="pt-3">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('mailto:varunmamidala85@gmail.com?subject=Hire Me&body=Hello Varun, I\'d like to discuss a job opportunity.', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;