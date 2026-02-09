import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Settings, CheckCircle, TrendingUp, Shield, BarChart3, Users } from "lucide-react";

const data = {
  title: "Operational Audit",
  parentService: "Internal Audit",
  parentServicePath: "/services/audit/internal-audit",
  icon: Settings,
  description: "Comprehensive review of operating procedures and systems to evaluate efficiency, effectiveness, and economy of operations.",
  longDescription: `Operational Audit is a systematic review of effectiveness, efficiency, and economy of operation. It focuses on the future of the organization rather than just past compliance.
  
  Our operational audit services help management improve performance by identifying inefficiencies, waste, and bottlenecks in current processes. We don't just find problems; we provide practical, actionable solutions to streamline operations and reduce costs.
  
  Whether it's supply chain management, human resources, production planning, or sales processes, our team brings industry-specific expertise to benchmark your operations against best practices.`,
  features: [
    "Process efficiency evaluation",
    "Resource utilization review",
    "Cost reduction identification",
    "Bottleneck analysis",
    "Performance benchmarking",
    "SOP adherence testing"
  ],
  process: [
    { step: "Planning", description: "Define scope and objectives of the operational review" },
    { step: "Fieldwork", description: "Observe processes and interview key personnel" },
    { step: "Analysis", description: "Identify gaps between current and best practices" },
    { step: "Reporting", description: "Recommend specific operational improvements" }
  ],
  benefits: [
    "Improved operational efficiency",
    "Cost savings and waste reduction",
    "Better resource allocation",
    "Enhanced productivity",
    "Streamlined workflows",
    "Data-driven decision making"
  ],
  useCases: [
    { title: "Manufacturing Units", description: "Optimizing production cycles and inventory management" },
    { title: "Service Industry", description: "Improving service delivery and customer response times" },
    { title: "Retail Chains", description: "Standardizing store operations and supply chain" },
    { title: "Growing Startups", description: "Scaling operations efficiently without losing control" }
  ],
  faqs: [
    { question: "How is operational audit different from financial audit?", answer: "Financial audit focuses on the accuracy of financial statements, while operational audit focuses on the efficiency and effectiveness of business operations and processes." },
    { question: "Can operational audit help reduce costs?", answer: "Yes, identifying inefficiencies and waste is a primary goal of operational audit, often leading to significant cost savings." },
    { question: "How often should we conduct operational audits?", answer: "It depends on the dynamic nature of your business. Typically, critical areas should be reviewed annually or whenever major process changes occur." }
  ],
  stats: [
    { number: "25%", label: "Avg. Cost Savings" },
    { number: "200+", label: "Processes Reviewed" },
    { number: "40+", label: "Industries Served" },
    { number: "100%", label: "Efficiency Focus" }
  ]
};

const OperationalAudit = () => <SubServiceTemplate data={data} />;

export default OperationalAudit;
