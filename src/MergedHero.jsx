import React, { useState } from "react";
import "./MergedHero.css";
export default function MergedHero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({ keyword, location });
    window.location.href = `/jobs?${params.toString()}`;
  }
  return (
    <section className="merged-hero" id="home">
      <div className="merged-hero-inner">
        <div className="merged-hero-copy">
          <span className="merged-eyebrow">
            YOUR PEOPLE. YOUR FUTURE.
          </span>
          <h1>
            Great people.
            <br />
            Better <span>possibilities.</span>
          </h1>
          <p className="merged-description">
            The right connection can change everything. We help
            ambitious businesses meet exceptional talent — and people
            find work that moves them forward.
          </p>
          <div className="merged-actions">
            <a href="#contact" className="merged-primary-link">
              Let's find your people <span>↗</span>
            </a>
            <a href="#services" className="merged-secondary-link">
              Explore what we do <span>→</span>
            </a>
          </div>
          <div className="merged-trust">
            <span className="merged-trust-icon">✳</span>
            <div>
              <strong>Recruitment is personal.</strong>
              <p>We believe it should feel that way.</p>
            </div>
          </div>
        </div>
        <div className="merged-search-card">
          <div className="merged-card-top">
            <span className="merged-card-icon">✳</span>
            <span className="merged-card-label">
              YOUR CAREER. YOUR NEXT CHAPTER.
            </span>
          </div>
          <h2>
            Your next job
            <br />
            starts <span>here.</span>
          </h2>
          <p className="merged-search-description">
            Discover opportunities that match your skills, ambitions,
            and the future you want to build.
          </p>
          <form className="merged-search-form" onSubmit={handleSearch}>
            <label>
              <span>WHAT</span>
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skills, or company"
              />
            </label>
            <label>
              <span>WHERE</span>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or remote"
              />
            </label>
            <button type="submit">
              Search jobs <span>↗</span>
            </button>
          </form>
          <p className="merged-account-text">
            Looking for your next opportunity?{" "}
            <a href="/login">Sign in</a> or{" "}
            <a href="/register">create an account</a>.
          </p>
          <div className="merged-popular">
            <span>POPULAR</span>
            <a href="/jobs?keyword=Software+Developer">
              Software Developer ↗
            </a>
            <a href="/jobs?keyword=Remote">
              Remote jobs ↗
            </a>
          </div>
        </div>
      </div>
      <div className="merged-bottom-strip">
        <span>GOOD PEOPLE CHANGE EVERYTHING</span>
        <span className="merged-strip-star">✳</span>
        <span>THE RIGHT PEOPLE MAKE ALL THE DIFFERENCE</span>
        <span className="merged-strip-star">✳</span>
        <span>LET'S MAKE THE CONNECTION</span>
      </div>
    </section>
  );
}