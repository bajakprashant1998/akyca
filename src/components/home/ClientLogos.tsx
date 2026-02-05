 import { Shield, Award, Building2, FileCheck } from "lucide-react";
 
 const certifications = [
   {
     icon: Shield,
     title: "RBI Category-I",
     description: "Authorized Bank Auditors",
   },
   {
     icon: Award,
     title: "ICAI Member",
     description: "Institute of Chartered Accountants",
   },
   {
     icon: Building2,
     title: "GST Practitioner",
     description: "Registered GST Consultants",
   },
   {
     icon: FileCheck,
     title: "Insolvency Professional",
     description: "IBBI Registered IPs",
   },
 ];
 
 const industries = [
   "Manufacturing",
   "IT & Software",
   "Healthcare",
   "Real Estate",
   "Education",
   "Retail",
   "Export-Import",
   "Hospitality",
   "E-commerce",
   "Banking & NBFC",
 ];
 
 export const ClientLogos = () => {
   return (
     <section className="py-16 bg-navy">
       <div className="container mx-auto px-4">
         {/* Certifications */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
           {certifications.map((cert, index) => (
             <div
               key={index}
               className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors"
             >
               <cert.icon className="w-10 h-10 text-gold mb-3" />
               <h4 className="text-cream font-semibold mb-1">{cert.title}</h4>
               <p className="text-white/60 text-sm">{cert.description}</p>
             </div>
           ))}
         </div>
 
         {/* Industries Served */}
         <div className="text-center">
           <p className="text-white/60 text-sm mb-6 uppercase tracking-wider">
             Trusted by businesses across industries
           </p>
           <div className="flex flex-wrap justify-center gap-3">
             {industries.map((industry, index) => (
               <span
                 key={index}
                 className="px-4 py-2 bg-white/5 text-cream text-sm rounded-full border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-colors cursor-default"
               >
                 {industry}
               </span>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };