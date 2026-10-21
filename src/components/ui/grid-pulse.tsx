'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const START_HUE = 60;
const HUE_RANGE = 270;
const LIGHT_VALUES = [88, 80, 72, 64, 56];
const DARK_VALUES = [72, 65, 58, 51, 44];
const MIN_BRIGHTNESS = 0.13;
const DISTANCE_FACTOR = 2.2;
const TEXT_PADDING = 5;
const FADE_IN_MS = 160;
const FADE_OUT_MS = 750;

const easeOut = (t: number) => 1 - (1 - t) ** 2;
const easeIn = (t: number) => t * t;

interface CellState {
  col: number;
  row: number;
  colour: string;
  dim: number;
  born: number;
  until: number;
}

export interface GridPulseProps extends React.HTMLAttributes<HTMLDivElement> {
  cell?: number;
  reach?: number;
  ambient?: number;
  maxLit?: number;
  avoid?: string;
  mask?: boolean;
}

export function GridPulse({
  cell = 24,
  reach = 2.6,
  ambient = 2,
  maxLit = 180,
  avoid = '[data-grid-avoid]',
  mask = true,
  className,
  style,
  ...props
}: GridPulseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cols = 1;
    let rows = 1;
    let width = 0;
    let height = 0;
    let textRects: DOMRect[] = [];
    let lightnessValues = LIGHT_VALUES;

    const litCells = new Map<string, CellState>();
    const offscreenCtx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });

    const readTheme = () => {
      if (!offscreenCtx) return;
      offscreenCtx.clearRect(0, 0, 1, 1);
      offscreenCtx.fillStyle = getComputedStyle(container).color || '#ffffff';
      offscreenCtx.fillRect(0, 0, 1, 1);
      const [r, g, b] = offscreenCtx.getImageData(0, 0, 1, 1).data;
      lightnessValues = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.5 ? DARK_VALUES : LIGHT_VALUES;
    };

    const measureText = () => {
      const containerRect = container.getBoundingClientRect();
      const avoidElements = [...(container.parentElement ?? document).querySelectorAll(avoid)];
      textRects = avoidElements.flatMap((el) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        const clientRects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
        const rects = clientRects.length > 0 ? clientRects : [el.getBoundingClientRect()];
        return rects.map(
          (r) =>
            new DOMRect(
              r.left - containerRect.left - TEXT_PADDING,
              r.top - containerRect.top - TEXT_PADDING,
              r.width + TEXT_PADDING * 2,
              r.height + TEXT_PADDING * 2
            )
        );
      });
    };

    const measure = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      cols = Math.max(1, Math.ceil(width / cell));
      rows = Math.max(1, Math.ceil(height / cell));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readTheme();
      measureText();
      wake();
    };

    const calculateBrightness = (col: number, row: number) => {
      const cx = col * cell + cell / 2;
      const cy = row * cell + cell / 2;
      let minDistance = Number.POSITIVE_INFINITY;
      for (const rect of textRects) {
        const dx = Math.max(rect.left - cx, 0, cx - rect.right);
        const dy = Math.max(rect.top - cy, 0, cy - rect.bottom);
        minDistance = Math.min(minDistance, Math.hypot(dx, dy));
        if (minDistance === 0) break;
      }
      return minDistance === Number.POSITIVE_INFINITY
        ? 1
        : MIN_BRIGHTNESS + (1 - MIN_BRIGHTNESS) * Math.min(1, minDistance / (DISTANCE_FACTOR * cell));
    };

    const getInk = (row: number) => {
      const rowFraction = rows > 1 ? Math.min(1, row / (rows - 1)) : 0;
      const hue = ((START_HUE - rowFraction * HUE_RANGE) % 360 + 360) % 360;
      const lightness = lightnessValues[Math.floor(Math.random() * lightnessValues.length)];
      return `hsl(${Math.round(hue)} 94% ${lightness}%)`;
    };

    let animFrame = 0;
    const draw = (now: number) => {
      animFrame = 0;
      ctx.clearRect(0, 0, width, height);

      for (const [key, cellData] of litCells) {
        let alpha: number;
        if (now < cellData.until) {
          alpha = easeOut(Math.min(1, (now - cellData.born) / FADE_IN_MS));
        } else {
          const fadeProgress = (now - cellData.until) / FADE_OUT_MS;
          if (fadeProgress >= 1) {
            litCells.delete(key);
            continue;
          }
          alpha = 1 - easeIn(fadeProgress);
        }
        ctx.globalAlpha = alpha * cellData.dim;
        ctx.fillStyle = cellData.colour;
        ctx.fillRect(cellData.col * cell + 1, cellData.row * cell + 1, cell - 1, cell - 1);
      }

      ctx.globalAlpha = 1;
      if (litCells.size > 0) {
        animFrame = requestAnimationFrame(draw);
      }
    };

    const wake = () => {
      if (!animFrame) {
        animFrame = requestAnimationFrame(draw);
      }
    };

    const light = (col: number, row: number, duration: number) => {
      if (col < 0 || row < 0 || col >= cols || row >= rows || litCells.size >= maxLit) return;
      const key = `${col},${row}`;
      const now = performance.now();
      const existing = litCells.get(key);
      if (existing && now < existing.until) return;

      let born = now;
      if (existing) {
        const remaining = 1 - easeIn(Math.min(1, (now - existing.until) / FADE_OUT_MS));
        born = now - (1 - Math.sqrt(1 - remaining)) * FADE_IN_MS;
      }

      litCells.set(key, {
        col,
        row,
        colour: existing?.colour ?? getInk(row),
        dim: calculateBrightness(col, row),
        born,
        until: now + duration,
      });

      wake();
    };

    let moveFrame = 0;
    let pointerPos: { x: number; y: number } | null = null;

    const paint = () => {
      moveFrame = 0;
      if (!pointerPos) return;
      const col = Math.floor(pointerPos.x / cell);
      const row = Math.floor(pointerPos.y / cell);
      const radius = Math.ceil(reach);

      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const dist = Math.hypot(dx, dy);
          if (dist > reach || Math.random() > 1 - dist / (reach + 0.6)) continue;
          light(col + dx, row + dy, 260 + Math.random() * 900);
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!moveFrame) {
        moveFrame = requestAnimationFrame(paint);
      }
    };

    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!isVisible) return;
      const rect = container.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      let px: number;
      let py: number;

      if (pointerPos) {
        px = pointerPos.x;
        py = pointerPos.y;
      } else {
        px = rect.width / 2;
        py = Math.max(0, Math.min(rect.height, window.innerHeight / 2 - rect.top));
      }

      if (px < 0 || px > rect.width || py < 0 || py > rect.height) return;

      const col = Math.floor(px / cell);
      const row = Math.floor(py / cell);
      const steps = Math.min(Math.ceil(Math.abs(deltaY) / (cell * 0.75)), 6);
      const dir = deltaY > 0 ? 1 : -1;

      for (let s = 0; s <= steps; s++) {
        const targetRow = row + s * dir;
        const radius = Math.ceil(reach * 0.85);
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.random() > 0.35) {
            light(col + dx, targetRow, 280 + Math.random() * 700);
          }
        }
      }
      wake();
    };

    let isVisible = true;
    let driftTimer = 0;

    const drift = () => {
      driftTimer = window.setTimeout(drift, 1400 + Math.random() * 1800);
      if (!isVisible || document.hidden) return;
      for (let i = 0; i < ambient; i++) {
        light(
          Math.floor(Math.random() * cols),
          Math.floor(Math.random() * rows),
          900 + Math.random() * 1600
        );
      }
    };

    driftTimer = window.setTimeout(drift, 500);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? true;
    });
    observer.observe(container);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    let mutationFrame = 0;
    const mutationObserver = new MutationObserver(() => {
      if (!mutationFrame) {
        mutationFrame = requestAnimationFrame(() => {
          mutationFrame = 0;
          measureText();
        });
      }
    });
    mutationObserver.observe(container.parentElement ?? document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const themeObserver = new MutationObserver(readTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style', 'data-theme'],
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', readTheme);

    measure();
    document.fonts?.ready?.then(measureText).catch(() => {});

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure, { passive: true });

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(mutationFrame);
      themeObserver.disconnect();
      mediaQuery.removeEventListener('change', readTheme);
      cancelAnimationFrame(animFrame);
      cancelAnimationFrame(moveFrame);
      clearTimeout(driftTimer);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [cell, reach, ambient, maxLit, avoid]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-slot="grid-pulse"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        '[--grid-pulse-line:rgba(255,255,255,0.08)]',
        mask && '[mask-image:linear-gradient(to_bottom,#000_92%,transparent)]',
        className
      )}
      style={{
        '--grid-pulse-cell': `${cell}px`,
        backgroundImage:
          'linear-gradient(to right, var(--grid-pulse-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-pulse-line) 1px, transparent 1px)',
        backgroundSize: 'var(--grid-pulse-cell) var(--grid-pulse-cell)',
        ...style,
      } as React.CSSProperties}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  );
}

