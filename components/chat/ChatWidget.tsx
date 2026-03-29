"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronUp, Phone, Send, TreePine, X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/cn";

type Msg = { id: string; role: "user" | "bot"; text: string };

function botReply(text: string): string {
  const t = text.toLowerCase().trim();
  if (!t) {
    return "Ask a quick question, or tap a button below. For emergencies, always call.";
  }
  if (/emergency|storm|fallen|hazard|now|urgent|danger/.test(t)) {
    return `For emergencies (fallen trees, hazards on structures), call ${SITE.phoneDisplay} immediately — we have 24/7 crews.`;
  }
  if (/price|cost|estimate|quote|how much/.test(t)) {
    return "We provide free estimates. Call or use the contact form — we’ll scope the job on-site for an accurate price.";
  }
  if (/hour|open|when|available/.test(t)) {
    return `Typical hours: ${SITE.businessHours[0].value} (${SITE.businessHours[0].label}). Sunday: ${SITE.businessHours[1].value}. Emergency line is always available for hazards.`;
  }
  if (/where|area|city|serve|location/.test(t)) {
    return `We serve ${SITE.primaryArea}, especially Volusia & Seminole counties. See all areas on the Service Areas page.`;
  }
  if (/remov|cut|cutting|take down/.test(t)) {
    return "We handle removals from hazardous trees to tight backyards with controlled rigging. I can point you to the Tree Removal service page.";
  }
  if (/trim|prun|limb/.test(t)) {
    return "Trimming improves safety and tree health. See Tree Trimming & Pruning for what we recommend in Florida.";
  }
  if (/stump|grind/.test(t)) {
    return "Stump grinding clears trip hazards and preps the yard for sod or planting. We size the grinder to your access.";
  }
  if (/clear|lot|brush|bobcat/.test(t)) {
    return "Land clearing from fence-line brush to larger lots — see Land Clearing for scope and equipment.";
  }
  if (/thanks|thank you|bye|ok/.test(t)) {
    return "You’re welcome — call anytime, or request an estimate from the site.";
  }
  return `Thanks for the message. For specifics about your property, call ${SITE.phoneDisplay} or send photos through the contact form.`;
}

const SCROLL_SHOW_AFTER = 360;
const NEAR_BOTTOM_PX = 160;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      id: "welcome",
      role: "bot",
      text: `Hi — I’m the ${SITE.name} assistant. Ask about services, areas, or emergencies, or use the shortcuts.`,
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const { scrollTop, scrollHeight, clientHeight } = root;
      const fromBottom = scrollHeight - scrollTop - clientHeight;
      const tallEnough = scrollHeight > clientHeight + 100;
      setShowScrollTop(
        tallEnough &&
          (scrollTop > SCROLL_SHOW_AFTER || fromBottom < NEAR_BOTTOM_PX),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const pushExchange = useCallback((userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed) return;
    const userMsg: Msg = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    const reply: Msg = {
      id: `b-${Date.now()}`,
      role: "bot",
      text: botReply(trimmed),
    };
    setMessages((m) => [...m, userMsg, reply]);
  }, []);

  const send = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    pushExchange(trimmed);
    setInput("");
  }, [input, pushExchange]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-[9.125rem] right-4 z-[45] flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-brand-forest shadow-[var(--shadow-soft)] transition hover:bg-brand-forest/5 md:bottom-[6.125rem] md:right-8",
          !open && showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0",
        )}
        aria-hidden={open || !showScrollTop}
        aria-label="Back to top"
        tabIndex={open || !showScrollTop ? -1 : 0}
      >
        <ChevronUp className="h-6 w-6" strokeWidth={2.5} aria-hidden />
      </button>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-20 right-4 z-[45] flex h-14 w-14 items-center justify-center rounded-full bg-brand-forest text-white shadow-[var(--shadow-soft)] transition hover:bg-brand-forest-mid md:bottom-8 md:right-8",
          open && "ring-2 ring-brand-accent ring-offset-2",
        )}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open tree service chat"}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden />
        ) : (
          <TreePine className="h-7 w-7" strokeWidth={2.25} aria-hidden />
        )}
      </button>

      {open ? (
        <div
          className="fixed bottom-36 right-4 z-[45] flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-[var(--shadow-soft)] md:bottom-24 md:right-8 md:w-[24rem]"
          role="dialog"
          aria-label="Chat assistant"
        >
          <div className="flex items-center justify-between bg-brand-forest px-4 py-3 text-white">
            <span className="font-display text-sm font-bold">Tree service help</span>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-1 rounded-lg bg-white/15 px-2 py-1 text-xs font-bold hover:bg-white/25"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto px-3 py-3 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "rounded-xl px-3 py-2",
                  m.role === "user"
                    ? "ml-6 bg-brand-forest/10 text-brand-charcoal"
                    : "mr-4 bg-black/[0.04] text-brand-charcoal",
                )}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex flex-wrap gap-1.5 border-t border-brand-border px-3 py-2">
            <Quick
              label="Emergency"
              onClick={() => pushExchange("Emergency tree on my house")}
            />
            <Quick
              label="Estimate"
              onClick={() => pushExchange("How do I get a free estimate?")}
            />
            <Quick
              label="Areas"
              onClick={() => pushExchange("Where do you work?")}
            />
            <Link
              href="/contact"
              className="rounded-full bg-brand-accent px-2.5 py-1 text-xs font-bold text-white hover:bg-brand-accent-hover"
              onClick={() => setOpen(false)}
            >
              Contact form
            </Link>
          </div>
          <div className="flex gap-2 border-t border-brand-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), send())}
              placeholder="Type a question…"
              className="min-w-0 flex-1 rounded-xl border border-brand-border px-3 py-2 text-sm outline-none ring-brand-forest/20 focus:ring-2"
              aria-label="Message"
            />
            <button
              type="button"
              onClick={send}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-forest text-white hover:bg-brand-forest-mid"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="px-3 pb-2 text-[10px] text-brand-muted">
            Automated replies — not a substitute for an on-site assessment.
          </p>
        </div>
      ) : null}
    </>
  );
}

function Quick({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-brand-border bg-white px-2.5 py-1 text-xs font-semibold text-brand-charcoal hover:bg-black/[0.04]"
    >
      {label}
    </button>
  );
}
