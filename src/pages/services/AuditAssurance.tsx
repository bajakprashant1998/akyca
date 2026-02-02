import { Layout } from "@/components/layout/Layout";
import { ClipboardCheck, CheckCircle, ChevronRight, ArrowRight, Shield, Eye, FileSearch, Target, Award, BadgeCheck, TrendingUp, Users, Scale, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Statutory Audit",
    description: "Independent examination of financial statements as per Companies Act, 2013. We provide comprehensive audit services with detailed reports and management recommendations.",
    features: ["Financial statement verification", "Internal control evaluation", "Compliance with accounting standards", "Management letter with recommendations"],
    process: ["Audit planning & risk assessment", "Understanding internal controls", "Substantive testing", "Reporting & recommendations"],
    benefits: ["Stakeholder confidence", "Regulatory compliance", "Fraud detection", "Improved controls"],
    link: "/services/audit/statutory-audit"
  },
  {
    title: "Internal Audit",
    description: "Systematic evaluation of internal controls, risk management, and governance processes to improve organizational efficiency and effectiveness.",
    features: ["Risk-based audit approach", "Process efficiency review", "Control gap identification", "Improvement recommendations"],
    process: ["Risk assessment", "Audit planning", "Fieldwork execution", "Reporting & follow-up"],
    benefits: ["Enhanced controls", "Operational efficiency", "Risk mitigation", "Process improvement"],
    link: "/services/audit/internal-audit"
  },
  {
    title: "Tax Audit",
    description: "Mandatory audit under Section 44AB of Income Tax Act for businesses exceeding prescribed turnover limits, with Form 3CA/3CB and 3CD certification.",
    features: ["Turnover limit compliance", "Form 3CD preparation", "Tax liability verification", "Clause-wise detailed reporting"],
    process: ["Books verification", "Clause-wise examination", "Tax computation review", "Certification & filing"],
    benefits: ["Compliance assured", "Penalty avoidance", "Expert certification", "Tax optimization"],
    link: "/services/audit/tax-audit"
  },
  {
    title: "Concurrent Audit",
    description: "Real-time audit of transactions as they occur, particularly for banking and financial institutions to ensure immediate compliance.",
    features: ["Daily transaction review", "Immediate exception reporting", "Fraud prevention checks", "Real-time compliance assurance"],
    process: ["Daily verification", "Exception identification", "Immediate reporting", "Corrective action tracking"],
    benefits: ["Real-time detection", "Immediate correction", "Fraud prevention", "Continuous monitoring"],
    link: "/services/audit/concurrent-audit"
  },
  {
    title: "Bank Audit",
    description: "Specialized audit services for banking sector including branch audit, revenue audit, and concurrent audit as per RBI guidelines.",
    features: ["Branch financial audit", "NPA classification review", "LFAR preparation", "RBI compliance verification"],
    process: ["Branch assessment", "Asset classification", "Income recognition review", "LFAR submission"],
    benefits: ["RBI compliance", "Accurate classification", "Revenue leakage detection", "Regulatory confidence"],
    link: "/services/audit/bank-audit"
  },
  {
    title: "Stock Audit",
    description: "Physical verification and valuation of inventory for banks and businesses, ensuring accurate stock records and collateral security.",
    features: ["Physical stock verification", "Valuation as per standards", "Stock statement reconciliation", "Collateral adequacy assessment"],
    process: ["Physical verification", "Valuation review", "Record reconciliation", "Report preparation"],
    benefits: ["Accurate valuation", "Collateral security", "Fraud detection", "Reliable statements"],
    link: "/services/audit/stock-audit"
  },
  {
    title: "Management Audit",
    description: "Comprehensive review of management practices, organizational effectiveness, and strategic alignment to enhance business performance.",
    features: ["Strategic objective evaluation", "Management efficiency review", "Organizational structure analysis", "Performance improvement suggestions"],
    process: ["Objective assessment", "Process evaluation", "Gap analysis", "Recommendations"],
    benefits: ["Strategic alignment", "Efficiency gains", "Better governance", "Informed decisions"],
    link: "/services/audit/management-audit"
  },
  {
    title: "Co-operative Society Audit",
    description: "Audit of co-operative societies as per the Co-operative Societies Act and state-specific regulations with statutory compliance.",
    features: ["Financial statement audit", "Membership records verification", "Compliance with bye-laws", "Statutory returns assistance"],
    process: ["Member verification", "Financial review", "Bye-law compliance", "Return preparation"],
    benefits: ["Regulatory compliance", "Member confidence", "Transparent operations", "Legal protection"],
    link: "/services/audit/cooperative-society-audit"
  }
];

