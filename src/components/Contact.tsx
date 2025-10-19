import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/Hsinjar2001", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Facebook, url: "#", label: "Facebook" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on your next project. Feel free to reach out!
            </p>
          </div>

          {/* Contact Card */}
          <Card className="shadow-xl">
            <CardContent className="pt-8">
              <div className="space-y-8">
                {/* Email */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Email me at</p>
                    <a
                      href="mailto:rajnishsaphi@example.com"
                      className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      rajnishsaphi@example.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Connect with me on social media
                  </p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          asChild
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Rajnish Kumar Saphi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
