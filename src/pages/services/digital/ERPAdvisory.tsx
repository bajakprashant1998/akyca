import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Database } from "lucide-react";

const ERPAdvisory = () => {
  const data = {
    title: "ERP Implementation Advisory",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: Database,
    description: "Independent advisory for ERP implementation projects ensuring right selection and successful deployment.",
    longDescription: `ERP implementations are complex, expensive, and often fail to deliver expected benefits. At Ashvin K Yagnik & Co., we provide independent ERP advisory to help businesses make the right choices and ensure successful implementations.

Unlike software vendors who push their products, we provide objective advice on whether you need an ERP, which solution fits your needs, and how to implement successfully. We support you through vendor selection, project planning, and implementation oversight.

Our focus is on the finance and accounting modules - ensuring they're configured correctly, integrated properly, and deliver accurate financial data.`,
    features: [
      "Requirement assessment",
      "Vendor evaluation",
      "RFP preparation",
      "Selection support",
      "Implementation oversight",
      "User acceptance testing",
      "Change management",
      "Post-go-live support"
    ],
    process: [
      { step: "Assessment", description: "Evaluate need and requirements" },
      { step: "Selection", description: "Vendor evaluation and selection" },
      { step: "Implementation", description: "Project oversight and quality assurance" },
      { step: "Stabilization", description: "Post-go-live support and optimization" }
    ],
    benefits: [
      "Right solution choice",
      "Successful implementation",
      "Cost control",
      "Risk mitigation",
      "Business continuity",
      "ROI realization"
    ],
    useCases: [
      { title: "First ERP", description: "Moving from spreadsheets to ERP" },
      { title: "ERP Upgrade", description: "Upgrading legacy ERP system" },
      { title: "ERP Change", description: "Switching to different ERP" },
      { title: "Module Addition", description: "Adding new modules to existing ERP" },
      { title: "Integration", description: "Connecting ERP with other systems" },
      { title: "Rescue", description: "Fixing troubled ERP project" }
    ],
    faqs: [
      { question: "Do we really need an ERP?", answer: "Not every business needs a full ERP. We assess your requirements honestly and may recommend simpler solutions if they fit your needs better. ERP makes sense above certain complexity thresholds." },
      { question: "Which ERP is best?", answer: "Depends on your industry, size, and requirements. SAP for large enterprises, Oracle/Microsoft for mid-market, Odoo/ERPNext for SMEs. We help you evaluate options objectively." },
      { question: "Why do ERP implementations fail?", answer: "Common reasons: unclear requirements, wrong selection, poor implementation, insufficient training, and inadequate change management. We help avoid all these pitfalls." },
      { question: "What's your role vs the implementer?", answer: "We're your independent advisor - ensuring the implementer delivers as promised. We don't implement but provide oversight, quality assurance, and user advocacy." }
    ],
    stats: [
      { number: "30+", label: "ERP Projects" },
      { number: "95%", label: "Success Rate" },
      { number: "₹50Cr+", label: "Projects Advised" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Finance Automation", description: "Workflow optimization", link: "/services/digital/finance-automation" },
      { title: "Internal Audit", description: "Process control evaluation", link: "/services/audit/internal-audit" },
      { title: "Cloud Accounting", description: "Modern platform setup", link: "/services/digital/cloud-accounting" },
      { title: "MIS Dashboards", description: "Real-time reporting", link: "/services/digital/mis-dashboards" },
      { title: "Business Structuring", description: "Process efficiency", link: "/services/financial/business-structuring" },
      { title: "Data Migration", description: "System transition", link: "/services/digital/data-migration" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ERPAdvisory;
