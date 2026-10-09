import { Endorsement, CaseStudy, ExperienceItem, Tool, Strength, Publication, Achievement } from './types';

export const ENDORSEMENTS: Endorsement[] = [
  {
    id: "tanvir-rahman",
    name: "Tanvir Hossain Khan",
    designation: "Head of Engineering & Product",
    company: "Dekko ISHO Venture Capital",
    relationship: "Supervised Omar at Gustav PMS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    recommendation: "Omar has an exceptional talent for translating ambiguous enterprise business requests into crystal-clear sprint backlogs. He led the Gustav PMS onboarding optimization that reduced transition time from 60 to 18 days. His rigorous QA regression discipline and dedication to client uptime made him indispensable to our product delivery pipeline.",
    linkedinUrl: "https://www.linkedin.com/in/tanvir-hossain-khan-pm"
  },
  {
    id: "jhankar-mahbub",
    name: "Jhankar Mahbub",
    designation: "Founder & Chief Executive Officer",
    company: "Programming Hero",
    relationship: "Executive Leadership at Programming Hero",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
    recommendation: "Omar is a force multiplier when it comes to operational momentum. At Programming Hero, he supported over 1,200 learners while co-spearheading gamified projects like the 'Squid Game' debugging module, lifting completion rates by 22%. He demonstrates relentless user empathy and the rare ability to execute under high-stakes deadlines.",
    linkedinUrl: "https://www.linkedin.com/in/jhankar-mahbub"
  },
  {
    id: "syed-asaduzzaman",
    name: "Syed Asaduzzaman",
    designation: "Director of Hospitality Operations",
    company: "Mermaid Beach Resort & Spa",
    relationship: "Enterprise Client Partner & Key Account",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
    recommendation: "Migrating our core reservation and channel management architecture to Gustav PMS was a mission-critical operation for our resort. Omar led the integration with composure, deep empathy for our front-desk staff, and relentless attention to detail. His speed in resolving complex inventory edge-cases saved our teams hundreds of operational hours.",
    linkedinUrl: "https://www.linkedin.com/in/syed-asaduzzaman-hospitality"
  },
  {
    id: "dr-tariqul-islam",
    name: "Dr. Tariqul Islam",
    designation: "Associate Professor & Research Supervisor",
    company: "IIUC · Senior Member, IEEE",
    relationship: "Academic Thesis & IEEE Research Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    recommendation: "Omar's approach to product challenges is deeply rooted in empirical analysis and research discipline. Collaborating with him on our IEEE usability conference publication highlighted his ability to connect predictive data models with tangible human behaviors. He thinks like an engineer, investigates like a scientist, and executes like an operator.",
    linkedinUrl: "https://www.linkedin.com/in/dr-tariqul-islam-research"
  },
  {
    id: "ayesha-siddiqua",
    name: "Ayesha Siddiqua",
    designation: "Lead UX Researcher & Product Strategist",
    company: "Global EdTech Collective",
    relationship: "Cross-functional Product Collaborator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
    recommendation: "What distinguishes Omar is his user-centric intuition. When analyzing customer friction points, he doesn't stop at surface requests—he uncovers the root behavioral friction. His refactor of the LMS submission workflow cut support tickets by 45%. Any high-growth SaaS or tech team would be lucky to have his product drive.",
    linkedinUrl: "https://www.linkedin.com/in/ayesha-siddiqua-ux"
  }
];


