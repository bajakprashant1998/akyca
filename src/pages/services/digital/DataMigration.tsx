import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { ArrowRightLeft } from "lucide-react";

const DataMigration = () => {
  const data = {
    title: "Data Migration & Cleanup",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: ArrowRightLeft,
    description: "Clean migration of financial data between systems ensuring accuracy and continuity.",
    longDescription: `Migrating financial data between systems is risky - errors can corrupt your books and cause compliance issues. At Ashvin K Yagnik & Co., we specialize in clean, accurate migration of financial data between accounting systems.

Our migration process ensures complete data transfer with validation at every step. We handle the cleanup of legacy data, mapping to new chart of accounts, opening balance reconciliation, and parallel running to ensure continuity.

Whether you're moving to cloud, upgrading systems, or consolidating entities, we ensure your financial data remains accurate and auditable through the transition.`,
    features: [
      "Data extraction from legacy",
      "Data cleansing and validation",
      "Chart of accounts mapping",
      "Opening balance setup",
      "Transaction history migration",
      "Master data transfer",
      "Parallel run support",
      "Reconciliation and sign-off"
    ],
    process: [
      { step: "Assessment", description: "Analyze source and target systems" },
      { step: "Planning", description: "Define scope, mapping, and timeline" },
      { step: "Migration", description: "Execute migration with validation" },
      { step: "Verification", description: "Reconcile and sign-off" }
    ],
    benefits: [
      "Zero data loss",
      "Clean data",
      "Audit trail preserved",
      "Minimal disruption",
      "Accurate opening balances",
      "Smooth transition"
    ],
    useCases: [
      { title: "System Change", description: "Moving to new accounting software" },
      { title: "Cloud Migration", description: "Desktop to cloud migration" },
      { title: "Consolidation", description: "Merging multiple company data" },
      { title: "Upgrade", description: "Major version upgrade" },
      { title: "Clean Start", description: "Starting fresh with clean data" },
      { title: "Historical Load", description: "Loading historical data to new system" }
    ],
    faqs: [
      { question: "How long does migration take?", answer: "Depends on data volume and complexity. Simple migrations take 2-4 weeks. Complex multi-entity migrations may take 2-3 months with proper planning and testing." },
      { question: "Will we lose any data?", answer: "No, we ensure complete data transfer with multiple verification steps. Historical data is extracted and archived even if not migrated to new system." },
      { question: "How do you handle opening balances?", answer: "We reconcile source system balances, clean up old entries if needed, and set up opening balances in target system. Trial balance matching is mandatory before go-live." },
      { question: "What about parallel running?", answer: "For critical systems, we recommend 1-2 months of parallel running where transactions are entered in both systems. This provides fallback and validation." }
    ],
    stats: [
      { number: "100+", label: "Migrations Done" },
      { number: "100%", label: "Data Accuracy" },
      { number: "Zero", label: "Data Loss" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default DataMigration;
