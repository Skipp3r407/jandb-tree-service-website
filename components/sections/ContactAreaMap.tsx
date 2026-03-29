import { SITE } from "@/lib/site-config";

type Props = {
  className?: string;
  /** When true, use a taller frame (home contact column). */
  variant?: "default" | "tall";
};

/**
 * Embedded map for service area / contact columns. Set `contactMapEmbedSrc` in site-config
 * (Google Maps → Share → Embed a map) or rely on the default regional view.
 */
export function ContactAreaMap({ className = "", variant = "default" }: Props) {
  const src =
    SITE.contactMapEmbedSrc ||
    "https://maps.google.com/maps?q=DeBary%20FL&t=&z=10&ie=UTF8&iwloc=&output=embed";

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-brand-border bg-black/5 ${className}`}
    >
      <div
        className={
          variant === "tall"
            ? "aspect-[4/3] min-h-[220px] sm:min-h-[260px]"
            : "aspect-video min-h-[200px]"
        }
      >
        <iframe
          title={`${SITE.name} service area map`}
          src={src}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
