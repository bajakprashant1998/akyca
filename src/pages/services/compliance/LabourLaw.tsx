import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const LabourLaw = () => {
  const data = {
    title: "Labour Law Compliance",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: Users,
    description: "Complete labour law compliance services including PF, ESI, gratuity, bonus, minimum wages, and workplace regulations for employers across India.",
    longDescription: `Labour law compliance in India involves navigating a complex web of central and state laws governing employment relationships. At Ashvin K Yagnik & Co., we provide comprehensive labour law compliance services that protect employers from legal risks while ensuring employee welfare.

Our services cover the entire spectrum of labour laws including Employees' Provident Fund, Employee State Insurance, Payment of Gratuity, Payment of Bonus, Minimum Wages, Shops and Establishments Act, and the new Labour Codes. We handle registrations, monthly contributions, annual returns, and inspections.

Whether you're a startup hiring your first employees or a large organization with a multi-state workforce, we ensure your labour law compliance is complete, accurate, and well-documented.`,
    features: [
      "PF registration and monthly compliance",
      "ESI registration and contribution management",
      "Professional Tax registration and payment",
      "Shops & Establishments registration",
      "Payment of Bonus and Gratuity compliance",
      "Minimum Wages Act compliance",
      "Contract Labour Act compliance",
      "Labour inspection support"
    ],
    process: [
      { step: "Compliance Assessment", description: "Determine applicable labour laws based on workforce and locations" },
      { step: "Registration", description: "Complete all required registrations and documentation" },
      { step: "Monthly Compliance", description: "Process contributions, challans, and returns" },
      { step: "Inspection Support", description: "Maintain records and support during inspections" }
    ],
    benefits: [
      "Complete compliance coverage",
      "Avoid penalties and prosecution",
      "Employee trust and satisfaction",
      "Smooth labour inspections",
      "Updated with law changes",
      "Multi-state expertise"
    ],
    useCases: [
      { title: "IT Companies", description: "Shops Act, PF, and ESI for software companies" },
      { title: "Manufacturing", description: "Factory Act, Contract Labour, and industrial relations" },
      { title: "Retail Chains", description: "Multi-location shops and establishments compliance" },
      { title: "Startups", description: "Setting up compliant HR practices from day one" },
      { title: "Contractors", description: "Principal employer and contractor compliance" },
      { title: "Healthcare", description: "Hospital and clinic specific labour compliance" }
    ],
    faqs: [
      { question: "When is PF registration mandatory?", answer: "PF registration is mandatory for establishments with 20 or more employees. Voluntary registration is possible for smaller establishments." },
      { question: "What is the current PF contribution rate?", answer: "Employee contributes 12% of basic + DA, employer contributes 12% (3.67% to EPF, 8.33% to EPS). Total contribution is 24% of wages." },
      { question: "When is ESI applicable?", answer: "ESI applies to establishments with 10+ employees (20 in some states) where employee wages are up to ₹21,000 per month." },
      { question: "What are the new Labour Codes?", answer: "Four new Labour Codes on Wages, Social Security, Industrial Relations, and OSH aim to consolidate 29 central labour laws. Implementation dates are being notified state-wise." },
      { question: "How do you handle contract workers?", answer: "We ensure compliance for both principal employers and contractors under Contract Labour Act, including registration, licensing, and record maintenance." }
    ],
    stats: [
      { number: "1000+", label: "Employees Covered" },
      { number: "100+", label: "Establishments Served" },
      { number: "10+", label: "States Covered" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default LabourLaw;
