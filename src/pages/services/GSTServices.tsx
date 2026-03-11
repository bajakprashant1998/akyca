import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Calculator, Shield, Clock, AlertCircle, Percent, FileCheck, Calendar, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const gstCalendar = (
  <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-10 md:mb-12">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Compliance Calendar</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3">GST Filing Deadlines</h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { return: "GSTR-1", due: "11th monthly", desc: "Outward supplies", icon: FileCheck, color: "from-blue-500/20 to-blue-600/10" },
          { return: "GSTR-3B", due: "20th monthly", desc: "Summary return", icon: Calculator, color: "from-purple-500/20 to-purple-600/10" },
          { return: "GSTR-9", due: "31st Dec", desc: "Annual return", icon: Calendar, color: "from-amber-500/20 to-amber-600/10" },
          { return: "GSTR-9C", due: "31st Dec", desc: "Reconciliation", icon: Target, color: "from-emerald-500/20 to-emerald-600/10" }
        ].map((item, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
              <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 bg-gradient-to-br group-hover:scale-110 transition-transform", item.color)}>
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <p className="text-gold font-bold text-lg md:text-xl mb-1">{item.return}</p>
              <p className="font-display font-bold text-primary text-sm md:text-base mb-0.5">{item.due}</p>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: Calculator,
  badge: "Indirect Tax",
  titleLine1: "GST",
  titleLine2: "Services",
  description: "End-to-end Goods and Services Tax solutions from registration to litigation. Our team ensures your business stays compliant while optimizing your GST position.",
  ctaLabel: "Book GST Consultation",
  highlights: [
    { icon: Shield, title: "100% Compliance Rate", description: "Never missed a GST filing deadline", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Percent, title: "ITC Optimization", description: "Maximize your input tax credit claims", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Clock, title: "Timely Filing", description: "Automated reminders and on-time submissions", color: "from-amber-500/20 to-amber-600/10" },
    { icon: AlertCircle, title: "Notice Handling", description: "Expert representation before authorities", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "GST Registration", description: "Complete assistance with GST registration including application preparation, documentation, and GSTIN.", features: ["New registration application", "Amendment in registration", "Cancellation processing", "Migration support"], link: "/services/gst/registration" },
    { title: "GST Return Filing", description: "Accurate and timely filing of all GST returns including GSTR-1, GSTR-3B, annual returns, and reconciliation.", features: ["Monthly/Quarterly GSTR-1 & 3B", "Annual return GSTR-9", "GSTR-9C reconciliation", "ITC reconciliation"], link: "/services/gst/return-filing", highlight: "Most Popular" },
    { title: "GST Audit", description: "Comprehensive GST audit services including reconciliation and certification for businesses exceeding threshold.", features: ["GSTR-9C preparation", "ITC verification audit", "Compliance gap analysis", "Audit report certification"], link: "/services/gst/audit" },
    { title: "GST Advisory & Compliance", description: "Strategic GST advisory covering tax planning, rate classification, and compliance optimization.", features: ["Rate classification advice", "Place of supply determination", "Input tax credit optimization", "Reverse charge compliance"], link: "/services/gst/advisory" },
    { title: "Litigation & Notice Handling", description: "Expert representation and handling of GST notices, assessments, and litigation matters.", features: ["Notice response drafting", "Assessment proceedings", "Appeal preparation", "Advance ruling applications"], link: "/services/gst/litigation", highlight: "Specialized" }
  ],
  stats: [
    { number: "5000+", label: "Returns Filed Annually" },
    { number: "₹100Cr+", label: "ITC Recovered" },
    { number: "500+", label: "Active GST Clients" },
    { number: "100%", label: "On-time Filing" }
  ],
  seo: {
    title: "GST Services – Registration, Filing, Audit & Advisory",
    description: "Complete GST services: Registration, Return Filing, GST Audit, Advisory & Litigation. 5000+ returns filed. Trusted GST consultants in Ahmedabad.",
    keywords: "GST registration, GST return filing, GST audit, GST advisory, GST consultant Ahmedabad",
    canonicalUrl: "/services/gst"
  },
  extraSections: gstCalendar
};

const GSTServices = () => <ServiceCategoryTemplate data={data} />;
export default GSTServices;
