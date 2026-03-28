import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { generalFaqs } from "@/lib/faqs";
import { HOME_SERVICES, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Tree Services in ${SITE.primaryArea}`,
  description: `Full-service tree care: removal, trimming, stump grinding, emergency response, and land clearing. Licensed & insured — ${SITE.phoneDisplay}.`,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-brand-border bg-brand-forest text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">
            Tree services
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Professional tree work for homes & commercial sites
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            {SITE.name} has served {SITE.primaryArea} for {SITE.yearsInBusiness}{" "}
            years with licensed crews, proper insurance, and equipment sized for
            Florida trees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`tel:${SITE.phoneTel}`} variant="primary">
              <Phone className="h-5 w-5" />
              Call {SITE.phoneDisplay}
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-brand-forest"
            >
              Request estimate
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
        <MotionSection>
          <SectionHeading
            title="Core services"
            subtitle="Every project starts with a clear scope, safe work plan, and professional cleanup."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HOME_SERVICES.map((s) => (
              <li
                key={s.slug}
                className="flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
              >
                <Link
                  href={s.slug}
                  className="font-display text-xl font-bold text-brand-charcoal hover:text-brand-forest"
                >
                  {s.title}
                </Link>
                <p className="mt-3 flex-1 text-sm text-brand-muted">{s.excerpt}</p>
                <Link
                  href={s.slug}
                  className="mt-4 text-sm font-bold text-brand-forest hover:underline"
                >
                  View details →
                </Link>
              </li>
            ))}
          </ul>
        </MotionSection>

        <MotionSection>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
                Why professional tree work matters
              </h2>
              <p className="mt-4 text-brand-muted">
                Trees add value—until they become a hazard. Improper cuts invite
                decay; unplanned drops damage roofs and fences. Our crews plan
                removals and pruning with rigging, clear communication, and
                respect for your landscaping.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-brand-forest/5 p-6">
              <h3 className="font-display text-lg font-bold text-brand-charcoal">
                Safety & liability
              </h3>
              <p className="mt-3 text-sm text-brand-muted">
                Hiring an insured tree company protects you if something
                unexpected happens on site. We carry coverage appropriate for
                hazardous tree work—not general handyman policies.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-charcoal">
                {[
                  "Written scope options when multiple approaches exist",
                  "Cleanup standards discussed before we start cutting",
                  "Emergency availability for storm damage",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-forest" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            Additional expertise
          </h2>
          <p className="mt-4 max-w-3xl text-brand-muted">
            The original J&B&apos;s site also highlights{" "}
            <strong className="text-brand-charcoal">demossing</strong>,{" "}
            <strong className="text-brand-charcoal">root pruning</strong>,{" "}
            <strong className="text-brand-charcoal">deep-root fertilization</strong>
            , and{" "}
            <strong className="text-brand-charcoal">arborist consulting</strong>{" "}
            for declining trees. Mention these when you call if your property
            needs specialized care beyond removal and trimming.
          </p>
        </MotionSection>

        <MotionSection>
          <CTABanner title="Talk with a tree professional" />
        </MotionSection>

        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            Frequently asked questions
          </h2>
          <FAQAccordion items={generalFaqs} className="mt-8" />
        </MotionSection>

        <MotionSection>
          <div className="rounded-3xl border border-brand-border bg-brand-forest px-6 py-10 text-center text-white sm:px-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Ready for an on-site evaluation?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Share photos if you have them—we will still confirm details in
              person for most jobs.
            </p>
            <Button
              href="/contact"
              variant="primary"
              className="mt-8 !bg-white !text-brand-forest hover:!bg-white/90"
            >
              Contact {SITE.name}
            </Button>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}
