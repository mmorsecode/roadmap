import type { Phase, PhaseColor } from '../types/roadmap'

export interface PhaseColorConfig {
  accent: string
  badge: string
  badgeText: string
  progressFill: string
  cardBg: string
  checkboxAccent: string
  ring: string
}

export const PHASE_COLORS: Record<PhaseColor, PhaseColorConfig> = {
  violet: {
    accent: 'bg-violet-500',
    badge: 'bg-violet-100',
    badgeText: 'text-violet-800',
    progressFill: 'bg-violet-500',
    cardBg: 'bg-violet-50',
    checkboxAccent: 'accent-violet-500',
    ring: 'ring-violet-300',
  },
  sky: {
    accent: 'bg-sky-500',
    badge: 'bg-sky-100',
    badgeText: 'text-sky-800',
    progressFill: 'bg-sky-500',
    cardBg: 'bg-sky-50',
    checkboxAccent: 'accent-sky-500',
    ring: 'ring-sky-300',
  },
  emerald: {
    accent: 'bg-emerald-500',
    badge: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    progressFill: 'bg-emerald-500',
    cardBg: 'bg-emerald-50',
    checkboxAccent: 'accent-emerald-500',
    ring: 'ring-emerald-300',
  },
  orange: {
    accent: 'bg-orange-500',
    badge: 'bg-orange-100',
    badgeText: 'text-orange-800',
    progressFill: 'bg-orange-500',
    cardBg: 'bg-orange-50',
    checkboxAccent: 'accent-orange-500',
    ring: 'ring-orange-300',
  },
  blue: {
    accent: 'bg-blue-500',
    badge: 'bg-blue-100',
    badgeText: 'text-blue-800',
    progressFill: 'bg-blue-500',
    cardBg: 'bg-blue-50',
    checkboxAccent: 'accent-blue-500',
    ring: 'ring-blue-300',
  },
  rose: {
    accent: 'bg-rose-500',
    badge: 'bg-rose-100',
    badgeText: 'text-rose-800',
    progressFill: 'bg-rose-500',
    cardBg: 'bg-rose-50',
    checkboxAccent: 'accent-rose-500',
    ring: 'ring-rose-300',
  },
  purple: {
    accent: 'bg-purple-500',
    badge: 'bg-purple-100',
    badgeText: 'text-purple-800',
    progressFill: 'bg-purple-500',
    cardBg: 'bg-purple-50',
    checkboxAccent: 'accent-purple-500',
    ring: 'ring-purple-300',
  },
  slate: {
    accent: 'bg-slate-500',
    badge: 'bg-slate-100',
    badgeText: 'text-slate-800',
    progressFill: 'bg-slate-500',
    cardBg: 'bg-slate-50',
    checkboxAccent: 'accent-slate-500',
    ring: 'ring-slate-300',
  },
  amber: {
    accent: 'bg-amber-500',
    badge: 'bg-amber-100',
    badgeText: 'text-amber-800',
    progressFill: 'bg-amber-500',
    cardBg: 'bg-amber-50',
    checkboxAccent: 'accent-amber-500',
    ring: 'ring-amber-300',
  },
  teal: {
    accent: 'bg-teal-500',
    badge: 'bg-teal-100',
    badgeText: 'text-teal-800',
    progressFill: 'bg-teal-500',
    cardBg: 'bg-teal-50',
    checkboxAccent: 'accent-teal-500',
    ring: 'ring-teal-300',
  },
}

