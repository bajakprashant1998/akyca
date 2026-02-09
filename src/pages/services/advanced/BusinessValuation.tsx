import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { BarChart3 } from "lucide-react";

const BusinessValuation = () => {
  const data = {
    title: "Business Valuation",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: BarChart3,
    description: "Independent business and asset valuations for M&A, taxation, litigation, and regulatory compliance purposes.",
    longDescription: `Accurate business valuation is critical for M&A transactions, fundraising, tax compliance, litigation, and strategic planning. At Ashvin K Yagnik & Co., we provide independent, professional valuations using globally accepted methodologies.

Our valuations are performed by registered valuers and follow ICAI valuation standards. We use multiple approaches - income approach (DCF), market approach (comparable transactions), and asset approach - selecting methods appropriate for the business and purpose.

Our valuation reports are accepted by tax authorities, courts, regulators, and transaction counterparties. We explain our methodology transparently and defend our conclusions when required.`,
    features: [
      "Business enterprise valuation",
      "Equity and share valuation",
      "Intangible asset valuation",
      "Brand and IP valuation",
      "Fairness opinions",
      "Purchase price allocation",
      "Impairment testing",
      "Litigation valuation support"
    ],
    process: [
      { step: "Scope Definition", description: "Define purpose, standard of value, and valuation date" },
      { step: "Data Analysis", description: "Analyze financials, operations, and market position" },
      { step: "Valuation", description: "Apply appropriate methodologies" },
      { step: "Reporting", description: "Prepare detailed valuation report with conclusions" }
    ],
    benefits: [
      "Independent opinion",
      "Multiple methodologies",
      "Regulatory acceptance",
      "Transaction support",
      "Tax compliance",
      "Litigation support"
    ],
    useCases: [
      { title: "M&A Transaction", description: "Fair value for acquisition or sale" },
      { title: "Fundraising", description: "Valuation for investment rounds" },
      { title: "Tax Compliance", description: "Section 56(2) and transfer pricing" },
      { title: "ESOP Valuation", description: "Fair market value for stock options" },
      { title: "Litigation", description: "Dispute resolution and damages" },
      { title: "Family Settlement", description: "Division of family business" }
    ],
    faqs: [
      { question: "Which valuation methodology do you use?", answer: "We use the methodology appropriate for the business and purpose. DCF for going concerns, market multiples for comparable businesses, and asset approach for asset-intensive businesses." },
      { question: "Are your valuations accepted by tax authorities?", answer: "Yes, our valuations comply with ICAI standards and are performed by registered valuers. They are accepted for all tax purposes including Section 56(2), transfer pricing, and capital gains." },
      { question: "How long does a valuation take?", answer: "Typically 2-4 weeks depending on business complexity and data availability. We can expedite for time-sensitive transactions." },
      { question: "What information is needed for valuation?", answer: "We need historical financials (3-5 years), projections, ownership details, business description, and purpose of valuation. We provide a detailed information request list." }
    ],
    stats: [
      { number: "200+", label: "Valuations Done" },
      { number: "₹5000Cr+", label: "Valuation Value" },
      { number: "100%", label: "Acceptance Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Forensic Audit", description: "Fraud investigation", link: "/services/advanced/forensic-audit" },
      { title: "Due Diligence", description: "M&A support", link: "/services/financial/due-diligence" },
      { title: "Corporate Governance", description: "Value enhancement", link: "/services/advanced/corporate-governance" },
      { title: "ESOP Structuring", description: "Option valuation", link: "/services/startup/esop-structuring" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default BusinessValuation;
