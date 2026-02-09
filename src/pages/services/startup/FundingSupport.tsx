import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Wallet } from "lucide-react";

const FundingSupport = () => {
  const data = {
    title: "Funding Support & Investor Connect",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: Wallet,
    description: "End-to-end funding support including investor introductions, term sheet negotiation, transaction documentation, and closing assistance.",
    longDescription: `Raising funds is one of the most challenging aspects of building a startup. At Ashvin K Yagnik & Co., we provide comprehensive funding support that goes beyond pitch preparation to actively facilitate the fund raising process.

Our services include investor identification and introduction, term sheet negotiation support, transaction documentation, due diligence management, and closing assistance. We leverage our network of investors and our transaction experience to help startups secure the right funding.

Whether you're raising from angels, VCs, or strategic investors, our team supports you through every step of the fund raising journey to maximize your chances of success.`,
    features: [
      "Investor identification and mapping",
      "Introduction to relevant investors",
      "Term sheet negotiation support",
      "SHA and SSA review",
      "Due diligence management",
      "Cap table and compliance",
      "Closing documentation",
      "Post-close compliance"
    ],
    process: [
      { step: "Preparation", description: "Build investment thesis and target investor list" },
      { step: "Outreach", description: "Facilitate introductions and manage funnel" },
      { step: "Negotiation", description: "Support term sheet discussion and negotiation" },
      { step: "Closing", description: "Complete documentation and fund inflow" }
    ],
    benefits: [
      "Access to investor network",
      "Professional representation",
      "Better terms negotiation",
      "Faster fund raising",
      "Proper documentation",
      "Post-close support"
    ],
    useCases: [
      { title: "Angel Round", description: "First institutional funding" },
      { title: "Pre-Series A", description: "Bridge round before Series A" },
      { title: "Series A/B/C", description: "Venture capital rounds" },
      { title: "Strategic Funding", description: "Investment from corporates" },
      { title: "Debt Funding", description: "Venture debt and revenue financing" },
      { title: "Secondary Sale", description: "Founder and ESOP liquidity" }
    ],
    faqs: [
      { question: "What investors do you have access to?", answer: "We have relationships with angel networks, seed funds, Series A-C VCs, growth PE firms, and family offices. We match based on sector, stage, and check size fit." },
      { question: "How long does fund raising typically take?", answer: "Angel rounds may close in 2-3 months. Seed rounds take 3-4 months. Series A and beyond typically take 4-6 months from start to close." },
      { question: "What are typical term sheet terms to negotiate?", answer: "Key terms include valuation, liquidation preference, anti-dilution, board seats, protective provisions, and ESOP pool. We help optimize founder-friendly terms." },
      { question: "What documents are needed for closing?", answer: "Typically SHA, SSA, Articles amendment, board resolutions, and various compliance filings. We prepare and review all transaction documentation." },
      { question: "Do you charge success fees?", answer: "Our fee structure varies based on involvement level. We're transparent about fees upfront and align incentives with successful fund raising." }
    ],
    stats: [
      { number: "75+", label: "Rounds Closed" },
      { number: "₹400Cr+", label: "Funding Facilitated" },
      { number: "50+", label: "Investor Network" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Pitch Deck Support", description: "Investor materials", link: "/services/startup/pitch-deck-support" },
      { title: "Business Planning", description: "Financial modeing", link: "/services/startup/business-planning" },
      { title: "Valuation Services", description: "Business valuation", link: "/services/financial/valuation-services" },
      { title: "Due Diligence", description: "Financial DD", link: "/services/financial/due-diligence" },
      { title: "Mergers & Acquisitions", description: "Deal support", link: "/services/corporate/mergers-acquisitions" },
      { title: "Tax Planning", description: "Tax efficiency", link: "/services/taxation/tax-planning" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default FundingSupport;
