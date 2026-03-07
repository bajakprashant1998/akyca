import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Ethical Practice & Integrity",
  "Client-First Approach",
  "Deep Regulatory Knowledge",
  "Multi-Partner Expertise",
  "Long-term Client Relationships",
  "Pan-India Service Capability",
];

export const AboutPreview = () => {
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
    <section ref={ref} className="py-20 bg-cream/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">About Our Firm</span>
            <h2 className="section-heading mb-6">A Legacy of Trust & Excellence</h2>
            <p className="text-grey leading-relaxed mb-6">
              Ashvin K Yagnik & Co. has a vintage of more than 45 years in providing
              quality and sustainable professional services to clients. We have been
              consistent as well as up to date in the dynamic taxation and finance world.
            </p>
            <p className="text-grey leading-relaxed mb-8">
              As an RBI Category-I firm, we bring unparalleled expertise in taxation,
              audit, compliance, and financial advisory services. Our team of 9+ partners
              ensures comprehensive coverage across all domains of chartered accountancy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-navy/5 transition-colors">
                  <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 cta-primary group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cream rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-cream rounded-full group-hover:scale-110 transition-transform duration-700"></div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-display font-bold text-cream mb-4">1978</div>
                <p className="text-white/80 text-lg mb-8">
                  Year of establishment by founder <br />
                  <span className="text-cream font-semibold">Ashvin K Yagnik</span>
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-display font-bold text-cream mb-1">9+</div>
                    <div className="text-white/60 text-sm">Expert Partners</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <div className="text-3xl font-display font-bold text-cream mb-1">2011</div>
                    <div className="text-white/60 text-sm">RBI Category-I Status</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden md:block hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cream to-gold rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <div className="font-bold text-navy">Trusted by</div>
                  <div className="text-grey text-sm">1000+ Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
