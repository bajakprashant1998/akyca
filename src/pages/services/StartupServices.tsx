import { Layout } from "@/components/layout/Layout";
import { Rocket, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Lightbulb, DollarSign, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Startup India & DPIIT Registration", description: "Complete assistance with Startup India registration for tax benefits and government incentives.", features: ["DPIIT recognition", "Tax exemption certification", "Startup India portal", "Government schemes"], process: ["Eligibility check", "Documentation", "Application", "Certification"], benefits: ["Tax benefits", "Easy compliance", "Funding access", "Government support"], link: "/contact" },
  { title: "Angel Tax Advisory", description: "Expert guidance on Section 56(2)(viib) compliance and valuation.", features: ["Share valuation", "Exemption filing", "Documentation", "Notice handling"], process: ["Valuation", "Exemption application", "Filing", "Compliance"], benefits: ["Tax savings", "Investor confidence", "Legal compliance", "Expert support"], link: "/contact" },
  { title: "ESOP Structuring", description: "Design and implementation of Employee Stock Option Plans.", features: ["Scheme drafting", "Trust creation", "Vesting design", "Tax guidance"], process: ["Design", "Documentation", "Implementation", "Ongoing support"], benefits: ["Talent retention", "Motivation", "Tax efficiency", "Scalable"], link: "/contact" },
  { title: "Business Plan & Financial Modelling", description: "Professional business plan preparation and financial modeling.", features: ["Market analysis", "Revenue projections", "Expense forecasting", "Sensitivity analysis"], process: ["Research", "Modeling", "Validation", "Presentation"], benefits: ["Investor ready", "Clear roadmap", "Data-driven", "Professional"], link: "/contact" },
  { title: "Pitch Deck Support", description: "Creating compelling investor pitch decks.", features: ["Story development", "Financial slides", "Metrics", "Q&A prep"], process: ["Story crafting", "Design", "Review", "Practice"], benefits: ["Higher conversions", "Professional", "Compelling", "Investor focus"], link: "/contact" },
  { title: "Seed, Angel & VC Funding Support", description: "End-to-end support for fundraising rounds.", features: ["Investor outreach", "Due diligence", "Term negotiation", "Documentation"], process: ["Preparation", "Outreach", "Negotiation", "Closure"], benefits: ["Better valuations", "Faster closure", "Better terms", "Expert support"], link: "/contact" }
];

const StartupServices = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><Rocket className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Startup Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Startup & New Business Services</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Empowering entrepreneurs with comprehensive startup services from incorporation to funding.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Startup Services</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-navy mb-4">Your Startup Journey with AKYCO</h2></div>
          <div className="grid md:grid-cols-5 gap-4">
            {[{ step: "1", title: "Ideation", icon: Lightbulb }, { step: "2", title: "Incorporation", icon: FileText }, { step: "3", title: "Compliance", icon: CheckCircle }, { step: "4", title: "Funding", icon: DollarSign }, { step: "5", title: "Growth", icon: TrendingUp }].map((item, i) => (
              <div key={i} className="bg-cream/30 rounded-xl p-6 text-center border border-border">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{item.step}</div>
                <item.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <h3 className="font-display font-semibold text-navy">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Startup Services</h2></div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all block group"
              >
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{service.title}</h3>
                    <ArrowRight className="w-8 h-8 text-cream/50 group-hover:text-cream group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-grey leading-relaxed mb-8 text-lg">{service.description}</p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-cream/30 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-gold" />Key Features</h4>
                      <ul className="space-y-3">{service.features.map((f, i) => <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span className="text-grey">{f}</span></li>)}</ul>
                    </div>
                    <div className="bg-navy/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-navy" />Our Process</h4>
                      <ul className="space-y-3">{service.process.map((s, i) => <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</span><span className="text-grey">{s}</span></li>)}</ul>
                    </div>
                    <div className="bg-gold/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-gold" />Benefits</h4>
                      <ul className="space-y-3">{service.benefits.map((b, i) => <li key={i} className="flex items-start gap-3"><TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span className="text-grey">{b}</span></li>)}</ul>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <span className="text-navy font-medium group-hover:text-gold transition-colors flex items-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Ready to Launch Your Startup?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Start Your Journey<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default StartupServices;
