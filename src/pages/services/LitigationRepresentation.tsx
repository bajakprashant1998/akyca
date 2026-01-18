import { Layout } from "@/components/layout/Layout";
import { Gavel, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Shield, Scale, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Income Tax Appeals & Assessments", description: "Professional representation in income tax assessments and appeals at all levels.", features: ["Assessment proceedings", "CIT(A) appeals", "ITAT representation", "High Court matters"], process: ["Case analysis", "Strategy development", "Documentation", "Representation"], benefits: ["Expert advocacy", "Higher success rate", "Reduced liability", "Peace of mind"] },
  { title: "GST Litigation", description: "Expert handling of GST disputes and litigation matters.", features: ["Notice response", "Assessment challenges", "Appellate proceedings", "Advance rulings"], process: ["Notice analysis", "Response drafting", "Filing", "Representation"], benefits: ["Timely resolution", "Expert handling", "Cost effective", "Professional support"] },
  { title: "Tribunal & Commissioner Proceedings", description: "Skilled representation before tribunals and commissioners.", features: ["Case preparation", "Written submissions", "Oral arguments", "Cross-examination"], process: ["Research", "Submission drafting", "Hearing preparation", "Representation"], benefits: ["Strong advocacy", "Legal expertise", "Successful outcomes", "Full support"] },
  { title: "Notice Drafting & Reply", description: "Expert drafting of responses to tax authority notices.", features: ["Notice analysis", "Reply preparation", "Document compilation", "Submission"], process: ["Notice review", "Strategy", "Drafting", "Filing"], benefits: ["Comprehensive response", "Legal compliance", "Timely submission", "Expert review"] },
  { title: "Search & Survey Case Handling", description: "Specialized support during and after search operations.", features: ["On-ground support", "Post-search handling", "Settlement matters", "Block assessment"], process: ["Immediate support", "Documentation", "Assessment handling", "Resolution"], benefits: ["Expert guidance", "Rights protection", "Liability minimization", "Full support"] },
  { title: "Black Money & Benami Act Advisory", description: "Expert advisory on Black Money and Benami Act matters.", features: ["Compliance advisory", "Disclosure assistance", "Notice handling", "Penalty mitigation"], process: ["Situation analysis", "Strategy", "Implementation", "Resolution"], benefits: ["Legal protection", "Penalty reduction", "Expert guidance", "Confidentiality"] }
];

const stats = [{ number: "500+", label: "Cases Handled" }, { number: "85%", label: "Success Rate" }, { number: "45+", label: "Years Experience" }, { number: "All Levels", label: "AO to Supreme Court" }];

const LitigationRepresentation = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><Gavel className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Legal Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Litigation & Representation</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Strong advocacy and expert representation before tax authorities and tribunals.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Litigation & Representation</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => <div key={i} className="text-center"><div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">{stat.number}</div><div className="text-white/80">{stat.label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Litigation Services</h2></div>
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
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Facing Tax Notice or Assessment?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Get Legal Consultation<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default LitigationRepresentation;
