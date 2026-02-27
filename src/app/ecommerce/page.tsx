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
          25+ Shopify store builds. Development, strategy & implementation.
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
              Toronto&apos;s premier menswear boutique. Sole Shopify developer
              — store build, theme development, integrations & ongoing
              maintenance.
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
              Iranian-Canadian comedian, actor & content creator. 800M+ views
              worldwide, 500K+{" "}
              <Link
                href="https://www.instagram.com/neemanaz/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </Link>{" "}
              followers. Built full Shopify storefront — merch, tour dates &
              content hub.
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
              Nike culture & sneaker content brand. Built Shopify store from
              scratch — product catalog, drops & fulfillment setup.
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
              Montr&eacute;al-based creative platform — art, culture &
              lifestyle. Built Shopify store for prints, apparel &{" "}
              <Link
                href="https://www.instagram.com/marcustroy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </Link>
              -driven drops.
            </p>
          </li>
        </ul>
      </article>
    </>
  );
}
