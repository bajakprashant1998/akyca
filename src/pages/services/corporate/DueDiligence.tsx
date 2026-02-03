import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Search } from "lucide-react";

const DueDiligence = () => {
  const data = {
    title: "Due Diligence Services",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: Search,
    description: "Comprehensive due diligence services covering financial, tax, legal, and operational aspects for M&A transactions, investments, and business decisions.",
    longDescription: `Due diligence is a critical process that helps stakeholders understand the true state of a business before making investment or acquisition decisions. At Ashvin K Yagnik & Co., we provide thorough due diligence services that uncover risks, validate assumptions, and support informed decision-making.

Our due diligence team combines financial expertise with industry knowledge to examine every aspect of a target company. We review financial statements, tax compliances, legal matters, contracts, and operational practices to provide a comprehensive picture of the business.

Whether you're an investor evaluating a startup, a company planning an acquisition, or a private equity fund assessing a target, our due diligence reports provide actionable insights that help you negotiate better deals and mitigate risks effectively.`,
    features: [
      "Financial due diligence and quality of earnings analysis",
      "Tax due diligence covering direct and indirect taxes",
      "Legal due diligence coordination",
      "Compliance due diligence (ROC, labor, environmental)",
      "Operational due diligence",
      "Technology and IP due diligence support",
      "Working capital analysis",
      "Synergy assessment and integration planning"
    ],
    process: [
      { step: "Scope Definition", description: "Define due diligence scope based on transaction objectives" },
      { step: "Data Room Review", description: "Examine documents and records in virtual/physical data room" },
      { step: "Analysis & Investigation", description: "Deep-dive analysis of financial, tax, and compliance matters" },
      { step: "Report Delivery", description: "Comprehensive due diligence report with findings and recommendations" }
    ],
    benefits: [
      "Identify risks before transaction closure",
      "Validate seller's representations",
      "Negotiate better deal terms",
      "Support investment decision-making",
      "Uncover hidden liabilities",
      "Plan post-acquisition integration"
    ],
    useCases: [
      { title: "M&A Transactions", description: "Buyer-side due diligence for mergers and acquisitions" },
      { title: "Private Equity", description: "Investment due diligence for PE/VC funds" },
      { title: "Startup Funding", description: "Due diligence for Series A and beyond funding rounds" },
      { title: "Joint Ventures", description: "Partner evaluation before forming JV" },
      { title: "Business Sale", description: "Vendor due diligence to support sale process" },
      { title: "Bank Financing", description: "Due diligence for large credit facilities" }
    ],
    faqs: [
      { question: "What is typically covered in financial due diligence?", answer: "Financial due diligence covers quality of earnings, working capital analysis, debt and debt-like items, off-balance sheet liabilities, related party transactions, and financial projections review." },
      { question: "How long does due diligence take?", answer: "Timeline depends on the complexity and scope. Typically, a comprehensive due diligence takes 3-6 weeks for mid-sized companies. It can be expedited for smaller transactions." },
      { question: "What documents are typically required?", answer: "Key documents include audited financial statements, tax returns, contracts, employee records, compliance certificates, litigation details, and organizational documents." },
      { question: "What is the difference between buy-side and sell-side due diligence?", answer: "Buy-side due diligence is conducted by the buyer to identify risks. Sell-side (vendor) due diligence is conducted by the seller to proactively address issues and streamline the sale process." },
      { question: "How do you handle confidential information?", answer: "We maintain strict confidentiality through NDAs, secure data rooms, and limited access protocols. Our team follows professional ethics regarding client information." }
    ],
    stats: [
      { number: "100+", label: "Transactions Supported" },
      { number: "₹500Cr+", label: "Deal Value Covered" },
      { number: "50+", label: "Industries Served" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default DueDiligence;
