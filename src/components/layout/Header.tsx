import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <nav className={`bg-navy px-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-2xl' : 'py-4 shadow-lg'}`}>
        <div className="container px-2 md:px-3 mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ashvin K Yagnik & Co." className={`transition-all duration-300 ${isScrolled ? 'h-[60px] md:h-[75px]' : 'h-[75px] md:h-[100px]'} w-auto`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 relative transition-all ${location.pathname.startsWith('/services') ? "text-white bg-white/5" : ""}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    {location.pathname.startsWith('/services') && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                    )}
                  </button>

                  {/* Mega Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden z-50 transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-navy rotate-45 border-l border-t border-navy"></div>

                    {/* Header */}
                    <div className="bg-navy px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-display font-semibold text-lg">Our Services</h3>
                        <p className="text-white/60 text-sm">Comprehensive CA & Financial Solutions</p>
                      </div>
                      <Link
                        to="/services"
                        className="text-gold text-sm font-medium hover:text-cream transition-colors flex items-center gap-1"
                      >
                        View All <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="p-3 grid grid-cols-2 gap-0.5 max-h-[420px] overflow-y-auto">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-cream/50 transition-all group"
                        >
                          <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform">{service.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-grey group-hover:text-navy font-medium text-sm transition-colors">
                                {service.name}
                              </span>
                              {"popular" in service && service.popular && (
                                <span className="bg-gold/10 text-gold text-[10px] font-bold px-1.5 py-0.5 rounded-full">Popular</span>
                              )}
                            </div>
                            <p className="text-grey/60 text-xs mt-0.5 truncate">{service.desc}</p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-navy transition-colors mt-1.5 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="bg-muted/50 px-6 py-3 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">100+ specialized services across 12 categories</span>
                      <Link
                        to="/contact"
                        className="text-navy font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1"
                      >
                        Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all ${location.pathname === link.path ? "text-white bg-white/5" : ""}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gold text-navy px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cream transition-all hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`nav-link px-4 py-3 flex items-center justify-between w-full rounded-lg ${location.pathname.startsWith('/services') ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white/5 py-2 space-y-0.5 mx-2 rounded-xl mt-1">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg mx-1"
                        >
                          <span>{service.icon}</span>
                          <div>
                            <span className="text-sm block">{service.name}</span>
                            <span className="text-[10px] text-white/40">{service.desc}</span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-gold font-semibold text-sm hover:bg-white/10 rounded-lg mx-1"
                      >
                        View All Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link px-4 py-3 rounded-lg ${location.pathname === link.path ? "bg-white/10" : "hover:bg-white/5"}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-navy px-5 py-3 rounded-lg font-semibold text-sm mx-2 text-center mt-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
