import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, HelpCircle, ChevronDown, Phone, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AnimatedSection = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FAQItem = ({ faq, isOpen, onClick, index }: { faq: FAQ; isOpen: boolean; onClick: () => void; index: number }) => (
  <div className="border border-border rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/20 transition-colors"
    >
      <div className="flex items-center gap-4 pr-4">
        <span className="w-8 h-8 bg-navy/10 rounded-full flex items-center justify-center text-sm font-semibold text-navy flex-shrink-0">
          {index + 1}
        </span>
        <span className="font-display font-semibold text-navy">{faq.question}</span>
      </div>
      <div className={cn("w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300", isOpen && "bg-gold rotate-180")}>
        <ChevronDown className={cn("w-4 h-4 text-gold", isOpen && "text-white")} />
      </div>
    </button>
    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
      <div className="px-6 pb-6 pl-[4.5rem] text-grey leading-relaxed">
        {faq.answer}
      </div>
    </div>
  </div>
);

const StatCounter = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    const numericPart = number.replace(/[^0-9]/g, "");
    const prefix = number.match(/^[^0-9]*/)?.[0] || "";
    const suffix = number.match(/[^0-9]*$/)?.[0] || "";
    const target = parseInt(numericPart) || 0;

    if (target === 0) {
      setDisplayNumber(number);
      return;
    }

    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayNumber(number);
        clearInterval(timer);
      } else {
        setDisplayNumber(`${prefix}${Math.floor(current)}${suffix}`);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
        {displayNumber}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

export const SubServiceTemplate = ({ data }: SubServiceTemplateProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const IconComponent = data.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      {/* Hero Section with Enhanced Banner */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>

        {data.bannerImage && (
          <div className="absolute inset-0 opacity-10">
            <img src={data.bannerImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cream to-cream/80 rounded-3xl flex items-center justify-center shadow-2xl">
                  <IconComponent className="w-10 h-10 text-navy" />
                </div>
                <div>
                  <Link
                    to={data.parentServicePath}
                    className="text-gold font-medium text-sm tracking-wider uppercase hover:text-cream transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    {data.parentService}
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-3xl mb-8">
                {data.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </Link>
                <a
                  href="tel:+919825046598"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  +91 98250 46598
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-cream/30 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link to="/" className="text-grey hover:text-navy transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><Link to="/services" className="text-grey hover:text-navy transition-colors">Services</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><Link to={data.parentServicePath} className="text-grey hover:text-navy transition-colors">{data.parentService}</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><span className="text-navy font-medium">{data.title}</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Stats Bar */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-8 bg-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat, index) => (
                <StatCounter key={index} number={stat.number} label={stat.label} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-gold" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy">
                  About This Service
                </h2>
              </div>
              <div className="prose prose-lg text-grey leading-relaxed">
                {data.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features & Benefits - Enhanced Grid */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Key Features */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-border h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center">
                    <BadgeCheck className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-navy">Key Features</h2>
                    <p className="text-grey text-sm">What's included in this service</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-cream/30 transition-colors group">
                      <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all">
                        <CheckCircle className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-grey text-lg group-hover:text-navy transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Benefits */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-border h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy/20 to-navy/5 rounded-2xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-navy" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-navy">Benefits</h2>
                    <p className="text-grey text-sm">Why this service matters</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-navy/5 transition-colors group">
                      <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy group-hover:scale-110 transition-all">
                        <TrendingUp className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-grey text-lg group-hover:text-navy transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process / How It Works - Enhanced */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Our streamlined process ensures efficient and effective service delivery
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100} className="h-full">
                <div className="relative group h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full flex flex-col border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-navy font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{step.step}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  {index < data.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Enhanced Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Applications</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                Use Cases
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                See how this service can benefit different scenarios
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-cream to-cream/50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold/20 group-hover:to-gold/5 transition-all group-hover:scale-110">
                    <CheckCircle className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3">{useCase.title}</h3>
                  <p className="text-grey leading-relaxed">{useCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Enhanced */}
      {data.faqs.length > 0 && (
        <section className="py-20 bg-cream/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <HelpCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-grey text-lg">
                    Get answers to common questions about this service
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
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

      {/* Related Services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-cream/30 to-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Explore More</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                  Related Services
                </h2>
                <p className="text-grey max-w-2xl mx-auto text-lg">
                  Discover other services that complement your needs
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relatedServices.map((service, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <Link
                    to={service.link}
                    className="bg-white rounded-2xl p-6 border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group block h-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-grey text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="text-navy font-semibold text-sm group-hover:text-gold transition-colors inline-flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
              Connect with our experts to discuss your requirements and get personalized solutions for your needs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919825046598"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919825046598"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-3"
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