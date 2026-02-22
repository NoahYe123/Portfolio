export const profile = {
  name: 'Jian Long Ye',
  codename: 'NOAH YE',
  title: 'Software Engineer',
  email: 'jian.ye@mail.mcgill.ca',
  github: 'https://github.com/NoahYe123',
  linkedin: 'https://ca.linkedin.com/in/noah-ye',
  location: 'Montreal, QC',
  tagline: 'FULL-STACK ENGINEER · SYSTEMS THINKER · MISSION-READY',
}

export const experience = [
  {
    id: 'sap',
    company: 'SAP',
    role: 'Associate Developer',
    period: 'Feb 2025 – Present',
    location: 'Montreal, QC',
    type: 'FULL-TIME',
    tech: ['JavaScript', 'ABAP', 'SQL', 'Fiori', 'S/4HANA'],
    bullets: [
      'Develop and maintain enterprise procurement software at scale, supporting 24,000+ companies globally across S/4HANA and Fiori platforms',
      'Resolve cross-component defects and ship new features end-to-end, from root-cause analysis through deployment, keeping production systems stable',
      'Bridge communication between product owners, component owners, and engineering teams to drive timely issue resolution across organizational boundaries',
    ],
  },
  {
    id: 'nura',
    company: 'Nura Medical',
    role: 'Software Developer Intern',
    period: 'May 2024 – Sep 2024',
    location: 'Montreal, QC',
    type: 'INTERNSHIP',
    tech: ['TypeScript', 'C#', 'React', '.NET', 'Nest.js', 'Azure', 'Figma'],
    bullets: [
      'Shipped a full-stack pediatric dosing application from the ground up, serving clinical workflows at a fast-moving med tech startup',
      'Led migration of 8 REST API endpoints from .NET to Nest.js, introducing custom guards and decorators that hardened the security model',
      'Raised unit test branch coverage to 80% using Jest, integrating testing into the team\'s code review workflow',
      'Secured multi-tenant authentication by configuring Keycloak Identity Provider across Azure-hosted services',
      'Redesigned the main navigation component with a mobile-first approach, earning 90% positive feedback from user testing',
    ],
  },
  {
    id: 'ericsson',
    company: 'Ericsson',
    role: 'Software Developer Intern',
    period: 'Jan 2023 – Aug 2023',
    location: 'Montreal, QC',
    type: 'INTERNSHIP',
    tech: ['PHP', 'TypeScript', 'Laravel', 'Express.js', 'React', 'MongoDB', 'MySQL', 'Figma'],
    bullets: [
      'Automated the client transaction pipeline, cutting deal finalization time from 7 days to 3 days through end-to-end workflow improvements',
      'Built React functional components with optimized rendering patterns that reduced page load latency by 60%',
      'Designed and implemented 6 Express.js REST API endpoints backed by Sequelize ORM, establishing consistent patterns for database access',
      'Managed complex async data flows using RTK Query and Redux Toolkit, eliminating redundant API calls across the frontend',
      'Containerized the full dev environment with Docker and Kubernetes, and set up a GitLab CI pipeline to automate builds and deployments',
    ],
  },
  {
    id: 'hack4impact',
    company: 'Hack4Impact McGill',
    role: 'Developer → PM → Tech Lead',
    period: 'Sep 2021 – May 2024',
    location: 'Montreal, QC',
    type: 'VOLUNTEER',
    tech: ['React', 'Node.js'],
    bullets: [
      'Grew from individual contributor to Tech Lead over 3 years, taking ownership of team structure, technical direction, and delivery for nonprofit client projects',
      'Delivered full-stack web applications for Montreal-area NGOs, managing scope, timelines, and stakeholder communication alongside engineering',
      'Established code review practices and engineering standards that were adopted across all project teams in the chapter',
    ],
  },
]

export const skills = {
  languages: [
    { name: 'TypeScript / JavaScript', level: 92 },
    {name: 'Java', level: 75},
    { name: 'PHP', level: 72 },
    { name: 'C# / .NET', level: 75 },
    { name: 'ABAP', level: 65 },
    { name: 'SQL', level: 80 },
    { name: 'C / C++', level: 68 },
  ],
  frameworks: [
    { name: 'React', level: 92 },
    { name: 'Nest.js', level: 78 },
    { name: 'Express.js', level: 82 },
    { name: 'Laravel', level: 70 },
    { name: 'Redux / RTK Query', level: 80 },
  ],
  infra: [
    { name: 'Docker / Kubernetes', level: 70 },
    { name: 'Azure', level: 70 },
    { name: 'GitLab CI / GitHub Actions', level: 85 },
    { name: 'MySQL / MongoDB', level: 78 },
    { name: 'Keycloak / Auth', level: 68 },
  ],
}

