import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import { Camera, Video, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import IntroVideo from "@/components/IntroVideo"; 


const MediaHighlights = () => {
  return (
    <section className="-mt-34 mb-10 px-4 sm:px-6 lg:px-8 z-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {[
          {
            Icon: Camera,
            title: "Branding",
            desc: "Crafting a strong and memorable brand identity.",
            gradient: "from-[#C28840] to-[#A66C2D]",
          },
          {
            Icon: Video,
            title: "Advertisement",
            desc: "Telling your story through compelling visuals.",
            gradient: "from-[#A66C2D] to-[#C28840]",
          },
          {
            Icon: Palette,
            title: "Marketing",
            desc: "Strategic campaigns that drive real engagement.",
            gradient: "from-[#C28840] to-[#A66C2D]",
          },
        ].map(({ Icon, title, desc, gradient }, i) => (
          <Link to="/services" key={i}>
            <div className="text-center p-8 rounded-lg bg-white/20 backdrop-blur-md border border-[#A66C2D]/50 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div
                className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mx-auto mb-5`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{title}</div>
              <div className="text-black text-md">{desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


// ✅ WhyChooseUs Component
const WhyChooseUs = () => (
  <section className="py-20 bg-card/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-4xl text-primary font-bold tracking-wide uppercase">
          Why Cholanadu Media
        </h2>

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
          One Stop Solution for Advertising & Marketing
        </p>
        <p className="mt-4 max-w-2xl text-xl italic text-black lg:mx-auto">
          Since 2008, we’ve been helping brands influence the masses by combining strategy, storytelling, and innovation.
        </p>
      </div>

      <div className="mt-12">
        <dl className="grid ml-16 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {[
            "Creating Big Ideas That Stand Out",
            "Pinpoint Targeted Audience Reach",
            "Ad Films with Unique & Original Scripts",
            "Boost in Sales and Client Profit",
            "High-Quality Standards & Assurance",
            "Custom Strategy for Every Client",
            "Video Production Based on Psychographics",
            "Client Decides the Budget",
          ].map((point, idx) => (
            <div className="flex items-center" key={idx}>
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

// ✅ Index (Home Page)
const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const visitedBefore = sessionStorage.getItem("visited");

    if (!visitedBefore) {
      setShowVideo(true);
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  if (showVideo) {
    return <IntroVideo onFinish={() => setShowVideo(false)} />;
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
