import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { ClipboardCheck, Search, AlertTriangle, Scale } from "lucide-react";

const data: ServiceCategoryData = {
  icon: ClipboardCheck,
  badge: "Specialized Services",
  titleLine1: "Advanced",
  titleLine2: "Financial Services",
  description: "High-value advisory services for complex financial situations including forensic audit, business valuation, and turnaround advisory.",
  ctaLabel: "Discuss Your Situation",
  highlights: [
    { icon: Search, title: "Forensic Expertise", description: "Fraud detection & investigation", color: "from-red-500/20 to-red-600/10" },
    { icon: AlertTriangle, title: "Turnaround", description: "Business revival advisory", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Scale, title: "Independent Valuation", description: "Multi-methodology approach", color: "from-blue-500/20 to-blue-600/10" },
    { icon: ClipboardCheck, title: "IBC Support", description: "Insolvency resolution", color: "from-teal-500/20 to-teal-600/10" }
  ],
  services: [
    { title: "Risk Assessment & Internal Controls", description: "Comprehensive assessment of business risks and internal control systems.", features: ["Risk mapping", "Control evaluation", "Gap analysis", "Remediation roadmap"], link: "/services/advanced/risk-assessment" },
    { title: "Forensic Audit & Fraud Investigation", description: "Specialized investigations into suspected fraud and financial irregularities.", features: ["Fraud detection", "Digital evidence", "Investigation reporting", "Litigation support"], link: "/services/advanced/forensic-audit", highlight: "Specialized" },
    { title: "Business Valuation", description: "Independent business valuations using multiple methodologies.", features: ["DCF valuation", "Comparable analysis", "Asset-based valuation", "Fairness opinions"], link: "/services/advanced/business-valuation" },
    { title: "IBC Support", description: "Comprehensive support under the Insolvency and Bankruptcy Code.", features: ["CIRP support", "Claims verification", "Resolution advisory", "Liquidation support"], link: "/services/advanced/ibc-support" },
    { title: "Turnaround & Restructuring Advisory", description: "Strategic advisory for distressed businesses including operational turnaround.", features: ["Viability assessment", "Cash flow restructuring", "Debt restructuring", "Operational improvement"], link: "/services/advanced/turnaround-restructuring" },
    { title: "Corporate Governance Advisory", description: "Advisory to strengthen corporate governance practices.", features: ["Governance framework", "Board advisory", "Policy formulation", "ESG integration"], link: "/services/advanced/corporate-governance" }
  ],
  stats: [
    { number: "50+", label: "Forensic Audits" },
    { number: "25+", label: "Turnarounds" },
    { number: "200+", label: "Valuations Done" },
    { number: "45+", label: "Years Experience" }
  ],
  seo: {
    title: "Advanced Financial – Forensic Audit, Valuation, IBC & Turnaround",
    description: "Advanced financial services: Risk Assessment, Forensic Audit, Business Valuation, IBC Support, Turnaround Advisory. Expert CA firm Ahmedabad.",
    keywords: "forensic audit, business valuation, IBC support, turnaround advisory, corporate governance, CA Ahmedabad",
    canonicalUrl: "/services/advanced-financial"
  }
};

const AdvancedFinancial = () => <ServiceCategoryTemplate data={data} />;
export default AdvancedFinancial;
