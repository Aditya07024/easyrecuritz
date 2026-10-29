import { Link } from "react-router-dom";
import { Arrow, CountUp } from "../components/ui";
import { categories } from "../data/jobs";

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

export const commitments = [
  {
    no: "01",
    title: "Clear communication",
    text: "You always know where things stand — what we are doing, what happens next, and why.",
  },
  {
    no: "02",
    title: "Respect for your time",
    text: "Focused conversations, relevant introductions and no spray-and-pray CV sending.",
  },
  {
    no: "03",
    title: "Honest advice",
    text: "If a role or a candidate is not the right fit, we will say so — and explain why.",
  },
  {
    no: "04",
    title: "Built for the long run",
    text: "We care about how a placement looks a year from now, not just on day one.",
  },
];

export function StatsStrip() {
  const stats = [
    { value: 4, label: "Hiring models", note: "Permanent, executive, contract & volume" },
    { value: categories.length, label: "Industries covered", note: "From technology to operations" },
    { value: 2, label: "Audiences, one team", note: "Employers and candidates" },
  ];
  return (
    <section className="stats-strip" aria-label="At a glance">
      <div className="container stats-grid" data-reveal>
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>
              <CountUp to={s.value} />
            </strong>
            <div>
              <span>{s.label}</span>
              <small>{s.note}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Commitments() {
  return (
    <section className="section commitments-section" id="commitments">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> HOW WE WORK
            </div>
            <h2>
              Our promise.
              <br />
              <span>Every conversation.</span>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Four commitments we hold ourselves to, whether you are hiring your first
              team member or your fiftieth.
            </p>
            <Link to="/about" className="text-link">
              More about our approach <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="commitment-grid">
          {commitments.map((c) => (
            <article className="commitment-card" key={c.no} data-reveal>
              <span className="commitment-no">{c.no}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeroVisual() {
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
          decoding="async"
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

export function IntroStrip() {
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

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading" data-reveal>
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
            <article className="service-card" data-reveal key={service.no}>
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

export function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container approach-grid">
        <div className="approach-intro" data-reveal>
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
            <div className="step" data-reveal key={no}>
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

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap" data-reveal>
          <img
            className="about-image"
            loading="lazy"
            decoding="async"
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
        <div className="about-copy" data-reveal>
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
          <Link to="/about" className="text-link">
            The story behind Easy Recruiitz <Arrow diagonal />
          </Link>
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

export function AudienceSection() {
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
          <article className="audience-card candidate-card" data-reveal>
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
            className="audience-card employer-card" data-reveal
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

export function BrandStatement() {
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

