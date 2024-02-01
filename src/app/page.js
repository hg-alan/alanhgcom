import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "0.5rem",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <div>
          <Image src="/alanhg.svg" alt="AlanHG Logo" width={180} height={60} />
        </div>
      </header>

      {/* Rich text */}
      <div
        style={{
          flex: 1,
          padding: "0.5rem",
          overflowY: "auto",
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
            paddingLeft: "1em",
            margin: 0,
            listStyleType: "disc",
            listStylePosition: "outside",
          }}
        >
          <li>
            <strong>Artificial Intelligence</strong>{" "}
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
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
                <a
                  href="https://drive.google.com/file/d/1HZHul6S5f-0NYLbFnGkiQBV5Nm5nsjbO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Do Androids Dream of Synthetic Images?
                </a>{" "}
              </li>
            </ul>
          </li>
          <li style={{ marginTop: "2rem" }}>
            <strong>Web Development</strong>
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
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
                  Pernod Ricard
                </a>,{" "}
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
            <strong>Art</strong>
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
              <li style={{ margin: "0.5rem 0" }}>
                Genres: <Link href="/photography/cityscape">Cityscape</Link>,{" "}
                <Link href="/photography/concert">Concert</Link>,{" "}
                <Link href="/photography/outside">Outside</Link> &{" "}
                <Link href="/photography/other">Other</Link>
              </li>
            </ul>
          </li>
        </ul>

        <p style={{ marginTop: "3rem" }}>
          Don&apos;t panic, <br /> Alan{" "}
        </p>

        {/* Social icons */}
        <div
          style={{ textAlign: "left", marginTop: "3rem", marginBottom: "2rem" }}
        >
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
          <a
            href="https://drive.google.com/file/d/1WkkdELHxypuYkDs6BT-OAXb0NNJflFSS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image
              src="icons/resume.svg"
              alt="CV"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </a>
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
        </div>
      </div>
    </main>
  );
}
