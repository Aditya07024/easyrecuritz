import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Arrow } from "../components/ui";
import { HeroVisual } from "./Sections";

const popular = ["Frontend", "Design", "Marketing", "Remote"];

export default function Hero() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  function search(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    const qs = params.toString();
    navigate(`/jobs${qs ? `?${qs}` : ""}`);
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line"></span> YOUR PEOPLE. YOUR FUTURE.
          </div>
          <h1>
            Great people.
            <br />
            Better <span>possibilities.</span>
          </h1>
          <p className="hero-description">
            The right connection can change everything. We help ambitious businesses meet
            exceptional talent — and people find work that moves them forward.
          </p>

          <form className="hero-search" onSubmit={search} role="search" aria-label="Search jobs">
            <label className="hero-search-field">
              <span>What</span>
              <input
                type="text"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Role, skill or industry"
                autoComplete="off"
              />
            </label>
            <label className="hero-search-field">
              <span>Where</span>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or remote"
                autoComplete="off"
              />
            </label>
            <button type="submit" className="hero-search-btn">
              Search jobs <Arrow diagonal />
            </button>
          </form>

          <div className="hero-popular">
            <span>Popular</span>
            {popular.map((p) => (
              <Link key={p} to={`/jobs?keyword=${encodeURIComponent(p)}`}>
                {p}
              </Link>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="text-link">
              Hiring? Tell us who you need <Arrow diagonal />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="container hero-bottom">
        <span>GOOD WORK STARTS WITH GOOD PEOPLE</span>
        <span className="bottom-line"></span>
        <span>
          LET’S MAKE THE CONNECTION <Arrow diagonal />
        </span>
      </div>
    </section>
  );
}
