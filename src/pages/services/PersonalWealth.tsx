import { Layout } from "@/components/layout/Layout";
import { UserCheck, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Personal Tax Planning",
    description: "Comprehensive personal tax planning to minimize tax liability through strategic use of deductions, exemptions, and investment planning.",
    features: ["Income optimization strategies", "Investment-linked tax savings", "Capital gains planning", "Retirement tax planning"]
  },
  {
    title: "HUF & Family Office Structuring",
    description: "Setup and management of Hindu Undivided Family structures and family offices for tax-efficient wealth management.",
    features: ["HUF formation & compliance", "Family office setup", "Inter-family transactions", "Succession integration"]
  },
  {
    title: "Succession Planning",
    description: "Strategic planning for smooth transition of business and wealth to next generation with minimal tax impact.",
    features: ["Business succession design", "Family constitution drafting", "Tax-efficient transfers", "Governance framework"]
  },
  {
    title: "Estate & Will Advisory",
    description: "Expert guidance on estate planning, will drafting, and probate matters to ensure seamless wealth transfer.",
    features: ["Will drafting & registration", "Trust creation for estates", "Probate assistance", "Asset consolidation planning"]
  },
  {
    title: "HNI Advisory",
    description: "Specialized wealth advisory for High Net Worth Individuals covering tax optimization, investments, and regulatory compliance.",
    features: ["Comprehensive tax planning", "Investment structuring", "Regulatory compliance", "Lifestyle planning integration"]
  },
  {
    title: "NRI Wealth Structuring",
    description: "Complete wealth management services for Non-Resident Indians including India investments, repatriation, and dual-country tax planning.",
    features: ["FEMA/RBI compliance", "Repatriation planning", "India investment structuring", "Cross-border tax optimization"]
  }
];

const PersonalWealth = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Personal Finance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Personal & Wealth Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Personalized wealth advisory for individuals, families, and HNIs. We help you protect, 
              grow, and transfer wealth across generations with optimal tax efficiency.
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
            <span className="text-navy font-medium">Personal & Wealth Services</span>
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

      {/* Wealth Journey */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Your Wealth Management Journey
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              A holistic approach to managing your personal and family wealth.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Protect", desc: "Tax-efficient structuring & compliance" },
              { title: "Grow", desc: "Strategic investment planning" },
              { title: "Transfer", desc: "Seamless succession planning" },
              { title: "Preserve", desc: "Multi-generational wealth preservation" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For NRIs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-navy mb-4">
                Special Focus: NRI Services
              </h2>
              <p className="text-grey mb-6">
                Managing finances across borders requires specialized expertise. Our dedicated NRI 
                services team understands the unique challenges faced by Non-Resident Indians.
              </p>
              <ul className="space-y-3">
                {[
                  "FEMA & RBI compliance for all transactions",
                  "Tax-efficient repatriation strategies",
                  "Property investment & management in India",
                  "Dual-country tax planning & treaty benefits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-grey">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream/50 rounded-2xl p-8">
              <h3 className="font-display font-semibold text-navy text-xl mb-4">Common NRI Queries We Handle</h3>
              <ul className="space-y-2 text-grey">
                <li>• Can I invest in Indian mutual funds as an NRI?</li>
                <li>• How to repatriate sale proceeds of property?</li>
                <li>• What is my residential status for tax purposes?</li>
                <li>• How to claim DTAA benefits?</li>
                <li>• Can I open an NRO/NRE account conversion?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to Optimize Your Personal Finances?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation with our wealth advisory team.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Book Personal Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalWealth;
