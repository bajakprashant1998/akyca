import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck,
  TrendingUp, HelpCircle, ChevronDown, Phone, MessageCircle, Calendar,
  Sparkles, Shield, Clock, Users, Star, Send, Building2, Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface SubServiceData {
  title: string;
  parentService: string;
  parentServicePath: string;
  icon: LucideIcon;
  bannerImage?: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  useCases: UseCase[];
  faqs: FAQ[];
  stats?: { number: string; label: string }[];
  relatedServices?: RelatedService[];
}

interface SubServiceTemplateProps {
  data: SubServiceData;
}

/* ── Scroll animation hook ── */
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

const AnimatedSection = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
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

/* ── FAQ accordion item ── */
const FAQItem = ({ faq, isOpen, onClick, index }: { faq: FAQ; isOpen: boolean; onClick: () => void; index: number }) => (
  <div className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300">
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors">
      <div className="flex items-center gap-3 md:gap-4 pr-4">
        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">{index + 1}</span>
        <span className="font-display font-semibold text-primary text-sm md:text-base">{faq.question}</span>
      </div>
      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300", isOpen ? "bg-[hsl(var(--gold))] rotate-180" : "bg-[hsl(var(--gold))]/10")}>
        <ChevronDown className={cn("w-4 h-4", isOpen ? "text-primary-foreground" : "text-[hsl(var(--gold))]")} />
      </div>
    </button>
    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem] text-foreground leading-relaxed text-sm md:text-base">{faq.answer}</div>
    </div>
  </div>
);

/* ── Stat counter with animation ── */
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
      <div className="text-3xl md:text-4xl font-display font-bold text-[hsl(var(--gold))] mb-1 group-hover:scale-110 transition-transform">{displayNumber}</div>
      <div className="text-primary-foreground/70 text-xs md:text-sm">{label}</div>
    </div>
  );
};

/* ── Quick nav section link ── */
const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "process", label: "Process" },
  { id: "use-cases", label: "Use Cases" },
  { id: "faqs", label: "FAQs" },
];

const QuickNav = ({ activeSection }: { activeSection: string }) => (
  <div className="sticky top-[72px] z-30 bg-card/95 backdrop-blur-md border-b border-border shadow-sm hidden md:block">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
              activeSection === s.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-primary"
            )}
          >
            {s.label}
          </a>
        ))}
        <div className="ml-auto flex-shrink-0">
          <Link
            to="/contact"
            className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-primary px-5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  </div>
);

/* ── Trust badge bar ── */
const TrustBadges = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4">
    {[
      { icon: Shield, text: "RBI Category-I Firm" },
      { icon: Clock, text: "45+ Years Experience" },
      { icon: Users, text: "5,000+ Clients Served" },
      { icon: Star, text: "4.9/5 Client Rating" },
    ].map((badge, i) => (
      <div key={i} className="flex items-center gap-2 text-primary-foreground/80">
        <badge.icon className="w-4 h-4 text-[hsl(var(--gold))]" />
        <span className="text-xs md:text-sm font-medium">{badge.text}</span>
      </div>
    ))}
  </div>
);

/* ── Use case icon rotation ── */
const useCaseIcons = [Target, Building2, Briefcase, Users, TrendingUp, Star];

