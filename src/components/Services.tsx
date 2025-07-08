
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Palette, Megaphone, Code, BarChart3 } from "lucide-react";


import { Link } from 'react-router-dom';


const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic storytelling that captures your brand's essence and engages your audience.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography that showcases your products and services in the best light.",
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity systems that make lasting impressions and build recognition.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaigns that reach the right audience at the right time with the right message.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers and drive growth.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Data-driven insights that optimize performance and maximize your return on investment.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg mt-6 italic text-black max-w-3xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand and drive measurable results across all digital channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to="/services" key={index}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
