import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { RefreshCw } from "lucide-react";

const data = {
  title: "Concurrent Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: RefreshCw,
  description: "Real-time audit of transactions as they occur, particularly for banking and financial institutions. Our concurrent audit ensures immediate compliance verification and fraud prevention.",
  longDescription: `Concurrent audit is a systematic and timely examination of transactions conducted while they are being processed. Unlike post-transaction audits, concurrent audit provides real-time assurance on the accuracy and compliance of daily operations.

Primarily designed for banking and financial institutions, our concurrent audit services cover all aspects of branch operations - from cash management to loan disbursement, from KYC compliance to regulatory adherence. Our auditors are stationed at the branch or visit daily to review transactions.

This contemporaneous examination allows for immediate detection and correction of errors, preventing them from cascading into larger issues. It serves as a strong deterrent against fraud and ensures that branch operations adhere to the bank's policies and RBI guidelines.`,
  features: [
    "Daily transaction verification and review",
    "Immediate exception reporting mechanism",
    "Fraud prevention and early detection",
    "Real-time compliance assurance",
    "Cash and vault verification",
    "KYC and AML compliance checks"
  ],
  process: [
    { step: "Daily Verification", description: "Review all transactions processed during the day" },
    { step: "Exception Identification", description: "Flag unusual or non-compliant transactions" },
    { step: "Immediate Reporting", description: "Report findings to management within 24 hours" },
    { step: "Corrective Action Tracking", description: "Monitor implementation of corrections" }
  ],
  benefits: [
    "Real-time detection of errors and fraud",
    "Quick resolution of identified issues",
    "Strong fraud deterrence through monitoring",
    "Continuous compliance assurance",
    "Improved branch operational efficiency",
    "Enhanced risk management framework"
  ],
  useCases: [
    { title: "Commercial Bank Branches", description: "High-volume branches of scheduled commercial banks" },
    { title: "Regional Rural Banks", description: "RRB branches requiring close monitoring" },
    { title: "Co-operative Banks", description: "Urban and district co-operative bank branches" },
    { title: "NBFCs", description: "Non-banking financial companies with cash operations" },
    { title: "Treasury Operations", description: "Large treasury and dealing room activities" },
    { title: "Currency Chests", description: "RBI currency chest operations" }
  ],
  faqs: [
    { question: "How is concurrent audit different from internal audit?", answer: "Concurrent audit is performed simultaneously with transactions (real-time), while internal audit is conducted periodically after transactions are completed." },
    { question: "What is the frequency of concurrent audit reporting?", answer: "Concurrent audit reports are typically submitted daily or weekly, depending on branch size and RBI requirements." },
    { question: "Is concurrent audit mandatory for banks?", answer: "RBI mandates concurrent audit for bank branches based on business volume, typically for branches with advances above certain thresholds." },
    { question: "What qualifications are required for concurrent auditors?", answer: "Concurrent auditors must be qualified Chartered Accountants with experience in banking operations." },
    { question: "What areas are covered in concurrent audit?", answer: "Coverage includes cash transactions, loan disbursements, recovery, investment operations, housekeeping, and regulatory compliance." }
  ],
  stats: [
    { number: "50+", label: "Branches Covered" },
    { number: "Daily", label: "Reporting Frequency" },
    { number: "Real-time", label: "Issue Detection" },
    { number: "RBI", label: "Compliant Process" }
  ]
};

const ConcurrentAudit = () => <SubServiceTemplate data={data} />;

export default ConcurrentAudit;
