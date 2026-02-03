import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Calculator } from "lucide-react";

const ValuationServices = () => {
  const data = {
    title: "Valuation Services",
    parentService: "Financial Advisory Services",
    parentServicePath: "/services/financial-advisory",
    icon: Calculator,
    description: "Professional business valuation services for M&A, fund raising, ESOP, litigation support, regulatory compliance, and strategic planning purposes.",
    longDescription: `Accurate business valuation is critical for informed decision-making in transactions, compliance, and strategic planning. At Ashvin K Yagnik & Co., our registered valuers provide independent and objective valuation reports that meet regulatory requirements and stand up to scrutiny.

Our valuation services cover businesses, shares, intangible assets, financial instruments, and specialized assets. We employ multiple valuation methodologies including DCF, comparable company analysis, precedent transactions, and asset-based approaches to arrive at well-supported conclusions.

Whether you need valuation for fund raising, M&A transactions, tax compliance, ESOP grants, or litigation support, our experienced valuers provide timely and professional reports that serve your specific purpose.`,
    features: [
      "Business and enterprise valuation",
      "Share valuation for tax and regulatory purposes",
      "Intangible asset valuation (brand, IP, goodwill)",
      "ESOP valuation for fair value reporting",
      "Purchase price allocation (PPA)",
      "Impairment testing support",
      "Fairness opinions",
      "Litigation support and expert witness"
    ],
    process: [
      { step: "Scope Definition", description: "Understand valuation purpose and select appropriate standards" },
      { step: "Data Collection", description: "Gather financial, operational, and market information" },
      { step: "Analysis & Valuation", description: "Apply appropriate methodologies and cross-checks" },
      { step: "Report Delivery", description: "Prepare detailed valuation report with supporting analysis" }
    ],
    benefits: [
      "Independent and objective assessment",
      "Registered valuer credentials",
      "Multiple methodology approach",
      "Regulatory compliant reports",
      "Defensible conclusions",
      "Timely delivery"
    ],
    useCases: [
      { title: "Fund Raising", description: "Pre-money valuation for investor negotiations" },
      { title: "M&A Transactions", description: "Fair value assessment for acquisitions" },
      { title: "ESOP Grants", description: "Fair market value for stock option grants" },
      { title: "Tax Compliance", description: "Valuation for income tax and stamp duty" },
      { title: "Financial Reporting", description: "PPA and impairment testing" },
      { title: "Dispute Resolution", description: "Expert valuation for shareholder disputes" }
    ],
    faqs: [
      { question: "What valuation methodologies do you use?", answer: "We use multiple methodologies including Discounted Cash Flow (DCF), Comparable Company Analysis, Precedent Transactions, and Asset-Based approaches, selecting the most appropriate for each situation." },
      { question: "Do you have registered valuers?", answer: "Yes, we have IBBI registered valuers for Securities or Financial Assets who can provide valuation reports for regulatory and compliance purposes." },
      { question: "How long does a valuation take?", answer: "Standard valuations take 2-3 weeks. Complex valuations involving multiple entities, intangibles, or detailed analysis may take 4-6 weeks." },
      { question: "What documents are required for valuation?", answer: "Key documents include financial statements, projections, cap table, shareholder agreements, key contracts, and industry/market data." },
      { question: "Can valuation reports be used for litigation?", answer: "Yes, our valuation reports are prepared to standards that support litigation use. Our valuers can also serve as expert witnesses when required." }
    ],
    stats: [
      { number: "500+", label: "Valuations Completed" },
      { number: "₹5000Cr+", label: "Value Assessed" },
      { number: "IBBI", label: "Registered Valuers" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ValuationServices;
