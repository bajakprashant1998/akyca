import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { GitMerge, Settings, CheckSquare, FileText, Layers, Workflow } from "lucide-react";

const data = {
  title: "Process & Control Review",
  parentService: "Internal Audit",
  parentServicePath: "/services/audit/internal-audit",
  icon: GitMerge,
  description: "Detailed evaluation of internal financial controls (IFC), standard operating procedures (SOPs), and gap analysis.",
  longDescription: `Strong processes and controls are the backbone of any reliable organization. Our Process & Control Review service is designed to ensure your internal controls are adequate, effective, and efficient.
  
  We review your Standard Operating Procedures (SOPs) and Internal Financial Controls (IFC) to identify gaps, redundancies, and weaknesses. Whether you are preparing for SOX compliance, IFC reporting under Companies Act, or simply want to tighten your ship, we provide the expertise you need.
  
  We don't just point out flaws; we help redesign processes to be robust yet agile, ensuring compliance without stifling business speed.`,
  features: [
    "Internal Financial Controls (IFC) testing",
    "SOP design and review",
    "Control gap analysis",
    "Segregation of duties (SoD) review",
    "Delegation of authority (DoA) matrix",
    "Process mapping and flowcharting"
  ],
  process: [
    { step: "Walkthrough", description: "Understand end-to-end process flow" },
    { step: "Design Review", description: "Evaluate if controls are designed correctly" },
    { step: "Operating Test", description: "Verify if controls work in practice" },
    { step: "Optimization", description: "Redesign for better control and efficiency" }
  ],
  benefits: [
    "Regulatory compliance (IFC/SOX)",
    "Reduced error rates",
    "Prevention of revenue leakage",
    "Clearer roles and responsibilities",
    "Standardized operations",
    "Audit readiness"
  ],
  useCases: [
    { title: "Pre-IPO Companies", description: "Establishing robust controls for public listing" },
    { title: "Family Businesses", description: "Professionalizing operations with formal SOPs" },
    { title: "Listed Entities", description: "Mandatory IFC reporting compliance" },
    { title: "Shared Services", description: "Standardizing processes across geographies" }
  ],
  faqs: [
    { question: "What is IFC?", answer: "Internal Financial Controls (IFC) refers to the policies and procedures adopted by a company for ensuring the orderly and efficient conduct of its business, safeguarding of assets, and accuracy of records." },
    { question: "Do you write SOPs?", answer: "Yes, we can help draft, review, and refine Standard Operating Procedures (SOPs) tailored to your specific business processes." },
    { question: "How does this help in fraud prevention?", answer: "Strong controls act as a deterrent. By implementing checks like segregation of duties and approval hierarchies, we significantly reduce the opportunity for fraud." }
  ],
  stats: [
    { number: "100+", label: "Projects Delivered" },
    { number: "1000+", label: "Controls Tested" },
    { number: "50+", label: "SOPs Detailed" },
    { number: "0", label: "Control Failures" }
  ]
};

const ProcessControlReview = () => <SubServiceTemplate data={data} />;

export default ProcessControlReview;
