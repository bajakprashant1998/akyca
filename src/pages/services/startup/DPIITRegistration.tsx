import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Award } from "lucide-react";

const DPIITRegistration = () => {
  const data = {
    title: "DPIIT Startup Recognition",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: Award,
    description: "Complete assistance for DPIIT Startup India recognition including application filing, eligibility verification, and accessing startup benefits.",
    longDescription: `DPIIT (Department for Promotion of Industry and Internal Trade) recognition is the gateway to numerous benefits for startups in India. At Ashvin K Yagnik & Co., we provide complete assistance to help your startup get recognized and access the full range of startup benefits.

Our services cover eligibility assessment, application preparation and filing, documentation support, and post-recognition compliance. We help you understand and utilize benefits like tax exemption under Section 80-IAC, self-certification for labor and environment laws, and access to Fund of Funds.

Whether you're a newly incorporated startup or an existing company seeking recognition, our experienced team guides you through the entire process to maximize the benefits available under Startup India initiative.`,
    features: [
      "Eligibility verification for DPIIT recognition",
      "Startup India portal registration",
      "Recognition application filing",
      "Documentation and description support",
      "Section 80-IAC tax exemption application",
      "Self-certification compliance guidance",
      "Fund of Funds access support",
      "SISFS and other scheme applications"
    ],
    process: [
      { step: "Eligibility Check", description: "Verify startup eligibility criteria and innovation requirement" },
      { step: "Application Preparation", description: "Prepare business description and supporting documents" },
      { step: "Portal Filing", description: "Submit application through Startup India portal" },
      { step: "Post-Recognition", description: "Apply for tax benefits and other schemes" }
    ],
    benefits: [
      "Tax exemption eligibility (80-IAC)",
      "Self-certification for compliance",
      "Tender participation benefits",
      "IPR fast-tracking and rebates",
      "Fund of Funds access",
      "Networking opportunities"
    ],
    useCases: [
      { title: "Tech Startups", description: "Software, SaaS, and technology companies" },
      { title: "D2C Brands", description: "Direct-to-consumer product startups" },
      { title: "Fintech", description: "Financial technology and payment startups" },
      { title: "Healthtech", description: "Healthcare and medtech startups" },
      { title: "Edtech", description: "Education technology ventures" },
      { title: "Agritech", description: "Agriculture technology startups" }
    ],
    faqs: [
      { question: "What are the eligibility criteria for DPIIT recognition?", answer: "Company must be less than 10 years old, turnover under ₹100 crores per year, working towards innovation/development/improvement/commercialization of products or processes." },
      { question: "What is the 80-IAC tax exemption?", answer: "Recognized startups can apply for 100% tax exemption on profits for any 3 consecutive years out of first 10 years. Separate application to Inter-Ministerial Board is required." },
      { question: "What is self-certification?", answer: "DPIIT recognized startups can self-certify compliance under 6 labour laws and 3 environmental laws for 3 years from recognition, subject to random inspections." },
      { question: "How long does recognition take?", answer: "DPIIT recognition is usually granted within 2-3 days if all documents are in order. 80-IAC exemption application takes 2-3 months for IMB approval." },
      { question: "Can existing companies get recognition?", answer: "Yes, companies less than 10 years old with turnover under ₹100 crores can apply if they meet the innovation criteria." }
    ],
    stats: [
      { number: "100+", label: "Startups Recognized" },
      { number: "50+", label: "80-IAC Approvals" },
      { number: "3 Days", label: "Typical Recognition" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Angel Tax Advisory", description: "Tax exemption", link: "/services/startup/angel-tax-advisory" },
      { title: "Company Incorporation", description: "Entity setup", link: "/services/corporate/company-incorporation" },
      { title: "Funding Support", description: "Investment access", link: "/services/startup/funding-support" },
      { title: "Virtual CFO", description: "Compliance management", link: "/services/financial/virtual-cfo" },
      { title: "GST Registration", description: "Tax registration", link: "/services/gst/registration" },
      { title: "Labour Law", description: "Labour compliance", link: "/services/compliance/labour-law" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default DPIITRegistration;
