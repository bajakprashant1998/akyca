import { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Shield, Clock, IndianRupee, Quote, Star, ChevronLeft, ChevronRight as ChevRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const caseStudies = [
  { icon: TrendingUp, industry: "Manufacturing", title: "Tax Savings for Textile Manufacturer", metric: "₹45 Lakhs", metricLabel: "Annual Tax Savings", description: "Implemented strategic tax planning and GST optimization for a mid-sized textile manufacturer." },
  { icon: Shield, industry: "IT Services", title: "Startup Compliance Setup", metric: "100%", metricLabel: "Compliance Score", description: "End-to-end compliance setup including DPIIT registration, tax structuring, and ESOP implementation." },
  { icon: Clock, industry: "Healthcare", title: "Audit Completion", metric: "15 Days", metricLabel: "Turnaround Time", description: "Completed comprehensive statutory audit for a hospital chain with multiple locations." },
  { icon: IndianRupee, industry: "Real Estate", title: "Fund Raising Support", metric: "₹10 Cr", metricLabel: "Funds Raised", description: "Provided financial advisory and due diligence support for successful funding round." },
];

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const fallbackTestimonials: Testimonial[] = [
  { quote: "AKYCO has been our trusted CA partner for over 15 years. Their expertise in taxation has saved us lakhs every year.", author: "Rajesh Patel", role: "MD, Gujarat Textiles", rating: 5 },
  { quote: "From incorporation to funding, they handled everything. Truly a one-stop solution for startups.", author: "Priya Sharma", role: "Founder, TechStart Solutions", rating: 5 },
  { quote: "Professional, prompt, and always up-to-date with the latest regulations. Highly recommended!", author: "Dr. Mehta", role: "Director, City Hospital", rating: 5 },
];

export const ResultsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data && data.length > 0) {
        setTestimonials(
          data.map((t) => ({
            quote: t.content,
            author: t.client_name,
            role: [t.designation, t.company].filter(Boolean).join(", ") || "",
            rating: t.rating || 5,
          }))
        );
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Impact</span>
          <h2 className="section-heading mb-4">Real Results for Real Businesses</h2>
          <p className="section-subheading mx-auto">Success stories from clients across industries</p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-5 md:p-6 border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="inline-block px-3 py-1 bg-cream text-navy text-xs font-bold rounded-full mb-4">
                {study.industry}
              </span>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center">
                  <study.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-2xl font-display font-bold text-navy">{study.metric}</div>
                  <div className="text-[11px] md:text-xs text-muted-foreground">{study.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">{study.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials - Single featured card with navigation */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-8">
            <span className="text-gold font-medium text-sm tracking-wider uppercase">Testimonials</span>
          </div>

          <div className="relative bg-navy rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute top-6 right-8 text-gold/10">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-white/90 text-lg md:text-xl italic mb-8 leading-relaxed min-h-[80px]">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cream to-gold text-navy flex items-center justify-center font-bold text-lg shadow-md">
                    {testimonials[activeTestimonial].author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-cream">{testimonials[activeTestimonial].author}</div>
                    <div className="text-sm text-white/60">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex gap-1.5 mx-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-gold w-5' : 'bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group text-base md:text-lg">
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
