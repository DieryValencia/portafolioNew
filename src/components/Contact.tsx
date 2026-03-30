'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';
import { Translation } from '@/types';
import { CONTACT_INFO } from '@/data/constants';
import { useState } from 'react';

interface ContactProps {
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

export function Contact({ isDark, t, colors }: ContactProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contacto"
      className="py-24"
      style={{
        background: colors.bg,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-12" style={{ color: colors.text }}>
          {t.contact.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Información de contacto */}
          <div className="space-y-8">
            <p className="leading-relaxed" style={{ color: colors.muted, fontSize: '1.05rem' }}>
              {t.contact.description}
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: CONTACT_INFO.email,
                  href: `mailto:${CONTACT_INFO.email}`,
                  bg: isDark ? '#1E3A5F' : '#DBEAFE',
                  color: isDark ? '#93C5FD' : '#1D4ED8',
                  faIcon: null,
                },
                {
                  icon: null,
                  label: 'WhatsApp',
                  value: CONTACT_INFO.phone,
                  href: 'https://wa.me/',
                  bg: isDark ? '#052e16' : '#DCFCE7',
                  color: isDark ? '#86EFAC' : '#15803D',
                  faIcon: FaWhatsapp,
                },
                {
                  icon: null,
                  label: 'GitHub',
                  value: 'github.com/dieryvalencia',
                  href: '#',
                  bg: isDark ? '#1E293B' : '#F1F5F9',
                  color: isDark ? '#94A3B8' : '#0F172A',
                  faIcon: FaGithub,
                },
              ].map((c, i) => {
                const Icon = c.icon || c.faIcon;
                return (
                  <Link
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                    style={{
                      border: `1px solid ${colors.border}`,
                      background: colors.bg2,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#2563EB';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                      {Icon && <Icon className="w-5 h-5" style={{ color: c.color }} />}
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ color: colors.muted }}>
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: colors.text }}>
                        {c.value}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Formulario */}
          <div
            className="rounded-2xl p-8 space-y-5"
            style={{
              background: colors.bg2,
              border: `1px solid ${colors.border}`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: t.contact.form.fullName, type: 'text', ph: t.contact.form.placeholders.fullName, key: 'fullName' },
                { label: t.contact.form.email, type: 'email', ph: t.contact.form.placeholders.email, key: 'email' },
                { label: t.contact.form.subject, type: 'text', ph: t.contact.form.placeholders.subject, key: 'subject' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold mb-2" style={{ color: isDark ? '#94A3B8' : '#374151' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                      color: colors.text,
                    }}
                    value={formData[f.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563EB';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = colors.border;
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: isDark ? '#94A3B8' : '#374151' }}>
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.contact.form.placeholders.message}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563EB';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.border;
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
                }}
              >
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
