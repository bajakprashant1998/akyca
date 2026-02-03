import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Search } from "lucide-react";

const SearchSurvey = () => {
  const data = {
    title: "Search & Survey Assistance",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: Search,
    description: "Expert assistance during income tax search and survey operations including on-ground support, statement handling, and post-search compliance.",
    longDescription: `Search and survey operations by the Income Tax Department are high-stress situations requiring calm, knowledgeable guidance. At Ashvin K Yagnik & Co., we provide comprehensive support before, during, and after such operations.

Our services include on-ground assistance during search and survey proceedings, guidance on rights and procedures, review of statements and Panchnama, post-search assessment representation, and dispute resolution. We help you navigate these challenging situations while protecting your legal rights.

With decades of experience handling search assessments, our team provides the expertise and support needed to minimize disruption and achieve favorable outcomes in post-search proceedings.`,
    features: [
      "On-ground support during search/survey",
      "Rights explanation and procedure guidance",
      "Statement and Panchnama review",
      "Post-search assessment representation",
      "Undisclosed income negotiation",
      "Block assessment proceedings",
      "Penalty and prosecution defense",
      "Settlement Commission applications"
    ],
    process: [
      { step: "Immediate Response", description: "Reach the premises and provide on-ground guidance" },
      { step: "Proceedings Management", description: "Ensure proper procedure and documentation" },
      { step: "Post-Action Review", description: "Analyze seized material and statements" },
      { step: "Assessment Handling", description: "Represent in search assessment proceedings" }
    ],
    benefits: [
      "Expert on-ground support",
      "Rights protection",
      "Statement guidance",
      "Reduced stress",
      "Better outcomes",
      "Complete representation"
    ],
    useCases: [
      { title: "Income Tax Search", description: "Section 132 search operations" },
      { title: "Income Tax Survey", description: "Section 133A survey proceedings" },
      { title: "GST Searches", description: "GST investigation and searches" },
      { title: "Post-Search Assessment", description: "Assessment proceedings after search" },
      { title: "Prosecution Cases", description: "Defense in prosecution proceedings" },
      { title: "Settlement", description: "Settlement Commission applications" }
    ],
    faqs: [
      { question: "What should we do when search team arrives?", answer: "Stay calm, verify warrants, allow entry, call your CA/lawyer immediately. Cooperate with proceedings while being careful about statements. We can reach your premises quickly." },
      { question: "Can statements given during search be retracted?", answer: "Yes, statements can be retracted if given under pressure or based on incorrect facts. However, retraction must be done properly with supporting evidence." },
      { question: "What is the difference between search and survey?", answer: "Search (S.132) involves seizure and can happen at any time. Survey (S.133A) is limited to business premises during working hours and doesn't involve seizure of assets." },
      { question: "What happens after search concludes?", answer: "Post-search, assessment proceedings are initiated. Notice is issued for block assessment. You have opportunity to explain seized material and contest additions." },
      { question: "Can penalties and prosecution be avoided?", answer: "If undisclosed income is properly explained or covered by disclosure, penalties may be avoided. Prosecution is initiated in serious cases but can be defended or compounded." }
    ],
    stats: [
      { number: "50+", label: "Search Cases Handled" },
      { number: "24/7", label: "Emergency Response" },
      { number: "70%", label: "Addition Relief" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default SearchSurvey;
