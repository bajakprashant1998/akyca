import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const data = {
  title: "NRI Taxation",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: Users,
  description: "Specialized tax services for Non-Resident Indians covering residential status determination, foreign income taxation, and DTAA benefits.",
  longDescription: `NRI Taxation involves unique considerations that differ significantly from resident taxation. Non-Resident Indians face complex tax situations involving income from India, foreign income, property transactions, and repatriation of funds.

Our NRI taxation services are designed to address these specific needs. We help NRIs understand their tax obligations, claim appropriate DTAA benefits, and structure their India-related finances tax-efficiently.

From determining residential status to filing NRI tax returns, from property sale taxation to repatriation compliance, we provide end-to-end support. Our team understands the practical challenges NRIs face and provides solutions that work across time zones and borders.`,
  features: [
    "Residential status determination (R/NR/RNOR)",
    "NRE/NRO account taxation guidance",
    "Rental income taxation and TDS compliance",
    "Property sale and capital gains taxation",
    "Repatriation planning and documentation",
    "DTAA benefit claims for NRIs",
    "FEMA compliance advisory",
    "Double taxation relief procedures"
  ],
  process: [
    { step: "Status Determination", description: "Accurately determine your residential status for the financial year" },
    { step: "Income Classification", description: "Classify income as Indian or foreign and determine taxability" },
    { step: "Treaty Benefit Claims", description: "Identify and claim applicable DTAA benefits" },
    { step: "Return Filing", description: "File NRI tax return with proper disclosures and claim refunds" }
  ],
  benefits: [
    "Correct determination of tax liability",
    "Maximum DTAA benefits claimed",
    "Smooth repatriation of funds",
    "Complete FEMA compliance",
    "Reduced TDS through certificates",
    "Expert handling of property transactions"
  ],
  useCases: [
    { title: "Working Abroad", description: "Indians employed in foreign countries with India income" },
    { title: "Returning NRIs", description: "NRIs planning to return to India needing RNOR status planning" },
    { title: "Property Owners", description: "NRIs with rental income or planning property sale in India" },
    { title: "Investors", description: "NRIs with investments in Indian stocks and mutual funds" },
    { title: "Retired NRIs", description: "Non-residents with pension and investment income from India" },
    { title: "Seafarers", description: "Merchant navy professionals with unique residency considerations" }
  ],
  faqs: [
    { question: "How is NRI status determined?", answer: "You are an NRI if you stay in India for less than 182 days in a financial year, or less than 60 days with less than 365 days in the preceding 4 years. Special rules apply for Indian citizens going abroad for employment." },
    { question: "Is NRE account interest taxable?", answer: "No, interest on NRE accounts is completely tax-free for NRIs. However, if you become a resident, you need to convert the account and interest becomes taxable." },
    { question: "What is TDS on NRI property sale?", answer: "TDS on property sale by NRIs is 20% for long-term gains and 30% for short-term gains (plus surcharge and cess). You can apply for a lower deduction certificate if actual liability is lower." },
    { question: "Can NRIs file ITR online?", answer: "Yes, NRIs can file returns online. However, e-verification may require an Indian mobile number. We assist with the complete process including Aadhaar linkage issues." },
    { question: "How can I repatriate funds from India?", answer: "Funds can be repatriated through proper banking channels after paying applicable taxes. We help with documentation including CA certificate for remittances above specified limits." }
  ],
  stats: [
    { number: "2,000+", label: "NRI Clients" },
    { number: "₹100Cr+", label: "Repatriation Assisted" },
    { number: "30+", label: "Countries Served" },
    { number: "100%", label: "FEMA Compliance" }
  ],
  relatedServices: [
    { title: "International Taxation", description: "Cross-border tax issues", link: "/services/taxation/international-taxation" },
    { title: "Income Tax Return", description: "NRI ITR filing", link: "/services/taxation/income-tax-return" },
    { title: "Tax Planning", description: "Investment tax planning", link: "/services/taxation/tax-planning" },
    { title: "Tax Representation", description: "Assessment and scrutiny support", link: "/services/taxation/tax-representation" },
    { title: "Real Estate Advisory", description: "Property transaction support", link: "/services/industry/real-estate" },
    { title: "HNI Advisory", description: "Wealth management for HNIs", link: "/services/wealth/hni-advisory" }
  ]
};

const NRITaxation = () => <SubServiceTemplate data={data} />;

export default NRITaxation;
