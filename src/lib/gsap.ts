import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = {
  outExpo: "expo.out",
  softInOut: "power2.inOut",
  settle: "back.out(1.5)",
  cinematic: "power4.inOut",
  bounce: "bounce.out",
  out: "power3.out",
  inOut: "power3.inOut",
};

export const DUR = {
  fast: 0.3,
  base: 0.6,
  slow: 1.2,
  epic: 2.5,
  sm: 0.4,
  md: 0.8,
  lg: 1.2,
  xl: 1.8,
};

export const STAGGER = {
  sm: 0.05,
  md: 0.08,
  lg: 0.12,
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export { gsap, ScrollTrigger };
export default gsap;
