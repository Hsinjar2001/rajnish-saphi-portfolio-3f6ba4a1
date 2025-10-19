import { Button } from "@/components/ui/button";
import { MapPin, Globe } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={profileImage}
                alt="Profile photo of Rajnish Kumar Saphi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Rajnish Kumar Saphi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Full-Stack Developer & Data Analyst turning ideas into seamless digital experiences
            </p>
          </div>

          {/* Languages and Location */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              <span>English, Nepali, Hindi</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Mahottari & Kathmandu, Nepal</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
