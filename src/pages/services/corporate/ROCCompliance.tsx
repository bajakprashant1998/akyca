import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileText } from "lucide-react";

const ROCCompliance = () => {
  const data = {
    title: "ROC Compliance & Annual Filings",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: FileText,
    description: "Complete ROC compliance management including annual returns, financial statements, board resolutions, and event-based filings with the Registrar of Companies.",
    longDescription: `Every company registered in India must comply with various filing requirements under the Companies Act, 2013. Non-compliance can lead to penalties, prosecution of directors, and even striking off of the company. At Ashvin K Yagnik & Co., we ensure your company remains fully compliant with all ROC requirements.

Our ROC compliance services cover the entire spectrum of statutory filings including annual returns (MGT-7), financial statements (AOC-4), director-related filings, charge registration, and event-based compliances. We maintain a comprehensive compliance calendar for your company and send timely reminders to ensure no deadline is missed.

With our experienced team handling your ROC compliances, you can focus on growing your business while we take care of all regulatory requirements. We also conduct annual compliance audits to identify any gaps and rectify them before they become issues.`,
    features: [
      "Annual Return (MGT-7/MGT-7A) filing",
      "Financial Statement (AOC-4/AOC-4 CFS) filing",
      "Director appointment/resignation filings (DIR-12)",
      "Charge creation and modification (CHG-1, CHG-9)",
      "Change in registered office (INC-22)",
      "Increase in authorized capital (SH-7)",
      "Board meeting and AGM compliance",
      "Maintenance of statutory registers"
    ],
    process: [
      { step: "Compliance Review", description: "Analyze current compliance status and identify pending requirements" },
      { step: "Document Collection", description: "Gather financial statements, board resolutions, and supporting documents" },
      { step: "Form Preparation", description: "Prepare all required forms with accurate data and attachments" },
      { step: "Filing & Follow-up", description: "Submit forms to ROC and track approval status" }
    ],
    benefits: [
      "Avoid penalties and prosecution",
      "Maintain good standing with ROC",
      "Directors' DIN remains active",
      "Company eligible for government tenders",
      "Easy access to bank loans and credit",
      "Smooth due diligence for investors"
    ],
    useCases: [
      { title: "Active Companies", description: "Regular annual compliance for operational businesses" },
      { title: "Dormant Companies", description: "Maintaining minimum compliance for inactive companies" },
      { title: "Startups", description: "First-time compliance setup and ongoing filings" },
      { title: "Listed Companies", description: "Enhanced compliance requirements under SEBI regulations" },
      { title: "Foreign Subsidiaries", description: "Indian subsidiaries of foreign companies" },
      { title: "Group Companies", description: "Consolidated compliance management for multiple entities" }
    ],
    faqs: [
      { question: "What is the due date for filing annual return?", answer: "Annual return (MGT-7) must be filed within 60 days from the date of AGM. For small companies, MGT-7A is applicable." },
      { question: "What are the penalties for late ROC filing?", answer: "Late filing attracts additional fees of ₹100 per day of delay. After 270 days, the company may be marked for striking off and directors may face disqualification." },
      { question: "Is annual filing required for dormant companies?", answer: "Yes, dormant companies must also file annual returns and financial statements. However, they have relaxed compliance requirements." },
      { question: "Can we file returns for previous years?", answer: "Yes, we can file pending returns for previous years along with applicable additional fees. It's advisable to regularize compliance as soon as possible." },
      { question: "What happens if a company is struck off for non-compliance?", answer: "A struck-off company can apply for revival within 20 years by filing Form STK-5 along with all pending compliances and fees." }
    ],
    stats: [
      { number: "1000+", label: "Annual Filings Done" },
      { number: "99%", label: "On-Time Filing Rate" },
      { number: "Zero", label: "Penalty Cases" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Secretarial Services", description: "Board meeting and resolution support", link: "/services/corporate/secretarial-services" },
      { title: "Statutory Audit", description: "Annual financial audit", link: "/services/audit/statutory-audit" },
      { title: "Company Incorporation", description: "New company registration", link: "/services/corporate/company-incorporation" },
      { title: "LLP Formation", description: "LLP registration and compliance", link: "/services/corporate/llp-formation" },
      { title: "Corporate Governance", description: "Board compliance", link: "/services/advanced/corporate-governance" },
      { title: "Due Diligence", description: "Compliance health check", link: "/services/corporate/due-diligence" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ROCCompliance;
