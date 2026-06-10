import { SISTER, SITE_CONFIG } from '@/lib/constants';


export default function FooterSection() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-10 text-sm text-charcoal/70 sm:px-10">
      <div className="rounded-[32px] border border-gold/15 bg-cream/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
  <p className="text-sm uppercase tracking-[0.25em] text-charcoal/70">
   With Best Compliments..!!
  </p>

  <p className="mt-3 font-great-vibes text-4xl sm:text-5xl md:text-6xl text-gold">
    {SISTER.name}
  </p>
</div>
          <div className="text-right text-xs uppercase tracking-[0.35em] text-maroon/70">
            <p>{SITE_CONFIG.title}</p>
            <p className="mt-2">Built for a premium ceremony</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
