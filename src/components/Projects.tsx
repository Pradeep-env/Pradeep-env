import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Weather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and group chat functionality.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ ls -la /home/alex/projects/
          </div>
          <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">
            Repository Archive
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto">
            drwxr-xr-x 6 alex alex 4096 recent_projects.git
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-black border border-green-400/30 overflow-hidden hover:border-green-400 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-400 text-black hover:bg-green-500 font-mono">
                      <Github className="mr-2 h-4 w-4" />
                      ./code
                    </Button>
                    <Button size="sm" className="border border-green-400 text-green-400 hover:bg-green-400/10 font-mono">
                      <FileText className="mr-2 h-4 w-4" />
                      ./demo
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 border border-green-400/30 text-green-400 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-mono font-semibold text-center mb-8 text-green-400">
            $ find ./archive -name "*.git"
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group bg-black border border-green-400/30 overflow-hidden hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-4">
                  <h4 className="text-lg font-mono font-semibold mb-2 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 font-mono text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 border border-green-400/30 text-green-400 text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 border border-green-400/30 text-green-400 text-xs font-mono rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 text-xs bg-green-400 text-black hover:bg-green-500 font-mono">
                      <Github className="mr-1 h-3 w-3" />
                      code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs border border-green-400 text-green-400 hover:bg-green-400/10 font-mono">
                      <FileText className="mr-1 h-3 w-3" />
                      demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
