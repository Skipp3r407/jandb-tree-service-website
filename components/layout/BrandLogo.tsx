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
  variant: "header" | "footer" | "contact" | "splash";
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
          "h-[4.01625rem] w-auto max-h-[4.90875rem] max-w-[min(85vw,428px)] object-contain object-left sm:h-[4.90875rem]",
        variant === "footer" &&
          "h-[2.10375rem] w-auto max-h-[2.57125rem] max-w-[min(92vw,224px)] object-contain object-left sm:h-[2.57125rem]",
        variant === "contact" &&
          "mx-auto h-auto max-h-[6.5rem] w-full max-w-[16rem] object-contain object-center sm:max-h-[8rem]",
        variant === "splash" &&
          "mx-auto h-auto max-h-[5.5rem] w-full max-w-[min(90vw,20rem)] object-contain object-center sm:max-h-[6.5rem] sm:max-w-[22rem]",
        className,
      )}
    />
  );
}
