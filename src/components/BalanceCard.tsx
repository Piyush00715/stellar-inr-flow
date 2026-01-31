import { cn } from "@/lib/utils";
import { TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  usdValue: string;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

export function BalanceCard({ 
  balance, 
  usdValue, 
  change,
  isPositive = true,
  className 
}: BalanceCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl p-6",
        "bg-card border border-primary/20",
        "hover:border-primary/40 transition-all duration-300",
        "group",
        className
      )}
    >
      {/* Background glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground text-sm uppercase tracking-wider font-display">
            Total Balance
          </span>
          {change && (
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium",
              isPositive ? "text-success" : "text-destructive"
            )}>
              <TrendingUp className={cn("w-4 h-4", !isPositive && "rotate-180")} />
              {change}
            </div>
          )}
        </div>
        
        <div className="mb-2">
          <span className="text-4xl md:text-5xl font-bold font-display text-gradient-gold">
            ₹{balance}
          </span>
          <span className="text-primary ml-2 font-display">INRTEST</span>
        </div>
        
        <div className="text-muted-foreground text-sm">
          ≈ ${usdValue} USD
        </div>
        
        {/* Quick actions */}
        <div className="flex gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-display text-sm uppercase tracking-wider">
            <ArrowUpRight className="w-4 h-4" />
            Send
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-display text-sm uppercase tracking-wider">
            <ArrowDownLeft className="w-4 h-4" />
            Receive
          </button>
        </div>
      </div>
    </div>
  );
}
