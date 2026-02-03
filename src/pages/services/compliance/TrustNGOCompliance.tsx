import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Heart } from "lucide-react";

const TrustNGOCompliance = () => {
  const data = {
    title: "Trust & NGO Compliance",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: Heart,
    description: "Complete compliance services for trusts, societies, and NGOs including 12A/80G registration, FCRA compliance, CSR documentation, and annual filings.",
    longDescription: `Non-profit organizations in India must navigate specific regulatory requirements to maintain their tax-exempt status and operate legally. At Ashvin K Yagnik & Co., we provide specialized compliance services for trusts, societies, Section 8 companies, and other NGOs.

Our services cover income tax compliance including 12A and 80G registration, FCRA registration and annual returns for organizations receiving foreign contributions, CSR documentation for companies funding NGOs, and all regulatory filings with charity commissioners and registrars.

Whether you're establishing a new charitable organization or need to streamline compliance at an existing NGO, our team ensures you maintain good standing with all regulatory authorities while maximizing your social impact.`,
    features: [
      "Trust and society registration",
      "12A and 80G registration and renewal",
      "FCRA registration and annual returns",
      "CSR-1 registration for CSR eligibility",
      "Income tax returns (ITR-7)",
      "Charity Commissioner filings",
      "Audit and financial reporting",
      "Donor compliance certificates"
    ],
    process: [
      { step: "Registration", description: "Complete trust/society formation and tax registrations" },
      { step: "Compliance Setup", description: "Establish accounting systems and governance framework" },
      { step: "Ongoing Filings", description: "Prepare and file all annual returns and reports" },
      { step: "Donor Reporting", description: "Provide compliant receipts and utilization certificates" }
    ],
    benefits: [
      "Tax exemption maintenance",
      "Legal entity compliance",
      "Donor tax benefits enabled",
      "Foreign contribution eligibility",
      "CSR funding eligibility",
      "Transparent operations"
    ],
    useCases: [
      { title: "Charitable Trusts", description: "Education, health, and relief organizations" },
      { title: "Registered Societies", description: "Community and cultural organizations" },
      { title: "Section 8 Companies", description: "Non-profit companies for larger operations" },
      { title: "Religious Institutions", description: "Temples, mosques, churches, and gurudwaras" },
      { title: "CSR Implementers", description: "NGOs receiving corporate CSR funds" },
      { title: "International NGOs", description: "Organizations receiving foreign contributions" }
    ],
    faqs: [
      { question: "What is the difference between 12A and 80G registration?", answer: "12A registration exempts the NGO from income tax. 80G registration allows donors to claim tax deduction for donations made. Both are now granted together under new provisions." },
      { question: "What are the new provisions for 12A/80G renewal?", answer: "From 2020, new NGOs get provisional registration for 3 years. After that, regular registration for 5 years is required. All registrations must be renewed every 5 years." },
      { question: "When is FCRA registration required?", answer: "FCRA registration is mandatory for organizations receiving foreign contributions (money or goods) from foreign sources for cultural, economic, educational, religious, or social purposes." },
      { question: "What is CSR-1 registration?", answer: "CSR-1 registration with MCA is required for organizations wanting to receive CSR funds from companies. It's mandatory from April 2021 for CSR eligibility." },
      { question: "What happens if 12A registration is cancelled?", answer: "If 12A is cancelled, the NGO becomes taxable like any other entity. Income and accumulated surplus may become taxable. Fresh registration can be applied for." }
    ],
    stats: [
      { number: "100+", label: "NGOs Served" },
      { number: "99%", label: "Registration Success" },
      { number: "50+", label: "FCRA Filings" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default TrustNGOCompliance;
