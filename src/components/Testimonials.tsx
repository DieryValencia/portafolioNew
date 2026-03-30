'use client';

import { Quote } from 'lucide-react';
import { Translation } from '@/types';
import { useSlider } from '@/hooks/useSlider';
import { SliderButton, Dots } from './UIComponents';

interface TestimonialsProps {
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

export function Testimonials({ isDark, t, colors }: TestimonialsProps) {
  const test = useSlider(t.testimonials.items.length);

  return (
    <section
      className="py-24"
      style={{
        background: colors.bg,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: colors.text }}>
            {t.testimonials.title}
          </h2>
          <div className="flex gap-2">
            <SliderButton
              onClick={test.prev}
              disabled={!test.canPrev}
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
              onClick={test.next}
              disabled={!test.canNext}
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
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${test.index * 100}%)` }}>
            {t.testimonials.items.map((testimonial, i) => (
              <div key={i} className="min-w-full">
                <div
                  className="rounded-2xl p-10 relative"
                  style={{
                    background: isDark ? 'linear-gradient(135deg,#1E293B,#1e1b4b)' : 'linear-gradient(135deg,#EFF6FF,#F8FAFC)',
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <Quote className="w-12 h-12 absolute top-6 right-8" style={{ color: isDark ? '#1e3a8a' : '#DBEAFE' }} />
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                      style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-bold" style={{ color: colors.text }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm" style={{ color: colors.muted }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base italic leading-relaxed" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dots total={t.testimonials.items.length} active={test.index} isDark={isDark} colors={{ blue: colors.blue, border: colors.border }} />
      </div>
    </section>
  );
}
