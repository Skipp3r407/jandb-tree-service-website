import Image from "next/image";
import { Phone } from "lucide-react";
import { legacyImage, SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,820px)] overflow-hidden">
      <Image
        src={legacyImage("truck500.jpg")}
        alt="J&B Tree Service crew and equipment on site"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/35"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-36">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
          Locally trusted · {SITE.yearsInBusiness} years
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Professional Tree Service You Can Trust
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          Safe, reliable tree care for homeowners and property owners across{" "}
          {SITE.primaryArea}. Fast response, free estimates, and crews who treat
          your property like their own.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            href={`tel:${SITE.phoneTel}`}
            variant="primary"
            className="!px-8 !py-4 !text-lg"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
          <Button href="/contact" variant="outline" className="!border-white !bg-white/10 !text-white !backdrop-blur hover:!bg-white hover:!text-brand-forest">
            Get Free Estimate
          </Button>
        </div>
        <ul className="mt-12 flex flex-wrap gap-3">
          {["Licensed & insured", "Local experts", "24/7 emergency"].map(
            (t) => (
              <li
                key={t}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              >
                {t}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
