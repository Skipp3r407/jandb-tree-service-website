import Image from "next/image";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

/** Matches header/footer so brand mark stays one size everywhere. */
export const brandLogoImageClassName =
  "h-[3.825rem] w-auto max-h-[4.675rem] max-w-[min(85vw,408px)] object-contain object-left sm:h-[4.675rem]";

export function BrandLogo({
  priority = false,
  className,
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={SITE.logoSrc}
      alt={SITE.name}
      width={374}
      height={88}
      priority={priority}
      className={cn(brandLogoImageClassName, className)}
    />
  );
}
