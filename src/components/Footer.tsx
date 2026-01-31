import { MarqueeText } from "./MarqueeText";
import { Github, Twitter, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Marquee */}
      <div className="overflow-hidden py-4 bg-card/50">
        <MarqueeText 
          text="HACKATHON PROJECT • STELLAR TESTNET • NOT FOR PRODUCTION USE" 
          className="text-xs font-display uppercase tracking-widest text-muted-foreground/50"
          speed="slow"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">SAHARA</h3>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              A decentralized INR stablecoin payment system built on Stellar. 
              This is a hackathon demo project running on testnet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground uppercase text-sm tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://stellar.org" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  Stellar Network <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://soroban.stellar.org" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  Soroban Docs <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://stellar.expert" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  Block Explorer <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div>
            <h4 className="font-display font-bold text-foreground uppercase text-sm tracking-wider mb-4">
              Disclaimer
            </h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              This is a non-custodial demo on Stellar testnet. 
              Fiat on/off ramps and compliance would be handled by 
              regulated anchors in production.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © 2025 SAHARA • Built for Stellar Community Fund Hackathon
          </p>
        </div>
      </div>
    </footer>
  );
}
