import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Receipt } from "lucide-react";

const data = {
  title: "TDS Compliance & Returns",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: Receipt,
  description: "Complete TDS management including computation, deduction, deposit, and quarterly return filing with full compliance assurance.",
  longDescription: `TDS (Tax Deducted at Source) compliance is a critical responsibility for businesses that make payments subject to tax deduction. Non-compliance can result in significant penalties, interest, and even prosecution.

Our TDS compliance services ensure that your organization meets all TDS obligations accurately and on time. We handle the complete cycle from rate determination to quarterly return filing, ensuring zero defaults and complete peace of mind.

We also assist employees and vendors affected by TDS by issuing proper certificates and handling any discrepancies. Our automated tracking system ensures no deadline is missed and all deductions are deposited on time.`,
  features: [
    "TDS rate determination for various payments",
    "Monthly TDS calculation and challan preparation",
    "Timely deposit of TDS to government",
    "Quarterly return filing (24Q, 26Q, 27Q, 27EQ)",
    "Form 16/16A generation and distribution",
    "Lower/Nil deduction certificate applications",
    "TDS default rectification",
    "TDS refund assistance for excess deduction"
  ],
  process: [
    { step: "Rate Determination", description: "Identify correct TDS rate based on nature of payment and recipient status" },
    { step: "Timely Deduction", description: "Deduct TDS accurately at the time of payment or credit" },
    { step: "Challan Deposit", description: "Prepare and deposit TDS challan before due date" },
    { step: "Return Filing", description: "File quarterly returns and issue TDS certificates" }
  ],
  benefits: [
    "Zero default notices from income tax department",
    "Timely compliance avoiding interest and penalties",
    "Happy employees with correct Form 16",
    "Complete documentation for audit",
    "Expert handling of complex TDS scenarios",
    "Reduced compliance burden on your team"
  ],
  useCases: [
    { title: "Employers", description: "Companies deducting TDS on salaries and issuing Form 16" },
    { title: "Contractors", description: "Businesses making payments to contractors under 194C" },
    { title: "Professional Services", description: "Companies paying professionals and consultants" },
    { title: "Rent Payments", description: "Tenants deducting TDS on rent above ₹50,000" },
    { title: "Property Transactions", description: "Buyers deducting TDS on property purchases" },
    { title: "Interest Payments", description: "Banks and companies paying interest" }
  ],
  faqs: [
    { question: "What is the due date for TDS deposit?", answer: "TDS must be deposited by the 7th of the following month. For March, the due date is April 30th. Government deductors have relaxed timelines for certain payments." },
    { question: "What are the consequences of TDS default?", answer: "Late deduction attracts interest at 1% per month. Late deposit after deduction attracts 1.5% per month. Non-deduction can result in disallowance of expense and penalty equal to TDS amount." },
    { question: "When are TDS returns due?", answer: "Quarterly returns are due on July 31, October 31, January 31, and May 31 for Q1, Q2, Q3, and Q4 respectively. Late filing attracts fee of ₹200 per day." },
    { question: "What is Form 16 and Form 16A?", answer: "Form 16 is the TDS certificate for salary issued by employers. Form 16A is for all non-salary TDS (interest, rent, professional fees, etc.). These must be issued within specified timelines." },
    { question: "Can I get a lower TDS certificate?", answer: "Yes, if your actual tax liability is lower than TDS, you can apply to the Assessing Officer for a lower/nil deduction certificate. We assist with the complete application process." }
  ],
  stats: [
    { number: "50,000+", label: "Returns Filed" },
    { number: "100%", label: "On-time Filing" },
    { number: "1,000+", label: "Active Clients" },
    { number: "Zero", label: "Default Notices" }
  ],
  relatedServices: [
    { title: "Income Tax Return", description: "ITR filing services", link: "/services/taxation/income-tax-return" },
    { title: "Tax Audit", description: "Tax audit u/s 44AB", link: "/services/audit/tax-audit" },
    { title: "Corporate Taxation", description: "Corporate tax compliance", link: "/services/taxation/corporate-taxation" },
    { title: "Tax Representation", description: "Notice response support", link: "/services/taxation/tax-representation" },
    { title: "GST Return Filing", description: "Monthly GST compliance", link: "/services/gst/return-filing" },
    { title: "Labour Law Compliance", description: "Payroll and labour laws", link: "/services/compliance/labour-law" }
  ]
};

const TDSCompliance = () => <SubServiceTemplate data={data} />;

export default TDSCompliance;
