'use client';

import { useRef } from 'react';
import { Film } from 'lucide-react';
import { Translation, Hobby } from '@/types';

interface HobbiesProps {
  isDark: boolean;
  t: Translation;
  hobbyIcons: Hobby[];
  colors: {
    bg: string;
    bg2: string;
    text: string;
    muted: string;
    border: string;
  };
}

export function Hobbies({ isDark, t, hobbyIcons, colors }: HobbiesProps) {
  const hobbyRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (hobbyRef.current) {
      hobbyRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-24"
      style={{
        background: colors.bg2,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: colors.text }}>
            {t.hobbies.title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-blue-600 hover:text-blue-600"
              style={{
                borderColor: colors.border,
                color: colors.muted,
              }}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-blue-600 hover:text-blue-600"
              style={{
                borderColor: colors.border,
                color: colors.muted,
              }}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
        <div ref={hobbyRef} className="flex gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {hobbyIcons.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={`h-${i}`}
                className="flex-shrink-0 w-36 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group transition-all hover:-translate-y-1"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className={`w-12 h-12 ${h.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-center" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
                  {t.hobbies.items[i]}
                </span>
              </div>
            );
          })}
          <div
            className="flex-shrink-0 w-36 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group transition-all hover:-translate-y-1"
            style={{
              background: colors.bg,
              border: `1px solid ${colors.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{
                background: isDark ? '#1E293B' : '#F1F5F9',
                color: isDark ? '#64748B' : '#94A3B8',
              }}
            >
              <Film className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-center" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
              {t.hobbies.movies}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
