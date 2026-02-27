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
        <p>
          25+ Shopify store builds as sole developer, consultant &
          strategist.
        </p>

        <ul
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginTop: "1rem",
          }}
        >
          <li id="lost-and-found">
            <Link
              href="https://shoplostfound.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lost & Found
            </Link>
            <p style={{ margin: "0.375rem 0" }}>
              Toronto&apos;s premier menswear boutique on Ossington. 70+
              brands including The Real McCoy&apos;s, Beams Plus, Paraboot &
              Alden. Sole Shopify developer — theme development, Klaviyo
              email integration, PLP/PDP UX, search & filtering, cart flows,
              cross-browser fixes & ongoing maintenance. Consulting on
              agentic shopping and ChatGPT/Perplexity product listings.
            </p>
          </li>

          <li id="neema-naz" style={{ marginTop: "1rem" }}>
            <Link
              href="https://neemanaz.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Neema Naz
            </Link>
            <p style={{ margin: "0.375rem 0" }}>
              Iranian-Canadian comedian, actor & content creator. 800M+
              views worldwide, 500K+{" "}
              <Link
                href="https://www.instagram.com/neemanaz/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </Link>{" "}
              followers. My Estupid Life world tour across 35+ cities. Built
              Shopify store — merch, tour dates & content hub.
            </p>
          </li>

          <li id="swoosh-god" style={{ marginTop: "1rem" }}>
            <Link
              href="https://www.instagram.com/swooshgod/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Swoosh God
            </Link>
            <p style={{ margin: "0.375rem 0" }}>
              SoundCloud rap pioneer. Discovered by Playboi Carti, collabs
              with Lil Uzi Vert, Juicy J & Rich The Kid. NBA2K soundtrack,
              A$AP Rocky&apos;s AWGE DVD. Built Shopify store — merch drops
              & fulfillment.
            </p>
          </li>

          <li id="marcus-troy" style={{ marginTop: "1rem" }}>
            <Link
              href="https://marcustroy.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Marcus Troy
            </Link>
            <p style={{ margin: "0.375rem 0" }}>
              Montr&eacute;al multidisciplinary artist. Work with Converse,
              Nike, Levi&apos;s & Nylon Magazine. Featured on{" "}
              <Link
                href="https://hypebeast.com/tags/marcus-troy"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hypebeast
              </Link>
              . Built Shopify store — art prints, apparel & drops.
            </p>
          </li>
        </ul>
      </article>
    </>
  );
}
