import { BRIDE, GROOM } from '@/lib/constants';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function CoupleSection() {
  return (
    <SectionWrapper id="couple" className="rounded-[32px] border border-gold/20 bg-cream/90 p-8 shadow-[0_32px_100px_rgba(128,0,32,0.12)] sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">The couple</p>
          <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">From shared classrooms to a shared future.</h2>
          <p className="max-w-xl text-base leading-8 text-charcoal/80">
            Nadhisha and Kathiravan blend tradition with modern confidence. Their story is anchored in curiosity, community, and a quiet promise to celebrate life together.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-[28px] border border-gold/25 bg-maroon/5 p-6 shadow-[0_18px_50px_rgba(128,0,32,0.1)]">
            <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Bride</p>
            <p className="mt-4 text-2xl font-semibold text-charcoal">{BRIDE.fullName}</p>
            <p className="mt-3 text-sm leading-7 text-charcoal/75">A software engineer with an eye for detail and a heart rooted in family traditions.</p>
          </article>
          <article className="rounded-[28px] border border-gold/25 bg-maroon/5 p-6 shadow-[0_18px_50px_rgba(128,0,32,0.1)]">
            <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Groom</p>
            <p className="mt-4 text-2xl font-semibold text-charcoal">{GROOM.fullName}</p>
            <p className="mt-3 text-sm leading-7 text-charcoal/75">An inspector who carries tradition forward with respect, grace, and a calm strength.</p>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
}
