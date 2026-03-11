import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Laptop, Cloud, Zap, BarChart3, Database } from "lucide-react";
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

const technologies = ["Tally Prime", "Zoho Books", "QuickBooks", "SAP B1", "Microsoft Dynamics", "Odoo"];

const techGrid = (
  <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/20 to-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-8 md:mb-10">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Our Stack</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">Technology We Work With</h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
        {technologies.map((tech, i) => (
          <AnimatedSection key={i} delay={i * 60}>
            <div className="bg-card rounded-xl p-3 md:p-4 text-center border border-border hover:shadow-lg hover:border-gold/30 transition-all hover:-translate-y-1">
              <p className="font-medium text-primary text-sm">{tech}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: Laptop,
  badge: "Technology Solutions",
  titleLine1: "Digital &",
  titleLine2: "Modern Accounting",
  description: "Leverage technology to transform your finance function with cloud accounting, automation, and real-time dashboards.",
  ctaLabel: "Get Tech Assessment",
  highlights: [
    { icon: Cloud, title: "Cloud First", description: "Access anywhere, anytime", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Zap, title: "70% Time Saved", description: "Through smart automation", color: "from-amber-500/20 to-amber-600/10" },
    { icon: BarChart3, title: "Real-time Insights", description: "Live dashboards & KPIs", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Database, title: "99% Accuracy", description: "Automated error elimination", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Cloud Accounting", description: "Setup and management of cloud-based accounting solutions like Tally, Zoho, QuickBooks.", features: ["Tally Prime setup", "Zoho Books implementation", "QuickBooks configuration", "Multi-location access"], link: "/services/digital/cloud-accounting" },
    { title: "Finance Automation", description: "Streamline financial processes through automation for efficiency and accuracy.", features: ["Invoice automation", "Expense digitization", "Bank reconciliation", "Payment processing"], link: "/services/digital/finance-automation", highlight: "Popular" },
    { title: "MIS Reports & Dashboards", description: "Custom MIS reports and interactive dashboards for data-driven decisions.", features: ["Custom reports", "Real-time dashboards", "KPI tracking", "Executive summaries"], link: "/services/digital/mis-dashboards" },
    { title: "Virtual Accounting Department", description: "Complete outsourced accounting function with dedicated team.", features: ["Daily bookkeeping", "AP/AR management", "Monthly closings", "Financial statements"], link: "/services/digital/virtual-accounting" },
    { title: "ERP Implementation Advisory", description: "Advisory for ERP implementation from assessment to go-live.", features: ["Requirement assessment", "Vendor evaluation", "Implementation oversight", "Post-implementation"], link: "/services/digital/erp-advisory" },
    { title: "Data Migration & Cleanup", description: "Clean migration of financial data between systems with zero data loss.", features: ["Data mapping", "Legacy extraction", "Duplicate elimination", "Quality assurance"], link: "/services/digital/data-migration" }
  ],
  stats: [
    { number: "70%", label: "Time Savings" },
    { number: "99%", label: "Accuracy" },
    { number: "24/7", label: "Access" },
    { number: "100+", label: "Implementations" }
  ],
  seo: {
    title: "Digital Accounting – Cloud, Automation, MIS & Virtual Accounting",
    description: "Digital accounting services: Cloud Accounting, Finance Automation, MIS Dashboards, Virtual Accounting, ERP Advisory. Transform your finance function.",
    keywords: "cloud accounting, finance automation, Tally Prime, Zoho Books, virtual accounting, ERP advisory, CA Ahmedabad",
    canonicalUrl: "/services/digital-accounting"
  },
  extraSections: techGrid
};

const DigitalAccounting = () => <ServiceCategoryTemplate data={data} />;
export default DigitalAccounting;
