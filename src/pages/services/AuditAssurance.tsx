import { Layout } from "@/components/layout/Layout";
import { ClipboardCheck, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Statutory Audit",
    description: "Independent examination of financial statements as per Companies Act, 2013. We provide comprehensive audit services with detailed reports and management recommendations.",
    features: ["Financial statement verification", "Internal control evaluation", "Compliance with accounting standards", "Management letter with recommendations"]
  },
  {
    title: "Internal Audit",
    description: "Systematic evaluation of internal controls, risk management, and governance processes to improve organizational efficiency and effectiveness.",
    features: ["Risk-based audit approach", "Process efficiency review", "Control gap identification", "Improvement recommendations"]
  },
  {
    title: "Tax Audit",
    description: "Mandatory audit under Section 44AB of Income Tax Act for businesses exceeding prescribed turnover limits, with Form 3CA/3CB and 3CD certification.",
    features: ["Turnover limit compliance", "Form 3CD preparation", "Tax liability verification", "Clause-wise detailed reporting"]
  },
  {
    title: "Concurrent Audit",
    description: "Real-time audit of transactions as they occur, particularly for banking and financial institutions to ensure immediate compliance.",
    features: ["Daily transaction review", "Immediate exception reporting", "Fraud prevention checks", "Real-time compliance assurance"]
  },
  {
    title: "Bank Audit",
    description: "Specialized audit services for banking sector including branch audit, revenue audit, and concurrent audit as per RBI guidelines.",
    features: ["Branch financial audit", "NPA classification review", "LFAR preparation", "RBI compliance verification"]
  },
  {
    title: "Stock Audit",
    description: "Physical verification and valuation of inventory for banks and businesses, ensuring accurate stock records and collateral security.",
    features: ["Physical stock verification", "Valuation as per standards", "Stock statement reconciliation", "Collateral adequacy assessment"]
  },
  {
    title: "Management Audit",
    description: "Comprehensive review of management practices, organizational effectiveness, and strategic alignment to enhance business performance.",
    features: ["Strategic objective evaluation", "Management efficiency review", "Organizational structure analysis", "Performance improvement suggestions"]
  },
  {
    title: "Co-operative Society Audit",
    description: "Audit of co-operative societies as per the Co-operative Societies Act and state-specific regulations with statutory compliance.",
    features: ["Financial statement audit", "Membership records verification", "Compliance with bye-laws", "Statutory returns assistance"]
  }
];

const AuditAssurance = () => {
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
                Assurance Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Audit & Assurance
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Comprehensive audit services that provide stakeholders with confidence in financial reporting. 
              Our rigorous methodologies ensure accuracy, compliance, and actionable insights.
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
            <span className="text-navy font-medium">Audit & Assurance</span>
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

      {/* Audit Approach */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Our Audit Approach
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              A systematic, risk-based methodology that ensures thorough examination and valuable insights.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Planning", desc: "Understanding business & risk assessment" },
              { step: "02", title: "Execution", desc: "Detailed testing & verification" },
              { step: "03", title: "Reporting", desc: "Clear findings & recommendations" },
              { step: "04", title: "Follow-up", desc: "Implementation support" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm relative">
                <span className="text-4xl font-display font-bold text-cream-dark">{item.step}</span>
                <h3 className="font-display font-semibold text-navy mt-2 mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need Professional Audit Services?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with our experienced audit team to ensure financial accuracy and compliance.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Schedule Audit Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AuditAssurance;
