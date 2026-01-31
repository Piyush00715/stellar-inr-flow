import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  text: string;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function MarqueeText({ 
  text, 
  className, 
  reverse = false,
  speed = "normal" 
}: MarqueeTextProps) {
  const speedClasses = {
    slow: "animate-[marquee_30s_linear_infinite]",
    normal: "animate-[marquee_20s_linear_infinite]",
    fast: "animate-[marquee_10s_linear_infinite]",
  };

  const reverseSpeedClasses = {
    slow: "animate-[marquee-reverse_30s_linear_infinite]",
    normal: "animate-[marquee-reverse_20s_linear_infinite]",
    fast: "animate-[marquee-reverse_10s_linear_infinite]",
  };

  const repeatedText = `${text} • `.repeat(10);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div 
        className={cn(
          "inline-block",
          reverse ? reverseSpeedClasses[speed] : speedClasses[speed]
        )}
      >
        <span className="inline-block">{repeatedText}</span>
        <span className="inline-block">{repeatedText}</span>
      </div>
    </div>
  );
}
