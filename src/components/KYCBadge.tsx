import { Shield, ShieldCheck, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface KYCBadgeProps {
  className?: string;
}

export function KYCBadge({ className }: KYCBadgeProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleVerify = () => {
    if (agreed) {
      setIsVerified(true);
      setShowModal(false);
    }
  };

  return (
    <>
      {/* Badge */}
      <button 
        onClick={() => !isVerified && setShowModal(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display uppercase tracking-wider transition-all",
          isVerified 
            ? "bg-success/20 text-success border border-success/30" 
            : "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30",
          className
        )}
      >
        {isVerified ? (
          <>
            <ShieldCheck className="w-3.5 h-3.5" />
            KYC Verified
          </>
        ) : (
          <>
            <ShieldAlert className="w-3.5 h-3.5" />
            Verify KYC
          </>
        )}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-primary/30 rounded-xl p-6 max-w-md w-full mx-4 animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  Mock KYC Verification
                </h3>
                <p className="text-sm text-muted-foreground">Demo only</p>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground mb-3">
                In a production environment, this would connect to regulated KYC providers. 
                For this demo, simply agree to proceed.
              </p>
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="kyc-agree" 
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label 
                  htmlFor="kyc-agree" 
                  className="text-sm text-foreground cursor-pointer leading-tight"
                >
                  I confirm this is a testnet demo and no real identity verification is performed
                </label>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="default" 
                className="flex-1"
                disabled={!agreed}
                onClick={handleVerify}
              >
                Complete Verification
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
