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
          "h-[3.825rem] w-auto max-h-[4.675rem] max-w-[min(85vw,408px)] object-contain object-left sm:h-[4.675rem]",
        variant === "footer" &&
          "h-[1.9125rem] w-auto max-h-[2.3375rem] max-w-[min(92vw,204px)] object-contain object-left sm:h-[2.3375rem]",
        variant === "contact" &&
          "mx-auto h-auto max-h-[6.5rem] w-full max-w-[16rem] object-contain object-center sm:max-h-[8rem]",
        className,
      )}
    />
  );
}
