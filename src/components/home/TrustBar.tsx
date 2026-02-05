 import { useState, useEffect, useRef } from "react";
 import { TrendingUp, Info } from "lucide-react";
 
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
 
 const formatNumber = (num: number): string => {
   return num.toLocaleString('en-IN');
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
 
   const revenueCount = useCountUp(850, 2500, isVisible);
 
   return (
     <div ref={ref} className="bg-white border-b border-border py-2.5">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between">
           {/* Revenue Counter - WebFX Style */}
           <div className="flex items-center gap-2">
             <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
               Tax Savings Delivered to Clients
             </span>
             <div className="flex items-center gap-1.5">
               <TrendingUp className="w-4 h-4 text-gold" />
               <span className="text-lg font-display font-bold text-navy">
                 ₹{formatNumber(revenueCount)} Cr+
               </span>
               <button className="text-muted-foreground hover:text-foreground">
                 <Info className="w-3.5 h-3.5" />
               </button>
             </div>
           </div>
 
           {/* Right side links */}
           <div className="hidden md:flex items-center gap-6 text-sm">
             <a href="tel:+919825046598" className="text-muted-foreground hover:text-navy transition-colors">
               +91 98250 46598
             </a>
           </div>
         </div>
       </div>
     </div>
   );
 };