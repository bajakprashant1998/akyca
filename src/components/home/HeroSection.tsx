import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Award, ArrowRight, FileText, Calculator, ClipboardCheck, Building2, Phone, MessageCircle, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

const segments = [
  { label: "Taxation", color: "from-blue-500 to-blue-600", icon: FileText, desc: "Save up to 30% on taxes" },
  { label: "GST", color: "from-emerald-500 to-emerald-600", icon: Calculator, desc: "100% compliant filing" },
  { label: "Audit", color: "from-purple-500 to-purple-600", icon: ClipboardCheck, desc: "RBI Category-I firm" },
  { label: "Advisory", color: "from-amber-500 to-amber-600", icon: Building2, desc: "Strategic growth plans" },
];

const quickBenefits = [
  "Free 30-min consultation",
  "Same-day response",
  "No hidden charges",
];

const stats = [
  { number: "15%", label: "Higher Tax Savings", sublabel: "For connected clients" },
  { number: "1000+", label: "Clients Served", sublabel: "Across industries" },
  { number: "#1", label: "Rated CA Firm", sublabel: "In Gujarat region" },
  { number: "45+", label: "Years of Results", sublabel: "Driving measurable ROI" },
];

export const HeroSection = () => {
  const [businessType, setBusinessType] = useState("");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetConsultation = () => {
    navigate("/contact", { state: { businessType } });
  };

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-slate-50 via-white to-cream/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-gold/8 to-cream/15 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-navy/8 to-blue-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-2 mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-navy/5 to-navy/10 text-navy text-xs font-medium rounded-full border border-navy/10 backdrop-blur-sm">
                <Shield className="w-3.5 h-3.5" />
                RBI Category-I Firm
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gold/10 to-gold/20 text-navy text-xs font-medium rounded-full border border-gold/20">
                <Award className="w-3.5 h-3.5 text-gold" />
                45+ Years of Excellence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                1000+ Happy Clients
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-navy leading-[1.1] mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Your Financial Growth
              <span className="block text-gold relative mt-1">
                Partner in India
                <svg className="absolute -bottom-2 left-0 w-48 md:w-64 h-3 text-gold/30" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 60 2 100 5C140 8 170 4 198 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className={`text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              For businesses who need <strong className="text-foreground">tax savings</strong>, not just compliance.
              Our expert framework connects CA expertise, technology, and strategy to
              drive measurable financial growth.
            </p>

            {/* Input CTA */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Your business type (e.g., IT Startup)"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGetConsultation()}
                    className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy shadow-sm transition-all text-sm md:text-base"
                  />
                </div>
                <button
                  onClick={handleGetConsultation}
                  className="px-5 md:px-6 py-3.5 md:py-4 bg-gradient-to-r from-navy to-navy-dark text-white font-semibold rounded-xl hover:shadow-xl transition-all whitespace-nowrap shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md group text-sm md:text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Quick Benefits */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-5">
                {quickBenefits.map((benefit, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 md:w-4 h-3.5 md:h-4 text-emerald-500 flex-shrink-0" />
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-5">
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors group font-medium">
                  <ChevronRight className="w-4 h-4 text-gold" /> View All Services
                </Link>
                <a href="tel:+919825046598" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors group font-medium">
                  <Phone className="w-4 h-4 text-gold" /> +91 98250 46598
                </a>
                <a href="https://wa.me/919825046598" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 transition-colors font-medium">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              {/* Social Proof Bar */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-navy/5 to-transparent rounded-2xl border border-navy/5">
                <div className="flex -space-x-2.5">
                  {["R", "P", "A", "S", "M"].map((letter, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-navy to-navy-dark text-white flex items-center justify-center text-[10px] md:text-xs font-bold border-2 border-white shadow-md">
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-bold text-navy">1000+ businesses</span>
                  <span className="text-muted-foreground"> trust us with their finances</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Desktop Flywheel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className={`relative w-[420px] h-[420px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-navy/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-navy/5 bg-gradient-to-br from-white/50 to-transparent" />

              {segments.map((segment, index) => {
                const angle = (index * 90) - 45;
                const radian = (angle * Math.PI) / 180;
                const radius = 165;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                const isActive = activeSegment === index;

                return (
                  <div
                    key={segment.label}
                    className={`absolute flex flex-col items-center transition-all duration-500 cursor-pointer ${isActive ? 'scale-110 z-10' : 'hover:scale-105'}`}
                    style={{
                      left: `calc(50% + ${x}px - 44px)`,
                      top: `calc(50% + ${y}px - 44px)`,
                    }}
                    onMouseEnter={() => setActiveSegment(index)}
                  >
                    <div className={`w-[88px] h-[88px] rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-xl transition-all duration-300 ${isActive ? 'shadow-2xl ring-4 ring-white/60' : ''}`}>
                      <segment.icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="mt-2 text-sm font-bold text-navy">{segment.label}</span>
                    <span className={`text-[11px] text-muted-foreground max-w-[110px] text-center transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      {segment.desc}
                    </span>
                  </div>
                );
              })}

              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white shadow-2xl border border-border flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/0 via-transparent to-gold/10" />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.25em] mb-1 relative z-10">AKYCO</span>
                  <span className="text-xl font-display font-bold text-navy relative z-10">Growth Engine</span>
                  <span className="text-sm text-gold font-bold mt-1 relative z-10">15% Tax Savings</span>
                </div>
              </div>

              {/* Connecting dots */}
              {[0, 90, 180, 270].map((angle, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 100}px - 5px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 100}px - 5px)`,
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-sm" />
                  <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full bg-gold/40 ${activeSegment === i ? 'animate-ping' : ''}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Service Cards (replaces hidden flywheel) */}
          <div className="lg:hidden">
            <div className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {segments.map((segment, index) => {
                const isActive = activeSegment === index;
                return (
                  <button
                    key={segment.label}
                    onClick={() => setActiveSegment(index)}
                    className={`relative flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                      isActive
                        ? 'border-gold/40 bg-white shadow-lg scale-[1.02]'
                        : 'border-border bg-card hover:border-gold/20'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <segment.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-navy">{segment.label}</div>
                      <div className="text-[11px] text-muted-foreground leading-tight truncate">{segment.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Bar - now in flow, not absolute */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center md:text-left group cursor-default transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                <div className="text-lg md:text-xl lg:text-2xl font-display font-bold text-navy uppercase tracking-wide group-hover:text-gold transition-colors">
                  {stat.number} {stat.label}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
