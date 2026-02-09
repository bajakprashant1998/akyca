import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Coins } from "lucide-react";

const FundRaising = () => {
  const data = {
    title: "Fund Raising & Capital Advisory",
    parentService: "Financial Advisory Services",
    parentServicePath: "/services/financial-advisory",
    icon: Coins,
    description: "Comprehensive fund raising support including equity funding, debt financing, venture capital, private equity, and alternative financing solutions.",
    longDescription: `Access to capital is crucial for business growth, expansion, and strategic initiatives. At Ashvin K Yagnik & Co., we provide comprehensive fund raising advisory that helps businesses access the right type of capital at optimal terms.

Our fund raising services span the entire capital spectrum from seed funding for startups to growth equity for established businesses, debt financing for working capital and expansion, and specialized instruments like convertible notes and mezzanine financing.

We work with a wide network of investors including angel investors, venture capital funds, private equity firms, family offices, banks, and NBFCs to identify the best funding sources for your specific needs and stage of growth.`,
    features: [
      "Equity funding strategy and preparation",
      "Investor identification and outreach",
      "Pitch deck and investment memorandum preparation",
      "Term sheet negotiation support",
      "Due diligence coordination",
      "Debt financing and working capital",
      "Convertible instruments and mezzanine financing",
      "ESOP structuring for fund raising"
    ],
    process: [
      { step: "Readiness Assessment", description: "Evaluate funding requirements and investment readiness" },
      { step: "Positioning & Materials", description: "Prepare compelling pitch deck and financial projections" },
      { step: "Investor Outreach", description: "Identify and engage suitable investors" },
      { step: "Negotiation & Closure", description: "Negotiate terms and complete transaction documentation" }
    ],
    benefits: [
      "Access to curated investor network",
      "Professional fund raising materials",
      "Optimal valuation outcomes",
      "Investor-friendly term negotiations",
      "Smooth due diligence process",
      "Timely funding closure"
    ],
    useCases: [
      { title: "Seed Stage Startups", description: "First institutional funding from angels and micro VCs" },
      { title: "Series A/B Funding", description: "Growth capital from venture capital funds" },
      { title: "Growth Equity", description: "Private equity for established profitable businesses" },
      { title: "Bridge Financing", description: "Short-term capital between funding rounds" },
      { title: "Acquisition Financing", description: "Funding for M&A transactions" },
      { title: "Working Capital", description: "Debt financing for operational needs" }
    ],
    faqs: [
      { question: "How long does equity fund raising typically take?", answer: "Equity fund raising typically takes 4-6 months from preparation to closure. The timeline depends on market conditions, investor interest, and company readiness." },
      { question: "What documents are needed for fund raising?", answer: "Key documents include pitch deck, financial model, cap table, incorporation documents, key contracts, founder backgrounds, and product/business documentation." },
      { question: "How is company valuation determined?", answer: "Valuation depends on multiple factors including revenue, growth rate, margins, market size, competitive position, team quality, and comparable transactions in the sector." },
      { question: "What are typical investor expectations?", answer: "Investors typically seek board seats, protective provisions, anti-dilution rights, liquidation preferences, and information rights. Terms vary by investor type and stage." },
      { question: "Do you help with debt financing as well?", answer: "Yes, we assist with term loans, working capital facilities, equipment financing, and specialized credit products from banks, NBFCs, and alternative lenders." }
    ],
    stats: [
      { number: "₹200Cr+", label: "Funds Raised" },
      { number: "50+", label: "Funding Rounds" },
      { number: "100+", label: "Investor Network" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Valuation Services", description: "Business valuation", link: "/services/financial/valuation-services" },
      { title: "Due Diligence", description: "Investor readiness", link: "/services/corporate/due-diligence" },
      { title: "Virtual CFO", description: "Financial leadership", link: "/services/financial/virtual-cfo" },
      { title: "Project Finance", description: "Debt syndication", link: "/services/financial/project-finance" },
      { title: "Business Structuring", description: "Entity setup", link: "/services/financial/business-structuring" },
      { title: "Startup Registration", description: "DPIIT Registration", link: "/services/startup/dpiit-registration" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default FundRaising;
