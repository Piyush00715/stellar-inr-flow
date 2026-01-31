import { MarqueeText } from "./MarqueeText";
import { Button } from "./ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      {/* Marquee strips */}
      <div className="absolute top-20 left-0 right-0 -rotate-1">
        <MarqueeText 
          text="SAHARA • STELLAR • INR STABLECOIN • INSTANT PAYMENTS • ZERO BORDERS" 
          className="text-6xl md:text-8xl font-display font-black text-primary/10 py-4"
          speed="slow"
        />
      </div>
      <div className="absolute top-40 left-0 right-0 rotate-1">
        <MarqueeText 
          text="₹ • DECENTRALIZED • SECURE • FAST • BORDERLESS • WEB3" 
          className="text-4xl md:text-6xl font-display font-black text-primary/5 py-4"
          speed="normal"
          reverse
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-display uppercase tracking-wider text-foreground">
              Live on Stellar Testnet
            </span>
          </div>

          {/* Title with glitch effect */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black mb-6 leading-none">
            <span className="text-gradient-gold animate-shimmer inline-block">SAHARA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Send <span className="text-primary font-semibold">INR stablecoins</span> across borders in seconds. 
            No banks. No waiting. Just pure, borderless money.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              Start Sending
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">~5s</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Confirmation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">0.00001</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">XLM Fees</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">24/7</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-10 left-0 right-0">
        <MarqueeText 
          text="POWERED BY STELLAR • SOROBAN SMART CONTRACTS • TESTNET DEMO" 
          className="text-sm font-display uppercase tracking-widest text-muted-foreground/50 py-4"
          speed="slow"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
