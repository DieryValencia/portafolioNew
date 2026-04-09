'use client';

import Image from 'next/image';
import { User } from 'lucide-react';
import { Translation } from '@/types';
import { PROFILE_PHOTO } from '@/data/constants';
import { useState } from 'react';

interface AboutProps {
  isDark: boolean;
  t: Translation;
  colors: {
    bg: string;
    bg2: string;
    text: string;
    muted: string;
    border: string;
    blue: string;
  };
}



export function About({ isDark, t, colors }: AboutProps) {
  const [photoError, setPhotoError] = useState(false);
  const showPhoto = PROFILE_PHOTO && !photoError;



  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: colors.bg2,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {/* Luces sutiles de fondo (SaaS glow accent) */}
      <div 
        className="absolute top-0 left-1/4 w-full h-full max-w-[600px] pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: isDark 
            ? 'radial-gradient(circle at center, rgba(56,189,248,0.08) 0%, transparent 70%)' 
            : 'radial-gradient(circle at center, rgba(37,99,235,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: colors.text }}>
            {t.about.title}
          </h2>
          <div className="h-px flex-1 hidden sm:block opacity-50" style={{ background: `linear-gradient(to right, ${colors.border}, transparent)` }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Foto con decoración Tech / Plataforma */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative flex items-center justify-center p-8 md:p-12">
              
              {/* Capa base tipo grid/radar */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: isDark 
                    ? 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 65%)' 
                    : 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)',
                }}
              />

              {/* Anillo exterior animado - Precision ring */}
              <div
                className="absolute inset-0 rounded-full opacity-50 block"
                style={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderBottomColor: isDark ? 'rgba(56,189,248,0.15)' : 'rgba(37,99,235,0.3)',
                  borderLeftColor: isDark ? 'rgba(56,189,248,0.15)' : 'rgba(37,99,235,0.3)',
                  borderTopColor: isDark ? 'rgba(56,189,248,0.8)' : 'rgba(37,99,235,0.9)',
                  borderRightColor: 'transparent',
                  animation: 'spin 30s linear infinite',
                }}
              />

              {/* Anillo interior (rotación inversa) - Data track */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '1.5rem',
                  borderWidth: '1px',
                  borderStyle: 'dashed',
                  borderColor: isDark ? 'rgba(148,163,184,0.3)' : 'rgba(59,130,246,0.35)',
                  animation: 'spin 40s linear infinite reverse',
                }}
              />

              {/* Data points flotantes / Nodes */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: isDark ? '#38BDF8' : '#2563EB', boxShadow: `0 0 12px ${isDark ? '#38BDF8' : '#2563EB'}` }} />
                <div className="absolute bottom-[10%] right-[10%] w-1.5 h-1.5 rounded-full" style={{ background: isDark ? '#94A3B8' : '#64748B' }} />
                <div className="absolute bottom-[20%] left-[5%] w-1 h-1 rounded-full" style={{ background: isDark ? '#94A3B8' : '#64748B' }} />
              </div>

              {/* Contenedor principal de la foto */}
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0 z-10 transition-transform duration-700 hover:scale-[1.03]"
                style={{
                  width: 'min(400px, 80vw)',
                  height: 'min(400px, 80vw)',
                  boxShadow: isDark
                    ? '0 0 0 1px rgba(30,41,59,1), 0 0 24px rgba(56,189,248,0.15), 0 12px 48px rgba(0,0,0,0.6)'
                    : '0 0 0 1px rgba(255,255,255,1), 0 0 24px rgba(37,99,235,0.2), 0 12px 48px rgba(0,0,0,0.15)',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isDark ? 'rgba(56,189,248,0.2)' : 'rgba(37,99,235,0.4)'
                }}
              >
                {showPhoto ? (
                  <Image
                    src={PROFILE_PHOTO}
                    alt="Diery Valencia"
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-cover object-center scale-105"
                    priority
                    quality={95}
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${isDark ? 'bg-slate-800/80' : 'bg-slate-100/80'} backdrop-blur-sm`}>
                    <User className={`w-16 h-16 ${isDark ? 'text-slate-600' : 'text-slate-300'}`} />
                    <p className={`text-xs text-center px-4 font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      System User
                    </p>
                  </div>
                )}
              </div>

              {/* Tarjeta Full Stack Dev Orgánica y Elegante */}
              <div 
                className="absolute -bottom-4 md:-bottom-2 left-1/2 md:left-auto md:right-[-2rem] -translate-x-1/2 md:-translate-x-0 z-30 transition-all duration-700 hover:scale-105"
              >
                <div 
                  className="relative overflow-hidden flex items-center justify-center gap-3 px-6 py-3.5 md:px-7 md:py-4 backdrop-blur-xl group"
                  style={{
                    // Forma orgánica asimétrica (rompe la rigidez)
                    borderRadius: '2.5rem 1rem 2.5rem 1rem',
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)' 
                      : 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(226, 232, 240, 0.85) 100%)',
                    border: `1px solid ${isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(37, 99, 235, 0.35)'}`,
                    boxShadow: isDark 
                      ? '0 16px 40px rgba(0,0,0,0.5), 0 0 20px rgba(139,92,246,0.15) inset' 
                      : '0 16px 40px rgba(15, 23, 42, 0.08), 0 6px 16px rgba(37, 99, 235, 0.06), 0 0 0 1px rgba(255,255,255,0.7) inset'
                  }}
                >
                  {/* Suave resplandor interior dinámico (glow) */}
                  <div 
                    className="absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" 
                    style={{
                      background: isDark ? 'linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899)' : 'linear-gradient(90deg, #2563EB, #7C3AED, #DB2777)',
                      filter: 'blur(16px)',
                      zIndex: -1
                    }}
                  />
                  
                  {/* Micro-animación de actividad */}
                  <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: isDark ? '#38BDF8' : '#2563EB' }}></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: isDark ? '#38BDF8' : '#2563EB' }}></span>
                  </div>

                  {/* Texto jerarquizado e impactante */}
                  <span className="font-bold tracking-tight text-sm md:text-[0.95rem] uppercase" 
                        style={{ 
                          color: isDark ? '#F8FAFC' : '#0F172A',
                          textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                        }}>
                    {t.about.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto y rasgos (Software Interface Vibe) */}
          <div className="space-y-6 lg:pl-6 order-2 lg:order-none relative">
            {/* Elemento de diseño sutil detrás del texto */}
            <div 
              className="absolute -left-6 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: `linear-gradient(to bottom, transparent, ${isDark ? 'rgba(56,189,248,0.2)' : 'rgba(37,99,235,0.2)'}, transparent)` }}
            />

            <div className="space-y-5">
              {[t.about.p1, t.about.p2, t.about.p3]
                .filter((p) => p)
                .map((p, i) => (
                  <p
                    key={i}
                    className="leading-relaxed"
                    style={{
                      color: isDark ? '#CBD5E1' : '#334151',
                      fontSize: '0.95rem',
                      lineHeight: 1.85,
                    }}
                  >
                    {p}
                  </p>
                ))}
            </div>

            <div className="pt-6 mt-6 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
              <div className="flex flex-wrap gap-2.5">
                {t.about.traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1.5 rounded-md text-[0.75rem] uppercase tracking-wider font-semibold transition-all hover:-translate-y-0.5"
                    style={{
                      background: isDark ? 'rgba(15, 23, 42, 0.8)' : '#F1F5F9',
                      color: isDark ? '#F1F5F9' : '#1E293B',
                      border: `1px solid ${isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(37, 99, 235, 0.25)'}`,
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

