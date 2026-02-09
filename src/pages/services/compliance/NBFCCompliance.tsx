import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Landmark } from "lucide-react";

const NBFCCompliance = () => {
  const data = {
    title: "NBFC Compliance Services",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: Landmark,
    description: "Specialized compliance services for NBFCs including RBI registration, regulatory returns, prudential norms, and ongoing compliance management.",
    longDescription: `Non-Banking Financial Companies (NBFCs) operate under strict regulatory oversight from the Reserve Bank of India. At Ashvin K Yagnik & Co., we provide comprehensive NBFC compliance services that help financial companies meet all regulatory requirements efficiently.

Our services cover NBFC registration applications, monthly and quarterly RBI returns, audit requirements, prudential norms compliance, KYC/AML framework implementation, and board-level compliance documentation. We serve NBFCs across categories including NBFC-ND-SI, NBFC-D, and specialized categories.

Whether you're starting a new NBFC or need to streamline compliance at an existing one, our specialized team provides the expertise and support needed for seamless regulatory compliance.`,
    features: [
      "NBFC registration application support",
      "Monthly NBS returns filing",
      "Quarterly ALM and other returns",
      "Prudential norms compliance",
      "KYC and AML framework implementation",
      "Fair Practices Code compliance",
      "Board and audit committee support",
      "RBI inspection preparation"
    ],
    process: [
      { step: "Compliance Assessment", description: "Review current compliance status and identify gaps" },
      { step: "Framework Setup", description: "Establish policies, systems, and processes" },
      { step: "Ongoing Compliance", description: "Prepare and file all periodic returns" },
      { step: "Audit & Inspection", description: "Support statutory audit and RBI inspections" }
    ],
    benefits: [
      "Complete regulatory compliance",
      "Avoid RBI penalties and actions",
      "Strong governance framework",
      "Timely regulatory filings",
      "Inspection readiness",
      "Expert regulatory guidance"
    ],
    useCases: [
      { title: "Lending NBFCs", description: "Consumer and business lending companies" },
      { title: "Investment NBFCs", description: "Investment and holding companies" },
      { title: "Microfinance", description: "NBFC-MFI compliance requirements" },
      { title: "Housing Finance", description: "HFC registration and NHB compliance" },
      { title: "P2P Lending", description: "NBFC-P2P platform compliance" },
      { title: "Account Aggregators", description: "AA license and compliance" }
    ],
    faqs: [
      { question: "What are the categories of NBFCs?", answer: "NBFCs are categorized based on activities (loan, investment, infrastructure) and size (systemically important if assets > ₹500 crores). Different categories have different compliance requirements." },
      { question: "What returns must NBFCs file with RBI?", answer: "Key returns include monthly NBS-ALM, quarterly NBS-7, annual NBS-8/9, and statutory auditor certificates. Systemically important NBFCs have additional requirements." },
      { question: "What are the key prudential norms for NBFCs?", answer: "Prudential norms cover capital adequacy (15% minimum), asset classification, provisioning, exposure norms, and fair practices code." },
      { question: "How often is RBI inspection conducted?", answer: "RBI typically conducts on-site inspection of systemically important NBFCs every 2-3 years. Others may be inspected periodically or based on risk assessment." },
      { question: "Can you help with NBFC registration?", answer: "Yes, we assist with the entire registration process including application preparation, documentation, and follow-up with RBI until license is granted." }
    ],
    stats: [
      { number: "20+", label: "NBFCs Served" },
      { number: "100%", label: "Filing Compliance" },
      { number: "Zero", label: "RBI Penalties" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Statutory Audit", description: "Audit of financial statements", link: "/services/audit/statutory-audit" },
      { title: "RBI & FEMA Compliance", description: "Regulatory compliance", link: "/services/compliance/rbi-fema-sebi-compliance" },
      { title: "Corporate Taxation", description: "Corporate tax filing", link: "/services/taxation/corporate-taxation" },
      { title: "Annual Compliance", description: "Routine statutory filings", link: "/services/compliance/annual-compliance" },
      { title: "Internal Audit", description: "Process Review", link: "/services/audit/internal-audit" },
      { title: "Due Diligence", description: "Compliance Check", link: "/services/corporate/due-diligence" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default NBFCCompliance;
