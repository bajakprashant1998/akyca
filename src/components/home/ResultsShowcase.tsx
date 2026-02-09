import { ArrowRight, TrendingUp, Shield, Clock, IndianRupee, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: TrendingUp,
    industry: "Manufacturing",
    title: "Tax Savings for Textile Manufacturer",
    metric: "₹45 Lakhs",
    metricLabel: "Annual Tax Savings",
    description: "Implemented strategic tax planning and GST optimization for a mid-sized textile manufacturer.",
  },
  {
    icon: Shield,
    industry: "IT Services",
    title: "Startup Compliance Setup",
    metric: "100%",
    metricLabel: "Compliance Score",
    description: "End-to-end compliance setup including DPIIT registration, tax structuring, and ESOP implementation.",
  },
  {
    icon: Clock,
    industry: "Healthcare",
    title: "Audit Completion",
    metric: "15 Days",
    metricLabel: "Turnaround Time",
    description: "Completed comprehensive statutory audit for a hospital chain with multiple locations.",
  },
  {
    icon: IndianRupee,
    industry: "Real Estate",
    title: "Fund Raising Support",
    metric: "₹10 Cr",
    metricLabel: "Funds Raised",
    description: "Provided financial advisory and due diligence support for successful funding round.",
  },
];

const testimonials = [
  {
    quote: "AKYCO has been our trusted CA partner for over 15 years. Their expertise in taxation has saved us lakhs every year.",
    author: "Rajesh Patel",
    role: "MD, Gujarat Textiles",
  },
  {
    quote: "From incorporation to funding, they handled everything. Truly a one-stop solution for startups.",
    author: "Priya Sharma",
    role: "Founder, TechStart Solutions",
  },
  {
    quote: "Professional, prompt, and always up-to-date with the latest regulations. Highly recommended!",
    author: "Dr. Mehta",
    role: "Director, City Hospital",
  },
];

export const ResultsShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="section-heading mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="section-subheading mx-auto">
            Success stories from clients across industries
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Industry Badge */}
              <span className="inline-block px-3 py-1 bg-cream text-navy text-xs font-medium rounded-full mb-4">
                {study.industry}
              </span>

              {/* Icon & Metric */}
              <div className="flex items-start justify-between mb-4">
                <study.icon className="w-10 h-10 text-gold" />
                <div className="text-right">
                  <div className="text-2xl font-display font-bold text-navy">
                    {study.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {study.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="section-heading">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy p-8 rounded-2xl shadow-lg border border-navy-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-8 text-gold/20 group-hover:text-gold/40 transition-colors">
                  <Quote className="w-10 h-10" />
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
                  <div className="w-10 h-10 rounded-full bg-cream text-navy flex items-center justify-center font-bold text-lg">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors group"
          >
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};