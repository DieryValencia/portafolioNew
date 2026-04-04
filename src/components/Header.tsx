'use client';

import Link from 'next/link';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Translation } from '@/types';
import { useState, useRef, useEffect } from 'react';

// Altura del header fijo (h-16 = 64px)
const HEADER_HEIGHT = 64;

// Scroll suave con compensación del header fijo
const scrollToSection = (href: string) => {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

interface HeaderProps {
  isDark: boolean;
  language: 'es' | 'en';
  t: Translation;
  onThemeToggle: () => void;
  onLanguageToggle: () => void;
  colors: {
    bg: string;
    bg2: string;
    muted: string;
    border: string;
  };
}

export function Header({ isDark, language, t, onThemeToggle, onLanguageToggle, colors }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // IMPORTANTE: headerRef debe envolver TANTO el header como el dropdown.
  // Si el dropdown queda fuera del ref, cualquier mousedown sobre un link del menú
  // activa handleClickOutside → setMenuOpen(false) → el link desaparece del DOM
  // antes de que el evento 'click' se ejecute → la navegación nunca ocurre.
  const headerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.about,         href: '#about' },
    { label: t.nav.projects,      href: '#proyectos' },
    { label: t.nav.education,     href: '#estudios' },
    { label: t.nav.Testimonials,  href: '#testimonios' },
    { label: t.nav.contact,       href: '#contacto' },
  ];

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // Cerrar menú al presionar Escape
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [menuOpen]);

  return (
    <>
      {/* headerRef envuelve el header Y el dropdown para que handleClickOutside
          no se active cuando el usuario hace mousedown sobre un link del menú */}
      <div ref={headerRef}>
        <header
          className="fixed top-0 left-0 right-0 z-50 border-b"
          style={{
            background: isDark 
              ? 'rgba(15, 23, 42, 0.95)' 
              : 'rgba(248, 250, 252, 0.95)',
            borderBottomColor: colors.border,
            backdropFilter: 'blur(8px)',
          }}
        >
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-lg font-bold tracking-tight cursor-pointer"
              style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}
              aria-label="Diery Valencia - Ir al inicio"
            >
              Diery<span style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}> Valencia</span>
            </a>

            {/* Right Side Controls - Always visible */}
            <div className="flex items-center gap-3">
              <button
                onClick={onLanguageToggle}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
                style={{ color: colors.muted }}
                title={language === 'es' ? 'English' : 'Español'}
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={onThemeToggle}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
                style={{ color: colors.muted }}
                title={isDark ? 'Light' : 'Dark'}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://wa.me/3173358492"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-green-50 dark:hover:bg-green-950/30"
                style={{ color: colors.muted }}
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              {/* Hamburger Menu Button - ALWAYS VISIBLE */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
                style={{ color: colors.muted }}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Navigation Menu Dropdown — dentro del mismo div ref={headerRef}
            para que mousedown sobre los links no active handleClickOutside */}
        {menuOpen && (
          <div
            id="nav-menu"
            className="fixed top-16 left-0 right-0 z-40 border-t transition-all duration-300 ease-out"
            style={{
              background: isDark 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(248, 250, 252, 0.98)',
              borderTopColor: colors.border,
              backdropFilter: 'blur(10px)',
              animation: 'slideDown 300ms ease-out',
            }}
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    // Cerrar menú, luego scroll con delay de 50ms para que
                    // el colapso del dropdown no interfiera con getBoundingClientRect
                    setMenuOpen(false);
                    setTimeout(() => scrollToSection(link.href), 50);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: colors.muted,
                    background: 'rgba(37, 99, 235, 0.05)',
                    borderLeftWidth: '3px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: 'transparent',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = '#2563EB';
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
