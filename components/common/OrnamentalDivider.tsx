'use client';

import { cn } from '@/lib/utils';

interface OrnamentalDividerProps {
  className?: string;
}

export default function OrnamentalDivider({ className }: OrnamentalDividerProps) {
  return (
    <div
      className={cn('mx-auto flex w-full max-w-md items-center gap-4 py-6', className)}
      role="separator"
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0 text-gold"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z"
          fill="currentColor"
        />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}
