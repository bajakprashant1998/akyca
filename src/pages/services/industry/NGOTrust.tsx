import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Heart } from "lucide-react";

const NGOTrust = () => {
  const data = {
    title: "NGO & Trust Management",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: Heart,
    description: "Complete compliance and management services for NGOs, charitable trusts, societies, and Section 8 companies.",
    longDescription: `Non-profit organizations operate under strict regulatory scrutiny with requirements from Income Tax, FCRA, state charity commissioners, and various ministries. At Ashvin K Yagnik & Co., we specialize in NGO compliance and management.

Our services cover the lifecycle of non-profit operations - from registration and 12A/80G certification to ongoing compliance, FCRA management, and CSR project implementation. We understand the unique requirements of charitable organizations and donor expectations.

We also assist with governance frameworks, impact measurement, and transparency practices that build donor confidence and ensure regulatory compliance.`,
    features: [
      "Trust/Society/Section 8 registration",
      "12A and 80G registration",
      "FCRA registration and compliance",
      "CSR project management",
      "Donor compliance (Form 10BD)",
      "Charity commissioner filings",
      "Impact reporting",
      "Governance advisory"
    ],
    process: [
      { step: "Setup", description: "Registration and initial compliance" },
      { step: "Compliance Framework", description: "Establish systems and policies" },
      { step: "Ongoing Management", description: "Regular filings and reporting" },
      { step: "Donor Support", description: "Certificates and compliance reports" }
    ],
    benefits: [
      "Complete tax compliance",
      "FCRA compliance",
      "Donor confidence",
      "Transparent operations",
      "Grant readiness",
      "Governance excellence"
    ],
    useCases: [
      { title: "New NGO Setup", description: "Registration and initial compliance" },
      { title: "FCRA Compliance", description: "Foreign contribution management" },
      { title: "CSR Implementation", description: "Corporate CSR project execution" },
      { title: "Foundation", description: "Corporate foundation management" },
      { title: "International NGO", description: "India operations compliance" },
      { title: "Religious Trust", description: "Temple/mosque/church compliance" }
    ],
    faqs: [
      { question: "Which structure is best for an NGO?", answer: "Choice between trust, society, and Section 8 company depends on governance needs, geography, and activities. We advise on optimal structure for your objectives." },
      { question: "How to get 80G registration?", answer: "80G registration requires valid 12A, compliance with objects, proper application of income, and specific documentation. We handle complete registration and renewals." },
      { question: "What are FCRA compliance requirements?", answer: "FCRA requires separate bank account, quarterly intimation, annual return, and proper utilization. Non-compliance can lead to cancellation. We ensure complete FCRA compliance." },
      { question: "How to manage CSR projects?", answer: "CSR projects need proper agreements, impact measurement, fund utilization tracking, and Form CSR-1 registration. We provide end-to-end CSR project management." }
    ],
    stats: [
      { number: "150+", label: "NGOs Served" },
      { number: "₹200Cr+", label: "CSR Managed" },
      { number: "100%", label: "FCRA Compliance" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Trust & NGO Compliance", description: "filings & 12A/80G", link: "/services/compliance/trust-ngo-compliance" },
      { title: "Statutory Audit", description: "Trust audit", link: "/services/audit/statutory-audit" },
      { title: "FCRA Compliance", description: "Foreign contribution", link: "/services/compliance/rbi-fema-sebi-compliance" },
      { title: "Tax Representation", description: "Scrutiny cases", link: "/services/taxation/tax-representation" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default NGOTrust;
