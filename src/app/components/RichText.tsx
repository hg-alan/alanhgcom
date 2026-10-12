import Link from "next/link";
import ArtReference from "./ArtReference";

export default function RichText() {
  return (
    <article className="home-content">
      <p>
        <ArtReference
          href="https://www.untappedcities.com/banksy-in-nyc-day-27-this-site-contains-blocked-messages-in-greenpoint-after-ny-times-rejects-his-op-ed/"
          image="https://storage.ghost.io/c/3e/3b/3e3b259f-e5a2-4287-97e8-4888d22daaef/content/images/wp-content/uploads/2013/11/this-site-contains-blocked-messages-bob-cooley_banksy-oct27-131027_064.jpg"
          description="Banksy's This Site Contains Blocked Messages, photographed by Bob Cooley, on Untapped New York"
        >
          THIS SITE
        </ArtReference>{" "}
        exists in the <em>spirit</em> of &quot;
        <Link
          href="https://youtu.be/kYfNvmF0Bqw?t=53"
          rel="noopener noreferrer"
          target="_blank"
        >
          poking the world
        </Link>
        &quot;:
      </p>

      <ul className="home-sections">
        <li>
          Currently:{" "}
          <ul>
            <li>
              Solutions Engineer @{" "}
              <Link
                href="https://getmosaic.ai"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mosaic AI
              </Link>
            </li>
          </ul>
        </li>

        <li>
          Technical:
          <ul>
            <li>
              LLM + Jev:{" "}
              <Link
                href="https://inboxdistiller.ai"
                rel="noopener noreferrer"
                target="_blank"
              >
                Inbox Distiller
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              Ecommerce:{" "}
              <Link href="/ecommerce#lost-and-found" prefetch={true}>
                Lost & Found
              </Link>
              ,{" "}
              <Link href="/ecommerce#neema-naz" prefetch={true}>
                Neema Naz
              </Link>
              ,{" "}
              <Link href="/ecommerce#swoosh-god" prefetch={true}>
                Swoosh God
              </Link>{" "}
              &{" "}
              <Link href="/ecommerce#marcus-troy" prefetch={true}>
                Marcus Troy
              </Link>
            </li>
          </ul>
        </li>

        <li>
          Creative:
          <ul>
            <li>
              Photography:{" "}
              <Link href="/photography/cityscape" prefetch={true}>
                City
              </Link>
              ,{" "}
              <Link href="/photography/concert" prefetch={true}>
                Concert
              </Link>
              ,{" "}
              <Link href="/photography/outside" prefetch={true}>
                Outside
              </Link>{" "}
              &{" "}
              <Link href="/photography/other" prefetch={true}>
                Other
              </Link>
            </li>
            <li>
              Book:{" "}
              <Link
                href="/art/sheep/sheePDF.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Do Androids Dream of Synthetic Images?
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <p className="home-signoff">
        <span>&quot;</span>
        <ArtReference
          href="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
          image="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
          description="DON'T PANIC image"
        >
          {"DON'T PANIC"}
        </ArtReference>
        <span>&quot;</span>,
        <br />{" "}
        Alan
      </p>
    </article>
  );
}
