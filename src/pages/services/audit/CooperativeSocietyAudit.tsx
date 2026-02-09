import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users2 } from "lucide-react";

const data = {
  title: "Co-operative Society Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: Users2,
  description: "Audit of co-operative societies as per the Co-operative Societies Act and state-specific regulations. Our expertise ensures statutory compliance and member confidence in society operations.",
  longDescription: `Co-operative societies operate under a unique regulatory framework that combines elements of business operations with social objectives. Our audit services for co-operatives address both the financial and governance aspects unique to this sector.

We have extensive experience auditing various types of co-operatives including credit societies, housing societies, consumer co-operatives, and agricultural co-operatives. Our team understands the specific requirements of the Gujarat Co-operative Societies Act and other state regulations.

Beyond statutory compliance, we help societies improve their operations, strengthen internal controls, and maintain the trust of their members. Our audit reports include practical recommendations that help societies achieve better classifications and enhance their reputation.`,
  features: [
    "Financial statement audit as per Co-op Act",
    "Membership records verification",
    "Compliance with society bye-laws",
    "Statutory returns preparation assistance",
    "Dividend/interest distribution review",
    "Reserve fund compliance verification"
  ],
  process: [
    { step: "Member Verification", description: "Verify membership records and statutory registers" },
    { step: "Financial Review", description: "Audit income, expenses, loans, and fund management" },
    { step: "Bye-law Compliance", description: "Check adherence to society bye-laws and regulations" },
    { step: "Return Preparation", description: "Assist with statutory return filings and classification" }
  ],
  benefits: [
    "Full regulatory compliance with Co-op Act",
    "Enhanced member confidence and trust",
    "Transparent and accountable operations",
    "Legal protection for management committee",
    "Better audit classification (A, B, C grades)",
    "Smooth regulatory inspections"
  ],
  useCases: [
    { title: "Credit Co-operatives", description: "Urban and rural credit societies providing member loans" },
    { title: "Housing Societies", description: "Residential housing co-operative societies" },
    { title: "Consumer Co-operatives", description: "Retail co-operatives serving members" },
    { title: "Agricultural Co-operatives", description: "Farmer co-operatives for inputs and marketing" },
    { title: "Labour Co-operatives", description: "Worker-owned production co-operatives" },
    { title: "Multi-purpose Societies", description: "Societies offering diverse services to members" }
  ],
  faqs: [
    { question: "Is audit mandatory for all co-operative societies?", answer: "Yes, all registered co-operative societies must undergo annual audit as per the Co-operative Societies Act of the respective state." },
    { question: "Who can conduct co-operative society audit?", answer: "Chartered Accountants empaneled with the state Registrar of Co-operative Societies or the departmental auditors can conduct the audit." },
    { question: "What is the audit classification system?", answer: "Societies are graded into classes (A, B, C, D) based on audit findings. 'A' class societies have clean records while 'D' class indicates serious irregularities." },
    { question: "What are the common compliance issues?", answer: "Common issues include improper maintenance of statutory registers, non-compliance with reserve fund requirements, and irregularities in loan disbursement procedures." },
    { question: "When should the audit be completed?", answer: "The audit must be completed within 6 months from the close of the financial year, and the audit report submitted to the Registrar." }
  ],
  stats: [
    { number: "300+", label: "Societies Audited" },
    { number: "45+", label: "Years Experience" },
    { number: "All Types", label: "Co-operatives Covered" },
    { number: "A-Class", label: "Audit Expertise" }
  ],
  relatedServices: [
    { title: "Statutory Audit", description: "Financial statement audit", link: "/services/audit/statutory-audit" },
    { title: "Tax Audit", description: "Income tax audit u/s 44AB", link: "/services/audit/tax-audit" },
    { title: "Income Tax Return", description: "Society ITR filing", link: "/services/taxation/income-tax-return" },
    { title: "GST Audit", description: "GST compliance verification", link: "/services/gst/audit" },
    { title: "Internal Audit", description: "Control review", link: "/services/audit/internal-audit" },
    { title: "Virtual Accounting", description: "Outsourced accounting", link: "/services/digital/virtual-accounting" }
  ]
};

const CooperativeSocietyAudit = () => <SubServiceTemplate data={data} />;

export default CooperativeSocietyAudit;
