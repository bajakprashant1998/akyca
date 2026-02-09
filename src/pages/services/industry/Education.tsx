import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const data = {
    title: "Educational Institution Advisory",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: GraduationCap,
    description: "Specialized accounting, compliance, and advisory services for schools, colleges, universities, and ed-tech companies.",
    longDescription: `Educational institutions operate under unique regulatory frameworks with specific requirements from UGC, AICTE, state education departments, and tax authorities. At Ashvin K Yagnik & Co., we bring specialized expertise in educational sector compliance.

Our services cover all types of educational entities - from K-12 schools to professional colleges, deemed universities, and ed-tech startups. We handle the specific requirements of trust and society compliance, fee regulation, grant management, and 12A/80G benefits.

We also assist institutions in navigating the evolving regulatory landscape including NEP 2020 implementations, online education compliance, and international collaborations.`,
    features: [
      "Trust/Society compliance",
      "12A and 80G registration",
      "UGC/AICTE compliance",
      "Fee accounting and regulation",
      "Grant management",
      "Corpus fund management",
      "Student fee tracking",
      "Scholarship accounting"
    ],
    process: [
      { step: "Institution Review", description: "Understand structure, approvals, and compliance requirements" },
      { step: "Compliance Assessment", description: "Gap analysis and remediation plan" },
      { step: "Implementation", description: "Set up systems and processes" },
      { step: "Ongoing Support", description: "Regular compliance and regulatory updates" }
    ],
    benefits: [
      "Tax exemption compliance",
      "Regulatory compliance",
      "Transparent accounting",
      "Donor confidence",
      "Smooth approvals",
      "Expert guidance"
    ],
    useCases: [
      { title: "School Trust", description: "Complete compliance for school trusts" },
      { title: "Professional College", description: "AICTE/university compliance" },
      { title: "Ed-Tech Startup", description: "Startup compliance with education focus" },
      { title: "Coaching Institute", description: "Commercial education accounting" },
      { title: "University", description: "Deemed/state university compliance" },
      { title: "International School", description: "IB/Cambridge school compliance" }
    ],
    faqs: [
      { question: "Is GST applicable on education services?", answer: "Education services by institutions up to higher secondary are exempt. However, coaching classes, professional courses, and ancillary services may attract GST. We ensure proper classification." },
      { question: "How to maintain 12A/80G compliance?", answer: "Compliance requires proper application of income, maintenance of accounts, filing of returns, and activity within objects. We ensure continued eligibility for tax exemptions." },
      { question: "What are UGC compliance requirements?", answer: "UGC mandates financial reporting, fee disclosure, audit requirements, and governance norms. We help colleges maintain complete UGC compliance." },
      { question: "How to account for corpus donations?", answer: "Corpus donations have specific accounting treatment and conditions for tax exemption. We ensure proper documentation and accounting for corpus funds." }
    ],
    stats: [
      { number: "100+", label: "Institutions Served" },
      { number: "₹500Cr+", label: "Fee Managed" },
      { number: "100%", label: "Approval Success" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Trust & NGO Compliance", description: "Regulatory filings", link: "/services/compliance/trust-ngo-compliance" },
      { title: "Statutory Audit", description: "Institutional audit", link: "/services/audit/statutory-audit" },
      { title: "Cloud Accounting", description: "Modern accounting", link: "/services/digital/cloud-accounting" },
      { title: "TDS Compliance", description: "Tax deduction", link: "/services/taxation/tds-compliance" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default Education;
