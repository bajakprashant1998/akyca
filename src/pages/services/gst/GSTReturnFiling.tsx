import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileSpreadsheet } from "lucide-react";

const data = {
  title: "GST Return Filing",
  parentService: "GST Services",
  parentServicePath: "/services/gst",
  icon: FileSpreadsheet,
  description: "Accurate and timely filing of all GST returns including GSTR-1, GSTR-3B, annual returns, and reconciliation with books of accounts.",
  longDescription: `GST Return Filing is a critical compliance requirement with multiple returns due every month and quarter. Missing deadlines or filing incorrect returns can result in significant penalties and interest, besides affecting your input tax credit.

Our GST return filing service ensures accurate and timely submission of all required returns. We handle the complete cycle from invoice compilation to reconciliation, ensuring your returns match your books and the portal data.

We use advanced reconciliation tools to match your data with GSTR-2A/2B, identify discrepancies, and maximize your input tax credit claims. Our proactive approach ensures you never miss a deadline or face unnecessary compliance issues.`,
  features: [
    "Monthly GSTR-1 filing (outward supplies)",
    "Monthly GSTR-3B filing (summary return with payment)",
    "Quarterly returns for composition dealers (CMP-08)",
    "QRMP scheme returns for small taxpayers",
    "Annual return GSTR-9 preparation and filing",
    "GSTR-9C reconciliation statement",
    "ITC reconciliation with GSTR-2A/2B",
    "Input tax credit optimization"
  ],
  process: [
    { step: "Data Collection", description: "Collect sales invoices, purchase invoices, and other transaction data" },
    { step: "Invoice Matching", description: "Match data with GSTR-2A/2B for ITC reconciliation" },
    { step: "Return Preparation", description: "Prepare returns with proper HSN codes and tax calculations" },
    { step: "Filing & Payment", description: "File returns and ensure timely tax payment" }
  ],
  benefits: [
    "Zero late fees with timely filing",
    "Maximum input tax credit claimed",
    "Error-free returns avoiding notices",
    "Complete compliance tracking",
    "Proactive deadline reminders",
    "Expert handling of complex cases"
  ],
  useCases: [
    { title: "Regular Taxpayers", description: "Businesses filing monthly GSTR-1 and GSTR-3B" },
    { title: "Composition Dealers", description: "Small businesses under composition scheme" },
    { title: "QRMP Taxpayers", description: "Small taxpayers using quarterly return option" },
    { title: "Exporters", description: "Businesses with export transactions and refund claims" },
    { title: "E-commerce Operators", description: "Platforms with TCS obligations" },
    { title: "Multi-state Businesses", description: "Companies with multiple GSTINs" }
  ],
  faqs: [
    { question: "What is the due date for GSTR-3B?", answer: "For monthly filers, GSTR-3B is due on the 20th of the following month. For QRMP taxpayers, it's on the 22nd or 24th of the month following the quarter. Specific dates vary by state." },
    { question: "What is QRMP scheme?", answer: "Quarterly Return Monthly Payment scheme allows taxpayers with turnover up to ₹5 crores to file GSTR-1 and GSTR-3B quarterly while paying tax monthly. It reduces compliance burden for small businesses." },
    { question: "How is ITC reconciliation done?", answer: "We match your purchase records with GSTR-2A/2B auto-populated data. Differences are identified and vendors are followed up for corrections. This ensures maximum ITC claim without future reversals." },
    { question: "What is GSTR-9 annual return?", answer: "GSTR-9 is the annual return consolidating all monthly/quarterly returns. It's mandatory for regular taxpayers and due by December 31st. GSTR-9C is the reconciliation statement for turnover above ₹5 crores." },
    { question: "What are penalties for late filing?", answer: "Late fee is ₹50 per day (₹25 CGST + ₹25 SGST) subject to maximum of ₹10,000 per return. For nil returns, it's ₹20 per day. Interest at 18% applies on late payment of tax." }
  ],
  stats: [
    { number: "60,000+", label: "Returns Filed Yearly" },
    { number: "100%", label: "On-time Filing" },
    { number: "₹50Cr+", label: "ITC Optimized" },
    { number: "500+", label: "Active Clients" }
  ],
  relatedServices: [
    { title: "GST Registration", description: "New registration and amendment services", link: "/services/gst/registration" },
    { title: "Income Tax Return", description: "Personal and business income tax filing", link: "/services/taxation/income-tax-return" },
    { title: "GST Audit", description: "Reconciliation and audit certification (GSTR-9C)", link: "/services/gst/audit" },
    { title: "TDS Compliance", description: "TDS return filing and payment support", link: "/services/taxation/tds-compliance" },
    { title: "GST Advisory", description: "Compliance optimization", link: "/services/gst/advisory" },
    { title: "Virtual Accounting", description: "Outsourced accounting services", link: "/services/digital/virtual-accounting" }
  ]
};

const GSTReturnFiling = () => <SubServiceTemplate data={data} />;

export default GSTReturnFiling;
