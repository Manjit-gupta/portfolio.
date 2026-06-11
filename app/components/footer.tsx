const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Manjit-gupta?tab=repositories" },
  { label: "Twitter", href: "https://x.com/ManjitGupta1821" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manjit-gupta-02b8b7296/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div
        className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        {/* Copyright */}
        <span
          className="text-xs text-[var(--text-muted)] tracking-wider"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © 2026 Manjit.gupta
        </span>

        {/* Social Links */}
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 tracking-wider"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}