import { Layout } from "@/components/layout/Layout";
import { Calculator, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "GST Registration",
    description: "Complete assistance with GST registration process including application preparation, documentation, and obtaining GSTIN for new businesses.",
    features: ["New registration application", "Amendment in registration", "Cancellation processing", "Migration support"]
  },
  {
    title: "GST Return Filing",
    description: "Accurate and timely filing of all GST returns including GSTR-1, GSTR-3B, annual returns, and reconciliation with books of accounts.",
    features: ["Monthly/Quarterly GSTR-1 & 3B", "Annual return GSTR-9", "GSTR-9C reconciliation", "ITC reconciliation"]
  },
  {
    title: "GST Audit",
    description: "Comprehensive GST audit services for businesses exceeding the threshold limit, including reconciliation and certification.",
    features: ["GSTR-9C preparation", "ITC verification audit", "Compliance gap analysis", "Audit report certification"]
  },
  {
    title: "GST Advisory & Compliance",
    description: "Strategic GST advisory services covering tax planning, rate classification, and compliance optimization for business operations.",
    features: ["Rate classification advice", "Place of supply determination", "Input tax credit optimization", "Reverse charge compliance"]
  },
  {
    title: "Litigation & Notice Handling",
    description: "Expert representation and handling of GST notices, assessments, and litigation matters before GST authorities.",
    features: ["Notice response drafting", "Assessment proceedings", "Appeal preparation", "Advance ruling applications"]
  }
];

const GSTServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Indirect Tax
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              GST Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              End-to-end Goods and Services Tax solutions from registration to litigation. 
              Our team ensures your business stays compliant while optimizing your GST position.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-grey hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-grey" />
            <Link to="/services" className="text-grey hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 text-grey" />
            <span className="text-navy font-medium">GST Services</span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-grey leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-grey">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Compliance Calendar */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              GST Compliance Calendar
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Stay on top of your GST obligations with our comprehensive compliance management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GSTR-1", due: "11th of next month", desc: "Outward supplies return" },
              { title: "GSTR-3B", due: "20th of next month", desc: "Summary return with tax payment" },
              { title: "GSTR-9", due: "31st December", desc: "Annual return filing" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-gold font-medium mb-2">Due: {item.due}</p>
                <p className="text-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need GST Compliance Support?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts handle your GST compliance while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GSTServices;
