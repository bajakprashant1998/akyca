import { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Shield, Clock, IndianRupee, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  { icon: TrendingUp, industry: "Manufacturing", title: "Tax Savings for Textile Manufacturer", metric: "₹45 Lakhs", metricLabel: "Annual Tax Savings", description: "Implemented strategic tax planning and GST optimization for a mid-sized textile manufacturer." },
  { icon: Shield, industry: "IT Services", title: "Startup Compliance Setup", metric: "100%", metricLabel: "Compliance Score", description: "End-to-end compliance setup including DPIIT registration, tax structuring, and ESOP implementation." },
  { icon: Clock, industry: "Healthcare", title: "Audit Completion", metric: "15 Days", metricLabel: "Turnaround Time", description: "Completed comprehensive statutory audit for a hospital chain with multiple locations." },
  { icon: IndianRupee, industry: "Real Estate", title: "Fund Raising Support", metric: "₹10 Cr", metricLabel: "Funds Raised", description: "Provided financial advisory and due diligence support for successful funding round." },
];

const testimonials = [
  { quote: "AKYCO has been our trusted CA partner for over 15 years. Their expertise in taxation has saved us lakhs every year.", author: "Rajesh Patel", role: "MD, Gujarat Textiles" },
  { quote: "From incorporation to funding, they handled everything. Truly a one-stop solution for startups.", author: "Priya Sharma", role: "Founder, TechStart Solutions" },
  { quote: "Professional, prompt, and always up-to-date with the latest regulations. Highly recommended!", author: "Dr. Mehta", role: "Director, City Hospital" },
];

export const ResultsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTestimonialsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    if (testRef.current) observer2.observe(testRef.current);
    return () => { observer.disconnect(); observer2.disconnect(); };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Impact</span>
          <h2 className="section-heading mb-4">Real Results for Real Businesses</h2>
          <p className="section-subheading mx-auto">Success stories from clients across industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="inline-block px-3 py-1 bg-cream text-navy text-xs font-bold rounded-full mb-4">
                {study.industry}
              </span>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center">
                  <study.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-display font-bold text-navy">{study.metric}</div>
                  <div className="text-xs text-muted-foreground">{study.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">{study.title}</h3>
              <p className="text-sm text-muted-foreground">{study.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testRef}>
          <div className={`text-center mb-12 transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-navy p-8 rounded-3xl shadow-lg border border-navy-dark hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/30 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-white/90 italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cream to-gold text-navy flex items-center justify-center font-bold text-lg shadow-md">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-cream">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group text-lg">
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
