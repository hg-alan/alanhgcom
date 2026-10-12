import Link from "next/link";

export default function RichText() {
  return (
    <article className="home-content">
      <p>
        This site exists in the <em>spirit</em> of &quot;
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
        <Link
          href="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
          rel="noopener noreferrer"
          target="_blank"
        >
          DON&apos;T PANIC
        </Link>
        <span>&quot;</span>,
        <br />{" "}
        Alan
      </p>
    </article>
  );
}
