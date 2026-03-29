import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SocialMediaIcons } from "@/components/layout/SocialMediaIcons";
import { NAV, SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <SocialMediaIcons variant="footer" />
            <Link
              href="/"
              className="mt-5 inline-block font-display text-lg font-bold text-white hover:underline"
            >
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE.description}
            </p>
            <a
              href={SITE.bbbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Image
                src="https://seal-centralflorida.bbb.org/seals/blue-seal-120-61-jb39streeservice-153251111.png"
                alt="BBB Accredited Business"
                width={120}
                height={61}
                className="opacity-90"
              />
            </a>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV.filter((n) => !("children" in n)).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/85 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-white/85 hover:text-white"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center gap-2 font-semibold text-white hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex gap-2 text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>
                  {SITE.addressLine}
                  <br />
                  {SITE.hqCity}, {SITE.state}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              Hours
            </h3>
            <ul className="mt-4 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm text-white/75">
              {SITE.businessHours.map((h) => (
                <li key={h.label} className="contents">
                  <span className="shrink-0 text-white/55">{h.label}</span>
                  <span className="min-w-0 font-medium leading-snug text-white/90">
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {SITE.legalName}. Owner {SITE.owner}. All
          rights reserved.
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#0a0c0b] py-4 text-center">
        <p className="text-sm text-white/90">
          Website Design by{" "}
          <a
            href="https://elevatedigitalstudios.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-300/95 underline-offset-2 transition hover:text-cyan-200 hover:underline [text-shadow:0_0_12px_rgba(34,211,238,0.35)]"
          >
            Elevate Digital Studio
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
