import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Globe } from "lucide-react";

const ExportImport = () => {
  const data = {
    title: "Export Import (EXIM) Advisory",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: Globe,
    description: "Complete advisory services for exporters and importers covering customs, DGFT schemes, foreign trade policy benefits, and compliance.",
    longDescription: `International trade involves navigating complex customs procedures, foreign trade policy benefits, and foreign exchange regulations. At Ashvin K Yagnik & Co., we provide comprehensive advisory for businesses engaged in exports and imports.

Our EXIM advisory covers the entire trade cycle - from IEC registration and scheme selection to duty optimization, customs valuation, and export incentive claims. We help businesses maximize benefits under schemes like Advance Authorization, EPCG, RoDTEP, and SEIS.

We also handle the FEMA compliance aspects including foreign currency transactions, export realization, and remittance management. Our integrated approach ensures both trade and forex compliance.`,
    features: [
      "IEC registration and management",
      "DGFT scheme advisory",
      "Customs valuation support",
      "Duty drawback claims",
      "RoDTEP/RoSCTL benefits",
      "Advance Authorization and EPCG",
      "FEMA compliance for trade",
      "Export realization tracking"
    ],
    process: [
      { step: "Trade Assessment", description: "Analyze trade patterns and identify optimization opportunities" },
      { step: "Scheme Selection", description: "Choose optimal schemes for maximum benefits" },
      { step: "Implementation", description: "Handle registrations, licenses, and compliance" },
      { step: "Claim Management", description: "Ensure timely claims and benefit realization" }
    ],
    benefits: [
      "Maximized export benefits",
      "Duty savings on imports",
      "Faster customs clearance",
      "Complete DGFT compliance",
      "FEMA compliance",
      "Expert trade advisory"
    ],
    useCases: [
      { title: "New Exporter", description: "Complete setup for first-time exporters" },
      { title: "Import Optimization", description: "Duty reduction through proper schemes" },
      { title: "Status Holder", description: "Benefits and compliance for status holders" },
      { title: "SEZ Operations", description: "SEZ compliance and duty exemptions" },
      { title: "Deemed Exports", description: "Benefits for deemed export transactions" },
      { title: "Bonded Warehouse", description: "Bonded operations and compliance" }
    ],
    faqs: [
      { question: "What is the process to start exporting?", answer: "Key steps include IEC registration, RCMC from export promotion council, GST registration with LUT, and opening of foreign currency accounts. We handle complete export setup." },
      { question: "Which export scheme should we use?", answer: "Choice depends on product, destination, and business model. We analyze your trade and recommend optimal scheme combination from Advance Authorization, EPCG, RoDTEP, and SEIS." },
      { question: "How to claim duty drawback?", answer: "Duty drawback requires proper documentation, timely filing with customs, and bank account details. We manage the complete claim process for maximum recovery." },
      { question: "What are export realization timelines?", answer: "Export proceeds must be realized within 9 months (15 months for certain goods). We track realizations and handle extension requests if needed." }
    ],
    stats: [
      { number: "₹2000Cr+", label: "Trade Handled" },
      { number: "₹50Cr+", label: "Benefits Claimed" },
      { number: "100+", label: "EXIM Clients" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default ExportImport;
