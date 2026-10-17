import { certifications, education } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Education() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="education" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">Education</p>
        <h2 className="section-title">School & certifications</h2>
        <div className="edu-grid">
          {education.map((item) => (
            <article className="edu-item" key={item.degree}>
              <h3>{item.degree}</h3>
              <p>
                {item.school} · {item.place}
              </p>
              <p className="job-period">{item.period}</p>
            </article>
          ))}
        </div>
        <ul className="certs">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
