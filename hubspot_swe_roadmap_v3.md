# HubSpot SWE Roadmap v3: The Fastest Path

**Calibrated for:** Self-taught coder with small projects, ~15 hrs/week over 16 weeks (~240 total hours), targeting SWE I (reach) and Emerging Talent (realistic) in parallel.

This is the third and final version. v1 was a safe comprehensive plan. v2 added your student resources. v3 cuts everything that doesn't directly earn you an offer and rebuilds around the specific constraints you told me: limited time, existing coding baseline, AI-native learning, and HubSpot's actual 2026 interview bar.

---

## The brutal math

240 hours is your total budget. Here is how I'm allocating it:

| Bucket | Hours | Why |
|--------|-------|-----|
| Stack fluency (Java or TS, pick one) | 50 | Enough to read, write, and debug confidently with AI |
| Anchor project (one deep full-stack build) | 70 | Your single most important interview signal |
| Systems design | 30 | Two of three technical interviews touch this |
| HubSpot-specific interview reps | 35 | They've published the questions, practice them |
| AI fluency rubric drills | 20 | Mapped to the 6 scored dimensions |
| Behavioral + applications + networking | 25 | Getting interviews is half the battle |
| Buffer for slippage | 10 | You will need it |

Every week you fall behind compounds. Track your hours.

---

## Step 0: The stack decision (do this in 15 minutes, today)

You only have time to go deep on one language. Answer these honestly:

**Pick Java if:**
- You've written Java before, even just in a class
- You've done Python or any OOP language
- You prefer typed, structured code
- You're targeting backend roles specifically

**Pick TypeScript + React if:**
- You've done any web development before
- You've touched JavaScript, even casually
- You're more visual and want to see UIs
- You're open to frontend or full-stack

**Default if tied:** TypeScript + React. Reason: the AI tooling ecosystem (Cursor, v0, Claude) is more mature for TS than Java, which speeds you up, and HubSpot's frontend stack is where most growth roles are right now.

The other language becomes "conversational" only. You'll read it, talk about it, but not build in it.

---

## The 16-week plan

### Phase 1: AI-native foundation (Weeks 1-2, 30 hours)

This is the single biggest departure from v1/v2. Do not watch 80 hours of video. Use AI as your tutor.

**The core daily loop (build this habit now, it's how you'll work forever):**

1. Open Claude.ai or Claude Code and ask: "I want to learn [specific topic]. Teach me the mental model first, then give me three problems of increasing difficulty, review my code when I'm done, and push back when I'm wrong."
2. Build something small with every concept. Never learn passively.
3. When AI gives you code, read every line. If you can't explain it, ask it to. If you still can't, you don't know it yet.

**Week 1 (15 hrs): Get operational**
- Claim GitHub Education Pack: Copilot Pro, Frontend Masters, Educative.io, JetBrains
- Install: VS Code or Cursor, Git, Node.js, Java 25 if Java track, Docker Desktop
- Set up Claude Code (docs.claude.com) and Cursor (cursor.com)
- Push a hello-world repo. Confirm the full loop works.
- **Codecademy "Learn Git & GitHub"** (browser, ~6 hours) if your Git is shaky
- Read HubSpot engineering blog: "Engineering Values," "Leadership Philosophy"

**Week 2 (15 hrs): Language fundamentals, AI-accelerated**

If Java track:
- **JetBrains Academy "Java Backend Developer" track** (free with JetBrains student pack, browser-based projects). Do the first 2-3 projects only.
- Then use Claude as tutor: "Quiz me on Java collections, streams, optionals, and records. Give me 5 problems that test whether I actually understand each."

If TypeScript track:
- **Matt Pocock's Total TypeScript Essentials** (free). Skim it in 2 hours.
- **Frontend Masters "JavaScript: The Hard Parts v2" by Will Sentance** (free via Pack). ~7 hours. This is the mental model you need.
- Use Claude to drill: closures, prototypes, async/await, promise chains.

