import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { MotionSection } from "@/components/sections/MotionSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact & Free Estimate | ${SITE.name}`,
  description: `Request a free tree service estimate in ${SITE.primaryArea}. Call ${SITE.phoneDisplay} for emergencies — 24/7 hazard response.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-brand-border bg-brand-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">
            Free estimate
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Contact {SITE.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Send details about your trees—we typically respond within 24 hours.
            If a tree is actively failing or blocking access, call immediately.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <MotionSection>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50 p-5 text-brand-charcoal">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
                <div>
                  <p className="font-display font-bold text-amber-900">
                    Emergency tree help
                  </p>
                  <p className="mt-1 text-sm text-amber-900/85">
                    Fallen trees, split trunks, or limbs on a structure—call{" "}
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="font-bold underline decoration-amber-700/40"
                    >
                      {SITE.phoneDisplay}
                    </a>{" "}
                    now. Do not climb damaged trees.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-display mt-10 text-2xl font-bold text-brand-charcoal">
              Phone & email
            </h2>
            <ul className="mt-6 space-y-4 text-brand-muted">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent" />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-xl font-bold text-brand-charcoal hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-accent" />
                <span>
                  {SITE.addressLine}
                  <br />
                  {SITE.hqCity}, {SITE.state}
                </span>
              </li>
            </ul>

            <h2 className="font-display mt-10 text-2xl font-bold text-brand-charcoal">
              Hours
            </h2>
            <ul className="mt-4 space-y-3">
              {SITE.businessHours.map((h) => (
                <li
                  key={h.label}
                  className="flex items-start gap-3 text-brand-muted"
                >
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest" />
                  <span>
                    <span className="font-semibold text-brand-charcoal">
                      {h.label}:
                    </span>{" "}
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-brand-border bg-black/5">
              <iframe
                title="Service area map placeholder"
                src="https://maps.google.com/maps?q=DeBary%20FL&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-brand-muted">
              Map is approximate—replace with your verified business location or
              service polygon.
            </p>
          </MotionSection>

          <MotionSection>
            <h2 className="font-display text-2xl font-bold text-brand-charcoal">
              Request a quote
            </h2>
            <p className="mt-3 text-brand-muted">
              We&apos;ll contact you within 24 hours on standard requests.
            </p>
            <ContactForm className="mt-8" />
          </MotionSection>
        </div>
      </div>
    </div>
  );
}
