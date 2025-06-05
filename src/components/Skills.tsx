const Skills = () => {
  const skillCategories = [
    {
      title: "~/languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "C++"]
    },
    {
      title: "~/frontend",
      skills: ["React", "Next.js", "Vue", "Svelte", "Tailwind", "SCSS"]
    },
    {
      title: "~/backend",
      skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
      title: "~/devops",
      skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Linux"]
    },
    {
      title: "~/tools",
      skills: ["Git", "Vim", "VS Code", "Postman", "Jest", "Webpack"]
    },
    {
      title: "~/systems",
      skills: ["Ubuntu", "CentOS", "Nginx", "Apache", "Bash", "systemd"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat /etc/skills
          </div>
          <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">
            Technical Arsenal
          </h2>
          <div className="w-16 h-px bg-green-400 "></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-gray-900 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-green-400 font-mono text-lg font-semibold">
                  {category.title}
                </h3>
                <div className="w-full h-px bg-green-400/20 mt-2"></div>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="text-gray-300 font-mono text-sm hover:text-green-400 transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${(index * 6 + skillIndex) * 0.05}s` }}
                  >
                    <span className="text-green-400">├─</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              <span className="text-green-400">alex@portfolio:~$</span> echo "Passionate about building robust, scalable systems with clean architecture. Always exploring new technologies and contributing to open-source projects."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;