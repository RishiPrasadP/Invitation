import { BRIDE, GROOM } from '@/lib/constants';
import ShimmerEffect from '@/components/animations/ShimmerEffect';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="overflow-hidden rounded-[32px] border border-gold/20 bg-cream/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.14)] sm:p-12">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-maroon/70">Royal unveiling</p>
          <ShimmerEffect className="text-6xl font-semibold tracking-[-0.04em] text-maroon sm:text-7xl">
            <span className="block text-6xl sm:text-7xl md:text-6xl">A. Nadhisha</span>
            <center><p className="mt-2 text-3xl font-semibold text-gold">
                    &amp;
                  </p></center>
            <span className="block text-5xl sm:text-6xl md:text-6xl"> S. Kathiravan</span>
          </ShimmerEffect>
          <p className="max-w-2xl text-lg leading-8 text-charcoal/85 sm:text-xl">
            A dawn ceremony, a sacred venue, and a celebration crafted for an unforgettable Tamil wedding experience.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-gold/30 bg-maroon/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-maroon/80 shadow-[0_15px_30px_rgba(128,0,32,0.1)]">
            24 June 2026 • Chennai
          </div>
        </div>

        <div className="rounded-[28px] border border-gold/30 bg-maroon/5 p-8 text-charcoal/90 shadow-[0_20px_60px_rgba(128,0,32,0.12)]">
          <p className="uppercase tracking-[0.35em] text-maroon/80">“The Wedding Couple”</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-3xl bg-ivory/80 p-5 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)]">
              <p className="text-sm uppercase text-maroon/70">Bride</p>
              <p className="mt-2 text-xl font-semibold text-charcoal">{BRIDE.name}</p>
              <p className="text-sm text-charcoal/75">{BRIDE.qualification} • {BRIDE.workplace}</p>
            </div>
            <div className="rounded-3xl bg-ivory/80 p-5 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)]">
              <p className="text-sm uppercase text-maroon/70">Groom</p>
              <p className="mt-2 text-xl font-semibold text-charcoal">{GROOM.name}</p>
              <p className="text-sm text-charcoal/75">{GROOM.qualification} • {GROOM.designation} - {GROOM.workplace}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
