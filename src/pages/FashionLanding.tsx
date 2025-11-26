import { FashionNavbar } from '@/components/fashion/FashionNavbar';
import { FashionHero } from '@/components/fashion/FashionHero';
import { FeaturedCollection } from '@/components/fashion/FeaturedCollection';
import { HowItWorks } from '@/components/fashion/HowItWorks';
import { ValueProposition } from '@/components/fashion/ValueProposition';
import { Reviews } from '@/components/fashion/Reviews';
import { FashionCTA } from '@/components/fashion/FashionCTA';
import { FashionFooter } from '@/components/fashion/FashionFooter';

export default function FashionLanding() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050816]">
      <FashionNavbar />
      <FashionHero />
      <FeaturedCollection />
      <HowItWorks />
      <ValueProposition />
      <Reviews />
      <FashionCTA />
      <FashionFooter />
    </main>
  );
}
