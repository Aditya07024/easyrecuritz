import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Arrow, usePageTitle } from "../components/ui";
import { categories, categoryById, jobTypes, jobs, postedLabel } from "../data/jobs";

const SAVED_KEY = "er365:saved-jobs";

function useSavedJobs() {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
    } catch {
      return [];
    }
  });
  const toggle = useCallback((id) => {
    setSaved((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable (private mode) — keep in-memory state */
      }
      return next;
    });
  }, []);
  return [saved, toggle];
}

function BookmarkIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  );
}

function JobDrawer({ job, onClose, saved, onToggle }) {
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    document.body.classList.add("nav-locked");
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-locked");
      previous?.focus?.();
    };
  }, [onClose]);

  const category = categoryById(job.category);
  const isSaved = saved.includes(job.id);

  return (
    <div className="drawer-root">
      <button className="drawer-scrim" aria-label="Close job details" onClick={onClose} tabIndex={-1} />
      <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" ref={panelRef}>
        <div className="drawer-top">
          <span className="job-status">{job.type}</span>
          <button ref={closeRef} type="button" className="drawer-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <p className="drawer-sector">
          {category?.icon} {job.sector}
        </p>
        <h2 id="drawer-title">{job.title}</h2>

        <dl className="drawer-meta">
          <div><dt>Location</dt><dd>{job.location}</dd></div>
          <div><dt>Experience</dt><dd>{job.experience}</dd></div>
          <div><dt>Posted</dt><dd>{postedLabel(job.postedDaysAgo)}</dd></div>
        </dl>

        <h3>About the role</h3>
        <p>{job.summary}</p>

        <h3>What you’ll do</h3>
        <ul className="drawer-list">
          {job.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <h3>Skills</h3>
        <ul className="skill-chips">
          {job.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="drawer-actions">
          <Link to="/#contact" className="button button-dark">
            Apply through our team <Arrow diagonal />
          </Link>
          <button type="button" className={`button button-ghost ${isSaved ? "is-saved" : ""}`} onClick={() => onToggle(job.id)} aria-pressed={isSaved}>
            <BookmarkIcon filled={isSaved} /> {isSaved ? "Saved" : "Save role"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JobsPage() {
  usePageTitle("Find jobs");
  const [params, setParams] = useSearchParams();
  const [saved, toggleSaved] = useSavedJobs();

  const keyword = params.get("keyword") || "";
  const location = params.get("location") || "";
  const category = params.get("category") || "";
  const type = params.get("type") || "";
  const sort = params.get("sort") || "newest";
  const onlySaved = params.get("saved") === "1";
  const openId = params.get("job");

  const update = useCallback(
    (changes, { replace = true } = {}) => {
      const next = new URLSearchParams(params);
      Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
      setParams(next, { replace });
    },
    [params, setParams]
  );

  const results = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    const l = location.trim().toLowerCase();
    const list = jobs.filter((j) => {
      if (category && j.category !== category) return false;
      if (type && j.type !== type) return false;
      if (onlySaved && !saved.includes(j.id)) return false;
      if (k) {
        const hay = [j.title, j.sector, j.summary, ...j.skills, categoryById(j.category)?.title].join(" ").toLowerCase();
        if (!k.split(/\s+/).every((word) => hay.includes(word))) return false;
      }
      if (l) {
        const hay = `${j.location} ${j.type === "Remote" ? "remote" : ""}`.toLowerCase();
        if (!hay.includes(l)) return false;
      }
      return true;
    });
    return list.sort((a, b) =>
      sort === "title" ? a.title.localeCompare(b.title) : a.postedDaysAgo - b.postedDaysAgo
    );
  }, [keyword, location, category, type, onlySaved, sort, saved]);

  const activeJob = jobs.find((j) => j.id === openId);
  const closeJob = useCallback(() => update({ job: "" }), [update]);
  const hasFilters = keyword || location || category || type || onlySaved;
  const clearAll = () => setParams({}, { replace: true });

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="container">
          <div className="about-breadcrumb jobs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Find jobs</span>
          </div>
          <h1>
            Find a role you’ll <span>love.</span>
          </h1>
          <p>Search roles across industries, filter by what matters to you, and save the ones worth a second look.</p>

          <form className="jobs-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>What</span>
              <input
                type="search"
                value={keyword}
                onChange={(e) => update({ keyword: e.target.value })}
                placeholder="Job title, skill or industry"
              />
            </label>
            <label>
              <span>Where</span>
              <input
                type="search"
                value={location}
                onChange={(e) => update({ location: e.target.value })}
                placeholder="City or remote"
              />
            </label>
            <label>
              <span>Field</span>
              <select value={category} onChange={(e) => update({ category: e.target.value })}>
                <option value="">All fields</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </label>
          </form>
        </div>
      </section>

      <section className="jobs-body">
        <div className="container">
          <div className="filter-bar">
            <div className="chip-row" role="group" aria-label="Filter by job type">
              <button type="button" className={`chip ${!type ? "is-on" : ""}`} aria-pressed={!type} onClick={() => update({ type: "" })}>
                All types
              </button>
              {jobTypes.map((t) => (
                <button key={t} type="button" className={`chip ${type === t ? "is-on" : ""}`} aria-pressed={type === t} onClick={() => update({ type: type === t ? "" : t })}>
                  {t}
                </button>
              ))}
              <button type="button" className={`chip chip-saved ${onlySaved ? "is-on" : ""}`} aria-pressed={onlySaved} onClick={() => update({ saved: onlySaved ? "" : "1" })}>
                <BookmarkIcon filled={onlySaved} /> Saved ({saved.length})
              </button>
            </div>

            <label className="sort">
              Sort by
              <select value={sort} onChange={(e) => update({ sort: e.target.value === "newest" ? "" : e.target.value })}>
                <option value="newest">Newest</option>
                <option value="title">Title A–Z</option>
              </select>
            </label>
          </div>

          <div className="results-head">
            <p aria-live="polite" role="status">
              <strong>{results.length}</strong> {results.length === 1 ? "role" : "roles"} found
              {hasFilters && (
                <button type="button" className="clear-link" onClick={clearAll}>
                  Clear all filters
                </button>
              )}
            </p>
          </div>

          {results.length > 0 ? (
            <ul className="job-list">
              {results.map((job, i) => {
                const isSaved = saved.includes(job.id);
                return (
                  <li key={job.id} className="job-row" style={{ "--i": i }}>
                    <span className="job-row-icon" aria-hidden="true">{categoryById(job.category)?.icon}</span>
                    <div className="job-row-main">
                      <p className="job-row-sector">{job.sector}</p>
                      <h2>
                        <button type="button" className="job-row-title" onClick={() => update({ job: job.id }, { replace: false })}>
                          {job.title}
                        </button>
                      </h2>
                      <div className="job-meta">
                        <span>⌖ {job.location}</span>
                        <span>◷ {job.experience}</span>
                        <span>{job.type}</span>
                      </div>
                      <ul className="skill-chips" aria-label="Key skills">
                        {job.skills.slice(0, 4).map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="job-row-side">
                      <span className="posted">{postedLabel(job.postedDaysAgo)}</span>
                      <button
                        type="button"
                        className={`save-btn ${isSaved ? "is-saved" : ""}`}
                        aria-pressed={isSaved}
                        aria-label={`${isSaved ? "Remove" : "Save"} ${job.title}`}
                        onClick={() => toggleSaved(job.id)}
                      >
                        <BookmarkIcon filled={isSaved} />
                      </button>
                      <button type="button" className="view-btn" onClick={() => update({ job: job.id }, { replace: false })}>
                        View role <Arrow diagonal />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">⌕</span>
              <h3>{onlySaved && !saved.length ? "No saved roles yet" : "No roles match those filters"}</h3>
              <p>
                {onlySaved && !saved.length
                  ? "Tap the bookmark on any role to keep it here."
                  : "Try a broader keyword, another location, or clear the filters to see everything."}
              </p>
              <button type="button" className="button button-dark" onClick={clearAll}>
                Show all roles
              </button>
            </div>
          )}

          <aside className="jobs-cta">
            <div>
              <h2>Don’t see the right role?</h2>
              <p>Tell us what you’re looking for. We’ll keep you in mind as new vacancies come in.</p>
            </div>
            <Link to="/#contact" className="button button-lime">
              Talk to our team <Arrow diagonal />
            </Link>
          </aside>
        </div>
      </section>

      {activeJob && <JobDrawer job={activeJob} onClose={closeJob} saved={saved} onToggle={toggleSaved} />}
    </main>
  );
}
