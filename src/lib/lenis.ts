import Lenis from "lenis";

let lenis: Lenis | null = null;

export const getLenis = () => lenis;
export const useLenis = () => lenis;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

export const headerOffset = () => {
  if (typeof window === "undefined") return 0;
  const offset = getComputedStyle(document.documentElement).getPropertyValue("--nav-offset");
  return parseInt(offset || "0", 10);
};

export const scrollToHash = (hash: string) => {
  if (!lenis) return;
  const target = document.querySelector(hash);
  if (target) {
    lenis.scrollTo(target as HTMLElement, { offset: -headerOffset() });
  }
};
