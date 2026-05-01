import dynamic from "next/dynamic";
import HeroSale from "@/components/HeroSale";
import UrgencyStrip from "@/components/UrgencyStrip";

const DealsGrid = dynamic(() => import("@/components/DealsGrid"), {
  ssr: false,
});

const StickyBuyBar = dynamic(() => import("@/components/StickyBuyBar"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <HeroSale />
      <UrgencyStrip />
      <DealsGrid />

      {/* TODO: CategoryTiles */}
      {/* TODO: TrustBar */}
      {/* TODO: ReviewsCarousel */}
      {/* TODO: FaqAccordion */}
      {/* TODO: FinalCta */}
      {/* TODO: Footer */}

      <StickyBuyBar />
    </main>
  );
}
