import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function ReviewCard({
  quote,
  name,
  place,
  className,
}: {
  quote: string;
  name: string;
  place: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div className="flex gap-0.5 text-brand-accent" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-charcoal">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-brand-border pt-4 text-sm">
        <span className="font-bold text-brand-charcoal">{name}</span>
        <span className="text-brand-muted"> · {place}</span>
      </figcaption>
    </figure>
  );
}
