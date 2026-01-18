import { Layout } from "@/components/layout/Layout";
import { Calculator, CheckCircle, ChevronRight, ArrowRight, Shield, Clock, TrendingUp, FileCheck, Target, Award, BadgeCheck, AlertCircle, Calendar, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "GST Registration",
    description: "Complete assistance with GST registration process including application preparation, documentation, and obtaining GSTIN for new businesses.",
    features: ["New registration application", "Amendment in registration", "Cancellation processing", "Migration support"],
    process: ["Document collection", "Application preparation", "ARN generation", "GSTIN issuance"],
    benefits: ["Quick registration", "Error-free application", "Expert guidance", "Post-registration support"]
  },
  {
    title: "GST Return Filing",
    description: "Accurate and timely filing of all GST returns including GSTR-1, GSTR-3B, annual returns, and reconciliation with books of accounts.",
    features: ["Monthly/Quarterly GSTR-1 & 3B", "Annual return GSTR-9", "GSTR-9C reconciliation", "ITC reconciliation"],
    process: ["Data collection & verification", "Invoice matching", "Return preparation", "Filing & reconciliation"],
    benefits: ["Zero late fees", "Maximum ITC claim", "Error-free returns", "Compliance tracking"]
  },
  {
    title: "GST Audit",
    description: "Comprehensive GST audit services for businesses exceeding the threshold limit, including reconciliation and certification.",
    features: ["GSTR-9C preparation", "ITC verification audit", "Compliance gap analysis", "Audit report certification"],
    process: ["Books examination", "Return reconciliation", "Discrepancy resolution", "Certification"],
    benefits: ["Compliant certification", "Gap identification", "Risk mitigation", "Expert sign-off"]
  },
  {
    title: "GST Advisory & Compliance",
    description: "Strategic GST advisory services covering tax planning, rate classification, and compliance optimization for business operations.",
    features: ["Rate classification advice", "Place of supply determination", "Input tax credit optimization", "Reverse charge compliance"],
    process: ["Business analysis", "Compliance review", "Strategy formulation", "Implementation"],
    benefits: ["Optimized GST position", "Reduced litigation risk", "Clear compliance", "Cost savings"]
  },
  {
    title: "Litigation & Notice Handling",
    description: "Expert representation and handling of GST notices, assessments, and litigation matters before GST authorities.",
    features: ["Notice response drafting", "Assessment proceedings", "Appeal preparation", "Advance ruling applications"],
    process: ["Notice analysis", "Strategy development", "Response preparation", "Representation"],
    benefits: ["Expert handling", "Timely responses", "Reduced liability", "Professional representation"]
  }
];

const keyHighlights = [
  { icon: Shield, title: "100% Compliance Rate", description: "Never missed a GST filing deadline" },
  { icon: Percent, title: "ITC Optimization", description: "Maximize your input tax credit claims" },
  { icon: Clock, title: "Timely Filing", description: "Automated reminders and on-time submissions" },
  { icon: AlertCircle, title: "Notice Handling", description: "Expert representation before authorities" }
];

const gstCalendar = [
  { return: "GSTR-1", due: "11th of next month", desc: "Outward supplies details", frequency: "Monthly" },
  { return: "GSTR-3B", due: "20th of next month", desc: "Summary return with payment", frequency: "Monthly" },
  { return: "GSTR-9", due: "31st December", desc: "Annual return", frequency: "Yearly" },
  { return: "GSTR-9C", due: "31st December", desc: "Reconciliation statement", frequency: "Yearly" }
];

const stats = [
  { number: "5,000+", label: "Returns Filed Annually" },
  { number: "₹100Cr+", label: "ITC Recovered" },
  { number: "500+", label: "Active GST Clients" },
  { number: "100%", label: "On-time Filing" }
];

const GSTServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Indirect Tax
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              GST Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              End-to-end Goods and Services Tax solutions from registration to litigation. 
              Our team ensures your business stays compliant while optimizing your GST position.
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
            <span className="text-navy font-medium">GST Services</span>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
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

      {/* Services Detail */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Comprehensive GST Solutions
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              From registration to litigation, we handle all your GST needs
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-cream" />
                    </div>
                    <span className="text-cream/80 text-sm font-medium">Service {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <div className="p-6 md:p-8">
                  <p className="text-grey leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-cream/30 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-gold" />
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
                    
                    <div className="bg-navy/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-navy" />
                        Our Process
                      </h4>
                      <ul className="space-y-3">
                        {service.process.map((step, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {sIndex + 1}
                            </span>
                            <span className="text-grey">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gold/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-gold" />
                        Benefits
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

      {/* GST Compliance Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              GST Compliance Calendar
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Stay on top of your GST obligations with our comprehensive compliance management
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {gstCalendar.map((item, index) => (
              <div key={index} className="bg-cream/30 rounded-xl p-6 border border-border hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{item.frequency}</span>
                </div>
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{item.return}</h3>
                <p className="text-gold font-medium mb-2">Due: {item.due}</p>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common GST Issues We Solve */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Common GST Challenges We Solve
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { issue: "ITC Mismatch", solution: "Complete reconciliation with GSTR-2A/2B", icon: AlertCircle },
              { issue: "Notice from Department", solution: "Expert response drafting & representation", icon: FileCheck },
              { issue: "E-Way Bill Compliance", solution: "Streamlined process & documentation", icon: Shield }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.issue}</h3>
                <p className="text-grey text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need GST Compliance Support?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts handle your GST compliance while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919825046598"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-2"
            >
              Call: +91 98250 46598
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GSTServices;
