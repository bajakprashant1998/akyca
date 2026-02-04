import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { GitBranch } from "lucide-react";

const SuccessionPlanning = () => {
  const data = {
    title: "Succession Planning",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: GitBranch,
    description: "Strategic planning for smooth transition of business and wealth across generations.",
    longDescription: `Succession planning is one of the most critical yet often neglected aspects of wealth management. At Ashvin K Yagnik & Co., we help families plan and execute smooth transitions of business and wealth to the next generation.

Our approach combines financial structuring with family governance to ensure successful succession. We address business succession (leadership transition, ownership transfer, employee continuity) and wealth succession (asset distribution, tax efficiency, family harmony).

We work with promoter families to develop customized succession plans that protect family wealth, minimize tax impact, and ensure business continuity while respecting family dynamics and individual aspirations.`,
    features: [
      "Succession roadmap development",
      "Business ownership transfer",
      "Management transition planning",
      "Family constitution drafting",
      "Tax-efficient transfer structures",
      "Trust creation for succession",
      "Key person retention",
      "Conflict resolution framework"
    ],
    process: [
      { step: "Family Discovery", description: "Understand family dynamics and aspirations" },
      { step: "Strategy Development", description: "Design succession and governance framework" },
      { step: "Documentation", description: "Legal structures, trusts, and agreements" },
      { step: "Implementation", description: "Phased execution and monitoring" }
    ],
    benefits: [
      "Smooth transition",
      "Family harmony",
      "Business continuity",
      "Tax efficiency",
      "Clear governance",
      "Next-gen preparedness"
    ],
    useCases: [
      { title: "Promoter Transition", description: "Founder to next generation handover" },
      { title: "Multi-Successor", description: "Division among multiple heirs" },
      { title: "Professional Management", description: "Family to professional transition" },
      { title: "Partial Exit", description: "Some family members exiting" },
      { title: "Early Planning", description: "Succession planning for young promoters" },
      { title: "Crisis Succession", description: "Unplanned succession situations" }
    ],
    faqs: [
      { question: "When should we start succession planning?", answer: "Ideally 10-15 years before planned transition. Even if succession seems far away, early planning provides more options and smoother transitions." },
      { question: "How to handle unequal capabilities among children?", answer: "We design structures separating ownership from management. Children can own equally while the most capable leads operations. Family governance ensures fairness." },
      { question: "What if next generation isn't interested in business?", answer: "Options include professional management, partial sale, or complete exit. We help evaluate alternatives and execute the chosen path." },
      { question: "How to minimize taxes on succession?", answer: "Through strategic use of gifts, trusts, family arrangements, and timing of transfers. We design tax-efficient succession structures." }
    ],
    stats: [
      { number: "50+", label: "Successions Planned" },
      { number: "₹2000Cr+", label: "Assets Transitioned" },
      { number: "95%", label: "Successful Transitions" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default SuccessionPlanning;
