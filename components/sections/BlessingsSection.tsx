import { BLESSINGS } from '@/lib/constants';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function BlessingsSection() {
  return (
    <SectionWrapper id="blessings" className="rounded-[32px] border border-gold/20 bg-cream/90 p-8 shadow-[0_30px_90px_rgba(128,0,32,0.12)] sm:p-10">
      <div className="space-y-5 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Blessings</p>
        <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">A celebration wrapped in good wishes.</h2>
        <p className="mx-auto max-w-2xl text-base leading-8 text-charcoal/80">
          These words carry the warmth of family and tradition as we open our invitation to your heart.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {BLESSINGS.map((blessing) => (
          <article key={blessing.tamil} className="rounded-[28px] border border-gold/25 bg-maroon/5 p-6 text-charcoal shadow-[0_18px_50px_rgba(128,0,32,0.1)]">
            <p className="text-xl font-semibold text-maroon">{blessing.tamil}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/80">{blessing.translation}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
