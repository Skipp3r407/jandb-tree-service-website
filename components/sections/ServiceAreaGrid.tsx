import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/site-config";

export function ServiceAreaGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICE_AREAS.slice(0, limit) : SERVICE_AREAS;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/service-areas/${c.slug}`}
            className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="flex items-center gap-2 text-sm font-bold text-brand-forest">
              <MapPin className="h-4 w-4" aria-hidden />
              {c.name}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-muted">
              {c.county} County
            </span>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {c.blurb}
            </p>
            <span className="mt-4 text-sm font-bold text-brand-charcoal">
              Tree service in {c.name} →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
