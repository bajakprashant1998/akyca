import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { RefreshCcw } from "lucide-react";

const TurnaroundRestructuring = () => {
  const data = {
    title: "Turnaround & Restructuring Advisory",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: RefreshCcw,
    description: "Strategic advisory for distressed businesses including operational turnaround, financial restructuring, and stakeholder management.",
    longDescription: `Businesses facing financial distress need immediate, expert intervention to survive and recover. At Ashvin K Yagnik & Co., we provide turnaround and restructuring advisory to help distressed companies navigate crisis and return to health.

Our approach combines immediate cash flow stabilization with medium-term operational improvement and financial restructuring. We work with management, lenders, and other stakeholders to develop and execute viable turnaround plans.

We understand that every crisis is unique and requires customized solutions. Our team brings experience across industries and distress situations to design practical, implementable strategies.`,
    features: [
      "Viability assessment",
      "Cash flow stabilization",
      "Operational restructuring",
      "Cost rationalization",
      "Debt restructuring",
      "Lender negotiation",
      "Stakeholder management",
      "Implementation support"
    ],
    process: [
      { step: "Rapid Assessment", description: "Assess financial position and viability" },
      { step: "Stabilization", description: "Immediate cash and operations stabilization" },
      { step: "Strategy Development", description: "Create comprehensive turnaround plan" },
      { step: "Implementation", description: "Execute with ongoing monitoring" }
    ],
    benefits: [
      "Business survival",
      "Value preservation",
      "Stakeholder confidence",
      "Structured approach",
      "Expert negotiation",
      "Sustainable recovery"
    ],
    useCases: [
      { title: "Cash Crisis", description: "Immediate liquidity management" },
      { title: "Over-leveraged", description: "Debt restructuring and workout" },
      { title: "Operational Losses", description: "Cost reduction and efficiency" },
      { title: "Market Disruption", description: "Business model pivot" },
      { title: "Pre-IBC Resolution", description: "Avoiding insolvency" },
      { title: "Post-Resolution", description: "Implementing resolution plan" }
    ],
    faqs: [
      { question: "When should we seek turnaround help?", answer: "As early as possible - when you see consistent losses, cash flow pressure, covenant breaches, or vendor/salary delays. Earlier intervention gives more options." },
      { question: "Can you negotiate with our lenders?", answer: "Yes, we help prepare restructuring proposals, financial projections, and negotiate with lenders for terms modification, additional working capital, or one-time settlement." },
      { question: "How long does a turnaround take?", answer: "Stabilization can be achieved in 3-6 months. Sustainable turnaround typically takes 18-24 months. We work with you throughout the journey." },
      { question: "What if the business isn't viable?", answer: "If viability is questionable, we help explore alternatives - sale, merger, planned wind-down, or IBC route. The goal is to maximize stakeholder value in any scenario." }
    ],
    stats: [
      { number: "25+", label: "Turnarounds" },
      { number: "₹1000Cr+", label: "Debt Restructured" },
      { number: "80%", label: "Success Rate" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default TurnaroundRestructuring;