**End of Phase 1 checkpoint:** You can write a 50-line program in your chosen language from scratch, understand every line, and explain it out loud.

---

### Phase 2: Framework fluency (Weeks 3-4, 30 hours)

**Java track (30 hrs):**
- **Baeldung Spring Boot tutorials** (free). ~8 hours. Baeldung is more surgical than Chad Darby's 40-hour course. You don't need 40 hours.
- Build a minimal Spring Boot REST API: GET /users, POST /users, PUT /users/:id, DELETE /users/:id. Connected to MySQL in Docker. ~15 hours with AI help.
- **"Effective Java" by Joshua Bloch** items 1-15 (~7 hours reading, as reference during your build).

**TypeScript track (30 hrs):**
- **Frontend Masters "Complete Intro to React v9" by Brian Holt** (~8 hours via Pack)
- **Frontend Masters "TypeScript Fundamentals v4" by Mike North** (~5 hours via Pack)
- Build a minimal React + TS app: a 3-screen UI with routing, calling a mock API. ~15 hours with AI help.
- **react.dev official tutorial** as reference (~2 hours).

**End of Phase 2 checkpoint:** You can stand up a working app in your chosen framework in an hour, with AI help. You know where things go and what to google (or prompt) when stuck.

---

### Phase 3: The anchor project (Weeks 5-10, 70 hours)

This is the most important block in the entire roadmap. Your anchor project is your single strongest interview signal. It tells the interviewer: "I can ship real software end-to-end."

