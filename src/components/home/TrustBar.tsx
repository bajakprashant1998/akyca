import { useState, useEffect, useRef } from "react";
import { TrendingUp, Sparkles, Shield, Award } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startCounting]);
  return count;
};

const formatNumber = (num: number): string => num.toLocaleString('en-IN');

export const TrustBar = () => {
  const { get } = useSiteContent("home");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const phone = get("trustbar", "phone", "+91 98250 46598");
  const whatsapp = get("trustbar", "whatsapp", "919825046598");
  const taxSavingsLabel = get("trustbar", "tax_savings_label", "Tax Savings Delivered");
  const taxSavingsAmount = get("trustbar", "tax_savings_amount", "850");
  const badge1 = get("trustbar", "badge1", "RBI Category-I");
  const badge2 = get("trustbar", "badge2", "45+ Years");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const revenueCount = useCountUp(parseInt(taxSavingsAmount) || 850, 2500, isVisible);

  return (
    <div ref={ref} className="bg-gradient-to-r from-white via-cream/20 to-white border-b border-border py-2.5 md:py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-[shimmer_3s_infinite]" style={{ backgroundSize: '200% 100%' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gold/10 to-gold/20 rounded-full border border-gold/20">
              <div className="relative">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                <div className="absolute inset-0 animate-ping"><Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold/50" /></div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-gold uppercase tracking-wider">Live</span>
            </div>
            
            {/* Show on all screens now */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <TrendingUp className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gold" />
              <span className="text-sm sm:text-xl font-display font-bold text-navy">₹{formatNumber(revenueCount)} Cr+</span>
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:inline">{taxSavingsLabel}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full">
              <Shield className="w-4 h-4 text-navy" />
              <span className="text-xs font-semibold text-navy">{badge1}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full">
              <Award className="w-4 h-4 text-navy" />
              <span className="text-xs font-semibold text-navy">{badge2}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-navy transition-colors font-semibold hidden md:block">
              {phone}
            </a>
            <a 
              href={`https://wa.me/${whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-green-600 text-white text-[10px] sm:text-xs font-semibold rounded-full hover:bg-green-500 transition-colors"
            >
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
