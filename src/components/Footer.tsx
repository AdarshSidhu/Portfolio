import { site } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer wrap">
      <span>
        © {year} {site.name}
      </span>
      <span>Python Django / Backend Developer</span>
    </footer>
  );
}
