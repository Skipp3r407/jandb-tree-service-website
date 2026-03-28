"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function StickyMobileCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-border bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-forest py-3.5 text-base font-bold text-white shadow-md active:scale-[0.99]"
      >
        <Phone className="h-5 w-5" aria-hidden />
        Call Now — {SITE.phoneDisplay}
      </a>
    </div>
  );
}
