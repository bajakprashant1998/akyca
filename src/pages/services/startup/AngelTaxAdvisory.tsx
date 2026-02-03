import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { PiggyBank } from "lucide-react";

const AngelTaxAdvisory = () => {
  const data = {
    title: "Angel Tax Advisory",
    parentService: "Startup Services",
    parentServicePath: "/services/startup",
    icon: PiggyBank,
    description: "Expert guidance on angel tax provisions including Section 56(2)(viib), valuation for share premium, and exemption applications for startups.",
    longDescription: `Angel tax provisions under Section 56(2)(viib) can create significant tax liability when startups issue shares at premium to investors. At Ashvin K Yagnik & Co., we provide comprehensive advisory services to help startups navigate these provisions and minimize tax exposure.

Our services cover valuation for share issuance, structuring investments to qualify for exemptions, documentation for angel tax exemption applications, and representation in case of angel tax notices. We help startups understand their options and implement the most tax-efficient investment structures.

Whether you're raising your first round or planning a significant financing, our team ensures your share premium is properly valued and documented to withstand scrutiny.`,
    features: [
      "Section 56(2)(viib) advisory",
      "Share premium valuation support",
      "DPIIT exemption application",
      "Form 2 and Form 3 filing",
      "Valuation report review",
      "Angel tax notice representation",
      "Investment structuring",
      "CCPS and convertible note guidance"
    ],
    process: [
      { step: "Assessment", description: "Analyze planned investment and applicable provisions" },
      { step: "Valuation", description: "Ensure proper valuation through prescribed methods" },
      { step: "Documentation", description: "Prepare exemption applications and supporting documents" },
      { step: "Compliance", description: "File required forms and maintain documentation" }
    ],
    benefits: [
      "Angel tax exemption",
      "Proper valuation support",
      "Reduced tax exposure",
      "Notice defense readiness",
      "Investor confidence",
      "Compliant fund raising"
    ],
    useCases: [
      { title: "Seed Funding", description: "First round from angels and family offices" },
      { title: "Series A/B", description: "VC funding with significant premium" },
      { title: "Bridge Rounds", description: "Convertible note and CCPS rounds" },
      { title: "Angel Networks", description: "Investment from angel syndicates" },
      { title: "Family Investments", description: "Investment from HNI family members" },
      { title: "Notice Response", description: "Defense against angel tax notices" }
    ],
    faqs: [
      { question: "What is angel tax?", answer: "When a private company issues shares to residents at premium exceeding FMV, the excess is taxed as income of the company under S.56(2)(viib). This is commonly called angel tax." },
      { question: "Are DPIIT startups exempt from angel tax?", answer: "Yes, DPIIT recognized startups with DPIIT declaration and Form 2 filed can claim exemption from angel tax on share premium." },
      { question: "What valuation methods are acceptable?", answer: "DCF by CA/Merchant Banker, or NAV method for companies with no projections. The valuation report must support the share premium." },
      { question: "Does angel tax apply to foreign investors?", answer: "No, S.56(2)(viib) applies only to resident investors. Foreign investment is covered under different provisions." },
      { question: "What if we receive angel tax notice?", answer: "Notice must be defended with valuation report, investment rationale, and investor credentials. We provide complete representation in such cases." }
    ],
    stats: [
      { number: "75+", label: "Exemptions Filed" },
      { number: "₹200Cr+", label: "Investment Covered" },
      { number: "100%", label: "Success Rate" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default AngelTaxAdvisory;
