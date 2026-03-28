import { PROCESS_STEPS } from "@/lib/site-config";

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
      {PROCESS_STEPS.map((s) => (
        <li
          key={s.step}
          className="relative rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)]"
        >
          <span className="font-display text-4xl font-bold text-brand-forest/20">
            {s.step}
          </span>
          <h3 className="mt-2 font-display text-lg font-bold text-brand-charcoal">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
