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
        <title>Alan HG</title>
        <meta name="description" content="Alan HG's personal website" />

        <meta itemprop="name" content="Alan HG" />
        <meta itemprop="description" content="Alan HG's personal website" />
        <meta
          itemprop="image"
          content="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e7143fe-27cd-42e9-9994-01023fad5379/d26m3ox-f8a4739f-e0be-41b9-a070-e6358386b84e.jpg/v1/fill/w_589,h_800,q_75,strp/have_you_seen_this_chicken__by_shortwired_d26m3ox-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNWU3MTQzZmUtMjdjZC00MmU5LTk5OTQtMDEwMjNmYWQ1Mzc5XC9kMjZtM294LWY4YTQ3MzlmLWUwYmUtNDFiOS1hMDcwLWU2MzU4Mzg2Yjg0ZS5qcGciLCJ3aWR0aCI6Ijw9NTg5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SNsr4MD7Wlu0msRqYfMiPZP7e_ij7tNng41aMMj0sto"
        />

        <meta property="og:url" content="https://www.alanhg.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alan HG" />
        <meta property="og:description" content="Alan HG's personal website" />
        <meta
          property="og:image"
          content="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e7143fe-27cd-42e9-9994-01023fad5379/d26m3ox-f8a4739f-e0be-41b9-a070-e6358386b84e.jpg/v1/fill/w_589,h_800,q_75,strp/have_you_seen_this_chicken__by_shortwired_d26m3ox-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNWU3MTQzZmUtMjdjZC00MmU5LTk5OTQtMDEwMjNmYWQ1Mzc5XC9kMjZtM294LWY4YTQ3MzlmLWUwYmUtNDFiOS1hMDcwLWU2MzU4Mzg2Yjg0ZS5qcGciLCJ3aWR0aCI6Ijw9NTg5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SNsr4MD7Wlu0msRqYfMiPZP7e_ij7tNng41aMMj0sto"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alan HG" />
        <meta name="twitter:description" content="Alan HG's personal website" />
        <meta
          name="twitter:image"
          content="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e7143fe-27cd-42e9-9994-01023fad5379/d26m3ox-f8a4739f-e0be-41b9-a070-e6358386b84e.jpg/v1/fill/w_589,h_800,q_75,strp/have_you_seen_this_chicken__by_shortwired_d26m3ox-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNWU3MTQzZmUtMjdjZC00MmU5LTk5OTQtMDEwMjNmYWQ1Mzc5XC9kMjZtM294LWY4YTQ3MzlmLWUwYmUtNDFiOS1hMDcwLWU2MzU4Mzg2Yjg0ZS5qcGciLCJ3aWR0aCI6Ijw9NTg5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SNsr4MD7Wlu0msRqYfMiPZP7e_ij7tNng41aMMj0sto"
        />
      </Head>
      <body className={ibmPlexSans.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
