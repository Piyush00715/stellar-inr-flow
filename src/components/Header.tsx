import { WalletButton } from "./WalletButton";
import { KYCBadge } from "./KYCBadge";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-display font-bold text-gradient-gold tracking-wider">
              SAHARA
            </h1>
            <KYCBadge className="hidden sm:flex" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#send" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Send
            </a>
            <a href="#history" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              History
            </a>
          </nav>

          {/* Wallet */}
          <div className="hidden md:block">
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border transition-all duration-300",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-2">
            <a href="#" className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors">
              Home
            </a>
            <a href="#send" className="px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
              Send
            </a>
            <a href="#history" className="px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
              History
            </a>
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <KYCBadge />
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
}
