import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building2 } from "lucide-react";

const CorporateGovernance = () => {
  const data = {
    title: "Corporate Governance Advisory",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: Building2,
    description: "Advisory services to strengthen corporate governance practices, board effectiveness, and stakeholder transparency.",
    longDescription: `Strong corporate governance is essential for sustainable business success, stakeholder trust, and regulatory compliance. At Ashvin K Yagnik & Co., we help organizations build and maintain robust governance frameworks.

Our services cover board effectiveness, policy formulation, compliance frameworks, and stakeholder communication. We work with listed companies on SEBI LODR compliance and with unlisted companies on governance best practices.

We understand that governance is not just about compliance but about building trust and enabling sustainable growth. Our approach balances regulatory requirements with practical business needs.`,
    features: [
      "Governance framework design",
      "Board evaluation",
      "Committee structuring",
      "Policy formulation",
      "LODR compliance",
      "Related party governance",
      "Stakeholder communication",
      "ESG integration"
    ],
    process: [
      { step: "Assessment", description: "Evaluate current governance practices" },
      { step: "Gap Analysis", description: "Compare against standards and requirements" },
      { step: "Framework Design", description: "Design improved governance structure" },
      { step: "Implementation", description: "Execute and monitor changes" }
    ],
    benefits: [
      "Regulatory compliance",
      "Stakeholder trust",
      "Risk management",
      "Better decisions",
      "Sustainable growth",
      "Reputation protection"
    ],
    useCases: [
      { title: "Pre-IPO", description: "Governance readiness for listing" },
      { title: "Listed Company", description: "LODR and governance compliance" },
      { title: "Family Business", description: "Professional governance structure" },
      { title: "NBFC/Financial", description: "RBI governance requirements" },
      { title: "Board Evaluation", description: "Annual board and committee review" },
      { title: "Policy Overhaul", description: "Updating governance policies" }
    ],
    faqs: [
      { question: "What governance compliances apply to private companies?", answer: "Private companies have fewer mandated requirements but should adopt governance best practices. Key areas include board meetings, director duties, related party policies, and disclosure practices." },
      { question: "How often should board evaluation be done?", answer: "Listed companies must do annual board evaluation. For others, we recommend annual self-assessment and external evaluation every 2-3 years." },
      { question: "What is ESG and how does it relate to governance?", answer: "ESG (Environmental, Social, Governance) is increasingly important for investors and stakeholders. We help integrate ESG considerations into governance frameworks and reporting." },
      { question: "How to handle related party transactions?", answer: "Related party transactions need proper identification, disclosure, and approval processes. We help design policies and procedures compliant with Companies Act and LODR requirements." }
    ],
    stats: [
      { number: "50+", label: "Governance Projects" },
      { number: "100%", label: "LODR Compliance" },
      { number: "30+", label: "Board Evaluations" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Risk Assessment", description: "Internal controls", link: "/services/advanced/risk-assessment" },
      { title: "Secretarial Audit", description: "Compliance audit", link: "/services/audit/secretarial-audit" },
      { title: "Internal Audit", description: "Process review", link: "/services/audit/internal-audit" },
      { title: "Forensic Audit", description: "Fraud prevention", link: "/services/advanced/forensic-audit" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default CorporateGovernance;
