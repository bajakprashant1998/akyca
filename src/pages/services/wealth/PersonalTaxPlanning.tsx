import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Calculator } from "lucide-react";

const PersonalTaxPlanning = () => {
  const data = {
    title: "Personal Tax Planning",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: Calculator,
    description: "Comprehensive personal tax planning to legally minimize tax liability while maximizing wealth accumulation.",
    longDescription: `Effective personal tax planning goes beyond filing returns - it's about structuring your income, investments, and assets to minimize tax legally while aligning with your financial goals. At Ashvin K Yagnik & Co., we provide sophisticated tax planning for individuals.

Our approach considers all aspects of your financial life - salary structuring, investment income, capital gains, rental income, and business income if applicable. We design strategies using all available exemptions, deductions, and beneficial provisions under the Income Tax Act.

We work with salaried executives, business owners, professionals, and HNIs to create personalized tax-efficient structures that evolve with changing tax laws and life circumstances.`,
    features: [
      "Comprehensive tax assessment",
      "Investment tax optimization",
      "Salary restructuring",
      "Capital gains planning",
      "Section 80C-80U optimization",
      "New vs Old regime analysis",
      "Rental income structuring",
      "Advance tax planning"
    ],
    process: [
      { step: "Financial Analysis", description: "Complete review of income sources and assets" },
      { step: "Strategy Development", description: "Design personalized tax-saving strategies" },
      { step: "Implementation", description: "Execute restructuring and investments" },
      { step: "Regular Review", description: "Annual review and adjustment for law changes" }
    ],
    benefits: [
      "Significant tax savings",
      "Legal optimization",
      "Wealth accumulation",
      "Future planning",
      "Peace of mind",
      "Expert guidance"
    ],
    useCases: [
      { title: "Senior Executive", description: "Salary restructuring and investment planning" },
      { title: "Business Owner", description: "Optimal extraction from business" },
      { title: "Professional", description: "Practice income optimization" },
      { title: "Retiree", description: "Retirement income tax efficiency" },
      { title: "Property Owner", description: "Rental income structuring" },
      { title: "Investor", description: "Capital gains optimization" }
    ],
    faqs: [
      { question: "Should I choose old or new tax regime?", answer: "The choice depends on your deductions and exemptions. Generally, if total deductions exceed ₹3.75L, old regime may be better. We analyze your specific situation for optimal choice." },
      { question: "How much can I save through tax planning?", answer: "Savings depend on income level and current structure. Our clients typically save 15-30% on their tax liability through proper planning." },
      { question: "When should I start tax planning?", answer: "Ideally at the start of financial year (April). This gives maximum time for investment-linked deductions and proper income structuring." },
      { question: "Is tax planning different from tax evasion?", answer: "Absolutely. Tax planning uses legal provisions to minimize tax. We never recommend any illegal tax avoidance or evasion strategies." }
    ],
    stats: [
      { number: "500+", label: "Individuals Served" },
      { number: "20%", label: "Avg Tax Savings" },
      { number: "₹100Cr+", label: "Tax Saved" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "HNI Advisory", description: "Wealth advisory", link: "/services/wealth/hni-advisory" },
      { title: "Income Tax Return", description: "Tax filing", link: "/services/taxation/income-tax-return" },
      { title: "HUF & Family Office", description: "Tax saving entity", link: "/services/wealth/huf-family-office" },
      { title: "Estate & Will Advisory", description: "Asset planning", link: "/services/wealth/estate-will" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default PersonalTaxPlanning;
