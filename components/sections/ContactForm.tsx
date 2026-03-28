"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const defaultServiceOptions = [
  "Tree removal",
  "Trimming / pruning",
  "Stump grinding",
  "Emergency",
  "Land clearing",
  "Other / not sure",
];

export function ContactForm({
  className,
  id,
  serviceOptions = defaultServiceOptions,
}: {
  className?: string;
  id?: string;
  serviceOptions?: string[];
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-brand-border bg-brand-forest/5 p-8 text-center",
          className,
        )}
      >
        <p className="font-display text-xl font-bold text-brand-charcoal">
          Thanks — we&apos;ll be in touch shortly.
        </p>
        <p className="mt-2 text-brand-muted">
          We typically respond within 24 hours. For urgent hazards, please call.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-brand-charcoal">Name</span>
          <input
            required
            name="name"
            className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-brand-charcoal">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
            placeholder="(386) 555-0100"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-brand-charcoal">Email</span>
        <input
          required
          name="email"
          type="email"
          className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
          placeholder="you@email.com"
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-brand-charcoal">
          Service needed
        </span>
        <select
          name="service"
          required
          className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-brand-charcoal">
          Property address{" "}
          <span className="font-normal text-brand-muted">(optional)</span>
        </span>
        <input
          name="address"
          className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
          placeholder="Street, city"
          autoComplete="street-address"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-brand-charcoal">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-forest/20 focus:ring-2"
          placeholder="Tell us about the trees, access, and urgency."
        />
      </label>
      <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto">
        Send request
      </Button>
      <p className="text-xs text-brand-muted">
        This form is a demo — connect it to your CRM, email API, or form handler
        before launch.
      </p>
    </form>
  );
}
