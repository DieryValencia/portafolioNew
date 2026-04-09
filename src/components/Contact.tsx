'use client';

import { Mail } from 'lucide-react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';
import { Translation } from '@/types';
import { CONTACT_INFO } from '@/data/constants';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '@/config/emailjs';

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

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function Contact({ isDark, t, colors }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'idle',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    fullName: false, email: false, subject: false, message: false
  });

  const [formErrors, setFormErrors] = useState<Record<keyof FormState, string>>({
    fullName: '', email: '', subject: '', message: ''
  });

  useEffect(() => {
    if (isEmailJSConfigured()) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const validateName = (name: string): string => {
    if (!name) return 'El nombre es obligatorio';
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(name)) return 'Solo letras. Sin números ni espacios iniciales/finales.';
    return '';
  };

  const validateEmailStrict = (email: string): string => {
    if (!email) return 'El email es obligatorio';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Ingresa un formato de email válido y sin espacios';
    return '';
  };

  const validateSubject = (subject: string): string => {
    if (!subject) return 'El asunto es obligatorio';
    if (/^\s/.test(subject)) return 'El asunto no puede iniciar con un espacio';
    if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ¿?¡!.,][a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s¿?¡!.,-]*$/.test(subject)) return 'Formato inválido. Usa un texto limpio y profesional.';
    return '';
  };

  const validateMessage = (msg: string): string => {
    if (!msg) return 'El mensaje es obligatorio';
    if (/^\s/.test(msg)) return 'El mensaje no puede iniciar con un espacio';
    if (msg.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres válidos';
    return '';
  };

  useEffect(() => {
    setFormErrors({
      fullName: validateName(formData.fullName),
      email: validateEmailStrict(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    });
  }, [formData]);

  const isValid = !formErrors.fullName && !formErrors.email && !formErrors.subject && !formErrors.message && formData.fullName !== '' && formData.email !== '' && formData.subject !== '' && formData.message !== '';

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailJSConfigured()) {
      setFormStatus({
        status: 'error',
        message: 'El servicio de email no está configurado correctamente',
      });
      return;
    }

    setTouched({ fullName: true, email: true, subject: true, message: true });
    
    if (!isValid) {
      return;
    }

    setFormStatus({
      status: 'loading',
      message: 'Enviando mensaje...',
    });

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setFormStatus({
        status: 'success',
        message: '¡Mensaje enviado exitosamente! Te contactaré pronto.',
      });

      // Limpiar formulario y toques
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      setTouched({ fullName: false, email: false, subject: false, message: false });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus({
          status: 'idle',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Error enviando email:', error);
      setFormStatus({
        status: 'error',
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      });
    }
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
                  value: 'dieryvale.01@gmail.com',
                  href: `mailto:dieryvale.01@gmail.com`,
                  bg: isDark ? '#1E3A5F' : '#DBEAFE',
                  color: isDark ? '#93C5FD' : '#1D4ED8',
                  faIcon: null,
                },
                {
                  icon: null,
                  label: 'WhatsApp',
                  value: CONTACT_INFO.phone,
                  href: 'https://wa.me/3173358492',
                  bg: isDark ? '#052e16' : '#DCFCE7',
                  color: isDark ? '#86EFAC' : '#15803D',
                  faIcon: FaWhatsapp,
                },
                {
                  icon: null,
                  label: 'GitHub',
                  value: 'github.com/dieryvalencia',
                  href: 'https://github.com/DieryValencia',
                  bg: isDark ? '#1E293B' : '#F1F5F9',
                  color: isDark ? '#94A3B8' : '#0F172A',
                  faIcon: FaGithub,
                },
              ].map((c, i) => {
                const Icon = c.icon || c.faIcon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                    style={{
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: colors.border,
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
                  </a>
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
              ].map((f) => {
                const errorMsg = formErrors[f.key as keyof FormState];
                const isTouched = touched[f.key as keyof FormState];
                const hasError = isTouched && errorMsg !== '';
                
                return (
                <div key={f.key}>
                  <label className="block text-sm font-semibold mb-2" style={{ color: isDark ? '#CBD5E1' : '#374151' }}>
                    {f.label} <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: colors.bg,
                      border: hasError ? '1px solid #ef4444' : `1px solid ${colors.border}`,
                      color: colors.text,
                      boxShadow: hasError ? '0 0 0 1px rgba(239,68,68,0.2)' : 'none'
                    }}
                    value={formData[f.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    onFocus={(e) => {
                      if (!hasError) e.target.style.borderColor = '#2563EB';
                    }}
                    onBlur={(e) => {
                      setTouched({ ...touched, [f.key]: true });
                      if (!hasError) e.target.style.borderColor = colors.border;
                    }}
                  />
                  {hasError && <p className="text-xs text-red-500 mt-1.5 font-medium px-1 animate-pulse">{errorMsg}</p>}
                </div>
              )})}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: isDark ? '#94A3B8' : '#374151' }}>
                  {t.contact.form.message} <span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder={t.contact.form.placeholders.message}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{
                    background: colors.bg,
                    border: (touched.message && formErrors.message !== '') ? '1px solid #ef4444' : `1px solid ${colors.border}`,
                    color: colors.text,
                    boxShadow: (touched.message && formErrors.message !== '') ? '0 0 0 1px rgba(239,68,68,0.2)' : 'none'
                  }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => {
                    if (!(touched.message && formErrors.message !== '')) e.target.style.borderColor = '#2563EB';
                  }}
                  onBlur={(e) => {
                    setTouched({ ...touched, message: true });
                    if (!(touched.message && formErrors.message !== '')) e.target.style.borderColor = colors.border;
                  }}
                />
                {(touched.message && formErrors.message !== '') && <p className="text-xs text-red-500 mt-1.5 font-medium px-1 animate-pulse">{formErrors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={formStatus.status === 'loading' || !isValid}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                style={{
                  background: (!isValid || formStatus.status === 'loading') ? (isDark ? '#334155' : '#94A3B8') : 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  boxShadow: (!isValid || formStatus.status === 'loading') ? 'none' : '0 4px 20px rgba(37,99,235,0.3)',
                }}
              >
                {formStatus.status === 'loading' ? 'Enviando...' : t.contact.form.send}
              </button>
              
              {/* Mensajes de estado */}
              {formStatus.status === 'success' && (
                <div
                  className="p-4 rounded-xl text-sm font-medium border"
                  style={{
                    background: isDark ? '#052e16' : '#DCFCE7',
                    borderColor: isDark ? '#22c55e' : '#86EFAC',
                    color: isDark ? '#86EFAC' : '#15803D',
                  }}
                >
                  ✓ {formStatus.message}
                </div>
              )}

              {formStatus.status === 'error' && (
                <div
                  className="p-4 rounded-xl text-sm font-medium border"
                  style={{
                    background: isDark ? '#7f1d1d' : '#FEE2E2',
                    borderColor: isDark ? '#f87171' : '#FECACA',
                    color: isDark ? '#f87171' : '#DC2626',
                  }}
                >
                  ✕ {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
