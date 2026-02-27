import Link from "next/link";

export default function RichText() {
  return (
    <article style={{ padding: "1rem", maxWidth: "600px" }}>
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

      <ul
        style={{
          listStyleType: "disc",
          listStylePosition: "outside",
        }}
      >
        <li>
          Currently:
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Solutions Engineer @{" "}
              <Link
                href="https://getmosaic.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ask-AI
              </Link>
            </li>
          </ul>
        </li>

        <li style={{ marginTop: "1rem" }}>
          Technical:
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
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
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              World Model:{" "}
              <Link
                href="https://chionyx.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chionyx
              </Link>
            </li>
          </ul>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              LLM:{" "}
              <Link
                href="https://www.instacard.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instacard.ai
              </Link>
            </li>
          </ul>
        </li>

        <li style={{ marginTop: "1rem" }}>
          Creative:
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
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
            <li style={{ margin: "0.375rem 0" }}>
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

      <p style={{ marginTop: "1rem" }}>
        <span>&quot;</span>
        <Link
          href="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
          rel="noopener noreferrer"
          target="_blank"
        >
          DON&apos;T PANIC
        </Link>
        <span>&quot;</span>,
        <br />
        Alan
      </p>
    </article>
  );
}
