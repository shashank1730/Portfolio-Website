import { useState } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { site, buildMailto } from "@/lib/site";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = formData.subject || `New message from ${formData.name}`;
    const body = `Hi Shashank,\n\n${formData.message}\n\n— ${formData.name}${
      formData.email ? `\n${formData.email}` : ""
    }`;

    window.location.href = buildMailto({ subject, body });

    toast({
      title: "Opening your email app ✉️",
      description: "Your message is pre-filled — just hit send!",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      url: buildMailto({ subject: "Let's connect!" }),
      username: site.email,
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      url: site.github,
      username: "@shashank1730",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      url: site.linkedin,
      username: "Shashank Nallabothu",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4">Contact</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4">Let's chat!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
            Got a project in mind, want to collaborate, or just want to say hi? Drop me a message. ✉️
          </p>
          <div className="sketch-divider max-w-md mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="sketch-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl border-2 border-foreground bg-card text-foreground">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold">Send me a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's build something amazing!"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  rows={6}
                  className="resize-none"
                  required
                />
              </div>

              <Button type="submit" className="btn-sketch-primary w-full text-lg py-6">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="sketch-card p-8">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <div className="p-2.5 rounded-xl border-2 border-foreground bg-card text-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                Get in touch
              </h3>

              <div className="space-y-5">
                <a
                  href={buildMailto({ subject: "Let's connect!" })}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl border-2 border-foreground bg-card text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                      Email
                    </p>
                    <p className="font-medium sketch-underline">{site.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl border-2 border-foreground bg-card text-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                      Phone
                    </p>
                    <p className="font-medium">Available on request</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl border-2 border-foreground bg-card text-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                      Location
                    </p>
                    <p className="font-medium">{site.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="sketch-card p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Find me online</h3>

              <div className="grid gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-foreground hover:bg-secondary/60 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-xl border-2 border-foreground bg-card text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
