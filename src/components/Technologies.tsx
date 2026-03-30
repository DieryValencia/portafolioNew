'use client';

import { useEffect, useRef } from 'react';
import { Technology } from '@/types';

interface TechnologiesProps {
  isDark: boolean;
  technologies: Technology[];
  colors: {
    bg: string;
    bg2: string;
    muted: string;
    border: string;
  };
}

export function Technologies({ isDark, technologies, colors }: TechnologiesProps) {
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = techRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const run = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mt-16">
      <h3 className="text-lg font-bold text-center mb-6" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
        Stack
      </h3>
      <div className="relative overflow-hidden">
        {/* Gradientes de fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: isDark ? `linear-gradient(to right,#0F172A,transparent)` : `linear-gradient(to right,#F8FAFC,transparent)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: isDark ? `linear-gradient(to left,#0F172A,transparent)` : `linear-gradient(to left,#F8FAFC,transparent)`,
          }}
        />
        <div ref={techRef} className="flex gap-4 overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
          {[...technologies, ...technologies].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl cursor-default group transition-all hover:-translate-y-1"
                style={{
                  background: colors.bg2,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Icon className="w-7 h-7 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                <span className="text-xs font-semibold whitespace-nowrap" style={{ color: colors.muted }}>
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
