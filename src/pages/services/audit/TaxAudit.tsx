import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileText } from "lucide-react";

const data = {
  title: "Tax Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: FileText,
  description: "Mandatory audit under Section 44AB of Income Tax Act for businesses exceeding prescribed turnover limits. Our tax audit services ensure accurate Form 3CD reporting and compliance.",
  longDescription: `Tax audit under Section 44AB of the Income Tax Act is a specialized audit focusing on the accuracy of books of accounts and compliance with tax provisions. It provides the Income Tax Department with verified information about the taxpayer's income and deductions.

Our experienced team ensures comprehensive coverage of all clauses in Form 3CD, from basic particulars to complex disclosures like related party transactions, GST reconciliation, and ICDS adjustments. We identify potential issues before they become assessment problems.

With timely completion well before the deadline, we give you peace of mind and avoid last-minute stress. Our detailed working papers support every disclosure, protecting you in case of any scrutiny or assessment proceedings.`,
  features: [
    "Complete Form 3CD clause-wise reporting",
    "Turnover limit compliance verification",
    "Tax liability verification and computation",
    "TDS/TCS compliance review",
    "GST reconciliation with books of accounts",
    "Related party transaction disclosures"
  ],
  process: [
    { step: "Books Verification", description: "Verify maintenance of books as per IT Act requirements" },
    { step: "Clause-wise Examination", description: "Detailed review of all 44 clauses in Form 3CD" },
    { step: "Tax Computation Review", description: "Verify income computation and tax calculations" },
    { step: "Certification & Filing", description: "Sign and upload audit report before due date" }
  ],
  benefits: [
    "Compliance with Income Tax Act requirements",
    "Avoidance of penalty under Section 271B",
    "Professional CA certification and expertise",
    "Identification of tax-saving opportunities",
    "Detailed documentation for future reference",
    "Support for assessment proceedings"
  ],
  useCases: [
    { title: "Businesses (Turnover > ₹1 Cr)", description: "Trading and manufacturing businesses exceeding turnover limit" },
    { title: "Professionals (Receipts > ₹50 L)", description: "Doctors, lawyers, CAs, architects with high receipts" },
    { title: "Presumptive Taxation Opt-Out", description: "Businesses choosing regular taxation over Section 44AD" },
    { title: "Loss Cases", description: "Assessees claiming losses under presumptive taxation scheme" },
    { title: "High Digital Transactions", description: "Businesses with ₹10 Cr turnover and 95% digital payments" },
    { title: "Previous Year Threshold", description: "Businesses that exceeded limit in any previous year" }
  ],
  faqs: [
    { question: "What are the current tax audit limits?", answer: "For business: ₹1 crore (₹10 crores if 95% digital transactions). For professionals: ₹50 lakhs. These limits apply to the previous year's turnover/receipts." },
    { question: "What is the due date for tax audit?", answer: "Tax audit report must be filed by September 30th of the assessment year. For transfer pricing cases, the due date is October 31st." },
    { question: "What is the penalty for not getting tax audit done?", answer: "Penalty is 0.5% of turnover or ₹1,50,000, whichever is less, under Section 271B." },
    { question: "Can the same CA do statutory audit and tax audit?", answer: "Yes, the same CA can conduct both statutory audit and tax audit for a company." },
    { question: "What forms are used for tax audit report?", answer: "Form 3CA (for companies with statutory audit) or Form 3CB (for others) along with Form 3CD containing detailed particulars." }
  ],
  stats: [
    { number: "5,000+", label: "Tax Audits Filed" },
    { number: "100%", label: "On-time Filing" },
    { number: "Zero", label: "Penalty Cases" },
    { number: "45+", label: "Years Experience" }
  ]
};

const TaxAudit = () => <SubServiceTemplate data={data} />;

export default TaxAudit;
