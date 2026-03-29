import { Phone, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { MotionSection } from "@/components/sections/MotionSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BeforeAfterPreview } from "@/components/sections/BeforeAfterPreview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { ServiceAreaGrid } from "@/components/sections/ServiceAreaGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { VideoEmbed } from "@/components/sections/VideoEmbed";
import { Button } from "@/components/ui/Button";
import { HOME_SERVICES, SITE, TESTIMONIALS } from "@/lib/site-config";
import { ContactAreaMap } from "@/components/sections/ContactAreaMap";

/**
 * App Router root route: MUST live at `app/page.tsx` so `/` resolves (not 404 on Vercel).
 * Shell (html/body, header, footer) is in `app/layout.tsx`.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <MotionSection>
          <SectionHeading
            eyebrow="Services"
            title="Complete tree care for Florida properties"
            subtitle="From precision pruning to hazardous removals and land clearing, we bring the right equipment and experienced crew to every job."
          />
        </MotionSection>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((s, i) => (
            <MotionSection key={s.title} delay={i * 0.05}>
              <ServiceCard
                title={s.title}
                excerpt={s.excerpt}
                href={s.slug}
                image={s.image}
                icon={s.icon}
                headerVariant={
                  "headerVariant" in s && s.headerVariant === "emergency"
                    ? "emergency"
                    : "photo"
                }
              />
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeading
              eyebrow="Why J&B's"
              title="Built on safety, experience, and respect for your property"
              subtitle="We are not a fly-by-night crew — Central Florida homeowners have trusted our team for decades."
            />
          </MotionSection>
          <MotionSection className="mt-12">
            <WhyChoose />
          </MotionSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <MotionSection>
          <SectionHeading
            eyebrow="Gallery"
            title="See the quality of our work"
            subtitle="Hover to preview — click any image to open the lightbox."
          />
        </MotionSection>
        <MotionSection className="mt-10">
          <GalleryGrid showFilters={false} maxItems={6} />
        </MotionSection>
        <MotionSection className="mt-16">
          <SectionHeading
            eyebrow="Before & after"
            title="Real transformations on real properties"
            align="left"
            className="!mx-0 !text-left"
          />
          <div className="mt-8">
            <BeforeAfterPreview />
          </div>
        </MotionSection>
      </section>

      <section className="border-y border-brand-border bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeading
              eyebrow="On video"
              title="Watch our crews in action"
              subtitle="Footage from real jobs — equipment, technique, and professional cleanup."
            />
          </MotionSection>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {SITE.youtubeIds.map((id) => (
              <VideoEmbed
                key={id}
                id={id}
                title={`${SITE.name} project video`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <MotionSection>
          <SectionHeading
            eyebrow="Simple process"
            title="Three steps from call to completed job"
          />
        </MotionSection>
        <MotionSection className="mt-12">
          <ProcessSteps />
        </MotionSection>
      </section>

      <section className="bg-brand-forest/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeading
              eyebrow="Reviews"
              title="Neighbors recommend our crew"
              subtitle="Punctual, professional, and focused on cleanup — the way tree work should be done."
            />
          </MotionSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <MotionSection key={t.name} delay={i * 0.04}>
                <ReviewCard {...t} />
              </MotionSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/reviews" variant="outline">
              Read all reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <MotionSection>
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving Central Florida communities"
            subtitle="Local crews, familiar trees, and fast scheduling across Volusia, Seminole, and nearby areas."
          />
        </MotionSection>
        <MotionSection className="mt-10">
          <ServiceAreaGrid limit={6} />
        </MotionSection>
        <div className="mt-10 text-center">
          <Button href="/service-areas" variant="secondary">
            View all service areas
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <MotionSection>
          <CTABanner />
        </MotionSection>
      </section>

      <section className="border-t border-brand-border bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <MotionSection>
              <SectionHeading
                eyebrow="Contact"
                title="Get your free estimate"
                subtitle="Tell us what you need — we reply quickly and schedule on-site evaluations as soon as possible."
                align="left"
                className="!mx-0 !text-left"
              />
              <ul className="mt-8 space-y-4 text-brand-muted">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-accent" />
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="text-lg font-bold text-brand-charcoal hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-accent" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand-accent" />
                  <span>
                    {SITE.addressLine}
                    <br />
                    {SITE.hqCity}, {SITE.state}
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <ContactAreaMap variant="tall" />
              </div>
              <p className="mt-4 text-sm text-brand-muted">
                We&apos;ll respond within 24 hours on estimate requests. For
                emergencies, call now.
              </p>
            </MotionSection>
            <MotionSection>
              <ContactForm />
            </MotionSection>
          </div>
        </div>
      </section>
    </>
  );
}
