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
  };
}

export function Technologies({ isDark, technologies, colors }: TechnologiesProps) {
  return (
    <div className="mt-20 overflow-hidden">
      <h3 className="text-lg font-bold text-center mb-8" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
        Stack
      </h3>
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
          <div className="animate-scroll-infinite py-4 flex gap-4">
            {[...technologies, ...technologies].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-lg cursor-default transition-all duration-300"
                  style={{
                    background: colors.bg2,
                    border: `1px solid ${colors.border}`,
                    minWidth: '100px',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: tech.color }} />
                  <span className="text-xs font-semibold" style={{ color: colors.muted }}>
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
