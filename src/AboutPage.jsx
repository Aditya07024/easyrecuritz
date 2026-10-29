import { Link } from "react-router-dom";

const Arrow = ({ diagonal = false }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const values = [
  {
    number: "01",
    title: "People before profiles.",
    description:
      "Behind every CV is a person with ambitions, experiences, and potential. We look beyond the paperwork.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Listen with intent.",
    description:
      "Understanding the real need is where meaningful recruitment begins. We make room for the conversations that matter.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Quality over shortcuts.",
    description:
      "A successful placement is about more than filling a vacancy. It is about finding a connection built to last.",
    icon: "◷",
  },
  {
    number: "04",
    title: "Grow together.",
    description:
      "Strong partnerships are built through trust, communication, and a shared commitment to better outcomes.",
    icon: "∞",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We get to know your goals, expectations, team, and what the right fit means to you.",
  },
  {
    number: "02",
    title: "Discover",
    text: "We identify talent and opportunities that align with the requirements and aspirations.",
  },
  {
    number: "03",
    title: "Connect",
    text: "We bring people together through thoughtful conversations and clear communication.",
  },
  {
    number: "04",
    title: "Move forward",
    text: "We help both sides move towards an opportunity with greater confidence and clarity.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About us</span>
          </div>

          <div className="about-hero-grid">
            <div className="about-hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THE PEOPLE BEHIND THE POSSIBILITIES
              </div>

              <h1>
                Better work
                <br />
                starts with
                <br />
                <span>better connections.</span>
              </h1>

              <p>
                We believe the right people can change the direction
                of a business — and the right opportunity can change
                the direction of a life.
              </p>

              <div className="about-hero-actions">
                <Link to="/#contact" className="button button-dark">
                  Let’s connect <Arrow diagonal />
                </Link>

                <a href="#our-story" className="text-link">
                  Discover our story <Arrow />
                </a>
              </div>
            </div>

            <div className="about-hero-visual">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Colleagues sharing ideas and collaborating in a modern workplace"
              />

              <div className="about-image-tag">
                <span className="live-dot" />
                PEOPLE FIRST. ALWAYS.
              </div>

              <div className="about-floating-note">
                <span className="about-floating-icon">✳</span>
                <div>
                  <strong>It starts with people.</strong>
                  <span>Everything else follows.</span>
                </div>
              </div>

              <div className="about-visual-number">365</div>
            </div>
          </div>

          <div className="about-hero-bottom">
            <span>THOUGHTFUL RECRUITMENT</span>
            <span className="bottom-line" />
            <span>HUMAN CONNECTIONS</span>
            <span className="bottom-line" />
            <span>BETTER POSSIBILITIES ↗</span>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="about-statement">
        <div className="container about-statement-inner">
          <span className="statement-label">OUR BELIEF</span>

          <h2>
            People aren't just part of a business.
            <br />
            <span>They're what move it forward.</span>
          </h2>

          <span className="statement-star">✳</span>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section about-story" id="our-story">
        <div className="container about-story-grid">
          <div className="about-story-visual">
            <div className="story-image-main">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="A team working together around a table"
                loading="lazy"
              />
            </div>

            <div className="story-image-accent">
              <span>✳</span>
              <p>
                PEOPLE
                <br />
                MAKE THE
                <br />
                DIFFERENCE.
              </p>
            </div>

            <span className="story-vertical-label">
              CONNECTION IS WHERE IT BEGINS
            </span>
          </div>

          <div className="about-story-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              OUR STORY
            </div>

            <h2>
              Recruitment
              <br />
              with a more
              <br />
              <em>human side.</em>
            </h2>

            <p className="story-lead">
              The right connection is more than a successful
              introduction. It is the beginning of something better.
            </p>

            <p>
              At Easy Recruiitz 365, our approach centres on
              understanding the people behind every hiring decision.
              Businesses need more than a shortlist, and candidates
              deserve more than a job description.
            </p>

            <p>
              We bring these perspectives together with a focus on
              communication, suitability, and long-term potential.
              Because when expectations align, opportunities become
              more meaningful.
            </p>

            <Link to="/#services" className="text-link">
              Explore our services <Arrow diagonal />
            </Link>

            <div className="story-signature">
              <span>✳</span>
              <div>
                <strong>A thoughtful approach.</strong>
                <span>A better way to connect.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section about-values">
        <div className="container">
          <div className="values-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                WHAT GUIDES US
              </div>

              <h2>
                Good intentions.
                <br />
                <span>Meaningful actions.</span>
              </h2>
            </div>

            <p>
              The way we work matters just as much as the result.
              These are the principles behind every connection we make.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <div className="value-card-top">
                  <span>{value.number} / 04</span>
                  <span className="value-icon">{value.icon}</span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <span className="value-bottom-mark">✳</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section about-process">
        <div className="container">
          <div className="process-heading">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              HOW WE MAKE IT HAPPEN
            </div>

            <h2>
              A little more
              <br />
              <em>understanding.</em>
              <br />
              A lot more possibility.
            </h2>

            <p>
              Great recruitment comes from getting the fundamentals
              right and keeping people at the centre of every step.
            </p>
          </div>

          <div className="about-process-grid">
            {process.map((item) => (
              <article className="process-card" key={item.number}>
                <span className="process-number">{item.number}</span>

                <div className="process-card-arrow">
                  <Arrow diagonal />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="process-footer">
            <span>EVERY CONNECTION HAS A PURPOSE.</span>
            <span>EVERY PERSON HAS POTENTIAL. ✳</span>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section about-audience">
        <div className="container">
          <div className="audience-heading">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              BETTER, TOGETHER
            </div>

            <h2>
              Two perspectives.
              <br />
              <span>One shared goal.</span>
            </h2>
          </div>

          <div className="audience-grid">
            <article className="audience-card audience-employers">
              <span className="audience-index">FOR EMPLOYERS / 01</span>

              <div className="audience-decoration">↗</div>

              <h3>
                Find the people
                <br />
                who move you forward.
              </h3>

              <p>
                Find talent aligned with your business needs, team
                culture, and ambitions for the future.
              </p>

              <Link to="/#contact" className="button button-dark">
                Let's discuss your hiring needs <Arrow diagonal />
              </Link>
            </article>

            <article className="audience-card audience-candidates">
              <span className="audience-index">FOR CANDIDATES / 02</span>

              <div className="audience-decoration">✳</div>

              <h3>
                Find an opportunity
                <br />
                that feels right.
              </h3>

              <p>
                Take the next step towards work that values your
                abilities, experience, and potential.
              </p>

              <Link to="/#contact" className="button button-light">
                Start a conversation <Arrow diagonal />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-final-cta">
        <div className="container final-cta-inner">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SOMETHING GOOD STARTS HERE
          </div>

          <h2>
            The next great
            <br />
            connection could
            <br />
            <em>start with you.</em>
          </h2>

          <p>
            Whether you're building a team or building your career,
            let's find out what we can make possible together.
          </p>

          <Link to="/#contact" className="button button-dark">
            Let's make the connection <Arrow diagonal />
          </Link>

          <span className="final-cta-star">✳</span>
        </div>
      </section>
    </main>
  );
}