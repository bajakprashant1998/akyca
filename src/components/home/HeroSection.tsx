 import { useState, useEffect, useRef } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import { Shield, Award, Users, ArrowRight, Play, FileText, Calculator, ClipboardCheck, Building2 } from "lucide-react";

export const HeroSection = () => {
   const [businessType, setBusinessType] = useState("");
   const navigate = useNavigate();
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLElement>(null);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) setIsVisible(true);
       },
       { threshold: 0.1 }
     );
     if (ref.current) observer.observe(ref.current);
     return () => observer.disconnect();
   }, []);
 
   const handleGetConsultation = () => {
     navigate("/contact", { state: { businessType } });
   };
 
   // Flywheel segments
   const segments = [
     { label: "Taxation", color: "from-blue-500 to-blue-600", icon: FileText },
     { label: "GST", color: "from-emerald-500 to-emerald-600", icon: Calculator },
     { label: "Audit", color: "from-purple-500 to-purple-600", icon: ClipboardCheck },
     { label: "Advisory", color: "from-amber-500 to-amber-600", icon: Building2 },
   ];
 
  return (
     <section ref={ref} className="relative bg-gradient-to-br from-slate-50 via-white to-cream/30 overflow-hidden">
      {/* Background Pattern */}
       <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

       <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Left Content */}
           <div className="max-w-xl">
          {/* Trust Badges */}
             <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/5 text-navy text-xs font-medium rounded-full border border-navy/10">
                 <Shield className="w-3.5 h-3.5" />
              RBI Category-I Firm
            </span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-navy text-xs font-medium rounded-full border border-gold/20">
                 <Award className="w-3.5 h-3.5" />
              45+ Years of Excellence
            </span>
          </div>

          {/* Main Heading */}
             <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-navy leading-[1.1] mb-6 animate-slide-up">
               Your Financial Growth
               <span className="block text-gold">Partner in India</span>
          </h1>

          {/* Subheading */}
             <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
               For businesses who need <strong className="text-foreground">tax savings</strong>, not just compliance. 
               Our expert framework connects CA expertise, technology, and strategy to 
               drive measurable financial growth.
          </p>

             {/* Input CTA - WebFX Style */}
             <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
               <div className="flex flex-col sm:flex-row gap-3 mb-4">
                 <input
                   type="text"
                   placeholder="Enter your business type (e.g., IT Startup, Manufacturer)"
                   value={businessType}
                   onChange={(e) => setBusinessType(e.target.value)}
                   className="flex-1 px-4 py-3.5 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                 />
                 <button
                   onClick={handleGetConsultation}
                   className="px-6 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors whitespace-nowrap"
            >
                   Get Free Consultation
                 </button>
               </div>
               <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                 <Link to="/services" className="hover:text-navy transition-colors flex items-center gap-1">
                   <ArrowRight className="w-3.5 h-3.5" /> View All Services
                 </Link>
                 <Link to="/contact" className="hover:text-navy transition-colors flex items-center gap-1">
                   <ArrowRight className="w-3.5 h-3.5" /> Talk to Expert
                 </Link>
               </div>
             </div>
        </div>

           {/* Right - Service Flywheel */}
           <div className="hidden lg:flex justify-center items-center">
             <div className={`relative w-[400px] h-[400px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
               {/* Outer Ring with Segments */}
               <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-navy/10"></div>
               
               {/* Animated segments */}
               {segments.map((segment, index) => {
                 const angle = (index * 90) - 45; // Position at 45, 135, 225, 315 degrees
                 const radian = (angle * Math.PI) / 180;
                 const radius = 160;
                 const x = Math.cos(radian) * radius;
                 const y = Math.sin(radian) * radius;
                 
                 return (
                   <div
                     key={segment.label}
                     className="absolute flex flex-col items-center transition-all duration-500 hover:scale-110"
                     style={{
                       left: `calc(50% + ${x}px - 40px)`,
                       top: `calc(50% + ${y}px - 40px)`,
                       animationDelay: `${index * 0.15}s`,
                     }}
                   >
                     <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center shadow-lg`}>
                       <segment.icon className="w-8 h-8 text-white" />
                     </div>
                     <span className="mt-2 text-sm font-semibold text-navy">{segment.label}</span>
                   </div>
                 );
               })}
               
               {/* Center Hub */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-44 h-44 rounded-full bg-white shadow-2xl border border-border flex flex-col items-center justify-center">
                   <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">AKYCO</span>
                   <span className="text-lg font-display font-bold text-navy">Growth Engine</span>
                   <span className="text-sm text-gold font-medium mt-1">15% Tax Savings</span>
                   <button className="mt-3 w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-navy-dark transition-colors">
                     <Play className="w-4 h-4 text-white ml-0.5" />
                   </button>
                 </div>
               </div>
               
               {/* Connecting dots */}
               {[0, 90, 180, 270].map((angle, i) => (
                 <div
                   key={i}
                   className="absolute w-2.5 h-2.5 rounded-full bg-gold"
                   style={{
                     left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 100}px - 5px)`,
                     top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 100}px - 5px)`,
                   }}
                 />
               ))}
             </div>
           </div>
         </div>
              </div>
       
       {/* Stats Bar - Below Hero */}
       <div className="border-t border-border bg-white/80 backdrop-blur-sm">
         <div className="container mx-auto px-4 py-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
             {[
               { number: "15%", label: "Higher Tax Savings", sublabel: "For connected clients" },
               { number: "1000+", label: "Clients Served", sublabel: "Across industries" },
               { number: "#1", label: "Rated CA Firm", sublabel: "In Gujarat region" },
               { number: "45+", label: "Years of Results", sublabel: "Driving measurable ROI" },
             ].map((stat, index) => (
               <div key={index} className="text-center md:text-left">
                 <div className="text-xl md:text-2xl font-display font-bold text-navy uppercase tracking-wide">
                   {stat.number} {stat.label}
                 </div>
                 <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
         </div>
      </div>
    </section>
  );
};
