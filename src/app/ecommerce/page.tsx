import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce — Alan HG",
};

export default function EcommercePage() {
  return (
    <>
      <Header />
      <article
        style={{
          padding: "1rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <p style={{ marginBottom: "2.5rem", fontWeight: "bold" }}>
          25+ Shopify store builds as sole developer, consultant &
          strategist.
        </p>

        <section id="lost-and-found" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontWeight: "bold" }}>Lost & Found</p>
          <p style={{ marginTop: "0.25rem" }}>
            Toronto&apos;s premier menswear boutique on Ossington. 70+ brands
            including The Real McCoy&apos;s, Beams Plus, Paraboot & Alden.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Sole Shopify developer. Theme development, Klaviyo email
            integration, PLP/PDP UX, search & filtering, cart flows,
            cross-browser fixes & ongoing maintenance. Consulting on agentic
            shopping and ChatGPT/Perplexity product listings.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link
              href="https://shoplostfound.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Store
            </Link>
            {" / "}
            <Link
              href="https://www.instagram.com/shoplostfound/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>
          </p>
        </section>

        <section id="neema-naz" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontWeight: "bold" }}>Neema Naz</p>
          <p style={{ marginTop: "0.25rem" }}>
            Iranian-Canadian comedian, actor & content creator. 800M+ views
            worldwide, 500K+ Instagram followers. My Estupid Life world tour
            across 35+ cities.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store. Merch, tour dates & content hub.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link
              href="https://neemanaz.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Site
            </Link>
            {" / "}
            <Link
              href="https://www.instagram.com/neemanaz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>
          </p>
        </section>

        <section id="swoosh-god" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontWeight: "bold" }}>Swoosh God</p>
          <p style={{ marginTop: "0.25rem" }}>
            SoundCloud rap pioneer. Discovered by Playboi Carti, collabs with
            Lil Uzi Vert, Juicy J & Rich The Kid. NBA2K soundtrack, A$AP
            Rocky&apos;s AWGE DVD.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store. Merch drops & fulfillment.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link
              href="https://www.instagram.com/swooshgod/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>
            {" / "}
            <Link
              href="https://open.spotify.com/artist/6jrVq7qYCGFGirqPS31MQ3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Spotify
            </Link>
          </p>
        </section>

        <section id="marcus-troy" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontWeight: "bold" }}>Marcus Troy</p>
          <p style={{ marginTop: "0.25rem" }}>
            Montr&eacute;al multidisciplinary artist. Work with Converse,
            Nike, Levi&apos;s & Nylon Magazine. Featured on Hypebeast.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Built Shopify store. Art prints, apparel & drops.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link
              href="https://monarmoire.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Store
            </Link>
            {" / "}
            <Link
              href="https://www.instagram.com/marcustroy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>
          </p>
        </section>

        <nav style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Link href="/" aria-label="Return to homepage">
            <Image
              src="/icons/house-solid.svg"
              alt=""
              aria-hidden="true"
              width={27.5}
              height={27.5}
              className="link-icon"
            />
          </Link>
        </nav>
      </article>
    </>
  );
}
