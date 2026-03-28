import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCall } from "@/components/layout/StickyMobileCall";
import { FloatingEstimate } from "@/components/layout/FloatingEstimate";
import { InitialLoader } from "@/components/layout/InitialLoader";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jandbstreeservices.com"),
  title: {
    default: `${SITE.name} | Tree Removal, Trimming & Emergency Service — Central Florida`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Professional Tree Service in Central Florida`,
    description: SITE.description,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd />
        <InitialLoader />
        <Header />
        <main className="flex-1 pb-[5.5rem] md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCall />
        <FloatingEstimate />
        <ChatWidget />
      </body>
    </html>
  );
}