const keyHighlights = [
  { icon: Eye, title: "Independent Examination", description: "Unbiased, objective audit opinions" },
  { icon: Shield, title: "Risk-Based Approach", description: "Focus on high-risk areas for better coverage" },
  { icon: FileSearch, title: "Detailed Reporting", description: "Actionable insights and recommendations" },
  { icon: Scale, title: "Compliance Assurance", description: "Adherence to all applicable standards" }
];

const auditApproach = [
  { step: "01", title: "Planning", desc: "Understanding business, risk assessment, materiality determination", icon: Target },
  { step: "02", title: "Execution", desc: "Control testing, substantive procedures, evidence gathering", icon: FileSearch },
  { step: "03", title: "Reporting", desc: "Findings discussion, audit opinion, management letter", icon: FileCheck },
  { step: "04", title: "Follow-up", desc: "Implementation support, remediation tracking", icon: TrendingUp }
];

const stats = [
  { number: "1,000+", label: "Audits Completed" },
  { number: "100+", label: "Bank Branches Audited" },
  { number: "45+", label: "Years Experience" },
  { number: "RBI", label: "Category-I Firm" }
];

const AuditAssurance = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Assurance Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Audit & Assurance
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Comprehensive audit services that provide stakeholders with confidence in financial reporting. 
              Our rigorous methodologies ensure accuracy, compliance, and actionable insights.
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
            <span className="text-navy font-medium">Audit & Assurance</span>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Our Audit Approach
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              A systematic, risk-based methodology that ensures thorough examination and valuable insights
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {auditApproach.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-cream/50 rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-all h-full">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold text-gold">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="text-grey text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Our Audit Services
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Comprehensive audit solutions for all types of organizations
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 block group"
              >
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <ClipboardCheck className="w-5 h-5 text-cream" />
                        </div>
                        <span className="text-cream/80 text-sm font-medium">Audit Type {String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-8 h-8 text-cream/50 group-hover:text-cream group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <p className="text-grey leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-cream/30 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-gold" />
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
                    
                    <div className="bg-navy/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-navy" />
                        Our Process
                      </h4>
                      <ul className="space-y-3">
                        {service.process.map((step, sIndex) => (
                          <li key={sIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {sIndex + 1}
                            </span>
                            <span className="text-grey">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gold/5 rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-gold" />
                        Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-grey">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <span className="text-navy font-medium group-hover:text-gold transition-colors flex items-center gap-2">
                      View Full Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-white mb-4">
              Our Audit Credentials
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RBI Panel Badge */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  RBI Empaneled
                </div>
                <h2 className="text-3xl font-display font-bold text-navy mb-4">
                  Category-I Audit Firm with RBI
                </h2>
                <p className="text-grey mb-6">
                  We are proud to be empaneled as a Category-I audit firm with the Reserve Bank of India since 2011, 
                  authorized to conduct statutory audits of banks and financial institutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Authorized for bank statutory audits",
                    "Concurrent audit of major bank branches",
                    "NBFC audit specialists",
                    "RBI compliance expertise"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-8 text-center">
                <Shield className="w-20 h-20 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">RBI Category-I</h3>
                <p className="text-white/80">Since 2011</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Need Professional Audit Services?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with our experienced audit team to ensure financial accuracy and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              Schedule Audit Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919825046598"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-2"
            >
              Call: +91 98250 46598
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuditAssurance;
