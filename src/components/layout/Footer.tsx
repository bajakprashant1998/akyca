import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Ashvin K Yagnik & Co." className="h-14 mb-6" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Providing quality and sustainable professional services for over 45 years.
              RBI Category-I Chartered Accountants firm trusted by businesses across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "History & Milestones", path: "/history" },
                { name: "Branch Offices", path: "/branches" },
                { name: "Tax Tools", path: "/tax-tools" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-cream transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Income Tax Services",
                "GST Compliance",
                "Audit & Assurance",
                "Company Registration",
                "Financial Advisory",
                "Startup Services",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/70 hover:text-cream transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">+91 98250 46598</p>
                  <p className="text-white/70 text-sm">079 – 26304598</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <a href="mailto:info@aky.co.in" className="text-white/70 hover:text-cream transition-colors text-sm">
                  info@aky.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  Ahmedabad & Mehsana, Gujarat, India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  Mon - Sat: 10:00 AM - 7:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Maintained And Developed By <a href="https://dibull.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cream transition-colors">Dibull</a>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
