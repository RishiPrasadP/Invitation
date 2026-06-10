'use client';

import { cn } from '@/lib/utils';

interface ShimmerEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShimmerEffect({ children, className }: ShimmerEffectProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="absolute inset-0 animate-shimmer"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      </span>
    </span>
  );
}
