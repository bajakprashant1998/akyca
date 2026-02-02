import { Layout } from "@/components/layout/Layout";
import { Building2, CheckCircle, ChevronRight, ArrowRight, Shield, FileText, Users, Target, Award, BadgeCheck, TrendingUp, Scale, Briefcase, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Company Incorporation",
    description: "End-to-end company incorporation services including Private Limited, Public Limited, One Person Company (OPC), and Section 8 Companies.",
    features: ["Name availability check", "DSC & DIN procurement", "MOA/AOA drafting", "Certificate of Incorporation"],
    process: ["Name reservation (RUN)", "DSC & DIN application", "SPICe+ form filing", "Incorporation certificate"],
    benefits: ["Quick incorporation", "Expert documentation", "Compliance from day one", "Post-incorporation support"],
    link: "/contact"
  },
  {
    title: "LLP Formation",
    description: "Complete Limited Liability Partnership formation services with drafting of LLP Agreement and compliance with LLP Act, 2008.",
    features: ["DPIN & DSC acquisition", "LLP Agreement drafting", "Registration filing", "PAN & TAN application"],
    process: ["Name reservation", "Partner DSC/DPIN", "Agreement drafting", "Registration completion"],
    benefits: ["Limited liability protection", "Tax efficiency", "Operational flexibility", "Lower compliance burden"],
    link: "/contact"
  },
  {
    title: "ROC Compliance",
    description: "Annual and event-based ROC compliance including filing of annual returns, financial statements, and various e-forms.",
    features: ["Annual return filing (MGT-7)", "Financial statement filing (AOC-4)", "Event-based compliance", "Director KYC updation"],
    process: ["Compliance calendar", "Document preparation", "Board resolution drafting", "Form filing & tracking"],
    benefits: ["Zero penalties", "Clean compliance record", "Timely reminders", "Complete peace of mind"],
    link: "/contact"
  },
  {
    title: "Secretarial Services",
    description: "Comprehensive company secretarial services including board meeting management, minutes preparation, and statutory register maintenance.",
    features: ["Board meeting coordination", "Minutes & resolutions drafting", "Statutory registers maintenance", "Share transfer management"],
    process: ["Meeting scheduling", "Agenda preparation", "Minutes documentation", "Register updation"],
    benefits: ["Professional documentation", "Legal compliance", "Smooth governance", "Audit-ready records"],
    link: "/contact"
  },
  {
    title: "Due Diligence",
    description: "Thorough legal, financial, and tax due diligence for mergers, acquisitions, investments, and business transactions.",
    features: ["Financial due diligence", "Tax compliance review", "Legal documentation review", "Risk assessment reports"],
    process: ["Scope definition", "Data collection", "Detailed analysis", "Report presentation"],
    benefits: ["Informed decisions", "Risk identification", "Valuation support", "Transaction confidence"],
    link: "/contact"
  },
  {
    title: "Mergers & Acquisitions Support",
    description: "Advisory and execution support for mergers, demergers, acquisitions, and business restructuring transactions.",
    features: ["Valuation advisory", "Transaction structuring", "Regulatory approvals", "Post-merger integration support"],
    process: ["Structure planning", "Valuation", "Documentation", "Regulatory filing"],
    benefits: ["Optimized structure", "Tax efficiency", "Smooth transition", "Value maximization"],
    link: "/contact"
  }
];

const keyHighlights = [
  { icon: Building2, title: "500+ Companies Incorporated", description: "Across various industries and structures" },
  { icon: Shield, title: "100% Compliance Rate", description: "Never missed a filing deadline" },
  { icon: Users, title: "Expert Team", description: "CS, CA & legal professionals" },
  { icon: Scale, title: "End-to-End Support", description: "From incorporation to exit" }
];

const entityComparison = [
  { 
    type: "Private Limited", 
    minMembers: "2", 
    liability: "Limited", 
    compliance: "High",
    bestFor: "Startups, Funded businesses",
    color: "bg-navy"
  },
  { 
    type: "LLP", 
    minMembers: "2", 
    liability: "Limited", 
    compliance: "Medium",
    bestFor: "Professional services, SMEs",
    color: "bg-gold"
  },
  { 
    type: "OPC", 
    minMembers: "1", 
    liability: "Limited", 
    compliance: "Low",
    bestFor: "Solo entrepreneurs",
    color: "bg-grey"
  },
  { 
    type: "Partnership", 
    minMembers: "2", 
    liability: "Unlimited", 
    compliance: "Low",
    bestFor: "Small businesses, Family",
    color: "bg-cream-dark"
  }
];

const stats = [
  { number: "500+", label: "Companies Incorporated" },
  { number: "100+", label: "M&A Transactions" },
  { number: "1,000+", label: "Annual Filings" },
  { number: "99%", label: "Client Satisfaction" }
];

const CompanyCorporate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-navy" />
              </div>
              <span className="text-cream font-medium text-sm tracking-wider uppercase">
                Corporate Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Company & Corporate Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Complete corporate solutions from company formation to complex restructuring. 
              We help businesses establish, maintain compliance, and grow through strategic corporate actions.
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
            <span className="text-navy font-medium">Company & Corporate Services</span>
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

      {/* Entity Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Choose the Right Business Structure
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Compare different business entities to find the best fit for your venture
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-display">Entity Type</th>
                  <th className="px-6 py-4 text-center font-display">Min Members</th>
                  <th className="px-6 py-4 text-center font-display">Liability</th>
                  <th className="px-6 py-4 text-center font-display">Compliance</th>
                  <th className="px-6 py-4 text-left font-display">Best For</th>
                </tr>
              </thead>
              <tbody>
                {entityComparison.map((entity, index) => (
                  <tr key={index} className="border-b border-border hover:bg-cream/20 transition-colors">
                    <td className="px-6 py-4 font-semibold text-navy">{entity.type}</td>
                    <td className="px-6 py-4 text-center text-grey">{entity.minMembers}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${entity.liability === 'Limited' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {entity.liability}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        entity.compliance === 'Low' ? 'bg-green-100 text-green-700' : 
                        entity.compliance === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'
                      }`}>
                        {entity.compliance}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-grey">{entity.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Our Corporate Services
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Comprehensive solutions for all your corporate needs
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
                          <Briefcase className="w-5 h-5 text-cream" />
                        </div>
                        <span className="text-cream/80 text-sm font-medium">Service {String(index + 1).padStart(2, '0')}</span>
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
                      Get Started <ArrowRight className="w-4 h-4" />
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

      {/* Incorporation Timeline */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-navy mb-4">
              Company Incorporation Timeline
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Get your company incorporated in as little as 7-10 working days
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { day: "Day 1-2", task: "Name Approval", icon: FileText },
              { day: "Day 2-3", task: "DSC & DIN", icon: Shield },
              { day: "Day 3-5", task: "SPICe+ Filing", icon: FileCheck },
              { day: "Day 5-7", task: "ROC Processing", icon: Building2 },
              { day: "Day 7-10", task: "Incorporation", icon: Award }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-border relative">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-gold font-bold text-sm mb-1">{item.day}</p>
                <h3 className="font-display font-semibold text-navy">{item.task}</h3>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ChevronRight className="w-4 h-4 text-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to Start Your Business?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the incorporation process and ongoing compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              Start Incorporation
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

export default CompanyCorporate;
