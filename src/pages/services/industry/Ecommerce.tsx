import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { ShoppingCart } from "lucide-react";

const Ecommerce = () => {
  const data = {
    title: "E-commerce Compliance",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: ShoppingCart,
    description: "Complete accounting and compliance services for e-commerce businesses, marketplace sellers, and D2C brands.",
    longDescription: `E-commerce businesses operate in a complex regulatory environment with unique GST provisions, TCS deductions by marketplaces, and multi-state compliance requirements. At Ashvin K Yagnik & Co., we specialize in e-commerce accounting and compliance.

Our services cover both marketplace sellers and independent D2C brands. We handle the complexities of GST across states, reconciliation of marketplace payments and deductions, TCS credit claims, and compliance with FDI norms for e-commerce.

We also assist with e-commerce specific operational challenges like inventory accounting across warehouses, return management, and revenue recognition for various pricing models including flash sales and bundled offers.`,
    features: [
      "Multi-state GST registration",
      "Marketplace TCS reconciliation",
      "E-commerce GST compliance",
      "Inventory management accounting",
      "Return and refund accounting",
      "FDI policy compliance",
      "Marketplace agreement review",
      "Payment reconciliation"
    ],
    process: [
      { step: "Business Assessment", description: "Understand business model, platforms, and operations" },
      { step: "Compliance Setup", description: "GST registrations, systems, and processes" },
      { step: "Ongoing Management", description: "Monthly reconciliation, GST filing, and reporting" },
      { step: "Optimization", description: "Tax planning and operational efficiency" }
    ],
    benefits: [
      "Full GST compliance",
      "Accurate TCS claims",
      "Multi-platform reconciliation",
      "FDI compliance",
      "Real-time visibility",
      "Scalable systems"
    ],
    useCases: [
      { title: "Amazon Seller", description: "Complete compliance for Amazon marketplace" },
      { title: "Multi-Platform Seller", description: "Consolidated accounting across marketplaces" },
      { title: "D2C Brand", description: "Own website and marketplace compliance" },
      { title: "Quick Commerce", description: "High-volume transaction management" },
      { title: "Dropshipping", description: "Dropship model accounting and GST" },
      { title: "Social Commerce", description: "Instagram and WhatsApp sales compliance" }
    ],
    faqs: [
      { question: "Do I need GST registration in every state?", answer: "You need registration in states from where you ship goods and where you have inventory. We help determine required registrations and manage multi-state compliance." },
      { question: "How to reconcile marketplace payments?", answer: "Marketplace payments include deductions for commission, TCS, logistics, and returns. We reconcile every deduction to ensure you receive correct payments." },
      { question: "What is TCS in e-commerce?", answer: "Marketplaces collect 1% TCS on net value of supplies. This TCS is claimable against your tax liability. We ensure proper reconciliation and credit claims." },
      { question: "Are there FDI restrictions in e-commerce?", answer: "Yes, marketplace model e-commerce has FDI restrictions including inventory ownership, pricing control, and exclusive arrangements. We ensure FDI policy compliance." }
    ],
    stats: [
      { number: "200+", label: "E-commerce Clients" },
      { number: "₹500Cr+", label: "GMV Managed" },
      { number: "99%", label: "Reconciliation Accuracy" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default Ecommerce;
