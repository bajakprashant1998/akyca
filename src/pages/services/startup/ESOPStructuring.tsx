import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const ESOPStructuring = () => {
  const data = {
    title: "ESOP Structuring & Compliance",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: Users,
    description: "Complete ESOP services including scheme design, valuation, grant management, exercise facilitation, and tax compliance for employees and companies.",
    longDescription: `Employee Stock Option Plans (ESOPs) are powerful tools for startups to attract and retain talent. At Ashvin K Yagnik & Co., we provide end-to-end ESOP services from scheme design to exit management.

Our services cover ESOP scheme drafting, board and shareholder approvals, grant letter preparation, fair market valuation, exercise facilitation, and comprehensive tax compliance for both the company and employees. We help you design competitive ESOP programs while managing complexity.

Whether you're implementing your first ESOP or managing a mature scheme with multiple grants, our team provides the expertise needed for smooth administration and compliance.`,
    features: [
      "ESOP scheme design and drafting",
      "Board and shareholder resolution",
      "Grant letter and vesting schedule",
      "Fair market value certification",
      "Exercise and allotment support",
      "Perquisite and capital gains tax",
      "TDS compliance on exercise",
      "Form 12BA preparation"
    ],
    process: [
      { step: "Scheme Design", description: "Design ESOP scheme aligned with company goals" },
      { step: "Approval & Setup", description: "Obtain approvals and set up administration" },
      { step: "Grant Management", description: "Issue grants and track vesting" },
      { step: "Exercise & Tax", description: "Manage exercise, allotment, and tax compliance" }
    ],
    benefits: [
      "Attract top talent",
      "Align employee interests",
      "Retention tool",
      "Tax-efficient compensation",
      "Proper compliance",
      "Clean cap table"
    ],
    useCases: [
      { title: "Early Stage Startups", description: "First ESOP scheme for founding team" },
      { title: "Growth Stage", description: "Scaling ESOP for larger team" },
      { title: "Pre-IPO Companies", description: "ESOP management before public listing" },
      { title: "Foreign Employees", description: "ESOP to non-resident employees" },
      { title: "Exercise Events", description: "Managing ESOP exercise during funding" },
      { title: "Secondary Sale", description: "ESOP buyback and secondary transactions" }
    ],
    faqs: [
      { question: "When should startups implement ESOP?", answer: "Ideally before first funding round. Early ESOP pool (typically 10-15%) can be created with shareholder approval for future grants." },
      { question: "What is the tax treatment of ESOPs?", answer: "Perquisite tax at exercise (FMV minus exercise price, taxed as salary). Capital gains at sale (sale price minus FMV at exercise). Startups get tax deferral up to 5 years or till exit." },
      { question: "How is ESOP valuation done?", answer: "FMV must be certified by a merchant banker or CA using DCF or prescribed methods. For startups, last funding round price is a good reference." },
      { question: "Can ESOPs be issued to contractors?", answer: "ESOPs are typically for employees. Contractors may be covered through phantom stocks or SAR schemes which are similar but have different structures." },
      { question: "What happens to ESOPs when employee leaves?", answer: "Unvested options typically lapse. Vested options may have an exercise window (usually 90 days to 1 year) as per scheme terms." }
    ],
    stats: [
      { number: "50+", label: "ESOP Schemes" },
      { number: "5000+", label: "Grants Managed" },
      { number: "₹100Cr+", label: "Value Created" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ESOPStructuring;
