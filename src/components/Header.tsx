'use client';

import Link from 'next/link';
import { Globe, Menu, Moon, Sun, X, Download } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Translation } from '@/types';
import { useState } from 'react';

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

  const navLinks = [
    { label: t.nav.projects, href: '#proyectos' },
    { label: t.nav.education, href: '#estudios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300 border-b"
      style={{
        background: colors.bg2,
        borderBottomColor: colors.border,
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="text-lg font-bold tracking-tight" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
          Diery<span style={{ color: '#F97316' }}> Valencia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
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
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-green-50 dark:hover:bg-green-950/30"
            style={{ color: colors.muted }}
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onThemeToggle}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
            style={{ color: colors.muted }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
            style={{ color: colors.muted }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-2 shadow-lg border-t"
          style={{
            background: colors.bg2,
            borderTopColor: colors.border,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
              style={{ color: colors.muted }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t" style={{ borderTopColor: colors.border }}>
            <button
              onClick={onLanguageToggle}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
              style={{ color: colors.muted }}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-green-50 dark:hover:bg-green-950/30"
              style={{ color: colors.muted }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
