'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Technologies } from '@/components/Technologies';
import { translations } from '@/data/translations';
import { projectsData } from '@/data/projects';
import { technologies } from '@/data/technologies';
import { hobbyIcons } from '@/data/hobbies';
import { COLORS } from '@/data/constants';
import { Language, Theme } from '@/types';

// Deferred imports for components below the initial fold
const Projects = dynamic(() => import('@/components/Projects').then((mod) => mod.Projects), { 
  ssr: true,
  loading: () => <div className="h-96" /> // Placeholder while loading
});
const Education = dynamic(() => import('@/components/Education').then((mod) => mod.Education), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials').then((mod) => mod.Testimonials), { ssr: true });
const Hobbies = dynamic(() => import('@/components/Hobbies').then((mod) => mod.Hobbies), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact').then((mod) => mod.Contact), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer), { ssr: true });

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');

  const isDark = theme === 'dark';
  const t = translations[language];

  // Usar colores basados en el tema
  const colors = isDark ? COLORS.dark : COLORS.light;

  const handleThemeToggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const handleLanguageToggle = () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: colors.bg }}>
      <Header
        isDark={isDark}
        language={language}
        t={t}
        onThemeToggle={handleThemeToggle}
        onLanguageToggle={handleLanguageToggle}
        colors={{
          bg: colors.bg2,
          bg2: colors.bg2,
          muted: colors.muted,
          border: colors.border,
        }}
      />

      {/* Spacer para compensar header fijo */}
      <div className="h-16" />

      <main id="main-content" aria-label={t.hero.subtitle}>
        <Hero
          isDark={isDark}
          t={t}
          colors={colors}
        />

        <About
          isDark={isDark}
          t={t}
          colors={colors}
        />

        <Projects
          isDark={isDark}
          t={t}
          projectsData={projectsData}
          colors={colors}
        />

        <section
          aria-label={t.nav.projects}
          style={{
            background: colors.bg,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div className="max-w-6xl mx-auto px-6 pb-0 pt-0">
            <Technologies
              isDark={isDark}
              technologies={technologies}
              colors={{
                bg: colors.bg,
                bg2: colors.bg2,
                muted: colors.muted,
                border: colors.border,
              }}
            />
          </div>
        </section>

        <Education
          isDark={isDark}
          t={t}
          colors={colors}
        />

        <Testimonials
          isDark={isDark}
          t={t}
          colors={{
            bg: colors.bg,
            bg2: colors.bg2,
            text: colors.text,
            muted: colors.muted,
            border: colors.border,
            blue: colors.blue,
          }}
        />

        <Hobbies
          isDark={isDark}
          t={t}
          hobbyIcons={hobbyIcons}
          colors={{
            bg: colors.bg,
            bg2: colors.bg2,
            text: colors.text,
            muted: colors.muted,
            border: colors.border,
          }}
        />

        <Contact
          isDark={isDark}
          t={t}
          colors={{
            bg: colors.bg,
            bg2: colors.bg2,
            text: colors.text,
            muted: colors.muted,
            border: colors.border,
            blue: colors.blue,
          }}
        />
      </main>

      <Footer
        isDark={isDark}
        t={{
          footer: t.footer,
        }}
      />
    </div>
  );
}
