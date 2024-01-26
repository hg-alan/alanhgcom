import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: '400'}); 

export const metadata = {
  title: "Alan HG",
  description: "Alan HG's personal website",
};

export default function RootLayout({ children }) {
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
