import { Layout } from "@/components/layout/Layout";
import { UserCheck, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Shield, Heart, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Personal Tax Planning", description: "Comprehensive personal tax planning to minimize liability.", features: ["Income optimization", "Investment tax savings", "Capital gains planning", "Retirement planning"], process: ["Profile analysis", "Strategy development", "Implementation", "Review"], benefits: ["Tax savings", "Legal optimization", "Wealth growth", "Expert guidance"], link: "/contact" },
  { title: "HUF & Family Office Structuring", description: "Setup and management of HUF and family offices.", features: ["HUF formation", "Family office setup", "Inter-family transactions", "Succession integration"], process: ["Assessment", "Structure design", "Implementation", "Ongoing management"], benefits: ["Tax efficiency", "Asset protection", "Family harmony", "Wealth preservation"], link: "/contact" },
  { title: "Succession Planning", description: "Strategic planning for smooth transition of wealth.", features: ["Business succession", "Family constitution", "Tax-efficient transfers", "Governance framework"], process: ["Family assessment", "Strategy", "Documentation", "Implementation"], benefits: ["Smooth transition", "Conflict prevention", "Tax efficiency", "Legacy protection"], link: "/contact" },
  { title: "Estate & Will Advisory", description: "Expert guidance on estate planning and will drafting.", features: ["Will drafting", "Trust creation", "Probate assistance", "Asset consolidation"], process: ["Asset mapping", "Planning", "Documentation", "Execution"], benefits: ["Seamless transfer", "Legal protection", "Family security", "Tax optimization"], link: "/contact" },
  { title: "HNI Advisory", description: "Specialized wealth advisory for High Net Worth Individuals.", features: ["Comprehensive tax planning", "Investment structuring", "Regulatory compliance", "Lifestyle planning"], process: ["Wealth assessment", "Strategy", "Implementation", "Monitoring"], benefits: ["Wealth optimization", "Expert guidance", "Privacy", "Holistic approach"], link: "/contact" },
  { title: "NRI Wealth Structuring", description: "Complete wealth management for Non-Resident Indians.", features: ["FEMA/RBI compliance", "Repatriation planning", "India investments", "Cross-border tax"], process: ["Status assessment", "Structure design", "Implementation", "Ongoing compliance"], benefits: ["Compliance assured", "Tax optimization", "Smooth repatriation", "Expert support"], link: "/contact" }
];

const wealthJourney = [{ title: "Protect", desc: "Tax-efficient structuring" }, { title: "Grow", desc: "Strategic investment" }, { title: "Transfer", desc: "Succession planning" }, { title: "Preserve", desc: "Multi-generational wealth" }];

const PersonalWealth = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><UserCheck className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Personal Finance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Personal & Wealth Services</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Personalized wealth advisory for individuals, families, and HNIs.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Personal & Wealth</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-navy mb-4">Your Wealth Management Journey</h2></div>
          <div className="grid md:grid-cols-4 gap-6">
            {wealthJourney.map((item, i) => (
              <div key={i} className="bg-cream/30 rounded-xl p-6 text-center border border-border">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{i+1}</div>
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Wealth Services</h2></div>
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

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4"><Globe className="w-4 h-4" />NRI Services</div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Special Focus: NRI Services</h2>
              <p className="text-white/80 mb-6">Managing finances across borders requires specialized expertise.</p>
              <ul className="space-y-3">
                {["FEMA & RBI compliance", "Tax-efficient repatriation", "Property investment in India", "Dual-country tax planning"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span className="text-white/80">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-display font-semibold text-white text-xl mb-4">Common NRI Queries</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Can I invest in Indian mutual funds as an NRI?</li>
                <li>• How to repatriate property sale proceeds?</li>
                <li>• What is my residential status for tax?</li>
                <li>• How to claim DTAA benefits?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Ready to Optimize Your Personal Finances?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Book Personal Consultation<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalWealth;
