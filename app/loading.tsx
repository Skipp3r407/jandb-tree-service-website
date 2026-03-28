import { TreePine } from "lucide-react";
import { SITE } from "@/lib/site-config";

export default function Loading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 py-20">
      <span className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-brand-forest/15 text-brand-forest">
        <TreePine className="h-8 w-8" aria-hidden />
      </span>
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
