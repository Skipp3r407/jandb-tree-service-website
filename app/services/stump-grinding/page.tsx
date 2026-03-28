import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { stumpFaqs } from "@/lib/faqs";
import { getServiceContent, serviceMetadata } from "@/lib/service-content";

export const metadata: Metadata = serviceMetadata("stump-grinding");

export default function StumpGrindingPage() {
  const content = getServiceContent("stump-grinding");
  return <ServicePageLayout content={content} faqs={stumpFaqs} />;
}