export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "gustav-onboarding",
    num: "01",
    tag: "SaaS · Hospitality PMS",
    title: "Gustav PMS — Enterprise Client Onboarding & Feature Delivery",
    problem: "Enterprise hotel operators faced significant friction when transitioning to Gustav PMS from legacy systems. Configuration of room matrices, taxes, and multi-user permissions was complex, resulting in average onboarding times of up to 60 days and high customer drop-off.",
    role: "Key Accounts Manager (Product Operations Owner)",
    actions: [
      "Conducted extensive stakeholder workshops with operational teams of enterprise clients like Shopnil Shindhu and Mermaid Beach Resort to map custom workflows.",
      "Translated operational requirements into comprehensive technical specifications, custom user guides, and clear user stories in Jira.",
      "Co-designed a new simplified 'Quick Onboarding Wizard' focusing on core data intake (inventory, pricing cards, and user roles).",
      "Conducted manual regression testing on critical reservation and billing modules to guarantee zero-fault launches."
    ],
    outcome: "Successfully onboarded major hospitality giants (Shopnil Shindhu, Mermaid Beach Resort) and slashed average client onboarding time from 60 days to just 18 days, yielding a 3.3x efficiency gain and solidifying enterprise revenue.",
    impactMetrics: ["3.3x faster client onboarding", "70% reduction in setup support tickets", "Onboarded 5+ major enterprise clients"],
    stakeholders: ["Hotel Operations Directors", "SaaS Engineering Team", "Venture Capital Partners"]
  },
  {
    id: "squid-game-gamification",
    num: "02",
    tag: "EdTech · Gamification",
    title: "Squid Game Project — Gamified Career Accelerator",
    problem: "Level 2 learners were facing intense technical learning pressure while the Job Placement Unit lacked a structured pipeline of industry-ready candidates.",
    role: "Program Designer and Operations Lead",
    actions: [
      "Conceptualized and launched a 15-day gamified career acceleration program, inspired by Squid Game progression mechanics, to increase learner engagement and motivation.",
      "Designed and executed a 6-stage career readiness journey focused on project delivery, portfolio development, professional branding, and interview preparation under real-world deadlines.",
      "Established an early-placement pathway by combining performance-based progression with cross-functional program execution, enabling high-potential learners to access career opportunities ahead of the standard timeline."
    ],
    outcome: "Designed and launched a gamified early placement accelerator that advanced 42 high-potential learners into the Job Placement pipeline and became a repeatable framework for future Level 2 cohorts.",
    impactMetrics: ["82% participants progressed into the Job Placement pipeline", "Reduced time-to-placement through an early intervention program", "Created a repeatable framework adopted by future Level 2 cohorts"],
    stakeholders: ["L-2 Web Learners", "Core Curriculum Instructors", "Operations Team"]
  },
  {
    id: "lms-ux-simplification",
    num: "03",
    tag: "UX · LMS Navigation Optimization",
    title: "LMS UX Simplification — Improving Content Discoverability",
    problem: "Eligible learners were receiving special program access notifications but were unable to locate the corresponding content within the LMS. This created confusion, frustration, and reduced engagement, with around 50 learners reporting difficulty accessing materials despite being qualified.",
    role: "Core Operations Team Member — Process & Learner Experience Optimization",
    actions: [
      "Monitored learner engagement patterns and identified irregular participation among qualified students.",
    "Conducted direct outreach to affected learners to understand barriers preventing them from accessing program content.",
    "Identified a UX gap where notification messages lacked a direct navigation path to the relevant content section.",
    "Proposed a direct anchor-link solution within notification messages to allow one-click access to the correct content area.",
    "Collaborated with engineering and operations stakeholders to validate feasibility and support implementation of the solution."
    ],
    outcome: "Improved content accessibility and reduced navigation friction by enabling direct access from notifications to relevant learning content. The solution was later implemented and improved overall learner engagement within the platform.",
    impactMetrics: ["~40% reduction in navigation related support queries", "~72% of affected learners experienced improved access clarity", "Saved ~65 minutes of operational workload and ~50+ support calls per batch cycle through UX navigation simplification."],
    stakeholders: ["L-1 Web Learners", "Operations Team", "Engineering Team"]
  },
  {
    id: "hotel-system-integration",
    num: "04",
    tag: "Product · Enterprise",
    title: "Hotel System Integration — Client Requirements & Delivery",
    problem: "Gustav PMS lacked robust cross-platform synchronization with international OTAs, creating critical room inventory mismatches and manual booking over-allocation risks for newly onboarded luxury resorts.",
    role: "Product Account & Delivery Lead",
    actions: [
      "Facilitated client alignment workshops to define requirements for continuous, low-latency reservation sync across multiple distribution channels.",
      "Drafted comprehensive schema definitions and synchronization rules to prevent concurrent reservation collision.",
      "Oversaw tight acceptance testing routines mimicking peak travel hours to audit the durability of calendar sync operations."
    ],
    outcome: "Delivered a bulletproof synchronizer that connected Gustav's core inventory straight to international channel managers, cementing enterprise client trust.",
    impactMetrics: ["Zero overbooking incidents", "5+ integrated enterprise accounts", "Auto-sync validation speed under 500ms"],
    stakeholders: ["Engineering Tech Lead", "Resort Operations managers", "Sales Leadership"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Feb 2026 — July 2026",
    company: "Edutechs Limited",
    sub: "Gustav PMS · Hospitality SaaS",
    role: "Technical Support Engineer",
    highlights: [
      "Coordinate digital product delivery and feedback integration between design teams, dev teams, sales departments, and enterprise client accounts.",
      "Act as a product operations manager, gathering raw user requirements and turning them into clear product stories in Jira.",
      "Ensure end-to-end QA coverage by performing meticulous field testing on SaaS reservation, billing, and reporting engines.",
      "Coordinating customer success and account health for high-profile hospitality clients including Shopnil Shindhu, and Mermaid Beach Resort."
    ],
  },
  {
    period: "Mar 2025 — Oct 2025",
    company: "Programming Hero",
    sub: "EdTech Platform · Bangladesh",
    role: "Project Executive",
    highlights: [
      "Designed and managed active tech learning journeys and operational support structures for an active cohort of 1,200+ learners.",
      "Co-concepted the high-engagement 'Squid Game' gamified educational challenge to stimulate coding concept retention.",
      "Conducted interactive career sessions, resume feedback audits, and job strategy advice that assisted program graduates.",
      "Identified and prioritized platform drop-off causes and simplified LMS submission flows to reduce user friction."
    ]
  }
];

