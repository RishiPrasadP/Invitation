'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_DATE } from '@/lib/constants';
import SectionWrapper from '@/components/common/SectionWrapper';
import { padZero } from '@/lib/utils';

export default function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  return (
    <SectionWrapper id="countdown" className="rounded-[32px] border border-gold/20 bg-maroon/5 p-8 shadow-[0_30px_90px_rgba(128,0,32,0.1)] sm:p-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Countdown</p>
          <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">The celebration begins soon.</h2>
          <p className="max-w-xl text-base leading-7 text-charcoal/80">
            Witness the sacred vows on June 24th, and experience the devotional dawn ceremony with grace, tradition and cinematic luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
            const values = [days, hours, minutes, seconds];
            return (
              <div key={label} className="rounded-3xl border border-gold/25 bg-ivory/90 p-5 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
                <p className="text-3xl font-semibold text-maroon">{padZero(values[index])}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.33em] text-charcoal/60">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
      {isExpired && (
        <p className="mt-6 text-center text-sm uppercase tracking-[0.35em] text-maroon/70">The wedding ceremony is underway.</p>
      )}
    </SectionWrapper>
  );
}
