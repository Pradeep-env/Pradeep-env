import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-light tracking-tight text-center mb-4">
            About
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="text-xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I'm a full-stack developer with 6+ years of experience building web applications 
              that users love. I focus on creating clean, efficient code and intuitive user experiences.
            </p>
            
            <p className="text-lg font-light text-neutral-500 dark:text-neutral-500 leading-relaxed">
              My approach combines technical expertise with design thinking. I believe the best 
              solutions come from understanding both the problem and the people who will use the product.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-center">
                <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-2">6+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide uppercase">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-2">50+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide uppercase">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-2">15+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide uppercase">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;