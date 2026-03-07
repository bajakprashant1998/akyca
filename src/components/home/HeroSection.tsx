import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Award, ArrowRight, Play, FileText, Calculator, ClipboardCheck, Building2, Phone, MessageCircle, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const [businessType, setBusinessType] = useState("");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate flywheel segments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetConsultation = () => {
    navigate("/contact", { state: { businessType } });
  };

  const segments = [
    { label: "Taxation", color: "from-blue-500 to-blue-600", icon: FileText, desc: "Save up to 30% on taxes" },
    { label: "GST", color: "from-emerald-500 to-emerald-600", icon: Calculator, desc: "100% compliant filing" },
    { label: "Audit", color: "from-purple-500 to-purple-600", icon: ClipboardCheck, desc: "RBI Category-I firm" },
    { label: "Advisory", color: "from-amber-500 to-amber-600", icon: Building2, desc: "Strategic growth plans" },
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-slate-50 via-white to-cream/30 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-gold/5 to-cream/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-navy/5 to-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/5 text-navy text-xs font-medium rounded-full border border-navy/10 hover-lift cursor-default">
                <Shield className="w-3.5 h-3.5" />
                RBI Category-I Firm
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-navy text-xs font-medium rounded-full border border-gold/20 hover-lift cursor-default">
                <Award className="w-3.5 h-3.5" />
                45+ Years of Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-navy leading-[1.08] mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Your Financial Growth
              <span className="block text-gold relative">
                Partner in India
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/20" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 60 2 100 5C140 8 170 4 198 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className={`text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              For businesses who need <strong className="text-foreground">tax savings</strong>, not just compliance.
              Our expert framework connects CA expertise, technology, and strategy to
              drive measurable financial growth.
            </p>

            {/* Input CTA */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter your business type (e.g., IT Startup)"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy shadow-sm"
                />
                <button
                  onClick={handleGetConsultation}
                  className="px-6 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-all whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" /> View All Services
                </Link>
                <a href="tel:+919825046598" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors group">
                  <Phone className="w-3.5 h-3.5 text-gold" /> +91 98250 46598
                </a>
                <a href="https://wa.me/919825046598" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
                </a>
              </div>

              {/* Social Proof Bar */}
              <div className="flex items-center gap-4 p-3 bg-navy/5 rounded-xl border border-navy/5">
                <div className="flex -space-x-2">
                  {["R", "P", "A", "S"].map((letter, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-navy">1000+ businesses</span>
                  <span className="text-muted-foreground"> trust us with their finances</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Service Flywheel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className={`relative w-[420px] h-[420px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-navy/10 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-navy/5"></div>

              {/* Animated segments */}
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
                    className={`absolute flex flex-col items-center transition-all duration-500 cursor-pointer ${isActive ? 'scale-115' : 'hover:scale-110'}`}
                    style={{
                      left: `calc(50% + ${x}px - 44px)`,
                      top: `calc(50% + ${y}px - 44px)`,
                    }}
                    onMouseEnter={() => setActiveSegment(index)}
                  >
                    <div className={`w-[88px] h-[88px] rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'shadow-2xl ring-4 ring-white/50' : ''}`}>
                      <segment.icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="mt-2 text-sm font-semibold text-navy">{segment.label}</span>
                    <span className={`text-[10px] text-muted-foreground max-w-[100px] text-center transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                      {segment.desc}
                    </span>
                  </div>
                );
              })}

              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white shadow-2xl border border-border flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/0 to-navy/5 group-hover:to-navy/10 transition-colors" />
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1 relative z-10">AKYCO</span>
                  <span className="text-lg font-display font-bold text-navy relative z-10">Growth Engine</span>
                  <span className="text-sm text-gold font-semibold mt-1 relative z-10">15% Tax Savings</span>
                  <button className="mt-3 w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-navy-dark transition-all hover:scale-110 relative z-10 shadow-lg">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Connecting dots with pulse */}
              {[0, 90, 180, 270].map((angle, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 100}px - 5px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 100}px - 5px)`,
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                  <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full bg-gold/40 ${activeSegment === i ? 'animate-ping' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "15%", label: "Higher Tax Savings", sublabel: "For connected clients" },
              { number: "1000+", label: "Clients Served", sublabel: "Across industries" },
              { number: "#1", label: "Rated CA Firm", sublabel: "In Gujarat region" },
              { number: "45+", label: "Years of Results", sublabel: "Driving measurable ROI" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left group cursor-default">
                <div className="text-xl md:text-2xl font-display font-bold text-navy uppercase tracking-wide group-hover:text-gold transition-colors">
                  {stat.number} {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
