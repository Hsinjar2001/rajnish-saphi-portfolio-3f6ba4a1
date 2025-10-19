import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building responsive, modern web applications from front to back. Expert in creating scalable solutions using React, Node.js, and modern databases.",
      features: [
        "Responsive web design",
        "RESTful API development",
        "Database architecture",
        "Performance optimization",
      ],
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description:
        "Creating dashboards, visualizations, and insights using Excel, SQL, Power BI, Tableau, and R. Transform your data into actionable intelligence.",
      features: [
        "Data visualization",
        "Business intelligence",
        "Statistical analysis",
        "Interactive dashboards",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-t-4 border-t-primary"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Services;
