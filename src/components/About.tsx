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
      className="py-24"
      style={{
        background: colors.bg2,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-12" style={{ color: colors.text }}>
          {t.about.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto con decoración */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Anillo exterior decorativo */}
              <div
                className="absolute rounded-full"
                style={{
                  width: '312px',
                  height: '312px',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: isDark ? '#334155' : '#BFDBFE',
                  animation: 'spin 18s linear infinite',
                  borderImageSource: 'linear-gradient(135deg, #2563EB, #F97316)',
                }}
              />

              {/* Anillo interior */}
              <div
                className="absolute rounded-full"
                style={{
                  width: '296px',
                  height: '296px',
                  background: `linear-gradient(${isDark ? '#1E293B' : '#FFFFFF'},${isDark ? '#1E293B' : '#FFFFFF'}) padding-box, linear-gradient(135deg,#2563EB,#F97316) border-box`,
                  border: '3px solid transparent',
                }}
              />

              {/* Foto */}
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0"
                style={{
                  width: '272px',
                  height: '272px',
                  boxShadow: isDark
                    ? '0 0 40px rgba(37,99,235,0.25), 0 20px 40px rgba(0,0,0,0.4)'
                    : '0 0 40px rgba(37,99,235,0.12), 0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                {showPhoto ? (
                  <Image
                    src={PROFILE_PHOTO}
                    alt="Diery Valencia"
                    fill
                    sizes="(max-width: 768px) 272px, 272px"
                    className="object-cover object-center"
                    priority
                    quality={85}
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <User className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
                    <p className={`text-xs text-center px-4 leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Foto no disponible
                    </p>
                  </div>
                )}
              </div>

              {/* Badge Full Stack Dev */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-bold text-white whitespace-nowrap shadow-lg"
                style={{
                  background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.4)',
                }}
              >
                {t.about.badge}
              </div>
            </div>
          </div>

          {/* Texto y rasgos */}
          <div className="space-y-5">
            {[t.about.p1, t.about.p2, t.about.p3]
              .filter((p) => p)
              .map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{
                    color: isDark ? '#94A3B8' : '#475569',
                    fontSize: '0.93rem',
                    lineHeight: 1.85,
                  }}
                >
                  {p}
                </p>
              ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {t.about.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: isDark ? '#1E3A5F' : '#DBEAFE',
                    color: isDark ? '#93C5FD' : '#1D4ED8',
                    border: `1px solid ${isDark ? '#334155' : '#BFDBFE'}`,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
