import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Kumar — Full Stack Web Developer",
  description:
    "A Frontend Engineer passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "nigeria",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Sagar Kumar — Full Stack Web Developer",
    description:
      "Frontend Engineer formerly at Bluechip Technologies, passionate about crafting next-gen software and creative websites. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "/",
    siteName: "/",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Sagar Kumar — Full Stack Web Developer",
      },
      {
        url: "#",
        width: 800,
        height: 800,
        alt: "Sagar Kumar — Full Stack Web Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Kumar — Full Stack Web Developer",
    description:
      "Frontend Engineer at Bluechip Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    creator: "@Ade_the_great",
    images: ["#"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
