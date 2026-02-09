import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { UserCog } from "lucide-react";

const VirtualCFO = () => {
  const data = {
    title: "Virtual CFO Services",
    parentService: "Financial Advisory Services",
    parentServicePath: "/services/financial-advisory",
    icon: UserCog,
    description: "Outsourced CFO services providing strategic financial leadership, planning, analysis, and management for startups and growing businesses without full-time CFO costs.",
    longDescription: `Growing businesses need CFO-level financial expertise but may not have the budget or need for a full-time CFO. At Ashvin K Yagnik & Co., our Virtual CFO services provide strategic financial leadership on a flexible, cost-effective basis.

Our Virtual CFO team works as an extension of your management, providing financial strategy, cash flow management, investor relations, budgeting, MIS reporting, and compliance oversight. We bring big-company financial practices to businesses at every stage of growth.

Whether you're a startup preparing for your next funding round, an SME seeking to professionalize financial operations, or a company in transition needing temporary CFO support, our Virtual CFO services adapt to your specific needs and scale with your business.`,
    features: [
      "Financial strategy and planning",
      "Cash flow management and forecasting",
      "Budgeting and variance analysis",
      "MIS design and implementation",
      "Investor relations and reporting",
      "Banking and treasury management",
      "Compliance monitoring and coordination",
      "Board presentation preparation"
    ],
    process: [
      { step: "Needs Assessment", description: "Understand business stage, challenges, and financial needs" },
      { step: "Engagement Design", description: "Structure appropriate level of involvement and deliverables" },
      { step: "Onboarding", description: "Review current systems, team, and establish communication rhythms" },
      { step: "Ongoing Support", description: "Provide regular CFO-level guidance and deliverables" }
    ],
    benefits: [
      "CFO expertise at fraction of cost",
      "Flexible engagement models",
      "Objective external perspective",
      "Access to specialized skills",
      "Scalable with business growth",
      "Professional investor-grade reporting"
    ],
    useCases: [
      { title: "Funded Startups", description: "Post-funding financial management and investor reporting" },
      { title: "Growth Stage SMEs", description: "Professionalizing finance function for scale" },
      { title: "Project-Based", description: "Specific initiatives like fund raising or system implementation" },
      { title: "Transition Support", description: "Coverage during CFO search or turnover" },
      { title: "Board Preparation", description: "Investor-grade board packs and reporting" },
      { title: "IPO Readiness", description: "Preparing for public market requirements" }
    ],
    faqs: [
      { question: "How is Virtual CFO different from accounting services?", answer: "Virtual CFO focuses on strategic financial leadership, planning, and decision support, while accounting services handle transaction processing, bookkeeping, and routine compliance." },
      { question: "How much time does a Virtual CFO dedicate?", answer: "Engagement levels vary from a few hours per month for basic oversight to several days per week for intensive involvement. We customize based on your needs." },
      { question: "Who will be our Virtual CFO?", answer: "We assign experienced chartered accountants with CFO or controller experience matched to your industry and stage. You'll have a dedicated primary contact with team support." },
      { question: "What systems integration is required?", answer: "We work with your existing systems (Tally, Zoho, QuickBooks, etc.) and can recommend upgrades if needed. No specific system is required to start." },
      { question: "How do you ensure confidentiality?", answer: "All team members sign strict NDAs. We maintain professional confidentiality standards and limit information access to assigned team members only." }
    ],
    stats: [
      { number: "50+", label: "Active Clients" },
      { number: "₹500Cr+", label: "Revenue Managed" },
      { number: "100+", label: "Board Decks Created" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "MIS Dashboards", description: "Financial reporting", link: "/services/digital/mis-dashboards" },
      { title: "Fund Raising", description: "Capital planning", link: "/services/financial/fund-raising" },
      { title: "Statutory Audit", description: "Compliance oversight", link: "/services/audit/statutory-audit" },
      { title: "Tax Planning", description: "Strategic tax/planning", link: "/services/taxation/tax-planning" },
      { title: "Business Structuring", description: "Entity planning", link: "/services/financial/business-structuring" },
      { title: "Internal Audit", description: "Process control", link: "/services/audit/internal-audit" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default VirtualCFO;
