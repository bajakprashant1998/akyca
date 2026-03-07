import { useState, useEffect, useRef } from "react";
import { TrendingUp, Sparkles } from "lucide-react";

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
    <div ref={ref} className="bg-white border-b border-border py-2.5 relative overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/3 to-transparent animate-[shimmer_3s_infinite]" style={{ backgroundSize: '200% 100%' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-gold/10 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Live</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:inline">
              Tax Savings Delivered
            </span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-lg font-display font-bold text-navy">
                ₹{formatNumber(revenueCount)} Cr+
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="tel:+919825046598" className="text-muted-foreground hover:text-navy transition-colors font-medium">
              +91 98250 46598
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
