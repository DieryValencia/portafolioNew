'use client';

import { useEffect, useRef, useState } from 'react';
import { Technology } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

    const scrollDistance = 240; // aproximadamente el ancho de una tarjeta + gap

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

  const handlePrev = () => {
    handleUserInteraction();
    if (techRef.current) {
      techRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    handleUserInteraction();
    if (techRef.current) {
      techRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-lg font-bold text-center mb-6" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
        Stack
      </h3>
      <div className="relative overflow-visible">
        {/* Gradientes de fade izquierda y derecha */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-16 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0F172A, transparent)'
              : 'linear-gradient(to right, #F8FAFC, transparent)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 md:w-16 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0F172A, transparent)'
              : 'linear-gradient(to left, #F8FAFC, transparent)',
          }}
        />

        {/* Slider con scroll nativo */}
        <div
          ref={techRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 md:px-8"
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            msOverflowStyle: 'none', // IE y Edge
            scrollbarWidth: 'none', // Firefox
          }}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
        >
          {/* Ocultar scrollbar de Chrome, Safari, etc. */}
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
                className="flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl cursor-default group transition-all hover:-translate-y-1 scroll-snap-align-start"
                style={{
                  background: colors.bg2,
                  border: `1px solid ${colors.border}`,
                  scrollSnapAlign: 'start',
                  minWidth: '180px',
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

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          aria-label="Slider anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
          style={{
            background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            color: isDark ? '#F1F5F9' : '#0F172A',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Slider siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
          style={{
            background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            color: isDark ? '#F1F5F9' : '#0F172A',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
