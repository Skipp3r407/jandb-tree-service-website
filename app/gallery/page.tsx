import type { Metadata } from "next";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Photo Gallery | ${SITE.name}`,
  description: `Tree removal, trimming, stump grinding, and land clearing photos from real ${SITE.primaryArea} jobs. Click images to enlarge.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionSection>
        <SectionHeading
          eyebrow="Gallery"
          title="Real jobs. Real cleanup."
          subtitle="Photos pulled from our legacy site and crew projects—use filters to browse by category."
        />
      </MotionSection>
      <MotionSection className="mt-12">
        <GalleryGrid />
      </MotionSection>
      <p className="mt-10 text-center text-sm text-brand-muted">
        Follow{" "}
        <a
          href={SITE.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-brand-forest hover:underline"
        >
          J&B&apos;s on Facebook
        </a>{" "}
        for additional albums and updates.
      </p>
      <MotionSection className="mt-16">
        <CTABanner />
      </MotionSection>
    </div>
  );
}
