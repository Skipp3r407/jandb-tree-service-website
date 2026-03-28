"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { SiteBrandMark } from "@/components/layout/SiteBrandMark";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menus after navigation without synchronous setState-in-effect (eslint). */
  useEffect(() => {
    const id = window.setTimeout(() => {
      setOpen(false);
      setServicesOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled
          ? "border-brand-border bg-white/95 shadow-[var(--shadow-card)] backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label={`${SITE.name} home`}
        >
          <SiteBrandMark variant="header" />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              const active = item.children.some((c) =>
                isActive(pathname, c.href),
              );
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition",
                      active
                        ? "bg-brand-forest/8 text-brand-forest"
                        : "text-brand-charcoal hover:bg-black/5",
                    )}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-1 transition",
                      servicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="min-w-[240px] rounded-xl border border-brand-border bg-white p-2 shadow-[var(--shadow-soft)]">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-medium transition",
                            isActive(pathname, sub.href)
                              ? "bg-brand-forest/10 text-brand-forest"
                              : "text-brand-charcoal hover:bg-black/5",
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition",
                  isActive(pathname, item.href)
                    ? "bg-brand-forest/8 text-brand-forest"
                    : "text-brand-charcoal hover:bg-black/5",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm font-bold text-brand-charcoal shadow-sm transition hover:border-brand-forest/30"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            {SITE.phoneDisplay}
          </a>
          <Button href="/contact" variant="primary" className="!py-2.5 !text-sm">
            Free Estimate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div key={item.href} className="rounded-xl bg-black/[0.03] p-2">
                    <p className="px-2 py-1 text-xs font-bold uppercase tracking-wide text-brand-muted">
                      {item.label}
                    </p>
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm font-semibold",
                          isActive(pathname, sub.href)
                            ? "bg-white text-brand-forest shadow-sm"
                            : "text-brand-charcoal",
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-semibold",
                    isActive(pathname, item.href)
                      ? "bg-brand-forest/10 text-brand-forest"
                      : "text-brand-charcoal",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-brand-border pt-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-forest py-3 font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Get Free Estimate
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
