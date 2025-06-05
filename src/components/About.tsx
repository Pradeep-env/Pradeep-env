import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-orange-500 text-lg mb-4">
            [INTEL_REPORT] CLASSIFIED
          </div>
          <h2 className="text-4xl font-mono font-bold text-orange-500 mb-4">
            OPERATOR PROFILE
          </h2>
          <div className="w-16 h-px bg-orange-500"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6">
              <p className="text-gray-300 font-mono text-lg leading-relaxed">
                <span className="text-orange-500">[COMBAT_EXPERIENCE]</span><br/>
                <span className="text-gray-400">6+ years active duty in the development theater. 
                Specialized in high-stakes deployments, system infiltration, and mission-critical 
                applications. Expert marksman in full-stack operations with zero downtime record.</span>
              </p>
            </div>
            
            <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6">
              <p className="text-gray-300 font-mono text-lg leading-relaxed">
                <span className="text-orange-500">[TACTICAL_DOCTRINE]</span><br/>
                <span className="text-gray-400">Code deployment with surgical precision. Adherence to clean 
                architecture protocols and defensive programming strategies. Commitment to 
                continuous reconnaissance and open-source intelligence gathering.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-orange-500 mb-2">6+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Years Active</div>
              </div>
              <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-orange-500 mb-2">50+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Missions Complete</div>
              </div>
              <div className="bg-black border-2 border-orange-500/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-mono font-bold text-orange-500 mb-2">15+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Allied Forces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;