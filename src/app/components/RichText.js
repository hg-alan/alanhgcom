import Link from "next/link";

const RichText = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <p>
        This site exists in the <em>spirit</em> of &quot;
        <a
          href="https://youtu.be/kYfNvmF0Bqw?t=53"
          target="_blank"
          rel="noopener noreferrer"
        >
          poking the world
        </a>
        &quot;:
      </p>

      <ul
        style={{
          margin: 0,
          listStyleType: "disc",
          listStylePosition: "outside",
        }}
      >
        <li>
          <strong>Artificial Intelligence</strong>{" "}
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ margin: "0.5rem 0" }}>
              AI-generated cards:{" "}
              <a
                href="https://www.instacard.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Instacard.ai
              </a>{" "}
            </li>
            <li style={{ margin: "0.5rem 0" }}>
              Generative art:{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                prefetch={true}
                href="/art/sheep/sheePDF.pdf"
              >
                {" "}
                Do Androids Dream of Synthetic Images?
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <strong>Web Development</strong>
          <ul style={{ paddingLeft: "20px" }}>
            {" "}
            <li style={{ margin: "0.5rem 0" }}>
              {" "}
              Clients include:{" "}
              <a
                href="https://www.staples.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Staples
              </a>
              ,{" "}
              <a
                href="https://www.pernod-ricard.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pernod Ricard
              </a>
              ,{" "}
              <a
                href="https://quartierishome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quartier
              </a>{" "}
              &{" "}
              <a
                href="https://www.suuuperposition.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suuuperposition
              </a>
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <strong>Photography</strong>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ margin: "0.5rem 0" }}>
              Genres:{" "}
              <Link prefetch={true} href="/photography/cityscape">
                Cityscape
              </Link>
              ,{" "}
              <Link prefetch={true} href="/photography/concert">
                Concert
              </Link>
              ,{" "}
              <Link prefetch={true} href="/photography/outside">
                Outside
              </Link>{" "}
              &{" "}
              <Link prefetch={true} href="/photography/other">
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
