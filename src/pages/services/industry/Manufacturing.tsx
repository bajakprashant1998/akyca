import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Factory } from "lucide-react";

const Manufacturing = () => {
  const data = {
    title: "Manufacturing Industry Audit",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: Factory,
    description: "Industry-specific audit and accounting services for manufacturing companies with focus on cost optimization and compliance.",
    longDescription: `Manufacturing businesses require specialized accounting treatment for inventory valuation, cost allocation, and production efficiency tracking. At Ashvin K Yagnik & Co., we combine our audit expertise with deep manufacturing sector knowledge.

Our services cover the unique requirements of manufacturing entities - from raw material to finished goods accounting, work-in-progress valuation, cost sheet preparation, and variance analysis. We help optimize costs while ensuring accurate financial reporting.

We serve diverse manufacturing sectors including textiles, chemicals, engineering goods, pharmaceuticals, and food processing. Our team understands production processes and provides practical accounting solutions aligned with industry practices.`,
    features: [
      "Cost audit and compliance",
      "Inventory valuation systems",
      "Production cost tracking",
      "Standard costing implementation",
      "Variance analysis",
      "Transfer pricing compliance",
      "GST for manufacturing",
      "Export incentive optimization"
    ],
    process: [
      { step: "Process Understanding", description: "Map production processes and cost drivers" },
      { step: "System Design", description: "Implement costing systems and cost centers" },
      { step: "Audit Execution", description: "Conduct detailed audit with focus on manufacturing" },
      { step: "Optimization", description: "Identify cost savings and efficiency improvements" }
    ],
    benefits: [
      "Accurate product costing",
      "Cost reduction identification",
      "Regulatory compliance",
      "Better pricing decisions",
      "Improved inventory management",
      "Tax optimization"
    ],
    useCases: [
      { title: "Textile Manufacturing", description: "Process costing and GST compliance" },
      { title: "Engineering Goods", description: "Job costing and inventory valuation" },
      { title: "Pharmaceutical", description: "Batch costing and regulatory compliance" },
      { title: "Food Processing", description: "FSSAI compliance and costing" },
      { title: "Chemical Industry", description: "Process costing and environmental compliance" },
      { title: "Auto Components", description: "Standard costing and OEM compliance" }
    ],
    faqs: [
      { question: "Is cost audit mandatory for our company?", answer: "Cost audit is mandatory for certain industries and turnover thresholds. We assess applicability and conduct cost audits as per Cost Audit Rules, 2014." },
      { question: "How do you value work-in-progress?", answer: "WIP valuation follows Ind AS 2, considering stage of completion and cost allocation methods. We help implement accurate WIP tracking systems." },
      { question: "How to optimize GST for manufacturing?", answer: "We optimize input tax credit utilization, handle job work compliance, and ensure proper classification to minimize GST costs." },
      { question: "What export benefits are available?", answer: "Benefits include duty drawback, RoDTEP, advance authorization, and EPCG. We help claim all eligible benefits with proper documentation." }
    ],
    stats: [
      { number: "200+", label: "Manufacturing Audits" },
      { number: "15%", label: "Avg Cost Savings" },
      { number: "100%", label: "Compliance" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Statutory Audit", description: "Manufacturing audit", link: "/services/audit/statutory-audit" },
      { title: "GST Audit", description: "Tax compliance", link: "/services/gst/audit" },
      { title: "Factory Act", description: "Factory compliance", link: "/services/compliance/factory-act" },
      { title: "Labour Law", description: "Worker compliance", link: "/services/compliance/labour-law" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default Manufacturing;
