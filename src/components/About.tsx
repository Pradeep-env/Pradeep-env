import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat /proc/about
          </div>
          <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">
            System Information
          </h2>
          <div className="w-16 h-px bg-green-400"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-black border border-green-400/30 rounded-lg p-6">
              <p className="text-gray-300 font-mono text-lg leading-relaxed">
                <span className="text-green-400">alex@portfolio:~$</span> uptime<br/>
                <span className="text-gray-400">6+ years experience building scalable web applications, 
                microservices, and distributed systems. Specializing in full-stack development 
                with a passion for clean architecture and performance optimization.</span>
              </p>
            </div>
            
            <div className="bg-black border border-green-400/30 rounded-lg p-6">
              <p className="text-gray-300 font-mono text-lg leading-relaxed">
                <span className="text-green-400">alex@portfolio:~$</span> ps aux | grep philosophy<br/>
                <span className="text-gray-400">Code should be readable, maintainable, and elegant. 
                I believe in test-driven development, continuous integration, and the power 
                of open-source collaboration.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-black border border-green-400/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-green-400 mb-2">6+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-black border border-green-400/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-green-400 mb-2">50+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Projects Deployed</div>
              </div>
              <div className="bg-black border border-green-400/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-green-400 mb-2">15+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;