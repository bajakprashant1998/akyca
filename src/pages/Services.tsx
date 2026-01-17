import { Layout } from "@/components/layout/Layout";
import { 
  FileText, Calculator, ClipboardCheck, Building2, TrendingUp, Shield,
  Gavel, Rocket, Factory, Laptop, UserCheck, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    icon: FileText,
    title: "Taxation Services",
    services: [
      "Income Tax Return Filing (Individual & Corporate)",
      "Tax Planning & Advisory",
      "Corporate Taxation",
      "International Taxation",
      "NRI Taxation",
      "TDS Compliance & Returns",
      "Representation before Tax Authorities",
    ],
  },
  {
    icon: Calculator,
    title: "GST Services",
    services: [
      "GST Registration",
      "GST Return Filing",
      "GST Audit",
      "GST Advisory & Compliance",
      "Litigation & Notice Handling",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    services: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "Concurrent Audit",
      "Bank Audit",
      "Stock Audit",
      "Management Audit",
      "Co-operative Society Audit",
    ],
  },
  {
    icon: Building2,
    title: "Company & Corporate Services",
    services: [
      "Company Incorporation",
      "LLP Formation",
      "ROC Compliance",
      "Secretarial Services",
      "Due Diligence",
      "Mergers & Acquisitions Support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    services: [
      "Business Structuring",
      "Project Finance",
      "Fund Raising Support",
      "Valuation Services",
      "Virtual CFO Services",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    services: [
      "Annual Compliance Management (AMC)",
      "Labour Law Compliance (PF, ESIC, PT, Shops Act)",
      "Factory Act & Industrial Law Compliance",
      "RBI, FEMA & SEBI Compliance",
      "NBFC Compliance",
      "Trust, Society & NGO Compliance",
    ],
  },
  {
    icon: Gavel,
    title: "Litigation & Representation",
    services: [
      "Income Tax Appeals & Assessments",
      "GST Litigation",
      "Tribunal & Commissioner Proceedings",
      "Notice Drafting & Reply",
      "Search & Survey Case Handling",
      "Black Money & Benami Act Advisory",
    ],
  },
  {
    icon: Rocket,
    title: "Startup & New Business",
    services: [
      "Startup India & DPIIT Registration",
      "Angel Tax Advisory",
      "ESOP Structuring",
      "Business Plan & Financial Modelling",
      "Pitch Deck Support",
      "Seed, Angel & VC Funding Support",
    ],
  },
  {
    icon: Factory,
    title: "Industry-Specific Services",
    services: [
      "Real Estate & RERA Compliance",
      "Healthcare & Hospital Accounting",
      "Manufacturing Industry Audit",
      "Export Import (EXIM) Advisory",
      "E-commerce Compliance",
      "Educational Institution Advisory",
      "NGO & Trust Management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Advanced Financial Services",
    services: [
      "Risk Assessment & Internal Controls",
      "Forensic Audit & Fraud Investigation",
      "Business Valuation",
      "Insolvency & Bankruptcy Code (IBC) Support",
      "Turnaround & Restructuring Advisory",
      "Corporate Governance Advisory",
    ],
  },
  {
    icon: Laptop,
    title: "Digital & Modern Accounting",
    services: [
      "Cloud Accounting (Tally, Zoho, QuickBooks)",
      "Automation of Finance Systems",
      "MIS Reports & Dashboards",
      "Virtual Accounting Department",
      "ERP Implementation Advisory",
      "Data Migration & Cleanup",
    ],
  },
  {
    icon: UserCheck,
    title: "Personal & Wealth Services",
    services: [
      "Personal Tax Planning",
      "HUF & Family Office Structuring",
      "Succession Planning",
      "Estate & Will Advisory",
      "HNI Advisory",
      "NRI Wealth Structuring",
    ],
  },
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
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-8 hover:shadow-xl hover:border-cream transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2 text-grey text-sm">
                      <ChevronRight className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
