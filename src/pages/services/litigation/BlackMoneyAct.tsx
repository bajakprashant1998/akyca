import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Shield } from "lucide-react";

const BlackMoneyAct = () => {
  const data = {
    title: "Black Money Act & PMLA",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: Shield,
    description: "Specialized representation for cases under Black Money Act and PMLA including undisclosed foreign income, assets, and anti-money laundering proceedings.",
    longDescription: `The Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015, and the Prevention of Money Laundering Act (PMLA) carry severe penalties including prosecution. At Ashvin K Yagnik & Co., we provide specialized defense services in these high-stakes matters.

Our team handles cases involving undisclosed foreign income, foreign assets, benami transactions, ED investigations, and PMLA proceedings. We provide representation before tax authorities, Enforcement Directorate, PMLA Tribunal, and courts.

With the increasing focus on overseas assets and money laundering, expert guidance is essential to navigate these complex proceedings while protecting your interests and minimizing liabilities.`,
    features: [
      "Black Money Act assessment representation",
      "Foreign asset disclosure and compliance",
      "ED summons and investigation support",
      "PMLA Tribunal representation",
      "Benami transaction defense",
      "Asset attachment challenge",
      "Prosecution defense",
      "Compounding applications"
    ],
    process: [
      { step: "Case Assessment", description: "Analyze facts and legal position under applicable laws" },
      { step: "Strategy Development", description: "Develop defense strategy considering all aspects" },
      { step: "Representation", description: "Represent before authorities and tribunals" },
      { step: "Resolution", description: "Work towards favorable resolution or appeal" }
    ],
    benefits: [
      "Specialized expertise",
      "Strategic defense",
      "Multi-forum representation",
      "Confidential handling",
      "Prosecution defense",
      "Penalty minimization"
    ],
    useCases: [
      { title: "Undisclosed Foreign Income", description: "Defense in foreign income cases" },
      { title: "Foreign Assets", description: "Non-disclosure of foreign assets" },
      { title: "PMLA Investigations", description: "ED investigation and attachment" },
      { title: "Benami Property", description: "Benami transaction proceedings" },
      { title: "Hawala Transactions", description: "Defense in remittance cases" },
      { title: "Prosecution Cases", description: "Criminal prosecution defense" }
    ],
    faqs: [
      { question: "What is the tax rate under Black Money Act?", answer: "Undisclosed foreign income and assets are taxed at 30% plus penalty of 90%, making effective rate 120%. Additionally, prosecution with rigorous imprisonment up to 10 years is possible." },
      { question: "What assets must be disclosed under Black Money Act?", answer: "All foreign financial accounts, immovable property, movable assets, and beneficial interests in foreign trusts or entities must be disclosed in the income tax return." },
      { question: "Can ED attach property before trial?", answer: "Yes, under PMLA, ED can provisionally attach property connected with money laundering. Attachment can be challenged before PMLA Tribunal." },
      { question: "What is the PMLA threshold?", answer: "PMLA applies to proceeds of crime from scheduled offences. There's no monetary threshold - any amount from scheduled offence can attract PMLA." },
      { question: "Can these matters be settled?", answer: "Black Money Act has limited compounding provisions. PMLA matters are criminal and don't have settlement mechanism, but proper legal defense can lead to discharge." }
    ],
    stats: [
      { number: "30+", label: "Complex Cases" },
      { number: "Specialized", label: "Practice Area" },
      { number: "100%", label: "Confidentiality" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Income Tax Appeals", description: "Tax litigation", link: "/services/litigation/income-tax-appeals" },
      { title: "International Taxation", description: "Foreign asset tax", link: "/services/taxation/international-taxation" },
      { title: "Business Structuring", description: "Asset holding", link: "/services/financial/business-structuring" },
      { title: "Tax Representation", description: "Department liaison", link: "/services/taxation/tax-representation" },
      { title: "FEMA Compliance", description: "Regulatory compliance", link: "/services/compliance/rbi-fema-sebi-compliance" },
      { title: "Notice Drafting", description: "Reply to notices", link: "/services/litigation/notice-drafting" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default BlackMoneyAct;
