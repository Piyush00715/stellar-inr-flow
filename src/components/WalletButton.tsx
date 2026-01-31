import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletButtonProps {
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function WalletButton({ onConnect, onDisconnect }: WalletButtonProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [copied, setCopied] = useState(false);

  const handleConnect = async () => {
    // Simulate wallet connection
    // In production, this would use Freighter wallet SDK
    setIsConnected(true);
    setAddress("GDQP...K4XZ"); // Mock address
    onConnect?.();
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    onDisconnect?.();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOUJ3BBPFAP4K4XZ");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <div 
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md",
            "bg-card border border-primary/30 text-foreground",
            "hover:border-primary/50 transition-colors cursor-pointer"
          )}
          onClick={handleCopy}
        >
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-sm">{address}</span>
          {copied ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleDisconnect}
          className="text-muted-foreground hover:text-destructive"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant="hero" 
      onClick={handleConnect}
      className="gap-2"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </Button>
  );
}
