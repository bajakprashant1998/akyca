import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceCategories = [
  { name: "Taxation Services", path: "/services/taxation", icon: "💰", desc: "Income tax, TDS & planning", popular: true },
  { name: "GST Services", path: "/services/gst", icon: "📊", desc: "Registration, filing & audit", popular: true },
  { name: "Audit & Assurance", path: "/services/audit", icon: "🔍", desc: "Statutory, internal & bank audits" },
  { name: "Company & Corporate", path: "/services/corporate", icon: "🏢", desc: "Incorporation & compliance" },
  { name: "Financial Advisory", path: "/services/financial-advisory", icon: "📈", desc: "CFO, fundraising & valuation" },
  { name: "Compliance & Regulatory", path: "/services/compliance", icon: "📋", desc: "Annual filings & regulatory" },
  { name: "Litigation & Representation", path: "/services/litigation", icon: "⚖️", desc: "Appeals & tribunal matters" },
  { name: "Startup Services", path: "/services/startup", icon: "🚀", desc: "DPIIT, funding & ESOPs" },
  { name: "Industry Specific", path: "/services/industry", icon: "🏭", desc: "Healthcare, real estate & more" },
  { name: "Advanced Financial", path: "/services/advanced-financial", icon: "💎", desc: "Valuation & forensic audit" },
  { name: "Digital Accounting", path: "/services/digital-accounting", icon: "💻", desc: "Cloud, ERP & automation" },
  { name: "Personal & Wealth", path: "/services/personal-wealth", icon: "👤", desc: "HNI advisory & estate planning" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "History", path: "/history" },
  { name: "Branches", path: "/branches" },
  { name: "Tax Tools", path: "/tax-tools" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

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
        <div className="container px-2 md:px-3 mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ashvin K Yagnik & Co." className="brand-logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`nav-link flex items-center gap-1 relative ${location.pathname.startsWith('/services') ? "text-white" : ""}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    {location.pathname.startsWith('/services') && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                      
                      <div className="bg-navy px-6 py-4">
                        <h3 className="text-white font-display font-semibold text-lg">Our Services</h3>
                        <p className="text-white/70 text-sm">Comprehensive CA & Financial Solutions</p>
                      </div>
                      
                      <div className="p-4 grid grid-cols-2 gap-1">
                        {serviceCategories.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-cream transition-colors group"
                          >
                            <span className="text-xl mt-0.5">{service.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-grey group-hover:text-navy font-medium text-sm transition-colors">
                                  {service.name}
                                </span>
                                {"popular" in service && service.popular && (
                                  <span className="bg-gold/10 text-gold text-[10px] font-bold px-1.5 py-0.5 rounded">Popular</span>
                                )}
                              </div>
                              <p className="text-grey/60 text-xs mt-0.5 truncate">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="bg-cream/50 px-6 py-3 border-t border-gray-100">
                        <Link 
                          to="/services" 
                          className="text-navy font-semibold text-sm hover:underline flex items-center gap-2"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link relative ${location.pathname === link.path ? "text-white" : ""}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              )
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
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[calc(100vh-200px)] opacity-100 mt-4 pb-4 border-t border-white/10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`nav-link px-4 py-2 flex items-center justify-between w-full ${location.pathname.startsWith('/services') ? "bg-white/10" : ""}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white/5 py-2 space-y-1">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <span>{service.icon}</span>
                          <div>
                            <span className="text-sm block">{service.name}</span>
                            <span className="text-[10px] text-white/50">{service.desc}</span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center px-6 py-2 text-cream font-semibold text-sm hover:bg-white/10"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link px-4 py-2 ${location.pathname === link.path ? "bg-white/10" : ""}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-cream text-navy px-5 py-2.5 rounded-lg font-semibold text-sm mx-4 text-center mt-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
