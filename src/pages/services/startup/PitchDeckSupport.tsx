import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Presentation } from "lucide-react";

const PitchDeckSupport = () => {
  const data = {
    title: "Pitch Deck & Investor Materials",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: Presentation,
    description: "Professional pitch deck development and investor materials preparation including financial models, investment memorandums, and due diligence documentation.",
    longDescription: `A compelling pitch deck can make the difference between getting funded and being passed over. At Ashvin K Yagnik & Co., we help startups create professional investor materials that tell their story effectively and demonstrate investment worthiness.

Our services cover pitch deck development, financial model building, investment memorandum preparation, and due diligence documentation. We combine storytelling with financial rigor to create materials that resonate with investors.

Whether you're preparing for your first angel round or a Series B presentation, our team helps you present your opportunity in the most compelling way possible.`,
    features: [
      "Pitch deck content and design",
      "Financial model development",
      "Investment memorandum",
      "Cap table preparation",
      "Due diligence data room",
      "Investor Q&A preparation",
      "Valuation support",
      "Term sheet review"
    ],
    process: [
      { step: "Story Development", description: "Define narrative arc and key messages" },
      { step: "Content Creation", description: "Develop slides, financials, and supporting materials" },
      { step: "Review & Refine", description: "Iterate based on feedback and practice" },
      { step: "Investor Prep", description: "Prepare for meetings and questions" }
    ],
    benefits: [
      "Professional presentation",
      "Compelling narrative",
      "Accurate financials",
      "Investor confidence",
      "Meeting readiness",
      "Due diligence preparedness"
    ],
    useCases: [
      { title: "Angel Round", description: "First pitch deck for angel investors" },
      { title: "Seed Funding", description: "Institutional seed round materials" },
      { title: "Series A/B", description: "Comprehensive investor package" },
      { title: "Demo Day", description: "Accelerator demo day preparation" },
      { title: "Corporate VC", description: "Strategic investor presentations" },
      { title: "Board Updates", description: "Investor update presentations" }
    ],
    faqs: [
      { question: "What slides should a pitch deck include?", answer: "Key slides: Problem, Solution, Market size, Business model, Traction, Team, Competition, Financials, Ask, and Use of funds. 10-15 slides is typical." },
      { question: "Should I have different deck versions?", answer: "Yes - a teaser deck for cold outreach (5-7 slides), a full deck for meetings (12-15 slides), and an appendix with detail for follow-up." },
      { question: "What financial information do investors expect?", answer: "Historical financials (if any), 3-5 year projections, unit economics, CAC/LTV, burn rate, runway, and use of funds. Detailed model in appendix." },
      { question: "How do you support due diligence?", answer: "We help prepare data room with all required documents organized, anticipate DD questions, and provide ongoing support during the DD process." },
      { question: "Should we share the deck before meetings?", answer: "Many VCs request deck upfront for screening. Send teaser version first. Share full deck after establishing interest to maintain discussion control." }
    ],
    stats: [
      { number: "150+", label: "Decks Created" },
      { number: "₹300Cr+", label: "Funding Raised" },
      { number: "80%", label: "Meeting Conversion" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default PitchDeckSupport;
