import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { CalendarCheck } from "lucide-react";

const AnnualCompliance = () => {
  const data = {
    title: "Annual Compliance Management",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: CalendarCheck,
    description: "Comprehensive annual compliance management covering all statutory filings, returns, and regulatory requirements to keep your business fully compliant.",
    longDescription: `Managing annual compliance across multiple regulations can be overwhelming for businesses. At Ashvin K Yagnik & Co., we provide end-to-end annual compliance management that ensures your business meets all statutory requirements without missing deadlines.

Our compliance management covers income tax, GST, ROC filings, labor laws, professional tax, and industry-specific regulations. We maintain a comprehensive compliance calendar, send proactive reminders, and handle all filings on your behalf.

Whether you're a startup with basic requirements or a large enterprise with complex multi-state compliance, our systematic approach ensures complete compliance coverage while freeing you to focus on your core business.`,
    features: [
      "Comprehensive compliance calendar management",
      "Income tax return filing and advance tax",
      "GST annual return and reconciliation",
      "ROC annual filings (AOC-4, MGT-7)",
      "Labour law compliance (PF, ESI, PT)",
      "TDS quarterly returns and certificates",
      "Professional tax compliance",
      "Industry-specific regulatory filings"
    ],
    process: [
      { step: "Compliance Mapping", description: "Identify all applicable compliances based on your business profile" },
      { step: "Calendar Setup", description: "Create comprehensive calendar with all due dates and reminders" },
      { step: "Data Collection", description: "Systematic collection of information for each compliance" },
      { step: "Filing & Reporting", description: "Timely filing with confirmation and documentation" }
    ],
    benefits: [
      "Zero missed deadlines",
      "Avoid penalties and interest",
      "Single point of compliance management",
      "Proactive reminders and updates",
      "Complete audit trail",
      "Peace of mind"
    ],
    useCases: [
      { title: "Startups", description: "Basic compliance setup and ongoing management" },
      { title: "SMEs", description: "Comprehensive compliance across all applicable laws" },
      { title: "Multi-State Operations", description: "Managing state-wise compliance requirements" },
      { title: "Group Companies", description: "Consolidated compliance management for multiple entities" },
      { title: "Manufacturing Units", description: "Factory and labor law specific compliances" },
      { title: "Service Companies", description: "IT, consulting, and professional services compliance" }
    ],
    faqs: [
      { question: "What compliances are typically required for a private limited company?", answer: "Key compliances include income tax returns, GST returns, ROC annual filings (MGT-7, AOC-4), TDS returns, PF/ESI contributions, and professional tax. Additional compliances may apply based on industry." },
      { question: "What are the penalties for late compliance?", answer: "Penalties vary by compliance type. Late ROC filing attracts ₹100/day. Late GST returns attract ₹50-200/day. Late income tax return attracts up to ₹10,000 plus interest." },
      { question: "How do you handle multi-state compliance?", answer: "We maintain state-wise compliance calendars and coordinate with local professionals where needed. Our system tracks all state-specific requirements and deadlines." },
      { question: "Can you take over compliance from our previous accountant?", answer: "Yes, we conduct a compliance audit first to identify any pending matters, regularize them, and then take over ongoing compliance management." },
      { question: "Do you provide compliance certificates?", answer: "Yes, we provide periodic compliance status reports and certificates confirming all filings are up to date, which can be shared with banks, investors, or auditors." }
    ],
    stats: [
      { number: "500+", label: "Companies Managed" },
      { number: "99.9%", label: "On-Time Filing Rate" },
      { number: "5000+", label: "Annual Filings" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Statutory Audit", description: "Audit of financial statements", link: "/services/audit/statutory-audit" },
      { title: "GST Return Filing", description: "Regular GST compliance", link: "/services/gst/return-filing" },
      { title: "ROC Compliance", description: "MCA annual filing", link: "/services/corporate/roc-compliance" },
      { title: "TDS Compliance", description: "Tax deduction compliance", link: "/services/taxation/tds-compliance" },
      { title: "Labour Law", description: "Workforce compliance", link: "/services/compliance/labour-law" },
      { title: "Secretarial Services", description: "Corporate secretarial", link: "/services/corporate/secretarial-services" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default AnnualCompliance;
