import { ExternalLink, MessageSquarePlus, Star } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function GoogleReviewsOptions({
  className,
  hasPulledReviews,
}: {
  className?: string;
  hasPulledReviews: boolean;
}) {
  const write = SITE.googleReviewWriteUrl?.trim();
  const maps = SITE.googleMapsListingUrl?.trim();

  if (!write && !maps) return null;

  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-brand-charcoal">
            Google reviews
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            {hasPulledReviews
              ? "Reviews below are loaded from your public Google Business Profile when configured."
              : "Connect the Places API to show live reviews here, or use the links to read and leave feedback on Google."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {write ? (
            <a
              href={write}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-forest px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-forest-mid"
            >
              <MessageSquarePlus className="h-4 w-4 shrink-0" aria-hidden />
              Write a review
            </a>
          ) : null}
          {maps ? (
            <a
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-5 py-3 text-sm font-bold text-brand-charcoal transition hover:bg-black/[0.03]"
            >
              <Star className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
              View on Google
              <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
