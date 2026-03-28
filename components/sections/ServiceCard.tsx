import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CircleDot,
  Scissors,
  Trees,
  TreeDeciduous,
} from "lucide-react";
import { legacyImage } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const icons = {
  axe: TreeDeciduous,
  scissors: Scissors,
  circle: CircleDot,
  alert: AlertTriangle,
  trees: Trees,
};

function EmergencyServiceHeader() {
  return (
    <div
      className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 p-4 sm:p-5"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-600 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-forest blur-3xl" />
      </div>

      <div className="relative z-[1] flex justify-start">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200/90 bg-white shadow-md">
          <AlertTriangle
            className="h-5 w-5 text-zinc-900"
            strokeWidth={2.25}
            aria-hidden
          />
        </span>
      </div>

      <div className="relative z-[1] flex flex-1 items-center justify-center px-1 pb-1 pt-2">
        <div className="-rotate-[2.5deg] text-center">
          <p
            className="font-display text-[0.65rem] font-black uppercase leading-[1.05] tracking-[0.12em] text-red-600 sm:text-xs md:text-sm"
            style={{
              textShadow:
                "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 0 2px 4px rgba(0,0,0,0.12)",
            }}
          >
            <span className="block">24 Hour</span>
            <span className="block">Emergency</span>
            <span className="block">Service</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({
  title,
  excerpt,
  href,
  image,
  icon,
  headerVariant = "photo",
  className,
}: {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  icon: keyof typeof icons;
  headerVariant?: "photo" | "emergency";
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {headerVariant === "emergency" ? (
        <EmergencyServiceHeader />
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={legacyImage(image)}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-forest shadow-md">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-brand-charcoal">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
          {excerpt}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center text-sm font-bold text-brand-forest underline-offset-4 hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
