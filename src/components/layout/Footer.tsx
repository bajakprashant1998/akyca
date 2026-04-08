import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter, ArrowRight, ChevronDown } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import logo from "@/assets/logo.png";
import { useState } from "react";

const popularServices = [
  { name: "Income Tax Return Filing", path: "/services/taxation/income-tax-return" },
  { name: "GST Registration", path: "/services/gst/registration" },
  { name: "GST Return Filing", path: "/services/gst/return-filing" },
  { name: "Statutory Audit", path: "/services/audit/statutory-audit" },
  { name: "Tax Audit", path: "/services/audit/tax-audit" },
  { name: "Company Incorporation", path: "/services/corporate/company-incorporation" },
  { name: "LLP Formation", path: "/services/corporate/llp-formation" },
  { name: "TDS Compliance", path: "/services/taxation/tds-compliance" },
  { name: "Virtual CFO", path: "/services/financial/virtual-cfo" },
  { name: "NRI Taxation", path: "/services/taxation/nri-taxation" },
  { name: "DPIIT Registration", path: "/services/startup/dpiit-registration" },
  { name: "ROC Compliance", path: "/services/corporate/roc-compliance" },
];

const serviceCategories = [
  { name: "Taxation Services", path: "/services/taxation" },
  { name: "GST Services", path: "/services/gst" },
  { name: "Audit & Assurance", path: "/services/audit" },
  { name: "Company & Corporate", path: "/services/corporate" },
  { name: "Financial Advisory", path: "/services/financial-advisory" },
  { name: "Compliance & Regulatory", path: "/services/compliance" },
  { name: "Litigation & Representation", path: "/services/litigation" },
  { name: "Startup Services", path: "/services/startup" },
  { name: "Industry-Specific", path: "/services/industry" },
  { name: "Digital Accounting", path: "/services/digital-accounting" },
  { name: "Personal & Wealth", path: "/services/personal-wealth" },
  { name: "Advanced Financial", path: "/services/advanced-financial" },
];

const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 md:hidden"
      >
        <h4 className="font-display text-base font-semibold">{title}</h4>
        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <h4 className="font-display text-lg font-semibold mb-6 hidden md:block">{title}</h4>
      <div className={`${open ? "block pb-4" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  );
};

export const Footer = () => {
  const { get } = useSiteContent("footer");

  const companyDescription = get("info", "description", "Ashvin K Yagnik & Co. (AKYCO) is an RBI Category-I Chartered Accountants firm providing quality and sustainable professional services for over 45 years. Trusted by 1200+ businesses across India for taxation, audit, GST, and financial advisory.");
  const phone1 = get("contact", "phone1", "+91 98250 46598");
  const phone2 = get("contact", "phone2", "079 – 26304598");
  const email = get("contact", "email", "info@aky.co.in");
  const address = get("contact", "address", "Ahmedabad & Mehsana, Gujarat, India");
  const hours = get("contact", "hours", "Mon - Sat: 10:00 AM - 7:00 PM");
  const seoText = get("info", "seo_text", 'Ashvin K Yagnik & Co. (AKYCO) is recognized as one of the best CA firms in Ahmedabad and best chartered accountants in Gujarat. With offices in Ahmedabad and Mehsana, we provide expert income tax filing, GST registration & returns, statutory audit, company incorporation, financial advisory, NRI taxation, and startup services. Founded by CA Ashwin Yagnik in 1978, our RBI Category-I firm serves 1000+ clients across Gujarat and India. Looking for the best CA in Mehsana or top chartered accountants in Ahmedabad? Contact us for a free consultation.');
  const copyrightText = get("info", "copyright", "Maintained And Developed By");
  const linkedinUrl = get("social", "linkedin", "#");
  const facebookUrl = get("social", "facebook", "#");
  const twitterUrl = get("social", "twitter", "#");

  return (
    <footer className="bg-navy text-white">
      {/* Popular Services - scrollable on mobile */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6 sm:py-10">
          <h3 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            Popular Services
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {popularServices.map((service) => (
              <Link key={service.path} to={service.path} className="text-white/60 hover:text-cream hover:bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm transition-all border border-white/5 hover:border-white/20">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-12">
          {/* Logo & description */}
          <div className="lg:col-span-2 pb-6 mb-2 border-b border-white/10 md:border-0 md:pb-0 md:mb-0">
            <img src={logo} alt="Ashvin K Yagnik & Co. - Chartered Accountants Ahmedabad" className="h-10 sm:h-14 mb-4 sm:mb-6" />
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{companyDescription}</p>
            <div className="flex gap-3 sm:gap-4">
              <a href={linkedinUrl} aria-label="LinkedIn" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={facebookUrl} aria-label="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={twitterUrl} aria-label="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Our Services - accordion on mobile */}
          <FooterAccordion title="Our Services">
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceCategories.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">{service.name}</Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Quick Links - accordion on mobile */}
          <FooterAccordion title="Quick Links">
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our History", path: "/history" },
                { name: "Branch Offices", path: "/branches" },
                { name: "Tax Tools", path: "/tax-tools" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-sm sm:text-lg font-semibold mb-3 sm:mb-4 mt-5 sm:mt-8">Locations We Serve</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><Link to="/branches" className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">Best CA in Ahmedabad</Link></li>
              <li><Link to="/branches" className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">Best CA in Mehsana</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">Chartered Accountants Gujarat</Link></li>
              <li><Link to="/services/taxation/nri-taxation" className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">NRI Tax Services India</Link></li>
            </ul>
          </FooterAccordion>

          {/* Contact Us - always visible */}
          <div className="pt-4 md:pt-0">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cream flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${phone1.replace(/\s/g, '')}`} className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm block">{phone1}</a>
                  <a href={`tel:${phone2.replace(/[\s–]/g, '')}`} className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm block">{phone2}</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cream flex-shrink-0 mt-0.5" />
                <a href={`mailto:${email}`} className="text-white/70 hover:text-cream transition-colors text-xs sm:text-sm">{email}</a>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cream flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-xs sm:text-sm">{address}</p>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cream flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-xs sm:text-sm">{hours}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Text */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 sm:py-8">
          <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed text-center max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: seoText }} />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} {copyrightText} <a href="https://dibull.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cream transition-colors">Dibull</a>
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-white/60 hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};