import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import JobSearchHero from "./JobSearchHero";
import MergedHero from "./MergedHero";
import AboutPage from "./AboutPage";


const Arrow = ({ diagonal = false }) => (
  <span aria-hidden="true" className="arrow">
    {diagonal ? "↗" : "→"}
  </span>
);

function Brand({ light = false }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      to="/"
      aria-label="Easy Recruiitz 365 home"
    >
      <span className="brand-mark">
        <img src="/assets/logo.png" alt="" aria-hidden="true" />
      </span>

      <span className="brand-word">
        easy<span>recruiitz</span>
        <small>365</small>
      </span>
    </Link>
  );
}



const services = [
  {
    no: "01",
    icon: "↗",
    title: "Permanent staffing",
    text: "Build a stronger workforce with professionals who bring the right skills, experience, and mindset. We help businesses identify suitable candidates, understand their requirements, and create connections designed to support long-term growth and team stability.",
  },
  {
    no: "02",
    icon: "✳",
    title: "Executive search",
    text: "Find experienced professionals and leaders who can help your organization move forward. We focus on understanding leadership requirements, business priorities, and company culture to help identify candidates capable of making a meaningful contribution.",
  },
  {
    no: "03",
    icon: "◷",
    title: "Contract & temporary",
    text: "Respond to changing business needs with flexible recruitment solutions. Whether you need short-term support, specialist expertise, or additional resources for a particular project, we help you explore talent options that align with your timelines and objectives.",
  },
  {
    no: "04",
    icon: "⌘",
    title: "Volume hiring",
    text: "Grow your workforce with a structured approach to high-volume recruitment. We help businesses manage large-scale hiring requirements, identify suitable applicants, and maintain a consistent candidate experience throughout the recruitment process.",
  },
];

const steps = [
  [
    "01",
    "We listen",
    "We learn about your goals, your team, and what success really looks like.",
  ],
  [
    "02",
    "We find",
    "We connect with talent beyond the obvious CV and keyword matches.",
  ],
  [
    "03",
    "We align",
    "We help both sides find the confidence and clarity to move forward.",
  ],
  [
    "04",
    "We grow",
    "We build relationships that continue long after the first introduction.",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const goToSection = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Brand />

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
<nav className={open ? "nav nav-open" : "nav"}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

<Link to="/JobSearchHero">Find Jobs</Link>
  {/* <button className="bt" onClick={() => goToSection("services")}>Services</button> */}

        
          <Link to="/about" onClick={() => setOpen(false)}>
            About us
          </Link>

          <button
            className="nav-cta"
            onClick={() => goToSection("contact")}
          >
            Let’s talk <Arrow diagonal />
          </button>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Illustration of a connected recruitment team"
    >
      <div className="visual-orbit orbit-one"></div>
      <div className="visual-orbit orbit-two"></div>
      <div className="visual-label label-top">
        <span className="live-dot"></span> PEOPLE FIRST, ALWAYS
      </div>
      <div className="portrait portrait-main">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"
          alt="Smiling professional in a modern office"
        />
      </div>
      <div className="portrait portrait-side">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85"
          alt="Professional woman smiling"
        />
      </div>
      <div className="floating-card match-card">
        <div className="match-icon">✓</div>
        <div>
          <strong>A great match.</strong>
          <span>Made for the long run</span>
        </div>
        <span className="card-spark">✳</span>
      </div>
      <div className="floating-card people-card">
        <div className="avatar-stack">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
            alt=""
          />
        </div>
        <div>
          <strong>People. Potential.</strong>
          <span>Better together.</span>
        </div>
      </div>
      <div className="visual-stamp">
        GOOD
        <br />
        PEOPLE
        <br />
        <em>change</em>
        <br />
        EVERYTHING
      </div>
      <div className="visual-bottom-note">
        THE RIGHT PEOPLE
        <br />
        MAKE ALL THE DIFFERENCE <Arrow diagonal />
      </div>
    </div>
  );
}

