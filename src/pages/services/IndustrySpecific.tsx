import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Factory, Building, Heart, ShoppingCart, GraduationCap } from "lucide-react";
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

const industries = ["Real Estate", "Healthcare", "Manufacturing", "IT & Software", "E-commerce", "Education", "NGO & Trusts", "Retail", "Hospitality", "Logistics", "Pharma", "Textiles"];

const industryGrid = (
  <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/20 to-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-8 md:mb-10">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Sector Expertise</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">Industries We Serve</h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {industries.map((ind, i) => (
          <AnimatedSection key={i} delay={i * 50}>
            <div className="bg-card rounded-xl p-3 md:p-4 text-center border border-border hover:shadow-lg hover:border-gold/30 transition-all hover:-translate-y-1">
              <p className="font-medium text-primary text-sm">{ind}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: Factory,
  badge: "Sector Expertise",
  titleLine1: "Industry-Specific",
  titleLine2: "Services",
  description: "Tailored solutions for diverse industries with specialized expertise in regulatory compliance, accounting standards, and sector-specific challenges.",
  ctaLabel: "Get Industry Consultation",
  highlights: [
    { icon: Factory, title: "12+ Industries", description: "Sector-specific expertise", color: "from-indigo-500/20 to-indigo-600/10" },
    { icon: Building, title: "RERA Experts", description: "Real estate compliance", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Heart, title: "NGO Specialists", description: "FCRA & trust compliance", color: "from-pink-500/20 to-pink-600/10" },
    { icon: ShoppingCart, title: "E-commerce", description: "Digital business compliance", color: "from-blue-500/20 to-blue-600/10" }
  ],
  services: [
    { title: "Real Estate & RERA Compliance", description: "Comprehensive services for real estate developers including RERA registration and project accounting.", features: ["RERA registration", "Project accounting", "Sales compliance", "GST advisory"], link: "/services/industry/real-estate" },
    { title: "Healthcare & Hospital Accounting", description: "Specialized services for hospitals and healthcare providers.", features: ["Revenue recognition", "Cost center accounting", "Clinical compliance", "Healthcare GST"], link: "/services/industry/healthcare" },
    { title: "Manufacturing Industry Audit", description: "Industry-specific audit for manufacturing units with cost optimization.", features: ["Cost audit", "Inventory valuation", "Production analysis", "Transfer pricing"], link: "/services/industry/manufacturing" },
    { title: "Export Import (EXIM) Advisory", description: "Complete advisory for export-import businesses on customs and DGFT schemes.", features: ["Export benefits", "Customs advisory", "DGFT schemes", "LC advisory"], link: "/services/industry/export-import" },
    { title: "E-commerce Compliance", description: "Comprehensive compliance for e-commerce businesses including marketplace regulations.", features: ["E-commerce GST", "TCS provisions", "FDI compliance", "Marketplace review"], link: "/services/industry/ecommerce" },
    { title: "Educational Institution Advisory", description: "Specialized services for schools, colleges, and universities.", features: ["Fee accounting", "Trust compliance", "UGC/AICTE requirements", "12A/80G benefits"], link: "/services/industry/education" },
    { title: "NGO & Trust Management", description: "Complete management for NGOs and charitable trusts.", features: ["FCRA compliance", "CSR management", "Impact reporting", "Governance advisory"], link: "/services/industry/ngo-trust" }
  ],
  stats: [
    { number: "12+", label: "Industries Served" },
    { number: "500+", label: "Industry Clients" },
    { number: "45+", label: "Years Experience" },
    { number: "100%", label: "Compliance Rate" }
  ],
  seo: {
    title: "Industry-Specific Services – Real Estate, Healthcare, EXIM & More",
    description: "Tailored CA services for Real Estate, Healthcare, Manufacturing, E-commerce, Education, NGO industries. Sector-specific expertise in Ahmedabad.",
    keywords: "industry specific CA services, real estate compliance, healthcare accounting, manufacturing audit, EXIM advisory",
    canonicalUrl: "/services/industry"
  },
  extraSections: industryGrid
};

const IndustrySpecific = () => <ServiceCategoryTemplate data={data} />;
export default IndustrySpecific;