const guard =
  "[text-shadow:0_0_6px_var(--color-background,#0A0A0A),0_0_14px_var(--color-background,#0A0A0A),0_0_30px_var(--color-background,#0A0A0A),0_0_52px_var(--color-background,#0A0A0A)]";

export function GridPulseDemo() {
  const [text, setText] = React.useState(true);

  return (
    <div className="relative flex min-h-[540px] md:min-h-[620px] w-full items-center overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      <GridPulse />

      {/* Switch Toggle Button */}
      <button
        id="grid-pulse-text"
        type="button"
        role="switch"
        aria-checked={text}
        onClick={() => setText(!text)}
        className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0A0A0A]/80 py-1.5 pl-1.5 pr-3 text-sm text-white backdrop-blur hover:border-[#FF1F1F]/40 transition-colors cursor-pointer"
      >
        <span
          aria-hidden
          className={cn(
            'relative h-5 w-9 rounded-full transition-colors',
            text ? 'bg-white' : 'bg-white/20'
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 size-4 rounded-full bg-[#0A0A0A] transition-[left]',
              text ? 'left-[18px]' : 'left-0.5'
            )}
          />
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-wider">Text</span>
      </button>

      {text && (
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-12 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF1F1F]/30 bg-[#FF1F1F]/10 text-xs font-mono text-[#FF1F1F] font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF1F1F] animate-pulse" />
            21ST.DEV • GRID PULSE INTERACTION
          </div>

          <h1
            className={cn(
              "text-[clamp(52px,10vw,140px)] font-black uppercase leading-[0.88] tracking-[-0.045em] text-white select-none",
              guard
            )}
          >
            grid pulse
          </h1>

          <p
            data-grid-avoid
            className={cn(
              "mt-7 max-w-[44ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-[#C9CCD1] font-mono select-none",
              guard
            )}
          >
            A fine grid that lights up where the pointer passes and lets go a moment later. Move across it.
          </p>
        </div>
      )}
    </div>
  );
}
