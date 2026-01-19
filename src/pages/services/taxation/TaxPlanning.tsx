import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { TrendingUp } from "lucide-react";

const data = {
  title: "Tax Planning & Advisory",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: TrendingUp,
  description: "Strategic tax planning to minimize your tax liability legally while maximizing wealth creation with customized solutions.",
  longDescription: `Tax Planning & Advisory is a proactive approach to managing your tax liability through legal and strategic methods. Unlike reactive tax filing, tax planning involves analyzing your financial situation throughout the year to identify opportunities for tax savings.

Our expert advisors work with you to understand your financial goals, income sources, and investment preferences to create a customized tax-saving strategy. We help you make informed decisions about investments, business structures, and timing of transactions to optimize your overall tax position.

From choosing the right tax regime to structuring your salary components, from investment-linked savings to business deductions, we cover every aspect of tax optimization while ensuring complete compliance with tax laws.`,
  features: [
    "Annual tax planning strategies customized to your profile",
    "Old vs New tax regime comparison and recommendation",
    "Investment-linked tax savings (ELSS, PPF, NPS)",
    "Retirement planning with tax benefits",
    "Business structure optimization for tax efficiency",
    "Salary restructuring for maximum tax savings",
    "Capital gains planning and deferral strategies",
    "Tax-efficient wealth transfer planning"
  ],
  process: [
    { step: "Financial Profile Analysis", description: "Comprehensive review of your income, expenses, investments, and goals" },
    { step: "Tax Liability Assessment", description: "Calculate current and projected tax liability under different scenarios" },
    { step: "Strategy Formulation", description: "Develop customized tax-saving strategies aligned with your goals" },
    { step: "Implementation Support", description: "Guide you through execution of the tax-saving plan" }
  ],
  benefits: [
    "Potential savings of 20-30% on tax liability",
    "Completely legal tax optimization methods",
    "Proactive planning instead of reactive filing",
    "Year-round advisory support",
    "Alignment with long-term financial goals",
    "Peace of mind with expert guidance"
  ],
  useCases: [
    { title: "High-Income Professionals", description: "Doctors, lawyers, and consultants seeking to optimize their tax liability" },
    { title: "Business Owners", description: "Entrepreneurs planning business structure for tax efficiency" },
    { title: "Young Professionals", description: "Early career individuals starting their tax-saving journey" },
    { title: "Pre-Retirees", description: "Individuals planning tax-efficient retirement corpus" },
    { title: "Investors", description: "Active investors managing capital gains tax" },
    { title: "HNIs", description: "High net worth individuals with complex financial portfolios" }
  ],
  faqs: [
    { question: "When should I start tax planning?", answer: "Ideally, tax planning should begin at the start of the financial year (April). However, it's never too late to start. We recommend quarterly reviews to stay on track." },
    { question: "Which tax regime is better - Old or New?", answer: "It depends on your deductions and exemptions. If you have significant deductions (above ₹3-4 lakhs), the old regime may be better. Our advisors will analyze your specific situation and recommend the optimal regime." },
    { question: "What are the best tax-saving investments?", answer: "Common options include ELSS mutual funds, PPF, NPS, life insurance, health insurance (80D), and home loan interest. The best choice depends on your risk appetite, liquidity needs, and financial goals." },
    { question: "Can business owners benefit from tax planning?", answer: "Absolutely! Business structure optimization, expense planning, depreciation strategies, and timing of income/expenses can significantly reduce tax liability for businesses." },
    { question: "How much can I save through tax planning?", answer: "Savings vary based on individual circumstances, but clients typically save 20-30% on their tax liability through proper planning. High-income individuals often save even more." }
  ],
  stats: [
    { number: "₹100Cr+", label: "Tax Saved for Clients" },
    { number: "25%", label: "Average Tax Savings" },
    { number: "5,000+", label: "Clients Advised" },
    { number: "99%", label: "Client Satisfaction" }
  ]
};

const TaxPlanning = () => <SubServiceTemplate data={data} />;

export default TaxPlanning;
