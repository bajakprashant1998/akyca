import { useState, useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

const services = [
  "Income Tax", "GST", "Audit", "Company Registration",
  "Financial Advisory", "Compliance", "Startup Services", "Other",
];

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    content: (
      <>
        <a href="tel:+919825046598" className="text-grey hover:text-navy transition-colors block">+91 98250 46598</a>
        <a href="tel:07926304598" className="text-grey hover:text-navy transition-colors block">079 – 26304598</a>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:info@aky.co.in" className="text-grey hover:text-navy transition-colors">info@aky.co.in</a>
    ),
  },
  {
    icon: MapPin,
    title: "Head Office",
    content: (
      <p className="text-grey text-sm">
        502, 5th Floor, 3rd Eye Vision,<br />
        I.I.M./A.M.A. Road, Nr. Panjrapol Circle,<br />
        Ahmedabad – 380015
      </p>
    ),
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: (
      <p className="text-grey text-sm">
        Monday - Saturday<br />
        10:00 AM - 7:00 PM
      </p>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thank you for your inquiry! We will get back to you within 24 hours.", { duration: 5000 });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

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
                <span className="text-gold font-medium text-sm tracking-wider uppercase">Get In Touch</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Contact<br />
                <span className="text-gold">Us</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-8">
                Have questions or need professional assistance? Reach out to our
                team of expert chartered accountants. We're here to help.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919825046598"
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919825046598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-cream/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <card.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-navy mb-2">{card.title}</h3>
                  {card.content}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Why Contact Us */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Why Reach Out</span>
                <h2 className="text-3xl font-display font-bold text-navy mb-6">
                  Expert Guidance Awaits
                </h2>
                <p className="text-grey leading-relaxed mb-8">
                  Whether you need help with tax filing, business registration, or financial strategy, our expert team provides personalized solutions tailored to your needs.
                </p>
              </AnimatedSection>

              <div className="space-y-4">
                {[
                  "Free initial consultation",
                  "Response within 24 hours",
                  "45+ years of expertise",
                  "RBI Category-I recognized firm",
                  "Personalized solutions",
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 50}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream/30 transition-colors">
                      <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-grey font-medium">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={300}>
                <div className="mt-8 bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="font-display font-semibold">Quick Response Guaranteed</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
                  <h2 className="text-2xl font-display font-semibold text-navy mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-grey mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          placeholder="+91 98250 46598"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-navy hover:bg-navy/90 text-white font-semibold transition-all hover:scale-[1.02]"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>Send Message <Send className="w-5 h-5 ml-2" /></>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Branches CTA */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-border text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold text-navy mb-4">Visit Our Offices</h2>
              <p className="text-grey mb-8 max-w-2xl mx-auto text-lg">
                We have offices in Ahmedabad and Mehsana, Gujarat. Find the branch nearest to you.
              </p>
              <Link
                to="/branches"
                className="bg-navy hover:bg-navy/90 text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                View Branch Locations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
