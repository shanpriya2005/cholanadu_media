import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating visual elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-[#A66C2D] to-[#C28840] rounded-full opacity-30 animate-pulse delay-700"></div>
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>

        <h1 className="mt-20 text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in font-mayan">
  Cholanadu Media
  <span className="block">
    Corporation
  </span>
</h1>





        <p className="text-xl  md:text-2xl text-[#4d4d4d] font-medium leading-relaxed mb-4 max-w-3xl mx-auto animate-fade-in">
  We influence people with your brand 
</p>

<p className="text-lg text-black font-normal italic leading-loose max-w-2xl mx-auto mb-4 animate-fade-in">
  Ready to grow your business? You’ve come the right way.<br />
  <span className="font-semibold text-black">Cholanadu Media Corporation</span> is India’s leading branding and advertising agency.
</p>

        <span className="text-xl italic mt-4 block text-[#6B4F2D] font-medium tracking-wide animate-fade-in delay-200">
  “Show BIG to Feel BIG — and when you feel BIG, you are a
  <strong className="text-[#C28840] font-bold not-italic"> BRAND</strong>”
</span>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5 mb-20 animate-fade-in delay-300">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C28840] to-[#A66C2D] hover:from-[#A66C2D] hover:to-[#C28840] text-primary-foreground px-8 py-4 text-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
