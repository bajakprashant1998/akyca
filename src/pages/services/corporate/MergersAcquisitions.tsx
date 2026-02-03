import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { GitMerge } from "lucide-react";

const MergersAcquisitions = () => {
  const data = {
    title: "Mergers & Acquisitions",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: GitMerge,
    description: "End-to-end M&A advisory services including deal structuring, valuation, due diligence coordination, regulatory approvals, and post-merger integration support.",
    longDescription: `Mergers and acquisitions are complex transactions that require careful planning, expert execution, and thorough understanding of regulatory requirements. At Ashvin K Yagnik & Co., we provide comprehensive M&A advisory services that guide you through every stage of the transaction.

Our M&A services encompass deal sourcing support, valuation, structuring, due diligence coordination, negotiation support, regulatory filings, and post-merger integration. We work closely with legal advisors and investment bankers to ensure seamless transaction execution.

Whether you're acquiring a competitor, merging with a partner, or restructuring your group companies, our experienced team provides strategic advice and operational support that maximizes deal value while minimizing risks and regulatory complications.`,
    features: [
      "Deal structuring and tax optimization",
      "Valuation using multiple methodologies",
      "Due diligence coordination and management",
      "NCLT scheme filing for mergers",
      "Share purchase agreement review",
      "Regulatory approvals (CCI, SEBI, RBI)",
      "Post-merger integration support",
      "Demerger and business restructuring"
    ],
    process: [
      { step: "Strategy & Structuring", description: "Define transaction objectives and optimal deal structure" },
      { step: "Valuation & Negotiation", description: "Determine fair value and support deal negotiations" },
      { step: "Execution & Compliance", description: "Execute transaction documents and obtain regulatory approvals" },
      { step: "Integration", description: "Support post-merger integration and synergy realization" }
    ],
    benefits: [
      "Strategic guidance throughout transaction",
      "Tax-efficient deal structuring",
      "Smooth regulatory approvals",
      "Risk identification and mitigation",
      "Synergy identification and capture",
      "Successful post-merger integration"
    ],
    useCases: [
      { title: "Horizontal Mergers", description: "Combining with competitors for market consolidation" },
      { title: "Vertical Integration", description: "Acquiring suppliers or distributors" },
      { title: "Group Restructuring", description: "Consolidating or rationalizing group structure" },
      { title: "Private Equity Exit", description: "Supporting M&A exit for PE-backed companies" },
      { title: "Cross-border M&A", description: "Inbound and outbound international transactions" },
      { title: "Distressed Acquisitions", description: "Acquiring stressed or NCLT companies" }
    ],
    faqs: [
      { question: "What is the typical timeline for a merger?", answer: "A merger through NCLT scheme typically takes 6-9 months from filing to final order. Share purchase acquisitions can be completed in 2-3 months depending on regulatory requirements." },
      { question: "What regulatory approvals are required for M&A?", answer: "Depending on the transaction, approvals may be required from NCLT, CCI (for large deals), SEBI (for listed companies), RBI (for foreign investment), and sector-specific regulators." },
      { question: "How is the merger ratio determined?", answer: "Merger ratio is determined based on valuation of both companies using methods like DCF, comparable transactions, and book value. Independent valuers' report is required for NCLT schemes." },
      { question: "What is the tax treatment of mergers?", answer: "Qualifying mergers under Section 2(1B) are tax-neutral. Accumulated losses and depreciation of the transferor company can be carried forward. Stamp duty and other transaction taxes may apply." },
      { question: "Can a loss-making company be merged?", answer: "Yes, a loss-making company can be merged. Accumulated losses can be carried forward post-merger if conditions under Section 72A are satisfied." }
    ],
    stats: [
      { number: "50+", label: "Transactions Completed" },
      { number: "₹1000Cr+", label: "Deal Value Advised" },
      { number: "100%", label: "NCLT Approval Rate" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default MergersAcquisitions;