/* ══════════════════════════════════════════════ */
/* ══  MAIN TEMPLATE                          ══ */
/* ══════════════════════════════════════════════ */
export const SubServiceTemplate = ({ data }: SubServiceTemplateProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("overview");
  const IconComponent = data.icon;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  /* track active section for quick-nav */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const slugTitle = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const faqJsonLd = data.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  } : undefined;

  return (
    <Layout>
      <SEO
        title={`${data.title} – ${data.parentService}`}
        description={data.description}
        keywords={`${data.title}, ${data.parentService}, CA services Ahmedabad, chartered accountant Gujarat, ${slugTitle}`}
        canonicalUrl={`/services/${slugTitle}`}
        jsonLd={faqJsonLd}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[hsl(var(--gold))]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        </div>

        {data.bannerImage && (
          <div className="absolute inset-0 opacity-10">
            <img src={data.bannerImage} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb inline in hero */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm flex-wrap text-primary-foreground/60">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <li><Link to={data.parentServicePath} className="hover:text-primary-foreground transition-colors">{data.parentService}</Link></li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <li><span className="text-primary-foreground font-medium">{data.title}</span></li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-2xl">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase">{data.parentService}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-5 leading-tight">
                  {data.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                  {data.description}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-primary px-6 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2.5 transition-all hover:scale-105 shadow-lg text-sm md:text-base"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    Schedule Consultation
                  </Link>
                  <a
                    href="https://wa.me/919825046598"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2.5 transition-all hover:scale-105 text-sm md:text-base"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919825046598"
                    className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-6 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2.5 hover:bg-primary-foreground/20 transition-all text-sm md:text-base"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">+91 98250 46598</span>
                    <span className="sm:hidden">Call Now</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Quick stats card (2 cols) */}
            {data.stats && data.stats.length > 0 && (
              <div className="lg:col-span-2 hidden lg:block">
                <AnimatedSection delay={400}>
                  <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/10">
                    <h3 className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-6 text-center">Our Track Record</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {data.stats.map((stat, index) => (
                        <StatCounter key={index} number={stat.number} label={stat.label} delay={index * 100} />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-primary-foreground/10">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Mobile stats bar */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-6 bg-primary lg:hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, index) => (
                <StatCounter key={index} number={stat.number} label={stat.label} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STICKY QUICK NAV ── */}
      <QuickNav activeSection={activeSection} />

      {/* ── OVERVIEW / DESCRIPTION ── */}
      <section id="overview" className="py-16 md:py-20 bg-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">About This Service</h2>
                </div>
                <div className="space-y-4 text-foreground leading-relaxed text-base md:text-lg">
                  {data.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar: Quick contact card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200}>
                <div className="sticky top-44 bg-card rounded-2xl p-6 border border-border shadow-lg">
                  <h3 className="font-display font-bold text-primary text-lg mb-2">Need Expert Advice?</h3>
                  <p className="text-muted-foreground text-sm mb-5">Get a free consultation with our {data.parentService} specialists.</p>
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-primary px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      <Send className="w-4 h-4" />
                      Request Free Quote
                    </Link>
                    <a
                      href="tel:+919825046598"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      +91 98250 46598
                    </a>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Typically responds within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-3.5 h-3.5" />
                      <span>100% confidential consultation</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES & BENEFITS ── */}
      <section id="features" className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase mb-3 block">What You Get</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-primary">Features & Benefits</h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Key Features */}
            <AnimatedSection>
              <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/5 rounded-xl flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-[hsl(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary">Key Features</h3>
                    <p className="text-muted-foreground text-xs">What's included</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-secondary/30 transition-colors group">
                      <div className="w-7 h-7 bg-[hsl(var(--gold))]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[hsl(var(--gold))] group-hover:scale-110 transition-all">
                        <CheckCircle className="w-3.5 h-3.5 text-[hsl(var(--gold))] group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground text-sm md:text-base group-hover:text-primary transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Benefits */}
            <AnimatedSection delay={100}>
              <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary">Benefits</h3>
                    <p className="text-muted-foreground text-xs">Why this service matters</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-colors group">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <TrendingUp className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground text-sm md:text-base group-hover:text-primary transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROCESS / HOW IT WORKS ── */}
      <section id="process" className="py-16 md:py-20 bg-primary relative overflow-hidden scroll-mt-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--gold))]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase mb-3 block">Our Process</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">How It Works</h2>
              <p className="text-primary-foreground/60 max-w-xl mx-auto text-sm md:text-base">
                Our streamlined process ensures efficient and effective service delivery
              </p>
            </div>
          </AnimatedSection>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-primary-foreground/10" />
              <div className="grid grid-cols-4 gap-6">
                {data.process.map((step, index) => (
                  <AnimatedSection key={index} delay={index * 150}>
                    <div className="relative group text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold))]/80 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                        <span className="text-primary font-bold text-2xl">{index + 1}</span>
                      </div>
                      <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{step.step}</h3>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-6">
            {data.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-4 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold))]/80 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    {index < data.process.length - 1 && <div className="w-0.5 h-8 bg-primary-foreground/10 mt-2" />}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-bold text-primary-foreground text-base mb-1">{step.step}</h3>
                    <p className="text-primary-foreground/60 text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section id="use-cases" className="py-16 md:py-20 bg-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase mb-3 block">Applications</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-3">Who Benefits</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                See how this service helps different businesses and scenarios
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.useCases.map((useCase, index) => {
              const UCIcon = useCaseIcons[index % useCaseIcons.length];
              return (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mb-5 group-hover:from-[hsl(var(--gold))]/20 group-hover:to-[hsl(var(--gold))]/5 transition-all group-hover:scale-110">
                      <UCIcon className="w-5 h-5 text-primary group-hover:text-[hsl(var(--gold))] transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      {data.faqs.length > 0 && (
        <section id="faqs" className="py-16 md:py-20 bg-secondary/20 scroll-mt-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-10">
                  <div className="w-14 h-14 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <HelpCircle className="w-7 h-7 text-[hsl(var(--gold))]" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-3">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Get answers to common questions about {data.title.toLowerCase()}
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-3">
                {data.faqs.map((faq, index) => (
                  <AnimatedSection key={index} delay={index * 50}>
                    <FAQItem
                      faq={faq}
                      isOpen={openFAQ === index}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      index={index}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-10">
                <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase mb-3 block">Explore More</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">Related Services</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                  Discover services that complement your needs
                </p>
              </div>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.relatedServices.map((service, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <Link
                    to={service.link}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group block h-full"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-5 h-5 text-[hsl(var(--gold))]" />
                    </div>
                    <h3 className="font-display font-bold text-primary text-base mb-1.5 group-hover:text-[hsl(var(--gold))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                    <span className="text-primary font-semibold text-sm group-hover:text-[hsl(var(--gold))] transition-colors inline-flex items-center gap-1.5">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Browse Other Categories ── */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-display font-bold text-primary mb-2">Explore More Services</h2>
            <p className="text-muted-foreground text-sm">Browse our full range of chartered accountant services</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { name: "Taxation", path: "/services/taxation" },
              { name: "GST", path: "/services/gst" },
              { name: "Audit", path: "/services/audit" },
              { name: "Corporate", path: "/services/corporate" },
              { name: "Financial Advisory", path: "/services/financial-advisory" },
              { name: "Compliance", path: "/services/compliance" },
              { name: "Litigation", path: "/services/litigation" },
              { name: "Startup", path: "/services/startup" },
              { name: "Industry-Specific", path: "/services/industry" },
              { name: "Digital Accounting", path: "/services/digital-accounting" },
              { name: "Personal & Wealth", path: "/services/personal-wealth" },
              { name: "Advanced Financial", path: "/services/advanced-financial" },
            ].filter(cat => cat.path !== data.parentServicePath).map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="px-4 py-2 bg-card border border-border rounded-full text-xs md:text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="text-[hsl(var(--gold))] font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[hsl(var(--gold))]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider uppercase mb-3 block">Get Started Today</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Connect with our experts to discuss your {data.title.toLowerCase()} requirements and get personalized solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-primary px-8 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2.5 transition-all hover:scale-105 shadow-xl"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919825046598"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2.5 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919825046598"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-foreground hover:text-primary transition-all inline-flex items-center justify-center gap-2.5"
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

export default SubServiceTemplate;
