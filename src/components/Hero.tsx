import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <div className="animate-fade-in">
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            John Developer
          </h1>
        </div>

        {/* Typed effect title */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 min-h-[3rem]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Description */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I craft digital experiences with modern technologies, building scalable web applications 
            and turning ideas into reality through clean, efficient code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('#projects', '_self')}
            className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Code className="mr-2 h-5 w-5" />
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in flex justify-center space-x-6" style={{ animationDelay: '1s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;