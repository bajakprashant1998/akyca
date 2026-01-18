import { Layout } from "@/components/layout/Layout";
import { Factory, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Building, Heart, ShoppingCart, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Real Estate & RERA Compliance", description: "Comprehensive services for real estate developers.", features: ["RERA registration", "Project accounting", "Sales compliance", "GST advisory"], process: ["Registration", "Compliance setup", "Ongoing support", "Reporting"], benefits: ["RERA compliance", "Legal protection", "Buyer confidence", "Smooth operations"] },
  { title: "Healthcare & Hospital Accounting", description: "Specialized services for hospitals and healthcare providers.", features: ["Revenue recognition", "Cost center accounting", "Clinical compliance", "Healthcare GST"], process: ["Assessment", "System setup", "Compliance", "Reporting"], benefits: ["Accurate financials", "Regulatory compliance", "Cost control", "Expert support"] },
  { title: "Manufacturing Industry Audit", description: "Industry-specific audit for manufacturing units.", features: ["Cost audit", "Inventory valuation", "Production analysis", "Transfer pricing"], process: ["Planning", "Execution", "Reporting", "Follow-up"], benefits: ["Cost optimization", "Compliance", "Efficiency gains", "Expert insights"] },
  { title: "Export Import (EXIM) Advisory", description: "Complete advisory for export-import businesses.", features: ["Export benefits", "Customs advisory", "DGFT schemes", "LC advisory"], process: ["Assessment", "Strategy", "Implementation", "Optimization"], benefits: ["Duty savings", "Faster clearances", "Compliance", "Expert guidance"] },
  { title: "E-commerce Compliance", description: "Comprehensive compliance for e-commerce businesses.", features: ["E-commerce GST", "TCS provisions", "FDI compliance", "Marketplace review"], process: ["Compliance mapping", "Setup", "Monitoring", "Reporting"], benefits: ["Full compliance", "Penalty avoidance", "Growth support", "Expert handling"] },
  { title: "Educational Institution Advisory", description: "Specialized services for schools and colleges.", features: ["Fee accounting", "Trust compliance", "UGC/AICTE requirements", "12A/80G benefits"], process: ["Assessment", "Compliance", "Reporting", "Advisory"], benefits: ["Regulatory compliance", "Tax benefits", "Transparency", "Expert support"] },
  { title: "NGO & Trust Management", description: "Complete management for NGOs and charitable trusts.", features: ["FCRA compliance", "CSR management", "Impact reporting", "Governance"], process: ["Assessment", "Compliance setup", "Ongoing management", "Reporting"], benefits: ["Donor confidence", "Legal compliance", "Transparency", "Growth support"] }
];

const industries = ["Real Estate", "Healthcare", "Manufacturing", "IT & Software", "E-commerce", "Education", "NGO & Trusts", "Retail", "Hospitality", "Logistics", "Pharma", "Textiles"];

const IndustrySpecific = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><Factory className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Sector Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Industry-Specific Services</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Tailored solutions for diverse industries with specialized expertise.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Industry-Specific</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-navy mb-4">Industries We Serve</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => <div key={i} className="bg-cream/30 rounded-lg p-4 text-center border border-border hover:shadow-md transition-all"><p className="font-medium text-navy">{ind}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Industry Services</h2></div>
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
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Need Industry-Specific Expertise?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Get Consultation<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndustrySpecific;
