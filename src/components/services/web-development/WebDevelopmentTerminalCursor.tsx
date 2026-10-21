'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function WebDevelopmentTerminalCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-1 -translate-x-1/2 -translate-y-1/2"
      style={{ x: mouseX, y: mouseY }}
    >
      {/* Blinking Red Developer Terminal Block Cursor */}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
        className="w-3.5 h-5 bg-[#FF1F1F] border border-white/20 shadow-[0_0_12px_rgba(255,31,31,0.8)] flex items-center justify-center font-mono text-[9px] text-white font-bold"
      >
        _
      </motion.div>
      <span className="font-mono text-[9px] font-bold text-white bg-[#1A1A1A] px-1.5 py-0.5 rounded border border-white/20 shadow-[0_0_8px_rgba(255,31,31,0.3)]">
        DEV • 100
      </span>
    </motion.div>
  );
}
