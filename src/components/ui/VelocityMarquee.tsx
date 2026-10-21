"use client";

import { useRef, useEffect } from "react";
import gsap from "@/lib/gsap";
import { useLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";

export interface MarqueeRow {
  items: string[];
  velocity: number;
  bg?: string;
  textColor?: string;
  outline?: boolean;
}

interface VelocityMarqueeProps {
  rows: MarqueeRow[];
  className?: string;
  tilt?: boolean;
}

export function VelocityMarquee({ rows, className, tilt = false }: VelocityMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progress = useRef<number[]>(rows.map(() => 0));
  const lenis = useLenis();

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const ticker = gsap.ticker;
    const update = (time: number, deltaTime: number) => {
      const dt = deltaTime / 1000;
      const scrollVelocity = lenis?.velocity || 0;
      const velocityMultiplier = 1 + Math.abs(scrollVelocity / 40);

      rowsRefs.current.forEach((row, i) => {
        if (!row) return;
        const rowData = rows[i];
        const moveAmount = rowData.velocity * dt * velocityMultiplier;
        progress.current[i] += moveAmount;

        if (progress.current[i] <= -25) {
          progress.current[i] += 25;
        } else if (progress.current[i] >= 0) {
          progress.current[i] -= 25;
        }

        gsap.set(row, { xPercent: progress.current[i] });
      });
    };

    ticker.add(update);
    return () => ticker.remove(update);
  }, [lenis, rows]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden py-4 select-none",
        tilt && "rotate-[-1.5deg] scale-105 my-8",
        className
      )}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="relative w-full overflow-hidden border-y border-white/10 my-1 py-2.5"
          style={{
            backgroundColor: row.bg || (i % 2 === 0 ? "#FF1F1F" : "#1A1A1A"),
            color: row.textColor || (i % 2 === 0 ? "#fff" : "#C9CCD1"),
            boxShadow: i % 2 === 0 ? "0 0 30px rgba(255, 31, 31, 0.2)" : "none",
          }}
        >
          <div
            ref={(el) => {
              rowsRefs.current[i] = el;
            }}
            className="flex w-fit will-change-transform"
          >
            {[...Array(4)].map((_, copyIndex) => (
              <div key={copyIndex} className="flex shrink-0 items-center gap-6 pr-6">
                {row.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-6">
                    <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-none">
                      {item}
                    </span>
                    <span className="text-3xl sm:text-5xl opacity-60">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VelocityMarquee;
