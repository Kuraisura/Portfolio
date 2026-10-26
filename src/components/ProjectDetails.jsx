export default function ProjectDetails({ project, dark = false }) {
  return (
    <div className="project-details" data-appearance={dark ? 'dark' : undefined}>
      <dl className="project-details-facts">
        <div><dt>Platform</dt><dd>{project.stats.platform}</dd></div>
        <div><dt>Year</dt><dd>{project.stats.year}</dd></div>
        <div><dt>Status</dt><dd>{project.status}</dd></div>
      </dl>

      <div className="project-details-intro">
        <section>
          <h3>What it is for</h3>
          <p>{project.purpose}</p>
        </section>
        <section>
          <h3>Who it is for</h3>
          <p>{project.audience}</p>
        </section>
      </div>

      <section>
        <h3>What you can do</h3>
        <ul className="project-details-features">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section>
        <h3>How it was built</h3>
        <ol className="project-details-build">
          {project.implementation.map((step, index) => (
            <li key={step.title}>
              <span className="project-details-step" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div><h4>{step.title}</h4><p>{step.detail}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3>Technology by role</h3>
        <dl className="project-details-stack">
          {project.stackGroups.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.map((technology) => <span key={technology}>{technology}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="project-details-scope">
        <h3>Project scope & current state</h3>
        <p>{project.scope}</p>
      </section>
    </div>
  );
}
