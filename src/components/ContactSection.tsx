import { useState } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      url: 'https://github.com/shashank1730',
      username: '@shashank1730'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shashank1730',
      username: 'Shashank Nallabothu'
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: 'Twitter',
      url: 'https://twitter.com/shashank1730',
      username: '@shashank1730'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      url: 'mailto:nallabothushashank125@gmail.com',
      username: 'nallabothushashank125@gmail.com'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-paper">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sketch font-bold mb-4 sketch-underline">
            Let's Chat!
          </h2>
          <p className="text-xl text-muted-foreground font-handwritten max-w-2xl mx-auto">
            Got a project in mind? Want to collaborate? Or just want to say hi? 
            Drop me a message! ✉️
          </p>
          <div className="sketch-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="sketch-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-sketch font-semibold">
                  Send me a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-handwritten text-sm font-semibold">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      className="sketch-border font-handwritten"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-handwritten text-sm font-semibold">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="sketch-border font-handwritten"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-handwritten text-sm font-semibold">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's build something amazing!"
                    className="sketch-border font-handwritten"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-handwritten text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                    rows={6}
                    className="sketch-border font-handwritten resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="btn-sketch-primary w-full text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="sketch-card p-8">
              <h3 className="text-3xl font-sketch font-semibold mb-6 flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                Get in touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-handwritten text-sm text-muted-foreground">Email</p>
                    <a href="mailto:nallabothushashank125@gmail.com" className="font-handwritten text-lg font-semibold sketch-underline">
                      nallabothushashank125@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-handwritten text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="font-handwritten text-lg font-semibold sketch-underline">
                      Available on request
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-handwritten text-sm text-muted-foreground">Location</p>
                    <p className="font-handwritten text-lg font-semibold">
                      Arlington, TX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="sketch-card p-8">
              <h3 className="text-3xl font-sketch font-semibold mb-6">
                Find me online
              </h3>
              
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-4 p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-handwritten font-semibold">
                        {social.label}
                      </p>
                      <p className="font-handwritten text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Note */}
            <div className="sketch-card p-6 bg-primary/5 border-primary/20">
              <h4 className="font-sketch text-xl font-semibold mb-3 text-primary">
                ☕ Coffee Chat?
              </h4>
              <p className="font-handwritten text-muted-foreground leading-relaxed">
                I'm always up for a virtual coffee chat to discuss new ideas, 
                potential collaborations, or just to geek out about the latest 
                in AI and web development!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;