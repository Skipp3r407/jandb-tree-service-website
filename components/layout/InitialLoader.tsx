"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine } from "lucide-react";
import { SITE } from "@/lib/site-config";

const KEY = "jbs_initial_loader_seen";

export function InitialLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let hideId: number | undefined;
    const startId = window.setTimeout(() => {
      try {
        if (sessionStorage.getItem(KEY)) return;
      } catch {
        /* ignore */
      }
      setShow(true);
      hideId = window.setTimeout(() => setShow(false), 1500);
    }, 0);
    return () => {
      window.clearTimeout(startId);
      if (hideId) window.clearTimeout(hideId);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {
          /* ignore */
        }
      }}
    >
      {show ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-4 text-white"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-forest shadow-lg">
              <TreePine className="h-9 w-9" aria-hidden />
            </span>
            <div className="text-center">
              <p className="font-display text-lg font-bold tracking-tight">
                {SITE.name}
              </p>
              <p className="text-sm text-white/70">{SITE.primaryArea}</p>
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full w-1/3 rounded-full bg-brand-accent"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
