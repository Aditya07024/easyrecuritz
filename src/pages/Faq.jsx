import { useState } from "react";
import { Arrow } from "../components/ui";

const questions = [
  {
    question: "How can Easy Recruiitz 365 help employers?",
    answer:
      "We take time to understand your requirements, then explore suitable talent across permanent staffing, executive search, contract and temporary recruitment, and volume hiring — matching on skills, experience and workplace fit.",
  },
  {
    question: "How can I find job opportunities?",
    answer:
      "Browse the roles on our jobs page, or contact our team and tell us about your skills, preferred role and location. Available opportunities depend on current vacancies and employer requirements.",
  },
  {
    question: "What recruitment services do you offer?",
    answer:
      "Permanent staffing, executive search, contract and temporary staffing, and volume hiring — from a single specialist hire to large-scale recruitment programmes.",
  },
  {
    question: "How do you help candidates find suitable roles?",
    answer:
      "We look at your skills, experience, goals and preferred working environment alongside employer requirements, so the introductions we make are relevant rather than random.",
  },
  {
    question: "Can businesses contact you for specific hiring needs?",
    answer:
      "Yes. Use the contact form to describe the roles you need to fill and any timelines. Our team will review the details and discuss the most appropriate approach.",
  },
  {
    question: "How can I contact Easy Recruiitz 365?",
    answer:
      "Use the contact form at the bottom of this page with your name, email and what you are looking for. Employers, job seekers and potential partners are all welcome.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div data-reveal>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2>
            Good to know.
            <br />
            <span>Before we connect.</span>
          </h2>
          <p>Have another question? We&apos;d love to hear from you.</p>
          <a href="#contact" className="text-link">
            Talk to our team <Arrow diagonal />
          </a>
        </div>

        <div className="faq-list" data-reveal>
          {questions.map((item, index) => {
            const open = active === index;
            return (
              <div className={`faq-item ${open ? "is-open" : ""}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    id={`faq-q-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setActive(open ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                >
                  <div>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
