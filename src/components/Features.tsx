import { Zap, Lock, Smartphone, Globe, Coins, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Transactions confirm in ~5 seconds on Stellar network",
  },
  {
    icon: Coins,
    title: "INR Stablecoin",
    description: "Send value pegged to Indian Rupee without volatility",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "You control your keys. Your money. Your freedom.",
  },
  {
    icon: Globe,
    title: "Borderless",
    description: "Send to anyone, anywhere in the world instantly",
  },
  {
    icon: ArrowLeftRight,
    title: "UPI Ready",
    description: "Future integration with UPI for easy on/off ramps",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for the way India transacts",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built for <span className="text-gradient-gold">India's Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining Stellar's speed with India's payment needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group p-6 rounded-xl bg-card border border-border",
                "hover:border-primary/50 hover:bg-card/80 transition-all duration-300",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
