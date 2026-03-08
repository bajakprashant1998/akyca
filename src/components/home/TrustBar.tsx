import { useState, useEffect, useRef } from "react";
import { TrendingUp, Sparkles, Shield, Award } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const revenueCount = useCountUp(850, 2500, isVisible);

  return (
    <div ref={ref} className="bg-gradient-to-r from-white via-cream/20 to-white border-b border-border py-3 relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-[shimmer_3s_infinite]" style={{ backgroundSize: '200% 100%' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left - Live Counter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gold/10 to-gold/20 rounded-full border border-gold/20">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-gold" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-4 h-4 text-gold/50" />
                </div>
              </div>
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider">Live</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Tax Savings Delivered
              </span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold" />
                <span className="text-xl font-display font-bold text-navy">
                  ₹{formatNumber(revenueCount)} Cr+
                </span>
              </div>
            </div>
          </div>

          {/* Center - Trust Badges (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full">
              <Shield className="w-4 h-4 text-navy" />
              <span className="text-xs font-semibold text-navy">RBI Category-I</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-full">
              <Award className="w-4 h-4 text-navy" />
              <span className="text-xs font-semibold text-navy">45+ Years</span>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="flex items-center gap-4">
            <a href="tel:+919825046598" className="text-sm text-muted-foreground hover:text-navy transition-colors font-semibold hidden md:block">
              +91 98250 46598
            </a>
            <a 
              href="https://wa.me/919825046598" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-full hover:bg-green-500 transition-colors"
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
