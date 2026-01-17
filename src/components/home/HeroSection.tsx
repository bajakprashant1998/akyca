import { Link } from "react-router-dom";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
            <span className="trust-badge">
              <Shield className="w-4 h-4" />
              RBI Category-I Firm
            </span>
            <span className="trust-badge">
              <Award className="w-4 h-4" />
              45+ Years of Excellence
            </span>
            <span className="trust-badge">
              <Users className="w-4 h-4" />
              Trusted by Businesses
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
            Your Trusted Partner in
            <span className="block text-cream">Taxation & Finance</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Ashvin K Yagnik & Co. delivers comprehensive chartered accountancy services 
            with a legacy of excellence spanning over four decades across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center gap-2 group"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Talk to an Expert
            </Link>
            <Link
              to="/services"
              className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/30"
            >
              Get Compliance Support
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          {[
            { number: "45+", label: "Years of Service" },
            { number: "9+", label: "Expert Partners" },
            { number: "1000+", label: "Happy Clients" },
            { number: "2", label: "Branch Offices" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-display font-bold text-cream mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
