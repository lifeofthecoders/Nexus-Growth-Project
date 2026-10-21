"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className,
}: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: value,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.innerText = Math.round(obj.val).toString();
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [value, duration]);

  return (
    <div ref={containerRef} className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline gap-1 text-5xl font-bold md:text-7xl">
        {prefix && <span className="text-3xl md:text-5xl">{prefix}</span>}
        <span ref={numberRef}>0</span>
        {suffix && <span className="text-3xl md:text-5xl">{suffix}</span>}
      </div>
      <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export default StatCounter;
