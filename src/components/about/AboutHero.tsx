import { useState, useEffect, useRef } from "react";
import { Award, MapPin, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Years of Excellence", value: "45+" },
  { icon: Users, label: "Expert Partners", value: "9+" },
  { icon: Award, label: "RBI Category-I", value: "Since 2011" },
  { icon: MapPin, label: "Branch Offices", value: "2" },
];

export const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={ref} className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full font-medium text-sm tracking-wider uppercase mb-6">
              About Our Firm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Building Trust Through{" "}
              <span className="text-cream">Excellence</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl">
              For over 45 years, Ashvin K Yagnik & Co. has been at the forefront of
              chartered accountancy services in India, helping businesses navigate
              the complex world of taxation and finance.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-cream mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
