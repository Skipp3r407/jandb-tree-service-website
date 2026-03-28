import { TreePine } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

function BrandIcon({
  className,
  thickBorder,
}: {
  className?: string;
  /** Larger border weight when the icon is scaled up (header 3×). */
  thickBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg border-brand-forest bg-gradient-to-b from-amber-200 via-orange-300 to-rose-400 shadow-sm",
        thickBorder ? "rounded-2xl border-4" : "rounded-lg border-2",
        className,
      )}
      aria-hidden
    >
      <TreePine
        className="relative z-[1] h-[58%] w-[58%] text-brand-forest drop-shadow-sm"
        strokeWidth={thickBorder ? 3.2 : 2.5}
      />
    </div>
  );
}

/**
 * Text/CSS brand block: icon, wordmark, service ribbon, areas.
 * - `header`: large nav mark (3×); `footer`: dark column + phone; `contact`: card-sized for inline sections.
 */
export function SiteBrandMark({
  variant,
  className,
}: {
  variant: "header" | "footer" | "contact";
  className?: string;
}) {
  const isHeader = variant === "header";
  const isFooter = variant === "footer";
  const isContact = variant === "contact";
  const areasLine = SITE.brandRibbonAreas.join(" · ");

  return (
    <div
      className={cn(
        "flex",
        isFooter &&
          "max-w-xl flex-col gap-3 sm:flex-row sm:items-start sm:gap-4",
        isHeader &&
          "items-center gap-9 sm:gap-12 max-md:origin-left max-md:scale-[0.62]",
        isContact && "items-center gap-4 sm:gap-5",
        className,
      )}
    >
      <BrandIcon
        thickBorder={isHeader}
        className={cn(
          isFooter && "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24",
          isHeader && "h-36 w-36 sm:h-[10.5rem] sm:w-[10.5rem]",
          isContact && "h-16 w-16 sm:h-20 sm:w-20",
        )}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
          <span
            className={cn(
              "font-display font-black leading-[0.95] tracking-tight",
              isFooter &&
                "text-3xl text-white [text-shadow:0_2px_0_rgba(0,0,0,0.35)] sm:text-4xl",
              isHeader && "text-6xl text-brand-forest sm:text-7xl",
              isContact && "text-2xl text-brand-forest sm:text-3xl",
            )}
          >
            J&B&apos;s
          </span>
          {isFooter ? (
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-display text-base font-bold tracking-wide text-red-400 [text-shadow:0_1px_0_rgba(0,0,0,0.35)] hover:text-red-300 sm:text-lg"
            >
              {SITE.phoneDisplay}
            </a>
          ) : null}
        </div>
        <div
          className={cn(
            "inline-flex max-w-full rounded-sm font-display font-bold uppercase tracking-[0.14em]",
            isFooter &&
              "mt-2 bg-brand-forest-light px-3 py-2 text-xs text-white sm:text-sm",
            isHeader &&
              "mt-6 bg-brand-forest px-8 py-3 text-[1.95rem] text-white sm:text-[2.1rem]",
            isContact &&
              "mt-2 bg-brand-forest px-2.5 py-1 text-[0.65rem] text-white sm:text-[0.7rem]",
          )}
        >
          Tree Service
        </div>
        <p
          className={cn(
            "font-display font-semibold uppercase leading-snug tracking-[0.2em]",
            isFooter && "mt-2.5 text-[0.65rem] text-white/70 sm:text-xs",
            isHeader &&
              "mt-8 text-[1.74rem] text-brand-muted sm:text-[1.86rem]",
            isContact &&
              "mt-2 text-[0.58rem] text-brand-muted sm:text-[0.62rem]",
          )}
        >
          {areasLine}
        </p>
      </div>
    </div>
  );
}
