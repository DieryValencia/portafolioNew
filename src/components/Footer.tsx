'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

interface FooterProps {
  isDark: boolean;
  t: {
    footer: {
      tagline: string;
      description: string;
      navTitle: string;
      links: string[];
      contactTitle: string;
      socialTitle: string;
      location: string;
      copyright: string;
      university: string;
      available: string;
    };
  };
}

export function Footer({ isDark, t }: FooterProps) {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', color: '#94A3B8', hoverBg: '#334155', href: 'https://github.com/DieryValencia' },
    { icon: FaLinkedin, label: 'LinkedIn', color: '#60A5FA', hoverBg: '#1D4ED8', href: 'https://www.linkedin.com/in/diery-valencia/' },
    { icon: FaWhatsapp, label: 'WhatsApp', color: '#4ADE80', hoverBg: '#15803D', href: 'https://wa.me/3173358492' },
    { icon: FaInstagram, label: 'Instagram', color: '#F472B6', hoverBg: '#BE185D', href: 'https://instagram.com/dieryvalencia' },
  ];

  return (
    <footer style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E293B 60%,#1e1b4b 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Redes sociales */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map(({ icon: Icon, label, color, hoverBg, href }) => (
            <Link
              key={label}
              href={href}
              title={label}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255,255,255,0.08)',
                color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = hoverBg;
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = color;
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #334155, transparent)', marginBottom: '24px' }} />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: '#475569' }}>
            {t.footer.copyright}
          </p>
          <p className="text-xs" style={{ color: '#334155' }}>
            {t.footer.university}
          </p>
        </div>
      </div>
    </footer>
  );
}
