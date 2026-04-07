import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export const AboutPreview = () => {
  const { get, getList } = useSiteContent("home");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const sectionLabel = get("about_preview", "label", "About Our Firm");
  const heading = get("about_preview", "heading", "A Legacy of Trust & Excellence");
  const para1 = get("about_preview", "para1", "Ashvin K Yagnik & Co. has a vintage of more than 45 years in providing quality and sustainable professional services to clients. We have been consistent as well as up to date in the dynamic taxation and finance world.");
  const para2 = get("about_preview", "para2", "As an RBI Category-I firm, we bring unparalleled expertise in taxation, audit, compliance, and financial advisory services. Our team of 9+ partners ensures comprehensive coverage across all domains of chartered accountancy.");
  const highlights = getList("about_preview", "highlights", [
    "Ethical Practice & Integrity", "Client-First Approach", "Deep Regulatory Knowledge",
    "Multi-Partner Expertise", "Long-term Client Relationships", "Pan-India Service Capability",
  ]);
  const ctaText = get("about_preview", "cta_text", "Learn More About Us");
  const yearFounded = get("about_preview", "year_founded", "1978");
  const founderText = get("about_preview", "founder_text", "Ashvin K Yagnik");
  const partnersCount = get("about_preview", "partners_count", "9+");
  const rbiYear = get("about_preview", "rbi_year", "2011");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 sm:py-16 md:py-20 bg-cream/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">{sectionLabel}</span>
            <h2 className="section-heading mb-5">{heading}</h2>
            <p className="text-grey leading-relaxed mb-5 text-sm md:text-base">{para1}</p>
            <p className="text-grey leading-relaxed mb-6 text-sm md:text-base">{para2}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-navy/5 transition-colors">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-navy" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 cta-primary group">
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-navy rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cream rounded-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-cream rounded-full group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-3">{yearFounded}</div>
                <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8">
                  Year of establishment by founder <br />
                  <span className="text-cream font-semibold">{founderText}</span>
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl">
                    <div className="text-2xl md:text-3xl font-display font-bold text-cream mb-1">{partnersCount}</div>
                    <div className="text-white/60 text-xs md:text-sm">Expert Partners</div>
                  </div>
                  <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl">
                    <div className="text-2xl md:text-3xl font-display font-bold text-cream mb-1">{rbiYear}</div>
                    <div className="text-white/60 text-xs md:text-sm">RBI Category-I Status</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-4 md:p-6 hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cream to-gold rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-navy" />
                </div>
                <div>
                  <div className="font-bold text-navy text-sm md:text-base">Trusted by</div>
                  <div className="text-grey text-xs md:text-sm">{get("about_preview", "trusted_count", "1000+ Clients")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
