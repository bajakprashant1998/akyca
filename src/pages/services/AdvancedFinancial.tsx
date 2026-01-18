import { Layout } from "@/components/layout/Layout";
import { ClipboardCheck, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Search, Shield, Scale, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Risk Assessment & Internal Controls", description: "Comprehensive assessment of business risks and internal control systems.", features: ["Risk mapping", "Control evaluation", "Gap analysis", "Remediation roadmap"], process: ["Assessment", "Evaluation", "Reporting", "Implementation"], benefits: ["Risk mitigation", "Fraud prevention", "Efficiency", "Compliance"] },
  { title: "Forensic Audit & Fraud Investigation", description: "Specialized investigations into suspected fraud and financial irregularities.", features: ["Fraud detection", "Digital evidence", "Investigation reporting", "Litigation support"], process: ["Investigation planning", "Evidence gathering", "Analysis", "Reporting"], benefits: ["Fraud detection", "Legal evidence", "Recovery support", "Prevention"] },
  { title: "Business Valuation", description: "Independent business valuations using multiple methodologies.", features: ["DCF valuation", "Comparable analysis", "Asset-based valuation", "Fairness opinions"], process: ["Scope definition", "Data analysis", "Valuation", "Certification"], benefits: ["Independent opinion", "Multi-method", "Regulatory accepted", "Expert support"] },
  { title: "Insolvency & Bankruptcy (IBC) Support", description: "Comprehensive support under the Insolvency and Bankruptcy Code.", features: ["CIRP support", "Claims verification", "Resolution advisory", "Liquidation support"], process: ["Assessment", "Claims filing", "Resolution", "Closure"], benefits: ["Expert guidance", "Recovery maximization", "Compliance", "Timely resolution"] },
  { title: "Turnaround & Restructuring Advisory", description: "Strategic advisory for distressed businesses.", features: ["Viability assessment", "Cash flow restructuring", "Debt restructuring", "Operational improvement"], process: ["Diagnosis", "Strategy", "Implementation", "Monitoring"], benefits: ["Business revival", "Stakeholder confidence", "Improved performance", "Expert support"] },
  { title: "Corporate Governance Advisory", description: "Advisory to strengthen corporate governance practices.", features: ["Governance framework", "Board advisory", "Policy formulation", "ESG integration"], process: ["Assessment", "Framework design", "Implementation", "Monitoring"], benefits: ["Better governance", "Stakeholder trust", "Risk management", "Compliance"] }
];

const AdvancedFinancial = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><ClipboardCheck className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Specialized Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Advanced Financial Services</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">High-value advisory services for complex financial situations.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Advanced Financial</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-navy mb-4">When You Need Advanced Services</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ title: "Suspected Fraud", desc: "Financial irregularities or misconduct", action: "Forensic Investigation", icon: Search }, { title: "Business Distress", desc: "Financial difficulties or cash flow issues", action: "Turnaround Advisory", icon: AlertTriangle }, { title: "M&A Transaction", desc: "Buying, selling, or merging", action: "Valuation Services", icon: Scale }].map((item, i) => (
              <div key={i} className="bg-cream/30 rounded-xl p-6 border border-border">
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-grey text-sm mb-3">{item.desc}</p>
                <p className="text-gold font-medium">→ {item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Advanced Services</h2></div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8"><h3 className="text-2xl md:text-3xl font-display font-bold text-white">{service.title}</h3></div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Facing a Complex Financial Situation?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Discuss Your Situation<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default AdvancedFinancial;
