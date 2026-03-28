import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_BEFORE_AFTER,
  legacyImage,
} from "@/lib/site-config";

export function BeforeAfterPreview() {
  return (
    <div className="space-y-10">
      <figure className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-[var(--shadow-soft)]">
        <figcaption className="sr-only">{FEATURED_BEFORE_AFTER.alt}</figcaption>
        <div className="relative w-full bg-[#f6f4ef]">
          <Image
            src={legacyImage(FEATURED_BEFORE_AFTER.src)}
            alt={FEATURED_BEFORE_AFTER.alt}
            width={1600}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width:1024px) 100vw, 896px"
            priority
          />
        </div>
        <p className="border-t border-brand-border bg-brand-forest/5 px-4 py-4 text-center text-sm font-medium leading-relaxed text-brand-charcoal sm:px-8 sm:text-base">
          {FEATURED_BEFORE_AFTER.caption}
        </p>
      </figure>

      <div>
        <p className="text-center font-display text-lg font-bold text-brand-charcoal">
          More project photos
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-brand-border shadow-[var(--shadow-card)]">
            <div className="bg-brand-forest px-4 py-2 text-center text-sm font-bold text-white">
              Before
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src={legacyImage("jeff5.jpg")}
                alt="Before tree service — overgrown canopy"
                fill
                className="object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-brand-border shadow-[var(--shadow-card)]">
            <div className="bg-brand-accent px-4 py-2 text-center text-sm font-bold text-white">
              After
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src={legacyImage("jeff6.jpg")}
                alt="After tree service — cleaned up and balanced"
                fill
                className="object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </figure>
        </div>
      </div>

      <p className="text-center text-sm text-brand-muted">
        Real job photos from our crews — see more in the{" "}
        <Link
          href="/gallery"
          className="font-bold text-brand-forest hover:underline"
        >
          gallery
        </Link>
        .
      </p>
    </div>
  );
}
