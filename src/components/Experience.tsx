import { experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've built</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.company}-${job.period}`}>
              <div className="job-meta">
                <span className="job-period">{job.period}</span>
                <span className="job-place">{job.location}</span>
              </div>
              <h3 className="job-role">{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
