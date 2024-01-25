import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "start",
          // border: "1px solid black",
        }}
      >
        <div>
          <Image src="/alanhg.svg" alt="AlanHG Logo" width={180} height={60} />
        </div>
      </header>

      {/* Rich text */}
      <div style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto",
        }}>
        <p>
          This site exists in the spirit of &quot;
          <a
            href="https://youtu.be/kYfNvmF0Bqw?t=53"
            target="_blank"
            rel="noopener noreferrer"
          >
            poking the world
          </a>
          &quot;, so if any of the following resonates with you, let&apos;s
          chat.
        </p>

        <br />

        <ul style={{ paddingLeft: '1em', margin: 0, listStyleType: 'disc', listStylePosition: 'outside' }}>
          <li style={{ marginTop: "1rem" }}>
            Generative AI{" "}
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
              <li style={{ margin: "0.5rem 0" }}>
                Web app for creating AI-generated cards called{" "}
                <a
                  href="https://www.instacard.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  instacard.ai
                </a>{" "}
              </li>
              {/* Adjusted marginTop here */}
              <li style={{ margin: "0.5rem 0" }}>
                Book examining the intersection of art, technology and human
                cognition called{" "}
                <a
                  href="https://drive.google.com/file/d/1HZHul6S5f-0NYLbFnGkiQBV5Nm5nsjbO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Do Andoids Dream of Synthetic Images?
                </a>{" "}
              </li>
            </ul>
          </li>
          <li style={{ marginTop: "2rem" }}>
            Web Development & Ecommerce
            {/* Sub-bullets */}
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
              {" "}
              {/* Adjusted marginTop here */}
              <li style={{ margin: "0.5rem 0" }}>
                {" "}
                {/* Ensure this margin is applied */}
                Clients range from multinational corporations such as{" "}
                <a
                  href="https://www.staples.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Staples
                </a>{" "}
                and{" "}
                <a
                  href="https://www.pernod-ricard.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pernod Ricard
                </a>{" "}
                to brands with cult followings including{" "}
                <a
                  href="https://quartierishome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quartier
                </a>{" "}
                and{" "}
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
            Photography
            <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
              <li style={{ margin: "0.5rem 0" }}>
                Categories include:{" "}
                <a
                  href="https://500px.com/p/alanhg/galleries/cityscape"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cityscape
                </a>
                ,{" "}
                <a
                  href="https://500px.com/p/alanhg/galleries/live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  concert
                </a>
                ,{" "}
                <a
                  href="https://500px.com/p/alanhg/galleries/outside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  outside
                </a>{" "}
                and{" "}
                <a
                  href="https://500px.com/p/alanhg/galleries/-other"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  other
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Social icons */}
        <div
          style={{ textAlign: "left", marginTop: "4rem", marginBottom: "2rem" }}
        >
          <a
            href="mailto:alan.hg@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem", marginLeft: "1rem" }}
          >
            <Image src="/envelope-regular.svg" alt="Your Icon" width={35} height={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-hg/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image src="/linkedin-in.svg" alt="Your Icon" width={35} height={35} />
          </a>
          <a
            href="https://drive.google.com/file/d/1WkkdELHxypuYkDs6BT-OAXb0NNJflFSS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image src="/file-regular.svg" alt="Your Icon" width={35} height={35} />
          </a>
          <a
            href="https://github.com/hg-alan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "2rem" }}
          >
            <Image src="/github.svg" alt="Your Icon" width={35} height={35} />
          </a>
        </div>
      </div>
    </main>
  );
}
