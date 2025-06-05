import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johndeveloper",
      href: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johndeveloper",
      href: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className={`py-24 ${theme.styles.container}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl ${theme.fonts.heading} ${theme.colors.primary} mb-4`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 ${theme.colors.accent} bg-current mx-auto mb-8`}></div>
          <p className={`text-lg ${theme.colors.text} ${theme.fonts.main} max-w-2xl mx-auto`}>
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`${theme.styles.card} p-6`}>
              <h3 className={`text-2xl ${theme.fonts.main} font-semibold mb-6 ${theme.colors.primary}`}>Let's Connect</h3>
              <p className={`${theme.colors.text} ${theme.fonts.main} leading-relaxed mb-8`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to chat about 
                technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={info.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`flex items-center space-x-4 p-4 ${theme.styles.card} hover:${theme.colors.accent} transition-colors duration-200 group`}
                >
                  <div className={`w-12 h-12 ${theme.colors.accent} bg-current rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`${theme.fonts.main} font-medium ${theme.colors.primary}`}>{info.label}</div>
                    <div className={`text-sm ${theme.fonts.main} ${theme.colors.muted}`}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <Card className={`${theme.styles.card}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`${theme.fonts.main} font-semibold mb-2 ${theme.colors.primary}`}>Resume</h4>
                    <p className={`text-sm ${theme.fonts.main} ${theme.colors.muted}`}>
                      Download my complete professional background and experience
                    </p>
                  </div>
                  <Button className={`${theme.styles.button} ${theme.fonts.main}`}>
                    <FileText className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`${theme.styles.card}`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${theme.fonts.main} ${theme.colors.primary}`}>Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`text-sm ${theme.fonts.main} font-medium mb-2 block ${theme.colors.primary}`}>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full ${theme.styles.surface} ${theme.colors.border} border-2 ${theme.colors.text} ${theme.fonts.main} placeholder:${theme.colors.muted} focus:${theme.colors.accent}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`text-sm ${theme.fonts.main} font-medium mb-2 block ${theme.colors.primary}`}>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full ${theme.styles.surface} ${theme.colors.border} border-2 ${theme.colors.text} ${theme.fonts.main} placeholder:${theme.colors.muted} focus:${theme.colors.accent}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`text-sm ${theme.fonts.main} font-medium mb-2 block ${theme.colors.primary}`}>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full resize-none ${theme.styles.surface} ${theme.colors.border} border-2 ${theme.colors.text} ${theme.fonts.main} placeholder:${theme.colors.muted} focus:${theme.colors.accent}`}
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full ${theme.styles.button} py-3 rounded-lg ${theme.fonts.main} font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;