import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  CheckCircle, ChevronRight, ArrowRight, ChevronDown,
  Sparkles, Phone, MessageCircle, LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

// ── Shared animation hooks ──────────────────────────────────────────
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

const AnimatedSection = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StatCounter = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [displayNumber, setDisplayNumber] = useState("0");
  useEffect(() => {
    if (!isVisible) return;
    const numericPart = number.replace(/[^0-9]/g, "");
    const prefix = number.match(/^[^0-9]*/)?.[0] || "";
    const suffix = number.match(/[^0-9]*$/)?.[0] || "";
    const target = parseInt(numericPart) || 0;
    if (target === 0) { setDisplayNumber(number); return; }
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setDisplayNumber(number); clearInterval(timer); }
      else setDisplayNumber(`${prefix}${Math.floor(current)}${suffix}`);
    }, 50);
    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2 group-hover:scale-110 transition-transform">{displayNumber}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

// ── Types ────────────────────────────────────────────────────────────
export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  link: string;
  highlight?: string | null;
  icon?: LucideIcon;
}

export interface HighlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export interface ServiceCategoryData {
  /** Page icon */
  icon: LucideIcon;
  /** Label above title */
  badge: string;
  /** Main heading line 1 */
  titleLine1: string;
  /** Main heading line 2 (gold) */
  titleLine2: string;
  /** Hero description */
  description: string;
  /** CTA button label */
  ctaLabel: string;
  /** Key highlight cards */
  highlights: HighlightItem[];
  /** Service items */
  services: ServiceItem[];
  /** Stats bar */
  stats: { number: string; label: string }[];
  /** SEO */
  seo: { title: string; description: string; keywords: string; canonicalUrl: string };
  /** Extra sections rendered between services and CTA */
  extraSections?: ReactNode;
}

// ── Component ────────────────────────────────────────────────────────
export const ServiceCategoryTemplate = ({ data }: { data: ServiceCategoryData }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const IconComponent = data.icon;

  return (
    <Layout>
      <SEO {...data.seo} />

      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <span className="text-gold font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {data.badge}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
                {data.titleLine1}<br />
                <span className="text-gold">{data.titleLine2}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {data.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold/90 text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  {data.ctaLabel}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919825046598"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-white/20 transition-all text-sm md:text-base"
                >
                  <Phone className="w-5 h-5" />
                  <span className="hidden sm:inline">+91 98250 46598</span>
                  <span className="sm:hidden">Call Us</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb ─── */}
      <section className="bg-secondary/30 py-3 md:py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden />
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden />
              <li><span className="text-primary font-medium">{data.titleLine1} {data.titleLine2}</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ─── Highlights ─── */}
      {data.highlights.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {data.highlights.map((item, index) => (
                <AnimatedSection key={index} delay={index * 80}>
                  <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
                    <div className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 bg-gradient-to-br group-hover:scale-110",
                      item.color || "from-gold/20 to-gold/10"
                    )}>
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-primary text-base md:text-xl mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Services Grid ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-14">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">What We Offer</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3">
                Our {data.titleLine2}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Click any service to see details, or visit the full page
              </p>
            </div>
          </AnimatedSection>

          {/* Quick-nav pills */}
          <AnimatedSection delay={50}>
            <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
              {data.services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                    expandedCard === index
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card text-muted-foreground border-border hover:border-gold hover:text-primary"
                  )}
                >
                  {service.title.length > 25 ? service.title.slice(0, 25) + "…" : service.title}
                  {service.highlight && (
                    <span className="ml-2 inline-block w-2 h-2 rounded-full bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {data.services.map((service, index) => {
              const isExpanded = expandedCard === index;
              const ServiceIcon = service.icon;

              return (
                <AnimatedSection key={index} delay={index * 60}>
                  <div
                    className={cn(
                      "bg-card rounded-2xl border transition-all duration-500 overflow-hidden",
                      isExpanded
                        ? "border-gold shadow-2xl md:col-span-2 ring-1 ring-gold/20"
                        : "border-border hover:shadow-xl hover:-translate-y-1"
                    )}
                  >
                    {/* Card Header */}
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      className="w-full text-left p-5 md:p-7 flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold/15 to-gold/5 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {ServiceIcon ? (
                          <ServiceIcon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                        ) : (
                          <span className="text-lg md:text-xl font-bold text-gold">{String(index + 1).padStart(2, '0')}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-display font-bold text-primary text-lg md:text-xl group-hover:text-gold transition-colors">
                            {service.title}
                          </h3>
                          {service.highlight && (
                            <span className="bg-gold/10 text-gold text-xs font-bold px-2.5 py-0.5 rounded-full border border-gold/20">
                              {service.highlight}
                            </span>
                          )}
                        </div>
                        <p className={cn(
                          "text-muted-foreground text-sm md:text-base leading-relaxed",
                          !isExpanded && "line-clamp-2"
                        )}>
                          {service.description}
                        </p>
                      </div>
                      <div className={cn(
                        "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-1",
                        isExpanded ? "bg-gold rotate-180" : "bg-muted group-hover:bg-gold/10"
                      )}>
                        <ChevronDown className={cn("w-4 h-4 md:w-5 md:h-5", isExpanded ? "text-primary-foreground" : "text-muted-foreground")} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-500",
                      isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="px-5 md:px-7 pb-6 md:pb-8">
                        <div className="border-t border-border pt-5 md:pt-6">
                          {/* Features grid */}
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-gold" />
                              What's Included
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-secondary/30 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA row */}
                          <div className="flex flex-wrap gap-3 items-center">
                            <Link
                              to={service.link}
                              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all hover:scale-105"
                            >
                              View Full Details
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                              to="/contact"
                              className="border border-border text-primary px-6 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 hover:border-gold hover:text-gold transition-all"
                            >
                              Get a Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Collapsed CTA */}
                    {!isExpanded && (
                      <div className="px-5 md:px-7 pb-5 md:pb-6 pt-0">
                        <Link
                          to={service.link}
                          className="text-sm font-semibold text-primary hover:text-gold transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      {data.stats.length > 0 && (
        <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center mb-10 md:mb-12">
                <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Our Track Record</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white">
                  Why Choose Us?
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {data.stats.map((stat, index) => (
                <StatCounter key={index} number={stat.number} label={stat.label} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Extra Sections (calendar, etc.) ─── */}
      {data.extraSections}

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-3 block">Get Started</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              Need Expert Assistance?
            </h2>
            <p className="text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
              Schedule a consultation with our experts to discuss your requirements and get personalized solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919825046598"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919825046598"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCategoryTemplate;
