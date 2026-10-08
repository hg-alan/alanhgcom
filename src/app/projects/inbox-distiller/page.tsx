import Link from "next/link";
import Header from "@/app/components/Header";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Inbox Distiller — Alan HG",
  description: "A source-linked briefing built to keep evidence, interpretation and uncertainty visible.",
  path: "/projects/inbox-distiller",
});

export default function InboxDistillerProject() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ maxWidth: "680px", margin: "2rem auto 4rem", padding: "0 1.25rem" }}>
        <Link href="/">← Back to Alan HG</Link>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", lineHeight: 1.15, marginBottom: "1rem" }}>Inbox Distiller</h1>
        <p>Short briefings with sources you can inspect.</p>
        <p>
          Inbox Distiller turns approved sources into a readable briefing. Each
          published conclusion links to evidence, explains why it matters, and
          keeps the open questions visible. A second model challenges proposed
          principles before editorial review.
        </p>
        <p>
          I built it first for my own newsletters, then added a separate public
          reading experience. Private inbox data stays separate from approved
          public sources. Readers can browse without an account; verified members
          can suggest sources, vote, discuss, and choose whether to receive email.
        </p>
        <p style={{ borderTop: "1px solid #c8c8c8", marginTop: "2rem", paddingTop: "1rem" }}>
          The public launch preview is under review. Public access and live
          subscription delivery are not open yet.
        </p>
      </main>
    </>
  );
}
