import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { SITE, legacyImage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About ${SITE.name}`,
  description: `Local tree professionals serving ${SITE.primaryArea} for ${SITE.yearsInBusiness} years. Safety-first crews, honest estimates, and respectful cleanup.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionSection>
        <SectionHeading
          eyebrow="About us"
          title="A Central Florida tree company built on experience"
          subtitle={`${SITE.name} is a local crew—not a national call center. We live in the communities we serve, and we treat every job like our reputation depends on it.`}
        />
      </MotionSection>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
        <MotionSection>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-brand-border shadow-[var(--shadow-soft)]">
            <Image
              src={legacyImage("jeff1.jpg")}
              alt="J&B's Tree Service owner and crew"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
        </MotionSection>
        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            Our story
          </h2>
          <p className="mt-4 text-brand-muted">
            For more than {SITE.yearsInBusiness} years, homeowners and property
            managers have called {SITE.name} when trees get too close to roofs,
            when storms leave debris behind, and when stumps need to disappear.
            Owner {SITE.owner} built the company on straight answers, safe job
            sites, and crews who know Florida trees.
          </p>
          <h3 className="mt-8 font-display text-xl font-bold text-brand-charcoal">
            Mission & values
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-muted">
            <li>Safety first—for your family, neighbors, and our crew.</li>
            <li>
              Honest recommendations—even when the right answer is pruning
              instead of removal.
            </li>
            <li>
              Clean job sites—chips managed, yards respected, gates closed.
            </li>
          </ul>
        </MotionSection>
      </div>

      <MotionSection className="mt-20 rounded-3xl border border-brand-border bg-white p-8 shadow-[var(--shadow-card)] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-charcoal">
              Equipment & training
            </h2>
            <p className="mt-4 text-brand-muted">
              From stump grinders and lifts to rigging and storm response, we
              bring the right tools for the scope—not whatever happens to be on
              the truck that day.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-charcoal">
              Licensed & insured
            </h2>
            <p className="mt-4 text-brand-muted">
              Tree work carries real risk. We maintain coverage appropriate for
              hazardous removals and commercial sites, and we are happy to
              provide documentation before work begins.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-16">
        <CTABanner
          title="Work with a crew you can call by name"
          subtitle="Ask about your trees, your timeline, and what cleanup will look like on day one."
        />
      </MotionSection>

      <div className="mt-16 text-center">
        <Button href="/contact" variant="secondary">
          Request a free estimate
        </Button>
        <p className="mt-6 text-sm text-brand-muted">
          Explore{" "}
          <Link href="/services" className="font-bold text-brand-forest hover:underline">
            services
          </Link>{" "}
          or read{" "}
          <Link href="/reviews" className="font-bold text-brand-forest hover:underline">
            customer reviews
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
