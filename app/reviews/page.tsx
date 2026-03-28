import type { Metadata } from "next";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { SITE, TESTIMONIALS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Customer Reviews | ${SITE.name}`,
  description: `See why ${SITE.primaryArea} homeowners trust ${SITE.name} for tree removal, trimming, emergency response, and cleanup.`,
};

const extra = [
  {
    quote:
      "They explained what was wrong with our oak and what could wait versus what couldn’t. That honesty mattered.",
    name: "Chris P.",
    place: "Winter Springs, FL",
  },
  {
    quote:
      "Great experience from the first call to the final rake-up. You can tell they’ve done this a long time.",
    name: "Angela S.",
    place: "Orange City, FL",
  },
];

export default function ReviewsPage() {
  const all = [...TESTIMONIALS, ...extra];
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionSection>
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by homeowners across Central Florida"
          subtitle="Five-star work is not luck—it is planning, communication, and leaving the job site right."
        />
      </MotionSection>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {all.map((t) => (
          <MotionSection key={t.name + t.place}>
            <ReviewCard {...t} />
          </MotionSection>
        ))}
      </div>
      <MotionSection className="mt-16 rounded-2xl border border-brand-border bg-brand-forest/5 p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-brand-charcoal">
          Have we worked on your property?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-muted">
          Reviews help neighbors choose local pros. Ask how to leave feedback on
          Google or Facebook after your job.
        </p>
        <Button href="/contact" variant="primary" className="mt-8">
          Book {SITE.name}
        </Button>
      </MotionSection>
      <MotionSection className="mt-16">
        <CTABanner />
      </MotionSection>
    </div>
  );
}
