import Link from "next/link";
import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce — Alan HG",
};

export default function EcommercePage() {
  return (
    <>
      <Header />
      <article style={{ padding: "1rem", maxWidth: "600px" }}>
        <p style={{ marginBottom: "2.5rem" }}>
          25+ Shopify store builds as sole developer, consultant &
          strategist.
        </p>

        <section id="lost-and-found" style={{ marginBottom: "2.5rem" }}>
          <Link
            href="https://shoplostfound.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lost & Found
          </Link>
          <p style={{ marginTop: "0.25rem" }}>
            Toronto&apos;s premier menswear boutique on Ossington. 70+ brands
            including The Real McCoy&apos;s, Beams Plus, Paraboot & Alden.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Sole Shopify developer — theme development, Klaviyo email
            integration, PLP/PDP UX, search & filtering, cart flows,
            cross-browser fixes & ongoing maintenance. Consulting on agentic
            shopping and ChatGPT/Perplexity product listings.
          </p>
        </section>

        <section id="neema-naz" style={{ marginBottom: "2.5rem" }}>
          <Link
            href="https://neemanaz.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Neema Naz
          </Link>
          <p style={{ marginTop: "0.25rem" }}>
            Iranian-Canadian comedian, actor & content creator. 800M+ views
            worldwide, 500K+{" "}
            <Link
              href="https://www.instagram.com/neemanaz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>{" "}
            followers. My Estupid Life world tour across 35+ cities.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store — merch, tour dates & content hub.
          </p>
        </section>

        <section id="swoosh-god" style={{ marginBottom: "2.5rem" }}>
          <Link
            href="https://www.instagram.com/swooshgod/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Swoosh God
          </Link>
          <p style={{ marginTop: "0.25rem" }}>
            SoundCloud rap pioneer. Discovered by Playboi Carti, collabs with
            Lil Uzi Vert, Juicy J & Rich The Kid. NBA2K soundtrack, A$AP
            Rocky&apos;s AWGE DVD.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store — merch drops & fulfillment.
          </p>
        </section>

        <section id="marcus-troy" style={{ marginBottom: "2.5rem" }}>
          <Link
            href="https://marcustroy.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marcus Troy
          </Link>
          <p style={{ marginTop: "0.25rem" }}>
            Montr&eacute;al multidisciplinary artist. Work with Converse,
            Nike, Levi&apos;s & Nylon Magazine. Featured on{" "}
            <Link
              href="https://hypebeast.com/tags/marcus-troy"
              rel="noopener noreferrer"
              target="_blank"
            >
              Hypebeast
            </Link>
            .
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store — art prints, apparel & drops.
          </p>
        </section>
      </article>
    </>
  );
}
