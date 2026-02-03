import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building } from "lucide-react";

const ProjectFinance = () => {
  const data = {
    title: "Project Finance & Loan Syndication",
    parentService: "Financial Advisory Services",
    parentServicePath: "/services/financial-advisory",
    icon: Building,
    description: "Comprehensive project finance advisory including feasibility studies, financial modeling, lender negotiations, and loan syndication for infrastructure and industrial projects.",
    longDescription: `Project finance is a specialized form of financing where the loan is repaid primarily from the project's cash flows. At Ashvin K Yagnik & Co., we provide end-to-end project finance advisory that helps you secure optimal funding for capital-intensive projects.

Our services include project feasibility studies, financial modeling, preparation of Detailed Project Reports (DPR), lender identification, term sheet negotiations, and disbursement monitoring. We work with banks, NBFCs, development finance institutions, and private credit funds to structure the best financing solutions.

Whether you're setting up a manufacturing facility, developing a real estate project, or implementing an infrastructure scheme, our experienced team guides you through the entire project finance lifecycle.`,
    features: [
      "Techno-economic feasibility studies",
      "Detailed Project Report (DPR) preparation",
      "Financial modeling and projections",
      "Lender identification and shortlisting",
      "Term sheet negotiation support",
      "Documentation review and support",
      "Loan syndication for large projects",
      "Disbursement monitoring and compliance"
    ],
    process: [
      { step: "Feasibility Analysis", description: "Assess technical and financial viability of the project" },
      { step: "DPR Preparation", description: "Prepare comprehensive project report for lenders" },
      { step: "Lender Engagement", description: "Identify suitable lenders and negotiate terms" },
      { step: "Closure & Monitoring", description: "Complete documentation and monitor disbursements" }
    ],
    benefits: [
      "Optimal debt-equity mix",
      "Competitive interest rates",
      "Flexible repayment structures",
      "Multiple lender options",
      "Professional documentation",
      "Timely disbursements"
    ],
    useCases: [
      { title: "Manufacturing Projects", description: "New factories, plant expansions, and capacity additions" },
      { title: "Real Estate Development", description: "Residential, commercial, and mixed-use projects" },
      { title: "Infrastructure Projects", description: "Roads, power, water, and logistics infrastructure" },
      { title: "Healthcare Facilities", description: "Hospitals, clinics, and medical centers" },
      { title: "Educational Institutions", description: "Schools, colleges, and training centers" },
      { title: "Renewable Energy", description: "Solar, wind, and other clean energy projects" }
    ],
    faqs: [
      { question: "What is the typical debt-equity ratio for project finance?", answer: "Debt-equity ratio varies by sector and risk profile. Manufacturing projects typically get 1.5:1 to 2:1, while infrastructure projects may get up to 3:1 or 4:1 ratio." },
      { question: "What documents are required for project finance?", answer: "Key documents include DPR, financial projections, land documents, environmental clearances, project approvals, promoter KYC, and collateral details." },
      { question: "How long does project finance approval take?", answer: "Approval timeline ranges from 2-4 months for term loans from banks to 4-6 months for consortium financing or specialized infrastructure lending." },
      { question: "What are the typical fees and charges?", answer: "Lenders charge processing fees (0.5-1%), commitment fees on undisbursed amounts, and documentation charges. Our advisory fees are structured based on project size." },
      { question: "Can you help with refinancing existing loans?", answer: "Yes, we help optimize existing project loans through refinancing, take-out financing, and restructuring to reduce costs and improve terms." }
    ],
    stats: [
      { number: "₹1000Cr+", label: "Financing Arranged" },
      { number: "100+", label: "Projects Funded" },
      { number: "25+", label: "Lender Relationships" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ProjectFinance;
