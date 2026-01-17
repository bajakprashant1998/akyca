import { Layout } from "@/components/layout/Layout";
import { Laptop, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Cloud Accounting (Tally, Zoho, QuickBooks)",
    description: "Setup and management of cloud-based accounting solutions for real-time financial visibility and remote access capabilities.",
    features: ["Tally Prime setup & support", "Zoho Books implementation", "QuickBooks configuration", "Multi-location access setup"]
  },
  {
    title: "Automation of Finance Systems",
    description: "Streamline financial processes through automation including invoice processing, expense management, and reconciliations.",
    features: ["Invoice automation", "Expense digitization", "Bank reconciliation automation", "Payment processing systems"]
  },
  {
    title: "MIS Reports & Dashboards",
    description: "Custom Management Information System reports and interactive dashboards for data-driven decision making.",
    features: ["Custom report development", "Real-time dashboards", "KPI tracking systems", "Executive summaries"]
  },
  {
    title: "Virtual Accounting Department",
    description: "Complete outsourced accounting function providing day-to-day bookkeeping, accounts payable/receivable, and financial reporting.",
    features: ["Daily bookkeeping", "AP/AR management", "Monthly closings", "Financial statement preparation"]
  },
  {
    title: "ERP Implementation Advisory",
    description: "Advisory and support for ERP implementation projects ensuring smooth transition and optimal configuration.",
    features: ["Requirement assessment", "Vendor evaluation support", "Implementation oversight", "Post-implementation support"]
  },
  {
    title: "Data Migration & Cleanup",
    description: "Clean migration of financial data between systems and cleanup of legacy data for accurate financial records.",
    features: ["Data mapping & validation", "Legacy system extraction", "Duplicate elimination", "Data quality assurance"]
  }
];

const DigitalAccounting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Laptop className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Technology Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Digital & Modern Accounting
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Leverage technology to transform your finance function. From cloud accounting to 
              automation, we help businesses modernize their financial operations for efficiency and insights.
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
            <span className="text-navy font-medium">Digital & Modern Accounting</span>
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

      {/* Technology Partners */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Technology We Work With
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Expertise across leading accounting and ERP platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {["Tally Prime", "Zoho Books", "QuickBooks", "SAP B1", "Microsoft Dynamics", "Odoo"].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border border-border">
                <p className="font-medium text-navy text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Benefits of Digital Transformation
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "70%", subtitle: "Time Savings", desc: "In routine accounting tasks" },
              { title: "Real-time", subtitle: "Visibility", desc: "Into financial performance" },
              { title: "99%", subtitle: "Accuracy", desc: "With automated processes" },
              { title: "24/7", subtitle: "Access", desc: "From anywhere, anytime" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display font-bold text-4xl text-navy mb-1">{item.title}</h3>
                <p className="font-semibold text-gold mb-2">{item.subtitle}</p>
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
            Ready to Modernize Your Finance Function?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you leverage technology for better efficiency and insights.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Get Technology Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalAccounting;
