import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, MessageCircle, Calendar, Users, Clock, Shield, Sparkles } from "lucide-react";
import arpanImg from "@/assets/team/arpan-yagnik.png";
import ashwinImg from "@/assets/team/ashwin-yagnik.png";
import japanImg from "@/assets/team/japan-yagnik.png";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cream/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Floating Team - desktop only */}
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
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gold/20 rounded-full mb-6 md:mb-8 backdrop-blur-sm border border-gold/20">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-cream text-xs md:text-sm font-semibold">9+ Expert CAs Ready to Help</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5 md:mb-6 leading-tight">
            Ready to Simplify Your
            <span className="text-cream block mt-1 md:mt-2">Financial Compliance?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 1000+ businesses who trust us with their taxation and compliance. 
            Get your free consultation and see how much you could save.
          </p>

          {/* Urgency */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 text-gold" />
              <span className="text-white/80 text-xs md:text-sm">Same-day response</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Shield className="w-3.5 md:w-4 h-3.5 md:h-4 text-gold" />
              <span className="text-white/80 text-xs md:text-sm">100% Confidential</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gold to-cream text-navy px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919825046598"
              className="bg-white/10 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919825046598"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-green-500 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 pt-8 md:pt-10 border-t border-white/10">
            <a href="tel:+919825046598" className="flex items-center gap-3 md:gap-4 text-white/70 hover:text-cream transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-white/50 font-medium">Call us</div>
                <div className="font-bold text-base md:text-lg">+91 98250 46598</div>
              </div>
            </a>
            <a href="mailto:info@aky.co.in" className="flex items-center gap-3 md:gap-4 text-white/70 hover:text-cream transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-white/50 font-medium">Email us</div>
                <div className="font-bold text-base md:text-lg">info@aky.co.in</div>
              </div>
            </a>
            <div className="flex items-center gap-3 md:gap-4 text-white/70">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-white/50 font-medium">Office hours</div>
                <div className="font-bold text-base md:text-lg">Mon-Sat, 10AM-7PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
