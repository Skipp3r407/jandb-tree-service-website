import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { landClearingFaqs } from "@/lib/faqs";
import { getServiceContent, serviceMetadata } from "@/lib/service-content";

export const metadata: Metadata = serviceMetadata("land-clearing");

export default function LandClearingPage() {
  const content = getServiceContent("land-clearing");
  return <ServicePageLayout content={content} faqs={landClearingFaqs} />;
}
