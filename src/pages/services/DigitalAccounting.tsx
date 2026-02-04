import { Layout } from "@/components/layout/Layout";
import { Laptop, CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, Cloud, Zap, BarChart3, Database } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Cloud Accounting (Tally, Zoho, QuickBooks)", description: "Setup and management of cloud-based accounting solutions.", features: ["Tally Prime setup", "Zoho Books implementation", "QuickBooks configuration", "Multi-location access"], process: ["Assessment", "Setup", "Migration", "Training"], benefits: ["Real-time access", "Cost savings", "Scalability", "Expert support"], link: "/services/digital/cloud-accounting" },
  { title: "Automation of Finance Systems", description: "Streamline financial processes through automation.", features: ["Invoice automation", "Expense digitization", "Bank reconciliation", "Payment processing"], process: ["Process mapping", "Solution design", "Implementation", "Optimization"], benefits: ["70% time savings", "Error reduction", "Faster processing", "Cost efficiency"], link: "/services/digital/finance-automation" },
  { title: "MIS Reports & Dashboards", description: "Custom MIS reports and interactive dashboards.", features: ["Custom reports", "Real-time dashboards", "KPI tracking", "Executive summaries"], process: ["Requirement gathering", "Design", "Development", "Deployment"], benefits: ["Data-driven decisions", "Real-time insights", "Clear visibility", "Better control"], link: "/services/digital/mis-dashboards" },
  { title: "Virtual Accounting Department", description: "Complete outsourced accounting function.", features: ["Daily bookkeeping", "AP/AR management", "Monthly closings", "Financial statements"], process: ["Onboarding", "Process setup", "Regular operations", "Reporting"], benefits: ["Cost savings", "Expert team", "Scalable", "Focus on core business"], link: "/services/digital/virtual-accounting" },
  { title: "ERP Implementation Advisory", description: "Advisory for ERP implementation projects.", features: ["Requirement assessment", "Vendor evaluation", "Implementation oversight", "Post-implementation"], process: ["Assessment", "Selection", "Implementation", "Support"], benefits: ["Right solution", "Smooth transition", "ROI optimization", "Expert guidance"], link: "/services/digital/erp-advisory" },
  { title: "Data Migration & Cleanup", description: "Clean migration of financial data between systems.", features: ["Data mapping", "Legacy extraction", "Duplicate elimination", "Quality assurance"], process: ["Assessment", "Planning", "Migration", "Validation"], benefits: ["Accurate data", "Clean records", "Smooth transition", "Zero data loss"], link: "/services/digital/data-migration" }
];

const technologies = ["Tally Prime", "Zoho Books", "QuickBooks", "SAP B1", "Microsoft Dynamics", "Odoo"];
const stats = [{ number: "70%", label: "Time Savings" }, { number: "Real-time", label: "Visibility" }, { number: "99%", label: "Accuracy" }, { number: "24/7", label: "Access" }];

const DigitalAccounting = () => {
  return (
    <Layout>
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center"><Laptop className="w-8 h-8 text-navy" /></div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">Technology Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Digital & Modern Accounting</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">Leverage technology to transform your finance function.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy">Home</Link><ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy">Services</Link><ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">Digital Accounting</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-white mb-4">Benefits of Digital Transformation</h2></div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => <div key={i} className="text-center"><div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">{stat.number}</div><div className="text-white/80">{stat.label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-semibold text-navy mb-4">Technology We Work With</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {technologies.map((tech, i) => <div key={i} className="bg-cream/30 rounded-lg p-4 text-center border border-border"><p className="font-medium text-navy text-sm">{tech}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Digital Services</h2></div>
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
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">Ready to Modernize Your Finance Function?</h2>
          <Link to="/contact" className="cta-secondary inline-flex items-center justify-center gap-2">Get Technology Assessment<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalAccounting;
