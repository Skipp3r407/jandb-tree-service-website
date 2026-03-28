import { TRUST_STRIP } from "@/lib/site-config";

export function TrustBar() {
  return (
    <div className="border-y border-brand-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-brand-border md:grid-cols-4">
        {TRUST_STRIP.map((item) => (
          <div
            key={item.label}
            className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6"
          >
            <p className="font-display text-sm font-bold text-brand-charcoal sm:text-base">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-brand-muted sm:text-sm">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
