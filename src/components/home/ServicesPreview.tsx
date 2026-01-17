import { Link } from "react-router-dom";
import { 
  FileText, 
  Calculator, 
  ClipboardCheck, 
  Building2, 
  TrendingUp, 
  Shield,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Taxation Services",
    description: "Complete income tax, TDS, and international taxation solutions for individuals and businesses.",
  },
  {
    icon: Calculator,
    title: "GST Services",
    description: "GST registration, return filing, audit, advisory, and litigation support.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Statutory, internal, tax, concurrent, bank, and management audit services.",
  },
  {
    icon: Building2,
    title: "Company Services",
    description: "Company incorporation, LLP formation, ROC compliance, and secretarial services.",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Business structuring, project finance, fund raising, and virtual CFO services.",
  },
  {
    icon: Shield,
    title: "Compliance Services",
    description: "RBI, FEMA, SEBI, NBFC compliance and regulatory advisory services.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="section-heading mb-4">
            Comprehensive CA Services
          </h2>
          <p className="section-subheading mx-auto">
            Full spectrum chartered accountancy and financial consulting services 
            tailored for businesses, startups, MSMEs, corporates, and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                <service.icon className="w-7 h-7 text-navy group-hover:text-cream transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-grey text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
