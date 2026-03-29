import Image from "next/image";
import { legacyImage, SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

/** `public/images/logo.png` → `/images/logo.png` (owner-maintained file). */
const LOGO_SRC = legacyImage("logo.png");

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
          "h-[7.65rem] w-auto max-h-[9.35rem] max-w-[min(92vw,816px)] object-contain object-left sm:h-[9.35rem]",
        variant === "contact" &&
          "mx-auto h-auto max-h-52 w-full max-w-lg object-contain object-center sm:max-h-64",
        className,
      )}
    />
  );
}
