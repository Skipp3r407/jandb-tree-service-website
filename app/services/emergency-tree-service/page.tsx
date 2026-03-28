import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { emergencyFaqs } from "@/lib/faqs";
import { getServiceContent, serviceMetadata } from "@/lib/service-content";

export const metadata: Metadata = serviceMetadata("emergency-tree-service");

export default function EmergencyPage() {
  const content = getServiceContent("emergency-tree-service");
  return <ServicePageLayout content={content} faqs={emergencyFaqs} />;
}
