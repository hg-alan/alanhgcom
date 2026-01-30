import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  isExternal: boolean;
}

const socialLinks: SocialLink[] = [
  {
    href: "mailto:alan.hg@outlook.com",
    icon: "/icons/envelope-regular.svg",
    label: "Send email to Alan",
    isExternal: true,
  },
  {
    href: "https://www.linkedin.com/in/alan-hg/",
    icon: "/icons/linkedin-in.svg",
    label: "Visit LinkedIn profile",
    isExternal: true,
  },
  {
    href: "/cv/Alan_Healey-Greene_CV.pdf",
    icon: "/icons/resume.svg",
    label: "Download CV",
    isExternal: false,
  },
  {
    href: "https://github.com/hg-alan",
    icon: "/icons/github.svg",
    label: "Visit GitHub profile",
    isExternal: true,
  },
  {
    href: "https://alanhg42.substack.com/",
    icon: "/icons/substack-icon.svg",
    label: "Visit Substack blog",
    isExternal: true,
  },
];

export default function SocialIcons() {
  return (
    <nav
      aria-label="Social media links"
      style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {socialLinks.map((link) => (
          <li key={link.href}>
            {link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Image
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  width={27.5}
                  height={27.5}
                  className="link-icon"
                />
              </a>
            ) : (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                prefetch={true}
              >
                <Image
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  width={27.5}
                  height={27.5}
                  className="link-icon"
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
