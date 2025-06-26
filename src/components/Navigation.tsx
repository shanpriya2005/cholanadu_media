import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
  <nav
  className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50"
  style={{
    boxShadow: `
      0 2px 6px rgba(162, 132, 64, 0.15),
      0 4px 12px rgba(166, 108, 45, 0.1),
      0 8px 24px rgba(162, 132, 64, 0.08)
    `,
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20"> {/* increased height */}
      <div className="flex-shrink-0 ml-3">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Chozan Media Logo"
            className="w-48 h-auto" // slightly bigger logo
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center space-x-5 text-xl"> {/* increased spacing & font size */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-primary-foreground bg-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Get Started button */}
      <div className="hidden md:flex">
        <Link to="/services">
          <Button className="px-6 py-3 text-base font-semibold mt-1">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground hover:text-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />} {/* slightly larger icon */}
        </button>
      </div>
    </div>

    {/* Mobile menu (unchanged except spacing) */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-3 pt-4 pb-5 space-y-2 bg-background border-t border-border text-base">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-4 py-3 rounded-md font-medium ${
                isActive(item.href)
                  ? "text-primary-foreground bg-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/services" className="block">
            <Button className="w-full mt-4 py-3 text-base font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navigation;
