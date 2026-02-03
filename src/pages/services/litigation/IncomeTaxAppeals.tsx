import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Scale } from "lucide-react";

const IncomeTaxAppeals = () => {
  const data = {
    title: "Income Tax Appeals",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: Scale,
    description: "Expert representation in income tax appeals before CIT(A), ITAT, High Courts, and Supreme Court with strategic case preparation and advocacy.",
    longDescription: `When you disagree with an income tax assessment order, appealing to the right forum with proper representation is crucial for a favorable outcome. At Ashvin K Yagnik & Co., we provide comprehensive income tax appeal services from the first appeal to the highest court.

Our litigation team combines deep technical knowledge with advocacy skills to present your case effectively. We handle appeals before Commissioner of Income Tax (Appeals), Income Tax Appellate Tribunal, High Courts, and provide support for Supreme Court matters.

Whether you're challenging additions, penalties, or interpretation of law, our experienced team prepares robust arguments, gathers supporting evidence, and represents your interests zealously at every stage of the appellate process.`,
    features: [
      "Appeal before CIT(A) with written submissions",
      "ITAT representation and hearings",
      "High Court tax appeals",
      "Supreme Court SLP support",
      "Stay petition filing",
      "Rectification and revision petitions",
      "Cross objection preparation",
      "Settlement Commission applications"
    ],
    process: [
      { step: "Case Review", description: "Analyze assessment order and identify appeal grounds" },
      { step: "Appeal Filing", description: "Prepare and file appeal with all grounds and documentation" },
      { step: "Hearing Preparation", description: "Compile evidence, legal citations, and written submissions" },
      { step: "Representation", description: "Present case effectively and follow through to order" }
    ],
    benefits: [
      "Expert technical representation",
      "Strong legal arguments",
      "Higher success rates",
      "Stay on disputed demand",
      "Proper documentation",
      "Timely appeal filing"
    ],
    useCases: [
      { title: "Assessment Additions", description: "Challenging income additions by Assessing Officer" },
      { title: "Penalty Appeals", description: "Contesting penalties under various sections" },
      { title: "Interpretation Issues", description: "Disputes on law interpretation" },
      { title: "Transfer Pricing", description: "TP adjustment appeals" },
      { title: "Reassessment", description: "Challenging validity of reassessment proceedings" },
      { title: "Recovery Stay", description: "Obtaining stay on disputed demands" }
    ],
    faqs: [
      { question: "What is the timeline for filing income tax appeal?", answer: "Appeal to CIT(A) must be filed within 30 days of receiving the assessment order. ITAT appeal must be filed within 60 days of CIT(A) order." },
      { question: "What is the fee for filing appeals?", answer: "CIT(A) fee is ₹250-1000 based on disputed amount. ITAT fee ranges from ₹500 to ₹10,000 based on assessed income." },
      { question: "Can we get stay on demand during appeal?", answer: "Yes, CIT(A) and ITAT can grant stay on disputed demand. Typically 20% payment may be required, but full stay is possible in deserving cases." },
      { question: "What is the average time for appeal disposal?", answer: "CIT(A) appeals take 1-2 years. ITAT appeals take 2-4 years. High Court matters may take 3-5 years. Timelines vary by bench and complexity." },
      { question: "Can we claim costs if we win the appeal?", answer: "ITAT and courts can award costs in appropriate cases, but it's not automatic. Cost orders are rare and usually in cases of frivolous departmental appeals." }
    ],
    stats: [
      { number: "500+", label: "Appeals Handled" },
      { number: "75%", label: "Success Rate" },
      { number: "₹100Cr+", label: "Demand Relief" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default IncomeTaxAppeals;
