import { BalanceCard } from "./BalanceCard";
import { SendMoneyForm } from "./SendMoneyForm";
import { TransactionHistory } from "./TransactionHistory";

export function Dashboard() {
  return (
    <section id="send" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Your <span className="text-gradient-gold">Dashboard</span>
          </h2>
          <p className="text-muted-foreground">
            Manage your INR stablecoin balance and transactions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            <BalanceCard 
              balance="12,500.00"
              usdValue="150.25"
              change="+5.2%"
              isPositive
            />
            <SendMoneyForm />
          </div>

          {/* Right column */}
          <div id="history">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </section>
  );
}
