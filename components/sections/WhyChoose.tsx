import {
  BadgeCheck,
  DollarSign,
  HardHat,
  Leaf,
  MapPinned,
  Shield,
  Tractor,
  Timer,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/site-config";

const icons = [
  HardHat,
  Shield,
  Leaf,
  DollarSign,
  MapPinned,
  Tractor,
  Timer,
];

export function WhyChoose() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {WHY_CHOOSE.map((item, i) => {
        const Icon = icons[i] ?? BadgeCheck;
        return (
          <li
            key={item.title}
            className="rounded-2xl border border-brand-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-forest/8 text-brand-forest">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="font-display mt-4 text-lg font-bold text-brand-charcoal">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              {item.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
