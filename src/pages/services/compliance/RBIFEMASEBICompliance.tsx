import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Globe } from "lucide-react";

const RBIFEMASEBICompliance = () => {
  const data = {
    title: "RBI, FEMA & SEBI Compliance",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: Globe,
    description: "Expert compliance services for RBI, FEMA, and SEBI regulations including foreign investment, external commercial borrowings, and capital market requirements.",
    longDescription: `Cross-border transactions, foreign investments, and capital market operations are subject to strict regulatory requirements under RBI, FEMA, and SEBI. At Ashvin K Yagnik & Co., we provide specialized compliance services that help businesses navigate these complex regulations.

Our expertise covers foreign direct investment (FDI) compliance, overseas direct investment (ODI), external commercial borrowings (ECB), import-export payments, and SEBI regulations for listed companies and market intermediaries. We ensure your transactions are structured correctly and reported on time.

Whether you're receiving foreign investment, making overseas investments, or dealing with capital market regulations, our team provides accurate guidance and handles all reporting requirements to keep you compliant.`,
    features: [
      "FDI compliance and reporting (FC-GPR, FC-TRS)",
      "ODI filings and annual performance reports",
      "ECB reporting and compliance",
      "LRS (Liberalised Remittance Scheme) compliance",
      "Import-export payment regulations",
      "SEBI compliance for listed companies",
      "Insider trading regulations",
      "Takeover code compliance"
    ],
    process: [
      { step: "Transaction Review", description: "Analyze transaction for applicable FEMA/SEBI regulations" },
      { step: "Structuring Advisory", description: "Recommend compliant transaction structure" },
      { step: "Documentation", description: "Prepare required forms and supporting documents" },
      { step: "Filing & Reporting", description: "Submit reports to RBI/AD bank/SEBI within timelines" }
    ],
    benefits: [
      "Compliant cross-border transactions",
      "Avoid FEMA penalties and compounding",
      "Timely regulatory filings",
      "Expert interpretation of regulations",
      "Smooth forex transactions",
      "Protection from regulatory action"
    ],
    useCases: [
      { title: "Startups with Foreign Funding", description: "FDI receipt, ESOP to foreign employees" },
      { title: "Indian MNCs", description: "Overseas subsidiaries and ODI compliance" },
      { title: "Listed Companies", description: "SEBI LODR, insider trading, and takeover compliance" },
      { title: "Exporters", description: "Export realization and FIRC documentation" },
      { title: "Importers", description: "Import payment compliance and documentation" },
      { title: "NRIs", description: "Investment regulations and repatriation" }
    ],
    faqs: [
      { question: "What is FC-GPR and when is it required?", answer: "FC-GPR (Foreign Currency - Gross Provisional Return) is required within 30 days of allotment of shares to foreign investors. It's filed through AD bank to RBI." },
      { question: "What is the penalty for FEMA violations?", answer: "FEMA violations attract penalties up to three times the amount involved or ₹2 lakhs where amount is not quantifiable. Compounding is available for most contraventions." },
      { question: "What is the ODI reporting requirement?", answer: "ODI requires prior RBI approval in some cases, and reporting through AD bank. Annual Performance Report (APR) must be filed by December 31 each year." },
      { question: "What SEBI compliances apply to listed companies?", answer: "Listed companies must comply with LODR (Listing Obligations), insider trading regulations, related party transaction rules, and various disclosure requirements." },
      { question: "How do you handle legacy FEMA violations?", answer: "We assess the violation, determine compounding eligibility, prepare compounding application, and represent before RBI for resolution." }
    ],
    stats: [
      { number: "200+", label: "FEMA Filings" },
      { number: "₹1000Cr+", label: "FDI Reported" },
      { number: "RBI Cat-I", label: "Authorized Firm" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default RBIFEMASEBICompliance;
