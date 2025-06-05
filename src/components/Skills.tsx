import { useTheme } from '@/contexts/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue", "Tailwind CSS"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Linux"]
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Postman", "Jest", "Webpack", "Figma"]
    }
  ];

  return (
    <section id="skills" className={`py-24 ${theme.styles.container}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className={`text-4xl ${theme.fonts.heading} ${theme.colors.primary} mb-4`}>
            Skills & Technologies
          </h2>
          <div className={`w-16 h-px ${theme.colors.accent} bg-current`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={`${theme.styles.card} p-6 hover:${theme.colors.accent} transition-all duration-300 hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className={`${theme.colors.primary} ${theme.fonts.main} text-lg font-semibold`}>
                  {category.title}
                </h3>
                <div className={`w-full h-px ${theme.colors.accent} bg-current opacity-20 mt-2`}></div>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`${theme.colors.text} ${theme.fonts.main} text-sm hover:${theme.colors.accent} transition-colors duration-200 cursor-default`}
                    style={{ animationDelay: `${(index * 6 + skillIndex) * 0.05}s` }}
                  >
                    <span className={`${theme.colors.accent}`}>•</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className={`${theme.styles.card} p-6 max-w-3xl mx-auto`}>
            <p className={`${theme.colors.text} ${theme.fonts.main} text-sm leading-relaxed`}>
              Constantly learning and adapting to new technologies to deliver cutting-edge solutions 
              that meet evolving business needs and user expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;