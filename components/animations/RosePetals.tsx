'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  fallSpeed: number;
  swaySpeed: number;
  swayAmount: number;
  opacity: number;
  color: string;
  phase: number;
}

const COLORS = ['#800020', '#A0304F', '#C06080', '#D4AF37', '#9B2335'];

export default function RosePetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createPetal = (): Petal => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      fallSpeed: 0.3 + Math.random() * 0.7,
      swaySpeed: 0.005 + Math.random() * 0.01,
      swayAmount: 30 + Math.random() * 50,
      opacity: 0.3 + Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
    });

    petalsRef.current = Array.from({ length: 18 }, createPetal);

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;
      ctx.fillStyle = petal.color;

      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size * 0.4, petal.size, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(
        petal.size * 0.2,
        0,
        petal.size * 0.3,
        petal.size * 0.8,
        0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      petalsRef.current.forEach((petal) => {
        petal.y += petal.fallSpeed;
        petal.x += Math.sin(time * petal.swaySpeed + petal.phase) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size * 2;
          petal.x = Math.random() * canvas.width;
        }

        drawPetal(petal);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      aria-hidden="true"
    />
  );
}
