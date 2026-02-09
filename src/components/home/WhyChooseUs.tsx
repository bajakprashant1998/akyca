import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Response Time",
    traditional: "Days to weeks",
    akyco: "Same day response",
  },
  {
    feature: "Technology",
    traditional: "Paper-based records",
    akyco: "Cloud-based systems",
  },
  {
    feature: "Accessibility",
    traditional: "Office hours only",
    akyco: "24/7 portal access",
  },
  {
    feature: "Reporting",
    traditional: "Annual reports",
    akyco: "Real-time dashboards",
  },
  {
    feature: "Communication",
    traditional: "Formal meetings",
    akyco: "WhatsApp & video calls",
  },
  {
    feature: "Pricing",
    traditional: "Hidden charges",
    akyco: "Transparent pricing",
  },
];

const features = [
  "Dedicated relationship manager",
  "Multi-branch presence",
  "Industry specialization",
  "Proactive tax planning",
  "Compliance reminders",
  "Digital document management",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            The AKYCO Difference
          </span>
          <h2 className="section-heading mb-4">
            Traditional CA vs Modern Approach
          </h2>
          <p className="section-subheading mx-auto">
            Experience the difference with our client-centric methodology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Comparison Cards */}
          <div className="flex flex-col gap-4">
            {/* Header for Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <div>Feature</div>
              <div className="text-center">Traditional CA</div>
              <div className="text-center text-navy">The AKYCO Way</div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
              >
                {/* Feature Name */}
                <div className="font-semibold text-navy flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center md:hidden">
                    <span className="text-xs font-bold text-navy">{index + 1}</span>
                  </div>
                  {row.feature}
                </div>

                {/* Traditional Approach */}
                <div className="flex items-center gap-3 md:justify-center p-3 rounded-lg bg-red-50/50 md:bg-transparent border border-red-100 md:border-transparent">
                  <div className="min-w-[20px]">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-sm text-muted-foreground line-through decoration-red-200 decoration-2">
                    {row.traditional}
                  </span>
                </div>

                {/* AKYCO Approach */}
                <div className="flex items-center gap-3 md:justify-center p-3 rounded-lg bg-green-50/50 md:bg-green-50/30 border border-green-100 md:border-green-100/50 relative overflow-hidden">
                  <div className="min-w-[20px] relative z-10">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-navy relative z-10">
                    {row.akyco}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              What Sets Us Apart
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over four decades of experience, we've evolved our practice to meet
              the demands of modern businesses while maintaining the highest standards
              of professional excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};