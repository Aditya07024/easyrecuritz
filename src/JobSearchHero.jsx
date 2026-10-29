import React, { useState } from "react";
import "./JobSearchHero.css";
export default function JobSearchHero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({
      keyword,
      location,
    });
    window.location.href = `/jobs?${params.toString()}`;
  }
  return (
    <section className="job-search-page">
      <div className="job-search-container">
        <span className="job-search-eyebrow">
          YOUR CAREER. YOUR NEXT CHAPTER.
        </span>
        <h1>
          Your next job
          <br />
          starts <span>here.</span>
        </h1>
        <p className="job-search-description">
          Discover opportunities that match your skills, ambitions,
          and the future you want to build.
        </p>
        <form className="job-search-form" onSubmit={handleSearch}>
          <label className="job-search-field">
            <span>What</span>
            <input
              type="text"
              placeholder="Job title, skills, or company"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </label>
          <label className="job-search-field">
            <span>Where</span>
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
          <a href="/register">create an account</a> to get personalized
          job recommendations.
        </p>
        <div className="job-search-tags">
          <span>Popular searches</span>
          <a href="/jobs?keyword=Software+Developer">Software Developer ↗</a>
          <a href="/jobs?keyword=Marketing">Marketing ↗</a>
          <a href="/jobs?keyword=Remote">Remote jobs ↗</a>
        </div>
      </div>
    </section>
  );
}