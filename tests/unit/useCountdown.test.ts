'use strict';

import { renderHook, act } from '@testing-library/react';
import { useCountdown } from '@/hooks/useCountdown';

describe('useCountdown', () => {
  it('returns the correct countdown values for a future date', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-06-01T00:00:00.000Z'));

    const targetDate = new Date('2026-06-03T01:02:10.000Z');
    const { result, unmount } = renderHook(() => useCountdown(targetDate));

    act(() => {
      jest.advanceTimersByTime(0);
    });

    expect(result.current.days).toBe(2);
    expect(result.current.hours).toBe(1);
    expect(result.current.minutes).toBe(2);
    expect(result.current.seconds).toBe(10);
    expect(result.current.isExpired).toBe(false);

    unmount();
    jest.useRealTimers();
  });

  it('counts down over time and expires when the target date passes', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-06-01T00:00:00.000Z'));

    const targetDate = new Date('2026-06-01T00:00:05.000Z');
    const { result, unmount } = renderHook(() => useCountdown(targetDate));

    act(() => {
      jest.advanceTimersByTime(0);
    });

    expect(result.current.isExpired).toBe(false);

    act(() => {
      jest.advanceTimersByTime(5100);
    });

    expect(result.current.isExpired).toBe(true);

    unmount();
    jest.useRealTimers();
  });
});
