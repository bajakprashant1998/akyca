import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, MessageCircle, Calendar, Users, Clock, Shield, Sparkles } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import arpanImg from "@/assets/team/arpan-yagnik.png";
import ashwinImg from "@/assets/team/ashwin-yagnik.png";
import japanImg from "@/assets/team/japan-yagnik.png";

export const CTASection = () => {
  const { get } = useSiteContent("home");

  const teamBadge = get("cta", "team_badge", "9+ Expert CAs Ready to Help");
  const heading1 = get("cta", "heading_line1", "Ready to Simplify Your");
  const heading2 = get("cta", "heading_line2", "Financial Compliance?");
  const description = get("cta", "description", "Join 1000+ businesses who trust us with their taxation and compliance. Get your free consultation and see how much you could save.");
  const ctaText = get("cta", "cta_text", "Book Free Consultation");
  const phone = get("cta", "phone", "+91 98250 46598");
  const email = get("cta", "email", "info@aky.co.in");
  const hours = get("cta", "hours", "Mon-Sat, 10AM-7PM");
  const whatsapp = get("cta", "whatsapp", "919825046598");

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cream/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl absolute -left-2 -top-16 animate-float" style={{ animationDelay: '0.2s' }}>
            <img src={arpanImg} alt="CA Arpan Yagnik" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float" style={{ animationDelay: '0.4s' }}>
            <img src={ashwinImg} alt="CA Ashwin Yagnik" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl absolute -right-6 -bottom-8 animate-float" style={{ animationDelay: '0.6s' }}>
            <img src={japanImg} alt="CA Japan Yagnik" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 bg-gold/20 rounded-full mb-5 sm:mb-8 backdrop-blur-sm border border-gold/20">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span className="text-cream text-[11px] sm:text-sm font-semibold">{teamBadge}</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            {heading1}
            <span className="text-cream block mt-1">{heading2}</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-10">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-gold" />
              <span className="text-white/80 text-[11px] sm:text-sm">Same-day response</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-gold" />
              <span className="text-white/80 text-[11px] sm:text-sm">100% Confidential</span>
            </div>
          </div>

          {/* CTA buttons - stacked on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gold to-cream text-navy px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex gap-2.5 sm:gap-4">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex-1 sm:flex-none bg-white/10 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 backdrop-blur-sm text-sm"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-green-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-500 transition-all inline-flex items-center justify-center gap-2 shadow-lg text-sm"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact info - compact grid on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 sm:pt-10 border-t border-white/10">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-cream transition-colors group justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-sm text-white/50 font-medium">Call us</div>
                <div className="font-bold text-sm sm:text-lg">{phone}</div>
              </div>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 text-white/70 hover:text-cream transition-colors group justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-sm text-white/50 font-medium">Email us</div>
                <div className="font-bold text-sm sm:text-lg">{email}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 text-white/70 justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-sm text-white/50 font-medium">Office hours</div>
                <div className="font-bold text-sm sm:text-lg">{hours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
