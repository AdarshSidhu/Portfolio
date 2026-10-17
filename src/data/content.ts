export const site = {
  name: "Adarsh Santhosh",
  title: "Python Django / Backend Developer",
  pitch:
    "I build scalable Django backends, REST APIs, and integrations for ERP, LMS, and membership platforms — with secure auth, caching, and production deploys.",
  email: "adarshsanthosh143@gmail.com",
  phone: "+91 8921452168",
  linkedin: "https://www.linkedin.com/in/adarsh-santhosh03",
  github: "https://github.com/AdarshSidhu",
  cvPath: "/adarsh_original.pdf",
};

export const about = {
  headline: "Backend systems that ship",
  body: `Results-driven Python Django developer with 2+ years building RESTful APIs and third-party integrations for ERP, LMS, e-commerce, and association platforms. Strong on MVC architecture, secure API practices (validation, authentication, permission-based access), PostgreSQL, Redis, and Linux-based deployments.`,
};

export const experience = [
  {
    role: "Python Django Developer",
    company: "Pegasus Consulting",
    location: "Bangalore, India",
    period: "Apr 2024 – Present",
    bullets: [
      "Building NZSSDA — a New Zealand industry association platform with JWT auth, ACL/tier matrices, membership lifecycle, Stripe + Xero billing, and Celery/Redis background jobs.",
      "Developing Diamond ERP for Diamond Screens — modular Django sales platform covering enquiry-to-quote, management approval, role-based access, and project/BOM workflows.",
      "Contributed to TeachEase LMS: RESTful APIs for lessons, assignments, and tests with secure auth and permission-based access; assisted Gunicorn + Nginx deployment.",
      "Built Manufacturing ERP modules (enquiry-to-dispatch), Redis caching, SigmaNest integration, and module-level access control.",
      "Independently shipped GudFudCo e-commerce APIs: JWT auth, wallet, coupons, custom snack builder, orders, Razorpay; integrated MSG91, DTDC, and webhooks; load-tested with JMeter.",
    ],
  },
  {
    role: "Website Developer",
    company: "Infodawn",
    location: "Pathanamthitta, Kerala",
    period: "Jan 2021 – Aug 2021",
    bullets: [
      "Mentored students in Django, Python, HTML, and CSS, guiding academic projects with clean code practices, MVC architecture, and deployment fundamentals.",
    ],
  },
];

export const work = [
  {
    name: "NZSSDA",
    tag: "Association platform",
    liveLabel: "Staging demo",
    liveUrl: "https://163.223.186.62:8003/",
    problem:
      "A New Zealand stainless-steel industry association needed a public site, member portal, and staff tools for membership, documents, events, and billing.",
    role: "Backend-focused development on a Django modular monolith with DRF APIs consumed by a Next.js frontend.",
    stack: [
      "Django",
      "DRF",
      "JWT",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Stripe",
      "Xero",
      "Next.js",
    ],
    outcomes: [
      "10 domain apps: accounts, ACL, membership, billing, CMS, documents, events, benefits, enquiries, comms",
      "Tier/role access matrices, org seats, and payment-to-activate membership flow",
      "Async reminders and notify jobs via Celery + Redis",
    ],
  },
  {
    name: "Diamond ERP",
    tag: "Manufacturing sales ERP",
    liveLabel: "Live product",
    liveUrl: "https://app.diamondscreens.com/",
    problem:
      "Diamond Screens needed a production sales ERP spanning customers, enquiries, feasibility, quotes, and management approval.",
    role: "Django ERP modules for sales workflow, permissions, tool administration, and project/BOM handling.",
    stack: ["Django", "PostgreSQL", "Excel/PDF tooling", "Role-based access"],
    outcomes: [
      "Enquiry → feasibility → risk → quote → management approval path",
      "Core auth, departments, modules, and dashboard permissions",
      "Deployed production app for day-to-day business use",
    ],
  },
  {
    name: "GudFudCo",
    tag: "E-commerce APIs",
    liveLabel: "Live product",
    liveUrl: "https://gudfudco.com/",
    problem:
      "A snacks e-commerce brand needed a secure REST backend for orders, payments, and custom product flows.",
    role: "Independently developed and deployed Django REST APIs with JWT, wallet, coupons, and Razorpay.",
    stack: [
      "Django REST Framework",
      "JWT",
      "Razorpay",
      "MSG91",
      "DTDC",
      "JMeter",
    ],
    outcomes: [
      "Wallet, coupon, custom snack builder, and order processing",
      "Courier + SMS/email integrations and webhook hooks",
      "Load testing before production release",
    ],
  },
  {
    name: "TeachEase",
    tag: "LMS backend",
    liveLabel: "Live product",
    liveUrl: "https://app.teach-ease.com/",
    problem:
      "An LMS platform needed secure REST APIs for lessons, assignments, and assessments.",
    role: "Backend APIs with authentication, permission-based access, and Linux deployment support.",
    stack: ["Django", "DRF", "Gunicorn", "Nginx", "PostgreSQL"],
    outcomes: [
      "Lesson, assignment, and test management modules",
      "Secure auth and access control patterns",
      "Production deployment assistance on Linux",
    ],
  },
  {
    name: "Question Paper Generation System",
    tag: "Academic project",
    liveLabel: null,
    liveUrl: null,
    problem:
      "Institutions needed structured exam papers generated dynamically with role-based access.",
    role: "Django MVC app with input validation and role-based access for paper generation.",
    stack: ["Django", "MVC", "Python"],
    outcomes: [
      "Automated structured examination paper generation",
      "Role-based access and validation",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript (Basics)", "C", "Java"],
  },
  {
    group: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "JWT auth",
      "Celery",
      "Redis caching",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    group: "Integrations",
    items: ["Stripe", "Xero", "Razorpay", "MSG91", "DTDC", "Webhooks"],
  },
  {
    group: "Deploy & testing",
    items: ["Linux", "Gunicorn", "Nginx", "Apache JMeter", "Git"],
  },
  {
    group: "Web & tools",
    items: ["HTML5", "CSS3", "Bootstrap", "AJAX", "GitHub", "Jira"],
  },
];

export const education = [
  {
    school: "Sambhram Academy of Management Studies",
    place: "Bangalore",
    degree: "Master of Computer Applications (MCA)",
    period: "Oct 2021 – Dec 2023",
  },
  {
    school: "SAS SNDP Yogam College",
    place: "Kerala",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Jun 2017 – Sep 2020",
  },
];

export const certifications = [
  "Python Django Certification — Spectrum Softtech Solutions Pvt Ltd",
  "Python Internship Training — Karunadu Technologies Pvt Ltd",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
