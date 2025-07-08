import { Link } from "react-router-dom";
import { Youtube, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-[#64431c]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* Logo & Tagline */}
          <div className="space-y-4 lg:pr-8">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Chozan Media Logo"
                className="h-28 sm:h-36 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-md italic font-semibold text-[#7e5a3c] leading-relaxed max-w-xs">
              " We Influence People with Your Brand "
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 pr-0 sm:pr-4">
            <div>
              <h3 className="text-xl font-bold text-[#5c4631] mb-2">Quick Links</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/gallery", label: "Gallery" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact Us" }
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[#7e5a3c] hover:text-[#5c4631] transition-colors duration-200 text-md font-medium hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:-ml-16"> {/* Negative margin only from sm up */}
            <div>
              <h3 className="text-xl font-bold text-[#5c4631] mb-2">Contact Info</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start group">
                <Mail className="w-5 h-5 text-[#A66C2D] mt-0.5 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:cholanadumediacorporation@gmail.com"
                  className="text-[#7e5a3c] hover:text-[#5c4631]  font-semibold transition-colors text-md break-all"
                >
                  contactus@cholanadu.in
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <Phone className="w-5 h-5 text-[#A66C2D] mt-0.5 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919884900478"
                  className="text-[#7e5a3c] hover:text-[#5c4631] transition-colors text-md font-medium"
                >
                  +91 98849 00478
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-[#A66C2D] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <address className="text-[#7e5a3c] text-md font-semibold not-italic ">
                  Cholanadu Media Corporation Pvt Ltd,<br />
                  No 73A, Pammal Main Road,<br />
                  Krishna Nagar, Pallavaram,<br />
                  Chennai, TN - 600075
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#5c4631] mb-2">Follow Us</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full"></div>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[
                { Icon: Youtube, url: "https://youtube.com/@cholanadumediacorporation?si=bDRGTUvaC-eMF6p-", color: "hover:text-[#C4302B]" },
                { Icon: Twitter, url: "https://x.com/CholanaduMedia", color: "hover:text-[#1DA1F2]" },
                { Icon: Instagram, url: "https://www.instagram.com/cholanadumedia/", color: "hover:text-[#E1306C]" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/cholanadu-media-320774371", color: "hover:text-[#0077B5]" },
              ].map(({ Icon, url, color }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#7e5a3c] ${color} transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-[#f4eadd]`}
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-sm italic text-[#a0876d] mt-4  font-semibold leading-relaxed">
              Stay connected for the latest updates and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t border-[#b47d3a]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-md text-[#a0876d] text-center flex-wrap">
            <p>
              &copy; {new Date().getFullYear()} CHOLANADU MEDIA CORPORATION PVT LTD. All rights reserved.
            </p>
            <span>|</span>
            <Link to="" className="hover:text-[#5c4631] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="" className="hover:text-[#5c4631] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
