'use client';

import { Technology } from '@/types';

interface TechnologiesProps {
  isDark: boolean;
  technologies: Technology[];
  colors: {
    bg: string;
    bg2: string;
    muted: string;
    border: string;
    text: string;
  };
}

export function Technologies({ isDark, technologies, colors }: TechnologiesProps) {
  return (
    <div className="py-24 overflow-hidden">
      <h2 className="text-3xl font-extrabold tracking-tight mb-12" style={{ color: colors.text }}>
        Stack
      </h2>
      <div className="relative">
        {/* SIDE FADE GRADIENTS */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0F172A, transparent)'
              : 'linear-gradient(to right, #F8FAFC, transparent)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0F172A, transparent)'
              : 'linear-gradient(to left, #F8FAFC, transparent)',
          }}
        />

        {/* INFINITE SCROLL CAROUSEL - Optimizado para móvil con GPU acceleration */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-infinite py-8 flex gap-6">
            {[...technologies, ...technologies].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-3 px-6 py-5 rounded-2xl cursor-default transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: colors.bg2,
                    border: `1px solid ${colors.border}`,
                    minWidth: '130px',
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: tech.color }} />
                  <span className="text-sm font-bold tracking-tight" style={{ color: colors.muted }}>
                    {tech.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
