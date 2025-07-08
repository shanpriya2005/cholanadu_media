import React, { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "contactus@cholanadu.in",
      link: "mailto:contactus@cholanadu.in",
      color: "from-[#A66C2D] to-[#C28840]"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 98849 00478",
      link: "tel:+919884900478",
      color: "from-[#A66C2D] to-[#C28840]"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Head Office: Cholanadu Media Corporation Pvt Ltd, No 73A, Pammal Main Road, Krishna Nagar, Pallavaram, Chennai, Tamil Nadu - 600075",
      link: "https://g.co/kgs/cphaPGt",
      color: "from-[#A66C2D] to-[#C28840]"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Mon-Fri: 9:00AM-8:00PM",
      link: "#",
      color: "from-[#A66C2D] to-[#C28840]"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#A66C2D",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_nsayku3",
        "template_gy1gd4w",
        formRef.current,
        "KC3RnJVeB-Ds_dBL_"
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message Sent Successfully!",
          text: "Thank you for contacting us. We'll get back to you soon.",
          confirmButtonColor: "#A66C2D",
          background: "#fffaf5",
        });
        formRef.current?.reset();
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops!",
          text: "Failed to send your message. Please try again later.",
          confirmButtonColor: "#5c4631",
          background: "#fff5f5",
        });
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#5c4631] mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full"></div>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-md font-semibold text-[#5c4631] mb-2">
                    <User className="w-5 h-5 mr-2 text-[#A66C2D]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6c9b3] rounded-xl bg-white/40 backdrop-blur-md text-[#2e1f0f] placeholder:text-[#7e5a3c] focus:ring-2 focus:ring-[#A66C2D] focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="flex items-center text-md font-semibold text-[#5c4631] mb-2">
                    <Building className="w-5 h-5 mr-2 text-[#A66C2D]" /> Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#d6c9b3] rounded-xl bg-white/40 backdrop-blur-md text-[#2e1f0f] placeholder:text-[#7e5a3c] focus:ring-2 focus:ring-[#A66C2D] focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-md font-semibold text-[#5c4631] mb-2">
                    <Mail className="w-5 h-5 mr-2 text-[#A66C2D]" /> Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d6c9b3] rounded-xl bg-white/40 backdrop-blur-md text-[#2e1f0f] placeholder:text-[#7e5a3c] focus:ring-2 focus:ring-[#A66C2D] focus:border-transparent transition-all duration-200"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center text-md font-semibold text-[#5c4631] mb-2">
                    <Phone className="w-5 h-5 mr-2 text-[#A66C2D]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#d6c9b3] rounded-xl bg-white/40 backdrop-blur-md text-[#2e1f0f] placeholder:text-[#7e5a3c] focus:ring-2 focus:ring-[#A66C2D] focus:border-transparent transition-all duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center text-md font-semibold text-[#5c4631] mb-2">
                  <MessageSquare className="w-5 h-5 mr-2 text-[#A66C2D]" /> Your Query *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                 className="w-full px-4 py-3 border border-[#d6c9b3] rounded-xl bg-white/40 backdrop-blur-md text-[#2e1f0f] placeholder:text-[#7e5a3c] focus:ring-2 focus:ring-[#A66C2D] focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#A66C2D] to-[#C28840] hover:from-[#935e23] hover:to-[#a77438] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <div>
              <h2 className="text-3xl font-bold text-[#5c4631] mb-4">Contact Information</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C28840] to-[#A66C2D] rounded-full"></div>
            </div>

            <div className="bg-white/40 backdrop-blur-md mt-6 rounded-2xl p-8 grid grid-cols-1 gap-8 border border-[#d6c9b3]">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6 cursor-pointer"
                  onClick={() => {
                    if (info.link !== "#") window.open(info.link, "_blank");
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && info.link !== "#") window.open(info.link, "_blank");
                  }}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${info.color} rounded-xl shadow-lg`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#5c4631] mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[#7e6a4a] text-md font-semibold whitespace-pre-line">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
