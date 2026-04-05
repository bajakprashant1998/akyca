import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export const AboutCTA = () => {
  const { get } = useSiteContent("about");

  const heading = get("cta", "heading", "Ready to Work With Us?");
  const description = get("cta", "description", "Let our 45+ years of experience work for your business. Schedule a free consultation today.");
  const buttonText = get("cta", "button_text", "Book a Consultation");
  const phone = get("cta", "phone", "+917926564153");

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">{heading}</h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-cream text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-cream-dark transition-colors group"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};
