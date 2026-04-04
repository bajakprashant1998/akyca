import { useState, useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export const WhyChooseUs = () => {
  const { get, getList } = useSiteContent("home");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const sectionLabel = get("why_choose_us", "label", "The AKYCO Difference");
  const heading = get("why_choose_us", "heading", "Traditional CA vs Modern Approach");
  const subheading = get("why_choose_us", "subheading", "Experience the difference with our client-centric methodology");
  const rightHeading = get("why_choose_us", "right_heading", "What Sets Us Apart");
  const rightDescription = get("why_choose_us", "right_description", "With over four decades of experience, we've evolved our practice to meet the demands of modern businesses while maintaining the highest standards of professional excellence.");

  const compFeatures = getList("why_choose_us", "comp_features", ["Response Time", "Technology", "Accessibility", "Reporting", "Communication", "Pricing"]);
  const compTraditional = getList("why_choose_us", "comp_traditional", ["Days to weeks", "Paper-based records", "Office hours only", "Annual reports", "Formal meetings", "Hidden charges"]);
  const compAkyco = getList("why_choose_us", "comp_akyco", ["Same day response", "Cloud-based systems", "24/7 portal access", "Real-time dashboards", "WhatsApp & video calls", "Transparent pricing"]);

  const comparisons = compFeatures.map((feature, i) => ({
    feature,
    traditional: compTraditional[i] || "",
    akyco: compAkyco[i] || "",
  }));

  const features = getList("why_choose_us", "features", [
    "Dedicated relationship manager", "Multi-branch presence", "Industry specialization",
    "Proactive tax planning", "Compliance reminders", "Digital document management",
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy/3 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">{sectionLabel}</span>
          <h2 className="section-heading mb-4">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-3">
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <div>Feature</div>
              <div className="text-center">Traditional CA</div>
              <div className="text-center text-navy">The AKYCO Way</div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-gold/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="font-semibold text-navy text-sm md:text-base">{row.feature}</div>
                <div className="flex items-center gap-2.5 md:justify-center p-2.5 rounded-lg bg-red-50/50 md:bg-transparent">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground line-through decoration-red-200">{row.traditional}</span>
                </div>
                <div className="flex items-center gap-2.5 md:justify-center p-2.5 rounded-lg bg-green-50/50 md:bg-green-50/30">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-navy">{row.akyco}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`flex flex-col justify-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-5">{rightHeading}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">{rightDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gold/5 transition-colors">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-gold/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
