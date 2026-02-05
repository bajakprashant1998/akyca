 import { Users, Briefcase, Monitor } from "lucide-react";
 
 const pillars = [
   {
     icon: Users,
     title: "Expert Team",
     subtitle: "9+ Chartered Accountants",
     description: "Our team of qualified CAs brings decades of combined experience across taxation, audit, and financial advisory services.",
     highlights: ["ICAI Certified", "Industry Specialists", "Continuous Training"],
   },
   {
     icon: Briefcase,
     title: "Complete Solutions",
     subtitle: "100+ Service Offerings",
     description: "From startup registration to enterprise compliance, we offer end-to-end chartered accountancy services under one roof.",
     highlights: ["All-in-One CA Firm", "Cross-Domain Expertise", "Seamless Integration"],
   },
   {
     icon: Monitor,
     title: "Digital-First",
     subtitle: "Modern Cloud Approach",
     description: "We leverage the latest accounting software and cloud technologies to deliver faster, more accurate, and accessible services.",
     highlights: ["Cloud Accounting", "Real-time Reports", "Secure Data"],
   },
 ];
 
 export const ValuePillars = () => {
   return (
     <section className="py-20 bg-muted/30">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-16">
           <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
             Why Choose Us
           </span>
           <h2 className="section-heading mb-4">
             Three Pillars of Our Excellence
           </h2>
           <p className="section-subheading mx-auto">
             Built on expertise, driven by innovation, and committed to your success
           </p>
         </div>
 
         {/* Pillars Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {pillars.map((pillar, index) => (
             <div
               key={index}
               className="bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-xl group"
             >
               {/* Icon */}
               <div className="w-16 h-16 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                 <pillar.icon className="w-8 h-8 text-navy group-hover:text-cream transition-colors" />
               </div>
 
               {/* Content */}
               <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                 {pillar.title}
               </h3>
               <p className="text-gold font-medium text-sm mb-4">
                 {pillar.subtitle}
               </p>
               <p className="text-muted-foreground mb-6 leading-relaxed">
                 {pillar.description}
               </p>
 
               {/* Highlights */}
               <ul className="space-y-2">
                 {pillar.highlights.map((highlight, hIndex) => (
                   <li key={hIndex} className="flex items-center gap-2 text-sm text-foreground">
                     <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                     {highlight}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };