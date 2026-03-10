import { useState, useEffect, useRef } from "react";
import { Users, Briefcase, Monitor, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "9+ Chartered Accountants",
    description: "Qualified CAs with decades of combined experience across taxation, audit, and financial advisory.",
    highlights: ["ICAI Certified", "Industry Specialists", "Continuous Training"],
    gradient: "from-blue-500 to-blue-600",
    stat: { value: "45+", label: "Years Exp." },
    link: "/about",
  },
  {
    icon: Briefcase,
    title: "Complete Solutions",
    subtitle: "100+ Service Offerings",
    description: "From startup registration to enterprise compliance — end-to-end CA services under one roof.",
    highlights: ["All-in-One CA Firm", "Cross-Domain Expertise", "Seamless Integration"],
    gradient: "from-emerald-500 to-emerald-600",
    stat: { value: "100+", label: "Services" },
    link: "/services",
  },
  {
    icon: Monitor,
    title: "Digital-First",
    subtitle: "Modern Cloud Approach",
    description: "Latest accounting software and cloud tech for faster, more accurate, and accessible services.",
    highlights: ["Cloud Accounting", "Real-time Reports", "Secure Data"],
    gradient: "from-purple-500 to-purple-600",
    stat: { value: "24/7", label: "Access" },
    link: "/services/digital-accounting",
  },
];

const additionalFeatures = [
  { icon: TrendingUp, label: "15% Avg Tax Savings" },
  { icon: Shield, label: "100% Compliance Rate" },
  { icon: Zap, label: "48hr Response Time" },
];

export const ValuePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold font-semibold text-sm tracking-wider uppercase mb-5">
            <Zap className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="section-heading mb-4">Three Pillars of Our Excellence</h2>
          <p className="section-subheading mx-auto">
            Built on expertise, driven by innovation, and committed to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {pillars.map((pillar, index) => (
            <Link
              to={pillar.link}
              key={index}
              className={`relative bg-card rounded-3xl p-6 md:p-8 border border-border hover:border-gold/30 transition-all duration-500 group block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className="absolute -top-3 right-6 px-3 py-1 bg-navy text-white text-xs font-bold rounded-full shadow-lg">
                {pillar.stat.value} {pillar.stat.label}
              </div>

              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg relative`}>
                <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-gold font-semibold text-sm mb-3">{pillar.subtitle}</p>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm md:text-base">{pillar.description}</p>

              <ul className="space-y-2.5">
                {pillar.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-center gap-3 text-sm text-foreground group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${hIndex * 50}ms` }}>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-gold" />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Link>
          ))}
        </div>

        <div className={`flex flex-wrap justify-center gap-3 md:gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3 bg-white rounded-full border border-border shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gold/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
              </div>
              <span className="font-semibold text-navy text-xs md:text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
