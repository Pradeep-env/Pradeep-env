import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-24 ${theme.styles.surface}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className={`text-4xl ${theme.fonts.heading} ${theme.colors.primary} mb-4`}>
            About Me
          </h2>
          <div className={`w-16 h-px ${theme.colors.accent} bg-current`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className={`${theme.styles.card} p-6`}>
              <p className={`${theme.colors.text} ${theme.fonts.main} text-lg leading-relaxed`}>
                With over 6 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications that solve real-world problems. My journey in software 
                development has taken me through various industries and technologies, always with a 
                focus on delivering high-quality solutions.
              </p>
            </div>
            
            <div className={`${theme.styles.card} p-6`}>
              <p className={`${theme.colors.text} ${theme.fonts.main} text-lg leading-relaxed`}>
                I believe in writing clean, maintainable code and following best practices in software 
                architecture. My approach combines technical expertise with a deep understanding of 
                user needs, ensuring that every project delivers both functionality and exceptional 
                user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className={`${theme.styles.card} p-6 text-center`}>
                <div className={`text-3xl ${theme.fonts.heading} ${theme.colors.primary} mb-2`}>6+</div>
                <div className={`text-sm ${theme.fonts.main} ${theme.colors.muted} uppercase tracking-wide`}>Years Experience</div>
              </div>
              <div className={`${theme.styles.card} p-6 text-center`}>
                <div className={`text-3xl ${theme.fonts.heading} ${theme.colors.primary} mb-2`}>50+</div>
                <div className={`text-sm ${theme.fonts.main} ${theme.colors.muted} uppercase tracking-wide`}>Projects Completed</div>
              </div>
              <div className={`${theme.styles.card} p-6 text-center`}>
                <div className={`text-3xl ${theme.fonts.heading} ${theme.colors.primary} mb-2`}>15+</div>
                <div className={`text-sm ${theme.fonts.main} ${theme.colors.muted} uppercase tracking-wide`}>Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;