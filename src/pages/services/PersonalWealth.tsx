import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { UserCheck, Shield, Heart, Globe, Users, CheckCircle } from "lucide-react";
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

const nriSection = (
  <section className="py-16 md:py-20 bg-primary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <AnimatedSection>
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />NRI Services
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Special Focus: NRI Services</h2>
            <p className="text-white/80 mb-6">Managing finances across borders requires specialized expertise in FEMA, RBI, and cross-border taxation.</p>
            <ul className="space-y-3">
              {["FEMA & RBI compliance", "Tax-efficient repatriation", "Property investment in India", "Dual-country tax planning"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span className="text-white/80">{item}</span></li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="bg-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-semibold text-white text-xl mb-4">Common NRI Queries</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Can I invest in Indian mutual funds as an NRI?</li>
              <li>• How to repatriate property sale proceeds?</li>
              <li>• What is my residential status for tax?</li>
              <li>• How to claim DTAA benefits?</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: UserCheck,
  badge: "Personal Finance",
  titleLine1: "Personal &",
  titleLine2: "Wealth Services",
  description: "Personalized wealth advisory for individuals, families, and HNIs — from tax planning to succession and estate management.",
  ctaLabel: "Book Personal Consultation",
  highlights: [
    { icon: Shield, title: "Wealth Protection", description: "Tax-efficient structuring", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Heart, title: "Family Focus", description: "Multi-generational planning", color: "from-pink-500/20 to-pink-600/10" },
    { icon: Globe, title: "NRI Expertise", description: "Cross-border wealth management", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Users, title: "HNI Advisory", description: "Bespoke solutions for HNIs", color: "from-amber-500/20 to-amber-600/10" }
  ],
  services: [
    { title: "Personal Tax Planning", description: "Comprehensive personal tax planning to minimize liability and maximize wealth.", features: ["Income optimization", "Investment tax savings", "Capital gains planning", "Retirement planning"], link: "/services/wealth/personal-tax-planning" },
    { title: "HUF & Family Office Structuring", description: "Setup and management of HUF and family offices for tax efficiency.", features: ["HUF formation", "Family office setup", "Inter-family transactions", "Succession integration"], link: "/services/wealth/huf-family-office" },
    { title: "Succession Planning", description: "Strategic planning for smooth transition of wealth across generations.", features: ["Business succession", "Family constitution", "Tax-efficient transfers", "Governance framework"], link: "/services/wealth/succession-planning" },
    { title: "Estate & Will Advisory", description: "Expert guidance on estate planning and will drafting for asset protection.", features: ["Will drafting", "Trust creation", "Probate assistance", "Asset consolidation"], link: "/services/wealth/estate-will" },
    { title: "HNI Advisory", description: "Specialized wealth advisory for High Net Worth Individuals.", features: ["Comprehensive tax planning", "Investment structuring", "Regulatory compliance", "Lifestyle planning"], link: "/services/wealth/hni-advisory", highlight: "Premium" },
    { title: "NRI Wealth Structuring", description: "Complete wealth management for Non-Resident Indians.", features: ["FEMA/RBI compliance", "Repatriation planning", "India investments", "Cross-border tax"], link: "/services/wealth/nri-wealth" }
  ],
  stats: [
    { number: "500+", label: "HNI Clients" },
    { number: "₹1000Cr+", label: "Wealth Managed" },
    { number: "200+", label: "NRI Clients" },
    { number: "45+", label: "Years Experience" }
  ],
  seo: {
    title: "Personal & Wealth Services – Tax Planning, HNI & NRI Advisory",
    description: "Personal wealth services: Tax Planning, HUF Structuring, Succession Planning, Estate Advisory, HNI & NRI Wealth Management. Trusted CA Ahmedabad.",
    keywords: "personal tax planning, HNI advisory, NRI wealth management, succession planning, estate planning, CA Ahmedabad",
    canonicalUrl: "/services/personal-wealth"
  },
  extraSections: nriSection
};

const PersonalWealth = () => <ServiceCategoryTemplate data={data} />;
export default PersonalWealth;
