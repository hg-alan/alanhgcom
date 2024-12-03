import Link from "next/link";
import Image from "next/image";

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
          Currently:{" "}
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              AI Solutions Engineer:{" "}
              <Link
                href="https://www.coveo.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Coveo [TSX: CVO]
              </Link>{" "}
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1rem" }}>
          Technical:
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Web Development:{" "}
              <Link
                href="https://www.rbcroyalbank.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                RBC Royal Bank
              </Link>
              ,{" "}
              <Link
                href="https://www.igmfinancial.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                IGM Financial
              </Link>
              ,{" "}
              <Link
                href="https://www.pernod-ricard.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pernod Ricard
              </Link>{" "}
              &{" "}
              <Link
                href="https://guardanthealth.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Guardant Health
              </Link>
            </li>
          </ul>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ margin: "0.375rem 0" }}>
              Ecommerce:{" "}
              <Link
                href="https://www.staples.ca/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Staples
              </Link>
              ,{" "}
              <Link
                href="https://shoplostfound.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lost and Found
              </Link>
              ,{" "}
              <Link
                href="https://www.instagram.com/neemanaz/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neema Naz
              </Link>
              ,{" "}
              <Link
                href="https://www.instagram.com/swooshgod/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                Swoosh God
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.instagram.com/marcustroy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Marcus Troy
              </Link>
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
            <li style={{ margin: "0.375rem 0" }}>
              NFT:{" "}
              <Link
                href="https://zora.co/@alanhg"
                rel="noopener noreferrer"
                target="_blank"
              >
                Zora
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p style={{ marginTop: "1rem" }}>
        <Link
          href="https://www.dont-panic.cc/capi/wp-content/uploads/2018/02/40110298232_4e9c412936_o.jpg"
          rel="noopener noreferrer"
          target="_blank"
        >
          &quot;DON&apos;T PANIC&quot;
        </Link>
        , <br /> Alan{" "}
      </p>
    </div>
  );
};

export default RichText;
