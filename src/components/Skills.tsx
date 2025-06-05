const Skills = () => {
  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
    "Frontend": ["React", "Next.js", "Vue", "Svelte", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
    "Tools": ["Git", "Figma", "VS Code", "Postman", "Linear"]
  };

  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-light tracking-tight text-center mb-4">
            Technical Expertise
          </h2>
          <div className="w-16 h-px bg-neutral-900 dark:bg-neutral-100 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-medium text-neutral-600 dark:text-neutral-400 tracking-wide uppercase text-sm">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill, index) => (
                  <div 
                    key={skill}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-neutral-900 dark:text-neutral-100 text-lg font-light tracking-wide py-2 border-b border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            I focus on writing clean, maintainable code and building scalable applications 
            that solve real problems. Always learning and adapting to new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;