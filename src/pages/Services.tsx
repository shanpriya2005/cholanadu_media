import Navigation from "@/components/Navigation";
import { CheckCircle } from "lucide-react";
import {
  Camera,
  Film,
  Users,
  Video,
  Newspaper,
  MapPin,
  Calendar,
  Monitor,
  Palette,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  
  
  {
    icon: Film,
    title: "Films",
    items: [
      "Ad Films",
      "Corporate Films",
      "Documentary Films",
      "TV Commercials",
      "Promotional Films",
      "Testimonial Films",
      "Awareness Films",
      "Animation Films",
      "Short Films",
      "Marketing Animation Visuals",
      "Educational Films",
    ],
  },
  {
    icon: Palette,
    title: "Designing & Printing",
    items: [
      "Logo Designing",
      "Pamphlets",
      "Leaflets",
      "Stickers",
      "Banners",
      "Posters",
      "Flux",
      "Magazine Design",
      "Catalogue",
    ],
  },
  {
    icon: MapPin,
    title: "Outdoor Advertisement",
    items: [
      "Bill Board Advertising",
      "Point of Sale Displays",
      "Street Furniture",
      "Bus Shelters",
      "Kiosks",
      "Telephone Booths",
      "Transit Advertising",
      "Wrap Advertising",
      "Mobile Bill Boards",
      "Guerrilla Advertising",
    ],
  },
  {
    icon: Users,
    title: "PR Services",
    items: ["Press Meets", "Product Launch Meet", "Success Meets", "Blog Articles","Movie Collaboration","In Filming", "Costume & Property Filming"],
  },
{
    icon: Megaphone,
    title: "Content Marketing",
    items: [
      "Paid Advertising (PPC)",
      "Influencer Marketing",
      "Affiliate Marketing",
      "Mobile Marketing",
      "Email Marketing",
      "Display Advertising",
      "Cross Marketing",
    ],
  },
  {
    icon: Newspaper,
    title: "Media Releases",
    items: ["Television", "FM", "Theaters", "Newspapers", "Magazines"],
  },
  
  
  {
    icon: Calendar,
    title: "Events",
    items: ["Promotional Events", "Entertainment Events", "Corporate Events", "Educational Events"],
  },
  {
    icon: Monitor,
    title: "Digital Marketing",
    items: [
      "Website Creation",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Video Marketing",
    ],
  },
  
  {
    icon: Camera,
    title: "Photo Shoot",
    items: [
      "Jewellery Photoshoot",
      "Product Photo Shoot",
      "Model Photo Shoot",
      "Sports Photo Shoot",
    ],
  },
  
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-down">
            What We Offer

          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] mx-auto mb-4 rounded-full animate-expand-line"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white/60 backdrop-blur-xl border border-[#e8dcc8] rounded-3xl p-8 pt-14 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-6 left-6 bg-gradient-to-br from-[#C28840] to-[#A66C2D] w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                <section.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#6b3f1d] mb-4">{section.title}</h3>

              <ul className="space-y-2 text-md text-black  leading-relaxed">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-[#C28840]" />
                    <span className="text-md"> {item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
