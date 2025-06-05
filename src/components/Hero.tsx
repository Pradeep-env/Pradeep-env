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
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
              Alex Chen
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-600 dark:text-neutral-400 tracking-wide">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            I build digital products that are functional, beautiful, and meaningful. 
            Currently focused on modern web technologies and user-centered design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-3 rounded-none font-light tracking-wide transition-colors"
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('#projects', '_self')}
              className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-8 py-3 rounded-none font-light tracking-wide"
            >
              View Work
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;