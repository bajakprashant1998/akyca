import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileText } from "lucide-react";

const EstateWill = () => {
  const data = {
    title: "Estate & Will Advisory",
    parentService: "Personal & Wealth Services",
    parentServicePath: "/services/personal-wealth",
    icon: FileText,
    description: "Comprehensive estate planning and will drafting services for smooth wealth transfer to intended beneficiaries.",
    longDescription: `Estate planning ensures your assets are distributed according to your wishes, minimizes disputes, and protects your family's future. At Ashvin K Yagnik & Co., we provide complete estate planning services including will drafting, trust creation, and probate support.

Our approach starts with understanding your complete asset profile, family situation, and distribution wishes. We then design structures that achieve your objectives while minimizing legal challenges and tax implications.

We work with individuals, families, and HNIs to create legally sound estate plans that provide clarity, prevent disputes, and ensure smooth asset transfer.`,
    features: [
      "Comprehensive will drafting",
      "Trust creation and management",
      "Asset mapping and consolidation",
      "Nomination review",
      "Probate assistance",
      "Executor guidance",
      "Cross-border estate planning",
      "Digital asset planning"
    ],
    process: [
      { step: "Asset Inventory", description: "Complete mapping of all assets and liabilities" },
      { step: "Distribution Planning", description: "Define beneficiaries and distribution plan" },
      { step: "Documentation", description: "Draft will, trusts, and supporting documents" },
      { step: "Execution & Storage", description: "Proper execution and safe storage" }
    ],
    benefits: [
      "Clear distribution wishes",
      "Dispute prevention",
      "Smooth asset transfer",
      "Family security",
      "Tax efficiency",
      "Peace of mind"
    ],
    useCases: [
      { title: "First Will", description: "Creating your first will" },
      { title: "Will Update", description: "Updating existing will for life changes" },
      { title: "Complex Estate", description: "Multiple assets and beneficiaries" },
      { title: "NRI Estate", description: "Cross-border asset planning" },
      { title: "Business Owner", description: "Business assets in estate" },
      { title: "Probate Support", description: "Executing a deceased's will" }
    ],
    faqs: [
      { question: "Is registration of will mandatory?", answer: "No, registration is not mandatory but recommended. A registered will has higher evidentiary value and is harder to challenge. We recommend registration for complex estates." },
      { question: "Can I change my will later?", answer: "Yes, you can revoke or modify your will anytime while alive and of sound mind. We recommend reviewing and updating your will every 3-5 years or after major life events." },
      { question: "What happens if I die without a will?", answer: "Assets are distributed as per applicable succession laws (Hindu Succession Act, Indian Succession Act, etc.). This may not match your wishes and can cause family disputes." },
      { question: "How to plan for digital assets?", answer: "Digital assets include online accounts, cryptocurrencies, and digital investments. We help identify, document, and include digital assets in estate plans with access instructions." }
    ],
    stats: [
      { number: "500+", label: "Wills Drafted" },
      { number: "₹5000Cr+", label: "Estate Value" },
      { number: "100%", label: "Legal Compliance" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default EstateWill;
