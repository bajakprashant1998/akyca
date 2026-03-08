import { useState, useEffect, useRef } from "react";
import { Users, Briefcase, Monitor, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "9+ Chartered Accountants",
    description: "Our team of qualified CAs brings decades of combined experience across taxation, audit, and financial advisory services.",
    highlights: ["ICAI Certified", "Industry Specialists", "Continuous Training"],
    gradient: "from-blue-500 to-blue-600",
    stat: { value: "45+", label: "Years Combined Exp." },
  },
  {
    icon: Briefcase,
    title: "Complete Solutions",
    subtitle: "100+ Service Offerings",
    description: "From startup registration to enterprise compliance, we offer end-to-end chartered accountancy services under one roof.",
    highlights: ["All-in-One CA Firm", "Cross-Domain Expertise", "Seamless Integration"],
    gradient: "from-emerald-500 to-emerald-600",
    stat: { value: "100+", label: "Services Available" },
  },
  {
    icon: Monitor,
    title: "Digital-First",
    subtitle: "Modern Cloud Approach",
    description: "We leverage the latest accounting software and cloud technologies to deliver faster, more accurate, and accessible services.",
    highlights: ["Cloud Accounting", "Real-time Reports", "Secure Data"],
    gradient: "from-purple-500 to-purple-600",
    stat: { value: "24/7", label: "Access to Reports" },
  },
];

const additionalFeatures = [
  { icon: TrendingUp, label: "15% Avg Tax Savings" },
  { icon: Shield, label: "100% Compliance Rate" },
  { icon: Zap, label: "48hr Response Time" },
];

export const ValuePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={ref} className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold font-semibold text-sm tracking-wider uppercase mb-6">
            <Zap className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="section-heading mb-4">
            Three Pillars of Our Excellence
          </h2>
          <p className="section-subheading mx-auto">
            Built on expertise, driven by innovation, and committed to your success
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 border border-border hover:border-gold/30 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              {/* Stat badge */}
              <div className="absolute -top-3 right-6 px-4 py-1.5 bg-navy text-white text-xs font-bold rounded-full shadow-lg">
                {pillar.stat.value} {pillar.stat.label}
              </div>

              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg relative`}>
                <pillar.icon className="w-8 h-8 text-white" />
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-gold font-semibold text-sm mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {pillar.description}
              </p>

              <ul className="space-y-3">
                {pillar.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-center gap-3 text-sm text-foreground group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${hIndex * 50}ms` }}>
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom line accent */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Additional Features Bar */}
        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-gold" />
              </div>
              <span className="font-semibold text-navy text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
