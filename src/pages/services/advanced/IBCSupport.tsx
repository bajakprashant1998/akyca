import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Scale } from "lucide-react";

const IBCSupport = () => {
  const data = {
    title: "Insolvency & Bankruptcy (IBC) Support",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: Scale,
    description: "Comprehensive support under the Insolvency and Bankruptcy Code for creditors, debtors, and resolution applicants.",
    longDescription: `The Insolvency and Bankruptcy Code, 2016 has transformed debt resolution in India. At Ashvin K Yagnik & Co., we provide comprehensive IBC support services for all stakeholders - creditors seeking recovery, debtors seeking resolution, and investors looking at stressed assets.

Our services cover the entire IBC lifecycle - from filing applications to claims verification, CIRP support, resolution plan preparation, and liquidation assistance. We work closely with insolvency professionals and legal counsel.

With deep understanding of IBC provisions and NCLT procedures, we help stakeholders navigate this complex process efficiently and maximize value recovery.`,
    features: [
      "Creditor claims filing",
      "Claims verification support",
      "CIRP process assistance",
      "Resolution plan evaluation",
      "Resolution applicant advisory",
      "Liquidation support",
      "Avoidance transaction analysis",
      "Valuation for IBC"
    ],
    process: [
      { step: "Initial Assessment", description: "Evaluate situation and options under IBC" },
      { step: "Filing/Claims", description: "File application or submit claims" },
      { step: "Process Support", description: "Support through CIRP or liquidation" },
      { step: "Resolution/Recovery", description: "Assist in value realization" }
    ],
    benefits: [
      "Maximum recovery",
      "Process compliance",
      "Stakeholder coordination",
      "Valuation support",
      "Transaction advisory",
      "Expert guidance"
    ],
    useCases: [
      { title: "Creditor Filing", description: "Initiating CIRP as creditor" },
      { title: "Claims Submission", description: "Filing and defending claims" },
      { title: "CoC Support", description: "Supporting Committee of Creditors" },
      { title: "Resolution Applicant", description: "Bid preparation for stressed assets" },
      { title: "Debtor Advisory", description: "Pre-CIRP restructuring attempts" },
      { title: "Liquidation", description: "Asset realization support" }
    ],
    faqs: [
      { question: "What is the threshold for filing IBC?", answer: "Minimum default of ₹1 crore (raised from ₹1 lakh). We help evaluate if IBC is the right route based on debt amount, debtor's assets, and time considerations." },
      { question: "How long does the CIRP process take?", answer: "Maximum 330 days including litigation. However, actual timelines vary. We help expedite by ensuring complete documentation and responding promptly to queries." },
      { question: "What recoveries can creditors expect?", answer: "Recovery rates vary significantly based on company's assets and resolution/liquidation outcome. Financial creditors typically recover 30-50% in resolution, less in liquidation." },
      { question: "Can promoters bid for their own company?", answer: "Section 29A restricts promoters of defaulting companies from bidding. However, there are exceptions and nuances. We analyze eligibility before bid preparation." }
    ],
    stats: [
      { number: "30+", label: "IBC Matters" },
      { number: "₹500Cr+", label: "Claims Filed" },
      { number: "45%", label: "Avg Recovery" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default IBCSupport;
