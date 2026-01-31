import { ArrowUpRight, ArrowDownLeft, ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  type: "sent" | "received";
  amount: string;
  address: string;
  timestamp: string;
  status: "confirmed" | "pending";
  txHash: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "sent",
    amount: "500.00",
    address: "GDQP...K4XZ",
    timestamp: "2 mins ago",
    status: "confirmed",
    txHash: "abc123...xyz789",
  },
  {
    id: "2",
    type: "received",
    amount: "1,250.00",
    address: "GBCD...EFGH",
    timestamp: "15 mins ago",
    status: "confirmed",
    txHash: "def456...uvw012",
  },
  {
    id: "3",
    type: "sent",
    amount: "100.00",
    address: "GHIJ...KLMN",
    timestamp: "1 hour ago",
    status: "confirmed",
    txHash: "ghi789...rst345",
  },
  {
    id: "4",
    type: "received",
    amount: "2,000.00",
    address: "GOPQ...RSTU",
    timestamp: "3 hours ago",
    status: "confirmed",
    txHash: "jkl012...opq678",
  },
];

export function TransactionHistory() {
  return (
    <div className="bg-card border border-primary/20 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-display font-bold text-foreground uppercase tracking-wider">
          Recent Transactions
        </h3>
      </div>
      
      <div className="divide-y divide-border">
        {mockTransactions.map((tx) => (
          <div 
            key={tx.id}
            className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                tx.type === "sent" 
                  ? "bg-destructive/20 text-destructive" 
                  : "bg-success/20 text-success"
              )}>
                {tx.type === "sent" ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5" />
                )}
              </div>
              
              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground capitalize">
                    {tx.type}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {tx.address}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {tx.timestamp}
                  <span className={cn(
                    "px-1.5 py-0.5 rounded text-[10px] uppercase font-medium",
                    tx.status === "confirmed" 
                      ? "bg-success/20 text-success" 
                      : "bg-accent/20 text-accent"
                  )}>
                    {tx.status}
                  </span>
                </div>
              </div>
              
              {/* Amount */}
              <div className="text-right">
                <div className={cn(
                  "font-display font-bold",
                  tx.type === "sent" ? "text-foreground" : "text-success"
                )}>
                  {tx.type === "sent" ? "-" : "+"}₹{tx.amount}
                </div>
                <div className="text-xs text-muted-foreground">INRTEST</div>
              </div>
              
              {/* External link */}
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border text-center">
        <button className="text-primary text-sm font-display uppercase tracking-wider hover:text-primary/80 transition-colors">
          View All Transactions →
        </button>
      </div>
    </div>
  );
}
