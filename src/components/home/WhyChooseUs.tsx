 import { Check, X } from "lucide-react";
 
 const comparisons = [
   {
     feature: "Response Time",
     traditional: "Days to weeks",
     akyco: "Same day response",
   },
   {
     feature: "Technology",
     traditional: "Paper-based records",
     akyco: "Cloud-based systems",
   },
   {
     feature: "Accessibility",
     traditional: "Office hours only",
     akyco: "24/7 portal access",
   },
   {
     feature: "Reporting",
     traditional: "Annual reports",
     akyco: "Real-time dashboards",
   },
   {
     feature: "Communication",
     traditional: "Formal meetings",
     akyco: "WhatsApp & video calls",
   },
   {
     feature: "Pricing",
     traditional: "Hidden charges",
     akyco: "Transparent pricing",
   },
 ];
 
 const features = [
   "Dedicated relationship manager",
   "Multi-branch presence",
   "Industry specialization",
   "Proactive tax planning",
   "Compliance reminders",
   "Digital document management",
 ];
 
 export const WhyChooseUs = () => {
   return (
     <section className="py-20 bg-muted/30">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-16">
           <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
             The AKYCO Difference
           </span>
           <h2 className="section-heading mb-4">
             Traditional CA vs Modern Approach
           </h2>
           <p className="section-subheading mx-auto">
             Experience the difference with our client-centric methodology
           </p>
         </div>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Comparison Table */}
           <div className="bg-card rounded-2xl border border-border overflow-hidden">
             <div className="grid grid-cols-3 bg-navy text-cream font-semibold">
               <div className="p-4">Feature</div>
               <div className="p-4 text-center border-x border-white/10">Traditional</div>
               <div className="p-4 text-center">AKYCO</div>
             </div>
             {comparisons.map((row, index) => (
               <div
                 key={index}
                 className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-muted/50" : "bg-card"}`}
               >
                 <div className="p-4 font-medium text-foreground">{row.feature}</div>
                 <div className="p-4 text-center text-muted-foreground border-x border-border flex items-center justify-center gap-2">
                   <X className="w-4 h-4 text-destructive/70" />
                   <span className="text-sm">{row.traditional}</span>
                 </div>
                 <div className="p-4 text-center text-foreground flex items-center justify-center gap-2">
                   <Check className="w-4 h-4 text-gold" />
                   <span className="text-sm font-medium">{row.akyco}</span>
                 </div>
               </div>
             ))}
           </div>
 
           {/* Features List */}
           <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-display font-bold text-foreground mb-6">
               What Sets Us Apart
             </h3>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               With over four decades of experience, we've evolved our practice to meet 
               the demands of modern businesses while maintaining the highest standards 
               of professional excellence.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {features.map((feature, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                     <Check className="w-4 h-4 text-gold" />
                   </div>
                   <span className="text-foreground">{feature}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };