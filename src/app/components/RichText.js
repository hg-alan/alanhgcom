import Link from "next/link";

const RichText = () => {
  return (
    <div style={{ padding: "1rem" }}>
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
          <strong>Currently:</strong>{" "}
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Solutions Engineer:{" "}
              <Link
                href="https://www.coveo.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Coveo
              </Link>{" "}
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <strong>Software</strong>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Web Development:{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.staples.ca/"
              >
                Staples
              </Link>
              ,{" "}
              <Link
                href="https://www.rbcroyalbank.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                RBC Royal Bank
              </Link>,{" "}
              <Link
                href="https://www.igmfinancial.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                IGM Financial
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.pernod-ricard.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pernod Ricard
              </Link>
              {" "}
            </li>
          </ul>

          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Product:{" "}
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
          <strong>Creative</strong>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Photography:{" "}
              <Link href="/photography/cityscape" prefetch={true}>
                Cityscape
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
              Generative:{" "}
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
        Don&apos;t panic, <br /> Alan{" "}
      </p>
    </div>
  );
};

export default RichText;
