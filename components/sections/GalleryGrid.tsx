"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { legacyImage, GALLERY_ITEMS } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const filters = [
  { id: "all", label: "All" },
  { id: "removal", label: "Removal" },
  { id: "trimming", label: "Trimming" },
  { id: "stump", label: "Stumps" },
  { id: "equipment", label: "Equipment" },
  { id: "before-after", label: "Before / After" },
] as const;

export function GalleryGrid({
  showFilters = true,
  maxItems,
}: {
  showFilters?: boolean;
  maxItems?: number;
}) {
  const [filter, setFilter] =
    useState<(typeof filters)[number]["id"]>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const source = useMemo(() => {
    const base = maxItems ? GALLERY_ITEMS.slice(0, maxItems) : GALLERY_ITEMS;
    return base;
  }, [maxItems]);

  const items = useMemo(() => {
    if (filter === "all") return source;
    return source.filter((g) => g.category === filter);
  }, [filter, source]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                filter === f.id
                  ? "bg-brand-forest text-white shadow-md"
                  : "bg-white text-brand-charcoal ring-1 ring-brand-border hover:bg-black/[0.03]",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item) => {
          const globalIndex = GALLERY_ITEMS.findIndex(
            (g) => g.src === item.src && g.alt === item.alt,
          );
          return (
            <li key={item.src + item.alt}>
              <button
                type="button"
                onClick={() => setLightbox(globalIndex)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-brand-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-forest"
              >
                <Image
                  src={legacyImage(item.src)}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, 33vw"
                />
                <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {lightbox !== null ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-charcoal shadow-md"
                onClick={() => setLightbox(null)}
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[4/3] w-[min(100vw-2rem,1100px)]">
                <Image
                  src={legacyImage(GALLERY_ITEMS[lightbox].src)}
                  alt={GALLERY_ITEMS[lightbox].alt}
                  fill
                  className="object-contain bg-black"
                  sizes="100vw"
                />
              </div>
              <p className="bg-black/60 px-4 py-3 text-center text-sm text-white">
                {GALLERY_ITEMS[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
