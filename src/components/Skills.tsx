const Skills = () => {
  const skillCategories = [
    {
      title: "[WEAPONS]",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "C++"]
    },
    {
      title: "[TACTICAL_UI]",
      skills: ["React", "Next.js", "Vue", "Svelte", "Tailwind", "SCSS"]
    },
    {
      title: "[SERVER_OPS]",
      skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
      title: "[DEPLOYMENT]",
      skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Linux"]
    },
    {
      title: "[EQUIPMENT]",
      skills: ["Git", "Vim", "VS Code", "Postman", "Jest", "Webpack"]
    },
    {
      title: "[INFRASTRUCTURE]",
      skills: ["Ubuntu", "CentOS", "Nginx", "Apache", "Bash", "systemd"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-orange-500 text-lg mb-4">
            [LOADOUT_INVENTORY] SCANNING...
          </div>
          <h2 className="text-4xl font-mono font-bold text-orange-500 mb-4">
            TACTICAL ARSENAL
          </h2>
          <div className="w-16 h-px bg-orange-500 "></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-gray-900 border-2 border-orange-500/30 rounded-lg p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-orange-500 font-mono text-lg font-semibold">
                  {category.title}
                </h3>
                <div className="w-full h-px bg-orange-500/20 mt-2"></div>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="text-gray-300 font-mono text-sm hover:text-orange-500 transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${(index * 6 + skillIndex) * 0.05}s` }}
                  >
                    <span className="text-orange-500">●</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-900 border-2 border-orange-500/30 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              <span className="text-orange-500">[MISSION_STATUS]</span> Elite operative with mastery across multiple combat zones. Specializing in surgical strikes on legacy systems and establishing defensive perimeters around critical infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;