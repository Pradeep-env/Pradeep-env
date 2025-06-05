import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  JD
                </div>
                <p className="text-lg font-semibold text-muted-foreground">
                  Passionate Developer
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                modern web applications. I love turning complex problems into simple, beautiful, 
                and intuitive solutions.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My journey in web development started with curiosity and has evolved into a 
                career focused on building scalable applications using cutting-edge technologies. 
                I specialize in React, Node.js, and cloud technologies.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border-none bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="border-none bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>

            {/* Key Points */}
            <div className="space-y-3 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-muted-foreground">Frontend & Backend Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-muted-foreground">UI/UX Design Principles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-muted-foreground">Cloud & DevOps Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;