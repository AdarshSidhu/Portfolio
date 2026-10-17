import { about } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">About</p>
        <h2 className="section-title">{about.headline}</h2>
        <div className="about-grid">
          <p className="about-body">{about.body}</p>
        </div>
      </div>
    </section>
  );
}
