import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const HUFFamilyOffice = () => {
  const data = {
    title: "HUF & Family Office Structuring",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: Users,
    description: "Setup and management of Hindu Undivided Families and family offices for tax-efficient wealth management.",
    longDescription: `Hindu Undivided Family (HUF) offers unique tax planning opportunities under Indian law, providing an additional PAN with separate tax slab benefits. At Ashvin K Yagnik & Co., we help families leverage HUF for legitimate tax savings.

Beyond HUF, we assist wealthy families in setting up and running family offices - structured approaches to managing family wealth, investments, and governance. Our family office services include investment administration, consolidated reporting, and family governance frameworks.

We understand the sensitive nature of family wealth and provide discrete, professional services that protect family harmony while optimizing financial outcomes.`,
    features: [
      "HUF creation and deed drafting",
      "Capital infusion strategies",
      "HUF business structuring",
      "Family office setup",
      "Investment administration",
      "Consolidated reporting",
      "Family governance framework",
      "Inter-family transactions"
    ],
    process: [
      { step: "Family Assessment", description: "Understand family structure and wealth" },
      { step: "Structure Design", description: "Design HUF/family office structure" },
      { step: "Implementation", description: "Execute documentation and setup" },
      { step: "Ongoing Management", description: "Compliance, reporting, and advisory" }
    ],
    benefits: [
      "Additional tax benefits",
      "Asset protection",
      "Wealth consolidation",
      "Family governance",
      "Professional management",
      "Succession planning"
    ],
    useCases: [
      { title: "New HUF Creation", description: "Setting up HUF for tax benefits" },
      { title: "HUF Business", description: "Running business through HUF" },
      { title: "Family Office", description: "Multi-generational wealth management" },
      { title: "Property in HUF", description: "Real estate investments through HUF" },
      { title: "Investment HUF", description: "Portfolio management in HUF" },
      { title: "Business Family", description: "Family wealth structuring" }
    ],
    faqs: [
      { question: "How is HUF different from individual?", answer: "HUF is a separate legal entity with its own PAN, enjoying separate tax slab benefits. Income earned by HUF is taxed separately from members." },
      { question: "Who can be members of HUF?", answer: "HUF consists of a karta (manager, usually father), coparceners (male lineage members and daughters after 2005), and members (spouses). Only Hindus, Buddhists, Jains, and Sikhs can form HUF." },
      { question: "How to fund an HUF?", answer: "HUF can be funded through gifts, ancestral property, inheritance, or income from HUF assets. We design optimal funding strategies for maximum benefit." },
      { question: "What is a family office?", answer: "A family office is a professional structure managing a wealthy family's investments, taxes, succession, and administration. We help set up single-family offices for HNI families." }
    ],
    stats: [
      { number: "100+", label: "HUFs Created" },
      { number: "25+", label: "Family Offices" },
      { number: "₹500Cr+", label: "AUM Advised" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Succession Planning", description: "Transition planning", link: "/services/wealth/succession-planning" },
      { title: "Personal Tax Planning", description: "Tax efficiency", link: "/services/wealth/personal-tax-planning" },
      { title: "HNI Advisory", description: "Wealth management", link: "/services/wealth/hni-advisory" },
      { title: "Estate & Will Advisory", description: "Wealth transfer", link: "/services/wealth/estate-will" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default HUFFamilyOffice;
