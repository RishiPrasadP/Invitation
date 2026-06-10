import { PartyPopper, Heart } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';
import type { WeddingEvent } from '@/types';

function EventCard({ event }: { event: WeddingEvent }) {
  const Icon = event.icon === 'PartyPopper' ? PartyPopper : Heart;

  return (
    <article className="rounded-[28px] border border-gold/25 bg-ivory/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 text-gold shadow-inner shadow-gold/10">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">{event.tamilTitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-charcoal">{event.title}</h3>
        </div>
      </div>
      <div className="mt-6 space-y-3 text-sm leading-7 text-charcoal/80">
        <p className="font-semibold text-charcoal">{event.date}</p>
        <p className="text-maroon/80">{event.time}</p>
        <p>{event.description}</p>
      </div>
    </article>
  );
}

export default function EventsSection({ events }: { events: WeddingEvent[] }) {
  return (
    <SectionWrapper id="events" className="rounded-[32px] border border-gold/20 bg-maroon/5 p-8 shadow-[0_30px_90px_rgba(128,0,32,0.12)] sm:p-10">
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Wedding events</p>
        <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">A refined sequence of celebration.</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </SectionWrapper>
  );
}
