import { useState, useEffect, useRef } from "react";
import { Users, Briefcase, Monitor, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "9+ Chartered Accountants",
    description: "Our team of qualified CAs brings decades of combined experience across taxation, audit, and financial advisory services.",
    highlights: ["ICAI Certified", "Industry Specialists", "Continuous Training"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "Complete Solutions",
    subtitle: "100+ Service Offerings",
    description: "From startup registration to enterprise compliance, we offer end-to-end chartered accountancy services under one roof.",
    highlights: ["All-in-One CA Firm", "Cross-Domain Expertise", "Seamless Integration"],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Monitor,
    title: "Digital-First",
    subtitle: "Modern Cloud Approach",
    description: "We leverage the latest accounting software and cloud technologies to deliver faster, more accurate, and accessible services.",
    highlights: ["Cloud Accounting", "Real-time Reports", "Secure Data"],
    gradient: "from-purple-500 to-purple-600",
  },
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
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="section-heading mb-4">
            Three Pillars of Our Excellence
          </h2>
          <p className="section-subheading mx-auto">
            Built on expertise, driven by innovation, and committed to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-2xl group hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                <pillar.icon className="w-8 h-8 text-white" />
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

              <ul className="space-y-2.5">
                {pillar.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-center gap-2.5 text-sm text-foreground">
                    <div className="w-5 h-5 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-gold" />
                    </div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
