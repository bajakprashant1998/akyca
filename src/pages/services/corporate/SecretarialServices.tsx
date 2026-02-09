import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Briefcase } from "lucide-react";

const SecretarialServices = () => {
  const data = {
    title: "Secretarial Services",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: Briefcase,
    description: "Comprehensive corporate secretarial services including board meeting support, statutory compliance, corporate governance advisory, and company law consulting.",
    longDescription: `Corporate secretarial services form the backbone of good corporate governance and regulatory compliance. At Ashvin K Yagnik & Co., we offer a full range of secretarial services that help companies maintain proper records, conduct meetings effectively, and comply with all statutory requirements.

Our secretarial services team handles everything from preparing board meeting agendas and minutes to maintaining statutory registers, drafting resolutions, and managing correspondence with regulatory authorities. We ensure that your company's corporate governance practices meet the highest standards.

Whether you need ongoing secretarial support or assistance with specific transactions like share transfers, director appointments, or procedural matters, our experienced team provides timely and accurate services that keep your company compliant and well-governed.`,
    features: [
      "Board meeting organization and documentation",
      "Annual General Meeting (AGM) management",
      "Preparation of board and shareholder resolutions",
      "Maintenance of statutory registers",
      "Share transfer and transmission processing",
      "Corporate governance advisory",
      "Related party transaction compliance",
      "Insider trading regulations compliance"
    ],
    process: [
      { step: "Requirement Assessment", description: "Understand your secretarial needs and current compliance status" },
      { step: "Documentation Setup", description: "Organize statutory registers and historical records" },
      { step: "Ongoing Support", description: "Provide regular secretarial services as per agreed schedule" },
      { step: "Compliance Monitoring", description: "Track deadlines and ensure timely completion of all requirements" }
    ],
    benefits: [
      "Professional handling of corporate matters",
      "Proper documentation and record-keeping",
      "Compliance with corporate governance norms",
      "Reduced risk of regulatory penalties",
      "Smooth board and shareholder meetings",
      "Expert guidance on company law matters"
    ],
    useCases: [
      { title: "Private Companies", description: "Regular secretarial support for compliance and governance" },
      { title: "Listed Companies", description: "Enhanced secretarial services meeting SEBI requirements" },
      { title: "Startups", description: "Setting up proper secretarial practices from incorporation" },
      { title: "M&A Transactions", description: "Secretarial support during mergers and acquisitions" },
      { title: "Group Companies", description: "Coordinated secretarial services for multiple entities" },
      { title: "Foreign Subsidiaries", description: "Secretarial compliance for Indian subsidiaries of MNCs" }
    ],
    faqs: [
      { question: "Is it mandatory to appoint a Company Secretary?", answer: "Private companies with paid-up share capital of ₹10 crores or more must appoint a full-time Company Secretary. Listed companies must have a Company Secretary regardless of capital." },
      { question: "How often should board meetings be held?", answer: "Private companies must hold at least 4 board meetings per year with not more than 120 days gap between consecutive meetings. One-person companies can hold at least one meeting per half-year." },
      { question: "What statutory registers must a company maintain?", answer: "Key registers include Register of Members, Register of Directors, Register of Charges, Register of Contracts, and Minutes Book of Board and General Meetings." },
      { question: "Can secretarial services be outsourced?", answer: "Yes, companies can outsource secretarial services to professionals like company secretaries in practice. Many companies prefer this for cost efficiency and expertise." },
      { question: "What is secretarial audit?", answer: "Secretarial audit is a compliance audit conducted by a practicing Company Secretary to verify adherence to company law and regulations. It's mandatory for listed companies and large public companies." }
    ],
    stats: [
      { number: "200+", label: "Companies Served" },
      { number: "500+", label: "Meetings Managed" },
      { number: "100%", label: "Compliance Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "ROC Compliance", description: "Annual filing and forms", link: "/services/corporate/roc-compliance" },
      { title: "Corporate Governance", description: "Board evaluation and policy advisory", link: "/services/advanced/corporate-governance" },
      { title: "Statutory Audit", description: "Compliance verification", link: "/services/audit/statutory-audit" },
      { title: "Company Incorporation", description: "Setting up new entities", link: "/services/corporate/company-incorporation" },
      { title: "LLP Formation", description: "LLP secretarial services", link: "/services/corporate/llp-formation" },
      { title: "FEMA Compliance", description: "FDI reporting and records", link: "/services/compliance/rbi-fema-sebi" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default SecretarialServices;
