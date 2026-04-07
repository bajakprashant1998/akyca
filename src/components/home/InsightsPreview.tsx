import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, FileText, AlertCircle, Lightbulb } from "lucide-react";

const insights = [
  { icon: AlertCircle, category: "Tax Update", title: "New TDS Rules for FY 2025-26", description: "Key changes in TDS rates and compliance requirements effective from April 2025.", date: "Feb 2025", color: "from-red-500 to-red-600" },
  { icon: FileText, category: "GST", title: "GST Return Filing Deadlines", description: "Complete calendar of GSTR-1, GSTR-3B, and annual return due dates.", date: "Jan 2025", color: "from-emerald-500 to-emerald-600" },
  { icon: Lightbulb, category: "Tax Planning", title: "Section 80C: Maximize Savings", description: "Smart investment strategies to optimize your tax savings under Section 80C.", date: "Jan 2025", color: "from-amber-500 to-amber-600" },
  { icon: Calendar, category: "Compliance", title: "Q4 Compliance Checklist", description: "Essential compliance tasks for businesses before financial year-end.", date: "Jan 2025", color: "from-blue-500 to-blue-600" },
];

export const InsightsPreview = () => {
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
    <section ref={ref} className="py-10 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy/3 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">Knowledge Center</span>
          <h2 className="section-heading mb-3 sm:mb-4">Tax Tips & Regulatory Updates</h2>
          <p className="section-subheading mx-auto">
            Stay informed with the latest tax laws, compliance requirements, and financial insights
          </p>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2 sm:pb-0">
            {insights.map((insight, index) => (
              <article
                key={index}
                className={`bg-card rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500 group cursor-pointer min-w-[240px] sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                    <insight.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[11px] sm:text-sm font-semibold text-gold">{insight.category}</span>
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-navy transition-colors leading-snug">{insight.title}</h3>
                <p className="text-[11px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{insight.date}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            to="/tax-tools"
            className="inline-flex items-center gap-2 bg-cream text-navy px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-semibold hover:bg-gold transition-all group shadow-md hover:shadow-lg text-xs sm:text-base"
          >
            Explore Tax Tools
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
