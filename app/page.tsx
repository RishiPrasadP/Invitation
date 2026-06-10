import CountdownSection from '@/components/sections/CountdownSection';
import HeroSection from '@/components/sections/HeroSection';
import LandingExperience from '@/components/sections/LandingExperience';
import CoupleSection from '@/components/sections/CoupleSection';
import EventsSection from '@/components/sections/EventsSection';
import VenueSection from '@/components/sections/VenueSection';
import InvitationSection from '@/components/sections/InvitationSection';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import GoldenParticles from '@/components/animations/GoldenParticles';
import RosePetals from '@/components/animations/RosePetals';
import { EVENTS, VENUE, BRIDE, PARENTS } from '@/lib/constants';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ivory text-charcoal">
      <GoldenParticles />
      <RosePetals />
      <LandingExperience />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col gap-24 px-6 pb-24 pt-6 lg:px-10">
        <HeroSection />
        <CountdownSection />
        <CoupleSection />
        <EventsSection events={EVENTS} />
        <VenueSection venue={VENUE} />
        <InvitationSection bride={BRIDE} parents={PARENTS} />
        <BlessingsSection />
      </div>

      <FooterSection />
    </main>
  );
}
