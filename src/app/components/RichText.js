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
          <strong>Artificial Intelligence</strong>{" "}
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Product:{" "}
              <Link
                href="https://www.instacard.ai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instacard.ai
              </Link>{" "}
            </li>
            <li style={{ margin: "0.375rem 0" }}>
              Art:{" "}
              <Link href="/art/sheep/sheePDF.pdf">
                Do Androids Dream of Synthetic Images?
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <strong>Web Development</strong>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Agency:{" "}
              <Link
                href="https://guardanthealth.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Guardant Health
              </Link>
              ,{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.staples.ca/"
              >
                Staples
              </Link>
              ,{" "}
              <Link
                href="https://www.ig.ca/"
                rel="noopener noreferrer"
                target="_blank"
              >
                IG Wealth Management
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.rbcroyalbank.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                RBC Royal Bank
              </Link>
            </li>
          </ul>

          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Freelance:{" "}
              <Link
                href="https://www.pernod-ricard.com/en"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pernod Ricard
              </Link>
              ,{" "}
              <Link
                href="https://www.suuuperposition.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Suuuperposition
              </Link>
              ,{" "}
              <Link
                href="https://quartierishome.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Quartier
              </Link>{" "}
              &{" "}
              <Link
                href="https://monarmoire.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Armoire
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <strong>Photography</strong>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Genres:{" "}
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
