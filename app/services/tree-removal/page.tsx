import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { removalFaqs } from "@/lib/faqs";
import { getServiceContent, serviceMetadata } from "@/lib/service-content";

export const metadata: Metadata = serviceMetadata("tree-removal");

export default function TreeRemovalPage() {
  const content = getServiceContent("tree-removal");
  return <ServicePageLayout content={content} faqs={removalFaqs} />;
}
