import { Link } from "react-router-dom";
import { Arrow } from "../components/ui";
import { categoryById, jobs, postedLabel } from "../data/jobs";

export default function FeaturedJobs() {
  const featured = jobs.filter((j) => j.featured).slice(0, 3);

  return (
    <section className="section featured-jobs" id="jobs">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> CAREER OPPORTUNITIES
            </div>
            <h2>
              Find work that
              <br />
              <span>moves you forward.</span>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Your next opportunity could be closer than you think. Explore roles that match
              your skills and ambitions.
            </p>
            <Link to="/jobs" className="text-link">
              Browse all {jobs.length} roles <Arrow diagonal />
            </Link>
          </div>
        </div>

        <div className="featured-job-grid">
          {featured.map((job) => (
            <article className="featured-job-card" key={job.id} data-reveal>
              <div className="job-card-top">
                <span className="job-company-icon" aria-hidden="true">
                  {categoryById(job.category)?.icon}
                </span>
                <span className="job-status">{job.type}</span>
              </div>

              <p className="job-card-company">{job.sector}</p>
              <h3>{job.title}</h3>

              <div className="job-meta">
                <span>⌖ {job.location}</span>
                <span>◷ {job.experience}</span>
              </div>

              <ul className="skill-chips" aria-label="Key skills">
                {job.skills.slice(0, 3).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <Link to={`/jobs?job=${job.id}`} className="job-card-link">
                <span>
                  View role <em>· {postedLabel(job.postedDaysAgo)}</em>
                </span>
                <Arrow diagonal />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
