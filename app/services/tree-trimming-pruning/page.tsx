import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { trimmingFaqs } from "@/lib/faqs";
import { getServiceContent, serviceMetadata } from "@/lib/service-content";

export const metadata: Metadata = serviceMetadata("tree-trimming-pruning");

export default function TrimmingPage() {
  const content = getServiceContent("tree-trimming-pruning");
  return <ServicePageLayout content={content} faqs={trimmingFaqs} />;
}
