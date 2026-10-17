import { useState } from "react";
import { nav, site } from "../data/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#top">
          {site.name}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-cv-mobile">
            <a
              className="btn btn-ghost"
              href={site.cvPath}
              download
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>

        <div className="nav-actions nav-cv-desktop">
          <a className="btn btn-ghost" href={site.cvPath} download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
