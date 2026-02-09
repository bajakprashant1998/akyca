import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Cloud } from "lucide-react";

const CloudAccounting = () => {
  const data = {
    title: "Cloud Accounting (Tally, Zoho, QuickBooks)",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: Cloud,
    description: "Setup and management of cloud-based accounting solutions for real-time access and collaboration.",
    longDescription: `Cloud accounting transforms how businesses manage finances - providing real-time access, automatic backups, and seamless collaboration. At Ashvin K Yagnik & Co., we help businesses transition to and manage cloud accounting solutions.

We work with leading platforms including Tally Prime (on cloud), Zoho Books, QuickBooks Online, and other industry-specific solutions. Our team handles implementation, data migration, customization, and ongoing support.

Whether you're a startup choosing your first system or an established business moving from legacy software, we ensure smooth transition with minimal disruption.`,
    features: [
      "Platform selection advisory",
      "Cloud implementation",
      "Data migration",
      "Chart of accounts setup",
      "User training",
      "Integration with other systems",
      "Customization and automation",
      "Ongoing support"
    ],
    process: [
      { step: "Assessment", description: "Understand requirements and select platform" },
      { step: "Setup", description: "Configure system and chart of accounts" },
      { step: "Migration", description: "Transfer data from existing system" },
      { step: "Training & Go-Live", description: "User training and transition support" }
    ],
    benefits: [
      "Anytime, anywhere access",
      "Real-time visibility",
      "Automatic backups",
      "Multi-user collaboration",
      "Reduced IT burden",
      "Scalability"
    ],
    useCases: [
      { title: "New Business", description: "Setting up first accounting system" },
      { title: "Tally to Cloud", description: "Moving from desktop Tally to cloud" },
      { title: "Multi-Location", description: "Unified accounting across locations" },
      { title: "Remote Team", description: "Enabling remote accounting team" },
      { title: "Integration Need", description: "Connecting accounting with other systems" },
      { title: "Platform Switch", description: "Migrating between cloud platforms" }
    ],
    faqs: [
      { question: "Which cloud platform is best for us?", answer: "Depends on your business size, complexity, and needs. Zoho Books is great for SMEs, QuickBooks for simplicity, Tally Prime for complex Indian requirements. We help you choose." },
      { question: "Is cloud accounting safe?", answer: "Yes, reputable cloud platforms have enterprise-grade security - encryption, access controls, and regular backups. Often safer than local storage." },
      { question: "How long does migration take?", answer: "Typically 2-4 weeks including data migration, testing, and training. More complex setups may take longer." },
      { question: "What about data if we want to switch?", answer: "All major platforms allow data export. We ensure your data is always portable and you're never locked in." }
    ],
    stats: [
      { number: "300+", label: "Implementations" },
      { number: "70%", label: "Time Savings" },
      { number: "99%", label: "Satisfaction" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Virtual Accounting", description: "Remote bookkeeping services", link: "/services/digital/virtual-accounting" },
      { title: "GST Return Filing", description: "Seamless GST compliance", link: "/services/gst/return-filing" },
      { title: "TDS Compliance", description: "Tax deduction management", link: "/services/taxation/tds-compliance" },
      { title: "Finance Automation", description: "Streamlined financial processes", link: "/services/digital/finance-automation" },
      { title: "MIS Dashboards", description: "Reports & insights", link: "/services/digital/mis-dashboards" },
      { title: "Statutory Audit", description: "Annual audit", link: "/services/audit/statutory-audit" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default CloudAccounting;
