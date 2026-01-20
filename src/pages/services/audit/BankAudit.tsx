import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building } from "lucide-react";

const data = {
  title: "Bank Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: Building,
  description: "Specialized audit services for the banking sector including branch audit, revenue audit, and statutory audit as per RBI guidelines. As an RBI Category-I empaneled firm, we bring deep expertise in bank audits.",
  longDescription: `Bank audit requires specialized knowledge of banking regulations, RBI guidelines, and the unique accounting practices of the financial sector. As an RBI Category-I empaneled firm since 2011, we have the credentials and expertise to handle the most complex banking audit assignments.

Our bank audit services cover the entire spectrum - from branch statutory audits to revenue audits, from IT audits to special purpose audits. We understand the nuances of NPA classification, provisioning norms, income recognition standards, and the extensive disclosure requirements.

Our team has audited branches across public sector banks, private banks, regional rural banks, and cooperative banks. This diverse experience enables us to bring best practices and insights that help banks strengthen their control environment and improve compliance.`,
  features: [
    "Branch financial statement audit",
    "NPA classification and provisioning review",
    "LFAR (Long Form Audit Report) preparation",
    "RBI compliance verification",
    "Income leakage identification",
    "Asset quality review and assessment"
  ],
  process: [
    { step: "Branch Assessment", description: "Understand branch operations, products, and risk areas" },
    { step: "Asset Classification", description: "Review loan classification, NPA identification, and provisioning" },
    { step: "Income Recognition Review", description: "Verify interest income and fee recognition policies" },
    { step: "LFAR Submission", description: "Prepare and submit detailed Long Form Audit Report" }
  ],
  benefits: [
    "Ensure adherence to all RBI guidelines",
    "Accurate NPA identification and provisioning",
    "Detection of income and revenue leakages",
    "Smooth RBI inspections and compliance",
    "Enhanced asset quality assessment",
    "Professional certification and credibility"
  ],
  useCases: [
    { title: "Public Sector Banks", description: "Branch audits of nationalized banks" },
    { title: "Private Sector Banks", description: "Statutory and internal audits of private banks" },
    { title: "Regional Rural Banks", description: "Complete audit coverage for RRBs" },
    { title: "Co-operative Banks", description: "State and district co-operative bank audits" },
    { title: "Payment Banks", description: "Specialized audits for payment banks" },
    { title: "Small Finance Banks", description: "Comprehensive audits for SFBs" }
  ],
  faqs: [
    { question: "What is RBI Category-I empanelment?", answer: "RBI Category-I is the highest category for audit firms empaneled with RBI, allowing them to audit banks with deposits above ₹2,500 crores and top tier branches." },
    { question: "What is LFAR in bank audit?", answer: "Long Form Audit Report (LFAR) is a detailed questionnaire-based report covering various aspects of bank branch operations, submitted alongside the audit report." },
    { question: "How are bank audit assignments allotted?", answer: "Bank audits are allotted by respective banks from the RBI empaneled list of auditors through a transparent process based on ICAI guidelines." },
    { question: "What is the audit period for bank audits?", answer: "Bank statutory audits are conducted for the financial year April-March, with most audit work happening in April-May after year-end." },
    { question: "What is the role of Statutory Central Auditor?", answer: "Statutory Central Auditors (SCAs) audit the bank at the central level and consolidate branch audit reports to provide opinion on overall financial statements." }
  ],
  stats: [
    { number: "100+", label: "Bank Branches Audited" },
    { number: "RBI", label: "Category-I Since 2011" },
    { number: "15+", label: "Years Bank Audit Experience" },
    { number: "All Types", label: "Banks Covered" }
  ]
};

const BankAudit = () => <SubServiceTemplate data={data} />;

export default BankAudit;
