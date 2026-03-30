'use client';

import Image from 'next/image';
import Link from 'next/link';
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
                    {/* Imagen o placeholder */}
                    <div className={`md:w-2/5 h-56 md:h-auto flex-shrink-0 overflow-hidden bg-gradient-to-br ${p.color} relative`}>
                      {!imgErrors[i] ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(i)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaGithub className="w-20 h-20 text-white opacity-20" />
                        </div>
                      )}
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
                        <Link
                          href={p.github}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                          style={{ background: isDark ? '#334155' : '#0F172A' }}
                        >
                          <FaGithub className="w-4 h-4" /> GitHub
                        </Link>
                        <Link
                          href={p.demo}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                          style={{ border: `2px solid ${colors.blue}`, color: colors.blue }}
                        >
                          <ExternalLink className="w-4 h-4" /> Demo
                        </Link>
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
