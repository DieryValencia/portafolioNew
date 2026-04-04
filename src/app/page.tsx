'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Technologies } from '@/components/Technologies';
import { Education } from '@/components/Education';
import { Testimonials } from '@/components/Testimonials';
import { Hobbies } from '@/components/Hobbies';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { translations } from '@/data/translations';
import { projectsData } from '@/data/projects';
import { technologies } from '@/data/technologies';
import { hobbyIcons } from '@/data/hobbies';
import { COLORS } from '@/data/constants';
import { Language, Theme } from '@/types';

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
      {/* Estilos inline para aplicar clases dark correctamente */}
      <style>{`
        html.dark {
          color-scheme: dark;
        }
      `}</style>

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
