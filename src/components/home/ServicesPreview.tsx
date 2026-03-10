import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { 
  FileText, Calculator, ClipboardCheck, Building2, TrendingUp, Shield,
  ArrowRight, Rocket, Laptop, Sparkles
} from "lucide-react";

const services = [
  { icon: FileText, title: "Taxation Services", description: "Complete income tax, TDS, and international taxation solutions for individuals and businesses.", link: "/services/taxation", color: "from-blue-500 to-blue-600", badge: "Most Popular" },
  { icon: Calculator, title: "GST Services", description: "GST registration, return filing, audit, advisory, and litigation support.", link: "/services/gst", color: "from-emerald-500 to-emerald-600", badge: "Essential" },
  { icon: ClipboardCheck, title: "Audit & Assurance", description: "Statutory, internal, tax, concurrent, bank, and management audit services.", link: "/services/audit", color: "from-purple-500 to-purple-600" },
  { icon: Building2, title: "Company Services", description: "Company incorporation, LLP formation, ROC compliance, and secretarial services.", link: "/services/corporate", color: "from-amber-500 to-amber-600" },
  { icon: TrendingUp, title: "Financial Advisory", description: "Business structuring, project finance, fund raising, and virtual CFO services.", link: "/services/financial-advisory", color: "from-rose-500 to-rose-600" },
  { icon: Shield, title: "Compliance Services", description: "RBI, FEMA, SEBI, NBFC compliance and regulatory advisory services.", link: "/services/compliance", color: "from-cyan-500 to-cyan-600" },
  { icon: Rocket, title: "Startup Services", description: "DPIIT registration, angel tax, ESOP structuring, and funding support.", link: "/services/startup", color: "from-pink-500 to-pink-600", badge: "Trending" },
  { icon: Laptop, title: "Digital Accounting", description: "Cloud accounting, MIS dashboards, ERP advisory, and finance automation.", link: "/services/digital-accounting", color: "from-indigo-500 to-indigo-600" },
];

export const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-navy font-semibold text-sm tracking-wider uppercase mb-5">
            <Sparkles className="w-4 h-4 text-gold" />
            What We Offer
          </span>
          <h2 className="section-heading mb-4">
            Move From Compliance to
            <span className="text-gold block">Strategic Financial Growth</span>
          </h2>
          <p className="section-subheading mx-auto">
            Traditional accounting focuses on reports. Our approach focuses on
            <strong className="text-foreground"> business impact and tax savings</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`group relative bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border border-border hover:border-gold/40 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              {"badge" in service && service.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  service.badge === "Most Popular" ? "bg-gold/15 text-gold" :
                  service.badge === "Trending" ? "bg-pink-500/15 text-pink-600" :
                  "bg-emerald-500/15 text-emerald-600"
                }`}>
                  {service.badge}
                </span>
              )}
              
              <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-lg opacity-0 group-hover:opacity-30 transition-opacity`} />
              </div>

              <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-1.5 md:mb-2 group-hover:text-navy transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-5">
                {service.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>

              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </Link>
          ))}
        </div>

        <div className={`text-center mt-10 md:mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-navy to-navy-dark text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-all group shadow-lg hover:-translate-y-0.5"
          >
            View All 100+ Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            Comprehensive CA services for every business need
          </p>
        </div>
      </div>
    </section>
  );
};
