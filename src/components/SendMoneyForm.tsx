import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type TransactionStatus = "idle" | "loading" | "success" | "error";

interface SendMoneyFormProps {
  onSend?: (recipient: string, amount: string) => void;
}

export function SendMoneyForm({ onSend }: SendMoneyFormProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<TransactionStatus>("idle");
  const [txHash, setTxHash] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recipient || !amount) return;

    setStatus("loading");
    
    // Simulate transaction
    setTimeout(() => {
      const mockTxHash = "c87f52a8b9e1d4f6a3c2e5b8d7f9a0c3e6b9d2f5a8c1e4b7d0f3a6c9e2b5d8";
      setTxHash(mockTxHash);
      setStatus("success");
      onSend?.(recipient, amount);
    }, 2500);
  };

  const resetForm = () => {
    setRecipient("");
    setAmount("");
    setStatus("idle");
    setTxHash("");
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          Transaction Confirmed!
        </h3>
        <p className="text-muted-foreground mb-4">
          Sent <span className="text-primary font-semibold">₹{amount} INRTEST</span> successfully
        </p>
        <div className="bg-secondary/50 rounded-lg p-3 mb-4">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Transaction Hash</p>
          <p className="font-mono text-sm text-foreground break-all">{txHash.slice(0, 20)}...{txHash.slice(-10)}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(`https://stellar.expert/explorer/testnet/tx/${txHash}`, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Explorer
          </Button>
          <Button variant="default" size="sm" onClick={resetForm}>
            Send Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-primary/20 rounded-xl p-6">
      <h3 className="text-lg font-display font-bold text-foreground mb-6 uppercase tracking-wider">
        Send INR Token
      </h3>
      
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="recipient" className="text-muted-foreground uppercase text-xs tracking-wider">
            Recipient Address
          </Label>
          <Input
            id="recipient"
            placeholder="G..."
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="bg-secondary border-border focus:border-primary font-mono"
            disabled={status === "loading"}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-muted-foreground uppercase text-xs tracking-wider">
            Amount (INRTEST)
          </Label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-secondary border-border focus:border-primary text-2xl font-display pr-20"
              disabled={status === "loading"}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-display text-sm">
              ₹ INR
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Fee: ~0.00001 XLM • Confirms in ~5 seconds
          </p>
        </div>
        
        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={!recipient || !amount || status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Payment
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
