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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="bg-gray-900 border border-green-400/30 rounded-lg p-8">
            <div className="text-green-400 font-mono text-sm mb-4 text-left">
              alex@portfolio:~$ whoami
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-green-400 mb-6">
              Alex Chen
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-mono text-gray-300">
                {displayedText}
                <span className="animate-pulse text-green-400">█</span>
              </h2>
            </div>
          </div>

          <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6">
            <p className="text-gray-300 font-mono text-lg leading-relaxed">
              <span className="text-green-400">alex@portfolio:~$</span> cat about.txt<br/>
              Building robust systems and elegant interfaces. Passionate about open-source, 
              clean code, and solving complex problems with simple solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              className="bg-green-400 text-black hover:bg-green-500 px-8 py-3 rounded font-mono font-semibold tracking-wide transition-colors"
            >
              ./contact.sh
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('#projects', '_self')}
              className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded font-mono font-semibold tracking-wide"
            >
              ls projects/
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-green-400 transition-colors"
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