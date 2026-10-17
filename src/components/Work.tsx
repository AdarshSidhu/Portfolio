import { work } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Work() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="work" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects that show the stack</h2>
        <div className="work-list">
          {work.map((item) => (
            <article className="work-item" key={item.name}>
              <div className="work-head">
                <div>
                  <p className="work-tag">{item.tag}</p>
                  <h3 className="work-name">{item.name}</h3>
                </div>
                {item.liveUrl && item.liveLabel ? (
                  <a
                    className="work-link"
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.liveLabel} ↗
                  </a>
                ) : null}
              </div>
              <div className="work-block">
                <p>
                  <strong>Problem.</strong> {item.problem}
                </p>
                <p>
                  <strong>Role.</strong> {item.role}
                </p>
              </div>
              <ul className="work-stack">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="work-outcomes">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
