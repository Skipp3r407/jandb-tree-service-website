import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white shadow-md hover:bg-brand-accent-hover hover:shadow-lg",
  secondary:
    "bg-brand-forest text-white shadow-md hover:bg-brand-forest-mid hover:shadow-lg",
  ghost: "bg-white/10 text-white border border-white/25 hover:bg-white/20",
  outline:
    "border-2 border-brand-forest text-brand-forest bg-transparent hover:bg-brand-forest hover:text-white",
};

export function Button({
  className,
  variant = "primary",
  href,
  children,
  type = "button",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
