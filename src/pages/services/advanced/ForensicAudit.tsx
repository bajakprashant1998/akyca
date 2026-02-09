import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Search } from "lucide-react";

const ForensicAudit = () => {
  const data = {
    title: "Forensic Audit & Fraud Investigation",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: Search,
    description: "Specialized investigation services for suspected fraud, financial irregularities, and misconduct.",
    longDescription: `When fraud is suspected or discovered, organizations need swift, professional investigation to understand what happened, quantify losses, identify perpetrators, and preserve evidence for legal action. At Ashvin K Yagnik & Co., we provide comprehensive forensic audit services.

Our forensic team combines accounting expertise with investigative skills. We use data analytics, document examination, and interview techniques to uncover the truth. Our reports are designed to withstand legal scrutiny and support prosecution.

We handle investigations with utmost discretion, understanding the sensitivity and potential legal implications. Our objective is to help you understand what happened and how to prevent recurrence.`,
    features: [
      "Fraud investigation",
      "Financial irregularity review",
      "Data analytics and mining",
      "Document examination",
      "Interview and inquiry",
      "Asset tracing",
      "Litigation support",
      "Expert witness testimony"
    ],
    process: [
      { step: "Engagement Setup", description: "Define scope, secure evidence, and plan investigation" },
      { step: "Evidence Gathering", description: "Collect documents, data, and conduct interviews" },
      { step: "Analysis", description: "Analyze evidence to establish facts" },
      { step: "Reporting", description: "Document findings in legally defensible format" }
    ],
    benefits: [
      "Truth discovery",
      "Loss quantification",
      "Legal evidence",
      "Recovery support",
      "Prevention insights",
      "Expert testimony"
    ],
    useCases: [
      { title: "Employee Fraud", description: "Investigating employee misconduct" },
      { title: "Vendor Fraud", description: "Procurement fraud investigation" },
      { title: "Financial Statement Fraud", description: "Accounting manipulation detection" },
      { title: "Asset Misappropriation", description: "Theft and embezzlement investigation" },
      { title: "Corruption", description: "Bribery and kickback investigation" },
      { title: "Cyber Fraud", description: "Digital fraud investigation" }
    ],
    faqs: [
      { question: "How do you preserve evidence for legal proceedings?", answer: "We follow strict chain of custody protocols, document all evidence handling, and create legally admissible reports. Our work can support criminal prosecution and civil recovery." },
      { question: "Can you help with recovery of stolen assets?", answer: "Yes, we help trace misappropriated assets and work with legal counsel to pursue recovery through civil and criminal proceedings." },
      { question: "How discrete is your investigation?", answer: "Extremely discrete. We operate on need-to-know basis, secure all evidence, and maintain strict confidentiality throughout the engagement." },
      { question: "What happens after investigation?", answer: "We present findings to you and recommend next steps - could include termination, prosecution, recovery actions, or control improvements. We support implementation." }
    ],
    stats: [
      { number: "50+", label: "Investigations" },
      { number: "₹100Cr+", label: "Fraud Uncovered" },
      { number: "85%", label: "Recovery Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Risk Assessment", description: "Control gaps", link: "/services/advanced/risk-assessment" },
      { title: "Internal Audit", description: "Regular checks", link: "/services/audit/internal-audit" },
      { title: "Due Diligence", description: "Investigative DD", link: "/services/financial/due-diligence" },
      { title: "Business Valuation", description: "Loss quantification", link: "/services/advanced/business-valuation" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ForensicAudit;
