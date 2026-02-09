import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building2 } from "lucide-react";

const data = {
  title: "Corporate Taxation",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: Building2,
  description: "Comprehensive corporate tax services including advance tax computation, MAT/AMT planning, and compliance with corporate tax regulations.",
  longDescription: `Corporate Taxation requires specialized expertise to navigate the complex regulatory landscape while optimizing tax efficiency. Our corporate tax services are designed to help businesses of all sizes manage their tax obligations effectively.

We provide end-to-end support from quarterly advance tax calculations to annual return filing. Our team ensures compliance with all corporate tax provisions including Minimum Alternate Tax (MAT), Alternate Minimum Tax (AMT), and dividend distribution requirements.

Our strategic approach helps corporations minimize their effective tax rate while maintaining complete compliance. We work closely with your finance team to integrate tax planning into business decisions, ensuring tax-efficient operations throughout the year.`,
  features: [
    "Quarterly advance tax computation and planning",
    "MAT credit optimization and utilization",
    "AMT calculations for non-corporate entities",
    "Corporate tax return filing (ITR-6)",
    "Transfer pricing compliance support",
    "Tax provision calculations for financial reporting",
    "Dividend taxation and DDT planning",
    "Tax loss carry forward optimization"
  ],
  process: [
    { step: "Quarterly Advance Tax", description: "Calculate and plan advance tax instalments to avoid interest penalties" },
    { step: "MAT/AMT Computation", description: "Compute Minimum Alternate Tax and optimize credit utilization" },
    { step: "Credit Utilization", description: "Track and maximize use of available MAT credits against regular tax" },
    { step: "Annual Compliance", description: "Prepare and file corporate tax returns with all required schedules" }
  ],
  benefits: [
    "Optimized cash flow through advance tax planning",
    "Zero penalty for late payment or short payment",
    "Maximum MAT credit recovery",
    "Tax-compliant operations with proper documentation",
    "Strategic alignment of tax with business goals",
    "Expert representation before tax authorities"
  ],
  useCases: [
    { title: "Private Limited Companies", description: "Growing businesses needing comprehensive tax management" },
    { title: "Public Limited Companies", description: "Listed entities with complex compliance requirements" },
    { title: "Startups", description: "New companies navigating corporate tax for the first time" },
    { title: "Subsidiaries of MNCs", description: "Indian subsidiaries requiring local tax compliance" },
    { title: "LLPs", description: "Limited Liability Partnerships with unique tax provisions" },
    { title: "Manufacturing Companies", description: "Entities with significant capital investments and depreciation" }
  ],
  faqs: [
    { question: "What is the corporate tax rate in India?", answer: "The standard rate is 30% for companies with turnover above ₹400 crores. Companies with turnover up to ₹400 crores pay 25%. New manufacturing companies can opt for 15% under Section 115BAB. Effective rates are higher with surcharge and cess." },
    { question: "When are advance tax instalments due?", answer: "Advance tax is payable in four instalments: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15." },
    { question: "What is MAT and how does it work?", answer: "MAT (Minimum Alternate Tax) ensures that companies with book profits pay at least 15% tax even if regular tax is lower. MAT paid can be carried forward for 15 years and set off against future regular tax liability." },
    { question: "How can corporate tax liability be reduced?", answer: "Through proper expense planning, depreciation optimization, tax holiday utilization, MAT credit management, and strategic timing of transactions. Our experts identify all available opportunities for your specific situation." },
    { question: "What are the consequences of non-compliance?", answer: "Non-compliance can result in penalties, interest on delayed payments, prosecution in severe cases, and reputational damage. We ensure complete compliance to avoid any such consequences." }
  ],
  stats: [
    { number: "500+", label: "Corporate Clients" },
    { number: "₹200Cr+", label: "Tax Optimized" },
    { number: "100%", label: "Compliance Record" },
    { number: "15+", label: "Industry Sectors" }
  ],
  relatedServices: [
    { title: "Statutory Audit", description: "Companies Act compliance and audit", link: "/services/audit/statutory-audit" },
    { title: "Tax Audit", description: "Tax audit u/s 44AB", link: "/services/audit/tax-audit" },
    { title: "TDS Compliance", description: "TDS return filing", link: "/services/taxation/tds-compliance" },
    { title: "International Taxation", description: "Cross-border tax advisory", link: "/services/taxation/international-taxation" },
    { title: "GST Registration", description: "GST registration for companies", link: "/services/gst/registration" },
    { title: "Company Incorporation", description: "Company formation services", link: "/services/corporate/company-incorporation" }
  ]
};

const CorporateTaxation = () => <SubServiceTemplate data={data} />;

export default CorporateTaxation;
