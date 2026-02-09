import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building } from "lucide-react";

const RealEstate = () => {
  const data = {
    title: "Real Estate & RERA Compliance",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: Building,
    description: "Comprehensive accounting, taxation, and regulatory compliance services for real estate developers and builders.",
    longDescription: `The real estate sector in India operates under complex regulatory frameworks including RERA, GST, and income tax provisions specific to construction and development activities. At Ashvin K Yagnik & Co., we provide specialized services to real estate developers, builders, and property investors.

Our services cover the entire project lifecycle - from land acquisition structuring to project completion and handover. We assist with RERA registration, project accounting as per ICDS and Ind AS, GST compliance including input tax credit optimization, and income tax planning using POCM or project completion methods.

With deep sector expertise, we help developers navigate the regulatory landscape while optimizing tax positions and ensuring complete compliance.`,
    features: [
      "RERA registration and compliance",
      "Project-wise accounting systems",
      "Revenue recognition advisory (ICDS/Ind AS)",
      "GST on real estate transactions",
      "Joint development agreement structuring",
      "TDS compliance for property transactions",
      "Transfer pricing for group transactions",
      "Project feasibility and financial modeling"
    ],
    process: [
      { step: "Project Assessment", description: "Understand project structure, agreements, and compliance requirements" },
      { step: "Compliance Setup", description: "RERA registration, accounting systems, and tax registration" },
      { step: "Ongoing Management", description: "Monthly accounting, GST returns, and quarterly reporting" },
      { step: "Project Completion", description: "Final accounts, tax filings, and closure compliance" }
    ],
    benefits: [
      "100% RERA compliance",
      "Optimized tax structure",
      "Accurate project accounting",
      "Buyer confidence",
      "Smooth project closures",
      "Expert sector guidance"
    ],
    useCases: [
      { title: "New Project Launch", description: "RERA registration and compliance setup for new projects" },
      { title: "Joint Development", description: "Structuring JDA for tax efficiency and clear accounting" },
      { title: "Commercial Projects", description: "GST and accounting for commercial developments" },
      { title: "Redevelopment", description: "Complex redevelopment project accounting" },
      { title: "REITs", description: "REIT structuring and compliance advisory" },
      { title: "Land Banking", description: "Tax-efficient land acquisition structuring" }
    ],
    faqs: [
      { question: "Is RERA registration mandatory for all projects?", answer: "RERA registration is mandatory for all residential and commercial projects above 500 sq. meters or 8 apartments. We handle complete registration and ongoing compliance." },
      { question: "How is GST calculated on under-construction properties?", answer: "GST on under-construction properties is charged at 5% (without ITC) for residential and 12% for commercial properties. We help optimize your GST position and ensure proper invoicing." },
      { question: "What is the best revenue recognition method?", answer: "The method depends on project type, size, and risk profile. We advise on POCM vs project completion method and ensure compliance with ICDS and Ind AS requirements." },
      { question: "How to structure joint development agreements?", answer: "JDA structuring requires careful consideration of GST, income tax, and stamp duty implications. We design structures that optimize tax across all parties." }
    ],
    stats: [
      { number: "100+", label: "Projects Handled" },
      { number: "₹5000Cr+", label: "Project Value" },
      { number: "100%", label: "RERA Compliance" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Project Finance", description: "Construction loan", link: "/services/financial/project-finance" },
      { title: "GST Audit", description: "Real estate GST", link: "/services/gst/audit" },
      { title: "Corporate Taxation", description: "Developer tax", link: "/services/taxation/corporate-taxation" },
      { title: "Business Structuring", description: "JDA structuring", link: "/services/financial/business-structuring" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default RealEstate;
