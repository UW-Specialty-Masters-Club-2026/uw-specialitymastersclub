export const WORKSHOP_PATH = "/skills/claude-digital-twin";

export const workshop = {
  title: "Build with Claude at UW Foster: Your AI Chief of Staff + Vibecoded App",
  instructor: "Léonard Boussioux",
  affiliation: "UW Foster School of Business",
  when: "Monday, October 26, 2026 · 2:00–5:00 PM PT",
  eventUrl: "https://luma.com/claude-cauh",
  instructorUrl: "https://boussioux.com",
};

export type ModuleIcon = "play" | "layers" | "doc" | "user" | "chart" | "bolt" | "code" | "help";

export const workshopModules: { id: string; num: string; title: string; icon: ModuleIcon }[] = [
  { id: "overview", num: "01", title: "Workshop Overview", icon: "play" },
  { id: "models", num: "02", title: "Model Selection & Effort", icon: "layers" },
  { id: "context", num: "03", title: "Context Engineering", icon: "doc" },
  { id: "twin", num: "04", title: "Build Your Digital Twin", icon: "user" },
  { id: "dashboard", num: "05", title: "AI Chief of Staff Dashboard", icon: "chart" },
  { id: "integrations", num: "06", title: "Automation & Tool Integrations", icon: "bolt" },
  { id: "build", num: "07", title: "Build & Deploy AI Apps", icon: "code" },
  { id: "resources", num: "08", title: "Resources & FAQ", icon: "help" },
];

export type WorkshopPrompt = { label: string; text: string; source: string };

const DEMO = "Adapted from the workshop demo";

/** Every copyable prompt on the page, in page order; Module 08 lists them all. */
export const prompts = {
  modelComparison: {
    label: "Model comparison",
    text: "Read the attached course syllabus and build me a week-by-week study plan. Flag the three weeks with the heaviest workload and suggest what to start early.",
    source: "SMC exercise",
  },
  slideSkill: {
    label: "Turn your slide style into a skill",
    text: "Every time you make a slide deck you use the same font and colors, and the slides are too cluttered. From now on, use Helvetica, one title, one message and one image per slide, and never use text smaller than 14 pt. Create a skill so you apply this whenever I ask for a slide deck.",
    source: DEMO,
  },
  digitalTwin: {
    label: "Digital twin chief of staff",
    text: "I want you to create the perfect digital twin chief of staff for me. The goal is to focus on [my studies / my job search / my research]. Figure out all the work I am doing and build a knowledge base about my contacts, about me, and about my work. You may read only these folders: [list them]. Do not go anywhere else. Store the knowledge base as Markdown files in this folder. Interview me to figure out exactly how I want to use you, and ask me about anything that is an assumption or an open question.",
    source: DEMO,
  },
  scoreTasks: {
    label: "Score and rank my tasks",
    text: "Go through every one of my tasks and give each a score from 1 to 5 for how important it is for my career, how much joy it will bring me, and how urgent it is. Rank them, show the result as a dashboard, and tell me what to push on first this week. Interview me if a score depends on something you do not know.",
    source: DEMO,
  },
  nextHour: {
    label: "Plan the next hour",
    text: "I have one hour ahead of me. Look at where I am the blocker and help me unblock as many things as possible. Optimize our next hour together and interview me on how we can unblock things.",
    source: DEMO,
  },
  sundayReview: {
    label: "Sunday review",
    text: "Show me everything I got done this week, grouped by area. Point out the wins worth celebrating, and the things I planned but did not do, so I can decide whether to protect time for them next week.",
    source: DEMO,
  },
  visualStyles: {
    label: "Explore visual styles",
    text: "Create mockups of my web page in 10 different aesthetics, including glassmorphism, claymorphism, neumorphism, neo-brutalism and editorial. Do not write the real code yet; I want to compare the options first.",
    source: DEMO,
  },
  firstApp: {
    label: "Build your first app",
    text: 'In this folder, create a simple web app that presents [my project] to people who have never heard of it. Use Vite and React. Emphasize the visuals: one clear headline, an interactive chart or map of the main result, and a short "how it works" section. Ask me before you add any feature I did not mention.',
    source: "SMC exercise, using the workshop tip on Vite and React",
  },
} satisfies Record<string, WorkshopPrompt>;

export const knowledgeBaseTemplates = [
  {
    file: "about-me.md",
    purpose: "Who you are, in a few lines Claude can reread every time.",
    text: `# About me

## In one sentence
I am a [program] student at UW Foster, focused on [area].

## Background
- Before Foster: [role, company or field]
- Strengths: [2–3 skills]
- Still learning: [1–2 skills]

## Context Claude should know
- Time zone: Pacific
- Weekly rhythm: [classes, work hours, recurring commitments]
`,
  },
  {
    file: "goals.md",
    purpose: "What you are working toward, so Claude can weigh tasks against it.",
    text: `# Goals

## This quarter
1. [Goal] — done when [measurable result]
2. [Goal] — done when [measurable result]

## This year
- [Career goal]
- [Personal goal]

## Not a priority right now
- [Things Claude should not push me toward]
`,
  },
  {
    file: "preferences.md",
    purpose: "How you like to work, decide and communicate.",
    text: `# Preferences

## Communication style
- Tone: [direct / warm / formal]
- Never use: [em dashes, buzzwords, ...]
- Length: [short bullet points / full paragraphs]

## How I make decisions
- Show me [2–3] options with trade-offs, then your recommendation.
- Ask before: [sending anything, spending money, contacting people]

## Work preferences
- Deep work: [time of day]
- I do my best work when: [...]
`,
  },
  {
    file: "projects.md",
    purpose: "What is in flight, who is involved, and what is next.",
    text: `# Projects

## [Project name]
- Status: [idea / in progress / waiting / done]
- Next action: [one concrete step]
- Who is involved: [names and roles]
- Blocked by: [me / someone else / nothing]
- Deadline: [date]

## [Project name]
- Status:
- Next action:
`,
  },
];

export type ScoredTask = { id: string; title: string; career: number; joy: number; urgency: number };

export const exampleTasks: ScoredTask[] = [
  { id: "t1", title: "Tailor my résumé for a data analyst internship", career: 5, joy: 2, urgency: 4 },
  { id: "t2", title: "Finish the group case write-up", career: 3, joy: 2, urgency: 5 },
  { id: "t3", title: "Coffee chat with an alum at a company I like", career: 4, joy: 4, urgency: 2 },
  { id: "t4", title: "Build a dashboard for my capstone data", career: 4, joy: 5, urgency: 3 },
  { id: "t5", title: "Submit last month’s reimbursement", career: 1, joy: 1, urgency: 3 },
];

export const taskScore = (task: ScoredTask) => task.career + task.joy + task.urgency;

/** Highest total first; ties keep the order the tasks were added. */
export const rankTasks = (tasks: ScoredTask[]) =>
  tasks
    .map((task, index) => ({ task, index, score: taskScore(task) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ task }) => task);
