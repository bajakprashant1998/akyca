import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

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

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Popular Services SEO Link Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-gold" />
            Popular Services
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="text-white/60 hover:text-cream hover:bg-white/10 px-3 py-1.5 rounded-lg text-sm transition-all border border-white/5 hover:border-white/20"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Ashvin K Yagnik & Co. - Chartered Accountants Ahmedabad" className="h-14 mb-6" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ashvin K Yagnik & Co. (AKYCO) is an RBI Category-I Chartered Accountants firm providing quality and sustainable professional services for over 45 years. Trusted by 1200+ businesses across India for taxation, audit, GST, and financial advisory.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-navy transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* All Service Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceCategories.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-white/70 hover:text-cream transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our History", path: "/history" },
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

            <h4 className="font-display text-lg font-semibold mb-4 mt-8">Locations</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/branches" className="text-white/70 hover:text-cream transition-colors text-sm">
                  CA in Ahmedabad
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-white/70 hover:text-cream transition-colors text-sm">
                  CA in Mehsana
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919825046598" className="text-white/70 hover:text-cream transition-colors text-sm block">+91 98250 46598</a>
                  <a href="tel:07926304598" className="text-white/70 hover:text-cream transition-colors text-sm block">079 – 26304598</a>
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
