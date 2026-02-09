import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { TrendingUp } from "lucide-react";

const BusinessStructuring = () => {
  const data = {
    title: "Business Structuring & Restructuring",
    parentService: "Financial Advisory Services",
    parentServicePath: "/services/financial-advisory",
    icon: TrendingUp,
    description: "Strategic business structuring advisory for optimal tax efficiency, operational effectiveness, and regulatory compliance across ownership and operating structures.",
    longDescription: `The right business structure can significantly impact your company's tax liability, operational flexibility, and growth potential. At Ashvin K Yagnik & Co., we provide expert business structuring advisory that helps you design or redesign your corporate architecture for maximum efficiency.

Our structuring services cover entity selection, holding company structures, subsidiary arrangements, profit repatriation strategies, and group rationalization. We analyze your business objectives, ownership patterns, and regulatory environment to recommend the optimal structure.

Whether you're starting a new venture, expanding operations, or reorganizing an existing group, our team provides comprehensive advice that balances tax optimization with operational practicality and regulatory compliance.`,
    features: [
      "Entity selection and formation advisory",
      "Holding company structure design",
      "Subsidiary and step-down arrangements",
      "Cross-border structuring",
      "Tax-efficient profit repatriation",
      "Group rationalization and consolidation",
      "Family business structuring",
      "Succession planning structures"
    ],
    process: [
      { step: "Objective Analysis", description: "Understand business goals, ownership patterns, and constraints" },
      { step: "Structure Design", description: "Develop alternative structures with tax and operational analysis" },
      { step: "Implementation Planning", description: "Create detailed implementation roadmap and timelines" },
      { step: "Execution Support", description: "Assist with legal documentation and regulatory filings" }
    ],
    benefits: [
      "Tax-efficient business operations",
      "Clear ownership and control patterns",
      "Flexibility for future growth and exits",
      "Asset protection and risk segregation",
      "Smooth succession and wealth transfer",
      "Regulatory compliance across jurisdictions"
    ],
    useCases: [
      { title: "New Business Setup", description: "Choosing optimal entity type and ownership structure" },
      { title: "Group Reorganization", description: "Consolidating or rationalizing multiple entities" },
      { title: "International Expansion", description: "Structuring for cross-border operations" },
      { title: "Family Offices", description: "Creating structures for wealth management" },
      { title: "Private Equity", description: "Structuring investments and exits" },
      { title: "Joint Ventures", description: "Designing JV structures with partners" }
    ],
    faqs: [
      { question: "What factors determine the best business structure?", answer: "Key factors include business objectives, ownership patterns, tax implications, regulatory requirements, liability protection, funding needs, and exit plans." },
      { question: "When should a holding company structure be used?", answer: "Holding structures are beneficial for managing multiple businesses, protecting assets, facilitating acquisitions, planning succession, and optimizing dividend flows." },
      { question: "Can existing structures be reorganized tax-efficiently?", answer: "Yes, various provisions under Income Tax Act and Companies Act allow tax-neutral reorganizations through mergers, demergers, slump sales, and share swaps." },
      { question: "How long does restructuring typically take?", answer: "Timeline varies based on complexity. Simple restructuring may take 2-3 months, while complex group reorganizations involving NCLT may take 9-12 months." },
      { question: "What about stamp duty on restructuring?", answer: "Stamp duty implications vary by state and transaction type. Mergers and demergers may have reduced stamp duty. We analyze stamp duty impact as part of structuring advice." }
    ],
    stats: [
      { number: "100+", label: "Structures Designed" },
      { number: "₹500Cr+", label: "Value Restructured" },
      { number: "30%", label: "Avg Tax Savings" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Corporate Taxation", description: "Tax efficient structuring", link: "/services/taxation/corporate-taxation" },
      { title: "International Taxation", description: "Cross-border structuring", link: "/services/taxation/international-taxation" },
      { title: "Valuation Services", description: "Business valuation", link: "/services/financial/valuation-services" },
      { title: "Due Diligence", description: "Transaction support", link: "/services/corporate/due-diligence" },
      { title: "Mergers & Acquisitions", description: "M&A Advisory", link: "/services/corporate/mergers-acquisitions" },
      { title: "FEMA Compliance", description: "Regulatory compliance", link: "/services/compliance/rbi-fema-sebi-compliance" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default BusinessStructuring;
