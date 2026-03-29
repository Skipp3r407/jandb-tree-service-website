import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function ReviewCard({
  quote,
  name,
  place,
  className,
  rating = 5,
  source = "site",
  timeAgo,
}: {
  quote: string;
  name: string;
  place: string;
  className?: string;
  /** 1–5; Google reviews use the rating returned by the API. */
  rating?: number;
  source?: "google" | "site";
  timeAgo?: string;
}) {
  const filled = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {source === "google" ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Google review
        </p>
      ) : null}
      <div
        className={cn(
          "flex gap-0.5 text-brand-accent",
          source === "google" ? "mt-2" : "",
        )}
        aria-label={`${filled} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < filled ? "fill-current" : "fill-transparent text-brand-border",
            )}
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-charcoal">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-brand-border pt-4 text-sm">
        <span className="font-bold text-brand-charcoal">{name}</span>
        {timeAgo ? (
          <span className="text-brand-muted"> · {timeAgo}</span>
        ) : null}
        <span className="text-brand-muted"> · {place}</span>
      </figcaption>
    </figure>
  );
}
