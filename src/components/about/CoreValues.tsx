import { useState, useEffect, useRef } from "react";
import { CheckCircle, Users, Target, Award, Briefcase, Shield } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaultValues = [
  { icon: Shield, title: "Ethical Practice", description: "We uphold the highest standards of professional ethics and integrity in all our dealings." },
  { icon: Users, title: "Client-First Approach", description: "Our clients' success is our priority. We tailor solutions to meet their unique needs." },
  { icon: Target, title: "Deep Regulatory Knowledge", description: "Stay ahead with our comprehensive understanding of ever-changing tax laws and regulations." },
  { icon: Award, title: "Multi-Partner Expertise", description: "Our team of 9+ partners brings diverse expertise across all domains of CA practice." },
  { icon: Briefcase, title: "Long-term Relationships", description: "We believe in building lasting partnerships, not just transactional relationships." },
  { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous quality controls ensure accuracy and excellence in every service we provide." },
];

const iconPool = [Shield, Users, Target, Award, Briefcase, CheckCircle];

export const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { get } = useSiteContent("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const badge = get("values", "badge", "What Drives Us");
  const heading = get("values", "heading", "Our Core Values");
  const subheading = get("values", "subheading", "These principles guide every interaction and service we provide to our clients.");

  let values = defaultValues;
  try {
    const raw = get("values", "items", "");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        values = parsed.map((v: any, i: number) => ({
          ...v,
          icon: defaultValues[i]?.icon || iconPool[i % iconPool.length],
        }));
      }
    }
  } catch {}

  return (
    <section ref={ref} id="values" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">{badge}</span>
          <h2 className="section-heading mb-4">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
