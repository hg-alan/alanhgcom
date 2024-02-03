import Image from "next/image";
import HeaderHome from "./components/HeaderHome";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      {/* Header */}
      <HeaderHome />

      {/* Rich text */}
      <div
        style={{
          padding: "0 1rem 1rem 1rem",
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

        <br />

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
          <li style={{ marginTop: "2rem" }}>
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
          <li style={{ marginTop: "2rem" }}>
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

        <p style={{ marginTop: "2rem" }}>
          Don&apos;t panic, <br /> Alan{" "}
        </p>

        {/* Social icons */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            href="mailto:alan.hg@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="icons/envelope-regular.svg"
              alt="Email"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-hg/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="icons/linkedin-in.svg"
              alt="LinkedIn"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </a>

          <Link
            rel="noopener noreferrer"
            target="_blank"
            prefetch={true}
            href="/cv/Alan_Healey-Greene_CV.pdf"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="icons/resume.svg"
              alt="CV"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </Link>
          <a
            href="https://github.com/hg-alan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="/icons/github.svg"
              alt="Github"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/alan.hg/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
