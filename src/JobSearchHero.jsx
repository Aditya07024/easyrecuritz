import React, { useState } from "react";
import "./JobSearchHero.css";


const categories = [
  { icon: "⌘", title: "Technology", count: "Software, IT & Engineering" },
  { icon: "✳", title: "Design & Creative", count: "UI/UX, Graphics & Product" },
  { icon: "↗", title: "Marketing", count: "Digital, Growth & Branding" },
  { icon: "▤", title: "Finance", count: "Accounting & Financial Services" },
  { icon: "◎", title: "Human Resources", count: "Recruitment & People Operations" },
  { icon: "◷", title: "Operations", count: "Business & Administration" },
];

const jobs = [
  {
    title: "Frontend Developer",
    company: "Technology & Digital",
    location: "Noida, India",
    type: "Full-time",
    experience: "1–3 years",
    category: "Technology",
    icon: "⌘",
  },
  {
    title: "UI/UX Designer",
    company: "Creative & Design",
    location: "Gurugram, India",
    type: "Full-time",
    experience: "1–2 years",
    category: "Design & Creative",
    icon: "✳",
  },
  {
    title: "Digital Marketing Executive",
    company: "Marketing & Growth",
    location: "Remote",
    type: "Remote",
    experience: "0–2 years",
    category: "Marketing",
    icon: "↗",
  },
];

