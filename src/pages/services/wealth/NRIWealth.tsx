import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Globe } from "lucide-react";

const NRIWealth = () => {
  const data = {
    title: "NRI Wealth Structuring",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: Globe,
    description: "Complete wealth management for Non-Resident Indians covering India investments, taxation, and repatriation.",
    longDescription: `Non-Resident Indians face unique challenges managing wealth across countries - different tax systems, FEMA regulations, repatriation rules, and varying investment options. At Ashvin K Yagnik & Co., we specialize in NRI wealth management.

Our services cover the complete NRI financial lifecycle - from initial investments in India to eventual repatriation or return to India. We ensure FEMA/RBI compliance while optimizing tax across both countries.

We work with NRIs across the globe, understanding the specific requirements of different countries and their tax treaties with India. Whether you're investing, inheriting, or planning to return, we provide expert guidance.`,
    features: [
      "Residential status determination",
      "FEMA/RBI compliance",
      "NRO/NRE account management",
      "Property investment guidance",
      "Repatriation planning",
      "DTAA benefit optimization",
      "Tax return filing (India)",
      "Return to India planning"
    ],
    process: [
      { step: "Status Assessment", description: "Determine residential status and applicable rules" },
      { step: "Wealth Review", description: "Analyze India and overseas assets" },
      { step: "Strategy Design", description: "Create compliant and tax-efficient structure" },
      { step: "Ongoing Support", description: "Compliance, filing, and advisory" }
    ],
    benefits: [
      "FEMA compliance",
      "Tax optimization",
      "Smooth repatriation",
      "Investment guidance",
      "Complete support",
      "Peace of mind"
    ],
    useCases: [
      { title: "New NRI", description: "Setting up NRI financial structure" },
      { title: "Property Purchase", description: "Buying property in India as NRI" },
      { title: "Inheritance", description: "Receiving inheritance in India" },
      { title: "Repatriation", description: "Moving funds out of India" },
      { title: "Return to India", description: "Returning NRI status planning" },
      { title: "Rental Income", description: "Managing India rental property" }
    ],
    faqs: [
      { question: "How is NRI status determined?", answer: "Based on physical presence in India - generally less than 182 days. But deemed residency rules have added complexity. We determine your exact status and applicable tax rates." },
      { question: "Can NRIs invest in Indian stocks?", answer: "Yes, through Portfolio Investment Scheme (PIS) with designated bank account. We help set up PIS account and ensure compliance with investment limits." },
      { question: "How to repatriate sale proceeds of property?", answer: "Property sale proceeds by NRI can be repatriated subject to conditions including 15CA/CB certification. We handle complete documentation for repatriation." },
      { question: "Which DTAA benefits can I claim?", answer: "Depends on your country of residence and type of income. Common benefits include reduced TDS rates and foreign tax credit. We help claim all eligible treaty benefits." }
    ],
    stats: [
      { number: "300+", label: "NRI Clients" },
      { number: "₹1000Cr+", label: "Repatriation Done" },
      { number: "20+", label: "Countries Covered" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Personal Tax Planning", description: "India tax filing", link: "/services/wealth/personal-tax-planning" },
      { title: "International Taxation", description: "DTAA benefits", link: "/services/taxation/international-taxation" },
      { title: "FEMA Compliance", description: "RBI regulations", link: "/services/compliance/rbi-fema-sebi-compliance" },
      { title: "Estate & Will Advisory", description: "India assets", link: "/services/wealth/estate-will" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default NRIWealth;
