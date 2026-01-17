import { Layout } from "@/components/layout/Layout";
import { Gavel, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Income Tax Appeals & Assessments",
    description: "Professional representation in income tax assessments and appeals at all levels including CIT(A), ITAT, High Court, and Supreme Court.",
    features: ["Assessment proceedings representation", "CIT(A) appeals preparation", "ITAT representation", "High Court/Supreme Court matters"]
  },
  {
    title: "GST Litigation",
    description: "Expert handling of GST disputes including departmental audits, assessment proceedings, and appellate matters before GST authorities.",
    features: ["Show cause notice response", "Assessment order challenges", "Appellate proceedings", "Advance ruling representation"]
  },
  {
    title: "Tribunal & Commissioner Proceedings",
    description: "Skilled representation before Income Tax Appellate Tribunal, GST Appellate Authority, and Commissioner level proceedings.",
    features: ["Case preparation & research", "Written submissions drafting", "Oral arguments presentation", "Cross-examination support"]
  },
  {
    title: "Notice Drafting & Reply",
    description: "Expert drafting of responses to notices from tax authorities, ensuring comprehensive and legally sound submissions.",
    features: ["Notice analysis & strategy", "Detailed reply preparation", "Supporting document compilation", "Submission coordination"]
  },
  {
    title: "Search & Survey Case Handling",
    description: "Specialized support during and after Income Tax search and survey operations, including statement recording and assessment proceedings.",
    features: ["On-ground support during search", "Post-search assessment handling", "Settlement Commission matters", "Block assessment representation"]
  },
  {
    title: "Black Money & Benami Act Advisory",
    description: "Expert advisory and representation on matters under Black Money Act and Prohibition of Benami Property Transactions Act.",
    features: ["Compliance advisory", "Disclosure assistance", "Show cause notice handling", "Penalty mitigation strategies"]
  }
];

const LitigationRepresentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Gavel className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Legal Support
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Litigation & Representation
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Strong advocacy and expert representation before tax authorities and tribunals. 
              We protect your interests through every stage of the litigation process.
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
            <span className="text-navy font-medium">Litigation & Representation</span>
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

      {/* Our Track Record */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Our Litigation Strength
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Decades of experience representing clients before tax authorities and tribunals.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "500+", desc: "Cases handled" },
              { title: "85%", desc: "Success rate" },
              { title: "45+", desc: "Years experience" },
              { title: "All Levels", desc: "From AO to Supreme Court" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h3 className="font-display font-bold text-3xl text-navy mb-2">{item.title}</h3>
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
            Facing Tax Notice or Assessment?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Don't navigate the complex tax litigation alone. Let our experienced team represent you.
          </p>
          <Link
            to="/contact"
            className="cta-secondary inline-flex items-center gap-2"
          >
            Get Legal Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LitigationRepresentation;
