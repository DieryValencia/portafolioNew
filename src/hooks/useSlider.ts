'use client';

import { useState } from 'react';

interface SliderState {
  index: number;
  prev: () => void;
  next: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export function useSlider(total: number): SliderState {
  const [index, setIndex] = useState(0);

  return {
    index,
    prev: () => setIndex((i) => Math.max(0, i - 1)),
    next: () => setIndex((i) => Math.min(total - 1, i + 1)),
    canPrev: index > 0,
    canNext: index < total - 1,
  };
}
