import { Layout } from "@/components/layout/Layout";
import { Award, Users, Building, MapPin, Star, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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

const milestones = [
  {
    year: "1978",
    title: "The Beginning",
    description: "Commencement of professional journey by founder Ashvin K Yagnik. A visionary step that laid the foundation for decades of excellence.",
    icon: Star,
  },
  {
    year: "2001",
    title: "Growing Together",
    description: "Addition of new partners to strengthen the firm's capabilities and expand service offerings.",
    icon: Users,
  },
  {
    year: "2006",
    title: "Expanding Expertise",
    description: "Strength of partners increased to 6, bringing diverse expertise across multiple domains of chartered accountancy.",
    icon: Users,
  },
  {
    year: "2009",
    title: "Building Strength",
    description: "Strength of partners increased to 9, establishing a robust leadership team capable of handling complex assignments.",
    icon: Users,
  },
  {
    year: "2011",
    title: "Government Recognition",
    description: "Achieved Category-I Firm status with RBI (Reserve Bank of India), recognizing our expertise and credibility in the financial sector.",
    icon: Award,
  },
  {
    year: "2019",
    title: "Geographic Expansion",
    description: "Opening of Ahmedabad Branch, extending our presence to Gujarat's commercial capital and serving a wider client base.",
    icon: Building,
  },
];

const stats = [
  { number: "45+", label: "Years of Excellence" },
  { number: "9+", label: "Expert Partners" },
  { number: "1000+", label: "Happy Clients" },
  { number: "2", label: "Branch Offices" },
];

const History = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-gold" />
                <span className="text-gold font-medium text-sm tracking-wider uppercase">Our Journey</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                History &<br />
                <span className="text-gold">Milestones</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-8">
                Over four decades of building trust, expanding expertise, and
                delivering excellence in chartered accountancy services.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  About Our Team
                  <ArrowRight className="w-5 h-5" />
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

      {/* Stats Bar */}
      <section className="py-10 bg-navy border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Timeline</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">Key Milestones</h2>
              <p className="text-grey max-w-2xl mx-auto text-lg">
                A legacy built on trust, expertise, and unwavering commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-cream to-navy transform md:-translate-x-1/2"></div>

              {/* Milestones */}
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} ml-20 md:ml-0`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 inline-block ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                        <div className="text-3xl font-display font-bold text-gold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-display font-semibold text-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-grey text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center border-4 border-gold shadow-xl hover:scale-110 transition-transform">
                        <milestone.icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Future */}
              <AnimatedSection delay={600}>
                <div className="relative flex items-start gap-8">
                  <div className="flex-1 md:text-right md:pr-16 ml-20 md:ml-0">
                    <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 shadow-xl inline-block md:ml-auto hover:scale-[1.02] transition-transform">
                      <div className="text-3xl font-display font-bold text-gold mb-2">
                        Future
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Continuing the Legacy
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        With a strong foundation and unwavering commitment to excellence,
                        we continue to evolve and expand, ready to serve the next generation
                        of businesses and individuals across India.
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center border-4 border-navy shadow-xl animate-pulse">
                      <MapPin className="w-7 h-7 text-navy" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Be Part of Our Journey
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Join the 1000+ businesses and individuals who trust us with their financial future.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-3"
              >
                Meet Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default History;
