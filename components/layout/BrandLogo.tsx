import Image from "next/image";
import { legacyImage, SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

/** File on disk: `public/images/logo.png` → URL `/images/logo.png`. */
const LOGO_SRC = legacyImage("logo.png");

/**
 * Raster logo only (not the CSS wordmark). Header/footer/contact all use this file.
 * Footer uses multiply to knock out a white mat on charcoal.
 */
export function BrandLogo({
  variant,
  priority = false,
  className,
}: {
  variant: "header" | "footer" | "contact";
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={LOGO_SRC}
      alt={SITE.name}
      width={748}
      height={176}
      priority={priority}
      className={cn(
        variant === "header" &&
          "h-[7.65rem] w-auto max-h-[9.35rem] max-w-[min(85vw,816px)] object-contain object-left sm:h-[9.35rem] max-md:origin-left max-md:scale-[0.62]",
        variant === "footer" &&
          "h-[7.65rem] w-auto max-h-[9.35rem] max-w-[min(92vw,816px)] object-contain object-left mix-blend-multiply sm:h-[9.35rem]",
        variant === "contact" &&
          "mx-auto h-auto max-h-52 w-full max-w-lg object-contain object-center sm:max-h-64",
        className,
      )}
    />
  );
}
