import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/workshop/BackToTop";
import CopyBlock from "@/components/workshop/CopyBlock";
import LearningNav from "@/components/workshop/LearningNav";
import ModuleDone from "@/components/workshop/ModuleDone";
import PriorityScorer from "@/components/workshop/PriorityScorer";
import { knowledgeBaseTemplates, prompts, workshop, workshopModules } from "@/data/claudeWorkshop";
import paccarHallAutumn from "@/assets/paccar-hall-autumn.png";
import instructorPortrait from "@/assets/leonard-boussioux.jpg";
import "@/styles/smc-reference.css";

const External = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const Lesson = ({ title, open, children }: { title: string; open?: boolean; children: ReactNode }) => (
  <details className="lesson" open={open}>
    <summary>{title}</summary>
    <div className="lesson__body prose">{children}</div>
  </details>
);

const Exercise = ({ time, title, children }: { time: string; title: string; children: ReactNode }) => (
  <div className="exercise">
    <p className="exercise__tag">Try it<span> · {time}</span></p>
    <h3 className="exercise__title">{title}</h3>
    <div className="prose">{children}</div>
  </div>
);

const Beyond = ({ children }: { children: ReactNode }) => (
  <p className="beyond"><strong>Beyond the workshop:</strong> {children}</p>
);

const Module = ({ id, lead, children }: { id: string; lead: string; children: ReactNode }) => {
  const module = workshopModules.find((m) => m.id === id)!;
  return (
    <section id={id} className="module" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="module__title">
        <span className="module__num">{module.num}.</span> {module.title}
      </h2>
      <p className="module__lead">{lead}</p>
      {children}
      <ModuleDone id={id} title={module.title} />
    </section>
  );
};

const iconProps = {
  width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true,
};

const workflows = [
  {
    title: "Meeting → action items",
    body: "Record the meeting with a transcription tool → the transcript goes to Claude → Claude lists action items and drafts follow-ups for you to review.",
    needs: "Transcription app account, plus a Claude connector or folder access.",
  },
  {
    title: "Weekly opportunity search",
    body: "A scheduled task runs once a week → searches for grants, awards or events that fit you → drafts a short summary or a first application.",
    needs: "Scheduled tasks in Claude; web search turned on.",
  },
  {
    title: "Fill out a form or draft an email",
    body: "Computer use opens the browser → fills in details from your knowledge base → stops so you can check and press send or submit.",
    needs: "Computer use permission for the browser or app; you approve the final step.",
  },
];

