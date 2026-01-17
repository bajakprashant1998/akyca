import { Layout } from "@/components/layout/Layout";
import { Building2, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Company Incorporation",
    description: "End-to-end company incorporation services including Private Limited, Public Limited, One Person Company (OPC), and Section 8 Companies.",
    features: ["Name availability check", "DSC & DIN procurement", "MOA/AOA drafting", "Certificate of Incorporation"]
  },
  {
    title: "LLP Formation",
    description: "Complete Limited Liability Partnership formation services with drafting of LLP Agreement and compliance with LLP Act, 2008.",
    features: ["DPIN & DSC acquisition", "LLP Agreement drafting", "Registration filing", "PAN & TAN application"]
  },
  {
    title: "ROC Compliance",
    description: "Annual and event-based ROC compliance including filing of annual returns, financial statements, and various e-forms.",
    features: ["Annual return filing (MGT-7)", "Financial statement filing (AOC-4)", "Event-based compliance", "Director KYC updation"]
  },
  {
    title: "Secretarial Services",
    description: "Comprehensive company secretarial services including board meeting management, minutes preparation, and statutory register maintenance.",
    features: ["Board meeting coordination", "Minutes & resolutions drafting", "Statutory registers maintenance", "Share transfer management"]
  },
  {
    title: "Due Diligence",
    description: "Thorough legal, financial, and tax due diligence for mergers, acquisitions, investments, and business transactions.",
    features: ["Financial due diligence", "Tax compliance review", "Legal documentation review", "Risk assessment reports"]
  },
  {
    title: "Mergers & Acquisitions Support",
    description: "Advisory and execution support for mergers, demergers, acquisitions, and business restructuring transactions.",
    features: ["Valuation advisory", "Transaction structuring", "Regulatory approvals", "Post-merger integration support"]
  }
];

const CompanyCorporate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Corporate Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Company & Corporate Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Complete corporate solutions from company formation to complex restructuring. 
              We help businesses establish, maintain compliance, and grow through strategic corporate actions.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Company & Corporate Services</span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-grey leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-grey">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Comparison */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Choose the Right Business Structure
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Compare different business entities to find the best fit for your venture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Private Limited", pros: "Limited liability, Easy funding, Credibility", best: "Startups & Growth businesses" },
              { title: "LLP", pros: "Flexibility, Limited liability, Tax benefits", best: "Professional services & SMEs" },
              { title: "OPC", pros: "Single ownership, Limited liability, Easy compliance", best: "Solo entrepreneurs" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-display font-semibold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-grey text-sm mb-3"><strong>Benefits:</strong> {item.pros}</p>
                <p className="text-gold text-sm font-medium">Best for: {item.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to Start Your Business?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the incorporation process and ongoing compliance.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Start Incorporation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyCorporate;
