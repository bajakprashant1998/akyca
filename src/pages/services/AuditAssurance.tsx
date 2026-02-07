import { Layout } from "@/components/layout/Layout";
import { ClipboardCheck, CheckCircle, ChevronRight, ArrowRight, Shield, Eye, FileSearch, Target, Award, BadgeCheck, TrendingUp, Scale, FileCheck, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AnimatedSection = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StatCounter = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    if (!isVisible) return;
    const numericPart = number.replace(/[^0-9]/g, "");
    const prefix = number.match(/^[^0-9]*/)?.[0] || "";
    const suffix = number.match(/[^0-9]*$/)?.[0] || "";
    const target = parseInt(numericPart) || 0;
    if (target === 0) { setDisplayNumber(number); return; }
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setDisplayNumber(number); clearInterval(timer); }
      else setDisplayNumber(`${prefix}${Math.floor(current)}${suffix}`);
    }, 50);
    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
        {displayNumber}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

const services = [
  {
    title: "Statutory Audit",
    description: "Independent examination of financial statements as per Companies Act, 2013. We provide comprehensive audit services with detailed reports and management recommendations.",
    features: ["Financial statement verification", "Internal control evaluation", "Compliance with accounting standards", "Management letter with recommendations"],
    process: ["Audit planning & risk assessment", "Understanding internal controls", "Substantive testing", "Reporting & recommendations"],
    benefits: ["Stakeholder confidence", "Regulatory compliance", "Fraud detection", "Improved controls"],
    link: "/services/audit/statutory-audit",
    highlight: "Core Service"
  },
  {
    title: "Internal Audit",
    description: "Systematic evaluation of internal controls, risk management, and governance processes to improve organizational efficiency and effectiveness.",
    features: ["Risk-based audit approach", "Process efficiency review", "Control gap identification", "Improvement recommendations"],
    process: ["Risk assessment", "Audit planning", "Fieldwork execution", "Reporting & follow-up"],
    benefits: ["Enhanced controls", "Operational efficiency", "Risk mitigation", "Process improvement"],
    link: "/services/audit/internal-audit",
    highlight: null
  },
  {
    title: "Tax Audit",
    description: "Mandatory audit under Section 44AB of Income Tax Act for businesses exceeding prescribed turnover limits, with Form 3CA/3CB and 3CD certification.",
    features: ["Turnover limit compliance", "Form 3CD preparation", "Tax liability verification", "Clause-wise detailed reporting"],
    process: ["Books verification", "Clause-wise examination", "Tax computation review", "Certification & filing"],
    benefits: ["Compliance assured", "Penalty avoidance", "Expert certification", "Tax optimization"],
    link: "/services/audit/tax-audit",
    highlight: null
  },
  {
    title: "Concurrent Audit",
    description: "Real-time audit of transactions as they occur, particularly for banking and financial institutions to ensure immediate compliance.",
    features: ["Daily transaction review", "Immediate exception reporting", "Fraud prevention checks", "Real-time compliance assurance"],
    process: ["Daily verification", "Exception identification", "Immediate reporting", "Corrective action tracking"],
    benefits: ["Real-time detection", "Immediate correction", "Fraud prevention", "Continuous monitoring"],
    link: "/services/audit/concurrent-audit",
    highlight: null
  },
  {
    title: "Bank Audit",
    description: "Specialized audit services for banking sector including branch audit, revenue audit, and concurrent audit as per RBI guidelines.",
    features: ["Branch financial audit", "NPA classification review", "LFAR preparation", "RBI compliance verification"],
    process: ["Branch assessment", "Asset classification", "Income recognition review", "LFAR submission"],
    benefits: ["RBI compliance", "Accurate classification", "Revenue leakage detection", "Regulatory confidence"],
    link: "/services/audit/bank-audit",
    highlight: "Banking"
  },
  {
    title: "Stock Audit",
    description: "Physical verification and valuation of inventory for banks and businesses, ensuring accurate stock records and collateral security.",
    features: ["Physical stock verification", "Valuation as per standards", "Stock statement reconciliation", "Collateral adequacy assessment"],
    process: ["Physical verification", "Valuation review", "Record reconciliation", "Report preparation"],
    benefits: ["Accurate valuation", "Collateral security", "Fraud detection", "Reliable statements"],
    link: "/services/audit/stock-audit",
    highlight: null
  },
  {
    title: "Management Audit",
    description: "Comprehensive review of management practices, organizational effectiveness, and strategic alignment to enhance business performance.",
    features: ["Strategic objective evaluation", "Management efficiency review", "Organizational structure analysis", "Performance improvement suggestions"],
    process: ["Objective assessment", "Process evaluation", "Gap analysis", "Recommendations"],
    benefits: ["Strategic alignment", "Efficiency gains", "Better governance", "Informed decisions"],
    link: "/services/audit/management-audit",
    highlight: null
  },
  {
    title: "Co-operative Society Audit",
    description: "Audit of co-operative societies as per the Co-operative Societies Act and state-specific regulations with statutory compliance.",
    features: ["Financial statement audit", "Membership records verification", "Compliance with bye-laws", "Statutory returns assistance"],
    process: ["Member verification", "Financial review", "Bye-law compliance", "Return preparation"],
    benefits: ["Regulatory compliance", "Member confidence", "Transparent operations", "Legal protection"],
    link: "/services/audit/cooperative-society-audit",
    highlight: null
  }
];

