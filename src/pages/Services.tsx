import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  FileText, Calculator, ClipboardCheck, Building2, TrendingUp, Shield,
  Gavel, Rocket, Factory, Laptop, UserCheck, ChevronRight, ArrowRight, Sparkles, Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const serviceCategories = [
  { icon: FileText, title: "Taxation Services", link: "/services/taxation", color: "from-blue-500/20 to-blue-600/10", services: ["Income Tax Return Filing", "Tax Planning & Advisory", "Corporate Taxation", "International Taxation", "NRI Taxation", "TDS Compliance"] },
  { icon: Calculator, title: "GST Services", link: "/services/gst", color: "from-green-500/20 to-green-600/10", services: ["GST Registration", "GST Return Filing", "GST Audit", "GST Advisory", "Litigation & Notice Handling"] },
  { icon: ClipboardCheck, title: "Audit & Assurance", link: "/services/audit", color: "from-purple-500/20 to-purple-600/10", services: ["Statutory Audit", "Internal Audit", "Tax Audit", "Bank Audit", "Stock Audit", "Management Audit"] },
  { icon: Building2, title: "Company & Corporate", link: "/services/corporate", color: "from-amber-500/20 to-amber-600/10", services: ["Company Incorporation", "LLP Formation", "ROC Compliance", "Secretarial Services", "Due Diligence", "M&A Support"] },
  { icon: TrendingUp, title: "Financial Advisory", link: "/services/financial-advisory", color: "from-cyan-500/20 to-cyan-600/10", services: ["Business Structuring", "Project Finance", "Fund Raising", "Valuation Services", "Virtual CFO"] },
  { icon: Shield, title: "Compliance & Regulatory", link: "/services/compliance", color: "from-red-500/20 to-red-600/10", services: ["Annual Compliance (AMC)", "Labour Law Compliance", "RBI/FEMA/SEBI", "NBFC Compliance", "NGO Compliance"] },
  { icon: Gavel, title: "Litigation & Representation", link: "/services/litigation", color: "from-orange-500/20 to-orange-600/10", services: ["Income Tax Appeals", "GST Litigation", "Tribunal Proceedings", "Notice Handling", "Search & Survey Cases"] },
  { icon: Rocket, title: "Startup & New Business", link: "/services/startup", color: "from-pink-500/20 to-pink-600/10", services: ["Startup India Registration", "Angel Tax Advisory", "ESOP Structuring", "Business Plan", "Funding Support"] },
  { icon: Factory, title: "Industry-Specific", link: "/services/industry", color: "from-indigo-500/20 to-indigo-600/10", services: ["Real Estate & RERA", "Healthcare Accounting", "Manufacturing Audit", "EXIM Advisory", "E-commerce Compliance"] },
  { icon: ClipboardCheck, title: "Advanced Financial", link: "/services/advanced-financial", color: "from-teal-500/20 to-teal-600/10", services: ["Risk Assessment", "Forensic Audit", "Business Valuation", "IBC Support", "Turnaround Advisory"] },
  { icon: Laptop, title: "Digital Accounting", link: "/services/digital-accounting", color: "from-violet-500/20 to-violet-600/10", services: ["Cloud Accounting", "Finance Automation", "MIS & Dashboards", "Virtual Accounting", "ERP Advisory"] },
  { icon: UserCheck, title: "Personal & Wealth", link: "/services/personal-wealth", color: "from-rose-500/20 to-rose-600/10", services: ["Personal Tax Planning", "HUF Structuring", "Succession Planning", "HNI Advisory", "NRI Services"] },
];

const stats = [
  { number: "45+", label: "Years Experience" },
  { number: "12", label: "Service Categories" },
  { number: "50+", label: "Specialized Services" },
  { number: "1000+", label: "Happy Clients" }
];

const Services = () => {
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
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-gold" />
              <span className="text-gold font-medium text-sm tracking-wider uppercase">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Full Spectrum<br />
              <span className="text-gold">CA Services</span>
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-2xl">
              Comprehensive chartered accountancy and financial consulting services
              tailored for businesses, startups, MSMEs, corporates, individuals, HNIs, and NRIs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
              >
                Get Started
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
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-cream/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-1">{stat.number}</div>
                <div className="text-grey text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
              Explore Our Services
            </h2>
            <p className="text-grey max-w-2xl mx-auto text-lg">
              Choose from our comprehensive range of professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedCard key={index} delay={index * 50}>
                <Link
                  to={category.link}
                  className="bg-white rounded-2xl border border-border p-8 hover:shadow-2xl transition-all duration-500 group block h-full hover:-translate-y-2"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br",
                    category.color,
                    "group-hover:scale-110"
                  )}>
                    <category.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-3 text-grey text-sm">
                        <ChevronRight className="w-4 h-4 text-gold flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:text-navy transition-colors">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-navy font-semibold group-hover:text-gold transition-colors">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              A simple, transparent approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your needs and goals" },
              { step: "02", title: "Analysis", desc: "Detailed review of your situation" },
              { step: "03", title: "Strategy", desc: "Customized solutions for you" },
              { step: "04", title: "Execution", desc: "Timely and accurate delivery" }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="relative group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-5xl font-display font-bold text-gold/30 mb-4 group-hover:text-gold transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gold/50" />
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-cream/50 to-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-border text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Phone className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Need Help with Any of These Services?
            </h2>
            <p className="text-grey mb-8 max-w-2xl mx-auto text-lg">
              Our team of expert chartered accountants is ready to assist you.
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-navy hover:bg-navy/90 text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919825046598"
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;