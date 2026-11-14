import liferMap from "@/assets/notes-lifer-map.jpg";
import livingGallery from "@/assets/notes-living-gallery.jpg";
import ai4wildfire from "@/assets/notes-ai4wildfire.jpg";

// Lecture notes from "Notes - Build with Claude with Léonard Boussioux.docx",
// kept word for word. Each section is tagged with the workshop learning-path
// module (1–8, see workshopModules) it belongs to.

export const NOTES_PATH = "/skills/claude-workshop-notes";

/** Plain text, or a run of text with links and italics. */
export type RichText = string | (string | { text: string; href?: string; em?: boolean })[];

export type NotesBlock =
  | { type: "p"; content: RichText }
  | { type: "q"; text: string }
  | { type: "ul"; items: RichText[] }
  | { type: "figure"; image: string; width: number; height: number; caption: RichText };

export type NotesSection = { id: string; title: string; path: number; blocks: NotesBlock[] };
export type NotesChapter = { id: string; num: string | null; title: string; sections: NotesSection[] };

export const notes = {
  title: "Build with Claude: Your AI Chief of Staff Workshop",
  byline: "Léonard Boussioux · October 26, 2026",
  recordingUrl: "https://www.youtube.com/watch?v=6R3xWZALSCo",
};

export const notesChapters: NotesChapter[] = [
  {
    id: "notes-scope",
    num: null,
    title: "Purpose and scope",
    sections: [
      {
        id: "workshop-purpose-and-scope",
        title: "Workshop Purpose and Scope",
        path: 1,
        blocks: [
          { type: "p", content: "These notes explain how to use Claude and related tools for sustained work, design, reusable workflows, personal organization, and interactive applications. The central question is how to divide the work between a person and an AI system: what context to provide, what to delegate, where to ask for alternatives, and which decisions still need human attention." },
          { type: "p", content: "The examples come from the workshop demonstrations and the presenter’s working practices. They follow the sequence of the lecture notes, with explicit topic headings tagged to website learning paths. Product interfaces, model options, account requirements, and usage arrangements refer to the workshop context unless otherwise noted; they can change. Demonstrated results and personal preferences should not be read as promises that every account or project will behave the same way." },
        ],
      },
    ],
  },
  {
    id: "notes-1",
    num: "01",
    title: "Choose the right working environment",
    sections: [
      {
        id: "chat-cowork-and-code",
        title: "Chat Cowork and Code",
        path: 1,
        blocks: [
          { type: "p", content: "The desktop interface shown in the workshop offered Chat, Cowork, and Code. These are different ways of working with the model, with some overlap in what they can do." },
          { type: "p", content: "Chat is useful for questions that do not require an extended workspace or much project-specific context." },
          { type: "p", content: "Cowork provides a harness around the model: a structure for longer tasks, access to relevant context, and work that can involve several steps or tools. It can also produce code, so the boundary between Cowork and Code is not simply whether programming is involved." },
          { type: "p", content: "Code supports work on software and applications in a selected project or folder. Choosing the working environment and giving it the right files are part of setting up the task." },
          { type: "p", content: "Some participants saw a different interface because the Chat and Cowork experience was changing. The practical response was to use the available chat interface with the appropriate folder access rather than assume that a missing label meant the workflow was impossible. The relevant questions are what the system can access, which tools it has, and how it will execute the task." },
        ],
      },
      {
        id: "model-selection-and-effort-levels",
        title: "Model Selection and Effort Levels",
        path: 2,
        blocks: [
          { type: "p", content: "The workshop interface included Fable, Opus, Sonnet, and Haiku. Léonard’s working preference at the time was Opus 5.5 for more demanding work and Sonnet for easier or shorter tasks. He described Opus as a better fit for his own balance of capability and cost than Fable. These are personal choices from the demonstrated setup, rather than a universal ranking for every task." },
          { type: "p", content: "Effort is a separate choice from the model. The available settings included low, medium, high, extra, and max. Léonard used high for most work, extra when he wanted more sustained reasoning and iteration, and max rarely, for particularly ambitious work. He used lower effort for straightforward questions that did not justify as much processing." },
          { type: "p", content: "The live demonstrations sometimes used Sonnet to reduce waiting time even when Léonard would normally have chosen Opus. That distinction matters when evaluating a demonstration: the fastest route for presenting a workflow may not be the preferred route for a difficult real project. More capable models and more intensive use can also consume the available allowance faster." },
        ],
      },
      {
        id: "local-and-cloud-environments",
        title: "Local and Cloud Environments",
        path: 7,
        blocks: [
          { type: "p", content: "In Code, select both the environment and the project. A cloud session can be accessed from different devices. A local session runs on the selected computer and can work with files through enabled tools and permissions. Accessing that local work from another device depends on the remote-access setup." },
          { type: "p", content: "A chosen folder provides working context, but it should not be mistaken for a universal security boundary. Local access is not automatically unrestricted access to every file, and an approved command may have a scope that differs from the folder selected in the interface. Review the actual permissions instead of inferring them from the project name." },
          { type: "p", content: "Separate folders can hold a birdwatching application, a personal website, a wildfire project, or another body of work. Selecting the relevant folder helps the model work with the right material. It also makes the scope of a task easier for the human to understand." },
        ],
      },
      {
        id: "search-and-projects",
        title: "Search and Projects",
        path: 3,
        blocks: [
          { type: "p", content: "Search helps retrieve previous conversations. A topic such as wildfire or reimbursements can lead back to the work already done rather than starting over from an incomplete recollection." },
          { type: "p", content: "Projects organize conversations and files around a continuing activity, such as teaching or research. They provide a place to maintain the context that makes later work useful. A project is a practical organizational choice, not a guarantee that every detail from every conversation will be recalled at the right time. Important context still needs to be available and checked." },
        ],
      },
      {
        id: "scheduled-tasks-and-long-running-agents",
        title: "Scheduled Tasks and Long Running Agents",
        path: 6,
        blocks: [
          { type: "p", content: "Scheduled tasks are suited to work that genuinely recurs. The workshop examples included checking weekly for mineral shows, finding grants or awards, monitoring competitors, and assembling news relevant to a particular interest. A grant-search task might also assess fit or begin a draft. Define the recurring activity around a concrete need instead of scheduling a generic request to be helpful." },
          { type: "p", content: "Long-running agents extend this idea beyond a single exchange. They can maintain context and coordinate work over time. The workshop discussed several evolving products, but the durable idea is delegation: a system needs enough context to understand the task and appropriate authority to act. An attractive conversational interface does not remove either requirement." },
        ],
      },
    ],
  },
  {
    id: "notes-2",
    num: "02",
    title: "Manage context, tools, privacy, and permissions",
    sections: [
      {
        id: "tools-and-connectors",
        title: "Tools and Connectors",
        path: 6,
        blocks: [
          { type: "p", content: "A model’s response changes when it has access to tools. It may be able to search the web, retrieve a document, consult a calendar, inspect messages, or work in another application. Connectors provide supported connections to services such as Google Drive, Gmail, Google Calendar, Slack, Notion, Canva, and document or spreadsheet tools." },
          { type: "p", content: "The value of these connections is contextual. A system that can see the relevant material may help coordinate work without requiring the user to copy each fragment into a prompt. In the workshop, personal email, a personal Slack workspace, and meeting material were examples of inputs to a more connected working system." },
        ],
      },
      {
        id: "meeting-transcripts-and-voice-input",
        title: "Meeting Transcripts and Voice Input",
        path: 6,
        blocks: [
          { type: "p", content: "Recorded meeting content was another source of context. Léonard used Wispr Flow in his workflow and described routing meeting material into Claude so that the system could recognize action items. The useful pattern is to connect an authorized source of meeting information to the task that follows. Recording a meeting, giving a system access to it, and authorizing actions based on it are separate decisions." },
        ],
      },
      {
        id: "memory-and-knowledge-bases",
        title: "Memory and Knowledge Bases",
        path: 3,
        blocks: [
          { type: "p", content: "When enabled, memory can retain useful information and bring relevant remembered context into later conversations. It does not mean the system remembers everything a person does or inserts every remembered detail into every chat. Its scope depends on the feature and account settings. Remembered information can be reviewed, edited, or deleted." },
          { type: "p", content: "For sustained work, distinguish memory from a deliberate collection of project files. Memory can help continuity; a folder of readable notes gives the user something explicit to inspect and update. The chief-of-staff demonstration later in these notes uses text files precisely because the context should have a visible home." },
        ],
      },
      {
        id: "privacy-and-data-settings",
        title: "Privacy and Data Settings",
        path: 6,
        blocks: [
          { type: "p", content: "The workshop recommended reviewing the “Help improve our AI models” setting. For consumer Claude, disabling it stops future model-improvement use under that setting. It does not undo training already started or completed. Safety-flagged conversations and feedback explicitly submitted by the user have separate exceptions." },
          { type: "p", content: "This setting is not a promise that the service performs no processing at all. Anthropic describes privacy-preserving analysis that abstracts and aggregates conversation patterns. That is different from decentralized machine learning and does not establish that ordinary model training bypasses an opt-out." },
          { type: "p", content: "Human review can occur in specified circumstances, including safety enforcement, feedback consent, and limited review of opted-in training data with account identifiers removed. This is not the same as saying that humans routinely read every conversation. The practical question is still what information the user is comfortable and authorized to provide, under the applicable terms." },
        ],
      },
      {
        id: "usage-limits-and-allowances",
        title: "Usage Limits and Allowances",
        path: 2,
        blocks: [
          { type: "p", content: "Usage settings deserve attention as well. The demonstrated account showed shorter-window and weekly limits. Intensive use of a stronger model could exhaust those allowances faster. Look at the usage information for the actual account rather than assuming that a subscription means unlimited work." },
        ],
      },
      {
        id: "institutional-data-and-authorized-access",
        title: "Institutional Data and Authorized Access",
        path: 6,
        blocks: [
          { type: "p", content: "The workshop distinguished personal accounts from university data. A connector that works for a personal inbox does not establish permission to connect an institutional inbox. Browser access also does not authorize a disclosure that a direct connector would prohibit." },
          { type: "p", content: "At UW, email and student records require the university’s approved services and data protections. An EDU label or a general statement about FERPA compliance is not, by itself, authorization to upload student data. The institutional account, authorized purpose, and applicable rules matter." },
          { type: "p", content: "An editorial update checked on October 27, 2026, notes that UW’s managed Claude for Education service permits FERPA-protected records where there is a legitimate educational interest, states that UW data is not used for training, and disables third-party connectors. That is current guidance from the undated FAQ, not an independently archived snapshot of the policy on the workshop day." },
          { type: "p", content: "Forwarding messages is not a way around these requirements. Bringing mail into another account may be technically possible, but both the accounts and the data must be authorized for that destination. UW employees should not forward UW email to an external address unless that destination is specifically approved." },
        ],
      },
      {
        id: "connecting-email-accounts",
        title: "Connecting Email Accounts",
        path: 8,
        blocks: [
          { type: "q", text: "Can Claude connect to more than one Gmail account?" },
          { type: "p", content: "Léonard had not found a way to connect two Gmail accounts in the specific interface he demonstrated. The exact numerical limit was not confirmed in the documentation reviewed for the corrected transcript. Treat this as an observation about that setup, not a verified product-wide limit. A custom MCP server was discussed as a possible technical way to expose multiple authorized accounts to the model, but it adds complexity and does not change data-permission requirements. Léonard also described ChatGPT’s agent setup as an alternative he used for combining multiple email accounts and noted that newer offerings such as Duet could differ from the interface on screen. Those were contemporaneous observations, not verified account limits or a promise about every current product configuration." },
          { type: "q", text: "Are Gmail and Outlook the same question as two Gmail accounts?" },
          { type: "p", content: "No. Gmail and an eligible Microsoft work account use separate connectors. The Microsoft 365 connection requires a supported work-account setup and administrative consent; it is not equivalent to connecting an ordinary personal Outlook.com account. Availability and permission need to be checked for the actual account." },
          { type: "q", text: "If a connector is restricted, can browser control replace it?" },
          { type: "p", content: "Browser control may offer a different technical route, but it does not grant new authority. The same institutional restrictions and data-protection requirements apply. A technical workaround must not be confused with an authorized workflow." },
        ],
      },
    ],
  },
  {
    id: "notes-3",
    num: "03",
    title: "Put human review where actions and assumptions matter",
    sections: [
      {
        id: "computer-use-and-email-workflows",
        title: "Computer Use and Email Workflows",
        path: 6,
        blocks: [
          { type: "p", content: "The email demonstration showed an agent breaking a request into steps: identify the recipient, clarify the content, open the relevant application, prepare the message, and seek approval before sending. That sequence is useful because it exposes where the model needs information and where a human decision belongs." },
          { type: "p", content: "A short request such as “Send an email” is not a complete specification. The model still needs to know who should receive it, what the message should say, and why it is being sent. In the demonstration it asked questions, but models do not always ask about every important uncertainty. They can also make assumptions." },
          { type: "p", content: "The task encountered a permission limit: browser access was available at a read-only tier, with clicks and typing blocked. The demonstration then showed work in the email application. This was an illustration of tool-specific permissions, not evidence that a model can always operate whichever interface is convenient. A blocked capability should remain a visible part of the workflow." },
          { type: "p", content: "Computer use was also slow compared with a person performing the same familiar clicks. The model had to process visual information and take actions through the interface. The point of delegation was not necessarily to beat a human at each click; it was to let a task progress while the person attended to other work, then return for the relevant review." },
        ],
      },
      {
        id: "reviewing-messages-and-form-submissions",
        title: "Reviewing Messages and Form Submissions",
        path: 6,
        blocks: [
          { type: "p", content: "Even when the agent found the intended address and prepared a message, its wording needed correction. It initially referred to the participant in the third person where the message should have addressed the person directly. Small errors of this kind are a reason to review the actual message, not merely check that the agent reached the right application." },
          { type: "p", content: "Form filling follows a similar pattern. A system with the relevant authorized information can help populate a name, role, employer, or short biography. The person still checks the result and decides whether to submit it. Separating preparation from submission keeps assistance useful without hiding the consequential step." },
          { type: "p", content: "The broader design question is where human attention creates the most value. Requiring approval for every minor step can become burdensome, but removing all review can allow errors to compound. The workshop’s recurring principle was to design this division of labor explicitly rather than let the default interface decide it." },
        ],
      },
      {
        id: "verification-and-cybersecurity",
        title: "Verification and Cybersecurity",
        path: 7,
        blocks: [
          { type: "p", content: "More capable models can produce more ambitious work, but someone still needs to establish whether the result is correct and usable. Code for a large organization, a research argument, and an externally sent message have different review needs. A polished result does not demonstrate that hidden work was done correctly." },
          { type: "p", content: "The cybersecurity discussion used a specific example. On October 21, 2026, PHP published fixes for critical vulnerabilities. The UK National Cyber Security Centre urged organizations to update or apply mitigations and, if that could not be done promptly, to consider taking affected systems offline. This was conditional advice, not a directive to shut down all websites." },
          { type: "p", content: "A vulnerability is a weakness; an exploit is a way of taking advantage of it. Keeping that distinction clear is part of evaluating technical claims. The workshop’s relevant lesson was that generated or inherited code can contain problems that require verification. Increased production of code does not remove the responsibility to examine it." },
        ],
      },
    ],
  },
  {
    id: "notes-4",
    num: "04",
    title: "Use design exploration to develop your own taste",
    sections: [
      {
        id: "mockups-and-design-alternatives",
        title: "Mockups and Design Alternatives",
        path: 7,
        blocks: [
          { type: "p", content: "One of the simplest changes to a design workflow is to ask explicitly for mockups. Without that request, an agent may move straight into building. A mockup creates a stage at which the person can compare options before asking for code." },
          { type: "p", content: "The workshop showed proposed views for a birdwatching application, including checklists and overview screens. The existing interface and proposed redesign could be compared side by side. This made small decisions visible: the treatment of navigation choices, the density of background shading, and whether numerical information belonged in separate boxes or in a compact line." },
          { type: "p", content: "The same method applied to a personal website containing research, teaching, news, and photography. Léonard asked for a set of twenty aesthetic directions in one prompt and reported receiving the alternatives after roughly thirty minutes. The important lesson is the breadth of exploration, not that every similar request will take the same time or produce the same quality." },
        ],
      },
      {
        id: "visual-design-styles",
        title: "Visual Design Styles",
        path: 7,
        blocks: [
          { type: "p", content: "The examples included several recognizable directions:" },
          { type: "ul", items: [
            "Glassmorphism uses a transparent or glass-like treatment.",
            "Claymorphism gives elements a more sculpted, playful appearance.",
            "Neumorphism creates a sense of depth through the treatment of surfaces and elements.",
            "Neobrutalism can use sharp angles, vivid colors, and pronounced shadows.",
            "Editorial design borrows cues from publications, including deliberate typography and page structure.",
            "Synthwave and cyberpunk offered additional visual directions from which individual elements could be borrowed.",
          ] },
          { type: "p", content: "These labels help request visibly different alternatives, but they do not decide which one fits the audience. A playful treatment that suits one business may feel wrong for an academic website. Likewise, serif and sans serif typefaces can suggest different tones, but the final choice belongs to the design as a whole rather than to a rule that one category is always better." },
          { type: "p", content: "The workshop encouraged mixing selected elements rather than choosing a complete style unchanged. If one mockup has an appealing layout and another has an effective animation, ask for a new mockup that combines those elements. Continue comparing before moving into implementation." },
        ],
      },
      {
        id: "birdwatching-app-design",
        title: "Birdwatching App Design",
        path: 7,
        blocks: [
          { type: "p", content: ["The ", { text: "Lifer Map birdwatching app", href: "https://lifermap.com" }, " helps people find birds around them worldwide. The campus demonstration used recent local observations to show the variety of birds nearby. Its redesign made the visual choices concrete. The earlier design used glass-like effects and a more game-like profile. A redesign sought a more serious feel through fewer colors, less background gray, sharper lines, a darker green, softer gray, and small changes to the life-list layout."] },
          { type: "figure", image: liferMap, width: 1400, height: 834, caption: [{ text: "Figure 1. Lifer Map — a previous product view of bird targets around Central Park, New York. Illustrative app screenshot, not the campus view in the recording. Original capture date not recorded; compiled October 26, 2026. ", em: true }, { text: "Explore Lifer Map", href: "https://lifermap.com" }, { text: ".", em: true }] },
          { type: "p", content: "The application’s underlying subject did not change. Its profile, bird lists, checklists, and achievements remained. What changed was the way those features were presented. Asking how users should feel when they arrive can help turn a vague dissatisfaction into a direction the model can explore." },
          { type: "p", content: "The birdwatching project also illustrates the difference between a compelling demo and a mature application. Léonard described thousands of prompts across Claude, ChatGPT, and Lovable to develop the larger app. Some visual experiments took one prompt; the overall product required sustained work. Both can be true." },
        ],
      },
      {
        id: "ux-judgment-and-slide-design",
        title: "UX Judgment and Slide Design",
        path: 7,
        blocks: [
          { type: "p", content: "The workshop’s answer to a question about UX research emphasized human taste. Models can draw on many familiar interface patterns, but this does not mean a generated mockup has been validated with the intended users. It also does not mean the default aesthetic differentiates one product from another." },
          { type: "p", content: "Léonard identified recurring patterns he disliked in generated slides: similar fonts and colors, small upper labels, prominent introductory numbers, and text that was too small or too light gray. These are observations about his outputs and preferences, not universal rules that every such element is bad. A section label may help in a long presentation; it may also add clutter when the story is already clear." },
          { type: "p", content: "The practical response is to give concrete feedback. Identify the element that feels wrong, explain the intended effect, compare alternatives, and preserve the preferences that repeatedly improve the work. Reusable skills provide one way to preserve those preferences." },
        ],
      },
      {
        id: "student-websites-and-visual-presentations",
        title: "Student Websites and Visual Presentations",
        path: 7,
        blocks: [
          { type: "p", content: "The workshop included a gallery of websites created by a class of 84 students. The assignment asked each student to create a personal website and choose a real business that did not already have a website, then build a promotional page for that business. Students used Lovable for those sites. Claude helped build a visual presentation of that work, including arranging the images into a W. That arrangement required iteration." },
          { type: "p", content: "This example broadens the design question beyond a single website. A collection of projects can itself become an interactive visual artifact. The human contribution is deciding what the presentation should express and recognizing which generated arrangement does the job." },
        ],
      },
    ],
  },
  {
    id: "notes-5",
    num: "05",
    title: "Turn repeatable expertise into reusable skills",
    sections: [
      {
        id: "reusable-skills",
        title: "Reusable Skills",
        path: 3,
        blocks: [
          { type: "p", content: "A skill is a reusable set of instructions for a task or workflow. Rather than repeatedly correcting the same slide design or explaining the same reimbursement procedure, capture the method so that the system can use it again when relevant." },
          { type: "p", content: "In the live example, Léonard asked Claude to turn his slide preferences into a skill. The proposed skill included a description of when it should be used and detailed instructions for the work. Reading that proposal matters: the generated instructions are the mechanism through which the preference is supposed to persist. The existence of a skill alone does not establish that it says the right thing or will be used correctly." },
          { type: "p", content: "The workshop’s examples ranged from reimbursement requests and paper reviews to slide decks, writing, PDF production, and complex application-building workflows. Skills can also preserve organizational practice. A senior engineer’s knowledge of how a company wants software built can be expressed in reusable instructions for others working with the same tools." },
          { type: "p", content: "Community-created skills offer another source of methods. Léonard showed a large collection he was studying, spanning many different subjects. The useful idea is that workflow knowledge can be shared and adapted. A downloaded skill still needs to fit the task and the user’s context; it should not be treated as an automatic guarantee of good results." },
        ],
      },
      {
        id: "embeddings-umap-and-hdbscan",
        title: "Embeddings UMAP and HDBSCAN",
        path: 3,
        blocks: [
          { type: "p", content: "One example involved exploring a collection of skills as a visual application. The process included several distinct stages:" },
          { type: "ul", items: [
            "Represent the skills numerically using embeddings.",
            "Reduce those representations to a low-dimensional space using UMAP.",
            "Identify clusters using HDBSCAN.",
            "Use a language model to help name the clusters.",
            "Build a visual application around the resulting structure.",
          ] },
          { type: "p", content: "The value of a skill here is that the workflow is more specific than “make a visualization.” It preserves the sequence and methods that produced the desired kind of result. Once that method exists, a later request can be shorter because the task instructions already contain the missing detail." },
        ],
      },
      {
        id: "job-application-workflows",
        title: "Job Application Workflows",
        path: 3,
        blocks: [
          { type: "p", content: "The same logic applies to less technical work. A job-application workflow can include adapting a résumé while preserving its fundamentals and revising a cover letter in the applicant’s own voice. The skill should encode the parts that need to remain consistent rather than leave the model to rediscover them each time." },
        ],
      },
      {
        id: "writing-style-and-personal-preferences",
        title: "Writing Style and Personal Preferences",
        path: 3,
        blocks: [
          { type: "p", content: "Léonard described a writing skill intended to make generated text more readable and closer to his own style. His preferences included avoiding unnecessarily complicated words, abstract phrasing, and repetitive patterns. He also gave examples of personal exclusions, such as avoiding particular words or punctuation." },
          { type: "p", content: "These are style preferences, not a universal definition of good human writing. The useful question is what the intended reader needs and what the author actually sounds like. Examples of the author’s prior writing can provide positive guidance; explicit constraints can address recurring problems. Both can be part of a skill." },
          { type: "q", text: "Is it better to tell the model what to include than to maintain a long list of things to avoid?" },
          { type: "p", content: "A participant described supplying a body of their own writing and restricting vocabulary to words already used in it. The workshop did not establish that this guarantees uniqueness or is superior for every writing task. The general lesson was to make the preferred writing style available and inspect the results, rather than assume that either an inclusion list or an exclusion list solves the problem by itself." },
        ],
      },
      {
        id: "text-watermarks-and-authorship-questions",
        title: "Text Watermarks and Authorship Questions",
        path: 8,
        blocks: [
          { type: "q", text: "Would restricting the vocabulary defeat a text watermark?" },
          { type: "p", content: "The corrected transcript makes clear that this was not established. Anthropic describes its text watermark as a SynthID-Text variant using keyed randomness when choosing among acceptable words, not simply the selection of the most frequent or highest-probability word. Supplying an author’s vocabulary does not demonstrate that the watermark has been removed or defeated. Writing in an appropriate voice and making claims about detection are separate matters." },
        ],
      },
      {
        id: "combining-skills-and-human-review",
        title: "Combining Skills and Human Review",
        path: 3,
        blocks: [
          { type: "q", text: "Can several skills be used in the same prompt?" },
          { type: "p", content: "Yes. The workshop emphasized composability: different task-specific instructions can be used together or in sequence. A workflow may need research, writing, formatting, and a human review point. These do not have to be isolated in agents that each know only one thing." },
          { type: "p", content: "A skill can also specify when to request human input. That makes the division of labor part of the workflow itself. For example, a process can proceed through preparation and then pause when a decision requires the user’s judgment. This is different from assuming that everything described in the skill should be executed without review." },
        ],
      },
      {
        id: "skill-size-and-workflow-granularity",
        title: "Skill Size and Workflow Granularity",
        path: 3,
        blocks: [
          { type: "q", text: "Should a skill that produces six pieces of collateral be one large skill or several smaller ones?" },
          { type: "p", content: "There is no single correct level of granularity. Léonard generally favored smaller tasks that a capable coordinating model can call, but treated the decision as task-specific. Consider how often the work needs correction, how costly an unnoticed mistake would be, and how much human attention is available." },
          { type: "p", content: "Every additional assumption creates an opportunity for the workflow to drift. Breaking work into smaller parts can make important decisions easier to inspect, but excessive fragmentation can also create more coordination. The useful analogy is managing a capable colleague: at what points would a check-in materially improve the outcome?" },
        ],
      },
      {
        id: "maintaining-skills-as-models-change",
        title: "Maintaining Skills as Models Change",
        path: 3,
        blocks: [
          { type: "q", text: "Should skills be revised when a new model appears?" },
          { type: "p", content: "Important skills should be revisited. Léonard found that instructions could work differently across models and across versions of the same model. Skills involving subjective judgment, abstraction, or demanding reasoning were especially likely to need adjustment." },
          { type: "p", content: "Over-specification can become a problem. Instructions that once compensated for a weakness may later constrain a model that can perform the task more effectively without them. A detailed creative method can therefore age differently from a stable reimbursement format or a specific email convention." },
          { type: "p", content: "This is the practical meaning of an uneven or “jagged” capability frontier: a model can improve in some areas while still needing support in others. Preserve the instructions that encode genuine preferences or requirements. Reconsider instructions that merely worked around an earlier model’s limitations. A skill is a maintained working method, not a permanent rulebook that becomes correct by being stored." },
        ],
      },
    ],
  },
  {
    id: "notes-6",
    num: "06",
    title: "Build a chief of staff around explicit context",
    sections: [
      {
        id: "defining-the-digital-twin-role",
        title: "Defining the Digital Twin Role",
        path: 4,
        blocks: [
          { type: "p", content: "The workshop’s chief-of-staff idea addresses the coordination burden of many simultaneous projects. Research, teaching, collaborators, travel, applications, and personal interests all create commitments that are hard to hold in view at once. A useful system should help organize those commitments and identify where action is needed." },
          { type: "p", content: "“Digital twin” was the label used for a personalized context-and-workflow system. It does not mean the system literally becomes the person or has authority to make every decision in their name. One of the setup questions explicitly distinguished a chief of staff advising the user from a system acting as the user." },
          { type: "p", content: "Begin with a bounded purpose. In the demonstration, the research chief of staff was a narrower project than an assistant with access to everything. This made it possible to choose relevant folders and decide which responsibilities belonged in the first version." },
        ],
      },
      {
        id: "folder-setup-and-initial-configuration",
        title: "Folder Setup and Initial Configuration",
        path: 4,
        blocks: [
          { type: "p", content: "The demonstrated setup can be understood as the following sequence:" },
          { type: "ul", items: [
            "Create a new folder for the digital twin, or select an existing folder where the system should live.",
            "Open a conversation in Cowork, or the available interface that supports the required folder access, and attach the folder.",
            "Choose a model and an approval setting appropriate to the work. The workshop used Sonnet for speed while noting a preference for a stronger model for the fuller planning task.",
            "Describe the chief-of-staff role and ask the system to interview you about missing context and assumptions.",
            "Review which other folders it proposes to read and approve only the intended scope.",
            "Decide what it should do independently and how it should store its knowledge.",
            "Let it assemble the initial context and dashboard, then examine whether the result reflects the intended job.",
          ] },
          { type: "p", content: "The short opening request in the workshop was “I want you to create the perfect digital twin chief of staff for me.” The more important accompanying instruction was to interview the user. Léonard recommended asking, “Interview me for everything that is an assumption or an open question.” This reduces the chance that a broad request quietly turns into a system built around guessed priorities." },
          { type: "p", content: "Voice input can make it easier to supply a rich description of the work. The workshop used Wispr Flow and noted that Claude’s own voice input could also be used. The essential step is supplying the context, not adopting a particular dictation product." },
        ],
      },
      {
        id: "the-setup-interview",
        title: "The Setup Interview",
        path: 4,
        blocks: [
          { type: "p", content: "The demonstration’s questions were substantive. The new folder was empty, but the computer held many other project folders. The system asked which ones it could read and proposed avoiding API keys. Léonard selected a research-focused set rather than treating every available file as appropriate context." },
          { type: "p", content: "The interview then separated different responsibilities. For the research workflow, relevant functions included tracking each paper’s stage, identifying next actions, noticing co-author blockers and deadlines, and advising what to push first. Grants, budgets, and reimbursements could support that work. Peer-review and service tasks were considered separately rather than included automatically." },
          { type: "p", content: "Context about collaborators and advising could also be useful, but the privacy requirements remain. A research chief of staff does not create permission to place student or institutional records into an unapproved account. The scope of the knowledge base must follow the authorized purpose and service." },
          { type: "p", content: "Another question concerned autonomy. Options included reading, drafting, and proposing; editing project files; or remaining fully advisory. In the demonstration, Léonard chose “read, draft, and propose.” That choice is a concrete definition of what the system should do, not merely a tone preference." },
          { type: "p", content: "Finally, the system asked what success would look like. The research example used progress toward more submitted papers. A success criterion helps distinguish useful coordination from a dashboard that is attractive but does not support the work that matters." },
        ],
      },
      {
        id: "markdown-files",
        title: "Markdown Files",
        path: 4,
        blocks: [
          { type: "p", content: "The simple version stored knowledge in Markdown files. Markdown is readable text with lightweight formatting, which makes it a practical place to keep information that both the person and the model can inspect. Léonard chose Markdown plus a dashboard." },
        ],
      },
      {
        id: "dashboards-knowledge-graphs-obsidian-and-databases",
        title: "Dashboards Knowledge Graphs Obsidian and Databases",
        path: 4,
        blocks: [
          { type: "p", content: "The dashboard is a view of the underlying work; it does not remove the need to maintain the information behind it. More elaborate approaches can use a knowledge graph, Obsidian, or a personal database. The workshop emphasized that such machinery is not required to begin. A useful first system can consist of text files, carefully selected context, and a clear role." },
          { type: "p", content: "The live setup also discovered that a related system already existed. Instead of duplicating it blindly, it asked where the new system should add value. More detailed contact relationships and proactive briefings were possible extensions. The lesson is to build on existing context where appropriate rather than multiply overlapping assistants without a clear reason." },
        ],
      },
      {
        id: "permissions-and-approval-settings",
        title: "Permissions and Approval Settings",
        path: 4,
        blocks: [
          { type: "p", content: "Léonard showed a permissive setup that reflected his own comfort with delegation. He also advised people who were new to this kind of workflow to start with manual approval and observe what the system did. Familiarity with repeated prompts is not, by itself, a reason that every future action should be preapproved." },
          { type: "p", content: "One permission prompt grouped several folders together. If a user did not want one of them included, the demonstrated response was to cancel and ask for a revised scope. Interface inconvenience should not be mistaken for a reason to accept access that was not intended." },
          { type: "p", content: "Personal tolerance for risk is only part of the decision. Legal obligations, institutional rules, and other people’s information can impose limits even when the user would prefer convenience. A useful chief of staff is designed within those limits." },
        ],
      },
    ],
  },
  {
    id: "notes-7",
    num: "07",
    title: "Use dashboards to choose work and reflect on it",
    sections: [
      {
        id: "research-pipeline-and-project-stages",
        title: "Research Pipeline and Project Stages",
        path: 5,
        blocks: [
          { type: "p", content: "The research dashboard grouped papers by stage, including early work, preparation for submission, review, and major revision. This provided a view across projects that was difficult to obtain from separate conversations and files." },
        ],
      },
      {
        id: "blockers-and-time-based-next-actions",
        title: "Blockers and Time Based Next Actions",
        path: 5,
        blocks: [
          { type: "p", content: "The most useful question was often where the user was blocking progress. A short response or decision might release work that other people were waiting to do. The dashboard could help distinguish a ten-minute intervention from a task requiring an hour of concentrated effort." },
          { type: "p", content: "Two prompts illustrated how to use that view: “I have an hour ahead of me. Let’s try to unblock as many things as possible,” and “I only have 10 minutes. What are the key things we can do in 10 minutes?” The system can then interview the user about unresolved details instead of producing an abstract list detached from the available time." },
        ],
      },
      {
        id: "prioritization-and-personal-values",
        title: "Prioritization and Personal Values",
        path: 5,
        blocks: [
          { type: "p", content: "Tasks can be considered along several dimensions: importance to a career, importance to personal life, anticipated enjoyment, urgency, and the amount of progress a quick action could unlock. The workshop demonstrated asking AI to assess these dimensions and help order the work." },
          { type: "p", content: "Such scores are judgments based on the supplied context. They are not objective measurements of a person’s happiness or the true value of a project. Their purpose is to support a discussion of priorities. The user can change the criteria or challenge an assessment that does not fit." },
          { type: "p", content: "Delegating some planning can reduce the effort spent repeatedly deciding what to do next. It can also create a risk of treating the day as an endless queue of execution. Léonard therefore paired the productivity discussion with a question about whether the work remained joyful and meaningful." },
          { type: "p", content: "Starting with a short task was presented as a personal way to build momentum. A one- to five-minute action may make it easier to begin a day or unblock a project. These notes do not treat that preference as a guaranteed neurological effect or a universal recipe for productivity." },
        ],
      },
      {
        id: "urgent-and-important-work",
        title: "Urgent and Important Work",
        path: 5,
        blocks: [
          { type: "p", content: "A dashboard can reveal whether the user is working on their own priorities or mainly responding to incoming demands. Urgent tasks can absorb attention even when a less urgent project matters more. The point of a whole-work view is to make that pattern available for reflection." },
          { type: "p", content: "The workshop also described experimenting with activity tracking: looking across completed work, assigning points to actions, and examining how time was distributed among different responsibilities. This was an evolving personal system rather than a validated productivity measurement. An email sent, a meeting scheduled, and a substantial research result are all visible activities, but their value still requires judgment." },
        ],
      },
      {
        id: "weekly-reflection-and-gamification",
        title: "Weekly Reflection and Gamification",
        path: 5,
        blocks: [
          { type: "p", content: "The weekly reflection prompt was simple: “Show me everything I’ve done.” Looking across important emails, completed reports, advising, and travel arrangements can make otherwise scattered work visible. It can also reveal what did not happen." },
          { type: "p", content: "The follow-up questions matter: Which priorities received attention? Which ones did not? Was time protected for work that genuinely mattered? Recognizing small accomplishments was framed as a way Léonard hoped to cultivate joy, not as a promise of greater happiness or output." },
          { type: "p", content: "Visualization and gamification can make abstract work feel more concrete. Some people may enjoy a sense of progress, an achievement, or a task board; others may not. The workshop’s aim was to use AI to help people exercise more control over their work, rather than simply produce more tasks for them to complete." },
        ],
      },
    ],
  },
  {
    id: "notes-8",
    num: "08",
    title: "Create artifacts that remove a specific obstacle",
    sections: [
      {
        id: "artifacts-and-interactive-experiences",
        title: "Artifacts and Interactive Experiences",
        path: 7,
        blocks: [
          { type: "p", content: "An artifact can present the work as a visual or interactive object rather than only as a conversation. The workshop’s examples included dashboards, a photograph gallery, a virtual museum, and interactive explanations. A useful starting question is whether a different view would make the task easier to understand or complete." },
          { type: "p", content: "Possible use cases included a job-application dashboard, a way to organize emails that need attention, and a prospecting view for a startup. In each case, the value comes from organizing relevant work so that it can be examined quickly. The visual form should serve a task, rather than become a decorative replacement for a list." },
          { type: "p", content: "The opening demonstration offered a more expressive example: real bird photographs rendered in a flowing particle animation. Léonard reported producing that visual with one prompt and then customizing it, including with music. It illustrated how an idea that had previously remained an aspiration could become something visible and interactive." },
          { type: "p", content: "That does not mean every elaborate artifact is a one-prompt project. The virtual museum and the larger birdwatching application involved additional assets, optimization, or extensive iteration. The examples show a range of effort, from a compact visual experiment to a sustained product." },
        ],
      },
      {
        id: "virtual-museum-and-photography-assets",
        title: "Virtual Museum and Photography Assets",
        path: 7,
        blocks: [
          { type: "p", content: ["The ", { text: "virtual art museum", href: "https://boussioux.com/art-museum" }, " placed Léonard’s real bird photographs in a generated virtual environment. The photographs and the surrounding world had different origins: the images of the birds were his photography, while AI-assisted creation and coding produced the environment around them."] },
          { type: "figure", image: livingGallery, width: 1400, height: 735, caption: [{ text: "Figure 2. The Living Gallery — real bird photography within an AI-assisted virtual environment. Fresh app screenshot captured October 27, 2026; not a workshop recording frame. ", em: true }, { text: "Visit the museum", href: "https://boussioux.com/art-museum" }, { text: ".", em: true }] },
          { type: "p", content: "The scene included reflective floors, a pond, flowers, butterflies, and an outdoor view. Requests about appearance could lead the coding system to implement the calculations required to render the effect. For example, Léonard asked for a better-looking pond reflection rather than specifying the mathematics himself." },
        ],
      },
      {
        id: "three-js-image-generation-and-animation",
        title: "Three js Image Generation and Animation",
        path: 7,
        blocks: [
          { type: "p", content: "The butterfly example separated asset generation from implementation. ChatGPT image generation created an asset, and the coding workflow used it in a scene built with Three.js, a JavaScript 3D library. The workshop described fifteen butterfly variants with different flight behavior. Orchid textures were likewise incorporated into the coded environment." },
          { type: "p", content: "This is an important technical distinction: Three.js is a library, not a programming language. An image asset is also not the same thing as the code that positions, renders, or animates it. A project can combine image generation with programming without pretending that either tool does every part of the job." },
        ],
      },
      {
        id: "app-performance-and-optimization",
        title: "App Performance and Optimization",
        path: 7,
        blocks: [
          { type: "p", content: "Performance became a separate design problem. Detailed vegetation and visual effects made the environment demanding to render. Léonard repeatedly asked for it to run faster and used Claude to optimize it. A scene that looks good in one view still needs to operate smoothly on the intended device. Visual ambition and implementation quality have to be considered together." },
        ],
      },
      {
        id: "instagram-content-planning-and-posting",
        title: "Instagram Content Planning and Posting",
        path: 6,
        blocks: [
          { type: "p", content: "The Instagram example began with a personal obstacle rather than a technical objective. Léonard wanted to share bird photographs but found himself hesitating over captions, timing, and the overall gallery. He built an interface that let him plan the collection in a way he found easier to use." },
          { type: "p", content: "The demonstrated artifact brought several functions into one place:" },
          { type: "ul", items: [
            "A gallery showing the relationship between existing and planned photographs.",
            "A way to upload an image by dragging and dropping it.",
            "Controls for considering alignment and cropping.",
            "Several caption suggestions rather than a single final answer.",
            "A preview of how the gallery would look.",
            "Planning and scheduling features connected to an authorized posting workflow.",
          ] },
          { type: "p", content: "The caption example drew on the circumstances of taking a difficult bird photograph, including the challenge of autofocus responding to water in the background. The relevant lesson was to make useful context available for the caption and then edit the suggested wording. A generated caption should not be treated as evidence for details that were never supplied or verified." },
          { type: "p", content: "The setup also proposed a small set of hashtags across broad, medium, and niche categories. This was a design choice in the demonstrated workflow. The notes do not turn the transcript’s platform-limit remark into a current rule for Instagram." },
          { type: "p", content: "The artifact included Claude-powered text generation. Built-in Claude-powered artifacts can use Claude capabilities without the creator wiring in a separate developer API key. That differs from building a custom application that calls a separately billed API." },
          { type: "p", content: "The live posting test was explicitly an experiment. Léonard had given the system posting access and did not know in advance whether it would work. By the end of the workshop, he reported that the photograph had appeared on Instagram. This is an observed outcome from the demonstration, not a guarantee that a new integration will publish successfully on its first attempt." },
          { type: "p", content: "The broader workflow moves attention toward reviewing a set of planned posts instead of repeatedly rebuilding the same process. It also keeps editing close to the visual preview. For someone whose obstacle is perfectionism about the collection, that interface can be more useful than another generic caption prompt." },
        ],
      },
      {
        id: "dashboard-use-cases",
        title: "Dashboard Use Cases",
        path: 5,
        blocks: [
          { type: "p", content: "The workshop used both Claude and ChatGPT for personal dashboards. That was an example of combining tools, not a requirement to buy multiple subscriptions or duplicate all context across providers. The same underlying question applies in either environment: what does the person need to see to act well?" },
          { type: "p", content: "For a job search, the answer might be the state of applications and the next actions. For business development, it might be relevant leads and the reasons they fit. For research, it might be project stages and blockers. These are related visual patterns, but they require different source information and judgment." },
          { type: "p", content: "The invitation to be more ambitious was therefore specific: identify a point where work feels fragmented, abstract, or hard to review, and ask whether an artifact can make that part easier. The workshop’s examples were intended to expand the range of possible interfaces, not to suggest that every task requires a custom app." },
        ],
      },
    ],
  },
  {
    id: "notes-9",
    num: "09",
    title: "Turn research and domain knowledge into interactive applications",
    sections: [
      {
        id: "interactive-research-applications",
        title: "Interactive Research Applications",
        path: 7,
        blocks: [
          { type: "p", content: "A technical report is one way to communicate a project. An interactive application can let others inspect the data, change their view, and understand the proposed decisions. The workshop encouraged students and researchers to consider this form when it suits the work." },
          { type: "p", content: "The demonstrated starting point was to create a project folder, work in Code, and ask for a web application. Connecting the relevant data and prior work was essential. Without that context, the agent would be building a generic interface rather than representing the actual project." },
          { type: "p", content: "The person still chooses what the audience needs to understand. A hover interaction, a chart, and a map are useful only if they expose the right information. Taste and domain knowledge continue to matter after the system can generate the application’s code." },
        ],
      },
      {
        id: "html-css-javascript-vite-and-react",
        title: "HTML CSS JavaScript Vite and React",
        path: 7,
        blocks: [
          { type: "p", content: "A model may begin with a simple HTML page. HTML supplies page structure; CSS and JavaScript can add sophisticated visuals, animations, and interaction. A plain initial result is not evidence that HTML itself is incapable of supporting rich experiences." },
          { type: "p", content: "Léonard suggested Vite and React for the interactive applications he demonstrated. Vite is a build tool and React is a user-interface library. They work with HTML, CSS, and JavaScript; they are not two replacement programming languages." },
          { type: "p", content: "Asking for that stack can steer how an application is organized. It does not guarantee better-looking output or compatibility with every phone and browser. Those depend on the implementation. The source’s corrected distinction is important because useful technical vocabulary should direct the work without becoming a magic phrase that substitutes for checking it." },
        ],
      },
      {
        id: "wildfire-allocation-application",
        title: "Wildfire Allocation Application",
        path: 7,
        blocks: [
          { type: "p", content: ["The ", { text: "wildfire application", href: "https://ai4wildfire.vercel.app" }, " used data and research on wildfire management. It showed fires in the United States from the project’s dataset and presented ways of exploring firefighter allocation over time under limited resources."] },
          { type: "figure", image: ai4wildfire, width: 977, height: 544, caption: [{ text: "Figure 3. AI4Wildfire — the public application frames research as a concrete crew-allocation problem. Fresh app screenshot captured October 27, 2026; not a workshop recording frame. ", em: true }, { text: "Explore AI4Wildfire", href: "https://ai4wildfire.vercel.app/" }, { text: ".", em: true }] },
          { type: "p", content: "The workflow connected Claude Code to the folder containing the relevant data and asked for a dashboard using Vite and React. The resulting implementation included visualizations and mouse-hover interactions that supported examination of the problem. These features were part of that implementation, not exclusive capabilities of React." },
          { type: "p", content: "The application made the underlying work more accessible than a static description alone. Viewers could examine the spatial information and the proposed allocation. The important transfer to another project is to expose the decisions and evidence that matter in that domain, rather than imitate the appearance of the wildfire dashboard." },
        ],
      },
      {
        id: "ocean-conservation-and-domain-knowledge",
        title: "Ocean Conservation and Domain Knowledge",
        path: 7,
        blocks: [
          { type: "p", content: "The ocean-conservation project began by asking Claude Code to retrieve relevant databases and design an optimization algorithm. The resulting work combined several kinds of information, including species richness, fishing activity, underwater topography, and climate exposure. The goal was to explore where conservation efforts could be directed." },
          { type: "p", content: "The scientific framing was corrected in the edited transcript. The Kunming–Montreal Global Biodiversity Framework sets a global target to conserve and effectively manage at least 30 percent of marine and coastal areas by 2030 through protected areas and other effective area-based conservation measures. This is a target, not a statement that 30 percent is already protected or that every included area must be a strict no-use reserve." },
          { type: "p", content: "NOAA estimates that the ocean accounts for roughly half of Earth’s oxygen production, while marine life consumes roughly the same amount. That flow of production is different from the oxygen accumulated in the atmosphere over geological time. Keeping these distinctions intact prevents the motivating context from becoming an inaccurate scientific claim." },
          { type: "p", content: "In the demonstration, the first optimization approach selected many small, scattered areas. The result looked promising until Léonard considered the practical problem of protecting disconnected fragments. Connectivity mattered to the intended use, and the default formulation had not adequately addressed it." },
          { type: "p", content: "He then directed the system toward integer programming rather than the earlier heuristic approach discussed in the session, which involved simulated annealing and warm starts. He reported obtaining a more useful result after that change. The lesson is not that naming integer programming automatically guarantees a better solution to every conservation problem. It is that domain knowledge can expose a missing requirement and direct the model toward a more appropriate formulation." },
          { type: "p", content: "The human contribution was the recognition that the first output was not operationally satisfactory. Without that judgment, an impressive map and a plausible algorithm could have been mistaken for a completed solution. The same pattern appears in design, software architecture, and research: a small piece of expert vocabulary can matter because it expresses a real requirement the default request left out." },
        ],
      },
    ],
  },
  {
    id: "notes-10",
    num: "10",
    title: "Combine tools without confusing their roles",
    sections: [
      {
        id: "lovable-claude-code-and-github",
        title: "Lovable Claude Code and GitHub",
        path: 7,
        blocks: [
          { type: "q", text: "Why use Lovable, Claude Code, and Vercel when their capabilities seem to overlap?" },
          { type: "p", content: "In the workshop, they played different roles. Léonard valued Lovable for quickly creating and publishing an initial web experience with a guided workflow. Claude Code gave him more direct scope to work on a complex codebase, at the cost of a steeper learning curve and more trial and error. Vercel provided hosting for applications he wanted people to access on the web." },
          { type: "p", content: "The birdwatching application began in Lovable. As it became more complex, Léonard moved more of the coding work into a local development workflow. He described finding a file roughly four thousand lines long and refactoring it. This was an observation about that project, not proof that every Lovable application has the same structure or that file length alone decides software quality." },
          { type: "p", content: "The demonstrated connection between the tools used GitHub. The application could be connected to GitHub, brought onto the computer, worked on with Claude, and pushed back through the repository so that the connected workflow reflected the changes. This let a prototype evolve without requiring every later task to remain in the original creation interface." },
          { type: "p", content: "The right tool can change as the project changes. A guided builder may reduce the effort of getting started; a larger codebase may benefit from a workflow that exposes more engineering choices. The workshop encouraged learning how these tools fit together rather than expecting one product to be best at every stage." },
        ],
      },
      {
        id: "deployment-and-vercel-hosting",
        title: "Deployment and Vercel Hosting",
        path: 7,
        blocks: [
          { type: "p", content: "Making an artifact available through its host environment and deploying a standalone application are different distribution routes. The wildfire and ocean examples used Vercel for web hosting. The workshop showed that the agent could help guide the deployment process, including account setup, from the coding workflow." },
          { type: "p", content: "The practical lesson is to identify the intended destination. A local application, an artifact shared through a platform, and a deployed web application do not have identical setup or access requirements. Generating the code does not, by itself, complete every part of publication." },
          { type: "p", content: "Specific prices and free allowances can change, so the useful distinction here is the role of the service rather than a permanent promise about cost. Hosting, model use, and development tools can involve separate arrangements." },
        ],
      },
      {
        id: "subscriptions-api-credits-and-artifact-usage",
        title: "Subscriptions API Credits and Artifact Usage",
        path: 8,
        blocks: [
          { type: "p", content: "The workshop included questions about credits because several billing routes were in use. A Claude subscription covers use through the relevant subscribed product and its allowance. A custom application that calls the developer API is billed through the API arrangement. Credits for that API should not be assumed to be interchangeable with the allowance in every interface." },
          { type: "p", content: "Built-in Claude-powered artifacts follow a different route: users sign in and use their own Claude plan allowance without providing an API key, and the creator does not pay for other users’ model usage. This is distinct from the creator operating a custom API-billed app." },
          { type: "p", content: "Claude was also shown through a command-line interface. The discussion emphasized checking which account or billing route the session was using, including subscription, console, or organizational arrangements. A familiar model name does not tell the user which account is being charged. The exact configuration needs to be understood in the environment actually being used." },
        ],
      },
      {
        id: "custom-chief-of-staff-and-ready-made-agents",
        title: "Custom Chief of Staff and Ready Made Agents",
        path: 5,
        blocks: [
          { type: "q", text: "Why build a chief of staff rather than use a ready-made agent?" },
          { type: "p", content: "Léonard’s main reason was control. He wanted to understand how the system was engineered, which context it used, and how his own reusable skills shaped the work. A ready-made agent may offer a convenient starting point, but its choices about workflow and context may be less visible or less configurable." },
          { type: "p", content: "The discussion also distinguished routine errands, such as ordering food, arranging travel, or canceling a service, from demanding research that compiles multiple sources. Léonard judged some ready-made agents sufficient for the former while preferring a more capable research-oriented setup for the latter. This was a task-based distinction in his experience, not a permanent ranking of products." },
          { type: "p", content: "The comparison raised two practical questions: can the system use the user’s own reusable skills, and can the user inspect how context is packaged for delegated work? In his own setup, Léonard wanted to know which files and skills informed a task. These are useful questions to ask of a packaged agent without assuming unverified details about its internal implementation." },
          { type: "p", content: "This is a tradeoff rather than a rule that custom systems are always better. Building a personal system requires effort and maintenance. A packaged product may be sufficient for the tasks a person wants to delegate. The workshop’s comments about particular emerging products were experience-based and time-sensitive, not a settled comparison of every product’s capabilities." },
          { type: "p", content: "The lasting benefit of building was learning to delegate. A coordinating agent may distribute work among subtasks or other agents. The user still needs to decide what context is necessary, what good completion looks like, and where review belongs. Understanding these decisions can remain useful even if a future product makes the setup much easier." },
        ],
      },
    ],
  },
  {
    id: "notes-11",
    num: "11",
    title: "Keep learning and judgment with the person",
    sections: [
      {
        id: "ai-assisted-learning",
        title: "AI Assisted Learning",
        path: 1,
        blocks: [
          { type: "q", text: "How can a student use AI without letting it do the thinking they are supposed to learn?" },
          { type: "p", content: "The discussion distinguished the learning task from incidental work around it. A participant described a skill that reformatted assigned PDFs so that they could be printed and read more easily. The assistance removed time spent on formatting while leaving the reading and critical thinking to the student." },
          { type: "p", content: "Another example transformed a document or blog post into an interactive explanation. The source discussed a coordinating manager agent and multiple smaller agents; an artifact offered a visual way to explore the ideas. The purpose was to help the reader engage with the material, not to treat the visualization as a replacement for understanding it." },
          { type: "p", content: "The workshop did not provide a universal boundary for every assignment. The useful distinction is between making the material easier to work with and outsourcing the intellectual activity that the exercise is intended to develop. A pleasant format can support attention, but it cannot establish that learning has occurred." },
        ],
      },
      {
        id: "human-judgment-and-decision-making",
        title: "Human Judgment and Decision Making",
        path: 1,
        blocks: [
          { type: "p", content: "Across the examples, the human contribution repeatedly appeared in specific decisions: choosing the audience for a website, identifying the tone a design should convey, noticing an infeasible conservation map, deciding which folders an assistant may read, and reviewing a message before sending it." },
          { type: "p", content: "These decisions are easier to make when the model exposes alternatives and assumptions. Asking for mockups, asking to be interviewed, dividing a workflow into smaller skills, and keeping context in readable files all make the work more inspectable. They also make it easier to correct course before a large amount of effort has accumulated around the wrong assumption." },
          { type: "p", content: "More autonomy does not eliminate the need for human judgment. It changes where that judgment is most useful. The workshop’s recurring question was how to spend scarce attention on consequential choices while delegating the work that can be done well with the right context and constraints." },
        ],
      },
    ],
  },
  {
    id: "notes-12",
    num: "12",
    title: "A workshop practice sequence",
    sections: [
      {
        id: "hands-on-digital-twin-practice",
        title: "Hands On Digital Twin Practice",
        path: 4,
        blocks: [
          { type: "p", content: "The hands-on activity asked participants to begin a digital twin, add a dashboard to an existing one, or make an existing dashboard more proactive. The exercise was deliberately small enough to start during the session, while leaving room for continued iteration." },
          { type: "ul", items: [
            "Choose one area of work where coordination is difficult or the next action is unclear.",
            "Create or select the folder that will hold the system’s context, and connect only the relevant authorized material.",
            "Describe how the assistant should help and ask it to interview you about assumptions and open questions.",
            "Decide what it may do on its own and where you want review.",
            "Examine the resulting text files or dashboard. Use the interview to clarify missing context and priorities.",
            "Try a concrete request, such as identifying what can be unblocked in ten minutes or an hour.",
            "If a useful method repeats, capture it as a skill. If the output is hard to understand, ask whether a different visual form would help.",
          ] },
          { type: "p", content: "The same habits transfer to the other examples. Use the environment that fits the task, keep important context available, ask for alternatives when taste matters, and contribute domain knowledge when a plausible default misses the real problem. Evaluate the result before treating generation as completion." },
        ],
      },
      {
        id: "creative-possibilities-and-closing-reflection",
        title: "Creative Possibilities and Closing Reflection",
        path: 1,
        blocks: [
          { type: "p", content: "The workshop began and ended with a creative visual made from bird photographs. That example complements the productivity demonstrations: the aim is not limited to finishing a longer list of obligations. These tools can also make it easier to explore an idea, share work, and build something a person has wanted to create." },
        ],
      },
    ],
  },
  {
    id: "notes-source-notes",
    num: null,
    title: "Source notes",
    sections: [
      {
        id: "source-notes-and-verification-scope",
        title: "Source Notes and Verification Scope",
        path: 8,
        blocks: [
          { type: "p", content: "These lecture notes retain the targeted corrections made to the workshop transcript with the presenter’s authorization and checked on October 27, 2026. The sources below document those corrections. They do not independently validate every live demonstration or personal assessment, and live product guidance may have changed since the session." },
        ],
      },
      {
        id: "privacy-and-institutional-data-sources",
        title: "Privacy and Institutional Data Sources",
        path: 8,
        blocks: [
          { type: "p", content: ["The privacy qualifications draw on Anthropic’s ", { text: "model improvement settings guidance", href: "https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings" }, ", dated August 3, 2026; its ", { text: "privacy policy", href: "https://www.anthropic.com/legal/privacy" }, ", effective September 10, 2026; ", { text: "guidance on human access to conversations", href: "https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations" }, ", dated May 22, 2026; and the ", { text: "Clio research description", href: "https://www.anthropic.com/research/clio" }, ", updated August 24, 2026."] },
          { type: "p", content: ["The university-data qualifications draw on ", { text: "UW appropriate use guidance", href: "https://it.uw.edu/policies/appropriate-use/" }, ", dated June 23, 2026; ", { text: "UW artificial intelligence guidance", href: "https://it.uw.edu/guides/security-authentication/artificial-intelligence-guidelines/" }, ", dated September 8, 2026; and the ", { text: "UW Claude for Education FAQ", href: "https://uwconnect.uw.edu/it?id=kb_article_view&sysparm_article=KB0038507" }, ", checked October 27, 2026. The undated FAQ is current guidance, not a verified workshop-day policy snapshot."] },
        ],
      },
      {
        id: "permissions-memory-and-interface-sources",
        title: "Permissions Memory and Interface Sources",
        path: 8,
        blocks: [
          { type: "p", content: ["The qualifications on file access, memory, and Microsoft accounts use ", { text: "Claude Code security documentation", href: "https://code.claude.com/docs/en/security" }, ", ", { text: "Claude memory guidance", href: "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context" }, ", and ", { text: "Microsoft 365 connector guidance", href: "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365" }, ". The exact numerical Gmail-account limit was not verified. Model names and the changing Chat and Cowork interface were checked against ", { text: "official Claude release notes", href: "https://support.claude.com/en/articles/12138966-release-notes" }, "."] },
        ],
      },
      {
        id: "writing-verification-and-software-sources",
        title: "Writing Verification and Software Sources",
        path: 8,
        blocks: [
          { type: "p", content: ["The watermark clarification uses Anthropic’s ", { text: "text watermark description", href: "https://www.anthropic.com/news/claude-text-watermark" }, ", dated August 14, 2026. The cybersecurity example uses ", { text: "PHP announcements", href: "https://www.php.net/archive/2026.php" }, " and the ", { text: "UK NCSC advisory", href: "https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php" }, ", dated October 21, 2026."] },
          { type: "p", content: ["The development distinctions use the ", { text: "Vite guide", href: "https://vite.dev/guide/" }, ", ", { text: "React documentation", href: "https://react.dev/" }, ", and ", { text: "Three.js", href: "https://threejs.org/" }, ". The artifact-usage distinction uses ", { text: "Claude artifact guidance", href: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them" }, ", checked during the transcript correction."] },
        ],
      },
      {
        id: "ocean-science-and-conservation-sources",
        title: "Ocean Science and Conservation Sources",
        path: 8,
        blocks: [
          { type: "p", content: ["The oxygen-production clarification uses ", { text: "NOAA’s explanation", href: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html" }, ", dated September 23, 2026. The conservation-target clarification uses ", { text: "Target 3 of the Kunming–Montreal Global Biodiversity Framework", href: "https://www.cbd.int/gbf/targets/3" }, ", adopted in 2022."] },
        ],
      },
    ],
  },
];
