import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

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
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ ping alex@portfolio.dev
          </div>
          <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">
            Establish Connection
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto">
            PING successful. Port 22 open. Ready for secure transmission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-mono font-semibold mb-6 text-green-400">$ cat connection_info.txt</h3>
              <p className="text-gray-300 font-mono leading-relaxed mb-8">
                Looking for collaboration on innovative projects? Ready to discuss 
                system architecture, code optimization, or new technologies? 
                Let's establish a secure connection.
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
                  className="flex items-center space-x-4 p-4 bg-black border border-green-400/30 rounded-lg hover:border-green-400 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-mono font-medium text-green-400">{info.label}</div>
                    <div className="text-sm font-mono text-gray-400">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="bg-gray-900 border border-green-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-mono font-semibold mb-2 text-green-400">$ cat resume.pdf</h4>
                    <p className="text-sm font-mono text-gray-400">
                      Download complete system documentation and credentials
                    </p>
                  </div>
                  <Button className="bg-green-400 text-black hover:bg-green-500 font-mono">
                    <FileText className="mr-2 h-4 w-4" />
                    ./download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border border-green-400/30">
            <CardHeader>
              <CardTitle className="text-2xl font-mono text-green-400">$ vim message.txt</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-mono font-medium mb-2 block text-green-400">
                    --name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="username"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-green-400/30 text-gray-300 font-mono placeholder:text-gray-500 focus:border-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-mono font-medium mb-2 block text-green-400">
                    --email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="user@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-green-400/30 text-gray-300 font-mono placeholder:text-gray-500 focus:border-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-mono font-medium mb-2 block text-green-400">
                    --message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="echo 'Your message here...'"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none bg-black border-green-400/30 text-gray-300 font-mono placeholder:text-gray-500 focus:border-green-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-400 text-black hover:bg-green-500 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  ./send.sh
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