export const projects = [
  {
    id: 'cotrip',
    codename: 'OPERATION: COTRIP',
    name: 'CoTrip',
    tagline: 'Collaborative trip planning platform',
    description:
      ' mobile travel coordination app with real-time collaboration, itinerary building, expense splitting, and map integration. Built with React Native, Expo, and Firebase.',
    tech: ['React Native',  'Firebase', 'PostgreSQL'],
    status: 'DEPLOYED',
    link: null,
  },
  {
    id: 'shell',
    codename: 'OPERATION: OS SHELL',
    name: 'Unix Shell',
    tagline: 'Custom POSIX-compliant shell in C',
    description:
      'Built a Unix shell from scratch in C supporting pipelines, I/O redirection, background jobs, signal handling, and built-in commands (cd, exit, jobs). Implements fork/exec/wait process management.',
    tech: ['C', 'POSIX', 'Systems Programming'],
    status: 'COMPLETE',
    link: null,
  },
  {
    id: 'grocery',
    codename: 'OPERATION: MARKET',
    name: 'Grocery Store App',
    tagline: 'Inventory & checkout management system',
    description:
      'Full-stack grocery management system with inventory tracking, barcode scanning, cart checkout flow, and admin dashboard. Includes role-based access control and real-time stock updates.',
    tech: ['Java', 'TypeScript', 'React', 'Spring Boot', 'SQL'],
    status: 'COMPLETE',
    link: null,
  },
  {
    id: 'stockjournal',
    codename: 'OPERATION: MARKET WATCH',
    name: 'Stock Journal',
    tagline: 'Personal trade log & analytics dashboard',
    description:
      'Trading journal with portfolio analytics, trade entry forms, and chart visualizations. Integrates live market data for context-aware trade review.',
    tech: ['TypeScript', 'React', 'Node', 'Express',],
    status: 'IN DEVELOPMENT',
    link: null,
  },
  {
    id: 'objdetect',
    codename: 'OPERATION: EAGLE EYE',
    name: 'Object Detection',
    tagline: 'Real-time CV pipeline with YOLO',
    description:
      'Real-time object detection system using YOLOv8 with a custom training pipeline on domain-specific datasets. Includes a web interface for live camera feed inference.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'React'],
    status: 'COMPLETE',
    link: null,
  },
]

export const education = [
  {
    institution: 'McGill University',
    degree: 'Bachelor of Engineering — Computer Engineering',
    period: '2020 – 2024',
    gpa: '3.59 / 4.0',
    highlights: [
      'Relevant coursework: Algorithms, OS, Compilers, Computer Architecture, Networks, ML',
    ],
  },
]

export const leadership = [
  {
    org: 'Hack4Impact McGill',
    role: 'Tech Lead',
    period: 'Sep 2021 – May 2024',
    highlights: [
      'Led a team of 6 engineers delivering software for nonprofits',
      'Introduced code review processes and engineering standards across the chapter',
      'Mentored 10+ developers across 3 project teams',
    ],
  },
  {
    org: 'McGill Robotics Design Team',
    role: 'Software Member',
    period: 'Oct 2021 – Oct 2022',
    highlights: [
      'Implemented drive control simulation for a Mars Rover using ROS and Gazebo, enabling the team to validate locomotion behaviour in a virtual environment',
    ],
  },
  {
    org: 'CodeJam 12 — Inspire.ai',
    role: 'Hackathon Participant',
    period: 'Nov 2022 - Nov 2022',
    highlights: [
      'Built a web app that uses OpenAI to generate creative designs for e-commerce sites and blogs within a 24-hour hackathon',
      'Wired custom-prompted OpenAI API calls to a React frontend for real-time AI-generated content',
      'Persisted user data through an Express + MongoDB backend with a RESTful API layer',
    ],
  },
  {
    org: 'McHacks 9',
    role: 'Hackathon Participant',
    period: 'Jan 2022 - Jan 2022',
    highlights: [
      'Built a feature-rich Discord bot in Node.js to facilitate dynamic user interactions, deployed live to a Discord server during the hackathon',
    ],
  },
]
