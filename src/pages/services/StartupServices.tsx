import { Layout } from "@/components/layout/Layout";
import { Rocket, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Startup India & DPIIT Registration",
    description: "Complete assistance with Startup India registration under DPIIT for availing tax benefits, funding support, and other government incentives.",
    features: ["DPIIT recognition application", "Tax exemption certification", "Startup India portal support", "Government scheme guidance"]
  },
  {
    title: "Angel Tax Advisory",
    description: "Expert guidance on Section 56(2)(viib) compliance, valuation reports for share premium, and exemption claim procedures.",
    features: ["Share valuation reports", "Exemption application filing", "Documentation support", "Notice handling if any"]
  },
  {
    title: "ESOP Structuring",
    description: "Design and implementation of Employee Stock Option Plans to attract, retain, and motivate key talent in your startup.",
    features: ["ESOP scheme drafting", "Trust creation assistance", "Vesting schedule design", "Tax implication guidance"]
  },
  {
    title: "Business Plan & Financial Modelling",
    description: "Professional business plan preparation and financial modeling to present to investors and for internal strategic planning.",
    features: ["Market analysis inclusion", "Revenue projections", "Expense forecasting", "Sensitivity analysis"]
  },
  {
    title: "Pitch Deck Support",
    description: "Assistance in creating compelling investor pitch decks with proper financial data representation and growth narratives.",
    features: ["Story development", "Financial slide creation", "Metric presentation", "Investor Q&A preparation"]
  },
  {
    title: "Seed, Angel & VC Funding Support",
    description: "End-to-end support for fundraising rounds including investor documentation, due diligence preparation, and term sheet negotiation.",
    features: ["Investor outreach support", "Due diligence preparation", "Term sheet negotiation", "Legal document review"]
  }
];

const StartupServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Startup Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Startup & New Business Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Empowering entrepreneurs with comprehensive startup services from incorporation to funding. 
              We help you navigate the startup ecosystem and build a strong foundation for growth.
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
            <span className="text-navy font-medium">Startup & New Business</span>
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

      {/* Startup Journey */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Your Startup Journey with AKYCO
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              We support you at every stage of your entrepreneurial journey.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Ideation", desc: "Business structuring" },
              { step: "2", title: "Incorporation", desc: "Legal setup" },
              { step: "3", title: "Compliance", desc: "Stay compliant" },
              { step: "4", title: "Funding", desc: "Raise capital" },
              { step: "5", title: "Growth", desc: "Scale operations" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm relative">
                <span className="inline-block w-10 h-10 bg-navy text-white rounded-full text-lg font-bold leading-10 mb-2">
                  {item.step}
                </span>
                <h3 className="font-display font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-grey text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you build a strong foundation for your entrepreneurial journey.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StartupServices;
