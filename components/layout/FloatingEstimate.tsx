"use client";

import Link from "next/link";
import { ClipboardList } from "lucide-react";

export function FloatingEstimate() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-brand-accent px-4 py-3 text-sm font-bold text-white shadow-[var(--shadow-soft)] transition hover:bg-brand-accent-hover hover:shadow-lg md:bottom-8 md:right-8 md:px-5 md:py-3.5 md:text-base"
    >
      <ClipboardList className="h-5 w-5 shrink-0" aria-hidden />
      <span className="max-w-[9rem] leading-tight sm:max-w-none">
        Get estimate
      </span>
    </Link>
  );
}
