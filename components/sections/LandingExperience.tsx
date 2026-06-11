'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TextReveal from '@/components/animations/TextReveal';

export default function LandingExperience() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = async () => {
    setIsOpening(true);
    window.setTimeout(() => setHasOpened(true), 1200);
  };

  return (
    <AnimatePresence>
      {!hasOpened && (
        <motion.section
          key="landing-screen"
          aria-labelledby="landing-invitation-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-30 overflow-y-auto bg-maroon-dark text-ivory"
        >
          <div className="landing-screen absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),transparent_42%),linear-gradient(180deg,rgba(15,6,6,0.95),rgba(52,11,15,0.92))]" />

          <div className="pointer-events-none absolute inset-x-0 top-8 z-30 flex items-start justify-between px-6 sm:px-10">
            <div className="top-decoration flex items-center gap-3">
              <div className="hanging-garland" />
              <div className="temple-bell" />
            </div>
            <div className="top-decoration flex items-center gap-3 justify-end">
              <div className="temple-bell" />
              <div className="hanging-garland" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-24 z-20 flex justify-center px-6">
            <div className="mango-thoranam" aria-hidden="true" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex items-end justify-between px-6 sm:px-10">
            <div className="diya-card">
              <div className="diya-top" />
              <div className="diya-flame" />
            </div>
            <div className="diya-card">
              <div className="diya-top" />
              <div className="diya-flame" />
            </div>
          </div>

          <div className="relative z-40 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-start px-6 py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full overflow-hidden rounded-[36px] border border-gold/20 bg-black/30 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-10"
            >
              <div className="relative mx-auto mb-6 h-[180px] sm:h-[240px] md:h-[330px] max-w-3xl">
                <div className="temple-silhouette absolute inset-x-0 top-6 mx-auto h-48 w-full max-w-3xl opacity-70" />
                <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-3xl items-end justify-center">
                  <div
                    className="relative flex h-[260px] w-full max-w-[560px] items-end justify-between px-6"
                    aria-hidden="true"
                    style={{
                      perspective: "1500px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      animate={
                        isOpening
                          ? {
                              rotateY: -110,
                              x: -60,
                            }
                          : {
                              rotateY: 0,
                              x: 0,
                            }
                      }
                      transition={{
                        duration: 1.5,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      style={{
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                      }}
                      className="door-panel left"
                    >
                      <div className="door-detail" />
                      <div className="door-handle" />
                    </motion.div>
                    <motion.div
                      animate={
                        isOpening
                          ? {
                              rotateY: 110,
                              x: 60,
                            }
                          : {
                              rotateY: 0,
                              x: 0,
                            }
                      }
                      transition={{
                        duration: 1.5,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      style={{
                        transformOrigin: "right center",
                        transformStyle: "preserve-3d",
                      }}
                      className="door-panel right"
                    >
                      <div className="door-detail" />
                      <div className="door-handle" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.45em] text-gold/80">
                  With the blessings of our families
                </p>
                <div className="mx-auto max-w-xl rounded-[28px] border border-gold/20 bg-maroon/10 p-6 text-center shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)]">
                
                  <p className="mt-4 text-3xl font-semibold text-gold">
                    Mr. T. Ayyapan
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-ivory">
                    &amp;
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gold">
                    Mrs. A. Tamilmani
                  </p>
                </div>
                <div className="mx-auto max-w-xl rounded-[28px] border border-gold/20 bg-maroon/10 p-6 text-center shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-cream/80">
                    and
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-ivory">
                    Mr. A. Siva 
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gold">
                    &amp;
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-ivory">
                    Mrs. S. Seethalakshmi
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[32px] border border-gold/25 bg-ivory/95 p-8 text-charcoal shadow-[0_30px_90px_rgba(0,0,0,0.18)] sm:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-maroon/70">
                  Now unveiling
                </p>
                <div className="mt-4 space-y-2 text-4xl font-semibold tracking-[-0.03em] text-maroon sm:text-5xl">
                  <p className="font-great-vibes text-maroon">A. Nadhisha</p>
                  <p className="text-4xl text-gold">&amp;</p>
                  <p className="font-great-vibes text-maroon">S. Kathiravan</p>
                </div>
              </div>

              <div className="sticky bottom-4 mt-10 flex flex-col items-center gap-4 bg-maroon-dark/40 py-4 backdrop-blur-md sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-maroon transition hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-ivory"
                >
                  Open Invitation
                </button>
                <TextReveal
                  text="Experience the temple doors opening, the glow of gold, and the invitation unfolding in cinematic motion."
                  as="p"
                  delay={0.1}
                  className="max-w-md text-center text-xs uppercase tracking-[0.35em] text-cream/80 sm:max-w-[420px]"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
