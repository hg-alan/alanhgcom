const links = [
  { href: "mailto:alan.hg@outlook.com", label: "Email" },
  { href: "https://www.linkedin.com/in/alan-hg/", label: "LinkedIn" },
  { href: "/cv/Alan_Healey-Greene_CV.pdf", label: "Resume" },
  { href: "https://github.com/hg-alan", label: "GitHub" },
  { href: "https://alanhg42.substack.com/", label: "Substack" },
];

export default function SocialLinks() {
  return (
    <nav aria-label="Contact and profiles" className="home-links">
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
