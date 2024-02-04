import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href="mailto:alan.hg@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "2rem" }}
      >
        <Image
          src="/icons/envelope-regular.svg"
          alt="Email"
          width={27.5}
          height={27.5}
          className="link-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alan-hg/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "2rem" }}
      >
        <Image
          src="/icons/linkedin-in.svg"
          alt="LinkedIn"
          width={27.5}
          height={27.5}
          className="link-icon"
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
          src="/icons/resume.svg"
          alt="CV"
          width={27.5}
          height={27.5}
          className="link-icon"
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
          className="link-icon"
        />
      </a>
      <a
        href="https://www.instagram.com/alan.hg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={27.5}
          height={27.5}
          className="link-icon"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
