import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Crown } from "lucide-react";

const HNIAdvisory = () => {
  const data = {
    title: "HNI Advisory",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: Crown,
    description: "Specialized wealth advisory for High Net Worth Individuals covering taxation, investments, and lifestyle planning.",
    longDescription: `High Net Worth Individuals face unique financial challenges - complex income sources, significant investments, multiple properties, business interests, and sophisticated planning needs. At Ashvin K Yagnik & Co., we provide dedicated HNI advisory services.

Our HNI practice combines tax planning, investment structuring, compliance management, and lifestyle services into a comprehensive wealth management approach. We work with business owners, senior executives, professionals, and inheritors.

We understand HNIs value privacy, personalized service, and expert guidance. Our discrete, relationship-based approach ensures tailored solutions for your specific situation and goals.`,
    features: [
      "Comprehensive tax planning",
      "Investment structuring",
      "Multi-entity coordination",
      "Regulatory compliance",
      "Lifestyle planning",
      "Philanthropy advisory",
      "Family governance",
      "Private wealth reporting"
    ],
    process: [
      { step: "Wealth Assessment", description: "Complete review of assets, income, and goals" },
      { step: "Strategy Design", description: "Develop comprehensive wealth strategy" },
      { step: "Implementation", description: "Execute across all dimensions" },
      { step: "Ongoing Partnership", description: "Continuous advisory and optimization" }
    ],
    benefits: [
      "Holistic wealth management",
      "Significant tax savings",
      "Expert guidance",
      "Privacy and discretion",
      "Personalized service",
      "Peace of mind"
    ],
    useCases: [
      { title: "Business Owner", description: "Wealth extraction and planning" },
      { title: "Senior Executive", description: "Complex compensation planning" },
      { title: "Professional", description: "Practice income optimization" },
      { title: "Inheritor", description: "Managing inherited wealth" },
      { title: "Diversified Portfolio", description: "Multi-asset coordination" },
      { title: "Philanthropist", description: "Giving with impact" }
    ],
    faqs: [
      { question: "What qualifies as HNI?", answer: "Typically individuals with investable assets above ₹5 crore or total net worth above ₹25 crore. Our HNI services are designed for clients with complex financial situations." },
      { question: "How is HNI advisory different?", answer: "HNI advisory is comprehensive, covering all aspects of wealth. Unlike standard services, we provide dedicated relationship management, proactive planning, and coordinated execution." },
      { question: "What about privacy?", answer: "We maintain strict confidentiality and discretion. Our team is bound by professional ethics and NDAs. We use secure communication and document management." },
      { question: "Do you provide investment advice?", answer: "We provide tax-efficient investment structuring rather than investment selection. We work with your existing advisors or can recommend qualified investment professionals." }
    ],
    stats: [
      { number: "100+", label: "HNI Clients" },
      { number: "₹10000Cr+", label: "Wealth Advised" },
      { number: "25%", label: "Avg Tax Savings" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default HNIAdvisory;
