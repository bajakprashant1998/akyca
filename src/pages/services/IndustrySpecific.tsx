import { Layout } from "@/components/layout/Layout";
import { Factory, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Real Estate & RERA Compliance",
    description: "Comprehensive services for real estate developers including RERA registration, project accounting, and regulatory compliance.",
    features: ["RERA project registration", "Project-wise accounting", "Sales deed compliance", "GST on real estate transactions"]
  },
  {
    title: "Healthcare & Hospital Accounting",
    description: "Specialized accounting and compliance services for hospitals, clinics, and healthcare providers covering industry-specific regulations.",
    features: ["Revenue recognition practices", "Cost center accounting", "Clinical establishment compliance", "Healthcare GST advisory"]
  },
  {
    title: "Manufacturing Industry Audit",
    description: "Industry-specific audit services for manufacturing units covering inventory, cost accounting, and production process compliance.",
    features: ["Cost audit services", "Inventory valuation", "Production cost analysis", "Transfer pricing for manufacturers"]
  },
  {
    title: "Export Import (EXIM) Advisory",
    description: "Complete advisory for export-import businesses including customs compliance, duty optimization, and foreign exchange management.",
    features: ["Export benefits optimization", "Customs duty advisory", "DGFT schemes assistance", "Letter of Credit advisory"]
  },
  {
    title: "E-commerce Compliance",
    description: "Comprehensive compliance services for e-commerce businesses covering GST (including TCS), marketplace regulations, and FDI compliance.",
    features: ["E-commerce GST compliance", "TCS provisions handling", "FDI policy compliance", "Marketplace agreement review"]
  },
  {
    title: "Educational Institution Advisory",
    description: "Specialized services for schools, colleges, and educational trusts covering accounting standards and regulatory requirements.",
    features: ["Fee accounting systems", "Trust compliance", "UGC/AICTE requirements", "Section 12A/80G benefits"]
  },
  {
    title: "NGO & Trust Management",
    description: "Complete management services for NGOs and charitable trusts including compliance, fundraising support, and governance advisory.",
    features: ["FCRA compliance", "CSR fund management", "Impact reporting", "Governance framework setup"]
  }
];

const IndustrySpecific = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Factory className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Sector Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Industry-Specific Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Tailored solutions for diverse industries. We understand the unique challenges and 
              regulatory requirements of different sectors and provide specialized expertise.
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
            <span className="text-navy font-medium">Industry-Specific Services</span>
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

      {/* Industries We Serve */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Deep expertise across multiple sectors with specialized teams for each industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Real Estate", "Healthcare", "Manufacturing", "IT & Software",
              "E-commerce", "Education", "NGO & Trusts", "Retail",
              "Hospitality", "Logistics", "Pharma", "Textiles"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="font-medium text-navy">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need Industry-Specific Expertise?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our specialized team to address your industry's unique requirements.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Get Industry Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndustrySpecific;
