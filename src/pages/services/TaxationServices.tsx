import { Layout } from "@/components/layout/Layout";
import { FileText, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Income Tax Return Filing (Individual & Corporate)",
    description: "Expert preparation and timely filing of income tax returns for individuals, businesses, and corporations. We ensure maximum deductions and compliance with all regulations.",
    features: ["Accurate computation of taxable income", "Identification of eligible deductions", "E-filing with acknowledgment", "Assessment follow-up support"]
  },
  {
    title: "Tax Planning & Advisory",
    description: "Strategic tax planning to minimize your tax liability legally while maximizing wealth creation. Customized solutions based on your financial goals.",
    features: ["Annual tax planning strategies", "Investment-linked tax savings", "Retirement planning optimization", "Business structure optimization"]
  },
  {
    title: "Corporate Taxation",
    description: "Comprehensive corporate tax services including advance tax computation, MAT/AMT planning, and compliance with corporate tax regulations.",
    features: ["Advance tax calculations", "MAT credit optimization", "Transfer pricing compliance", "Corporate tax return filing"]
  },
  {
    title: "International Taxation",
    description: "Expert guidance on cross-border transactions, DTAA benefits, and international tax compliance for businesses with global operations.",
    features: ["DTAA treaty benefits", "Cross-border transaction structuring", "Expatriate taxation", "Foreign income compliance"]
  },
  {
    title: "NRI Taxation",
    description: "Specialized tax services for Non-Resident Indians covering residential status determination, foreign income taxation, and DTAA benefits.",
    features: ["Residential status determination", "Repatriation planning", "FEMA compliance", "Double taxation relief"]
  },
  {
    title: "TDS Compliance & Returns",
    description: "Complete TDS management including computation, deduction, deposit, and quarterly return filing with full compliance assurance.",
    features: ["TDS calculation & deduction", "Quarterly return filing", "Form 16/16A generation", "Lower deduction certificates"]
  },
  {
    title: "Representation before Tax Authorities",
    description: "Professional representation before Income Tax authorities for assessments, appeals, and dispute resolution at all levels.",
    features: ["Scrutiny assessment handling", "Appeal preparation & filing", "Settlement commission matters", "Tribunal representation"]
  }
];

const TaxationServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Core Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Taxation Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Comprehensive taxation solutions for individuals and businesses. From income tax return filing 
              to complex international taxation, our expert team ensures maximum compliance and optimization 
              of your tax position.
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
            <span className="text-navy font-medium">Taxation Services</span>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Why Choose AKYCO for Taxation Services?
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              With 45+ years of expertise, we bring unparalleled knowledge and personalized attention to your taxation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "Qualified CAs with specialized tax expertise" },
              { title: "Timely Filing", desc: "100% on-time filing record" },
              { title: "Maximum Savings", desc: "Optimize deductions legally" },
              { title: "Full Support", desc: "End-to-end assessment support" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h3 className="font-display font-semibold text-navy mb-2">{item.title}</h3>
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
            Need Expert Tax Assistance?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our tax experts to optimize your tax position and ensure complete compliance.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TaxationServices;