export const COMPREHENSIVE_TOOLS: Tool[] = [
  { name: "Requirements Gathering", desc: "User stories, acceptance criteria, stakeholder interviews, requirement mapping", icon: "clipboard-list", category: "pm" },
  { name: "Feature Prioritization", desc: "MOSCOW method, RICE scoring, impact mapping, value vs. complexity analysis", icon: "sort-desc", category: "pm" },
  { name: "Business Mindset", desc: "Aligning software features with metrics, subscription renewal targets, and retention", icon: "briefcase", category: "business" },
  { name: "SaaS Metrics Tracking", desc: "Monitoring adoption, client on-boarding cycles, friction points, and active usage", icon: "activity", category: "business" },
  { name: "Empathetic Listening", desc: "Probing root problems during client support, distinguishing underlying needs from requests", icon: "message-circle", category: "communication" },
  { name: "Bridge Communication", desc: "Simplifying engineering details for sales teams, and commercial requests for tech teams", icon: "users", category: "communication" },
  { name: "Agile Coordination", desc: "Jira task-tracking, sprint readiness, backlog grooming, cross-functional delivery", icon: "settings", category: "execution" },
  { name: "Manual QA & Testing", desc: "Functional testing, regression audits, workflow walkthroughs, edge case debugging", icon: "check-check", category: "execution" },
  { name: "Wireframing & Flows", desc: "Conceptual wireframes, navigation flows, data trees, UX structure planning", icon: "frame", category: "ux" },
  { name: "User Research Awareness", desc: "Affinity mapping, user sessions review, survey feedback synthesis, drop-off mapping", icon: "target", category: "ux" },
  { name: "Operational Databases", desc: "Managing CSV/data reports, monitoring operational KPIs, tracking customer logs", icon: "database", category: "data" },
  { name: "Metrics Reporting", desc: "Reporting client compliance, team productivity stats, and onboarding status reports", icon: "line-chart", category: "data" }
];

export const STRENGTHS: Strength[] = [
  {
    icon: "Building",
    title: "Enterprise Client Handling",
    desc: "Direct exposure to enterprise hospitality accounts—navigating conflicting requirements, tight release windows, and managing senior client operational staff with clarity."
  },
  {
    icon: "Rocket",
    title: "SaaS Product Exposure",
    desc: "Thrived in a VC-backed SaaS environment. Understands software operations, customer acquisition loops, high-velocity releases, and the importance of frictionless setup workflows."
  },
  {
    icon: "MessageSquare",
    title: "Communication Under Pressure",
    desc: "Maintains absolute professional calm during service outages, tricky integrations, or custom requirements reviews—providing reassurance and systematic problem-solving strategies."
  },
  {
    icon: "GitPullRequest",
    title: "Cross-Functional Bridge",
    desc: "Fluent in bridging the dialect gap between backend developers, marketing managers, enterprise customers, and executive partners so everyone works with aligned expectations."
  },
  {
    icon: "HeartRating",
    title: "High Empathy User Focus",
    desc: "Passionate about observing how users actually behave instead of just taking self-reported surveys at face value, which unlocks the 'why' behind user errors."
  },
  {
    icon: "GraduationCap",
    title: "Academic & Analytical Rigor",
    desc: "IEEE conference-published writer, blending rigorous analytical techniques, statistical research methods, and solid academic fundamentals with boots-on-the-ground operational execution."
  }
];

export const PUBLICATION: Publication = {
  title: "A Novel CNN-BiLSTM Model with MultiHead Attention for Efficient Intrusion Detection",
  venue: "IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS 2025)",
  desc: "Published an academic research paper focused on advancing Intrusion Detection Systems (IDS) using hybrid Deep Learning architectures, integrating CNN for automated feature extraction and BiLSTM networks for temporal traffic analysis.",
  doiLink: "https://ieeexplore.ieee.org/document/11381796"
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "PMS Onboarding Compression",
    detail: "Re-engineered Gustav's key-accounts onboarding flow, shrinking system migration delay by 70% and accelerating initial data ingest pipelines.",
    metric: "60d to 18d",
    category: "SaaS Efficiency"
  },
  {
    title: "Active Learning Leadership",
    detail: "Mentored, tracked progress, and managed workspace support for student cohorts completing intensive software engineering projects under extreme timelines.",
    metric: "1,200+ Students",
    category: "EdTech Operations"
  },
  {
    title: "Gamification Completion Lift",
    detail: "Co-designed the highly engagement-centric 'Squid Game' debugging module, resulting in dramatic homework execution gains and social sharing.",
    metric: "+22%",
    category: "Product Growth"
  },
  {
    title: "Enterprise Accounts Trust",
    detail: "Secured renewals and custom extensions for notable luxury hospitality accounts through high-touch operations support and responsive feature planning.",
    metric: "5+ Accounts",
    category: "Account Retention"
  }
];
