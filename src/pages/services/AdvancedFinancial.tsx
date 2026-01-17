import { Layout } from "@/components/layout/Layout";
import { ClipboardCheck, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Risk Assessment & Internal Controls",
    description: "Comprehensive assessment of business risks and evaluation of internal control systems to prevent fraud and operational failures.",
    features: ["Risk identification & mapping", "Control environment evaluation", "Process gap analysis", "Remediation roadmap development"]
  },
  {
    title: "Forensic Audit & Fraud Investigation",
    description: "Specialized investigations into suspected fraud, embezzlement, and financial irregularities with legally admissible findings.",
    features: ["Fraud detection procedures", "Digital evidence analysis", "Investigation reporting", "Litigation support services"]
  },
  {
    title: "Business Valuation",
    description: "Independent business valuations using multiple methodologies for various purposes including M&A, taxation, and disputes.",
    features: ["DCF valuation method", "Comparable company analysis", "Asset-based valuation", "Fairness opinion reports"]
  },
  {
    title: "Insolvency & Bankruptcy Code (IBC) Support",
    description: "Comprehensive support under the Insolvency and Bankruptcy Code including CIRP assistance and claims management.",
    features: ["CIRP process support", "Claims verification", "Resolution plan advisory", "Liquidation process support"]
  },
  {
    title: "Turnaround & Restructuring Advisory",
    description: "Strategic advisory for distressed businesses to identify turnaround opportunities and implement restructuring plans.",
    features: ["Business viability assessment", "Cash flow restructuring", "Debt restructuring advisory", "Operational improvement plans"]
  },
  {
    title: "Corporate Governance Advisory",
    description: "Advisory services to strengthen corporate governance practices, board effectiveness, and stakeholder management.",
    features: ["Governance framework development", "Board advisory services", "Policy formulation", "ESG integration support"]
  }
];

const AdvancedFinancial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Specialized Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Advanced Financial Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              High-value advisory services for complex financial situations. From forensic investigations 
              to business turnarounds, we provide expert solutions for challenging scenarios.
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
            <span className="text-navy font-medium">Advanced Financial Services</span>
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

      {/* When You Need Us */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              When You Need Advanced Services
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Complex situations require specialized expertise. Here's when to reach out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Suspected Fraud", desc: "When you suspect financial irregularities or employee misconduct", action: "Forensic Investigation" },
              { title: "Business Distress", desc: "When facing financial difficulties or cash flow challenges", action: "Turnaround Advisory" },
              { title: "M&A Transaction", desc: "When buying, selling, or merging with another business", action: "Valuation Services" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-display font-semibold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-grey text-sm mb-3">{item.desc}</p>
                <p className="text-gold text-sm font-medium">→ {item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Facing a Complex Financial Situation?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our experienced team can help navigate challenging scenarios with expert guidance.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Discuss Your Situation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AdvancedFinancial;
