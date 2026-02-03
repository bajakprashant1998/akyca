import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Target } from "lucide-react";

const BusinessPlanning = () => {
  const data = {
    title: "Business Planning & Strategy",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: Target,
    description: "Comprehensive business planning services including financial projections, business model development, go-to-market strategy, and growth planning.",
    longDescription: `Sound business planning is the foundation of startup success. At Ashvin K Yagnik & Co., we provide comprehensive business planning services that help founders translate their vision into actionable strategies and measurable milestones.

Our services cover business model development, financial projections, unit economics analysis, go-to-market strategy, and operational planning. We help you build robust business plans that stand up to investor scrutiny while serving as practical roadmaps.

Whether you're developing your first business plan for seed funding or refining strategy for growth, our team brings both financial rigor and strategic thinking to help you plan for success.`,
    features: [
      "Business model development",
      "Financial projections and modeling",
      "Unit economics analysis",
      "Go-to-market strategy",
      "Competitive analysis",
      "Pricing strategy",
      "Operational planning",
      "Milestone and KPI definition"
    ],
    process: [
      { step: "Discovery", description: "Understand vision, market, and competitive landscape" },
      { step: "Model Development", description: "Build business model and financial framework" },
      { step: "Strategy Formulation", description: "Develop GTM and growth strategies" },
      { step: "Plan Documentation", description: "Create comprehensive business plan document" }
    ],
    benefits: [
      "Clear strategic direction",
      "Investor-ready documentation",
      "Realistic financial projections",
      "Identified milestones",
      "Risk awareness",
      "Team alignment"
    ],
    useCases: [
      { title: "Pre-Seed Planning", description: "Initial business plan development" },
      { title: "Seed Stage", description: "Refining model for first funding" },
      { title: "Pivot Planning", description: "Restructuring business model" },
      { title: "Expansion Strategy", description: "Planning market expansion" },
      { title: "Product Launch", description: "New product go-to-market" },
      { title: "Board Planning", description: "Annual strategic planning" }
    ],
    faqs: [
      { question: "How long should a startup business plan be?", answer: "For early stage startups, a concise 15-20 page plan with appendices is ideal. Investors prefer clarity over length. Detailed operational plans can be separate documents." },
      { question: "How far should financial projections extend?", answer: "Typically 3-5 years for startups. Year 1 should be monthly, Years 2-3 quarterly, and beyond annual. The further out, the more scenario-based projections help." },
      { question: "What makes financial projections credible?", answer: "Bottom-up assumptions (not just top-down market %), clear unit economics, realistic customer acquisition costs, and benchmarks from comparable companies." },
      { question: "Should we include exit strategy?", answer: "Investors like to see you've thought about exits, but it shouldn't dominate. Mention potential paths (M&A, IPO) without committing to specific timelines." },
      { question: "How often should business plans be updated?", answer: "Review quarterly and update materially after significant changes (new product, funding, market shift). Annual comprehensive refresh is recommended." }
    ],
    stats: [
      { number: "100+", label: "Plans Created" },
      { number: "₹500Cr+", label: "Funding Enabled" },
      { number: "85%", label: "Funding Success" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default BusinessPlanning;
