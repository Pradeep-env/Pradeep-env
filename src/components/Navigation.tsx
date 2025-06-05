import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from './ThemeSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.styles.nav}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl ${theme.fonts.heading} ${theme.colors.primary}`}>
              Alex Chen
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm ${theme.fonts.main} font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? `${theme.colors.primary} ${theme.styles.surface} ${theme.colors.border} border-2`
                      : `${theme.colors.secondary} hover:${theme.colors.primary}`
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <ThemeSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${theme.styles.surface} p-2 rounded-md ${theme.colors.primary} hover:${theme.colors.accent} ${theme.colors.border} border-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme.styles.surface} ${theme.colors.border} border-b`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base ${theme.fonts.main} font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? `${theme.colors.primary} ${theme.styles.surface} ${theme.colors.border} border-2`
                    : `${theme.colors.secondary} hover:${theme.colors.primary}`
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <ThemeSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;