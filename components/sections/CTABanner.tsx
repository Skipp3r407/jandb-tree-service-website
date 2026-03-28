import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function CTABanner({
  title = "Need Tree Service Today?",
  subtitle = "Call for a fast response or request a free estimate — we serve homeowners and commercial properties across Central Florida.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-forest px-6 py-14 text-center text-white sm:px-10">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-brand-accent/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/85">{subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={`tel:${SITE.phoneTel}`}
            variant="primary"
            className="!bg-white !text-brand-forest hover:!bg-white/90"
          >
            <Phone className="h-5 w-5" />
            Call {SITE.phoneDisplay}
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            className="!border-white/40 !bg-transparent"
          >
            Request estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
