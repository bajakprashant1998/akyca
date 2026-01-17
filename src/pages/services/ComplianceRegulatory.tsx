import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Annual Compliance Management (AMC)",
    description: "Comprehensive annual compliance management covering all statutory requirements under various laws and regulations applicable to your business.",
    features: ["Compliance calendar management", "Deadline tracking & alerts", "Filing coordination", "Compliance health reporting"]
  },
  {
    title: "Labour Law Compliance (PF, ESIC, PT, Shops Act)",
    description: "Complete labour law compliance services including PF, ESIC registration, monthly returns, and compliance under Shops & Establishment Act.",
    features: ["PF/ESIC registration & returns", "Professional Tax compliance", "Shops Act registration", "Labour welfare fund management"]
  },
  {
    title: "Factory Act & Industrial Law Compliance",
    description: "Comprehensive compliance support for manufacturing units under the Factories Act and other industrial regulations.",
    features: ["Factory license renewal", "Safety compliance audits", "Pollution control compliance", "Industrial license management"]
  },
  {
    title: "RBI, FEMA & SEBI Compliance",
    description: "Expert guidance on regulatory compliance for foreign exchange transactions, overseas investments, and capital market regulations.",
    features: ["FEMA compliance & reporting", "ECB/FDI compliance", "SEBI regulations adherence", "RBI reporting requirements"]
  },
  {
    title: "NBFC Compliance",
    description: "Specialized compliance services for Non-Banking Financial Companies under RBI regulations and applicable laws.",
    features: ["RBI return filings", "Capital adequacy compliance", "Asset classification norms", "Fair practice code compliance"]
  },
  {
    title: "Trust, Society & NGO Compliance",
    description: "Regulatory compliance for trusts, societies, and NGOs including registration, annual compliance, and FCRA requirements.",
    features: ["12A/80G registration", "FCRA compliance", "Annual return filing", "Charitable status maintenance"]
  }
];

const ComplianceRegulatory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Regulatory Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Compliance & Regulatory
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Stay compliant with India's complex regulatory landscape. Our comprehensive compliance 
              services cover everything from labour laws to FEMA, ensuring your business operates 
              within legal frameworks.
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
            <span className="text-navy font-medium">Compliance & Regulatory</span>
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

      {/* Compliance Benefits */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Benefits of Proactive Compliance
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Stay ahead of regulatory requirements and avoid costly penalties.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Zero Penalties", desc: "Avoid fines & legal issues" },
              { title: "Peace of Mind", desc: "Focus on core business" },
              { title: "Better Reputation", desc: "Build stakeholder trust" },
              { title: "Audit Ready", desc: "Always prepared for scrutiny" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h3 className="font-display font-semibold text-navy mb-2">{item.title}</h3>
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
            Need Compliance Support?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let us manage your compliance burden while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Get Compliance Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceRegulatory;
