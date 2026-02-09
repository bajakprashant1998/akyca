import { Layout } from "@/components/layout/Layout";
import { Calculator, CheckCircle, ChevronRight, ArrowRight, Shield, Clock, TrendingUp, FileCheck, Target, Award, BadgeCheck, AlertCircle, Calendar, Percent, Sparkles, Phone, MessageCircle } from "lucide-react";
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
    title: "GST Registration",
    description: "Complete assistance with GST registration process including application preparation, documentation, and obtaining GSTIN for new businesses.",
    features: ["New registration application", "Amendment in registration", "Cancellation processing", "Migration support"],
    process: ["Document collection", "Application preparation", "ARN generation", "GSTIN issuance"],
    benefits: ["Quick registration", "Error-free application", "Expert guidance", "Post-registration support"],
    link: "/services/gst/registration",
    highlight: null
  },
  {
    title: "GST Return Filing",
    description: "Accurate and timely filing of all GST returns including GSTR-1, GSTR-3B, annual returns, and reconciliation with books of accounts.",
    features: ["Monthly/Quarterly GSTR-1 & 3B", "Annual return GSTR-9", "GSTR-9C reconciliation", "ITC reconciliation"],
    process: ["Data collection & verification", "Invoice matching", "Return preparation", "Filing & reconciliation"],
    benefits: ["Zero late fees", "Maximum ITC claim", "Error-free returns", "Compliance tracking"],
    link: "/services/gst/return-filing",
    highlight: "Most Popular"
  },
  {
    title: "GST Audit",
    description: "Comprehensive GST audit services for businesses exceeding the threshold limit, including reconciliation and certification.",
    features: ["GSTR-9C preparation", "ITC verification audit", "Compliance gap analysis", "Audit report certification"],
    process: ["Books examination", "Return reconciliation", "Discrepancy resolution", "Certification"],
    benefits: ["Compliant certification", "Gap identification", "Risk mitigation", "Expert sign-off"],
    link: "/services/gst/audit",
    highlight: null
  },
  {
    title: "GST Advisory & Compliance",
    description: "Strategic GST advisory services covering tax planning, rate classification, and compliance optimization for business operations.",
    features: ["Rate classification advice", "Place of supply determination", "Input tax credit optimization", "Reverse charge compliance"],
    process: ["Business analysis", "Compliance review", "Strategy formulation", "Implementation"],
    benefits: ["Optimized GST position", "Reduced litigation risk", "Clear compliance", "Cost savings"],
    link: "/services/gst/advisory",
    highlight: null
  },
  {
    title: "Litigation & Notice Handling",
    description: "Expert representation and handling of GST notices, assessments, and litigation matters before GST authorities.",
    features: ["Notice response drafting", "Assessment proceedings", "Appeal preparation", "Advance ruling applications"],
    process: ["Notice analysis", "Strategy development", "Response preparation", "Representation"],
    benefits: ["Expert handling", "Timely responses", "Reduced liability", "Professional representation"],
    link: "/services/gst/litigation",
    highlight: "Specialized"
  }
];

const keyHighlights = [
  { icon: Shield, title: "100% Compliance Rate", description: "Never missed a GST filing deadline", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Percent, title: "ITC Optimization", description: "Maximize your input tax credit claims", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Clock, title: "Timely Filing", description: "Automated reminders and on-time submissions", color: "from-amber-500/20 to-amber-600/10" },
  { icon: AlertCircle, title: "Notice Handling", description: "Expert representation before authorities", color: "from-purple-500/20 to-purple-600/10" }
];

const gstCalendar = [
  { return: "GSTR-1", due: "11th of next month", desc: "Outward supplies details", frequency: "Monthly", color: "from-blue-500/20 to-blue-600/10", icon: FileCheck },
  { return: "GSTR-3B", due: "20th of next month", desc: "Summary return with payment", frequency: "Monthly", color: "from-purple-500/20 to-purple-600/10", icon: Calculator },
  { return: "GSTR-9", due: "31st December", desc: "Annual return", frequency: "Yearly", color: "from-amber-500/20 to-amber-600/10", icon: Calendar },
  { return: "GSTR-9C", due: "31st December", desc: "Reconciliation statement", frequency: "Yearly", color: "from-emerald-500/20 to-emerald-600/10", icon: Target }
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
                  <Calculator className="w-10 h-10 text-navy" />
                </div>
                <div>
                  <span className="text-gold font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Indirect Tax
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                GST<br />
                <span className="text-gold">Services</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-3xl mb-8">
                End-to-end Goods and Services Tax solutions from registration to litigation.
                Our team ensures your business stays compliant while optimizing your GST position.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  Book GST Consultation
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
            <span className="text-navy font-medium">GST Services</span>
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
                Comprehensive GST Solutions
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                From registration to litigation, we handle all your GST needs
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

      {/* GST Compliance Calendar - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Stay Compliant</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                GST Compliance Calendar
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                Stay on top of your GST obligations with our comprehensive compliance management
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {gstCalendar.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br group-hover:scale-110 transition-transform",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8 text-navy" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{item.frequency}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">{item.return}</h3>
                  <p className="text-gold font-bold text-lg mb-2">Due: {item.due}</p>
                  <p className="text-grey text-sm">{item.desc}</p>
                </div>
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
                Why Choose AKYCO for GST Services?
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

      {/* Common GST Issues - Enhanced */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Expert Solutions</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                Common GST Challenges We Solve
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { issue: "ITC Mismatch", solution: "Complete reconciliation with GSTR-2A/2B", icon: AlertCircle, color: "from-red-500/20 to-red-600/10" },
              { issue: "Notice from Department", solution: "Expert response drafting & representation", icon: FileCheck, color: "from-amber-500/20 to-amber-600/10" },
              { issue: "E-Way Bill Compliance", solution: "Streamlined process & documentation", icon: Shield, color: "from-emerald-500/20 to-emerald-600/10" }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br group-hover:scale-110 transition-transform",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">{item.issue}</h3>
                  <p className="text-grey">{item.solution}</p>
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
              Need GST Compliance Support?
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
              Let our experts handle your GST compliance while you focus on growing your business.
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

export default GSTServices;
