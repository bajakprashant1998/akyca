import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Factory } from "lucide-react";

const FactoryAct = () => {
  const data = {
    title: "Factory Act Compliance",
    parentService: "Compliance & Regulatory Services",
    parentServicePath: "/services/compliance",
    icon: Factory,
    description: "Comprehensive Factory Act compliance services including licensing, safety requirements, worker welfare, working hours, and statutory inspections.",
    longDescription: `Manufacturing establishments must comply with the Factories Act, 1948, which governs health, safety, welfare, and working conditions. At Ashvin K Yagnik & Co., we provide complete Factory Act compliance services that ensure your manufacturing unit meets all legal requirements.

Our services cover factory registration and licensing, annual returns, safety committee formation, compliance registers, working hours management, and coordination with factory inspectors. We help you maintain a safe workplace while meeting all statutory obligations.

Whether you're setting up a new manufacturing facility or need to regularize compliance at an existing plant, our experienced team guides you through the requirements specific to your industry and state.`,
    features: [
      "Factory registration and license renewal",
      "Annual return filing (Form 22)",
      "Safety committee formation and meetings",
      "Compliance register maintenance",
      "Working hours and overtime management",
      "Leave with wages calculation",
      "Accident reporting and documentation",
      "Factory inspection coordination"
    ],
    process: [
      { step: "Registration", description: "Obtain factory license from State Factory Inspectorate" },
      { step: "Compliance Setup", description: "Establish all required registers, committees, and processes" },
      { step: "Ongoing Compliance", description: "Maintain records, file returns, and manage welfare requirements" },
      { step: "Inspection Support", description: "Prepare for and coordinate with factory inspections" }
    ],
    benefits: [
      "Valid factory license",
      "Safe working environment",
      "Avoid penalties and closures",
      "Worker welfare compliance",
      "Smooth inspections",
      "Legal protection"
    ],
    useCases: [
      { title: "Manufacturing Plants", description: "Heavy and light manufacturing facilities" },
      { title: "Processing Units", description: "Food, chemical, and material processing" },
      { title: "Assembly Operations", description: "Electronics, automobile, and component assembly" },
      { title: "Textile Units", description: "Weaving, dyeing, and garment manufacturing" },
      { title: "Warehouses", description: "Large warehousing with manufacturing processes" },
      { title: "Workshop Units", description: "Engineering and fabrication workshops" }
    ],
    faqs: [
      { question: "When is factory registration required?", answer: "Registration is required for premises with 10+ workers using power, or 20+ workers without power, engaged in manufacturing process." },
      { question: "What is the validity of factory license?", answer: "Factory license must be renewed annually before December 31. Late renewal attracts penalties and may result in closure orders." },
      { question: "What safety requirements must be maintained?", answer: "Requirements include fire safety equipment, first aid facilities, machine guards, protective equipment, ventilation, drinking water, and separate toilets." },
      { question: "What registers must be maintained under Factory Act?", answer: "Key registers include Attendance Register, Leave Register, Overtime Register, Register of Adult Workers, Muster Roll, and Accident Register." },
      { question: "What are the penalties for non-compliance?", answer: "Penalties range from fines up to ₹2 lakhs to imprisonment up to 2 years. Repeated violations can lead to factory closure." }
    ],
    stats: [
      { number: "100+", label: "Factories Served" },
      { number: "99%", label: "Renewal Rate" },
      { number: "Zero", label: "Closure Orders" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default FactoryAct;
