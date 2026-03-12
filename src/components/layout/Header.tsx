import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight, Search, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceCategories = [
  {
    name: "Taxation Services", path: "/services/taxation", icon: "💰", desc: "Income tax, TDS & planning", popular: true,
    quickLinks: [
      { name: "Income Tax Return", path: "/services/taxation/income-tax-return" },
      { name: "Tax Planning", path: "/services/taxation/tax-planning" },
      { name: "NRI Taxation", path: "/services/taxation/nri-taxation" },
    ]
  },
  {
    name: "GST Services", path: "/services/gst", icon: "📊", desc: "Registration, filing & audit", popular: true,
    quickLinks: [
      { name: "GST Registration", path: "/services/gst/registration" },
      { name: "GST Return Filing", path: "/services/gst/return-filing" },
      { name: "GST Audit", path: "/services/gst/audit" },
    ]
  },
  {
    name: "Audit & Assurance", path: "/services/audit", icon: "🔍", desc: "Statutory, internal & bank audits",
    quickLinks: [
      { name: "Statutory Audit", path: "/services/audit/statutory-audit" },
      { name: "Internal Audit", path: "/services/audit/internal-audit" },
      { name: "Tax Audit", path: "/services/audit/tax-audit" },
    ]
  },
  {
    name: "Company & Corporate", path: "/services/corporate", icon: "🏢", desc: "Incorporation & compliance",
    quickLinks: [
      { name: "Company Incorporation", path: "/services/corporate/company-incorporation" },
      { name: "ROC Compliance", path: "/services/corporate/roc-compliance" },
      { name: "LLP Formation", path: "/services/corporate/llp-formation" },
    ]
  },
  {
    name: "Financial Advisory", path: "/services/financial-advisory", icon: "📈", desc: "CFO, fundraising & valuation",
    quickLinks: [
      { name: "Virtual CFO", path: "/services/financial-advisory/virtual-cfo" },
      { name: "Fund Raising", path: "/services/financial-advisory/fund-raising" },
      { name: "Valuation Services", path: "/services/financial-advisory/valuation-services" },
    ]
  },
  {
    name: "Compliance & Regulatory", path: "/services/compliance", icon: "📋", desc: "Annual filings & regulatory",
    quickLinks: [
      { name: "Annual Compliance", path: "/services/compliance/annual-compliance" },
      { name: "Labour Law", path: "/services/compliance/labour-law" },
      { name: "NBFC Compliance", path: "/services/compliance/nbfc-compliance" },
    ]
  },
  {
    name: "Litigation & Representation", path: "/services/litigation", icon: "⚖️", desc: "Appeals & tribunal matters",
    quickLinks: [
      { name: "Income Tax Appeals", path: "/services/litigation/income-tax-appeals" },
      { name: "GST Litigation", path: "/services/litigation/gst-litigation" },
      { name: "Tribunal Proceedings", path: "/services/litigation/tribunal-proceedings" },
    ]
  },
  {
    name: "Startup Services", path: "/services/startup", icon: "🚀", desc: "DPIIT, funding & ESOPs",
    quickLinks: [
      { name: "DPIIT Registration", path: "/services/startup/dpiit-registration" },
      { name: "Funding Support", path: "/services/startup/funding-support" },
      { name: "ESOP Structuring", path: "/services/startup/esop-structuring" },
    ]
  },
  {
    name: "Industry Specific", path: "/services/industry", icon: "🏭", desc: "Healthcare, real estate & more",
    quickLinks: [
      { name: "Real Estate", path: "/services/industry/real-estate" },
      { name: "Healthcare", path: "/services/industry/healthcare" },
      { name: "E-Commerce", path: "/services/industry/ecommerce" },
    ]
  },
  {
    name: "Advanced Financial", path: "/services/advanced-financial", icon: "💎", desc: "Valuation & forensic audit",
    quickLinks: [
      { name: "Business Valuation", path: "/services/advanced-financial/business-valuation" },
      { name: "Forensic Audit", path: "/services/advanced-financial/forensic-audit" },
      { name: "Risk Assessment", path: "/services/advanced-financial/risk-assessment" },
    ]
  },
  {
    name: "Digital Accounting", path: "/services/digital-accounting", icon: "💻", desc: "Cloud, ERP & automation",
    quickLinks: [
      { name: "Cloud Accounting", path: "/services/digital-accounting/cloud-accounting" },
      { name: "ERP Advisory", path: "/services/digital-accounting/erp-advisory" },
      { name: "MIS Dashboards", path: "/services/digital-accounting/mis-dashboards" },
    ]
  },
  {
    name: "Personal & Wealth", path: "/services/personal-wealth", icon: "👤", desc: "HNI advisory & estate planning",
    quickLinks: [
      { name: "HNI Advisory", path: "/services/personal-wealth/hni-advisory" },
      { name: "Estate & Will", path: "/services/personal-wealth/estate-will" },
      { name: "Succession Planning", path: "/services/personal-wealth/succession-planning" },
    ]
  },
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
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);
  const [mobileSearch, setMobileSearch] = useState("");
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    setMobileSearch("");
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 250);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsServicesOpen(false);
  }, []);

  const filteredMobileServices = mobileSearch
    ? serviceCategories.filter(s =>
        s.name.toLowerCase().includes(mobileSearch.toLowerCase()) ||
        s.desc.toLowerCase().includes(mobileSearch.toLowerCase())
      )
    : serviceCategories;

  const activeCategory = serviceCategories[hoveredCategory];

  return (
    <header className="w-full">
      {/* Top Utility Bar */}
      <div className="bg-cream border-b border-border py-1.5 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+919825046598" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">+91 98250 46598</span>
            </a>
            <a href="mailto:info@aky.co.in" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@aky.co.in</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              Ahmedabad & Mehsana
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Mon–Sat: 10AM–7PM
            </span>
            <span className="w-px h-3 bg-border"></span>
            <span className="font-semibold text-primary">RBI Category-I Firm</span>
            <span className="w-px h-3 bg-border"></span>
            <span className="font-semibold text-primary">45+ Years</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-primary px-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-1.5 shadow-2xl" : "py-3 shadow-lg"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container px-2 md:px-3 mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Ashvin K Yagnik & Co."
              className={`transition-all duration-300 ${isScrolled ? "h-[50px] md:h-[65px]" : "h-[65px] md:h-[90px]"} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5" role="menubar">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={handleKeyDown}
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary-foreground/10 relative transition-all text-sm font-medium ${
                      location.pathname.startsWith("/services") ? "text-primary-foreground bg-primary-foreground/5" : ""
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                    {location.pathname.startsWith("/services") && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                    )}
                  </button>

                  {/* Enhanced Mega Dropdown */}
                  <div
                    className={`absolute top-full right-0 lg:left-1/2 lg:-translate-x-1/2 mt-2 w-[820px] bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-50 transition-all duration-200 origin-top ${
                      isServicesOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
                    }`}
                    role="menu"
                  >
                    {/* Arrow indicator */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45 border-l border-t border-primary z-10"></div>

                    {/* Header strip */}
                    <div className="bg-primary px-5 py-3 flex items-center justify-between">
                      <div>
                        <h3 className="text-primary-foreground font-display font-semibold text-sm">Our Services</h3>
                        <p className="text-primary-foreground/50 text-xs">12 categories · 100+ services</p>
                      </div>
                      <Link
                        to="/services"
                        className="text-gold text-xs font-semibold hover:text-cream transition-colors flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Two-column: categories + preview */}
                    <div className="flex">
                      {/* Left: category list */}
                      <div className="w-[380px] border-r border-border max-h-[400px] overflow-y-auto py-2 px-2">
                        {serviceCategories.map((service, idx) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            role="menuitem"
                            onMouseEnter={() => setHoveredCategory(idx)}
                            onFocus={() => setHoveredCategory(idx)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                              hoveredCategory === idx ? "bg-accent/60" : "hover:bg-accent/30"
                            }`}
                          >
                            <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform">{service.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-card-foreground font-medium text-sm leading-tight">{service.name}</span>
                                {service.popular && (
                                  <span className="bg-gold/15 text-gold text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-muted-foreground text-[11px] mt-0.5 truncate">{service.desc}</p>
                            </div>
                            <ChevronDown className="w-3 h-3 -rotate-90 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
                          </Link>
                        ))}
                      </div>

                      {/* Right: quick-link preview panel */}
                      <div className="flex-1 p-5 bg-muted/30 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl">{activeCategory.icon}</span>
                          <div>
                            <h4 className="font-display font-semibold text-card-foreground text-sm">{activeCategory.name}</h4>
                            <p className="text-muted-foreground text-xs">{activeCategory.desc}</p>
                          </div>
                        </div>

                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Popular Services
                        </p>
                        <div className="space-y-1 flex-1">
                          {activeCategory.quickLinks.map((ql) => (
                            <Link
                              key={ql.path}
                              to={ql.path}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-card-foreground hover:bg-accent/50 transition-colors group"
                            >
                              <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors" />
                              {ql.name}
                            </Link>
                          ))}
                        </div>

                        <Link
                          to={activeCategory.path}
                          className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-navy-dark transition-colors"
                        >
                          Explore {activeCategory.name} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-muted/50 px-5 py-2.5 border-t border-border flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Need help choosing? Our experts can guide you.</span>
                      <Link
                        to="/contact"
                        className="text-primary font-semibold text-xs hover:text-gold transition-colors flex items-center gap-1"
                      >
                        Free Consultation <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  className={`nav-link relative px-3 py-2 rounded-lg hover:bg-primary-foreground/10 transition-all text-sm font-medium ${
                    location.pathname === link.path ? "text-primary-foreground bg-primary-foreground/5" : ""
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-gold text-primary px-5 py-2 rounded-lg font-semibold text-sm hover:bg-cream transition-all hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-screen Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-primary shadow-2xl flex flex-col transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-primary-foreground/10">
            <img src={logo} alt="AKY" className="h-[45px] w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto py-3 px-3">
            {/* Nav links */}
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`nav-link px-4 py-3 flex items-center justify-between w-full rounded-lg text-sm font-medium ${
                      location.pathname.startsWith("/services") ? "bg-primary-foreground/10" : "hover:bg-primary-foreground/5"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Search within services */}
                    <div className="px-3 py-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary-foreground/40" />
                        <input
                          type="text"
                          placeholder="Search services..."
                          value={mobileSearch}
                          onChange={(e) => setMobileSearch(e.target.value)}
                          className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm rounded-lg pl-9 pr-3 py-2 placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="space-y-0.5 px-2 pb-2">
                      {filteredMobileServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            location.pathname === service.path
                              ? "bg-primary-foreground/15 text-primary-foreground"
                              : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                          }`}
                        >
                          <span className="text-base">{service.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{service.name}</span>
                              {service.popular && (
                                <span className="bg-gold/20 text-gold text-[9px] font-bold px-1.5 py-0.5 rounded-full">HOT</span>
                              )}
                            </div>
                            <span className="text-[10px] text-primary-foreground/40 block truncate">{service.desc}</span>
                          </div>
                        </Link>
                      ))}

                      {filteredMobileServices.length === 0 && (
                        <p className="text-primary-foreground/40 text-xs text-center py-4">No services found</p>
                      )}

                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-gold font-semibold text-sm hover:bg-primary-foreground/5 rounded-lg"
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
                  className={`nav-link block px-4 py-3 rounded-lg text-sm font-medium ${
                    location.pathname === link.path ? "bg-primary-foreground/10" : "hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Panel footer */}
          <div className="px-4 py-4 border-t border-primary-foreground/10 space-y-3">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-gold text-primary px-5 py-3 rounded-lg font-semibold text-sm text-center hover:bg-cream transition-colors"
            >
              Book Free Consultation
            </Link>
            <div className="flex items-center justify-center gap-4 text-primary-foreground/50 text-xs">
              <a href="tel:+919825046598" className="flex items-center gap-1 hover:text-primary-foreground">
                <Phone className="w-3 h-3" /> Call
              </a>
              <a href="mailto:info@aky.co.in" className="flex items-center gap-1 hover:text-primary-foreground">
                <Mail className="w-3 h-3" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
