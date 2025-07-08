import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Brand growth powered by clear, measurable and creative strategies.",
  },
  {
    icon: Zap,
    title: "Innovative Campaigns",
    description: "Bold campaigns that merge creativity with media excellence.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Driven by professionals with deep media and branding expertise.",
  },
  {
    icon: Award,
    title: "Brand Impact",
    description: "Our clients evolve into memorable and impactful brands.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-14">
        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="mb-16 text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-down">
                  About Us
                </h1>

                <div className="w-full max-w-xl h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] mb-4 rounded-full animate-expand-line"></div>

                <div className="text-xl text-[#5c4631] space-y-5 mb-8 max-w-xl">
                  <p>
                    <strong className="text-[#A66C2D]">
                      Cholanadu Media Corporation
                    </strong>{" "}
                    is an Integrated Full-Service Branding & Advertising Agency,
                    blending Creativity, Technology, and Innovative Thinking —
                    all at affordable pricing.
                  </p>
                  <p>
                    Founded by{" "}
                    <strong className="text-[#A66C2D]">Kaarthik Pillai</strong>{" "}
                    and co-founded by{" "}
                    <strong className="text-[#A66C2D]">
                      Ashmitha Kaarthik Pillai
                    </strong>
                    , a seasoned Brand Strategist with deep media insights,
                    Cholanadu stands as a beacon of branding excellence.
                  </p>
                  <p>
                    With a powerhouse team of experts, we specialize in
                    transforming your product or personal identity into a
                    compelling brand. From strategic commercials and media
                    campaigns to performance marketing, PR, and brand
                    positioning — we walk the talk.
                  </p>
                </div>

                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#A66C2D] to-[#C28840] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:brightness-110 transition"
                  >
                    Let's Build Your Brand
                  </Button>
                </Link>
              </div>

              {/* 👉 Updated Grid Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Link to="/services" key={index}>
                    <div
                      className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C28840] to-[#A66C2D] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#4d4d4d] text-sm">
                        {value.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {/* 👉 End of Grid Section */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
