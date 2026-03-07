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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy/3 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Knowledge Center</span>
          <h2 className="section-heading mb-4">Tax Tips & Regulatory Updates</h2>
          <p className="section-subheading mx-auto">
            Stay informed with the latest tax laws, compliance requirements, and financial insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <article
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group cursor-pointer hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                  <insight.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gold">{insight.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">{insight.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{insight.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{insight.date}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tax-tools"
            className="inline-flex items-center gap-2 bg-cream text-navy px-8 py-3.5 rounded-xl font-semibold hover:bg-gold transition-all group shadow-md hover:shadow-lg"
          >
            Explore Tax Tools
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
