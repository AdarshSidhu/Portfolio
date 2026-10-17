import { site } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let’s talk about your backend</h2>
        <div className="contact-panel">
          <p className="muted">
            Open to Django / backend roles. Reach out by email or connect on
            LinkedIn.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <div>
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
