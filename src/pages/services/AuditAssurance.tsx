import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { ClipboardCheck, Eye, Shield, FileSearch, Scale } from "lucide-react";

const data: ServiceCategoryData = {
  icon: ClipboardCheck,
  badge: "Assurance Services",
  titleLine1: "Audit &",
  titleLine2: "Assurance",
  description: "Independent, risk-based audit and assurance services that provide stakeholder confidence and actionable insights for organizational improvement.",
  ctaLabel: "Book Audit Consultation",
  highlights: [
    { icon: Eye, title: "Independent Examination", description: "Unbiased, objective audit opinions", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Shield, title: "Risk-Based Approach", description: "Focus on high-risk areas for better coverage", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: FileSearch, title: "Detailed Reporting", description: "Actionable insights and recommendations", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Scale, title: "Compliance Assurance", description: "Adherence to all applicable standards", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Statutory Audit", description: "Independent examination of financial statements as per Companies Act, 2013 with detailed reports.", features: ["Financial statement verification", "Internal control evaluation", "Compliance with accounting standards", "Management letter"], link: "/services/audit/statutory-audit", highlight: "Core Service" },
    { title: "Internal Audit", description: "Systematic evaluation of internal controls, risk management, and governance processes.", features: ["Risk-based audit approach", "Process efficiency review", "Control gap identification", "Improvement recommendations"], link: "/services/audit/internal-audit" },
    { title: "Tax Audit", description: "Mandatory audit under Section 44AB with Form 3CA/3CB and 3CD certification.", features: ["Turnover limit compliance", "Form 3CD preparation", "Tax liability verification", "Clause-wise reporting"], link: "/services/audit/tax-audit" },
    { title: "Concurrent Audit", description: "Real-time audit of transactions for banking and financial institutions.", features: ["Daily transaction review", "Immediate exception reporting", "Fraud prevention checks", "Real-time compliance"], link: "/services/audit/concurrent-audit" },
    { title: "Bank Audit", description: "Specialized audit for banking sector including branch audit and LFAR preparation.", features: ["Branch financial audit", "NPA classification review", "LFAR preparation", "RBI compliance verification"], link: "/services/audit/bank-audit", highlight: "Banking" },
    { title: "Stock Audit", description: "Physical verification and valuation of inventory for banks and businesses.", features: ["Physical stock verification", "Valuation as per standards", "Stock statement reconciliation", "Collateral adequacy"], link: "/services/audit/stock-audit" },
    { title: "Management Audit", description: "Comprehensive review of management practices and organizational effectiveness.", features: ["Strategic objective evaluation", "Management efficiency review", "Organizational structure analysis", "Performance improvement"], link: "/services/audit/management-audit" },
    { title: "Co-operative Society Audit", description: "Audit of co-operative societies as per state-specific regulations.", features: ["Financial statement audit", "Membership records verification", "Compliance with bye-laws", "Statutory returns"], link: "/services/audit/cooperative-society-audit" }
  ],
  stats: [
    { number: "1000+", label: "Audits Completed" },
    { number: "100+", label: "Bank Branches Audited" },
    { number: "45+", label: "Years Experience" },
    { number: "RBI", label: "Category-I Firm" }
  ],
  seo: {
    title: "Audit & Assurance – Statutory, Internal, Tax & Bank Audit",
    description: "Comprehensive audit services: Statutory Audit, Internal Audit, Tax Audit, Bank Audit, Stock Audit. RBI Category-I firm. 1000+ audits completed.",
    keywords: "statutory audit, internal audit, tax audit, bank audit, CA firm Ahmedabad, audit services Gujarat",
    canonicalUrl: "/services/audit"
  }
};

const AuditAssurance = () => <ServiceCategoryTemplate data={data} />;
export default AuditAssurance;
