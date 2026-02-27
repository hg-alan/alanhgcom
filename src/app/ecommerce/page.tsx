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
        <ul
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
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
              Sole Shopify developer for Toronto&apos;s premier menswear
              boutique. Quality, craftsmanship, heritage & the classics.
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
              Shopify development for Iranian-Canadian comedian, actor, and
              content creator. 800M+ views worldwide, 500K+{" "}
              <Link
                href="https://www.instagram.com/neemanaz/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </Link>{" "}
              followers.
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
              Shopify development for Nike culture and sneaker content brand.
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
              Shopify development for Montr&eacute;al-based creative platform.
              Art, culture, lifestyle &{" "}
              <Link
                href="https://www.instagram.com/marcustroy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </Link>
              .
            </p>
          </li>
        </ul>
      </article>
    </>
  );
}
