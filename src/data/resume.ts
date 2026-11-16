import type { Resume } from "@/types/resume";

/**
 * Single source of truth for the portfolio's content.
 *
 * Sourced from Karthikeyan Subramanian's resume. Annotating the export as
 * `Resume` checks the object against the contract (a typo or missing field
 * fails the build instead of shipping silently) while keeping optional fields
 * like `featured`, `links` and `note` accessible to the components.
 */
export const resume: Resume = {
  profile: {
    name: "Karthikeyan Subramanian",
    title: "Product / Full-Stack Engineer",
    tagline:
      "I take ambiguous problems from spec to deploy across a React + TypeScript SPA and a Ruby on Rails API — spec-driven, test-first, and AI-augmented.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "kkarthik1542734@gmail.com",
    phone: "+91 78128 56527",
    resumeFileName: "Karthikeyan-Subramanian-Resume.pdf",
    summary:
      "Product engineer with ~3 years of full-stack experience shipping production features end-to-end on a live, real-money marketplace. I take ambiguous problems from specification to deployment across a React + TypeScript SPA and a Ruby on Rails API, and I build standalone services in Bun + Hono + TypeScript. I work spec-first (OpenSpec propose → review → apply) and test-first (TDD), use AI coding agents and curated skills to move faster without lowering the bar, and stay security- and blast-radius conscious in a system that funds and releases real money through milestone escrow.",
    highlights: [
      { value: "~3 yrs", label: "Full-stack experience" },
      { value: "Real-money", label: "Escrow marketplace" },
      { value: "Spec + TDD", label: "Delivery workflow" },
      { value: "End-to-end", label: "Feature ownership" },
    ],
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/karthik1210100",
        icon: "github",
        handle: "karthik1210100",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/karthik-webdev",
        icon: "linkedin",
        handle: "karthik-webdev",
      },
      {
        label: "Email",
        href: "mailto:kkarthik1542734@gmail.com",
        icon: "mail",
        handle: "kkarthik1542734@gmail.com",
      },
      {
        label: "Phone",
        href: "tel:+917812856527",
        icon: "phone",
        handle: "+91 78128 56527",
      },
    ],
  },

  principles: [
    {
      title: "Spec-driven",
      icon: "spec",
      description:
        "Non-trivial work starts as an OpenSpec change (propose → review → apply) so intent is reviewed and agreed before any implementation — cutting rework and scope drift.",
    },
    {
      title: "Test-first",
      icon: "test",
      description:
        "I write the failing test, prove it red and explain why, then implement — which keeps regressions out of a large codebase with no green baseline.",
    },
    {
      title: "AI-augmented, standards-held",
      icon: "ai",
      description:
        "I use coding agents and curated skills to raise delivery speed while enforcing consistent coding standards and review discipline — not to skip them.",
    },
    {
      title: "Blast-radius discipline",
      icon: "blast-radius",
      description:
        "I name which environment and which database a change touches before running it — essential in a system that debits real cards.",
    },
    {
      title: "Security by default",
      icon: "security",
      description:
        "Close IDORs, replace permanent asset URLs with short-lived signed ones, and scope sensitive file access to authorized participants.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "Ruby", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      items: [
        "Ruby on Rails",
        "Bun",
        "Hono",
        "Node.js",
        "REST APIs",
        "Microservices",
        "Action Cable / WebSockets",
        "Sidekiq & scheduled jobs",
        "Django",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "TypeScript",
        "Material UI",
        "react-native-web",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Databases & Background Jobs",
      items: ["PostgreSQL", "MySQL", "Redis", "Sidekiq", "Sidekiq Scheduler"],
    },
    {
      category: "Testing & Quality",
      items: [
        "Test-Driven Development",
        "Automated / integration testing",
        "RSpec",
        "Jest",
        "Bun test",
        "Structure-check gates",
        "Postman",
      ],
    },
    {
      category: "Engineering Practice",
      items: [
        "OpenSpec (spec-driven development)",
        "TDD",
        "AI-augmented development",
        "Agentic coding",
        "Reusable skills",
        "Code review",
        "CI gating",
      ],
    },
    {
      category: "Auth & Security",
      items: [
        "JWT",
        "Pundit",
        "CanCanCan",
        "IDOR remediation",
        "Signed / expiring URLs",
        "Participant-scoped authorization",
        "AI security scanning",
      ],
    },
    {
      category: "Cloud, Infra & CI/CD",
      items: [
        "AWS S3",
        "Active Storage",
        "Docker",
        "Docker Compose",
        "nginx",
        "Jenkins",
        "GitLab CI",
      ],
    },
    {
      category: "Payments & Monitoring",
      items: [
        "Cashfree (escrow / payouts / KYC)",
        "PostHog",
        "Prometheus",
        "Yabeda",
        "BugSnag",
      ],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub", "Bitbucket"],
    },
  ],

  experience: [
    {
      role: "Product Engineer (AI-driven)",
      organization: "Lingaasys Technology",
      start: "Oct 2025",
      end: "Present",
      summary:
        "Full feature ownership on a live, real-money design marketplace — from Postgres schema to React UI to deploy.",
      achievements: [
        "Build and own features end-to-end on Dezinersknot, a two-sided design marketplace with milestone-based escrow — spanning React/TypeScript UI, Rails API, Postgres schema, background jobs, tests and deploy.",
        "Designed and built a standalone Bun + Hono + TypeScript microservice (influencer platform) behind nginx that owns its own schema and forwards caller auth to Rails — a clean, well-bounded service boundary with no shared signing secret.",
        "Practice spec-driven development with OpenSpec and test-first TDD; added automated coverage with Bun test, Jest and RSpec plus a structure-check gate to keep the failing-set stable.",
        "Hardened security across the money paths: closed IDORs, replaced permanent Active Storage URLs with short-lived signed URLs, and moved chat attachments onto an authenticated, participant-scoped, revocable streaming endpoint.",
        "Built contract- and milestone-lifecycle notification and transactional-email workflows (in-app + email) with environment-configurable timers and per-milestone reminder gating.",
        "Work on real-money payment flows with Cashfree (order funding, escrow, KYC-verified payouts) and application monitoring with Yabeda and Prometheus, applying conservative, lock-guarded patterns around payouts.",
        "Operate in an AI-augmented workflow — coding agents, reusable skills and AI security scanners — to compress delivery time while holding coding standards and review quality.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Ruby on Rails",
        "Bun",
        "Hono",
        "PostgreSQL",
        "Sidekiq",
        "Cashfree",
      ],
    },
    {
      role: "Web Developer / Developer Trainee",
      organization: "Mallow Technologies Pvt. Ltd.",
      start: "May 2023",
      end: "May 2025",
      summary:
        "Two years building and maintaining production Rails + React features, with a focus on real-time and performance.",
      achievements: [
        "Progressed from Developer Trainee to Web Developer on full-stack applications built with Ruby on Rails, React and PostgreSQL.",
        "Developed and maintained REST API functionality and frontend features for production web applications.",
        "Implemented real-time communication using Action Cable, WebSockets and Faye, including a training chat application.",
        "Worked on database query optimization and frontend responsiveness to improve application performance.",
        "Used BugSnag for error monitoring and collaborated through Git, Bitbucket and team development workflows.",
      ],
      stack: ["Ruby on Rails", "React", "PostgreSQL", "Action Cable", "BugSnag"],
    },
  ],

  projects: [
    {
      name: "Dezinersknot — Design-Services Marketplace with Milestone Escrow",
      featured: true,
      description:
        "Full-stack marketplace connecting clients and freelance designers through postings, proposals, negotiations, milestone-based contracts funded into escrow, real-time messaging and dispute workflows — plus a standalone influencer microservice.",
      tech: [
        "React",
        "TypeScript",
        "Material UI",
        "Ruby on Rails",
        "Bun",
        "Hono",
        "PostgreSQL",
        "Action Cable",
        "Sidekiq",
        "Redis",
        "AWS S3",
        "Docker",
        "Jenkins",
        "Cashfree",
      ],
      links: [{ label: "live.dezinersknot.com", href: "https://live.dezinersknot.com/" }],
    },
    {
      name: "Influencer Platform Microservice",
      description:
        "Separate Bun + Hono + TypeScript service with its own Postgres schema, reached through nginx, forwarding caller tokens to Rails for auth — built spec-first (OpenSpec) and test-first, with onboarding, portfolio and verification flows.",
      tech: ["Bun", "Hono", "TypeScript", "PostgreSQL", "nginx", "OpenSpec", "Bun test"],
    },
    {
      name: "Senior Living Management System",
      description:
        "Contributed to a full-stack senior-living platform with real-time features, database query optimization, error monitoring and digital-signage functionality.",
      tech: ["Ruby on Rails", "React", "PostgreSQL", "WebSockets"],
      links: [
        { label: "continYoucare.com", href: "https://continyoucare.com" },
        { label: "intelligotek.com", href: "https://intelligotek.com" },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Civil Engineering",
      institution: "Tamilnadu College of Engineering, Coimbatore",
      year: "April 2019",
    },
  ],

  certifications: [
    {
      title: "TypeScript Developer Certification",
      issuer: "Cispro Institute, Coimbatore",
      year: "2026",
    },
    {
      title: "Frontend Developer Certification",
      issuer: "Cispro Institute, Coimbatore",
      year: "2025",
    },
    {
      title: "Full Stack Developer Certification",
      issuer: "Livewire Institute, Karur",
      year: "2022",
      note: "Training included Django, MySQL, and a course-management application project.",
    },
  ],
};
