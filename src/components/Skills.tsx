import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML", "CSS", "React.js", "Tailwind", "JavaScript"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      skills: ["SQL", "Excel", "Tableau", "Power BI", "R"],
    },
    {
      title: "Programming & Tools",
      icon: Wrench,
      skills: ["Python", "C", "Java", "MS Office", "Adobe Creative Suite"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building full-stack applications and analyzing data
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
