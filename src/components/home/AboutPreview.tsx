import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Ethical Practice & Integrity",
  "Client-First Approach",
  "Deep Regulatory Knowledge",
  "Multi-Partner Expertise",
  "Long-term Client Relationships",
  "Pan-India Service Capability",
];

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              About Our Firm
            </span>
            <h2 className="section-heading mb-6">
              A Legacy of Trust & Excellence
            </h2>
            <p className="text-grey leading-relaxed mb-6">
              Ashvin K Yagnik & Co. has a vintage of more than 45 years in providing 
              quality and sustainable professional services to clients. We have been 
              consistent as well as up to date in the dynamic taxation and finance world.
            </p>
            <p className="text-grey leading-relaxed mb-8">
              As an RBI Category-I firm, we bring unparalleled expertise in taxation, 
              audit, compliance, and financial advisory services. Our team of 9+ partners 
              ensures comprehensive coverage across all domains of chartered accountancy.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-navy flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 cta-primary group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cream rounded-full"></div>
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-cream rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-display font-bold text-cream mb-4">
                  1978
                </div>
                <p className="text-white/80 text-lg mb-8">
                  Year of establishment by founder <br />
                  <span className="text-cream font-semibold">Ashvin K Yagnik</span>
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-display font-bold text-cream mb-1">9+</div>
                    <div className="text-white/60 text-sm">Expert Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-cream mb-1">2011</div>
                    <div className="text-white/60 text-sm">RBI Category-I Status</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Trusted by</div>
                  <div className="text-grey text-sm">1000+ Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
