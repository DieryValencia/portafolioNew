'use client';

import { Download } from 'lucide-react';
import { Translation } from '@/types';
import { FloatingObjects } from './FloatingObjects';

interface HeroProps {
  isDark: boolean;
  t: Translation;
  colors: {
    bg: string;
    bg2: string;
    blue: string;
    accent: string;
    text: string;
    muted: string;
    border: string;
  };
}

export function Hero({ isDark, t, colors }: HeroProps) {
  const bgGradient = isDark
    ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1e1b4b 100%)'
    : 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 50%, #FFF7ED 100%)';

  return (
    <section
      id="hero"
      className="py-20 overflow-hidden"
      style={{
        background: bgGradient,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Contenido */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge disponible */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
              style={{
                background: isDark ? '#1E3A5F' : '#DBEAFE',
                color: isDark ? '#93C5FD' : '#1D4ED8',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  animation: 'pulse-dot 2s ease-in-out infinite',
                  display: 'inline-block',
                }}
              />
              {t.hero.available}
            </div>

            {/* Cita */}
            <p
              className="font-semibold italic mb-5 max-w-lg mx-auto lg:mx-0"
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                color: isDark ? '#FB923C' : '#C2410C',
                lineHeight: 1.6,
                borderLeft: '3px solid #F97316',
                paddingLeft: '14px',
                textAlign: 'left',
              }}
            >
              &quot;{t.hero.quote}&quot;
            </p>

            {/* Nombre */}
            <h1
              className="font-black tracking-tight mb-2"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                lineHeight: 1.1,
                color: colors.text,
              }}
            >
              Diery Valencia
            </h1>

            {/* Subtítulo */}
            <p
              className="font-light mb-4"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: isDark ? '#60A5FA' : '#2563EB',
                letterSpacing: '0.02em',
              }}
            >
              {t.hero.subtitle}
            </p>

            {/* Descripción */}
            <p
              className="mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{
                fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                color: colors.muted,
                lineHeight: 1.8,
              }}
            >
              {t.hero.description}
            </p>

            {/* Botones */}
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <a
                href="/cv-diery-valencia/CV_Diery__Valencia.pdf"
                download
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                }}
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </a>
              <a
                href="#proyectos"
                className="px-7 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{
                  border: '2px solid #F97316',
                  color: isDark ? '#F97316' : '#C2410C',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDark ? 'rgba(249,115,22,0.1)' : 'rgba(249,115,22,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {t.hero.viewProjects}
              </a>
            </div>
          </div>

          {/* Ilustración flotante */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <FloatingObjects isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
