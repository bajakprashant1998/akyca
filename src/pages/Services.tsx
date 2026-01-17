import { Layout } from "@/components/layout/Layout";
import { 
  FileText, Calculator, ClipboardCheck, Building2, TrendingUp, Shield,
  Gavel, Rocket, Factory, Laptop, UserCheck, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  { icon: FileText, title: "Taxation Services", link: "/services/taxation", services: ["Income Tax Return Filing", "Tax Planning & Advisory", "Corporate Taxation", "International Taxation", "NRI Taxation", "TDS Compliance"] },
  { icon: Calculator, title: "GST Services", link: "/services/gst", services: ["GST Registration", "GST Return Filing", "GST Audit", "GST Advisory", "Litigation & Notice Handling"] },
  { icon: ClipboardCheck, title: "Audit & Assurance", link: "/services/audit", services: ["Statutory Audit", "Internal Audit", "Tax Audit", "Bank Audit", "Stock Audit", "Management Audit"] },
  { icon: Building2, title: "Company & Corporate", link: "/services/corporate", services: ["Company Incorporation", "LLP Formation", "ROC Compliance", "Secretarial Services", "Due Diligence", "M&A Support"] },
  { icon: TrendingUp, title: "Financial Advisory", link: "/services/financial-advisory", services: ["Business Structuring", "Project Finance", "Fund Raising", "Valuation Services", "Virtual CFO"] },
  { icon: Shield, title: "Compliance & Regulatory", link: "/services/compliance", services: ["Annual Compliance (AMC)", "Labour Law Compliance", "RBI/FEMA/SEBI", "NBFC Compliance", "NGO Compliance"] },
  { icon: Gavel, title: "Litigation & Representation", link: "/services/litigation", services: ["Income Tax Appeals", "GST Litigation", "Tribunal Proceedings", "Notice Handling", "Search & Survey Cases"] },
  { icon: Rocket, title: "Startup & New Business", link: "/services/startup", services: ["Startup India Registration", "Angel Tax Advisory", "ESOP Structuring", "Business Plan", "Funding Support"] },
  { icon: Factory, title: "Industry-Specific", link: "/services/industry", services: ["Real Estate & RERA", "Healthcare Accounting", "Manufacturing Audit", "EXIM Advisory", "E-commerce Compliance"] },
  { icon: ClipboardCheck, title: "Advanced Financial", link: "/services/advanced-financial", services: ["Risk Assessment", "Forensic Audit", "Business Valuation", "IBC Support", "Turnaround Advisory"] },
  { icon: Laptop, title: "Digital Accounting", link: "/services/digital-accounting", services: ["Cloud Accounting", "Finance Automation", "MIS & Dashboards", "Virtual Accounting", "ERP Advisory"] },
  { icon: UserCheck, title: "Personal & Wealth", link: "/services/personal-wealth", services: ["Personal Tax Planning", "HUF Structuring", "Succession Planning", "HNI Advisory", "NRI Services"] },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-cream font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Full Spectrum CA Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Comprehensive chartered accountancy and financial consulting services 
              tailored for businesses, startups, MSMEs, corporates, individuals, HNIs, and NRIs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="bg-white rounded-xl border border-border p-8 hover:shadow-xl hover:border-cream transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                  <category.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {category.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2 text-grey text-sm">
                      <ChevronRight className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-navy font-medium text-sm group-hover:text-gold transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy mb-4">
            Need Help with Any of These Services?
          </h2>
          <p className="text-grey mb-8 max-w-2xl mx-auto">
            Our team of expert chartered accountants is ready to assist you. 
            Get in touch for a free consultation.
          </p>
          <Link
            to="/contact"
            className="cta-primary inline-flex items-center gap-2"
          >
            Book Consultation
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
