import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionSection } from "@/components/sections/MotionSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { SERVICE_AREAS, SITE } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_AREAS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = SERVICE_AREAS.find((c) => c.slug === slug);
  if (!city) return { title: "Area" };
  return {
    title: `Tree Service in ${city.name}, FL | ${SITE.name}`,
    description: `${SITE.name} — tree removal, trimming, stump grinding, and emergency tree service in ${city.name}, ${city.county} County. Call ${SITE.phoneDisplay}.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = SERVICE_AREAS.find((c) => c.slug === slug);
  if (!city) notFound();

  const services = [
    { href: "/services/tree-removal", label: `Tree removal in ${city.name}` },
    {
      href: "/services/tree-trimming-pruning",
      label: `Tree trimming in ${city.name}`,
    },
    {
      href: "/services/stump-grinding",
      label: `Stump grinding in ${city.name}`,
    },
    {
      href: "/services/emergency-tree-service",
      label: `Emergency tree service in ${city.name}`,
    },
    { href: "/services/land-clearing", label: `Land clearing in ${city.name}` },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MotionSection>
        <p className="text-sm font-bold uppercase tracking-widest text-brand-forest-light">
          {city.county} County, FL
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
          Tree service in {city.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-brand-muted">{city.blurb}</p>
      </MotionSection>

      <MotionSection className="mt-12 rounded-2xl border border-brand-border bg-white p-8 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-xl font-bold text-brand-charcoal">
          Services homeowners search for in {city.name}
        </h2>
        <p className="mt-3 text-brand-muted">
          When you need{" "}
          <strong className="text-brand-charcoal">
            tree service in {city.name}
          </strong>
          , you want a licensed crew that knows local species, storm patterns,
          and tight residential lots. {SITE.name} brings {SITE.yearsInBusiness}{" "}
          years of experience across {SITE.primaryArea}, with fast scheduling
          and honest scopes.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="font-semibold text-brand-forest hover:underline"
              >
                {s.label} →
              </Link>
            </li>
          ))}
        </ul>
      </MotionSection>

      <MotionSection className="mt-12">
        <CTABanner
          title={`Need a tree pro in ${city.name}?`}
          subtitle="Call for emergencies or send your details for a scheduled estimate."
        />
      </MotionSection>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/service-areas" variant="outline">
          All service areas
        </Button>
        <Button href="/contact" variant="primary">
          Free estimate
        </Button>
      </div>
    </div>
  );
}
