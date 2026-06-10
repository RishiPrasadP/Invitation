import { ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';
import type { VenueInfo } from '@/types';

export default function VenueSection({ venue }: { venue: VenueInfo }) {
  return (
    <SectionWrapper id="venue" className="rounded-[32px] border border-gold/20 bg-cream/90 p-8 shadow-[0_30px_90px_rgba(128,0,32,0.12)] sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Venue</p>
          <h2 className="text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">Pavithra Park Thirumana Mandapam</h2>
          <p className="max-w-xl text-base leading-8 text-charcoal/80">
            Our ceremony and reception take place in the heart of Chennai, where timeless ritual meets quiet luxury in a private, elegant setting.
          </p>
          <div className="space-y-3 rounded-3xl border border-gold/25 bg-ivory/90 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-maroon/70">Address</p>
            <p className="text-lg font-semibold text-charcoal">{venue.name}</p>
            <address className="not-italic text-sm leading-7 text-charcoal/75">
              {venue.addressLine1}
              <br />
              {venue.addressLine2}
              <br />
              {venue.addressLine3}
              <br />
              {venue.city}
            </address>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-maroon transition hover:text-maroon-dark"
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open directions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-6 rounded-[32px] border border-gold/25 bg-black/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
          <iframe
            title="Wedding venue map"
            src={venue.embedUrl}
            className="h-72 w-full rounded-[28px] border border-gold/20 bg-black/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