export default function JobSearchHero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    window.location.href = `/jobs?${params.toString()}`;
  }

  function searchCategory(category) {
    window.location.href = `/jobs?${new URLSearchParams({ keyword: category }).toString()}`;
  }

  function searchJob(jobTitle) {
    window.location.href = `/jobs?${new URLSearchParams({ keyword: jobTitle }).toString()}`;
  }

  return (
    <div className="job-search-wrapper">
      {/* HERO */}
      <section className="job-search-hero-section">
        <div className="job-search-container">
          <h1>
            Your next job
            <br />
            starts <span>here.</span>
          </h1>
          <p className="job-search-description">
            Discover opportunities that match your skills, ambitions, and the future you want to build.
          </p>

          <form className="job-search-form" onSubmit={handleSearch}>
            <label className="job-search-field">
              <span>WHAT</span>
              <input
                type="text"
                placeholder="Job title, skills, or company"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </label>

            <label className="job-search-field">
              <span>WHERE</span>
              <input
                type="text"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>

            <button type="submit" className="job-search-button">
              Search jobs <span>↗</span>
            </button>
          </form>

          <p className="job-search-signin">
            Looking for your next opportunity?{" "}
            <a href="/login">Sign in</a> or{" "}
            <a href="/register">create an account</a> to get personalized job recommendations.
          </p>

          <div className="job-search-tags">
            <span>Popular searches</span>
            <button type="button" onClick={() => searchJob("Software Developer")}>
              Software Developer ↗
            </button>
            <button type="button" onClick={() => searchJob("Marketing")}>
              Marketing ↗
            </button>
            <button type="button" onClick={() => searchJob("Remote")}>
              Remote jobs ↗
            </button>
          </div>

          <div className="job-search-trust">
            <div>
              <span className="trust-icon">✓</span>
              <span>Explore career opportunities</span>
            </div>
            <div>
              <span className="trust-icon">↗</span>
              <span>Discover new possibilities</span>
            </div>
            <div>
              <span className="trust-icon">✳</span>
              <span>Put your potential first</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER CATEGORIES */}
      <section className="job-categories-section">
        <div className="job-search-container">
          <div className="job-section-heading">
            <div>
              <span className="job-section-eyebrow">EXPLORE YOUR OPTIONS</span>
              <h2>
                Find your field.
                <br />
                <span>Find your future.</span>
              </h2>
            </div>
            <p>
              Explore career paths across different industries and discover opportunities that align with your strengths.
            </p>
          </div>

          <div className="job-category-grid">
            {categories.map((category) => (
              <button
                type="button"
                className="job-category-card"
                key={category.title}
                onClick={() => searchCategory(category.title)}
              >
                <span className="job-category-icon">{category.icon}</span>
                <span className="job-category-title">{category.title}</span>
                <span className="job-category-description">{category.count}</span>
                <span className="job-category-arrow">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="job-listings-section" id="featured-jobs">
        <div className="job-search-container">
          <div className="job-section-heading">
            <div>
              <span className="job-section-eyebrow">EXPLORE OPPORTUNITIES</span>
              <h2>
                Roles worth
                <br />
                <span>looking into.</span>
              </h2>
            </div>
            <button
              type="button"
              className="job-view-all"
              onClick={() => (window.location.href = "/jobs")}
            >
              View all jobs ↗
            </button>
          </div>

          <div className="job-listing-grid">
            {jobs.map((job) => (
              <article className="job-listing-card" key={job.title}>
                <div className="job-listing-top">
                  <span className="job-listing-icon">{job.icon}</span>
                  <span className="job-listing-type">{job.type}</span>
                </div>
                <span className="job-listing-company">{job.company}</span>
                <h3>{job.title}</h3>
                <div className="job-listing-meta">
                  <span>⌖ {job.location}</span>
                  <span>◷ {job.experience}</span>
                </div>
                <button
                  type="button"
                  className="job-listing-link"
                  onClick={() => searchJob(job.title)}
                >
                  Explore this role <span>↗</span>
                </button>
              </article>
            ))}
          </div>

          <p className="job-demo-note">
            Illustrative listings for demonstration. Replace them with verified vacancies before publishing.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="job-benefits-section">
        <div className="job-search-container job-benefits-grid">
          <div className="job-benefits-copy">
            <span className="job-section-eyebrow">YOUR CAREER, YOUR TERMS</span>
            <h2>
              More than a job.
              <br />
              <span>A step forward.</span>
            </h2>
            <p>
              Finding work should be about more than sending applications. It&apos;s about discovering opportunities that support your ambitions and help you build a meaningful career.
            </p>
            <a href="/register" className="job-benefits-button">
              Start your journey <span>↗</span>
            </a>
          </div>

          <div className="job-benefits-list">
            <article>
              <span>01</span>
              <div>
                <h3>Explore opportunities</h3>
                <p>Discover roles across industries, skills, and experience levels.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Find your fit</h3>
                <p>Focus on opportunities that match your interests and career goals.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Move forward with confidence</h3>
                <p>Take the next step toward work that aligns with your potential.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="job-process-section">
        <div className="job-search-container">
          <div className="job-process-heading">
            <span className="job-section-eyebrow">A SIMPLE WAY FORWARD</span>
            <h2>
              Your next chapter,
              <br />
              <span>step by step.</span>
            </h2>
          </div>

          <div className="job-process-grid">
            <article>
              <span className="job-process-number">01</span>
              <h3>Explore</h3>
              <p>Search for roles that fit your skills, interests, and goals.</p>
            </article>
            <article>
              <span className="job-process-number">02</span>
              <h3>Discover</h3>
              <p>Review opportunities and learn what each role requires.</p>
            </article>
            <article>
              <span className="job-process-number">03</span>
              <h3>Apply</h3>
              <p>Follow the application process provided for your chosen role.</p>
            </article>
            <article>
              <span className="job-process-number">04</span>
              <h3>Grow</h3>
              <p>Keep building your skills and working toward your next goal.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="job-search-cta">
        <div className="job-search-container job-search-cta-inner">
          <div>
            <span className="job-section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>
              Ready to find
              <br />
              <em>your next opportunity?</em>
            </h2>
            <p>Take the first step toward a career that moves you forward.</p>
          </div>

          <div className="job-search-cta-actions">
            <a href="/register" className="job-cta-primary">
              Create an account <span>↗</span>
            </a>
            <a href="/jobs" className="job-cta-secondary">
              Browse opportunities →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
