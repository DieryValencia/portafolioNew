'use client';

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
    { icon: FaGithub, label: 'GitHub', hoverBg: '#333333', href: 'https://github.com/DieryValencia' },
    { icon: FaLinkedin, label: 'LinkedIn', hoverBg: '#0A66C2', href: 'https://www.linkedin.com/in/diery-valencia/' },
    { icon: FaWhatsapp, label: 'WhatsApp', hoverBg: '#25D366', href: 'https://wa.me/3173358492' },
  ];

  return (
    <footer className="relative py-8 overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm flex flex-col md:flex-row items-center gap-2">
            <span>{t.footer.copyright}</span>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">
              {t.footer.university}
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, label, hoverBg, href }) => (
              <a
                key={label}
                href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 group"
                style={{ '--hover-bg': hoverBg } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverBg;
                  e.currentTarget.style.borderColor = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
