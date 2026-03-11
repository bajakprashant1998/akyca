import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Rocket, Lightbulb, DollarSign, TrendingUp, FileText, CheckCircle } from "lucide-react";
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

const startupJourney = (
  <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-10 md:mb-12">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Your Journey</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3">Startup Journey with AKYCO</h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { step: "1", title: "Ideation", icon: Lightbulb },
          { step: "2", title: "Incorporation", icon: FileText },
          { step: "3", title: "Compliance", icon: CheckCircle },
          { step: "4", title: "Funding", icon: DollarSign },
          { step: "5", title: "Growth", icon: TrendingUp }
        ].map((item, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="bg-card rounded-2xl p-5 md:p-6 text-center border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{item.step}</div>
              <item.icon className="w-7 h-7 md:w-8 md:h-8 text-gold mx-auto mb-2" />
              <h3 className="font-display font-semibold text-primary text-sm md:text-base">{item.title}</h3>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const data: ServiceCategoryData = {
  icon: Rocket,
  badge: "Startup Solutions",
  titleLine1: "Startup &",
  titleLine2: "New Business",
  description: "Empowering entrepreneurs with comprehensive startup services from incorporation to funding and beyond.",
  ctaLabel: "Start Your Journey",
  highlights: [
    { icon: Rocket, title: "100+ Startups", description: "Launched and supported", color: "from-pink-500/20 to-pink-600/10" },
    { icon: DollarSign, title: "₹200Cr+ Raised", description: "For startup clients", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Lightbulb, title: "End-to-End", description: "Idea to IPO support", color: "from-amber-500/20 to-amber-600/10" },
    { icon: TrendingUp, title: "Growth Focus", description: "Scale-ready compliance", color: "from-blue-500/20 to-blue-600/10" }
  ],
  services: [
    { title: "Startup India & DPIIT Registration", description: "Complete assistance with Startup India registration for tax benefits and government incentives.", features: ["DPIIT recognition", "Tax exemption certification", "Startup India portal", "Government schemes"], link: "/services/startup/dpiit-registration" },
    { title: "Angel Tax Advisory", description: "Expert guidance on Section 56(2)(viib) compliance and valuation.", features: ["Share valuation", "Exemption filing", "Documentation", "Notice handling"], link: "/services/startup/angel-tax-advisory" },
    { title: "ESOP Structuring", description: "Design and implementation of Employee Stock Option Plans.", features: ["Scheme drafting", "Trust creation", "Vesting design", "Tax guidance"], link: "/services/startup/esop-structuring" },
    { title: "Business Plan & Financial Modelling", description: "Professional business plan preparation and financial modeling for investor readiness.", features: ["Market analysis", "Revenue projections", "Expense forecasting", "Sensitivity analysis"], link: "/services/startup/business-planning" },
    { title: "Pitch Deck Support", description: "Creating compelling investor pitch decks with financial narrative.", features: ["Story development", "Financial slides", "Metrics dashboard", "Q&A preparation"], link: "/services/startup/pitch-deck-support" },
    { title: "Funding Support", description: "End-to-end support for seed, angel, and VC fundraising rounds.", features: ["Investor outreach", "Due diligence prep", "Term negotiation", "Deal documentation"], link: "/services/startup/funding-support", highlight: "Popular" }
  ],
  stats: [
    { number: "100+", label: "Startups Launched" },
    { number: "₹200Cr+", label: "Funds Raised" },
    { number: "50+", label: "DPIIT Registrations" },
    { number: "45+", label: "Years Experience" }
  ],
  seo: {
    title: "Startup Services – DPIIT, ESOP, Funding & Business Plan",
    description: "Complete startup services: DPIIT Registration, Angel Tax, ESOP Structuring, Business Planning, Pitch Deck, Funding Support. 100+ startups launched.",
    keywords: "startup services, DPIIT registration, angel tax advisory, ESOP structuring, startup CA Ahmedabad",
    canonicalUrl: "/services/startup"
  },
  extraSections: startupJourney
};

const StartupServices = () => <ServiceCategoryTemplate data={data} />;
export default StartupServices;
