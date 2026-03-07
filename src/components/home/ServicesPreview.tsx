import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { 
  FileText, Calculator, ClipboardCheck, Building2, TrendingUp, Shield,
  ArrowRight, Rocket, Laptop
} from "lucide-react";

const services = [
  { icon: FileText, title: "Taxation Services", description: "Complete income tax, TDS, and international taxation solutions for individuals and businesses.", link: "/services/taxation", color: "from-blue-500 to-blue-600", badge: "Most Popular" },
  { icon: Calculator, title: "GST Services", description: "GST registration, return filing, audit, advisory, and litigation support.", link: "/services/gst", color: "from-emerald-500 to-emerald-600", badge: "Essential" },
  { icon: ClipboardCheck, title: "Audit & Assurance", description: "Statutory, internal, tax, concurrent, bank, and management audit services.", link: "/services/audit", color: "from-purple-500 to-purple-600" },
  { icon: Building2, title: "Company Services", description: "Company incorporation, LLP formation, ROC compliance, and secretarial services.", link: "/services/corporate", color: "from-amber-500 to-amber-600" },
  { icon: TrendingUp, title: "Financial Advisory", description: "Business structuring, project finance, fund raising, and virtual CFO services.", link: "/services/financial-advisory", color: "from-rose-500 to-rose-600" },
  { icon: Shield, title: "Compliance Services", description: "RBI, FEMA, SEBI, NBFC compliance and regulatory advisory services.", link: "/services/compliance", color: "from-cyan-500 to-cyan-600" },
  { icon: Rocket, title: "Startup Services", description: "DPIIT registration, angel tax, ESOP structuring, and funding support.", link: "/services/startup", color: "from-pink-500 to-pink-600" },
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
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy/3 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`group bg-card rounded-2xl p-6 border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover-lift relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Badge */}
              {"badge" in service && service.badge && (
                <span className="absolute top-4 right-4 bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded-full">
                  {service.badge}
                </span>
              )}
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-md`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-navy-dark transition-all group shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
