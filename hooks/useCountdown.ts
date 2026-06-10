'use client';

import { useState, useEffect, useCallback } from 'react';
import type { CountdownTime } from '@/types';

export function useCountdown(targetDate: Date): CountdownTime {
  const calculateTime = useCallback((): CountdownTime => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }, [targetDate]);

  const initialTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(initialTime);

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(calculateTime());

    const initialUpdate = window.setTimeout(updateCountdown, 0);
    const timer = window.setInterval(updateCountdown, 1000);

    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(timer);
    };
  }, [calculateTime]);

  return timeLeft;
}
