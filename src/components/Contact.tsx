import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rajnishrajak82@gmail.com", href: "mailto:rajnishrajak82@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977 (XXX) XXX-XXX", href: "tel:+977XXXXXXXXX" },
    { icon: Linkedin, label: "LinkedIn", value: "Rajnish Kumar Saphi", href: "https://www.linkedin.com/in/rajnish-kumar-saphi-75b651256/" },
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: null },
    { icon: Clock, label: "Working Hours", value: "Mon - Fri, 9:00 - 17:00", href: null },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/Hsinjar2001", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/rajnish-kumar-saphi-75b651256/", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Facebook, url: "#", label: "Facebook" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Let's Create Something Amazing!</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Get in Touch */}
            <Card className="shadow-xl">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground hover:text-accent transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="w-10 h-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          asChild
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            <IconComponent className="w-4 h-4" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Send a Message */}
            <Card className="shadow-xl">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...register("subject")}
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

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
