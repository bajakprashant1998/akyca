import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { FileText, Shield, TrendingUp, Clock, Users, FileCheck, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
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

const taxCalendar = (
  <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-10 md:mb-12">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Stay Compliant</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3">Important Tax Deadlines</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Stay on top of your tax obligations</p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { date: "31st July", title: "ITR Filing", desc: "Individual (Non-Audit)", icon: FileText, color: "from-blue-500/20 to-blue-600/10" },
          { date: "31st October", title: "ITR Filing", desc: "Audit cases", icon: FileCheck, color: "from-purple-500/20 to-purple-600/10" },
          { date: "15th Quarterly", title: "Advance Tax", desc: "Jun, Sep, Dec, Mar", icon: Calculator, color: "from-amber-500/20 to-amber-600/10" },
          { date: "7th Monthly", title: "TDS Deposit", desc: "Monthly TDS payment", icon: Clock, color: "from-emerald-500/20 to-emerald-600/10" }
        ].map((item, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
              <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 bg-gradient-to-br group-hover:scale-110 transition-transform", item.color)}>
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <p className="text-gold font-bold text-xl md:text-2xl mb-1 md:mb-2">{item.date}</p>
              <h3 className="font-display font-bold text-primary text-base md:text-lg mb-0.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: FileText,
  badge: "Core Services",
  titleLine1: "Taxation",
  titleLine2: "Services",
  description: "Comprehensive taxation solutions for individuals and businesses. From income tax return filing to complex international taxation, our expert team ensures maximum compliance and optimization of your tax position.",
  ctaLabel: "Book Tax Consultation",
  highlights: [
    { icon: Shield, title: "100% Compliance", description: "Zero penalty record across thousands of filings", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: TrendingUp, title: "Maximum Savings", description: "Average 20-30% tax savings through legal planning", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Clock, title: "Timely Filing", description: "Never missed a deadline in 45+ years", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Users, title: "Expert Team", description: "Qualified CAs with specialized tax expertise", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Income Tax Return Filing", description: "Expert preparation and timely filing of income tax returns for individuals, businesses, and corporations with maximum deductions.", features: ["Accurate computation of taxable income", "Identification of eligible deductions", "E-filing with acknowledgment", "Assessment follow-up support"], link: "/services/taxation/income-tax-return", highlight: "Most Popular" },
    { title: "Tax Planning & Advisory", description: "Strategic tax planning to minimize your tax liability legally while maximizing wealth creation.", features: ["Annual tax planning strategies", "Investment-linked tax savings", "Retirement planning optimization", "Business structure optimization"], link: "/services/taxation/tax-planning" },
    { title: "Corporate Taxation", description: "Comprehensive corporate tax services including advance tax computation, MAT/AMT planning, and compliance.", features: ["Advance tax calculations", "MAT credit optimization", "Transfer pricing compliance", "Corporate tax return filing"], link: "/services/taxation/corporate-taxation" },
    { title: "International Taxation", description: "Expert guidance on cross-border transactions, DTAA benefits, and international tax compliance.", features: ["DTAA treaty benefits", "Cross-border transaction structuring", "Expatriate taxation", "Foreign income compliance"], link: "/services/taxation/international-taxation", highlight: "Specialized" },
    { title: "NRI Taxation", description: "Specialized tax services for NRIs covering residential status, foreign income taxation, and DTAA benefits.", features: ["Residential status determination", "Repatriation planning", "FEMA compliance", "Double taxation relief"], link: "/services/taxation/nri-taxation" },
    { title: "TDS Compliance & Returns", description: "Complete TDS management including computation, deduction, deposit, and quarterly return filing.", features: ["TDS calculation & deduction", "Quarterly return filing", "Form 16/16A generation", "Lower deduction certificates"], link: "/services/taxation/tds-compliance" },
    { title: "Tax Representation", description: "Professional representation before Income Tax authorities for assessments, appeals, and dispute resolution.", features: ["Scrutiny assessment handling", "Appeal preparation & filing", "Settlement commission matters", "Tribunal representation"], link: "/services/taxation/tax-representation" }
  ],
  stats: [
    { number: "45+", label: "Years Experience" },
    { number: "10000+", label: "Returns Filed" },
    { number: "₹500Cr+", label: "Tax Saved for Clients" },
    { number: "99%", label: "Client Retention" }
  ],
  seo: {
    title: "Taxation Services – Income Tax, TDS, NRI & Corporate Tax",
    description: "Comprehensive taxation services: Income Tax Return Filing, Tax Planning, Corporate Tax, International Taxation, NRI Tax, TDS Compliance. 45+ years experience. Ahmedabad.",
    keywords: "income tax return filing, tax planning, corporate taxation, NRI taxation, TDS compliance, CA services Ahmedabad",
    canonicalUrl: "/services/taxation"
  },
  extraSections: taxCalendar
};

const TaxationServices = () => <ServiceCategoryTemplate data={data} />;
export default TaxationServices;
