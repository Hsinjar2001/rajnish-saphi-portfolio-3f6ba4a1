import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "BSc. Hons in Computing",
      institution: "Softwarica College of IT & E-Commerce",
      status: "Running",
    },
    {
      degree: "Diploma in Computer Application",
      institution: "Sarlahi Computer Centre",
      grade: "First Division, 75–85%",
    },
    {
      degree: "English Spoken Course (6 months)",
      institution: "American Computer Center, Janakpurdham",
      grade: "Grade A",
    },
    {
      degree: "10+2 (Science)",
      institution: "Mithila Institute of Technology (MIT), Janakpurdham",
      grade: "Grade 3.22(A), 80%",
    },
    {
      degree: "S.E.E",
      institution: "Tirahut High School",
      grade: "Grade 2.6(B)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Bio */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate developer who loves creating intuitive, user-friendly websites and 
                applications that make a difference. Dedicated to problem-solving and continuous 
                learning, turning ideas into seamless digital experiences. I thrive on collaborating 
                and delivering high-quality solutions that help businesses grow and users connect 
                effortlessly.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.grade && (
                          <p className="text-sm text-accent font-medium mt-1">{edu.grade}</p>
                        )}
                        {edu.status && (
                          <p className="text-sm text-accent font-medium mt-1">{edu.status}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
