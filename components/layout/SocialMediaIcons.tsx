import Link from "next/link";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const YT_WATCH = `https://www.youtube.com/watch?v=${SITE.youtubeIds[0]}`;

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest";

export function SocialMediaIcons({
  variant,
  className,
}: {
  variant: "header" | "footer" | "contact";
  className?: string;
}) {
  const isFooter = variant === "footer";
  const isContact = variant === "contact";

  const base = cn(
    "inline-flex items-center justify-center rounded-full transition",
    focusRing,
    variant === "header" &&
      "h-11 w-11 border border-brand-border/40 bg-white shadow-sm hover:bg-black/[0.03]",
    isFooter &&
      "h-11 w-11 bg-white/10 text-white hover:bg-white/20",
    isContact &&
      "h-14 w-14 border border-brand-border/50 bg-white shadow-sm hover:bg-brand-forest/5",
  );

  const iconSm = "h-[55%] w-[55%]";
  const iconLg = "h-[56%] w-[56%]";

  return (
    <nav
      className={cn(
        "flex items-center gap-3",
        isContact && "justify-center gap-4",
        className,
      )}
      aria-label="Social media"
    >
      <Link
        href={SITE.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          (variant === "header" || isContact) && "text-[#1877F2]",
          isFooter && "text-white",
        )}
        aria-label="Facebook"
      >
        <IconFacebook className={isContact ? iconLg : iconSm} />
      </Link>
      <Link
        href={YT_WATCH}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          (variant === "header" || isContact) && "text-[#FF0000]",
          isFooter && "text-white",
        )}
        aria-label="YouTube"
      >
        <IconYoutube className={isContact ? iconLg : iconSm} />
      </Link>
    </nav>
  );
}
