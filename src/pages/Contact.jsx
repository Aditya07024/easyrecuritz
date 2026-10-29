import { useRef, useState } from "react";
import { Arrow } from "../components/ui";

const interests = ["I’m hiring", "I’m looking for a role", "I’d like to partner", "Something else"];
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please tell us your name.";
  if (!form.email.trim()) errors.email = "We need an email address to reply to.";
  else if (!emailOk(form.email.trim())) errors.email = "That email doesn’t look quite right.";
  if (form.message.trim().length > 0 && form.message.trim().length < 10)
    errors.message = "A little more detail helps us help you (10+ characters).";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: interests[0], message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const successRef = useRef(null);

  const errors = validate(form);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const blur = (key) => () => setTouched((t) => ({ ...t, [key]: true }));
  const show = (key) => touched[key] && errors[key];

  async function submit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length) {
      // wait for React to flag the invalid fields, then focus the first one
      setTimeout(() => document.querySelector(".contact-form [aria-invalid='true']")?.focus(), 0);
      return;
    }
    setStatus("sending");
    // TODO: send `form` to your backend / email service / CRM here (fetch("/api/contact", …)).
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    setTimeout(() => successRef.current?.focus(), 30);
  }

  function reset() {
    setForm({ name: "", email: "", interest: interests[0], message: "" });
    setTouched({});
    setStatus("idle");
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line"></span> YOUR NEXT CHAPTER
          </div>
          <h2>
            Let’s make
            <br />
            something <em>click.</em>
          </h2>
          <p>
            Looking for your next great hire or your next opportunity? We’d love to hear what
            you have in mind.
          </p>
          <ul className="contact-points">
            <li><span aria-hidden="true">✓</span> Tell us a little about what you need</li>
            <li><span aria-hidden="true">✓</span> A real person reads every enquiry</li>
            <li><span aria-hidden="true">✓</span> No obligation, no jargon</li>
          </ul>
          <div className="contact-asterisk" aria-hidden="true">✳</div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate data-reveal>
          <div className="form-heading">
            <span>START A CONVERSATION</span>
          </div>

          {status === "sent" ? (
            <div className="success-message" ref={successRef} tabIndex={-1} role="status">
              <span aria-hidden="true">✓</span>
              <h3>Thanks, {form.name.trim().split(" ")[0]} — message received.</h3>
              <p>We’ll get back to you at {form.email.trim()} as soon as we can.</p>
              <button type="button" className="text-link" onClick={reset}>
                Send another message <Arrow />
              </button>
            </div>
          ) : (
            <>
              <fieldset className="interest-group">
                <legend>I’m reaching out because…</legend>
                <div>
                  {interests.map((item) => (
                    <label key={item} className={form.interest === item ? "is-on" : ""}>
                      <input
                        type="radio"
                        name="interest"
                        value={item}
                        checked={form.interest === item}
                        onChange={set("interest")}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="field">
                Your name
                <input
                  value={form.name}
                  onChange={set("name")}
                  onBlur={blur("name")}
                  placeholder="What should we call you?"
                  autoComplete="name"
                  aria-invalid={!!show("name")}
                  aria-describedby={show("name") ? "err-name" : undefined}
                />
                {show("name") && <em className="field-error" id="err-name">{errors.name}</em>}
              </label>

              <label className="field">
                Email address
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  onBlur={blur("email")}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={!!show("email")}
                  aria-describedby={show("email") ? "err-email" : undefined}
                />
                {show("email") && <em className="field-error" id="err-email">{errors.email}</em>}
              </label>

              <label className="field">
                Anything we should know? <small>(optional)</small>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  onBlur={blur("message")}
                  placeholder="Roles, timelines, location, or what you’re looking for"
                  aria-invalid={!!show("message")}
                  aria-describedby={show("message") ? "err-message" : undefined}
                />
                {show("message") && <em className="field-error" id="err-message">{errors.message}</em>}
              </label>

              <button
                className="button button-lime form-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="spinner" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    Let’s talk <Arrow diagonal />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
