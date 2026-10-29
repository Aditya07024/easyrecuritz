import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Arrow } from "./ui";

export function Brand({ light = false }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      to="/"
      aria-label="Easy Recruiitz 365 — home"
    >
      <span className="brand-mark">
        <img src="/assets/logo.png" alt="" width="44" height="44" />
      </span>
      <span className="brand-word">
        easy<span>recruiitz</span>
        <small>365</small>
      </span>
    </Link>
  );
}

/** Scrolls to top on route change, or to the #hash target (with a retry for lazy content). */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Only pathname/hash are dependencies, so query-string filter changes on /jobs don't reset scroll.
      window.scrollTo({ top: 0, left: 0 });
      return;
    }
    let tries = 0;
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else if (tries++ < 10) setTimeout(go, 60);
    };
    go();
  }, [pathname, hash]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-locked");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Brand />

        <button
          ref={toggleRef}
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/jobs" onClick={close}>Find jobs</NavLink>
          <NavLink to="/about" onClick={close}>About us</NavLink>
          <Link to="/#contact" className="nav-cta" onClick={close}>
            Let’s talk <Arrow diagonal />
          </Link>
        </nav>
      </div>
      {open && <button className="nav-scrim" aria-label="Close menu" onClick={close} tabIndex={-1} />}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand light />
          <p className="footer-tagline">
            Better connections.
            <br />
            Brighter possibilities.
          </p>
        </div>

        <div className="footer-col">
          <span>EXPLORE</span>
          <Link to="/">Home</Link>
          <Link to="/jobs">Find jobs</Link>
          <Link to="/#services">What we do</Link>
          <Link to="/about">About us</Link>
        </div>

        <div className="footer-col">
          <span>LET’S CONNECT</span>
          <Link to="/#contact">For employers <Arrow diagonal /></Link>
          <Link to="/jobs">For candidates <Arrow diagonal /></Link>
          <Link to="/#contact">Contact us <Arrow diagonal /></Link>
        </div>

        <div className="footer-note">
          GOOD PEOPLE
          <br />
          <em>make</em>
          <br />
          GREAT THINGS.
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Easy Recruiitz 365. All rights reserved.</span>
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <div id="main" tabIndex={-1}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
