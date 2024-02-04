import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Alan HG",
  description: "Alan HG's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="icon"
          href="/favicons/favicon.ico"
          sizes="16x16 32x32 48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-144x144.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />
        <link rel="mask-icon" href="/favicons/favicon.svg" color="#5bbad5" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <body className={ibmPlexSans.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
