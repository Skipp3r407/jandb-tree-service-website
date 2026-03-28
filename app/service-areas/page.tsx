import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceAreaGrid } from "@/components/sections/ServiceAreaGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { SITE, SERVICE_AREAS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Service Areas | Tree Service in Volusia & Seminole Counties`,
  description: `${SITE.name} serves ${SITE.primaryArea} including ${SERVICE_AREAS.slice(0, 4).map((c) => c.name).join(", ")}, and more. Local SEO landing pages for each city.`,
};

export default function ServiceAreasIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionSection>
        <SectionHeading
          eyebrow="Local service"
          title="Tree service where you live"
          subtitle={`We are rooted in ${SITE.primaryArea}. Choose your city for area-specific details and service keywords that help neighbors find trusted tree care.`}
        />
      </MotionSection>
      <MotionSection className="mt-12">
        <ServiceAreaGrid />
      </MotionSection>
      <MotionSection className="mt-16 rounded-2xl border border-brand-border bg-brand-forest/5 p-8">
        <h2 className="font-display text-xl font-bold text-brand-charcoal">
          Don&apos;t see your town?
        </h2>
        <p className="mt-3 text-brand-muted">
          We still may service your area—call{" "}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-bold text-brand-forest hover:underline"
          >
            {SITE.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-bold text-brand-forest hover:underline">
            request an estimate
          </Link>{" "}
          and include your address.
        </p>
      </MotionSection>
      <MotionSection className="mt-16">
        <CTABanner />
      </MotionSection>
    </div>
  );
}
