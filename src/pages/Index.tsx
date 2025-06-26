import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import SplashScreen from "@/components/SplashScreen"; // Adjust path if needed
import { ArrowRight, Play, Camera, Video, Palette } from "lucide-react";

const MediaHighlights = () => {
  return (
    <section className="-mt-34 mb-10 px-4 sm:px-6 lg:px-8 z-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {[
          {
            Icon: Camera,
            title: "Photography",
            desc: "Professional Shoots",
            gradient: "from-[#C28840] to-[#A66C2D]",
          },
          {
            Icon: Video,
            title: "Film Production",
            desc: "Cinematic Stories",
            gradient: "from-[#A66C2D] to-[#C28840]",
          },
          {
            Icon: Palette,
            title: "Brand Design",
            desc: "Creative Identity",
            gradient: "from-[#C28840] to-[#A66C2D]",
          },
        ].map(({ Icon, title, desc, gradient }, i) => (
          <div
            key={i}
            className="
              text-center 
              p-8 
              rounded-lg 
              bg-white/20 
              backdrop-blur-md 
              border 
              border-[#A66C2D]/50 
              shadow-md 
              transform 
              transition 
              duration-300 
              hover:scale-105 
              hover:shadow-xl
            "
          >
            <div
              className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mx-auto mb-5`}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{title}</div>
            <div className="text-muted-foreground  text-[#4d4d4d] text-sm">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-20 bg-card/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-md text-primary font-bold tracking-wide uppercase">
          Why Cholanadu Media
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
          One Stop Solution for Advertising & Marketing
        </p>
        <p className="mt-4 max-w-2xl text-xl  italic text-[#4d4d4d] text-muted-foreground lg:mx-auto">
          Since 2008, we’ve been helping brands influence the masses by combining strategy, storytelling, and innovation.
        </p>
      </div>

      <div className="mt-12">
        <dl className="grid ml-16 grid-cols-1  md:grid-cols-2 gap-x-4 gap-y-6">
          {[
            "Client Decides the Budget",
            "Creating Big Ideas That Stand Out",
            "Ad Films with Unique & Original Scripts",
            "Video Production Based on Psychographics",
            "High-Quality Standards & Assurance",
            "Custom Strategy for Every Client",
            "Pinpoint Targeted Audience Reach",
            "Boost in Sales and Client Profit",
          ].map((point, idx) => (
<div className="flex items-center">
  <div className="flex items-center space-x-4">
    <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-r from-[#C28840] to-[#A66C2D] text-white">
      <CheckCircle size={22} />
    </div>
    <p className="text-lg font-medium text-foreground">{point}</p>
  </div>
</div>

          ))}
        </dl>
      </div>
    </div>
  </section>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Automatically stop loading after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MediaHighlights />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Clients />
      <Footer />
    </div>
  );
};

export default Index;
