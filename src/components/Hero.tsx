import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer";
  const { theme } = useTheme();
  
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
    <section id="home" className={`min-h-screen flex items-center justify-center relative ${theme.styles.container}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className={`${theme.styles.card} p-8 relative`}>
            <h1 className={`text-5xl md:text-7xl ${theme.fonts.heading} ${theme.colors.primary} mb-6 tracking-wider`}>
              Alex Chen
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className={`text-2xl md:text-3xl ${theme.fonts.main} ${theme.colors.text}`}>
                {displayedText}
                <span className={`animate-pulse ${theme.colors.accent}`}>|</span>
              </h2>
            </div>
          </div>

          <div className={`${theme.styles.card} p-6`}>
            <p className={`${theme.colors.text} ${theme.fonts.main} text-lg leading-relaxed`}>
              Passionate full-stack developer with expertise in modern web technologies. 
              Building scalable applications and delivering exceptional user experiences 
              through clean code and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              className={`${theme.styles.button} px-8 py-3 rounded ${theme.fonts.main} font-semibold tracking-wide transition-colors`}
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('#projects', '_self')}
              className={`${theme.colors.border} border-2 ${theme.colors.primary} hover:${theme.colors.accent} px-8 py-3 rounded ${theme.fonts.main} font-semibold tracking-wide`}
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.colors.muted} hover:${theme.colors.accent} transition-colors p-2 ${theme.colors.border} border rounded`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.colors.muted} hover:${theme.colors.accent} transition-colors p-2 ${theme.colors.border} border rounded`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className={`${theme.colors.muted} hover:${theme.colors.accent} transition-colors p-2 ${theme.colors.border} border rounded`}
            >
              <Mail size={24} />
            </a>
            <div className={`${theme.colors.muted} p-2 ${theme.colors.border} border rounded`}>
              <Code size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;