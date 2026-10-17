import { skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="wrap reveal">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools I use daily</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
