import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Alan HG",
  description: "Alan HG's personal website",
  metadataBase: new URL("https://www.alanhg.com"),
  openGraph: {
    type: "website",
    url: "https://www.alanhg.com",
    title: "Alan HG",
    description: "Alan HG's personal website",
    images: ["/favicon.ico"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan HG",
    description: "Alan HG's personal website",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
