 import { Link } from "react-router-dom";
 import { ArrowRight, Calendar, FileText, AlertCircle, Lightbulb } from "lucide-react";
 
 const insights = [
   {
     icon: AlertCircle,
     category: "Tax Update",
     title: "New TDS Rules for FY 2025-26",
     description: "Key changes in TDS rates and compliance requirements effective from April 2025.",
     date: "Feb 2025",
   },
   {
     icon: FileText,
     category: "GST",
     title: "GST Return Filing Deadlines",
     description: "Complete calendar of GSTR-1, GSTR-3B, and annual return due dates.",
     date: "Jan 2025",
   },
   {
     icon: Lightbulb,
     category: "Tax Planning",
     title: "Section 80C: Maximize Savings",
     description: "Smart investment strategies to optimize your tax savings under Section 80C.",
     date: "Jan 2025",
   },
   {
     icon: Calendar,
     category: "Compliance",
     title: "Q4 Compliance Checklist",
     description: "Essential compliance tasks for businesses before financial year-end.",
     date: "Jan 2025",
   },
 ];
 
 export const InsightsPreview = () => {
   return (
     <section className="py-20 bg-background">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-16">
           <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
             Knowledge Center
           </span>
           <h2 className="section-heading mb-4">
             Tax Tips & Regulatory Updates
           </h2>
           <p className="section-subheading mx-auto">
             Stay informed with the latest tax laws, compliance requirements, and financial insights
           </p>
         </div>
 
         {/* Insights Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {insights.map((insight, index) => (
             <article
               key={index}
               className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
             >
               {/* Category */}
               <div className="flex items-center gap-2 mb-4">
                 <insight.icon className="w-5 h-5 text-gold" />
                 <span className="text-sm font-medium text-gold">{insight.category}</span>
               </div>
 
               {/* Content */}
               <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                 {insight.title}
               </h3>
               <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                 {insight.description}
               </p>
 
               {/* Date */}
               <div className="flex items-center justify-between">
                 <span className="text-xs text-muted-foreground">{insight.date}</span>
                 <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
               </div>
             </article>
           ))}
         </div>
 
         {/* CTA */}
         <div className="text-center mt-12">
           <Link
             to="/tax-tools"
             className="inline-flex items-center gap-2 bg-cream text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold transition-colors group"
           >
             Explore Tax Tools
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>
         </div>
       </div>
     </section>
   );
 };