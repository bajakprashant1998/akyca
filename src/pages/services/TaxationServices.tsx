import { Layout } from "@/components/layout/Layout";
import { FileText, CheckCircle, ChevronRight, ArrowRight, Shield, Clock, TrendingUp, Users, Target, Award, FileCheck, Calculator, BadgeCheck, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const services = [
  {
    title: "Income Tax Return Filing (Individual & Corporate)",
    description: "Expert preparation and timely filing of income tax returns for individuals, businesses, and corporations. We ensure maximum deductions and compliance with all regulations.",
    features: ["Accurate computation of taxable income", "Identification of eligible deductions", "E-filing with acknowledgment", "Assessment follow-up support"],
    process: ["Document collection & review", "Income computation & classification", "Deduction optimization", "E-filing & verification"],
    benefits: ["Zero penalty filing", "Maximum tax savings", "Expert computation", "Audit support included"],
    link: "/services/taxation/income-tax-return",
    highlight: "Most Popular"
  },
  {
    title: "Tax Planning & Advisory",
    description: "Strategic tax planning to minimize your tax liability legally while maximizing wealth creation. Customized solutions based on your financial goals.",
    features: ["Annual tax planning strategies", "Investment-linked tax savings", "Retirement planning optimization", "Business structure optimization"],
    process: ["Financial profile analysis", "Tax liability assessment", "Strategy formulation", "Implementation support"],
    benefits: ["Up to 30% tax savings", "Legal tax optimization", "Proactive planning", "Year-round support"],
    link: "/services/taxation/tax-planning",
    highlight: null
  },
  {
    title: "Corporate Taxation",
    description: "Comprehensive corporate tax services including advance tax computation, MAT/AMT planning, and compliance with corporate tax regulations.",
    features: ["Advance tax calculations", "MAT credit optimization", "Transfer pricing compliance", "Corporate tax return filing"],
    process: ["Quarterly advance tax planning", "MAT/AMT computation", "Credit utilization planning", "Annual compliance"],
    benefits: ["Optimized cash flow", "Penalty avoidance", "MAT credit recovery", "Compliant operations"],
    link: "/services/taxation/corporate-taxation",
    highlight: null
  },
  {
    title: "International Taxation",
    description: "Expert guidance on cross-border transactions, DTAA benefits, and international tax compliance for businesses with global operations.",
    features: ["DTAA treaty benefits", "Cross-border transaction structuring", "Expatriate taxation", "Foreign income compliance"],
    process: ["Treaty analysis", "Structure optimization", "Withholding compliance", "Reporting & filing"],
    benefits: ["Double tax relief", "Optimized structures", "Global compliance", "Expert representation"],
    link: "/services/taxation/international-taxation",
    highlight: "Specialized"
  },
  {
    title: "NRI Taxation",
    description: "Specialized tax services for Non-Resident Indians covering residential status determination, foreign income taxation, and DTAA benefits.",
    features: ["Residential status determination", "Repatriation planning", "FEMA compliance", "Double taxation relief"],
    process: ["Status determination", "Income classification", "Treaty benefit claims", "Return filing"],
    benefits: ["Correct tax treatment", "DTAA benefits claimed", "Smooth repatriation", "Compliance assured"],
    link: "/services/taxation/nri-taxation",
    highlight: null
  },
  {
    title: "TDS Compliance & Returns",
    description: "Complete TDS management including computation, deduction, deposit, and quarterly return filing with full compliance assurance.",
    features: ["TDS calculation & deduction", "Quarterly return filing", "Form 16/16A generation", "Lower deduction certificates"],
    process: ["Rate determination", "Timely deduction", "Challan deposit", "Return filing"],
    benefits: ["Zero default notices", "Timely compliance", "Employee satisfaction", "Complete documentation"],
    link: "/services/taxation/tds-compliance",
    highlight: null
  },
  {
    title: "Representation before Tax Authorities",
    description: "Professional representation before Income Tax authorities for assessments, appeals, and dispute resolution at all levels.",
    features: ["Scrutiny assessment handling", "Appeal preparation & filing", "Settlement commission matters", "Tribunal representation"],
    process: ["Case analysis", "Documentation preparation", "Representation", "Appeal/Resolution"],
    benefits: ["Expert advocacy", "Higher success rate", "Reduced liability", "Peace of mind"],
    link: "/services/taxation/tax-representation",
    highlight: null
  }
];

const keyHighlights = [
  { icon: Shield, title: "100% Compliance", description: "Zero penalty record across thousands of filings", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: TrendingUp, title: "Maximum Savings", description: "Average 20-30% tax savings through legal planning", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Clock, title: "Timely Filing", description: "Never missed a deadline in 45+ years", color: "from-amber-500/20 to-amber-600/10" },
  { icon: Users, title: "Expert Team", description: "Qualified CAs with specialized tax expertise", color: "from-purple-500/20 to-purple-600/10" }
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
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cream to-cream/80 rounded-3xl flex items-center justify-center shadow-2xl">
                  <FileText className="w-10 h-10 text-navy" />
                </div>
                <div>
                  <span className="text-gold font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Core Services
                  </span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Taxation<br />
                <span className="text-gold">Services</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-3xl mb-8">
                Comprehensive taxation solutions for individuals and businesses. From income tax return filing 
                to complex international taxation, our expert team ensures maximum compliance and optimization 
                of your tax position.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  Book Tax Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919825046598"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  +91 98250 46598
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-cream/30 py-4 border-b border-border">
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

      {/* Key Highlights - Enhanced */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br group-hover:scale-110",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">{item.title}</h3>
                  <p className="text-grey">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                Our Taxation Services
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                Comprehensive tax solutions tailored to your specific needs
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Link
                  to={service.link}
                  className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 block group hover:-translate-y-1"
                >
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-navy via-navy/95 to-navy/90 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gold/5" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <FileCheck className="w-6 h-6 text-cream" />
                          </div>
                          <span className="text-cream/80 text-sm font-medium">Service {String(index + 1).padStart(2, '0')}</span>
                          {service.highlight && (
                            <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                              {service.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white pr-8">
                          {service.title}
                        </h3>
                      </div>
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all">
                        <ArrowRight className="w-6 h-6 text-cream group-hover:text-navy transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-grey leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Key Features */}
                      <div className="bg-gradient-to-br from-cream/50 to-cream/20 rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                          <BadgeCheck className="w-5 h-5 text-gold" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-grey text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Process Steps */}
                      <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-navy" />
                          Our Process
                        </h4>
                        <ul className="space-y-3">
                          {service.process.map((step, sIndex) => (
                            <li key={sIndex} className="flex items-start gap-3">
                              <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                {sIndex + 1}
                              </span>
                              <span className="text-grey text-sm">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-gold" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-3">
                              <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-grey text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                      <span className="text-grey text-sm">Click to view full service details</span>
                      <span className="text-navy font-semibold group-hover:text-gold transition-colors flex items-center gap-2">
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Track Record</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Why Choose AKYCO for Taxation Services?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Proven track record of excellence in taxation services
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="text-5xl md:text-6xl font-display font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calendar - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Stay Compliant</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                Important Tax Deadlines
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                Stay on top of your tax obligations with key compliance dates
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { date: "31st July", title: "ITR Filing", desc: "Individual (Non-Audit cases)", icon: FileText, color: "from-blue-500/20 to-blue-600/10" },
              { date: "31st October", title: "ITR Filing", desc: "Audit cases (Tax/Company)", icon: FileCheck, color: "from-purple-500/20 to-purple-600/10" },
              { date: "15th Quarterly", title: "Advance Tax", desc: "15th Jun, Sep, Dec, Mar", icon: Calculator, color: "from-amber-500/20 to-amber-600/10" },
              { date: "7th Monthly", title: "TDS Deposit", desc: "Monthly TDS payment", icon: Clock, color: "from-emerald-500/20 to-emerald-600/10" }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br group-hover:scale-110 transition-transform",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8 text-navy" />
                  </div>
                  <p className="text-gold font-bold text-2xl mb-2">{item.date}</p>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">{item.title}</h3>
                  <p className="text-grey">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Need Expert Tax Assistance?
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
              Schedule a consultation with our tax experts to optimize your tax position and ensure complete compliance.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919825046598"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919825046598"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call: +91 98250 46598
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TaxationServices;