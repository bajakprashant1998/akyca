import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { ClipboardCheck } from "lucide-react";

const data = {
  title: "GST Audit",
  parentService: "GST Services",
  parentServicePath: "/services/gst",
  icon: ClipboardCheck,
  description: "Comprehensive GST audit services for businesses exceeding the threshold limit, including reconciliation and certification.",
  longDescription: `GST Audit (GSTR-9C) is a reconciliation statement that must be certified by a CA for taxpayers with turnover exceeding ₹5 crores. It requires detailed reconciliation between books of accounts and GST returns filed during the year.

Our GST audit service goes beyond mere certification. We conduct a thorough review of your GST compliance, identify discrepancies before they become issues, and ensure your annual return and reconciliation statement are accurate.

We help resolve differences between turnover reported in financial statements and GST returns, ITC claimed vs available, and other common reconciliation items. Our audit adds value by identifying improvement areas in your GST processes.`,
  features: [
    "GSTR-9C reconciliation statement preparation",
    "Books vs returns turnover reconciliation",
    "ITC verification and reconciliation",
    "HSN-wise summary verification",
    "Rate-wise tax reconciliation",
    "Compliance gap identification",
    "Pre-audit health check",
    "Audit report certification by CA"
  ],
  process: [
    { step: "Books Examination", description: "Review books of accounts, ledgers, and supporting documents" },
    { step: "Return Reconciliation", description: "Reconcile books data with filed GST returns" },
    { step: "Discrepancy Resolution", description: "Identify and resolve differences with corrective actions" },
    { step: "Certification", description: "Prepare and certify GSTR-9C with proper disclosures" }
  ],
  benefits: [
    "Compliant certification by practicing CA",
    "Early identification of compliance gaps",
    "Risk mitigation against future notices",
    "Expert sign-off adding credibility",
    "Process improvement recommendations",
    "Defense documentation for audits"
  ],
  useCases: [
    { title: "Large Taxpayers", description: "Businesses with turnover above ₹5 crores requiring GSTR-9C" },
    { title: "Manufacturing Units", description: "Factories with complex input-output reconciliation" },
    { title: "Trading Businesses", description: "Traders with high-volume transactions" },
    { title: "Service Companies", description: "IT, consulting, and other service providers" },
    { title: "Multi-GSTIN Entities", description: "Businesses with multiple state registrations" },
    { title: "E-commerce Sellers", description: "Large sellers with TCS and marketplace complexities" }
  ],
  faqs: [
    { question: "Who needs to file GSTR-9C?", answer: "Taxpayers with aggregate turnover exceeding ₹5 crores in a financial year must file GSTR-9C (self-certified reconciliation statement) along with GSTR-9 annual return." },
    { question: "What is the due date for GST audit?", answer: "GSTR-9 and GSTR-9C are due by December 31st of the following financial year. For example, for FY 2023-24, the due date is December 31, 2024." },
    { question: "What documents are needed for GST audit?", answer: "Complete books of accounts, all GST returns filed, invoices, ITC register, e-way bills, GSTR-2A/2B data, financial statements, and any reconciliation workings." },
    { question: "What are common reconciliation differences?", answer: "Common differences include timing differences in invoice recognition, credit notes, advances, ITC reversals, rate differences, and export/import transactions. We help identify and reconcile all such items." },
    { question: "Can GSTR-9C be revised?", answer: "No, GSTR-9C cannot be revised once filed. This makes it crucial to ensure accuracy before submission. Our thorough review process minimizes errors." }
  ],
  stats: [
    { number: "1,000+", label: "Audits Completed" },
    { number: "100%", label: "Timely Filing" },
    { number: "Zero", label: "Audit Objections" },
    { number: "₹200Cr+", label: "Turnover Audited" }
  ],
  relatedServices: [
    { title: "GST Return Filing", description: "Regular compliance and reconciliation", link: "/services/gst/return-filing" },
    { title: "Statutory Audit", description: "Company audit as per Companies Act", link: "/services/audit/statutory-audit" },
    { title: "Tax Audit", description: "Income tax audit u/s 44AB", link: "/services/audit/tax-audit" },
    { title: "Internal Audit", description: "Process and control review", link: "/services/audit/internal-audit" },
    { title: "GST Litigation", description: "Dispute resolution", link: "/services/gst/litigation" },
    { title: "Corporate Taxation", description: "Corporate tax compliance", link: "/services/taxation/corporate-taxation" }
  ]
};

const GSTAudit = () => <SubServiceTemplate data={data} />;

export default GSTAudit;
