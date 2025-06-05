import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Crosshair } from 'lucide-react';
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
          <div className="bg-black border-2 border-orange-500/50 rounded-lg p-8 relative">
            <div className="absolute top-2 left-2 text-orange-500 text-xs font-mono">
              [TACTICAL HUD] STATUS: ONLINE
            </div>
            <div className="text-orange-500 font-mono text-sm mb-4 text-left mt-4">
              &gt; OPERATOR_ID: ALEXCHEN_001
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-orange-500 mb-6 tracking-wider">
              ALEX CHEN
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-mono text-gray-300">
                {displayedText}
                <span className="animate-pulse text-orange-500">▮</span>
              </h2>
            </div>
          </div>

          <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6">
            <p className="text-gray-300 font-mono text-lg leading-relaxed">
              <span className="text-orange-500">[MISSION_BRIEFING]</span><br/>
              Elite full-stack operative specializing in high-performance systems. 
              Mission-critical applications deployed across multiple theaters. 
              Expertise in tactical code deployment and system infiltration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              className="bg-orange-500 text-black hover:bg-orange-600 px-8 py-3 rounded font-mono font-semibold tracking-wide transition-colors border-2 border-orange-500"
            >
              [ESTABLISH CONTACT]
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('#projects', '_self')}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3 rounded font-mono font-semibold tracking-wide"
            >
              [VIEW OPERATIONS]
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors p-2 border border-gray-600 rounded"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors p-2 border border-gray-600 rounded"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-orange-500 transition-colors p-2 border border-gray-600 rounded"
            >
              <Mail size={24} />
            </a>
            <div className="text-gray-400 p-2 border border-gray-600 rounded">
              <Crosshair size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;