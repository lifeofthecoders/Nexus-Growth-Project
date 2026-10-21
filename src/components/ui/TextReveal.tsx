"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: TextRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = 50;
        break;
      case "left":
        x = 50;
        break;
      case "right":
        x = -50;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            once: once,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, once]);

  return (
    <div
      ref={elementRef}
      className={cn("opacity-0 will-change-[opacity,transform]", className)}
    >
      {children}
    </div>
  );
}

export default TextReveal;
