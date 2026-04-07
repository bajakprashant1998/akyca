import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const popularLinks = [
  { title: "Income Tax Return Filing", description: "ITR filing for individuals, businesses & NRIs", path: "/services/taxation/income-tax-return" },
  { title: "GST Registration", description: "New GST registration & compliance setup", path: "/services/gst/registration" },
  { title: "Company Incorporation", description: "Private limited, OPC & section 8 company", path: "/services/corporate/company-incorporation" },
  { title: "Statutory Audit", description: "Annual statutory audit under Companies Act", path: "/services/audit/statutory-audit" },
  { title: "Tax Planning", description: "Strategic tax saving for individuals & corporates", path: "/services/taxation/tax-planning" },
  { title: "Virtual CFO", description: "On-demand CFO services for growing businesses", path: "/services/financial/virtual-cfo" },
  { title: "GST Return Filing", description: "GSTR-1, GSTR-3B, annual return filing", path: "/services/gst/return-filing" },
  { title: "Startup Registration", description: "DPIIT recognition & startup India benefits", path: "/services/startup/dpiit-registration" },
];

export const PopularServicesGrid = () => {
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
    <section ref={ref} className="py-12 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-navy/5 rounded-full text-navy font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            Most Searched Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-navy mb-3 sm:mb-4">
            Popular CA Services in Ahmedabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            Explore our most sought-after chartered accountant services trusted by businesses across Gujarat and India
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {popularLinks.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <h3 className="font-display font-bold text-foreground text-xs sm:text-base mb-1 sm:mb-2 group-hover:text-gold transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2">{item.description}</p>
              <span className="text-gold font-semibold text-[11px] sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-8 sm:mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors text-sm sm:text-base"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
