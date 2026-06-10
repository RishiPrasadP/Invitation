'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { TextRevealProps } from '@/types';

export default function TextReveal({
  text,
  as: Tag = 'p',
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn('flex flex-wrap justify-center gap-x-[0.3em]', className)} ref={ref}>
      <motion.span
        className="flex flex-wrap justify-center gap-x-[0.3em]"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={child} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