export const PHASES: Phase[] = [
  {
    id: 'phase-0',
    title: 'Step 0 — Stack Decision',
    subtitle: 'Do this today · 15 min',
    color: 'violet',
    weeks: [
      {
        id: 'p0-w1',
        label: 'Your Stack (TypeScript + React)',
        tasks: [
          {
            id: 'p0-w1-t1',
            label: 'Confirm: TypeScript + React is your primary stack',
            preChecked: true,
          },
          {
            id: 'p0-w1-t2',
            label: 'Java goal: build and deploy one Spring Boot microservice (conversational depth, not primary)',
          },
          {
            id: 'p0-w1-t3',
            label: 'Read the "brutal math" table in the roadmap — internalize your 240-hour budget',
            url: 'https://github.com/mmorsecode/roadmap',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-1',
    title: 'Phase 1: AI-native Foundation',
    subtitle: 'Weeks 1–2 · 30 hrs',
    color: 'sky',
    weeks: [
      {
        id: 'p1-w1',
        label: 'Week 1 (15 hrs) — Get Operational',
        tasks: [
          {
            id: 'p1-w1-t1',
            label: 'Cursor already installed ✓',
            preChecked: true,
          },
          {
            id: 'p1-w1-t2',
            label: 'GitHub Edu Pack Pro activated ✓',
            preChecked: true,
          },
          {
            id: 'p1-w1-t3',
            label: 'Claim GitHub Copilot Pro via Education Pack',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t4',
            label: 'Claim Frontend Masters access via Education Pack',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t5',
            label: 'Claim Educative.io access via Education Pack',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t6',
            label: 'Claim JetBrains IntelliJ IDEA via Education Pack (needed for Java track)',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t7',
            label: 'Claim Namecheap domain (1 free year) via Education Pack',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t8',
            label: 'Claim DigitalOcean $200 credit via Education Pack',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'p1-w1-t9',
            label: 'Install Git (if not already)',
            url: 'https://git-scm.com/downloads',
          },
          {
            id: 'p1-w1-t10',
            label: 'Install Node.js LTS',
            url: 'https://nodejs.org/',
          },
          {
            id: 'p1-w1-t11',
            label: 'Install Docker Desktop',
            url: 'https://www.docker.com/products/docker-desktop/',
          },
          {
            id: 'p1-w1-t12',
            label: 'Set up Claude Code CLI',
            url: 'https://docs.anthropic.com/en/docs/claude-code/overview',
          },
          {
            id: 'p1-w1-t13',
            label: 'Push a hello-world TypeScript repo to GitHub',
          },
          {
            id: 'p1-w1-t14',
            label: 'Confirm full loop works: code → commit → push',
          },
          {
            id: 'p1-w1-t15',
            label: 'Complete Codecademy "Learn Git & GitHub" if Git is shaky (~6 hrs)',
            url: 'https://www.codecademy.com/learn/learn-git-github',
          },
          {
            id: 'p1-w1-t16',
            label: 'Read HubSpot Engineering blog: "Engineering Values"',
            url: 'https://product.hubspot.com/blog/engineering',
          },
          {
            id: 'p1-w1-t17',
            label: 'Read HubSpot Engineering blog: "Leadership Philosophy"',
            url: 'https://product.hubspot.com/blog/engineering',
          },
        ],
      },
      {
        id: 'p1-w2',
        label: 'Week 2 (15 hrs) — TypeScript Fundamentals',
        tasks: [
          {
            id: 'p1-w2-t1',
            label: 'Read Matt Pocock\'s Total TypeScript Essentials (skim in ~2 hrs, free)',
            url: 'https://www.totaltypescript.com/books/total-typescript-essentials',
          },
          {
            id: 'p1-w2-t2',
            label: 'Watch Frontend Masters "JavaScript: The Hard Parts v2" by Will Sentance (~7 hrs, free via Pack)',
          },
          {
            id: 'p1-w2-t3',
            label: 'Use Claude to drill: closures and lexical scope (ask Claude to quiz you)',
          },
          {
            id: 'p1-w2-t4',
            label: 'Use Claude to drill: async/await and promise chains',
          },
          {
            id: 'p1-w2-t5',
            label: 'Use Claude to drill: TypeScript types, interfaces, and generics',
          },
          {
            id: 'p1-w2-t6',
            label: 'Use Claude to drill: enums, type narrowing, and utility types',
          },
          {
            id: 'p1-w2-t7',
            label: 'Build a 50-line TypeScript program from scratch — understand every single line',
          },
          {
            id: 'p1-w2-t8',
            label: 'Checkpoint: Can explain your 50-line TS program out loud, line by line',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Framework Fluency',
    subtitle: 'Weeks 3–4 · 30 hrs',
    color: 'emerald',
    weeks: [
      {
        id: 'p2-w3',
        label: 'Week 3 (15 hrs) — React Fundamentals',
        tasks: [
          {
            id: 'p2-w3-t1',
            label: 'Watch Frontend Masters "Complete Intro to React v9" by Brian Holt (~8 hrs, free via Pack)',
          },
          {
            id: 'p2-w3-t2',
            label: 'Work through react.dev official tutorial as reference (~2 hrs)',
            url: 'https://react.dev/learn',
          },
          {
            id: 'p2-w3-t3',
            label: 'Build a React + TS counter component with typed props and state',
          },
          {
            id: 'p2-w3-t4',
            label: 'Build a component using useEffect (fetch from a free public API, display results)',
          },
          {
            id: 'p2-w3-t5',
            label: 'Checkpoint: Can create a component with typed props, state, and hooks from memory',
          },
        ],
      },
      {
        id: 'p2-w4',
        label: 'Week 4 (15 hrs) — TypeScript + React Integration',
        tasks: [
          {
            id: 'p2-w4-t1',
            label: 'Watch Frontend Masters "TypeScript Fundamentals v4" by Mike North (~5 hrs, free via Pack)',
          },
          {
            id: 'p2-w4-t2',
            label: 'Build a minimal React + TS app with 3 screens and React Router',
          },
          {
            id: 'p2-w4-t3',
            label: 'Type a fetch call to a public API — define all response types in TypeScript',
          },
          {
            id: 'p2-w4-t4',
            label: 'Checkpoint: Can stand up a working React + TS app in ~1 hour with AI help',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3: The Anchor Project',
    subtitle: 'Weeks 5–10 · 70 hrs · Most important block',
    color: 'orange',
    weeks: [
      {
        id: 'p3-w5',
        label: 'Week 5 (12 hrs) — Project Design',
        tasks: [
          {
            id: 'p3-w5-t1',
            label: 'Choose project idea — NOT a todo app, weather app, or Pokedex',
          },
          {
            id: 'p3-w5-t2',
            label: 'Write a one-page design doc: API routes, data model, tech stack, risks',
          },
          {
            id: 'p3-w5-t3',
            label: 'Share design doc with Claude — ask it to critique and find weaknesses',
          },
          {
            id: 'p3-w5-t4',
            label: 'Set up your Next.js or React + Express project with TypeScript',
          },
          {
            id: 'p3-w5-t5',
            label: 'Set up Docker Compose for local development (app + PostgreSQL)',
          },
        ],
      },
      {
        id: 'p3-w6',
        label: 'Week 6 (12 hrs) — Backend Skeleton',
        tasks: [
          {
            id: 'p3-w6-t1',
            label: 'Set up PostgreSQL in Docker with 3+ related tables and foreign keys',
          },
          {
            id: 'p3-w6-t2',
            label: 'Implement basic auth: email + password hashed with bcrypt',
          },
          {
            id: 'p3-w6-t3',
            label: 'Build first 3 API endpoints (e.g., GET /items, POST /items, DELETE /items/:id)',
          },
          {
            id: 'p3-w6-t4',
            label: 'Write integration tests for the endpoints',
          },
          {
            id: 'p3-w6-t5',
            label: 'Confirm docker compose up brings the full stack up cleanly',
          },
        ],
      },
      {
        id: 'p3-w7',
        label: 'Week 7 (12 hrs) — Backend Feature Completion',
        tasks: [
          {
            id: 'p3-w7-t1',
            label: 'Complete all remaining API endpoints',
          },
          {
            id: 'p3-w7-t2',
            label: 'Add input validation and structured error responses',
          },
          {
            id: 'p3-w7-t3',
            label: 'Reach 5+ meaningful tests total',
          },
          {
            id: 'p3-w7-t4',
            label: 'Start AI collaboration doc: log 3 AI time-saves and 2 AI misleads',
          },
        ],
      },
      {
        id: 'p3-w8',
        label: 'Week 8 (12 hrs) — Frontend Skeleton',
        tasks: [
          {
            id: 'p3-w8-t1',
            label: 'Set up React/Next.js frontend with TypeScript and proper folder structure',
          },
          {
            id: 'p3-w8-t2',
            label: 'Implement routing (React Router or Next.js App Router)',
          },
          {
            id: 'p3-w8-t3',
            label: 'Build login and register screens, wire them to your auth endpoints',
          },
          {
            id: 'p3-w8-t4',
            label: 'Connect at least 2 other screens to your API with typed responses',
          },
        ],
      },
      {
        id: 'p3-w9',
        label: 'Week 9 (12 hrs) — Frontend Feature Completion',
        tasks: [
          {
            id: 'p3-w9-t1',
            label: 'Build all remaining screens',
          },
          {
            id: 'p3-w9-t2',
            label: 'Add loading states for all async operations',
          },
          {
            id: 'p3-w9-t3',
            label: 'Add error handling and user-facing error messages',
          },
          {
            id: 'p3-w9-t4',
            label: 'Make it reasonably responsive for mobile and desktop',
          },
          {
            id: 'p3-w9-t5',
            label: 'Complete AI collaboration doc: finalize saves, misleads, and one mind-change example',
          },
        ],
      },
      {
        id: 'p3-w10',
        label: 'Week 10 (10 hrs) — Deploy, Polish & Ship',
        tasks: [
          {
            id: 'p3-w10-t1',
            label: 'Deploy backend to Fly.io, DigitalOcean ($200 credit), or Render',
            url: 'https://fly.io/',
          },
          {
            id: 'p3-w10-t2',
            label: 'Deploy frontend to Vercel, Netlify, or same host as backend',
            url: 'https://vercel.com/',
          },
          {
            id: 'p3-w10-t3',
            label: 'Write a comprehensive README with setup instructions and live demo link',
          },
          {
            id: 'p3-w10-t4',
            label: 'Record a 2–3 minute demo video of the working app',
          },
          {
            id: 'p3-w10-t5',
            label: 'Pin project to top of your GitHub profile',
          },
          {
            id: 'p3-w10-t6',
            label: 'Add project link to LinkedIn with a 2-sentence description',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-java',
    title: 'Java Microservice Track',
    subtitle: 'Run alongside Weeks 8–10 · parallel track',
    color: 'amber',
    isSpecialTrack: true,
    weeks: [
      {
        id: 'pj-w1',
        label: 'Deploy a Spring Boot Microservice',
        isSpecialTrack: true,
        tasks: [
          {
            id: 'pj-w1-t1',
            label: 'Install Java 21 LTS via SDKMAN (recommended) or direct download',
            url: 'https://sdkman.io/',
          },
          {
            id: 'pj-w1-t2',
            label: 'Install IntelliJ IDEA via GitHub Edu Pack JetBrains license',
            url: 'https://education.github.com/pack',
          },
          {
            id: 'pj-w1-t3',
            label: 'Work through JetBrains Academy — first 2 Spring Boot projects (in-browser)',
            url: 'https://www.jetbrains.com/academy/',
          },
          {
            id: 'pj-w1-t4',
            label: 'Read Baeldung: "Building a REST API with Spring Boot" (~3 hrs)',
            url: 'https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java-based-configuration',
          },
          {
            id: 'pj-w1-t5',
            label: 'Build a minimal Spring Boot service: GET /health returns {"status":"ok"}, GET /data returns something useful',
          },
          {
            id: 'pj-w1-t6',
            label: 'Write a Dockerfile for the Spring Boot service',
          },
          {
            id: 'pj-w1-t7',
            label: 'Run the Java microservice in Docker locally — confirm it responds on a port',
          },
          {
            id: 'pj-w1-t8',
            label: 'Deploy the Java microservice to Fly.io or Render',
            url: 'https://fly.io/',
          },
          {
            id: 'pj-w1-t9',
            label: 'Call the live Java microservice from your TypeScript frontend (handle CORS)',
          },
          {
            id: 'pj-w1-t10',
            label: 'Document the integration in your project README — explain why you added a Java service',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-4',
    title: 'Phase 4: Systems Design',
    subtitle: 'Weeks 8–11 · 30 hrs · start during anchor project',
    color: 'blue',
    weeks: [
      {
        id: 'p4-w89',
        label: 'Weeks 8–9 — System Design Fundamentals',
        tasks: [
          {
            id: 'p4-w89-t1',
            label: 'Start Educative.io "Grokking the Modern System Design Interview" (free via Edu Pack)',
            url: 'https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers',
          },
          {
            id: 'p4-w89-t2',
            label: 'Complete: URL shortener design case study',
          },
          {
            id: 'p4-w89-t3',
            label: 'Complete: Rate limiter design case study',
          },
          {
            id: 'p4-w89-t4',
            label: 'Watch ByteByteGo on YouTube passively — on commute or while cooking',
            url: 'https://www.youtube.com/@ByteByteGo',
          },
        ],
      },
      {
        id: 'p4-w1011',
        label: 'Weeks 10–11 — Design Practice',
        tasks: [
          {
            id: 'p4-w1011-t1',
            label: 'Complete: Chat system design case study',
          },
          {
            id: 'p4-w1011-t2',
            label: 'Complete: Notification service design case study',
          },
          {
            id: 'p4-w1011-t3',
            label: 'Complete: Newsfeed design case study',
          },
          {
            id: 'p4-w1011-t4',
            label: 'Watch KodeKloud "Kubernetes for Absolute Beginners" — first 5 hrs ONLY (free via Pack)',
          },
          {
            id: 'p4-w1011-t5',
            label: 'Whiteboard session 1: Chat app (45 min timer, Excalidraw)',
            url: 'https://excalidraw.com/',
          },
          {
            id: 'p4-w1011-t6',
            label: 'Whiteboard session 2: Weather service — HubSpot\'s actual backend question (45 min)',
          },
          {
            id: 'p4-w1011-t7',
            label: 'Whiteboard session 3: URL shortener (45 min)',
          },
          {
            id: 'p4-w1011-t8',
            label: 'Checkpoint: Can structure a full design answer in 45 min (estimation → API → data model → architecture → bottlenecks)',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-5',
    title: 'Phase 5: HubSpot Interview Reps',
    subtitle: 'Weeks 11–14 · 35 hrs',
    color: 'rose',
    weeks: [
      {
        id: 'p5-w1112',
        label: 'Weeks 11–12 (15 hrs) — Coding Patterns + HubSpot Problems',
        tasks: [
          {
            id: 'p5-w1112-t1',
            label: 'Start Educative.io "Grokking the Coding Interview: Patterns" (free via Edu Pack)',
            url: 'https://www.educative.io/courses/grokking-coding-interview-patterns-python',
          },
          {
            id: 'p5-w1112-t2',
            label: 'Master pattern: Two pointers',
          },
          {
            id: 'p5-w1112-t3',
            label: 'Master pattern: Sliding window',
          },
          {
            id: 'p5-w1112-t4',
            label: 'Master pattern: Hash maps (most common in HubSpot questions)',
          },
          {
            id: 'p5-w1112-t5',
            label: 'Master pattern: Fast/slow pointers',
          },
          {
            id: 'p5-w1112-t6',
            label: 'Master pattern: BFS (breadth-first search)',
          },
          {
            id: 'p5-w1112-t7',
            label: 'Master pattern: DFS (depth-first search)',
          },
          {
            id: 'p5-w1112-t8',
            label: 'Solve HubSpot named problem: "merge two lists" — cold, no hints',
          },
          {
            id: 'p5-w1112-t9',
            label: 'Solve HubSpot named problem: "find pairs"',
          },
          {
            id: 'p5-w1112-t10',
            label: 'Solve HubSpot named problem: "most frequently occurring substring"',
          },
          {
            id: 'p5-w1112-t11',
            label: 'Solve HubSpot named problem: "addCommas"',
          },
          {
            id: 'p5-w1112-t12',
            label: 'Solve HubSpot named problem: "logger"',
          },
          {
            id: 'p5-w1112-t13',
            label: 'Solve HubSpot named problem: "memoize"',
          },
        ],
      },
      {
        id: 'p5-w13',
        label: 'Week 13 (10 hrs) — AI Coding Interview Drills (unique to HubSpot)',
        tasks: [
          {
            id: 'p5-w13-t1',
            label: 'Drill 1 — Tool selection: Solve Expression Calculator 3 ways (GitHub Copilot, Claude Code, Cursor). Write a paragraph on when you\'d use each.',
          },
          {
            id: 'p5-w13-t2',
            label: 'Drill 2 — Prompt construction: Rewrite "help me parse this JSON" 5 times with increasing context. Note how output quality changes.',
          },
          {
            id: 'p5-w13-t3',
            label: 'Drill 3 — Understanding output: Ask Claude to write a recursive function. Read every line without running it. Predict the output. Then run it.',
          },
          {
            id: 'p5-w13-t4',
            label: 'Drill 4 — Iteration + quality control: Give Claude insufficient context on purpose. Catch the error. Refine the prompt. Recover.',
          },
          {
            id: 'p5-w13-t5',
            label: 'Drill 5 — Context management: Over-share context once (paste whole files). Under-share once (one-line prompt). Document the difference.',
          },
          {
            id: 'p5-w13-t6',
            label: 'Drill 6 — AI as thinking partner: Practice prompts like "what are the tradeoffs of X vs Y?", "generate 10 edge cases", "challenge this assumption".',
          },
        ],
      },
      {
        id: 'p5-w14',
        label: 'Week 14 (10 hrs) — Systems Design Reps',
        tasks: [
          {
            id: 'p5-w14-t1',
            label: 'Whiteboard: Netflix design (45 min, Excalidraw, record yourself)',
            url: 'https://excalidraw.com/',
          },
          {
            id: 'p5-w14-t2',
            label: 'Whiteboard: Weather Service design — HubSpot\'s actual backend interview question (45 min)',
          },
          {
            id: 'p5-w14-t3',
            label: 'Whiteboard: Customer Table design — HubSpot\'s actual frontend interview question (45 min)',
          },
          {
            id: 'p5-w14-t4',
            label: 'Complete 2 Pramp mock interviews for systems design (free)',
            url: 'https://www.pramp.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-6',
    title: 'Phase 6: Behavioral + Applications',
    subtitle: 'Weeks 13–16 · 25 hrs · start in parallel',
    color: 'purple',
    weeks: [
      {
        id: 'p6-w1314',
        label: 'Weeks 13–14 — Write Your 10 STAR Stories',
        tasks: [
          {
            id: 'p6-w1314-t1',
            label: 'Write STAR story — Ownership: a time you drove something to completion that wasn\'t your job',
          },
          {
            id: 'p6-w1314-t2',
            label: 'Write STAR story — Customer-Centricity: changed your approach based on user feedback',
          },
          {
            id: 'p6-w1314-t3',
            label: 'Write STAR story — Growth Mindset: you were wrong and changed your mind',
          },
          {
            id: 'p6-w1314-t4',
            label: 'Write STAR story — AI Fluency: AI helped you AND misled you, with a measurable outcome',
          },
          {
            id: 'p6-w1314-t5',
            label: 'Write STAR story — Coachability: feedback you received and applied',
          },
          {
            id: 'p6-w1314-t6',
            label: 'Write STAR story — Effective Communication: explained a technical concept to a non-technical person',
          },
          {
            id: 'p6-w1314-t7',
            label: 'Write STAR story — Collaboration: worked through a disagreement with a teammate',
          },
          {
            id: 'p6-w1314-t8',
            label: 'Write STAR story — Failure: a failure you learned from',
          },
          {
            id: 'p6-w1314-t9',
            label: 'Write STAR story — Shipped before ready: why you made the call to ship',
          },
          {
            id: 'p6-w1314-t10',
            label: 'Write STAR story — Technical deep-dive: something you\'re genuinely excited to talk about',
          },
          {
            id: 'p6-w1314-t11',
            label: 'Practice each story out loud, timed to 2–3 minutes — record yourself',
          },
          {
            id: 'p6-w1314-t12',
            label: 'Watch recordings back — revise any story that feels weak or goes over time',
          },
        ],
      },
      {
        id: 'p6-w1516',
        label: 'Weeks 15–16 — Apply + Network',
        tasks: [
          {
            id: 'p6-w1516-t1',
            label: 'Identify 15 HubSpot engineers on LinkedIn in your target office or team area',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'p6-w1516-t2',
            label: 'Send 15 personalized outreach messages — reference something specific they worked on (expect ~20–30% reply rate)',
          },
          {
            id: 'p6-w1516-t3',
            label: 'After a good conversation: ask if they\'d be open to referring you',
          },
          {
            id: 'p6-w1516-t4',
            label: 'Apply to HubSpot SWE I posting',
            url: 'https://www.hubspot.com/careers',
          },
          {
            id: 'p6-w1516-t5',
            label: 'Apply to HubSpot Emerging Talent posting',
            url: 'https://www.hubspot.com/careers',
          },
          {
            id: 'p6-w1516-t6',
            label: 'Apply to 5–10 similar companies for interview reps (Klaviyo, Wayfair, Toast, DraftKings, Stripe)',
          },
          {
            id: 'p6-w1516-t7',
            label: 'Claim your Namecheap domain (from Edu Pack) and point it to your deployed project',
          },
          {
            id: 'p6-w1516-t8',
            label: 'Update LinkedIn headline and Projects section with your anchor project',
          },
          {
            id: 'p6-w1516-t9',
            label: 'Pin anchor project to top of GitHub profile with demo link and video',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-7',
    title: 'Phase 7: Interview Mode',
    subtitle: 'Weeks 15–16 and beyond',
    color: 'slate',
    weeks: [
      {
        id: 'p7-w1',
        label: 'Active Interview Rituals',
        tasks: [
          {
            id: 'p7-w1-t1',
            label: 'Morning of interview: 30 min review of expected question types — do NOT cram new material',
          },
          {
            id: 'p7-w1-t2',
            label: 'Before coding interviews: warm up 10 min with Claude on a similar problem to get fingers moving',
          },
          {
            id: 'p7-w1-t3',
            label: 'After every interview: write down every question asked and how you handled it',
          },
          {
            id: 'p7-w1-t4',
            label: 'Send a thank-you note within 24 hours of each interview',
          },
          {
            id: 'p7-w1-t5',
            label: 'If rejected: ask for feedback — "Is there anything specific I could improve?"',
          },
          {
            id: 'p7-w1-t6',
            label: 'Keep applying in parallel. Each rejection is tuition for the yes you\'re earning.',
          },
        ],
      },
    ],
  },
  {
    id: 'phase-final',
    title: 'Final Sanity Check',
    subtitle: 'All 8 must be YES before you apply',
    color: 'teal',
    weeks: [
      {
        id: 'pf-w1',
        label: 'Pre-application Checklist',
        tasks: [
          {
            id: 'pf-w1-t1',
            label: 'I have one deployed, documented, full-stack project I\'m genuinely proud of',
          },
          {
            id: 'pf-w1-t2',
            label: 'I can solve HubSpot\'s 6 named coding problems in under 30 minutes each',
          },
          {
            id: 'pf-w1-t3',
            label: 'I can whiteboard a chat app system design in 45 minutes',
          },
          {
            id: 'pf-w1-t4',
            label: 'I have 10 written STAR stories I can deliver naturally in 2–3 minutes',
          },
          {
            id: 'pf-w1-t5',
            label: 'I have 3 specific stories of AI helping me AND 2 of AI misleading me',
          },
          {
            id: 'pf-w1-t6',
            label: 'I\'ve had real conversations with at least 2 HubSpot engineers',
          },
          {
            id: 'pf-w1-t7',
            label: 'I\'ve completed at least 4 mock interviews (Pramp or with peers)',
          },
          {
            id: 'pf-w1-t8',
            label: 'I\'ve applied to at least 5 similar companies for interview reps',
          },
        ],
      },
    ],
  },
]

export function getDefaultTaskChecks(): Record<string, boolean> {
  const defaults: Record<string, boolean> = {}
  for (const phase of PHASES) {
    for (const week of phase.weeks) {
      for (const task of week.tasks) {
        defaults[task.id] = task.preChecked ?? false
      }
    }
  }
  return defaults
}

export function getDefaultPhasesOpen(): Record<string, boolean> {
  return PHASES.reduce<Record<string, boolean>>((acc, p) => {
    acc[p.id] = true
    return acc
  }, {})
}