**Project requirements (non-negotiable):**
- Full stack: Java API + simple React frontend, OR TS full-stack (Next.js counts)
- Real database with at least 3 related tables and proper foreign keys
- Real authentication (even simple: email + password with hashing)
- At least 5 meaningful tests
- Deployed to a live URL (Fly.io, DigitalOcean with your $200 credit, or Vercel)
- Uses AI fluently with a documented process (you'll use this as your interview story)
- Solves a real problem you actually care about

**Project ideas that make for great interview stories:**
- A tool that scrapes your course syllabus PDF and builds a study plan
- A Hacker News-style aggregator for a niche you follow
- A simple CRM for tracking your job applications (meta, HubSpot-appropriate)
- A habit tracker with streaks and visualizations
- A recipe scaler that converts ingredients based on serving size

**Do NOT build:** another todo app, another weather app, another Pokedex. Interviewers have seen a thousand of each.

**Week-by-week breakdown:**

- **Week 5 (12 hrs):** Design. One-page design doc. API routes, data model, tech decisions, risks. Use Claude to critique your design before coding. This is realistic engineering practice and a great interview story.
- **Week 6 (12 hrs):** Backend skeleton. Database, auth, first 3 endpoints. Docker Compose setup.
- **Week 7 (12 hrs):** Backend feature completion + integration tests.
- **Week 8 (12 hrs):** Frontend skeleton. Routing, auth flow, first two screens hitting your API.
- **Week 9 (12 hrs):** Frontend feature completion. Error handling, loading states.
- **Week 10 (10 hrs):** Deploy, polish, README, demo video.

**Critical: document your AI collaboration as you build.** Keep a doc with:
- 3 examples where AI saved you significant time
- 2 examples where AI led you wrong and how you caught it
- 1 example where AI changed your mind about an approach

This is gold for the hiring manager's AI Fluency question.

---

### Phase 4: Systems design (Weeks 8-11, overlapping, 30 hours total)

Start this during your anchor project so you're not learning in isolation.

**Primary resource (browser-based, free with your Pack):**
- **Educative.io "Grokking the Modern System Design Interview"** (~25 hours). This is the single best systems design resource and it's free for you. Work through these problems minimum: URL shortener, rate limiter, chat system, notification service, newsfeed.

**Supplement:**
- **ByteByteGo YouTube** (free). Alex Xu's short videos. Watch on the bus, while cooking, etc. No dedicated time needed.
- **KodeKloud "Kubernetes for the Absolute Beginners"** (~5 hours of the course, not all of it). Pods, deployments, services, horizontal scaling. Stop there. You do not need CKAD.

**What I'm deliberately cutting:**
- "Designing Data-Intensive Applications" (excellent book, 40+ hours, not needed for SWE I)
- Stephane Maarek's full Kafka course (7 hours). Replace with a 30-minute ByteByteGo Kafka video + reading the top Kafka answer on any decent blog.
- KodeKloud CKAD (20 hours, unnecessary depth)

**Practice:** Do 3 full whiteboard systems design problems using Excalidraw and a 45-minute timer. Record yourself. Watch back. Focus problems: a chat app (HubSpot's actual mobile question), a weather service (their actual backend question), and a URL shortener (universal warm-up).

**End of Phase 4 checkpoint:** You can structure a systems design answer with capacity estimation, API design, data model, architecture, and bottleneck discussion in 45 minutes.

---

### Phase 5: HubSpot-specific interview reps (Weeks 11-14, 35 hours)

HubSpot publishes its interview questions internally. The names are public in their own docs. Your job is to grind reps on those specific patterns, not random LeetCode.

**Coding questions (the actual names):** merge two lists, find pairs, most frequently occurring substring, addCommas, logger, memoize

**Systems design questions:** Netflix, Weather Service (backend), Customer Table (frontend)

**AI Coding Interview problems:** Spammer Detection (backend), Expression Calculator (frontend/full-stack)

**Week 11-12 (15 hrs): Coding patterns + HubSpot-style problems**
- **Educative.io "Grokking the Coding Interview: Patterns for Coding Questions"** (free, browser-based). ~10 hours. Focus on: two pointers, sliding window, hash maps, fast/slow pointers, BFS, DFS. These cover 90% of HubSpot's coding questions.
- Solve all 6 HubSpot named coding questions cold. Search "merge two lists leetcode," "addCommas javascript interview," etc. for context. Solve each in both your chosen language AND have Claude explain the alternative language solution.

**Week 13 (10 hrs): The AI Coding Interview (this is unique and critical)**

This interview scores you on 6 rubric dimensions. Drill each deliberately:

1. **Tool selection (2 hrs):** Solve the same problem (Expression Calculator from HubSpot's public framing) three times. Once with Copilot autocomplete, once with Claude Code's agent, once with Cursor. Write a paragraph about when you'd use each.
2. **Prompt construction (2 hrs):** Take a vague prompt like "help me parse this JSON." Rewrite it 5 ways with increasing context. Observe the output quality difference.
3. **Understanding output (2 hrs):** Have Claude write a tricky function (like a recursive tree traversal). Do not run it. Read every line, then explain out loud what each line does. Then run it. Keep doing this until you're 95% accurate.
4. **Iteration and quality control (2 hrs):** Deliberately give Claude insufficient context on a problem. Watch it produce wrong code. Practice catching the error, refining your prompt, and recovering.
5. **Context management (1 hr):** For a real problem, deliberately over-share context once (paste whole files) and under-share once (one-line prompts). Note the difference.
6. **AI as thinking partner (1 hr):** Practice prompts that aren't "write code." Examples: "What are the tradeoffs of storing this as a tree vs a flat list?" "Generate 10 edge cases I should test." "Challenge my assumption that we need a cache here."

**Week 14 (10 hrs): Systems design reps**
- Do Netflix, Weather Service, and Customer Table as full 45-minute whiteboard sessions using Excalidraw.
- Do 2 Pramp mock interviews (free) for systems design.

---

### Phase 6: Behavioral + applications (Weeks 13-16, overlapping, 25 hours)

Start this in Week 13 alongside interview prep. Applications take time and responses are slow.

**Behavioral prep (10 hrs):**

Write 10 STAR-format stories mapped to HubSpot's scored attributes:
- **Ownership:** a time you drove something to completion that wasn't your job
- **Customer-Centricity:** a time you changed approach based on user feedback
- **Growth Mindset:** a time you were wrong and changed your mind
- **AI Fluency:** specific story with AI helping AND misleading you, with measurable outcome
- **Coachability:** feedback you received and applied
- **Effective Communication:** explaining something technical to a non-technical person
- **Collaboration:** working through disagreement with a teammate
- One failure you learned from
- One time you shipped before it was "ready" and why
- One technical deep-dive you're genuinely excited about

For each, time yourself delivering it in 2-3 minutes out loud. Record. Watch back. Revise.

**Getting the interview (15 hrs over the 4 weeks):**

This is where v1 and v2 of the roadmap were weakest. For a student targeting SWE I with self-taught background, cold applications are a tough sell. Here's the concrete plan:

**Network first (6 hrs):**
- Identify 15 HubSpot engineers on LinkedIn in your target office/team area
- For each, find something genuine: a blog post, a talk, a GitHub project, a mutual connection
- Reach out with a short, specific message: "I'm a student working on [your anchor project], and I noticed you worked on [specific thing]. Would you be open to a 20-minute call to hear about your experience?"
- Expect a ~20-30% response rate. 15 outreaches = ~4 real conversations
- After a good conversation, ask: "Based on what I've shared, do you think my background could be a fit for your team? Would you be open to referring me?"

**Apply in parallel (3 hrs):**
- Apply to both SWE I AND Emerging Talent postings on hubspot.com/careers
- Tailor your resume: put anchor project at the top, emphasize Java or TS based on role, quantify results ("reduced query time by 40%" not "improved performance")
- Apply to 5-10 other similar companies (Klaviyo, Wayfair, Toast, DraftKings, Stripe if Boston area) in parallel. The interview reps at other places make your HubSpot interview better.

**LinkedIn + portfolio (4 hrs):**
- Pin your anchor project at the top of your GitHub
- Write a short "Projects" section on your LinkedIn headline
- Your portfolio domain (claim via Namecheap from the Education Pack) should link to your anchor project demo

**Follow through (2 hrs):**
- After each interview, send a thank-you note within 24 hours
- If rejected, ask for feedback. Sometimes you'll get it, sometimes not. Always ask.

---

### Phase 7: Interview mode (Weeks 15-16 and beyond)

Once interviews start landing:
- **Morning of interview:** 30 minutes reviewing your notes for the question types you expect. Do not cram new material.
- **Before coding interviews:** practice for 10 minutes with Claude on a warm-up problem. Get your fingers moving.
- **After every interview:** write down every question asked and how you handled it. This is gold for future loops.
- **Pace yourself:** you will get rejections. Each "no" is tuition for the "yes" you're earning.

---

## Weekly checkpoints (self-assessment)

Every Sunday, answer honestly. If you answer "no" two weeks in a row, adjust.

- Did I hit my weekly hour budget?
- Did I ship something concrete this week (code committed, problem solved, story written)?
- Can I explain what I learned this week to a non-technical friend?
- Is my anchor project ahead of or behind schedule?
- Did I use AI meaningfully every day, not just as autocomplete?

---

## The daily HubSpot SWE workflow (for when you're in)

So you know what you're training for:

**Morning:** Slack check, GitHub notification triage, review 1-2 PRs, check service monitoring dashboards.

**Deep work:** Pick up ticket, create feature branch, discuss approach with Claude Code before coding, implement in small commits with tests, run `./mvnw test` (Java) or `npm test` (TS) constantly.

**Collaboration:** Code reviews, Slack huddles for hard problems, design doc for anything non-trivial (one page: problem, solution, alternatives).

**Ship:** Open PR with clear description, merge once approved, monitor deploy, update ticket, Slack the team.

**Rituals:** On-call rotation every 4-8 weeks, blameless postmortems after incidents, informal team syncs (HubSpot is meeting-light).

---

## The curated resource stack (everything cut to essentials)

### The 20% of resources that deliver 80% of the value

**Free with your Education Pack:**
- GitHub Copilot Pro (daily, from Week 1)
- Educative.io "Grokking the Modern System Design Interview" (Phase 4 core)
- Educative.io "Grokking the Coding Interview: Patterns" (Phase 5 core)
- Frontend Masters courses (TS track only): Will Sentance JS Hard Parts, Brian Holt React, Mike North TypeScript
- JetBrains IntelliJ (Java track only)

**KodeKloud:**
- "Kubernetes for the Absolute Beginners" (first 5 hours only)

**Codecademy:**
- "Learn Git & GitHub" (Week 1 if needed)

**Udemy:**
- Skipping Tim Buchalka's 80-hr Java course (too long)
- Skipping Stephane Maarek Kafka (too deep for your level)

**Coursera:**
- DeepLearning.AI "Prompt Engineering for Developers" (free audit, 4 hours, do in Phase 1)

**Free external:**
- Claude.ai as your primary tutor
- Claude Code as your primary coding agent
- Baeldung for Spring Boot (Java track)
- react.dev official docs (TS track)
- Matt Pocock Total TypeScript Essentials (TS track)
- ByteByteGo YouTube (passive, Phase 4)
- Pramp (free mocks, Phase 5-6)
- Neetcode.io (only for filling gaps in coding patterns)

**Books (only if you hit specific walls):**
- "Effective Java" as reference if Java track
- "System Design Interview Vol. 1" by Alex Xu as reference for Educative

**Cut entirely:**
- CS50x (too long, you already have basics)
- Tim Buchalka Java Masterclass (too long)
- Chad Darby Spring course (Baeldung is faster)
- CKAD / Docker deep courses (unnecessary depth)
- Stephane Maarek full Kafka (ByteByteGo video is enough)
- "Designing Data-Intensive Applications" (wrong level for your target)
- Frontend Masters CSS deep dives (not interview-relevant)

---

## Honest risk assessment

**What could go wrong:**

1. **The anchor project takes 100 hours instead of 70.** Likely. Cut scope aggressively. A smaller, polished, shipped project beats a bigger unfinished one every time.

2. **You fall behind on systems design because the project is absorbing everything.** Common. Start Phase 4 Educative work on Week 8, not Week 11, even if it means overlap.

3. **You run out of time for behavioral prep.** Do one STAR story per week starting Week 5. Don't save it all for Week 13.

4. **Referrals don't materialize.** Have a backup: apply broadly to similar-culture companies (Klaviyo, Wayfair, Toast, Drift, Stripe, HashiCorp). Interview reps at other companies compound.

5. **You burn out at week 10.** Very real for 15 hrs/week alongside school. Schedule an actual rest week. One week off at week 8 is better than 4 weeks of half-effort at the end.

---

## The final sanity check

Before you apply, you should be able to say YES to all of these:

- I have one deployed, documented full-stack project I'm genuinely proud of
- I can solve HubSpot's 6 named coding questions in under 30 minutes each
- I can whiteboard a chat app design in 45 minutes
- I have 10 written STAR stories I can deliver naturally in 2-3 minutes
- I have 3 specific stories of AI helping me AND misleading me
- I have at least 2 HubSpot engineers I've had real conversations with
- I've done at least 4 mock interviews (Pramp or with peers)
- I've applied to at least 5 similar companies for interview reps

If you can't hit all 8, you're not ready yet. If you can, you have a real shot at Emerging Talent and a fighting chance at SWE I.

---

## What makes this the fastest path

1. **One stack, not two.** No wasted depth.
2. **AI-native learning.** You'll spend 240 hours USING AI, not 240 hours watching videos.
3. **One anchor project, deeply.** Better than 3 shallow ones.
4. **HubSpot-specific reps, not generic LeetCode.** They published the questions. Study them.
5. **AI fluency drills mapped to the actual rubric.** Not vibes, specific dimensions.
6. **Parallel applications, not sequential.** Apply to 10 companies, interview somewhere, get to HubSpot sharper.
7. **Reach + realistic targets in parallel.** SWE I and Emerging Talent both.
8. **Network before you apply.** Referrals are the cheat code.

Ship the project. Use AI every day. Tell the truth about what you don't know yet. You'll get there faster than you think.
