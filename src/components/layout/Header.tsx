import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "History", path: "/history" },
  { name: "Branches", path: "/branches" },
  { name: "Tax Tools", path: "/tax-tools" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-cream py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm text-grey">
          <div className="flex items-center gap-6">
            <a href="tel:+919825046598" className="flex items-center gap-2 hover:text-navy transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98250 46598</span>
            </a>
            <a href="mailto:info@aky.co.in" className="hidden sm:flex items-center gap-2 hover:text-navy transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@aky.co.in</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-medium">RBI Category-I Firm</span>
            <span className="w-1 h-1 bg-grey rounded-full"></span>
            <span className="text-xs font-medium">45+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-navy py-4 px-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ashvin K Yagnik & Co." className="h-12 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-cream text-navy px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cream-dark transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link px-4 py-2 ${location.pathname === link.path ? "bg-white/10" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-cream text-navy px-5 py-2.5 rounded-lg font-semibold text-sm mx-4 text-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
