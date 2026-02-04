import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, AlertCircle, FileCheck, Scale, Building } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Annual Compliance Management (AMC)", description: "Comprehensive annual compliance management covering all statutory requirements.", features: ["Compliance calendar management", "Deadline tracking & alerts", "Filing coordination", "Compliance health reporting"], process: ["Compliance mapping", "Calendar setup", "Regular monitoring", "Filing & reporting"], benefits: ["Zero penalties", "Peace of mind", "Complete coverage", "Expert handling"], link: "/services/compliance/annual-compliance" },
  { title: "Labour Law Compliance", description: "Complete labour law compliance services including PF, ESIC, PT, and Shops Act.", features: ["PF/ESIC registration & returns", "Professional Tax compliance", "Shops Act registration", "Labour welfare fund"], process: ["Registration", "Monthly compliance", "Annual returns", "Inspection support"], benefits: ["Employee satisfaction", "Legal protection", "Smooth operations", "Audit readiness"], link: "/services/compliance/labour-law" },
  { title: "Factory Act & Industrial Law", description: "Comprehensive compliance for manufacturing units under Factories Act.", features: ["Factory license renewal", "Safety compliance", "Pollution control", "Industrial licenses"], process: ["License management", "Safety audits", "Compliance tracking", "Renewal support"], benefits: ["Uninterrupted operations", "Safety assurance", "Legal compliance", "Risk mitigation"], link: "/services/compliance/factory-act" },
  { title: "RBI, FEMA & SEBI Compliance", description: "Expert guidance on foreign exchange and capital market regulations.", features: ["FEMA compliance", "ECB/FDI compliance", "SEBI regulations", "RBI reporting"], process: ["Transaction review", "Compliance check", "Filing", "Reporting"], benefits: ["Cross-border ease", "Regulatory approval", "Expert guidance", "Risk avoidance"], link: "/services/compliance/rbi-fema-sebi" },
  { title: "NBFC Compliance", description: "Specialized compliance for Non-Banking Financial Companies.", features: ["RBI return filings", "Capital adequacy", "Asset classification", "Fair practice code"], process: ["Compliance review", "Return preparation", "Filing", "Monitoring"], benefits: ["RBI compliance", "License protection", "Operational continuity", "Reputation"], link: "/services/compliance/nbfc" },
  { title: "Trust, Society & NGO Compliance", description: "Regulatory compliance for trusts, societies, and NGOs.", features: ["12A/80G registration", "FCRA compliance", "Annual returns", "Charitable status"], process: ["Registration", "Compliance setup", "Annual filings", "Renewals"], benefits: ["Tax benefits", "Donor confidence", "Legal status", "Smooth operations"], link: "/services/compliance/trust-ngo" }
];

const keyHighlights = [
  { icon: Shield, title: "Zero Penalties", description: "100% on-time compliance record" },
  { icon: AlertCircle, title: "Proactive Alerts", description: "Never miss a deadline" },
  { icon: Scale, title: "Multi-Law Coverage", description: "All regulations under one roof" },
  { icon: Building, title: "Industry Expertise", description: "Sector-specific knowledge" }
];

const ComplianceRegulatory = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><Shield className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Regulatory Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Compliance & Regulatory</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Stay compliant with India's complex regulatory landscape with our comprehensive compliance services.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Compliance & Regulatory</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-gold" /></div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Compliance Services</h2></div>
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
                      <ul className="space-y-3">{service.process.map((s, i) => <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span><span className="text-grey">{s}</span></li>)}</ul>
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
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Need Compliance Support?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let us manage your compliance burden while you focus on growth.</p>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Get Compliance Assessment<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceRegulatory;