function Hero() {
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
            The right connection can change everything. We help ambitious
            businesses meet exceptional talent — and people find work that moves
            them forward.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-dark">
              Let’s find your people <Arrow diagonal />
            </a>
            <a href="#services" className="text-link">
              Explore what we do <Arrow />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="tiny-star">✳</span>
            <span>
              Recruitment is personal.
              <br />
              <strong>We believe it should feel that way.</strong>
            </span>
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

function IntroStrip() {
  return (
    <section className="intro-strip">
      <div className="container intro-inner">
        <p>PEOPLE AREN’T JUST A PART OF THE BUSINESS.</p>
        <p className="intro-emphasis">THEY’RE THE REASON IT MOVES.</p>
        <span className="intro-star">✳</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span> WHAT WE DO
            </div>
            <h2>
              Good hiring.
              <br />
              <span>Real impact.</span>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Every business is different. So is every person. We bring the two
              together with care, clarity, and a focus on what comes next.
            </p>
            <a href="#contact" className="text-link">
              Talk to our team <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <div className="service-card-top">
                <span>{service.no} / 04</span>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a
                href="#contact"
                className="round-link"
                aria-label={`Ask about ${service.title}`}
              >
                <Arrow diagonal />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container approach-grid">
        <div className="approach-intro">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line"></span> A BETTER WAY TO CONNECT
          </div>
          <h2>
            Less matching.
            <br />
            <em>More meaning.</em>
          </h2>
          <p>
            Great recruitment is about more than filling a vacancy. It starts with

  understanding the business, the people behind it, and the goals everyone

  wants to achieve. We take a considered approach to connecting employers

  and candidates, helping both sides understand expectations and explore

  opportunities that make sense for the long term.
          </p>
          <a href="#about" className="button button-light">
            Get to know us <Arrow diagonal />
          </a>
          <div className="approach-decoration">✳</div>
        </div>
        <div className="steps">
          {steps.map(([no, title, text]) => (
            <div className="step" key={no}>
              <span className="step-no">{no}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Arrow diagonal />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Colleagues collaborating around a table"
          />
          <div className="image-caption">
            <span>GOOD THINGS HAPPEN</span>
            <strong>
              When people
              <br />
              come together.
            </strong>
            <span className="caption-star">✳</span>
          </div>
        </div>
        <div className="about-copy">
          <div className="eyebrow">
            <span className="eyebrow-line"></span> A LITTLE ABOUT US
          </div>
          <h2>
            People first.
            <br />
            <span>Always.</span>
          </h2>
          <p>
            Easy Recruiitz 365 is built around the belief that successful recruitment

  starts with understanding people. We connect businesses with professionals

  whose skills, ambitions, and values align with the opportunities available.

  Our goal is to make hiring more thoughtful and job searching more meaningful.
          </p>
          <p>
            We take the time to understand what matters — to the business, to
            the team, and to the person behind the profile. Because the best
            connections go beyond a job description.
          </p>
          <a href="#contact" className="text-link">
            The story behind Easy Recruiitz <Arrow diagonal />
          </a>
          <div className="about-note">
            <span>✳</span>
            <p>
              Better work begins with
              <br />
              <strong>understanding each other.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuredJobs = [
  {
    title: "Frontend Developer",
    company: "Technology & Digital",
    location: "Noida, India",
    type: "Full-time",
    icon: "⌘",
  },
  {
    title: "UI/UX Designer",
    company: "Creative & Design",
    location: "Gurugram, India",
    type: "Full-time",
    icon: "✳",
  },
  {
    title: "Marketing Executive",
    company: "Marketing & Growth",
    location: "Remote",
    type: "Remote",
    icon: "↗",
  },
];

function FeaturedJobs() {
  return (
    <section className="section featured-jobs" id="jobs">
      <div className="container">
        <div className="section-heading">
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
Your next opportunity could be closer than you think.
              Explore roles that match your skills and ambitions.
</p>
            <a href="#contact" className="text-link">
              Find your next role <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="featured-job-grid">
          {featuredJobs.map((job) => (
            <article className="featured-job-card" key={job.title}>
              <div className="job-card-top">
                <span className="job-company-icon">{job.icon}</span>
                <span className="job-status">Opportunity</span>
              </div>

              <p className="job-card-company">{job.company}</p>
              <h3>{job.title}</h3>

              <div className="job-meta">
                <span>⌖ {job.location}</span>
                <span>◷ {job.type}</span>
              </div>

              <a href="#contact" className="job-card-link">
                Enquire about this role <Arrow diagonal />
              </a>
            </article>
          ))}
        </div>

        <p className="demo-data-note">
          These are demonstration listings. Replace them with verified
          vacancies before publishing.
        </p>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section audience-section">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-line" /> PEOPLE FIRST, ALWAYS
        </div>

        <h2 className="audience-title">
          Different goals.
          <br />
          <span>One great connection.</span>
        </h2>

        <div className="audience-grid">
          <article className="audience-card candidate-card">
            <span className="audience-label">FOR CANDIDATES / 01</span>
            <div className="audience-symbol">↗</div>

            <h3>
              Your next chapter
              <br />
              starts <em>here.</em>
            </h3>

            <p>
              Discover opportunities that value your skills,
              recognize your potential, and move your career forward.
            </p>

            <a href="#jobs" className="button button-dark">
              Explore opportunities <Arrow diagonal />
            </a>
          </article>

          <article
            className="audience-card employer-card"
            id="employers"
          >
            <span className="audience-label">FOR EMPLOYERS / 02</span>
            <div className="audience-symbol">✳</div>

            <h3>
              Find your people.
              <br />
              Build something <em>great.</em>
            </h3>

            <p>
              Connect with talent that understands your goals
              and brings the right energy to your team.
            </p>

            <a href="#contact" className="button button-light">
              Hire exceptional talent <Arrow diagonal />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="container">
        <div className="eyebrow eyebrow-light">
          <span className="eyebrow-line" /> PEOPLE. POTENTIAL. PURPOSE.
        </div>

        <h2>
          The right people
          <br />
          make <em>everything</em>
          <br />
          possible.
        </h2>

        <div className="brand-statement-bottom">
          <span>GOOD WORK STARTS WITH GOOD PEOPLE</span>
          <span>✳</span>
          <a href="#contact">
            LET&apos;S MAKE THE CONNECTION <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "The right recruitment experience starts with understanding people, not just job descriptions.",
      name: "Employer testimonial",
    },
    {
      quote:
        "Finding the right opportunity is about discovering a place where your skills and ambitions can grow.",
      name: "Candidate testimonial",
    },
    {
      quote:
        "Great connections come from clear communication, shared goals, and a people-first approach.",
      name: "Recruitment experience",
    },
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> PEOPLE SAY IT BEST
            </div>
            <h2>
              Better connections.
              <br />
              <span>Stronger relationships.</span>
            </h2>
          </div>
        </div>

        <div className="testimonial-grid">
          {items.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="testimonial-mark">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar">✳</span>
                <strong>{item.name}</strong>
              </div>
            </article>
          ))}
        </div>

        <p className="demo-data-note">
          Replace these illustrative testimonials with genuine customer
          feedback before publishing.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

const questions = [
  {
    question: "How can Easy Recruiitz 365 help employers?",
    answer:
      "We help employers understand their recruitment requirements and explore suitable talent for their organizations. Our services include permanent staffing, executive search, contract and temporary recruitment, and volume hiring. We aim to connect businesses with candidates whose skills and experience align with their requirements and workplace expectations.",
  },
  {
    question: "How can I find job opportunities?",
    answer:
      "You can explore the opportunities featured on our website and contact our team to discuss your career interests. Sharing your skills, experience, preferred role, and location can help us understand what you are looking for. Specific opportunities depend on current vacancies and employer requirements.",
  },
  {
    question: "What recruitment services do you offer?",
    answer:
      "Our recruitment services cover permanent staffing, executive search, contract and temporary staffing, and volume hiring. These services are designed to support different business requirements, from finding an individual specialist to identifying talent for larger recruitment needs.",
  },
  {
    question: "How do you help candidates find suitable roles?",
    answer:
      "We encourage candidates to consider their skills, experience, career goals, and preferred working environment when exploring opportunities. By understanding these factors alongside employer requirements, we aim to facilitate more relevant connections between candidates and organizations.",
  },
  {
    question: "Can businesses contact you for specific hiring needs?",
    answer:
      "Yes. Businesses can use the contact form to describe their hiring requirements, the positions they need to fill, and any relevant timelines. Our team can then review the information and discuss the most appropriate recruitment approach.",
  },
  {
    question: "How can I contact Easy Recruiitz 365?",
    answer:
      "Use the contact form on this page to share your name, email address, and reason for reaching out. Whether you are an employer, a job seeker, or a potential partner, provide a few details about your needs so the team can understand your enquiry.",
  },
];

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FREQUENTLY ASKED QUESTIONS
          </div>

          <h2>
            Good to know.
            <br />
            <span>Before we connect.</span>
          </h2>

          <p>
            Have another question? We&apos;d love to hear from you.
          </p>

          <a href="#contact" className="text-link">
            Talk to our team <Arrow diagonal />
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                aria-expanded={active === index}
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >
                <span>{item.question}</span>
                <span>{active === index ? "−" : "+"}</span>
              </button>

              {active === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "I’m hiring",
  });
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line"></span> YOUR NEXT CHAPTER
          </div>
          <h2>
            Let’s make
            <br />
            something <em>click.</em>
          </h2>
          <p>
            Looking for your next great hire or your next opportunity? We’d love
            to hear what you have in mind.
          </p>
          <div className="contact-asterisk">✳</div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <span>START A CONVERSATION</span>
            <span>01 — 03</span>
          </div>
          {submitted ? (
            <div className="success-message">
              <span>✓</span>
              <h3>Thanks for reaching out.</h3>
              <p>
                Your form is ready to connect to the company’s preferred inbox
                or CRM.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => setSubmitted(false)}
              >
                Send another message <Arrow />
              </button>
            </div>
          ) : (
            <>
              <label>
                Your name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="What should we call you?"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </label>
              <label>
                I’m reaching out because
                <select
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                >
                  <option>I’m hiring</option>
                  <option>I’m looking for a role</option>
                  <option>I’d like to partner</option>
                  <option>Something else</option>
                </select>
              </label>
              <button className="button button-lime form-submit" type="submit">
                Let’s talk <Arrow diagonal />
              </button>
              <p className="form-note">
                This demo form is frontend-only. Connect it to your email or
                backend before launch.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
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
          <a href="/#services">What we do</a>
          <a href="/#approach">Our approach</a>
          <Link to="/about">About us</Link>
        </div>

        <div className="footer-col">
          <span>LET’S CONNECT</span>
          <a href="/#contact">For employers <Arrow diagonal /></a>
          <a href="/#contact">For candidates <Arrow diagonal /></a>
          <a href="/#contact">Contact us <Arrow diagonal /></a>
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
        <span>
          © {new Date().getFullYear()} Easy Recruiitz 365.
          All rights reserved.
        </span>

        <span>
          MADE FOR PEOPLE, BY PEOPLE{" "}
          <span className="footer-heart">✳</span>
        </span>
      </div>
    </footer>
  );
}


function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedJobs />
        <AudienceSection />
        <IntroStrip />
        <Services />
        <Approach />
        <About />
        <BrandStatement />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

function AboutRoute() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route
  path="/jobsearchhero"
  element={
    <>
      <Header />
      <JobSearchHero />
      <Footer />
    </>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