const tools = [
  { name: "Claude desktop app", href: "https://claude.com/download", note: "Chat, Cowork, Code, projects and connectors." },
  { name: "Claude Code docs", href: "https://code.claude.com/docs/en/overview", note: "Let Claude work inside a folder on your computer." },
  { name: "What are Skills?", href: "https://support.claude.com/en/articles/12512176-what-are-skills", note: "Teach Claude a repeatable way of working." },
  { name: "What are Projects?", href: "https://support.claude.com/en/articles/9517075-what-are-projects", note: "Keep files and chats for one area of your life together." },
  { name: "Connectors", href: "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities", note: "Connect Gmail, Drive, Slack, Notion and more." },
  { name: "Artifacts", href: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them", note: "Dashboards and small apps inside Claude." },
  { name: "Claude privacy center", href: "https://privacy.claude.com/en/", note: "How your data is used and how to opt out of training." },
  { name: "Wispr Flow", href: "https://wisprflow.ai", note: "Voice dictation tool the instructor uses (paid)." },
  { name: "Lovable", href: "https://lovable.dev", note: "Prototype a website from a prompt." },
  { name: "Vite", href: "https://vite.dev/guide/", note: "Fast setup for a React web app." },
  { name: "React", href: "https://react.dev", note: "The UI library behind most modern web apps." },
  { name: "Deploy Vite on Vercel", href: "https://vercel.com/docs/frameworks/frontend/vite", note: "Put your app on the web (not covered in the workshop)." },
];

const faqs = [
  { q: "Can I connect more than one Gmail account?", a: "At the time of the workshop, the Claude app connected to one Gmail account. A Gmail and an Outlook account could both be connected. Forwarding mail to one inbox is a workaround, but check your school’s or employer’s rules first." },
  { q: "I don’t see Cowork in my Claude app.", a: "Newer versions of the app merged Chat and Cowork. Use a regular chat and make sure Claude has access to your folder." },
  { q: "How small should a skill be?", a: "The instructor’s advice: prefer smaller skills that each do one task, and let the smartest model orchestrate them. Skills can be chained together." },
  { q: "Do I need to rewrite my skills when a new model comes out?", a: "Sometimes. Skills for subjective, judgment-heavy work tend to need updates, and an over-specified skill can do worse than the raw model. Skills for fixed formats, like a reimbursement email, usually keep working. Some skills become unnecessary once the model learns the task by default." },
  { q: "Subscription or API credits: what is the difference?", a: "Your subscription covers the Claude app. Apps you build that call Claude use API credits, which are pay-as-you-go. Claude Code can bill either one. If it is confusing, ask Claude to explain your billing setup." },
  { q: "Will Claude train on my chats?", a: "You can turn off “Help improve Claude” in Settings → Privacy. The instructor also recommended reading how your data is used in the privacy center, because policies have gray areas." },
];

const troubleshooting = [
  { q: "Claude says it cannot read my folder.", a: "Add the folder to the session and approve access when Claude asks. Claude only sees folders you grant." },
  { q: "Computer use can see the browser but cannot click or type.", a: "Some apps are given a read-only tier. Claude will tell you; finish that step yourself or grant the access it asks for." },
  { q: "I keep running out of usage.", a: "Check Settings → Usage for your 5-hour and weekly limits. Use Sonnet for lighter tasks and save Opus and higher effort levels for hard work." },
  { q: "My app looks like everyone else’s.", a: "Claude has a default taste. Ask for several mockups in different aesthetics, choose fonts and colors yourself, and save your style as a skill." },
];

const allPrompts = Object.values(prompts);

const ClaudeWorkshop = () => (
  <div className="min-h-screen bg-smc-page">
    <Navbar />
    <main id="top" className="smc">
      <section className="hero workshop-hero" style={{ backgroundImage: `url(${paccarHallAutumn})` }}>
        <div className="workshop-hero__inner">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><span aria-current="page">Claude Workshop</span></li>
            </ol>
          </nav>
          <p className="workshop-hero__eyebrow">Start here · Build your AI digital twin with Claude</p>
          <h1 className="display workshop-hero__title">{workshop.title}</h1>
          <p className="hero__lead workshop-hero__lead">
            A hands-on guide to using Claude as your personal AI chief of staff, from picking a model to shipping your first vibecoded app.
          </p>
          <ul className="workshop-hero__facts">
            <li>
              <svg {...iconProps}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
              <span>Prof. {workshop.instructor} · {workshop.affiliation}</span>
            </li>
            <li>
              <svg {...iconProps}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              <span>{workshop.when}</span>
            </li>
          </ul>
          <div className="hero__actions">
            <a className="btn" href="#overview">Start the workshop <span aria-hidden="true">→</span></a>
            <a className="btn btn--light" href="#models">View lecture notes</a>
          </div>
        </div>
      </section>

      <div className="workshop">
        <aside className="workshop__side">
          <LearningNav />
        </aside>

        <div className="workshop__main">
          <Module
            id="overview"
            lead="Learn how to turn Claude into a personal AI assistant, your digital twin, that understands your context, helps you prioritize, and takes real work off your plate. You stay in charge of what it sees and what it is allowed to do."
          >
            <div className="overview-grid">
              <div id="recording" className="video-slot">
                <div className="video-slot__empty">
                  <p className="video-slot__kicker">Workshop recording</p>
                  <p className="video-slot__title">Coming soon</p>
                  <p>The recording has not been published yet. This page covers the main ideas in the meantime.</p>
                </div>
              </div>
              <aside className="takeaways" aria-labelledby="takeaways-title">
                <h3 id="takeaways-title">Key takeaways</h3>
                <ul>
                  <li>Choose the right Claude model and effort level for the task</li>
                  <li>Give Claude context with projects, Markdown files and skills</li>
                  <li>Build a digital twin that interviews you before it assumes</li>
                  <li>Turn your to-do list into a prioritization dashboard</li>
                  <li>Connect Gmail, Slack and Notion, and decide what needs your approval</li>
                  <li>Prototype apps with Claude Code, Vite + React and Lovable</li>
                </ul>
              </aside>
            </div>
            <ul className="quick-links">
              <li><a href="#recording"><strong>Workshop recording</strong><span>Coming soon</span></a></li>
              <li><a href="#models"><strong>Lecture notes</strong><span>Key ideas, module by module</span></a></li>
              <li><a href="#prompts"><strong>Copyable prompts</strong><span>Ready-to-use prompts</span></a></li>
              <li><a href="#twin"><strong>Exercises</strong><span>Hands-on practice</span></a></li>
            </ul>
            <Lesson title="What the workshop set out to do" open>
              <p>The workshop was a hands-on session for students, faculty, researchers and professionals. No developer experience was needed. By the end, participants were working on two things:</p>
              <ul>
                <li>an AI chief-of-staff workflow that organizes projects and priorities, and</li>
                <li>a first app or dashboard prototype built with Claude.</li>
              </ul>
              <p>Along the way, it covered:</p>
              <ul>
                <li>how to delegate work to AI and give it useful context,</li>
                <li>multi-step AI workflows for data and research, and</li>
                <li>where human judgment still matters.</li>
              </ul>
            </Lesson>
            <div className="instructor">
              <img src={instructorPortrait} alt={`Portrait of Prof. ${workshop.instructor}`} width={96} height={96} loading="lazy" />
              <div>
                <p className="eyebrow">Instructor</p>
                <h3>Prof. {workshop.instructor}</h3>
                <p className="muted">Assistant Professor of Information Systems, UW Foster School of Business. He teaches and researches how people and AI divide work, and builds with Claude every day, from research dashboards to a bird-watching app.</p>
                <p className="instructor__links">
                  <External href={workshop.instructorUrl}>Personal website ↗</External>
                  <External href={workshop.eventUrl}>Original event page on Luma ↗</External>
                </p>
              </div>
            </div>
          </Module>

          <Module
            id="models"
            lead="Every request trades off speed, quality and how fast you use up your plan. Pick a model for how hard the task is, then pick an effort level for how much thinking it deserves."
          >
            <Lesson title="Which model? Think of the names as lengths" open>
              <p>Claude’s model names are literary forms, from shortest to longest. The bigger the model, the more capable it is, and the more of your usage it consumes.</p>
              <div className="table-wrap">
                <table className="data data--wrap">
                  <thead>
                    <tr><th scope="col">Model</th><th scope="col">Like…</th><th scope="col">When the instructor uses it</th></tr>
                  </thead>
                  <tbody>
                    <tr><th scope="row">Haiku</th><td>a very short poem</td><td>Quick, simple questions.</td></tr>
                    <tr><th scope="row">Sonnet 5.5</th><td>a poem</td><td>Shorter, easier tasks, and when speed matters.</td></tr>
                    <tr><th scope="row">Opus 5.5</th><td>a medium-length story</td><td>Hard, important work. The instructor’s default for anything that needs real thinking.</td></tr>
                    <tr><th scope="row">Fable</th><td>a very long story</td><td>The largest model. The instructor found Opus 5.5 much more cost-efficient for his work.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>In practice he uses only Opus and Sonnet. For a task like setting up a digital twin, where the model has to think through every part of your work, choose Opus. In the live demo he used Sonnet only to save time.</p>
              <p className="small-print">Model names and versions as of October 2026. They change often.</p>
            </Lesson>
            <Lesson title="Effort: how long should Claude think?">
              <p>Next to the model picker you can set an effort level: low, medium, high, extra high or max. Higher effort means more reasoning before answering. It is slower and uses more of your plan.</p>
              <dl className="effort-list">
                <div><dt>Low / Medium</dt><dd>Only for very easy questions you know have a quick answer.</dd></div>
                <div><dt>High</dt><dd>The instructor’s setting about 90% of the time.</dd></div>
                <div><dt>Extra high</dt><dd>Really hard work where you want the model to iterate back and forth.</dd></div>
                <div><dt>Max</dt><dd>Rarely. When you want new ideas and are fine with the model thinking for a long time, potentially hours.</dd></div>
              </dl>
            </Lesson>
            <Lesson title="Keep an eye on usage">
              <p>Settings → Usage shows how much of your plan you have used. There is a limit every five hours and a weekly limit. Using the strongest model and highest effort for everything is the fastest way to hit them.</p>
            </Lesson>
            <Exercise time="10 min" title="Compare two models on the same task">
              <ol>
                <li>Open two new chats with the same file attached (any syllabus or long PDF works).</li>
                <li>Set the first to Sonnet 5.5, effort high. Set the second to Opus 5.5, effort high.</li>
                <li>Paste the prompt below into both.</li>
                <li>Compare: How long did each take? Which plan would you actually follow? Was the difference worth the extra usage?</li>
              </ol>
              <CopyBlock {...prompts.modelComparison} />
              <p>Optional: run Opus again at extra high and see whether the plan improves enough to justify the wait.</p>
            </Exercise>
          </Module>

          <Module
            id="context"
            lead="Context engineering means setting Claude up with the right information about you and your work, so it can help without you re-explaining everything in every chat."
          >
            <Lesson title="Projects and memory" open>
              <p>A project groups conversations and files about one thing, so Claude carries context from one chat to the next. The instructor keeps one project per big area of his life, for example teaching, and his wildfire research. Start by listing the three or four big things you are doing and make a project for each.</p>
              <p>Turning on memory in settings lets Claude remember what you have done together, so each new chat starts with some knowledge of who you are.</p>
            </Lesson>
            <Lesson title="Markdown files as your personal knowledge base">
              <p>Markdown files are plain text files (ending in <code>.md</code>) with simple formatting. They are the standard way to hand an AI information about you. Keep them in one folder, and Claude can read them whenever it works there.</p>
              <p>The workshop demo stored a chief of staff’s whole knowledge base this way. More advanced setups use a knowledge graph or connect to note apps, but plain files are enough to start.</p>
            </Lesson>
            <Lesson title="Connecting Claude to a project folder">
              <p>In the Claude desktop app, Cowork and Code let Claude work inside a folder on your computer. When you start a session you choose two things:</p>
              <ul>
                <li><strong>Where Claude runs.</strong> On your computer, it can use your local files but the session stays on that machine. In the cloud, you can pick the session up from any device, including your phone.</li>
                <li><strong>Which folder(s) it may use.</strong> Give it only the folders it needs. Cowork can combine several related project folders in one session.</li>
              </ul>
              <p>Newer versions of the app merged Chat and Cowork. If you do not see Cowork, use a regular chat and give it access to your folder.</p>
            </Lesson>
            <Lesson title="Skills: teach Claude your way of doing things">
              <p>Claude has a default taste, and it is the same for everyone. Ask ten people to make slides with Claude and you get the same font, colors and layout. A skill is a saved set of instructions Claude loads automatically when a task calls for it. You can create one just by telling Claude how you want something done and asking it to make that a skill.</p>
              <p>Examples from the workshop:</p>
              <ul>
                <li>a slide-deck style, with one title, one message and one image per slide,</li>
                <li>a writing style that makes text sound human, with no em dashes and no inflated words,</li>
                <li>a fixed workflow, like a reimbursement request or a multi-step data analysis.</li>
              </ul>
              <p>Skills can be combined, so keep each one small and focused. Revisit them when models improve. Skills for judgment-heavy work often need updates, while format-only skills tend to keep working.</p>
              <CopyBlock {...prompts.slideSkill} />
              <p>SMC keeps ready-made career skills in the <Link to="/skills">Claude Skills Library</Link>.</p>
            </Lesson>
            <h3 className="module__h3">Starter templates for your knowledge base</h3>
            <Beyond>these four files are SMC starter templates, not files shown in the workshop. Fill in only what you are comfortable sharing, and keep the files on your own computer.</Beyond>
            <div className="template-grid">
              {knowledgeBaseTemplates.map((t) => (
                <div key={t.file}>
                  <p className="template-grid__purpose">{t.purpose}</p>
                  <CopyBlock label={t.file} text={t.text} file />
                </div>
              ))}
            </div>
          </Module>

          <Module
            id="twin"
            lead="A digital twin is a Claude setup that knows your goals, projects, people and preferences well enough to act like a chief of staff. In the workshop it took one prompt and a short interview to get started."
          >
            <Exercise time="15 min" title="Set up your digital twin">
              <ol>
                <li>Create an empty folder on your computer called <code>Digital Twin</code>.</li>
                <li>In the Claude desktop app, start a Cowork session (or a chat with folder access) and add that folder. Allow Claude to change files in it.</li>
                <li>Choose Opus 5.5 so it thinks carefully about your work. Sonnet 5.5 is faster.</li>
                <li>Choose how approvals work. If you are new to delegating to Claude, keep manual approval on so you can see each step.</li>
                <li>Paste the prompt below, fill in the brackets, and answer Claude’s interview questions.</li>
              </ol>
              <CopyBlock {...prompts.digitalTwin} />
              <p>Already built one? Ask Claude to turn it into a proactive dashboard instead. Module 05 shows how.</p>
            </Exercise>
            <Lesson title="Why “interview me” matters" open>
              <p>Left alone, the model makes a lot of assumptions. Asking it to interview you about anything that is an assumption or an open question makes it check with you first. In the demo, Claude asked:</p>
              <ul>
                <li>which folders it may read (and it skipped API keys),</li>
                <li>what the chief of staff should do day to day,</li>
                <li>how much it may do alone: only read, read and draft proposals, or edit files, and</li>
                <li>how to store the knowledge base. The instructor chose Markdown files plus a dashboard.</li>
              </ul>
            </Lesson>
            <Lesson title="What to put in your twin">
              <p>Organize what your twin knows around a few questions. The starter templates in Module 03 map to them.</p>
              <ul>
                <li><strong>Personal goals</strong>: what you want this quarter and this year (<code>goals.md</code>).</li>
                <li><strong>Professional context</strong>: your program, background, and the people you work with (<code>about-me.md</code>).</li>
                <li><strong>Projects</strong>: what is in flight, next actions, and who is blocking what (<code>projects.md</code>).</li>
                <li><strong>Work and decision preferences</strong>: when you focus best, and how you want options presented (<code>preferences.md</code>).</li>
                <li><strong>Communication style</strong>: tone and words to avoid, so drafts sound like you.</li>
              </ul>
              <Beyond>to keep it current, ask Claude to update these files at the end of a work session. Delete anything that is no longer true.</Beyond>
            </Lesson>
            <Lesson title="Privacy: decide what you are comfortable sharing">
              <p>A useful chief of staff needs access to a lot of your data. The instructor gives broad access because he values convenience, and he was clear that everyone should pick their own level of risk.</p>
              <ul>
                <li><strong>Some data you are not allowed to share.</strong> He does not give his UW email or student data to his personal Claude account. Check your school’s and employer’s rules before connecting work accounts.</li>
                <li><strong>Exclude sensitive folders.</strong> Keep banking, passwords and API keys out of the folders you grant.</li>
                <li><strong>Check training settings.</strong> If you do not want your chats used to train future models, turn off “Help improve Claude” in Settings → Privacy. Then read the <External href="https://privacy.claude.com/en/">privacy center</External> to understand what still happens to your data.</li>
              </ul>
              <p>Nothing on this page asks you to upload or publish anything. Your files stay with you.</p>
            </Lesson>
          </Module>

          <Module
            id="dashboard"
            lead="Once your twin knows your work, ask it for a dashboard. Seeing everything at once helps you step back, notice where you are the bottleneck, and choose what to do next."
          >
            <Lesson title="What the instructor’s dashboards do" open>
              <ul>
                <li>Show every research paper by stage, from early idea to under review, and where he is the one blocking progress.</li>
                <li>Estimate how long each unblock takes, so a free hour or ten minutes can go to the quickest wins.</li>
                <li>Score every task on how important it is for his career, how much joy it brings, and how quick a win it is. They also separate important from merely urgent.</li>
                <li>Review the week every Sunday evening, so wins get noticed and celebrated.</li>
              </ul>
              <p>The dashboard Claude builds is an artifact: an interactive page made inside the chat that you can keep using.</p>
            </Lesson>
            <h3 className="module__h3">Try the scoring yourself</h3>
            <p className="muted">Move the sliders and the list re-ranks. This is an illustrative model: each task scores 1–5 on Career, Joy and Urgency, and the total is a simple sum. The workshop did not give a formula, so tune it to what matters to you. Nothing you type here is saved or sent.</p>
            <PriorityScorer />
            <h3 id="prompts" className="module__h3">Prompts for your chief of staff</h3>
            <div className="prompt-stack">
              <CopyBlock {...prompts.scoreTasks} />
              <CopyBlock {...prompts.nextHour} />
              <CopyBlock {...prompts.sundayReview} />
            </div>
          </Module>

          <Module
            id="integrations"
            lead="Connected to your tools, Claude can gather context and take actions for you. Every connection needs you to sign in and grant access, and you decide which steps need your approval."
          >
            <Lesson title="Connectors: Gmail, Google Workspace, Slack, Notion" open>
              <p>Connectors in Settings let Claude read from, and sometimes act in, the apps you use. The instructor connected his personal Gmail, Google Drive and Google Calendar, plus Slack. Notion, Canva, Google Docs and Sheets are also available. Each one asks you to sign in and approve what Claude can access.</p>
              <ul>
                <li>Many universities and companies block connecting work accounts. UW does for his Microsoft account, so he connects only accounts he manages himself.</li>
                <li>At the time of the workshop the app supported one Gmail account. A Gmail and an Outlook account could be connected together.</li>
              </ul>
              <p>Learn more: <External href="https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities">using connectors</External>.</p>
            </Lesson>
            <Lesson title="Voice transcription">
              <p>The instructor dictates prompts and records meetings with <External href="https://wisprflow.ai">Wispr Flow</External>, a paid subscription that he prefers to Claude’s built-in voice input. Once a meeting transcript reaches Claude, it already has the context to suggest action items.</p>
            </Lesson>
            <Lesson title="Computer use">
              <p>With computer use, Claude can operate a browser or app on your screen. In the live demo it opened Outlook and drafted an email. Before acting, it listed its plan, ending with “send after user approval.” Things to know:</p>
              <ul>
                <li>It is slow and uses a lot of compute, because Claude has to look at screenshots. Hand it a task and come back later.</li>
                <li>Some apps are read-only for Claude. It can see the window but not click or type, and it will tell you so.</li>
                <li>If your prompt is vague, it may ask what you mean, or it may assume. Check the result before anything is sent.</li>
              </ul>
            </Lesson>
            <Lesson title="Approvals: where should a human step in?">
              <p>You can approve every action manually or let Claude skip approvals. The instructor skips them because he has built up trust over time. He recommends that beginners approve manually until they know how Claude behaves. To decide, ask yourself:</p>
              <ul>
                <li>How much attention do I have for checking?</li>
                <li>How costly would a mistake be if it slipped through?</li>
                <li>Would I let a new human assistant do this step without asking me?</li>
              </ul>
            </Lesson>
            <h3 className="module__h3">Example workflows</h3>
            <ul className="workflow-grid">
              {workflows.map((w) => (
                <li key={w.title} className="workflow">
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                  <p className="workflow__access"><strong>Needs:</strong> {w.needs}</p>
                </li>
              ))}
            </ul>
          </Module>

          <Module
            id="build"
            lead="Instead of handing in a report, turn your project into something people can use. Explore the look with mockups first, then have Claude build it."
          >
            <Lesson title="Design first: ask for mockups" open>
              <p>Ask Claude for a mockup before any code. Even better, ask for several versions side by side. The instructor generated a page of 20 different looks for his personal website from a single prompt, then mixed elements he liked from different styles.</p>
              <ul className="style-list">
                <li><strong>Glassmorphism</strong> See-through, frosted-glass panels. A look Apple uses a lot.</li>
                <li><strong>Claymorphism</strong> Soft, puffy, playful shapes. Fun for a startup or restaurant, less so for an academic.</li>
                <li><strong>Neumorphism</strong> Soft shadows that make elements look pressed into the page. Popular six or seven years ago.</li>
                <li><strong>Neo-brutalism</strong> Sharp corners, vivid colors and hard shadows, borrowed from architecture.</li>
                <li><strong>Editorial</strong> Like a newspaper. Serif fonts feel upscale; sans-serif fonts feel modern.</li>
              </ul>
              <CopyBlock {...prompts.visualStyles} />
            </Lesson>
            <Lesson title="Build with Claude Code, Vite and React">
              <p>In Claude Code, create a new folder for the project and describe the app you want. By default Claude often writes plain HTML, which is quick but limited. Adding two words, “Vite and React,” gets you an app with richer visuals and interactions that works on phones and every browser.</p>
              <p>The same lesson applies beyond web design: one keyword of domain knowledge can change the result. For his ocean-protection map, Claude’s first solution protected scattered, impractical patches. Asking for integer programming produced connected areas that made sense.</p>
            </Lesson>
            <Lesson title="Prototype with Lovable">
              <p><External href="https://lovable.dev">Lovable</External> builds a working website from a prompt. Last year the instructor’s 84 students each used it to make a personal page and a site for a real local business that had none. His bird-watching app combined Claude, ChatGPT and Lovable across more than 4,000 prompts.</p>
            </Lesson>
            <Lesson title="Put it online">
              <Beyond>
                the workshop did not cover deployment. A common free option for a Vite + React app is <External href="https://vercel.com/docs/frameworks/frontend/vite">Vercel</External>: push your project to GitHub, import the repository in Vercel, and it detects Vite automatically. You can also ask Claude Code to walk you through it.
              </Beyond>
            </Lesson>
            <Exercise time="20–30 min" title="Build a one-page app for a project of yours">
              <ol>
                <li>Pick a class project, case competition or dataset you know well.</li>
                <li>Create a new folder and open it in Claude Code.</li>
                <li>Ask for two or three mockups first, and pick one.</li>
                <li>Paste the prompt below to build it, then iterate in small steps.</li>
                <li>Open it on your phone. Does the main point land in five seconds?</li>
              </ol>
              <CopyBlock {...prompts.firstApp} />
            </Exercise>
          </Module>

          <Module
            id="resources"
            lead="Everything in one place: the recording and notes as they become available, all prompts from this page, recommended tools, and answers to common questions."
          >
            <ul className="resource-grid">
              <li className="resource"><h3>Workshop recording</h3><p className="muted">Coming soon.</p></li>
              <li className="resource"><h3>Lecture notes</h3><p className="muted">Modules 02–07 on this page summarize the session. The instructor’s edited notes are coming soon.</p></li>
              <li className="resource"><h3>Screenshots</h3><p className="muted">Demo screenshots are coming soon.</p></li>
              <li className="resource"><h3>Event page</h3><External href={workshop.eventUrl}>View on Luma ↗</External></li>
            </ul>
            <Lesson title={`All prompts (${allPrompts.length})`}>
              <div className="prompt-stack">
                {allPrompts.map((p) => <CopyBlock key={p.label} {...p} />)}
              </div>
            </Lesson>
            <h3 className="module__h3">Recommended tools</h3>
            <ul className="tool-grid">
              {tools.map((t) => (
                <li key={t.name}>
                  <External href={t.href}>
                    {t.name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                  </External>
                  <span>{t.note}</span>
                </li>
              ))}
            </ul>
            <h3 className="module__h3">Frequently asked questions</h3>
            <div className="faq">
              {faqs.map((f) => <Lesson key={f.q} title={f.q}><p>{f.a}</p></Lesson>)}
            </div>
            <h3 className="module__h3">Troubleshooting</h3>
            <div className="faq">
              {troubleshooting.map((f) => <Lesson key={f.q} title={f.q}><p>{f.a}</p></Lesson>)}
            </div>
            <h3 className="module__h3">Keep learning</h3>
            <ul className="bullets">
              <li><Link to="/skills">SMC Claude Skills Library</Link>: career skills you can add to Claude today.</li>
              <li><Link to="/events">SMC events</Link>: upcoming workshops and talks.</li>
              <li><External href={workshop.instructorUrl}>Prof. Boussioux’s website</External>: his research and teaching.</li>
            </ul>
            <div className="notice missing">
              <strong>Still to come on this page:</strong>
              <ul>
                <li>Workshop recording (link or embed)</li>
                <li>Edited, fact-checked transcript and concise lecture notes from the instructor</li>
                <li>Slides or screenshots from the live demos</li>
                <li>Instructor review of this page</li>
              </ul>
            </div>
          </Module>
        </div>
      </div>
      <BackToTop />
    </main>
    <div className="h-16" aria-hidden="true" />
    <Footer />
  </div>
);

export default ClaudeWorkshop;
