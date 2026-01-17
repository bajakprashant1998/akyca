import { Layout } from "@/components/layout/Layout";
import { TrendingUp, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Structuring",
    description: "Strategic advisory on optimal business structure considering tax efficiency, liability protection, regulatory compliance, and growth objectives.",
    features: ["Entity selection advisory", "Holding structure design", "Tax-efficient structuring", "Family business structuring"]
  },
  {
    title: "Project Finance",
    description: "Comprehensive project finance support including feasibility studies, financial modeling, and assistance with bank/institutional financing.",
    features: ["Feasibility study preparation", "Financial projections", "Bank proposal preparation", "Term sheet negotiation"]
  },
  {
    title: "Fund Raising Support",
    description: "End-to-end support for equity and debt fundraising including investor documentation, due diligence preparation, and negotiation support.",
    features: ["Investor presentation development", "Due diligence preparation", "Valuation support", "Transaction documentation"]
  },
  {
    title: "Valuation Services",
    description: "Independent business and asset valuations for various purposes including M&A, taxation, litigation, and regulatory compliance.",
    features: ["Business valuation (DCF, Market)", "Share/Equity valuation", "Intangible asset valuation", "Valuation for tax purposes"]
  },
  {
    title: "Virtual CFO Services",
    description: "Part-time CFO services providing strategic financial leadership, MIS reporting, and treasury management for growing businesses.",
    features: ["Financial strategy development", "MIS & dashboard reporting", "Cash flow management", "Board presentation support"]
  }
];

const FinancialAdvisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Strategic Finance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Financial Advisory
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Strategic financial advisory services to help businesses make informed decisions, 
              raise capital, and optimize financial performance for sustainable growth.
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
            <span className="text-navy font-medium">Financial Advisory</span>
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

      {/* Virtual CFO Benefits */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Virtual CFO: Expert Finance Leadership
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Get CFO-level expertise without the full-time cost. Perfect for growing businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Cost Effective", desc: "60-70% savings vs full-time CFO" },
              { title: "Expert Guidance", desc: "Seasoned financial professionals" },
              { title: "Scalable", desc: "Services grow with your business" },
              { title: "Strategic Focus", desc: "Beyond just accounting" }
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
            Need Financial Strategy Support?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our financial advisors help you make strategic decisions and achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Book Advisory Session
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialAdvisory;
