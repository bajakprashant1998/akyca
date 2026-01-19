import { Layout } from "@/components/layout/Layout";
import { FileText, CheckCircle, ChevronRight, ArrowRight, Shield, Clock, TrendingUp, Users, Target, Award, FileCheck, Calculator, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Income Tax Return Filing (Individual & Corporate)",
    description: "Expert preparation and timely filing of income tax returns for individuals, businesses, and corporations. We ensure maximum deductions and compliance with all regulations.",
    features: ["Accurate computation of taxable income", "Identification of eligible deductions", "E-filing with acknowledgment", "Assessment follow-up support"],
    process: ["Document collection & review", "Income computation & classification", "Deduction optimization", "E-filing & verification"],
    benefits: ["Zero penalty filing", "Maximum tax savings", "Expert computation", "Audit support included"],
    link: "/services/taxation/income-tax-return"
  },
  {
    title: "Tax Planning & Advisory",
    description: "Strategic tax planning to minimize your tax liability legally while maximizing wealth creation. Customized solutions based on your financial goals.",
    features: ["Annual tax planning strategies", "Investment-linked tax savings", "Retirement planning optimization", "Business structure optimization"],
    process: ["Financial profile analysis", "Tax liability assessment", "Strategy formulation", "Implementation support"],
    benefits: ["Up to 30% tax savings", "Legal tax optimization", "Proactive planning", "Year-round support"],
    link: "/services/taxation/tax-planning"
  },
  {
    title: "Corporate Taxation",
    description: "Comprehensive corporate tax services including advance tax computation, MAT/AMT planning, and compliance with corporate tax regulations.",
    features: ["Advance tax calculations", "MAT credit optimization", "Transfer pricing compliance", "Corporate tax return filing"],
    process: ["Quarterly advance tax planning", "MAT/AMT computation", "Credit utilization planning", "Annual compliance"],
    benefits: ["Optimized cash flow", "Penalty avoidance", "MAT credit recovery", "Compliant operations"],
    link: "/services/taxation/corporate-taxation"
  },
  {
    title: "International Taxation",
    description: "Expert guidance on cross-border transactions, DTAA benefits, and international tax compliance for businesses with global operations.",
    features: ["DTAA treaty benefits", "Cross-border transaction structuring", "Expatriate taxation", "Foreign income compliance"],
    process: ["Treaty analysis", "Structure optimization", "Withholding compliance", "Reporting & filing"],
    benefits: ["Double tax relief", "Optimized structures", "Global compliance", "Expert representation"],
    link: "/services/taxation/international-taxation"
  },
  {
    title: "NRI Taxation",
    description: "Specialized tax services for Non-Resident Indians covering residential status determination, foreign income taxation, and DTAA benefits.",
    features: ["Residential status determination", "Repatriation planning", "FEMA compliance", "Double taxation relief"],
    process: ["Status determination", "Income classification", "Treaty benefit claims", "Return filing"],
    benefits: ["Correct tax treatment", "DTAA benefits claimed", "Smooth repatriation", "Compliance assured"],
    link: "/services/taxation/nri-taxation"
  },
  {
    title: "TDS Compliance & Returns",
    description: "Complete TDS management including computation, deduction, deposit, and quarterly return filing with full compliance assurance.",
    features: ["TDS calculation & deduction", "Quarterly return filing", "Form 16/16A generation", "Lower deduction certificates"],
    process: ["Rate determination", "Timely deduction", "Challan deposit", "Return filing"],
    benefits: ["Zero default notices", "Timely compliance", "Employee satisfaction", "Complete documentation"],
    link: "/services/taxation/tds-compliance"
  },
  {
    title: "Representation before Tax Authorities",
    description: "Professional representation before Income Tax authorities for assessments, appeals, and dispute resolution at all levels.",
    features: ["Scrutiny assessment handling", "Appeal preparation & filing", "Settlement commission matters", "Tribunal representation"],
    process: ["Case analysis", "Documentation preparation", "Representation", "Appeal/Resolution"],
    benefits: ["Expert advocacy", "Higher success rate", "Reduced liability", "Peace of mind"],
    link: "/services/taxation/tax-representation"
  }
];

const keyHighlights = [
  { icon: Shield, title: "100% Compliance", description: "Zero penalty record across thousands of filings" },
  { icon: TrendingUp, title: "Maximum Savings", description: "Average 20-30% tax savings through legal planning" },
  { icon: Clock, title: "Timely Filing", description: "Never missed a deadline in 45+ years" },
  { icon: Users, title: "Expert Team", description: "Qualified CAs with specialized tax expertise" }
];

const whyChooseUs = [
  { number: "45+", label: "Years Experience" },
  { number: "10,000+", label: "Returns Filed" },
  { number: "₹500Cr+", label: "Tax Saved for Clients" },
  { number: "99%", label: "Client Retention" }
];

const TaxationServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Core Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Taxation Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Comprehensive taxation solutions for individuals and businesses. From income tax return filing 
              to complex international taxation, our expert team ensures maximum compliance and optimization 
              of your tax position.
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
            <span className="text-navy font-medium">Taxation Services</span>
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
              Our Taxation Services
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Comprehensive tax solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 block group"
              >
                {/* Service Header */}
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
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
                    <ArrowRight className="w-8 h-8 text-cream/50 group-hover:text-cream group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <p className="text-grey leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Key Features */}
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
                    
                    {/* Process Steps */}
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
                    
                    {/* Benefits */}
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
                  
                  <div className="mt-6 flex justify-end">
                    <span className="text-navy font-medium group-hover:text-gold transition-colors flex items-center gap-2">
                      View Full Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-white mb-4">
              Why Choose AKYCO for Taxation Services?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Proven track record of excellence in taxation services
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((stat, index) => (
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

      {/* Tax Calendar */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Important Tax Deadlines
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Stay on top of your tax obligations with key compliance dates
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { date: "31st July", title: "ITR Filing", desc: "Individual (Non-Audit cases)", icon: FileText },
              { date: "31st October", title: "ITR Filing", desc: "Audit cases (Tax/Company)", icon: FileCheck },
              { date: "15th Quarterly", title: "Advance Tax", desc: "15th Jun, Sep, Dec, Mar", icon: Calculator },
              { date: "7th Monthly", title: "TDS Deposit", desc: "Monthly TDS payment", icon: Clock }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-navy" />
                </div>
                <p className="text-gold font-bold text-lg mb-1">{item.date}</p>
                <h3 className="font-display font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need Expert Tax Assistance?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our tax experts to optimize your tax position and ensure complete compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              Book Consultation
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

export default TaxationServices;
