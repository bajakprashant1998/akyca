import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Simplify Your
            <span className="text-cream block">Financial Compliance?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Get expert guidance from our team of experienced chartered accountants. 
            Whether you're a startup or an established business, we're here to help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center gap-2 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919825046598"
              className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+919825046598" className="flex items-center gap-3 text-white/80 hover:text-cream transition-colors">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>+91 98250 46598</span>
            </a>
            <a href="mailto:info@aky.co.in" className="flex items-center gap-3 text-white/80 hover:text-cream transition-colors">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@aky.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
