import { SITE } from "@/lib/site-config";
import { BrandLogo } from "@/components/layout/BrandLogo";

export default function Loading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-5 px-4 py-20">
      <BrandLogo variant="splash" priority />
      <div className="text-center">
        <p className="font-display text-lg font-bold text-brand-charcoal">
          {SITE.name}
        </p>
        <p className="mt-2 text-sm text-brand-muted">Loading page…</p>
      </div>
      <div
        className="h-1 w-48 overflow-hidden rounded-full bg-brand-border"
        role="progressbar"
        aria-label="Loading"
      >
        <div className="h-full w-1/3 animate-pulse rounded-full bg-brand-accent" />
      </div>
    </div>
  );
}
