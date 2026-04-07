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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">Our Impact</span>
          <h2 className="section-heading mb-3 sm:mb-4">Real Results for Real Businesses</h2>
          <p className="section-subheading mx-auto">Success stories from clients across industries</p>
        </div>

        {/* Case Studies - horizontal scroll on mobile */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-10 sm:mb-16 md:mb-20">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2 sm:pb-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500 group min-w-[260px] sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="inline-block px-2.5 py-0.5 bg-cream text-navy text-[10px] sm:text-xs font-bold rounded-full mb-3 sm:mb-4">
                  {study.industry}
                </span>
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center">
                    <study.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-display font-bold text-navy">{study.metric}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{study.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-navy transition-colors leading-tight">{study.title}</h3>
                <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-5 sm:mb-8">
            <span className="text-gold font-medium text-xs sm:text-sm tracking-wider uppercase">Testimonials</span>
          </div>

          <div className="relative bg-navy rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute top-4 right-5 sm:top-6 sm:right-8 text-gold/10">
              <Quote className="w-10 h-10 sm:w-16 sm:h-16" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-0.5 mb-3 sm:mb-5">
                {[...Array(testimonials[activeTestimonial]?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-white/90 text-base sm:text-lg md:text-xl italic mb-5 sm:mb-8 leading-relaxed min-h-[60px] sm:min-h-[80px]">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cream to-gold text-navy flex items-center justify-center font-bold text-base sm:text-lg shadow-md flex-shrink-0">
                    {testimonials[activeTestimonial].author[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-cream text-sm sm:text-base truncate">{testimonials[activeTestimonial].author}</div>
                    <div className="text-xs sm:text-sm text-white/60 truncate">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex gap-1 mx-1 sm:mx-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-gold w-4 sm:w-5' : 'bg-white/30 hover:bg-white/50 w-1.5 sm:w-2'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group text-sm sm:text-base md:text-lg">
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
