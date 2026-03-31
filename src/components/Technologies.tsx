'use client';

import { useEffect, useRef, useState } from 'react';
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
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  // Auto scroll suave
  useEffect(() => {
    if (!isAutoScroll || !techRef.current) return;

    const scrollDistance = 110; // aproximadamente el ancho de una tarjeta compacta + gap

    autoScrollRef.current = setInterval(() => {
      if (techRef.current) {
        const currentScroll = techRef.current.scrollLeft;
        const maxScroll = techRef.current.scrollWidth - techRef.current.clientWidth;

        if (currentScroll >= maxScroll - 10) {
          // Reiniciar desde el principio
          techRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          techRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isAutoScroll]);

  // Detener auto scroll cuando el usuario interactúa
  const handleUserInteraction = () => {
    setIsAutoScroll(false);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    setTimeout(() => setIsAutoScroll(true), 2000);
  };

  return (
    <div className="mt-20">
      <h3 className="text-lg font-bold text-center mb-8" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
        Stack
      </h3>
      <div className="flex justify-center">
        <div className="relative overflow-hidden" style={{ width: 'fit-content', maxWidth: '100vw' }}>
        {/* Gradientes de fade izquierda y derecha */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 md:w-12 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0F172A, transparent)'
              : 'linear-gradient(to right, #F8FAFC, transparent)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-8 md:w-12 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0F172A, transparent)'
              : 'linear-gradient(to left, #F8FAFC, transparent)',
          }}
        />

        {/* Slider con scroll nativo - COMPACTO */}
        <div
          ref={techRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-4"
          style={{
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {[...technologies, ...technologies].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-lg cursor-default group transition-all hover:-translate-y-1"
                style={{
                  background: colors.bg2,
                  border: `1px solid ${colors.border}`,
                  minWidth: '100px',
                  maxWidth: '100px',
                }}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                <span className="text-xs font-semibold whitespace-nowrap text-center" style={{ color: colors.muted }}>
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
