import { Layout } from "@/components/layout/Layout";
import { TrendingUp, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, PieChart, Briefcase, LineChart, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Structuring",
    description: "Strategic advisory on optimal business structure considering tax efficiency, liability protection, regulatory compliance, and growth objectives.",
    features: ["Entity selection advisory", "Holding structure design", "Tax-efficient structuring", "Family business structuring"],
    process: ["Business analysis", "Structure evaluation", "Implementation plan", "Execution support"],
    benefits: ["Tax optimization", "Asset protection", "Growth enablement", "Succession readiness"]
  },
  {
    title: "Project Finance",
    description: "Comprehensive project finance support including feasibility studies, financial modeling, and assistance with bank/institutional financing.",
    features: ["Feasibility study preparation", "Financial projections", "Bank proposal preparation", "Term sheet negotiation"],
    process: ["Project assessment", "Financial modeling", "Lender identification", "Documentation & closure"],
    benefits: ["Optimal financing", "Lower interest rates", "Quick approvals", "Expert negotiation"]
  },
  {
    title: "Fund Raising Support",
    description: "End-to-end support for equity and debt fundraising including investor documentation, due diligence preparation, and negotiation support.",
    features: ["Investor presentation development", "Due diligence preparation", "Valuation support", "Transaction documentation"],
    process: ["Investor readiness", "Pitch preparation", "Investor meetings", "Deal closure"],
    benefits: ["Higher valuations", "Faster closures", "Better terms", "Professional representation"]
  },
  {
    title: "Valuation Services",
    description: "Independent business and asset valuations for various purposes including M&A, taxation, litigation, and regulatory compliance.",
    features: ["Business valuation (DCF, Market)", "Share/Equity valuation", "Intangible asset valuation", "Valuation for tax purposes"],
    process: ["Scope definition", "Data analysis", "Valuation computation", "Report certification"],
    benefits: ["Independent opinion", "Multiple methodologies", "Regulatory acceptance", "Litigation support"]
  },
  {
    title: "Virtual CFO Services",
    description: "Part-time CFO services providing strategic financial leadership, MIS reporting, and treasury management for growing businesses.",
    features: ["Financial strategy development", "MIS & dashboard reporting", "Cash flow management", "Board presentation support"],
    process: ["Business understanding", "Systems setup", "Ongoing support", "Strategic reviews"],
    benefits: ["60-70% cost savings", "Expert guidance", "Scalable services", "Strategic focus"]
  }
];

const keyHighlights = [
  { icon: PieChart, title: "Strategic Planning", description: "Data-driven financial strategies" },
  { icon: DollarSign, title: "₹500Cr+ Raised", description: "Funds raised for clients" },
  { icon: Users, title: "Expert Advisors", description: "CFO-level professionals" },
  { icon: LineChart, title: "Growth Focus", description: "Sustainable business growth" }
];

const FinancialAdvisory = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Strategic Finance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Financial Advisory</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Strategic financial advisory services to help businesses make informed decisions, raise capital, and optimize financial performance.
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Advisory Services</h2>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-grey leading-relaxed mb-8 text-lg">{service.description}</p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-cream/30 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-gold" />Key Features
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
                    <div className="bg-navy/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-navy" />Our Process
                      </h4>
                      <ul className="space-y-3">
                        {service.process.map((step, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{sIndex + 1}</span>
                            <span className="text-grey">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gold/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-gold" />Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-grey">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Need Financial Strategy Support?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let our financial advisors help you achieve your business goals.</p>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">
            Book Advisory Session<ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialAdvisory;
