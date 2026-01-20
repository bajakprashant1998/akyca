import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Eye } from "lucide-react";

const data = {
  title: "Internal Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: Eye,
  description: "Systematic evaluation of internal controls, risk management, and governance processes. Our internal audit services provide independent assurance on your business operations and help improve organizational effectiveness.",
  longDescription: `Internal audit serves as an independent, objective assurance function designed to add value and improve an organization's operations. Our approach goes beyond traditional compliance checking to become a strategic partner in risk management.

We employ a risk-based methodology that focuses audit resources on areas of highest risk and impact. Our team brings diverse expertise across industries, enabling us to benchmark your practices against best-in-class standards and provide practical recommendations.

Our internal audit services cover operational audits, IT audits, compliance audits, and special investigations. We work closely with management and the audit committee to ensure our findings translate into actionable improvements.`,
  features: [
    "Risk-based audit approach aligned with business objectives",
    "Process efficiency review and optimization",
    "Control gap identification and remediation",
    "Fraud prevention and detection procedures",
    "Operational audit coverage",
    "IT controls and cybersecurity assessment"
  ],
  process: [
    { step: "Risk Assessment", description: "Identify key risk areas and prioritize audit focus" },
    { step: "Audit Planning", description: "Develop comprehensive audit plan and timeline" },
    { step: "Fieldwork Execution", description: "Perform detailed testing and document findings" },
    { step: "Reporting & Follow-up", description: "Present findings and track implementation" }
  ],
  benefits: [
    "Enhanced internal control environment",
    "Operational efficiency improvements",
    "Proactive risk identification and management",
    "Fraud deterrence through continuous monitoring",
    "Better governance and compliance",
    "Cost savings through process optimization"
  ],
  useCases: [
    { title: "Listed Companies", description: "Mandatory internal audit under Companies Act" },
    { title: "Large Corporates", description: "Companies with turnover exceeding ₹200 crores" },
    { title: "Banks & NBFCs", description: "Financial institutions requiring robust controls" },
    { title: "Manufacturing Units", description: "Multi-location operations needing centralized oversight" },
    { title: "Retail Chains", description: "Businesses with multiple outlets and high cash transactions" },
    { title: "IT Companies", description: "Organizations needing IT controls and SOC compliance" }
  ],
  faqs: [
    { question: "Is internal audit mandatory for all companies?", answer: "Internal audit is mandatory for listed companies, companies with turnover of ₹200 crores or more, and companies with outstanding loans/borrowings of ₹100 crores or more." },
    { question: "How is internal audit different from statutory audit?", answer: "Statutory audit focuses on financial statement verification, while internal audit focuses on operational efficiency, risk management, and internal controls improvement." },
    { question: "What is the frequency of internal audit?", answer: "Internal audit is typically conducted quarterly or monthly, depending on the size and complexity of the organization." },
    { question: "Who should the internal auditor report to?", answer: "Internal auditor should report to the Audit Committee to maintain independence from management." },
    { question: "Can the same firm do statutory and internal audit?", answer: "No, the same firm cannot conduct both statutory audit and internal audit for a company as per Companies Act, 2013." }
  ],
  stats: [
    { number: "500+", label: "Internal Audits" },
    { number: "100+", label: "Clients Served" },
    { number: "30%", label: "Avg. Efficiency Gains" },
    { number: "24/7", label: "Support Available" }
  ]
};

const InternalAudit = () => <SubServiceTemplate data={data} />;

export default InternalAudit;
