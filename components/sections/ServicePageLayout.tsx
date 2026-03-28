import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { legacyImage, SITE } from "@/lib/site-config";
import type { ServiceContent } from "@/lib/service-content";
import type { FaqItem } from "@/components/sections/FAQAccordion";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { MotionSection } from "@/components/sections/MotionSection";
import { Button } from "@/components/ui/Button";

export function ServicePageLayout({
  content,
  faqs,
}: {
  content: ServiceContent;
  faqs: FaqItem[];
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src={legacyImage(content.image)}
            alt={content.imageAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/70"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">
            {SITE.name}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{content.heroSubtitle}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${SITE.phoneTel}`} variant="primary" className="!text-base">
              <Phone className="h-5 w-5" />
              Call {SITE.phoneDisplay}
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-brand-forest"
            >
              Free estimate
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
        <MotionSection>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
                What this service is about
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                {content.intro}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-bold text-brand-charcoal">
                Why it matters
              </h3>
              <p className="mt-3 text-brand-muted">{content.whyMatters}</p>
              <Link
                href="/reviews"
                className="mt-4 inline-block text-sm font-bold text-brand-forest hover:underline"
              >
                See what customers say →
              </Link>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            Common problems this solves
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.problems.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-xl border border-brand-border bg-white p-4 text-brand-charcoal shadow-sm"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        <MotionSection>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <Image
                src={legacyImage(content.image)}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
                Benefits of hiring {SITE.name}
              </h2>
              <ul className="mt-6 space-y-3">
                {content.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-brand-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="mt-8">
                Request pricing
              </Button>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            {content.processTitle}
          </h2>
          <ol className="mt-8 space-y-4">
            {content.process.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-2xl border border-brand-border bg-white p-5 shadow-sm"
              >
                <span className="font-display text-2xl font-bold text-brand-forest/35">
                  {i + 1}
                </span>
                <p className="text-brand-muted">{step}</p>
              </li>
            ))}
          </ol>
        </MotionSection>

        <MotionSection>
          <h2 className="font-display text-2xl font-bold text-brand-charcoal sm:text-3xl">
            {content.title} FAQs
          </h2>
          <FAQAccordion items={faqs} className="mt-8" />
        </MotionSection>

        <CTABanner />

        <MotionSection>
          <div className="grid gap-10 rounded-3xl border border-brand-border bg-white p-8 shadow-[var(--shadow-card)] lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-charcoal">
                Request an estimate
              </h2>
              <p className="mt-3 text-brand-muted">
                Tell us what you are seeing on the property. For urgent hazards,
                call <a className="font-bold text-brand-forest" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
              </p>
              <p className="mt-4 text-sm text-brand-muted">
                Licensed & insured · Serving {SITE.primaryArea}
              </p>
            </div>
            <ContactForm />
          </div>
        </MotionSection>
      </div>
    </>
  );
}
