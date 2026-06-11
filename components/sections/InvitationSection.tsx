'use client';

import { useState } from 'react';
import { GROOM } from '@/lib/constants';
import SectionWrapper from '@/components/common/SectionWrapper';
import type { InvitationHost, PersonInfo } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationSection({ bride, parents }: { bride: PersonInfo; parents: InvitationHost }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <SectionWrapper id="invitation" className="rounded-[32px] border border-gold/20 bg-maroon/5 p-8 shadow-[0_30px_90px_rgba(128,0,32,0.12)] sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Invitation card</p>
          <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">A royal invitation, unfolding with grace.</h2>
          <p className="max-w-xl text-base leading-8 text-charcoal/80">
            The wedding card opens like a handcrafted folio, revealing the names, the blessing of family, and the promise of a dawn ceremony in Chennai.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-gold/25 bg-ivory/95 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.14)] sm:p-8">
          <div className="card-preview relative mx-auto max-w-[340px] rounded-[32px] border border-gold/40 bg-maroon/10 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-x-0 top-4 mx-auto h-1 w-16 rounded-full bg-gold/60 blur-sm" />
            <p className="text-xs uppercase tracking-[0.35em] text-maroon/70">With the blessings of</p>
            <p className="mt-5 text-base text-charcoal/80">Mr. T. Ayyappan &amp; Mrs. A. Tamilmani</p>
            <p className="mt-1 text-base text-charcoal/80">Mr. A. Siva  &amp; Mrs. S. Seethalakshmi</p>
            <div className="mt-8 rounded-[24px] border border-gold/30 bg-cream/80 p-6 text-center shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)]">
              <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Together with their families</p>
             
              <p className="mt-3 text-2xl font-semibold text-maroon">{bride.name}</p>
              <p className="mt-2 text-3xl font-great-vibes text-gold">&amp;</p>
              <p className="mt-2 text-2xl font-semibold text-maroon">{GROOM.name}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="mt-8 w-full rounded-full border border-gold/30 bg-maroon px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-ivory transition hover:bg-maroon-dark focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Preview royal invitation
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6 py-10"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, rotateY: -10 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-[36px] border border-gold/30 bg-ivory p-8 shadow-[0_40px_120px_rgba(0,0,0,0.3)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="invitation-preview-title"
            >
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="absolute right-5 top-5 rounded-full border border-maroon/20 bg-maroon/10 px-3 py-2 text-sm font-semibold text-maroon transition hover:bg-maroon/20"
              >
                Close
              </button>
              <div className="rounded-[32px] border border-gold/20 bg-maroon/5 p-8">
                <h3 id="invitation-preview-title" className="text-3xl font-semibold uppercase tracking-[0.35em] text-maroon">Royal Invitation</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/80">
                  Open the folio to reveal the sacred names, the ceremony details, and the warm invitation from both families.
                </p>
                <div className="mt-10 grid gap-8 rounded-[28px] border border-gold/25 bg-ivory/90 p-8 text-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Reception</p>
                    <p className="mt-3 text-lg font-semibold">23 June 2026</p>
                    <p className="text-sm text-charcoal/75">6:00 PM onwards</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Wedding Ceremony</p>
                    <p className="mt-3 text-lg font-semibold">24 June 2026</p>
                    <p className="text-sm text-charcoal/75">6:00 AM – 7:30 AM</p>
                  </div>
                </div>
                <div className="mt-10 space-y-4 rounded-[28px] border border-gold/25 bg-maroon/10 p-8 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-maroon/70">Venue</p>
                  <p className="text-xl font-semibold text-charcoal">Pavithra Park Thirumana Mandapam</p>
                  <p className="text-sm text-charcoal/80">No.3, 200 Feet Road, Pallavaram–Thoraipakkam Radial Road, Kovilambakkam, Chennai – 129</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
