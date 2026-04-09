'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Translation, Project } from '@/types';
import { useSlider } from '@/hooks/useSlider';
import { SliderButton, Dots } from './UIComponents';
import { useState } from 'react';

interface ProjectsProps {
  isDark: boolean;
  t: Translation;
  projectsData: Project[];
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

export function Projects({ isDark, t, projectsData, colors }: ProjectsProps) {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const proj = useSlider(projectsData.length);

  const handleImageError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="proyectos"
      className="py-24"
      style={{
        background: colors.bg,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: colors.text }}>
            {t.projects.title}
          </h2>
          <div className="flex gap-2">
            <SliderButton
              onClick={proj.prev}
              disabled={!proj.canPrev}
              dark={isDark}
              direction="prev"
              colors={{
                border: colors.border,
                muted: colors.muted,
                blue: colors.blue,
                text: colors.text,
              }}
            />
            <SliderButton
              onClick={proj.next}
              disabled={!proj.canNext}
              dark={isDark}
              direction="next"
              colors={{
                border: colors.border,
                muted: colors.muted,
                blue: colors.blue,
                text: colors.text,
              }}
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${proj.index * 100}%)` }}>
            {projectsData.map((p, i) => {
              const project = t.projects.items[i];
              return (
                <div key={i} className="min-w-full">
                  <div
                    className="rounded-2xl overflow-hidden flex flex-col md:flex-row"
                    style={{
                      background: colors.bg2,
                      border: `1px solid ${colors.border}`,
                      boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Contenedor de Imagen Premium tipo SaaS */}
                    <div 
                      className="relative md:w-[42%] h-64 md:h-auto flex-shrink-0 flex flex-col p-5 md:p-7"
                      style={{ 
                        background: isDark ? 'radial-gradient(circle at top right, rgba(30,41,59,0.4), rgba(15,23,42,0.6))' : 'radial-gradient(circle at top right, rgba(248,250,252,0.9), rgba(241,245,249,0.5))',
                        borderRight: `1px solid ${colors.border}` 
                      }}
                    >
                      {/* Decoración 1: Grid Pattern de fondo sutil */}
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.03]" 
                        style={{ 
                          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)', 
                          backgroundSize: '16px 16px', 
                          color: isDark ? '#ffffff' : '#000000' 
                        }} 
                      />

                      {/* Decoración 2: Acento tecnológico lateral (Línea de datos) */}
                      <div className="absolute left-2 md:left-3 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-blue-500/20 dark:via-blue-400/20 to-transparent pointer-events-none hidden md:block" />
                      <div className="absolute left-[7px] md:left-[11px] top-1/3 w-1.5 h-1.5 rounded-full bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse hidden md:block" />
                      <div className="absolute left-[7px] md:left-[11px] bottom-1/3 w-1.5 h-1.5 rounded-full bg-blue-500/20 hidden md:block" />

                      {/* Floating Card (Marco de la imagen en sí) */}
                      <div className="relative w-full flex-1 min-h-[160px] rounded-2xl group perspective-1000 z-10 transition-transform duration-500">
                        {/* Glow subyacente que se ilumina al hacer hover */}
                        <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                        
                        {/* Marco Elevable */}
                        <div 
                          className="relative w-full h-full rounded-xl overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1.5"
                          style={{
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                            boxShadow: isDark ? '0 10px 30px -10px rgba(0,0,0,0.6)' : '0 12px 30px -10px rgba(0,0,0,0.15)',
                          }}
                        >
                          {!imgErrors[i] ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 500px"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-95"
                              quality={90}
                              onError={() => handleImageError(i)}
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${p.color}`}>
                              <FaGithub className="w-16 h-16 text-white/30" />
                            </div>
                          )}
                          
                          {/* Superposición sutil tipo Glass en el borde inferior */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-8 flex flex-col justify-center gap-4 flex-1">
                      <h3 className="text-2xl font-bold" style={{ color: colors.text }}>
                        {project.title}
                      </h3>
                      <p style={{ color: colors.muted, lineHeight: 1.7, fontSize: '0.9rem' }}>
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background: isDark ? '#0F172A' : '#F1F5F9',
                              color: isDark ? '#94A3B8' : '#475569',
                              border: `1px solid ${colors.border}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Botones */}
                      <div className="flex gap-3 pt-1">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                          style={{ background: isDark ? '#334155' : '#0F172A' }}
                          aria-label={`GitHub - ${project.title}`}
                        >
                          <FaGithub className="w-4 h-4" /> GitHub
                        </a>
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                          style={{ border: `2px solid ${colors.blue}`, color: colors.blue }}
                          aria-label={`Demo - ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Dots total={projectsData.length} active={proj.index} isDark={isDark} colors={{ blue: colors.blue, border: colors.border }} />
      </div>
    </section>
  );
}
