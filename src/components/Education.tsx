'use client';

import { GraduationCap, Briefcase } from 'lucide-react';
import { Translation } from '@/types';

interface EducationProps {
  isDark: boolean;
  t: Translation;
  colors: {
    bg: string;
    bg2: string;
    text: string;
    muted: string;
    border: string;
    blue: string;
    accent: string;
  };
}

export function Education({ isDark, t, colors }: EducationProps) {
  return (
    <section
      id="estudios"
      className="py-24"
      style={{
        background: colors.bg2,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-12" style={{ color: colors.text }}>
          {t.education.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Estudios */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2" style={{ color: colors.muted }}>
              <GraduationCap className="w-5 h-5" style={{ color: colors.blue }} />
              {t.education.studiesLabel}
            </h3>
            {t.education.studies.map((e, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0 w-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 relative z-10"
                    style={{
                      background: colors.blue,
                      border: `2px solid ${isDark ? '#BFDBFE' : colors.border}`,
                      boxShadow: isDark ? '0 0 12px rgba(96, 165, 250, 0.4)' : 'none'
                    }}
                  />
                  {i < t.education.studies.length - 1 && <div className="w-px flex-1 my-3" style={{ background: colors.border }} />}
                </div>
                <div className={i < t.education.studies.length - 1 ? 'pb-12' : 'pb-0'}>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2"
                    style={{
                      background: isDark ? '#1E3A5F' : '#DBEAFE',
                      color: isDark ? '#93C5FD' : '#1D4ED8',
                    }}
                  >
                    {e.period}
                  </span>
                  <h4 className="text-sm font-bold mb-1" style={{ color: colors.text }}>
                    {e.title}
                  </h4>
                  <p className="text-sm italic mb-2.5" style={{ color: isDark ? '#94A3B8' : colors.muted }}>
                    {e.institution}
                  </p>
                  <p 
                    className="text-sm leading-relaxed pl-4 border-l-2" 
                    style={{ 
                      color: isDark ? '#CBD5E1' : colors.muted,
                      borderLeftColor: isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.2)' 
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Experiencia */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2" style={{ color: colors.muted }}>
              <Briefcase className="w-5 h-5" style={{ color: colors.accent }} />
              {t.education.experienceLabel}
            </h3>
            {t.education.experience.map((e, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0 w-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 relative z-10"
                    style={{
                      background: colors.accent,
                      border: `2px solid ${isDark ? '#FDBA74' : '#FED7AA'}`,
                      boxShadow: isDark ? '0 0 12px rgba(251, 146, 60, 0.4)' : 'none'
                    }}
                  />
                  {i < t.education.experience.length - 1 && <div className="w-px flex-1 my-3" style={{ background: colors.border }} />}
                </div>
                <div className={i < t.education.experience.length - 1 ? 'pb-12' : 'pb-0'}>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2"
                    style={{
                      background: isDark ? '#431407' : '#FFF7ED',
                      color: isDark ? '#FB923C' : '#C2410C',
                    }}
                  >
                    {e.period}
                  </span>
                  <h4 className="text-sm font-bold mb-1" style={{ color: colors.text }}>
                    {e.title}
                  </h4>
                  <p className="text-sm italic mb-2.5" style={{ color: isDark ? '#94A3B8' : colors.muted }}>
                    {e.company}
                  </p>
                  <p 
                    className="text-sm leading-relaxed pl-4 border-l-2" 
                    style={{ 
                      color: isDark ? '#CBD5E1' : colors.muted,
                      borderLeftColor: isDark ? 'rgba(251, 146, 60, 0.3)' : 'rgba(249, 115, 22, 0.2)' 
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
