import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { ClipboardCheck } from "lucide-react";

const data = {
  title: "Statutory Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: ClipboardCheck,
  description: "Independent examination of financial statements as per Companies Act, 2013. Our statutory audit services ensure compliance with accounting standards and provide stakeholders with reliable financial information.",
  longDescription: `Statutory audit is a legally mandated examination of financial statements to ensure they present a true and fair view of the company's financial position. As experienced Chartered Accountants with 45+ years of practice, we conduct thorough audits that go beyond mere compliance.

Our audit approach is risk-based and tailored to your business. We understand your industry, identify key risk areas, and focus our procedures where they matter most. Our team uses modern audit techniques including data analytics to provide deeper insights.

Beyond the audit opinion, we provide valuable recommendations through our management letter, helping you strengthen controls, improve processes, and enhance governance. Our RBI Category-I status reflects our expertise and credibility in the audit profession.`,
  features: [
    "Financial statement verification and certification",
    "Internal control evaluation and testing",
    "Compliance with Indian Accounting Standards (Ind AS)",
    "Management letter with recommendations",
    "Going concern assessment",
    "Fraud risk assessment procedures"
  ],
  process: [
    { step: "Audit Planning", description: "Understanding the business, risk assessment, and materiality determination" },
    { step: "Control Testing", description: "Evaluation of internal controls and identification of key risks" },
    { step: "Substantive Testing", description: "Detailed testing of transactions and account balances" },
    { step: "Reporting", description: "Audit opinion, management letter, and recommendations" }
  ],
  benefits: [
    "Stakeholder confidence through independent assurance",
    "Regulatory compliance with Companies Act",
    "Early identification of fraud and irregularities",
    "Improved internal controls through recommendations",
    "Enhanced credibility with banks and investors",
    "Expert guidance on accounting matters"
  ],
  useCases: [
    { title: "Private Limited Companies", description: "Annual statutory audit as per Companies Act requirements" },
    { title: "Public Limited Companies", description: "Comprehensive audit with enhanced disclosure requirements" },
    { title: "Subsidiaries", description: "Audit aligned with group reporting requirements" },
    { title: "Companies Seeking Finance", description: "Audited statements required by banks and investors" },
    { title: "Listed Entities", description: "Audit meeting SEBI and stock exchange requirements" },
    { title: "Section 8 Companies", description: "Audit of non-profit companies with specific requirements" }
  ],
  faqs: [
    { question: "When is statutory audit mandatory?", answer: "Statutory audit is mandatory for all companies registered under Companies Act, 2013, regardless of turnover. Only Section 8 companies with turnover less than ₹50 lakhs have exemption options." },
    { question: "What is the timeline for completing statutory audit?", answer: "Statutory audit should be completed before the AGM, which must be held within 6 months from the end of the financial year. For most companies, this means September 30th." },
    { question: "What documents are required for statutory audit?", answer: "Key documents include trial balance, bank statements, invoices, agreements, minutes of meetings, statutory registers, and previous year audit reports." },
    { question: "How long should audit working papers be retained?", answer: "Audit working papers should be retained for at least 8 years from the date of the audit report." },
    { question: "Can the auditor be changed mid-term?", answer: "Auditor can be removed before term completion only with Central Government approval after special resolution by shareholders." }
  ],
  stats: [
    { number: "1,000+", label: "Audits Completed" },
    { number: "45+", label: "Years Experience" },
    { number: "RBI", label: "Category-I Firm" },
    { number: "100%", label: "Compliance Record" }
  ]
};

const StatutoryAudit = () => <SubServiceTemplate data={data} />;

export default StatutoryAudit;
