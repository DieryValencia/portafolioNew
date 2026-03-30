'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderButtonProps {
  onClick: () => void;
  disabled: boolean;
  dark: boolean;
  direction: 'prev' | 'next';
  colors: {
    border: string;
    muted: string;
    blue: string;
    text: string;
  };
}

export function SliderButton({ onClick, disabled, dark, direction, colors }: SliderButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-9 h-9 rounded-full border flex items-center justify-center transition-all disabled:opacity-25 disabled:cursor-not-allowed hover:border-blue-600 hover:text-blue-600"
      style={{
        borderColor: colors.border,
        color: colors.muted,
      }}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

interface DotsProps {
  total: number;
  active: number;
  isDark: boolean;
  colors: {
    blue: string;
    border: string;
  };
}

export function Dots({ total, active, isDark, colors }: DotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            height: '6px',
            width: i === active ? '24px' : '6px',
            background: i === active ? colors.blue : isDark ? '#475569' : '#D1D5DB',
          }}
        />
      ))}
    </div>
  );
}