const keyHighlights = [
  { icon: Eye, title: "Independent Examination", description: "Unbiased, objective audit opinions", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Shield, title: "Risk-Based Approach", description: "Focus on high-risk areas for better coverage", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: FileSearch, title: "Detailed Reporting", description: "Actionable insights and recommendations", color: "from-amber-500/20 to-amber-600/10" },
  { icon: Scale, title: "Compliance Assurance", description: "Adherence to all applicable standards", color: "from-purple-500/20 to-purple-600/10" }
];

const auditApproach = [
  { step: "01", title: "Planning", desc: "Understanding business, risk assessment, materiality determination", icon: Target, color: "from-blue-500/20 to-blue-600/10" },
  { step: "02", title: "Execution", desc: "Control testing, substantive procedures, evidence gathering", icon: FileSearch, color: "from-purple-500/20 to-purple-600/10" },
  { step: "03", title: "Reporting", desc: "Findings discussion, audit opinion, management letter", icon: FileCheck, color: "from-amber-500/20 to-amber-600/10" },
  { step: "04", title: "Follow-up", desc: "Implementation support, remediation tracking", icon: TrendingUp, color: "from-emerald-500/20 to-emerald-600/10" }
];

const stats = [
  { number: "1,000+", label: "Audits Completed" },
  { number: "100+", label: "Bank Branches Audited" },
  { number: "45+", label: "Years Experience" },
  { number: "RBI", label: "Category-I Firm" }
];

const AuditAssurance = () => {
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
                  <ClipboardCheck className="w-10 h-10 text-navy" />
                </div>
                <div>
                  <span className="text-gold font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Assurance Services
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Audit &<br />
                <span className="text-gold">Assurance</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-3xl mb-8">
                Comprehensive audit services that provide stakeholders with confidence in financial reporting.
                Our rigorous methodologies ensure accuracy, compliance, and actionable insights.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  Book Audit Consultation
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
            <span className="text-navy font-medium">Audit & Assurance</span>
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

      {/* Audit Approach - Enhanced */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Methodology</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Our Audit Approach
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                A systematic, risk-based methodology that ensures thorough examination and valuable insights
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {auditApproach.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100} className="h-full">
                <div className="relative h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl font-display font-bold text-navy">{item.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </div>
                  )}
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
                Our Audit Services
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                Comprehensive audit solutions for all types of organizations
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
                  <div className="bg-gradient-to-r from-navy via-navy/95 to-navy/90 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gold/5" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <ClipboardCheck className="w-6 h-6 text-cream" />
                          </div>
                          <span className="text-cream/80 text-sm font-medium">Audit Type {String(index + 1).padStart(2, '0')}</span>
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

      {/* Stats - Enhanced */}
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
                Our Audit Credentials
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter key={index} number={stat.number} label={stat.label} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* RBI Panel Badge - Enhanced */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    RBI Empaneled
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                    Category-I Audit Firm with RBI
                  </h2>
                  <p className="text-grey mb-6 text-lg">
                    We are proud to be empaneled as a Category-I audit firm with the Reserve Bank of India since 2011,
                    authorized to conduct statutory audits of banks and financial institutions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Authorized for bank statutory audits",
                      "Concurrent audit of major bank branches",
                      "NBFC audit specialists",
                      "RBI compliance expertise"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold" />
                        <span className="text-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                  </div>
                  <div className="relative z-10">
                    <Shield className="w-20 h-20 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-2">RBI Category-I</h3>
                    <p className="text-white/80">Since 2011</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
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
              Need Professional Audit Services?
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
              Partner with our experienced audit team to ensure financial accuracy and compliance.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                Schedule Audit Consultation
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

export default AuditAssurance;
