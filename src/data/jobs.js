// Sample vacancy data used to power the UI.
// Swap `jobs` for an API response (e.g. fetch("/api/jobs")) when a backend exists;
// every component reads from this shape, so nothing else needs to change.

export const categories = [
  { id: "technology", title: "Technology", description: "Software, IT & Engineering", icon: "⌘" },
  { id: "design", title: "Design & Creative", description: "UI/UX, Graphics & Product", icon: "✳" },
  { id: "marketing", title: "Marketing", description: "Digital, Growth & Branding", icon: "↗" },
  { id: "finance", title: "Finance", description: "Accounting & Financial Services", icon: "▤" },
  { id: "hr", title: "Human Resources", description: "Recruitment & People Operations", icon: "◎" },
  { id: "operations", title: "Operations", description: "Business & Administration", icon: "◷" },
];

export const jobTypes = ["Full-time", "Contract", "Remote"];

export const jobs = [
  {
    id: "frontend-developer-noida",
    title: "Frontend Developer",
    sector: "Technology & Digital",
    category: "technology",
    location: "Noida, India",
    type: "Full-time",
    experience: "1–3 years",
    postedDaysAgo: 1,
    featured: true,
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    summary:
      "Build fast, accessible interfaces for a product team shipping weekly. You will own features from design handoff to production.",
    responsibilities: [
      "Turn design files into responsive, accessible React components",
      "Collaborate with designers and backend engineers on feature scope",
      "Write maintainable code with sensible tests and reviews",
      "Keep performance, Core Web Vitals and UX quality high",
    ],
  },
  {
    id: "ui-ux-designer-gurugram",
    title: "UI/UX Designer",
    sector: "Creative & Design",
    category: "design",
    location: "Gurugram, India",
    type: "Full-time",
    experience: "1–2 years",
    postedDaysAgo: 2,
    featured: true,
    skills: ["Figma", "Design systems", "Prototyping", "User research"],
    summary:
      "Shape end-to-end product experiences — from research and wireframes to polished, developer-ready interfaces.",
    responsibilities: [
      "Run lightweight user research and usability tests",
      "Design flows, wireframes and high-fidelity prototypes in Figma",
      "Maintain and extend the design system",
      "Work closely with engineers to ship what was designed",
    ],
  },
  {
    id: "digital-marketing-executive-remote",
    title: "Digital Marketing Executive",
    sector: "Marketing & Growth",
    category: "marketing",
    location: "Remote",
    type: "Remote",
    experience: "0–2 years",
    postedDaysAgo: 3,
    featured: true,
    skills: ["SEO", "Paid social", "Analytics", "Copywriting"],
    summary:
      "Plan and run campaigns across search, social and email, and report on what is actually moving the numbers.",
    responsibilities: [
      "Plan and execute multi-channel campaigns",
      "Track performance and report insights weekly",
      "Support content, SEO and email marketing",
      "Test messaging and landing pages to improve conversion",
    ],
  },
  {
    id: "backend-engineer-nodejs-noida",
    title: "Backend Engineer (Node.js)",
    sector: "Technology & Digital",
    category: "technology",
    location: "Noida, India",
    type: "Full-time",
    experience: "2–4 years",
    postedDaysAgo: 4,
    skills: ["Node.js", "PostgreSQL", "Redis", "System design"],
    summary:
      "Design reliable APIs and services that power a growing platform, with an emphasis on clean data models and observability.",
    responsibilities: [
      "Design, build and document REST APIs",
      "Model data and optimise queries in PostgreSQL",
      "Introduce caching and background processing where it helps",
      "Monitor, debug and improve production systems",
    ],
  },
  {
    id: "talent-acquisition-specialist-delhi",
    title: "Talent Acquisition Specialist",
    sector: "People & Culture",
    category: "hr",
    location: "New Delhi, India",
    type: "Full-time",
    experience: "2–5 years",
    postedDaysAgo: 5,
    skills: ["Sourcing", "Interviewing", "Stakeholder management", "ATS tools"],
    summary:
      "Partner with hiring managers to attract, assess and close great candidates with a candidate experience people talk about.",
    responsibilities: [
      "Own the full recruitment cycle for assigned roles",
      "Source passive candidates across multiple channels",
      "Advise hiring managers on market and process",
      "Keep candidates informed and respected at every stage",
    ],
  },
  {
    id: "financial-analyst-gurugram",
    title: "Financial Analyst",
    sector: "Finance & Accounting",
    category: "finance",
    location: "Gurugram, India",
    type: "Full-time",
    experience: "1–3 years",
    postedDaysAgo: 6,
    skills: ["Excel", "Financial modelling", "Reporting", "Budgeting"],
    summary:
      "Support planning, budgeting and reporting with accurate analysis that helps leadership make confident decisions.",
    responsibilities: [
      "Build and maintain financial models and forecasts",
      "Prepare monthly management reporting",
      "Analyse variances and highlight risks and opportunities",
      "Support audits and compliance requirements",
    ],
  },
  {
    id: "operations-coordinator-noida",
    title: "Operations Coordinator",
    sector: "Business & Admin",
    category: "operations",
    location: "Noida, India",
    type: "Contract",
    experience: "0–2 years",
    postedDaysAgo: 8,
    skills: ["Coordination", "MS Office", "Vendor management", "Communication"],
    summary:
      "Keep day-to-day operations running smoothly by coordinating teams, vendors and schedules.",
    responsibilities: [
      "Coordinate schedules, tasks and vendor communication",
      "Maintain accurate records and process documentation",
      "Flag blockers early and follow through on fixes",
      "Support leadership with reporting and admin",
    ],
  },
  {
    id: "product-designer-remote",
    title: "Product Designer",
    sector: "Creative & Design",
    category: "design",
    location: "Remote",
    type: "Remote",
    experience: "3–5 years",
    postedDaysAgo: 9,
    skills: ["Product thinking", "Figma", "Motion", "Accessibility"],
    summary:
      "Lead design for a core product area, balancing user needs with business goals and shipping thoughtfully.",
    responsibilities: [
      "Own design for a product area from discovery to launch",
      "Define success metrics with product and engineering",
      "Mentor junior designers and raise the quality bar",
      "Champion accessibility and inclusive design",
    ],
  },
  {
    id: "content-strategist-delhi",
    title: "Content Strategist",
    sector: "Marketing & Growth",
    category: "marketing",
    location: "New Delhi, India",
    type: "Contract",
    experience: "2–4 years",
    postedDaysAgo: 11,
    skills: ["Editorial planning", "SEO", "Brand voice", "Storytelling"],
    summary:
      "Define the voice and editorial plan for a growing brand, turning ideas into content that earns attention.",
    responsibilities: [
      "Build and manage the editorial calendar",
      "Write and edit long-form and social content",
      "Work with design and growth on distribution",
      "Measure content performance and iterate",
    ],
  },
  {
    id: "react-native-developer-remote",
    title: "React Native Developer",
    sector: "Technology & Digital",
    category: "technology",
    location: "Remote",
    type: "Remote",
    experience: "2–4 years",
    postedDaysAgo: 12,
    skills: ["React Native", "Expo", "TypeScript", "App Store releases"],
    summary:
      "Ship polished cross-platform mobile experiences and own the release process from build to store.",
    responsibilities: [
      "Build and maintain cross-platform mobile features",
      "Integrate APIs and handle offline and error states",
      "Own release builds and store submissions",
      "Profile and improve app performance",
    ],
  },
];

export const postedLabel = (days) =>
  days <= 0 ? "Today" : days === 1 ? "1 day ago" : `${days} days ago`;

export const categoryById = (id) => categories.find((c) => c.id === id);
