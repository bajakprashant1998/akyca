import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { BarChart3 } from "lucide-react";

const MISDashboards = () => {
  const data = {
    title: "MIS Reports & Dashboards",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: BarChart3,
    description: "Custom MIS reports and interactive dashboards for data-driven decision making.",
    longDescription: `Good data leads to good decisions. At Ashvin K Yagnik & Co., we help businesses move beyond standard reports to custom MIS (Management Information System) that provides actionable insights.

We design and build dashboards that present key metrics clearly - whether tracking sales performance, monitoring costs, analyzing profitability, or measuring operational efficiency. Our solutions use tools like Excel, Power BI, Tableau, or built-in accounting software capabilities.

We focus on what matters to you - the metrics that drive your business decisions. Our dashboards are designed for executives and managers who need quick insights, not detailed transaction reports.`,
    features: [
      "Custom MIS design",
      "Interactive dashboards",
      "KPI definition and tracking",
      "Real-time data visualization",
      "Executive summaries",
      "Trend analysis",
      "Variance reporting",
      "Mobile-friendly reports"
    ],
    process: [
      { step: "Requirements", description: "Understand decisions MIS needs to support" },
      { step: "Design", description: "Design metrics, layout, and data flow" },
      { step: "Build", description: "Create dashboards and reports" },
      { step: "Deploy", description: "Launch with training and support" }
    ],
    benefits: [
      "Data-driven decisions",
      "Real-time insights",
      "Executive visibility",
      "Performance tracking",
      "Early warning alerts",
      "Better planning"
    ],
    useCases: [
      { title: "Sales Dashboard", description: "Track revenue, pipeline, and performance" },
      { title: "Financial Dashboard", description: "P&L, cash flow, and key ratios" },
      { title: "Operations Dashboard", description: "Production, inventory, and efficiency" },
      { title: "Project Dashboard", description: "Project profitability and timelines" },
      { title: "Branch Dashboard", description: "Multi-location performance comparison" },
      { title: "Board Pack", description: "Monthly board reporting package" }
    ],
    faqs: [
      { question: "What tool do you use for dashboards?", answer: "Depends on your needs and existing systems. Options include Excel for simple needs, Power BI for rich visualization, or accounting software's built-in reporting. We recommend based on your requirements." },
      { question: "How do you get data for dashboards?", answer: "We connect to your accounting system, ERP, CRM, or other data sources. Many tools offer direct integration. For complex needs, we set up automated data pipelines." },
      { question: "Can we update dashboards ourselves?", answer: "Yes, we design with user maintenance in mind. We provide training and documentation so your team can modify and update as needed." },
      { question: "How often are dashboards updated?", answer: "Can range from real-time to daily/weekly depending on data source and need. We configure appropriate refresh schedules." }
    ],
    stats: [
      { number: "100+", label: "Dashboards Built" },
      { number: "50%", label: "Faster Decisions" },
      { number: "Real-time", label: "Data Access" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default MISDashboards;
