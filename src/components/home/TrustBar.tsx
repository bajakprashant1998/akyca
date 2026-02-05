 import { useState, useEffect, useRef } from "react";
 import { Shield, Award, Users, TrendingUp } from "lucide-react";
 
 const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     if (!startCounting) return;
     
     let startTime: number;
     const step = (timestamp: number) => {
       if (!startTime) startTime = timestamp;
       const progress = Math.min((timestamp - startTime) / duration, 1);
       setCount(Math.floor(progress * end));
       if (progress < 1) {
         requestAnimationFrame(step);
       }
     };
     requestAnimationFrame(step);
   }, [end, duration, startCounting]);
 
   return count;
 };
 
 export const TrustBar = () => {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setIsVisible(true);
         }
       },
       { threshold: 0.1 }
     );
 
     if (ref.current) {
       observer.observe(ref.current);
     }
 
     return () => observer.disconnect();
   }, []);
 
   const yearsCount = useCountUp(45, 2000, isVisible);
   const clientsCount = useCountUp(1000, 2500, isVisible);
   const partnersCount = useCountUp(9, 1500, isVisible);
   const revenueCount = useCountUp(500, 2000, isVisible);
 
   const stats = [
     {
       icon: Award,
       value: `${yearsCount}+`,
       label: "Years of Excellence",
     },
     {
       icon: Users,
       value: `${clientsCount}+`,
       label: "Happy Clients",
     },
     {
       icon: Shield,
       value: `${partnersCount}+`,
       label: "Expert Partners",
     },
     {
       icon: TrendingUp,
       value: `₹${revenueCount}Cr+`,
       label: "Revenue Managed",
     },
   ];
 
   return (
     <div ref={ref} className="bg-navy-dark py-4 border-b border-white/10">
       <div className="container mx-auto px-4">
         <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
           {/* RBI Badge */}
           <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
             <Shield className="w-5 h-5 text-gold" />
             <span className="text-cream text-sm font-medium">RBI Category-I Authorized Firm</span>
           </div>
 
           {/* Stats */}
           <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
             {stats.map((stat, index) => (
               <div key={index} className="flex items-center gap-3">
                 <stat.icon className="w-5 h-5 text-gold" />
                 <div>
                   <div className="text-cream font-display font-bold text-lg">
                     {stat.value}
                   </div>
                   <div className="text-white/60 text-xs">{stat.label}</div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
 };