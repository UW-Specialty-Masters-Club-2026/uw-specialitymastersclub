import articleHero from "@/assets/article-ai-hero.jpg";
import articleSeattle from "@/assets/article-seattle-fifa.jpg";
import articleBuilders from "@/assets/article-builders.jpg";
import articleBattleground from "@/assets/article-ai-battleground.jpg";
import articlePartnerships from "@/assets/article-partnerships.jpg";
import articleGenaiProcess from "@/assets/article-genai-process.jpg";
import articleGenaiFlowchart from "@/assets/article-genai-flowchart.png";
import articleDigitalAdvertising from "@/assets/article-digital-advertising.jpg";
export type ContentBlock = {
  type: "paragraph" | "heading" | "list" | "highlight" | "image";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
};

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  heroImage: string;
  content: ContentBlock[];
  colabLink?: string;
};

export const getImageSrc = (src: string) => {
  switch (src) {
    case "seattle": return articleSeattle;
    case "builders": return articleBuilders;
    case "partnerships": return articlePartnerships;
    case "genai-flowchart": return articleGenaiFlowchart;
    default: return articleBuilders;
  }
};

export const articles: Article[] = [
  {
    id: "ai-battleground",
    title: "The AI Battleground Is Bigger Than Models — It's About Winning Trust, Utility, and Cultural Relevance",
    subtitle: "Opinion",
    author: "Anushka Mathur",
    authorAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=AM&backgroundColor=4a154b",
    date: "December 2025",
    category: "Opinion",
    heroImage: articleBattleground,
    content: [
      {
        type: "paragraph",
        text: "The generative AI race has entered a new, far less predictable phase."
      },
      {
        type: "paragraph",
        text: "We've moved beyond who trained the biggest model to who can build the most trusted, useful, and culturally resonant AI experiences. That shift was on full display in a recent profile of Josh Woodward, the Google executive now steering the Gemini app—Google's flagship AI product—toward relevance in a world where users increasingly judge AI by real-world impact rather than raw benchmarks."
      },
      {
        type: "paragraph",
        text: "But the real story emerging from this year's developments isn't just competition — it's the battle for user trust and preference, and the evolving ways companies are trying to reclaim it."
      },
      {
        type: "heading",
        text: "1. Google's Retool: From Bureaucracy to Rapid Product Culture"
      },
      {
        type: "paragraph",
        text: "Google's AI journey has been uneven. The company that once defined internet search stumbled in the early days of generative AI — slow launches, internal complexity, and a product sometimes outpaced by nimbler rivals. That's part of why executives like Woodward have been brought to the forefront: to inject speed and user feedback into a historically methodical machine."
      },
      {
        type: "paragraph",
        text: "The result? A series of high-visibility launches like Gemini 3, touted as its most capable model yet with advances in reasoning, multimodal input, and integration across search and apps. That signals Google is serious about playing offense — not just defending its turf."
      },
      {
        type: "paragraph",
        text: "Yet this strategy comes with a paradox: large incumbents tend to build powerful infrastructure (like custom TPUs) but must also wrestle with the kind of agile execution that mitigates user frustration and perception risks. And that's not trivial. Building something close to perfect can be less impressive than building something consistently delightful."
      },
      {
        type: "heading",
        text: "2. ChatGPT's Counterpunch: Partnerships, 'Code Red,' and Reinvention"
      },
      {
        type: "paragraph",
        text: "OpenAI's ChatGPT has not been sitting still."
      },
      {
        type: "paragraph",
        text: "In fact, according to recent reporting, CEO Sam Altman acknowledged multiple \"code red\" responses to competitive pressure — particularly following momentum from models like Gemini 3 and challengers such as DeepSeek. These emergency modes triggered focused pushes on quality, multimodal capabilities, and faster image processing — not because metrics were collapsing, but because momentum and perception matter in network-effect businesses."
      },
      {
        type: "paragraph",
        text: "OpenAI's playbook has long leaned heavily on strategic partnerships. Its early alliance with Nvidia supercharged computational capacity at a critical growth phase. Microsoft continues to embed ChatGPT deeply into its productivity suite and cloud ecosystem. Those ties don't just deliver technology — they embed ChatGPT into workflows, giving it structural advantage beyond surface attraction."
      },
      {
        type: "image",
        src: "partnerships",
        alt: "AI ecosystem partnerships and embeddedness visualization"
      },
      {
        type: "highlight",
        text: "AI platforms aren't just competing on signals and reasoning ability. They're competing on embeddedness — being where users already spend time, whether in tools like Office, search, Slack, or creative suites."
      },
      {
        type: "heading",
        text: "3. User Trust Is the New Battleground"
      },
      {
        type: "paragraph",
        text: "All of this matters most because AI has crossed the point where users judge it not by benchmarks but by personal relevance and trust."
      },
      {
        type: "paragraph",
        text: "Consider the backlash earlier in the life cycle of these tools — controversies around misrepresentations or biased outputs became public debates. These weren't technical errors so much as brand-trust injuries. In a crowded marketplace, users won't forgive AI systems for being powerful and unreliable."
      },
      {
        type: "paragraph",
        text: "This dynamic pushes companies to rethink what success looks like:"
      },
      {
        type: "list",
        items: [
          "Google is emphasizing user feedback loops and responsiveness inside product teams.",
          "OpenAI is using partnership ecosystems to make ChatGPT part of the workplace fabric, not just a standalone interface.",
          "Others are carving niche roles — focusing on privacy, domain specialization, or integration with developer communities."
        ]
      },
      {
        type: "paragraph",
        text: "In this context, audience preference becomes a blend of performance, practical usefulness, and trustworthiness — not raw intelligence alone."
      },
      {
        type: "heading",
        text: "4. What Winning Looks Like in 2026"
      },
      {
        type: "paragraph",
        text: "We are now in a world where:"
      },
      {
        type: "list",
        items: [
          "AI leadership is dynamic, not static — the \"leader\" today can easily become the challenger tomorrow.",
          "Partnerships matter — embedding in ecosystems or workflows creates stickiness that pure technical advantage cannot.",
          "Trust and utility outweigh hype — users care about whether AI saves them time, helps them decide better, and respects their privacy and values."
        ]
      },
      {
        type: "paragraph",
        text: "That's why we're seeing increased emphasis not just on new models but on:"
      },
      {
        type: "list",
        items: [
          "Tool integrations",
          "Cross-platform availability",
          "Feedback mechanisms",
          "Safety and ethics frameworks",
          "Collaborations with enterprise and developers"
        ]
      },
      {
        type: "paragraph",
        text: "All of which shape perception as much as capability."
      },
      {
        type: "heading",
        text: "5. The Future Is Less About Benchmarks, More About Belonging"
      },
      {
        type: "paragraph",
        text: "AI is maturing into what I call the \"Belonging Phase.\""
      },
      {
        type: "paragraph",
        text: "Instead of asking \"Who has the smartest model?\" we're asking:"
      },
      {
        type: "list",
        items: [
          "\"Which model fits into my life?\"",
          "\"Where does AI feel safe, reliable, and helpful?\"",
          "\"Which experiences are woven into my daily workflows?\""
        ]
      },
      {
        type: "paragraph",
        text: "The answer won't come solely through technical leadership or marketing muscle. It will come from platforms that earn trust by being good partners — to users, developers, and businesses alike."
      },
      {
        type: "highlight",
        text: "Companies that figure out how to blend brilliance with usability, responsibility with delight, and innovation with partnership are the ones that will truly win back audience preference."
      },
      {
        type: "paragraph",
        text: "And in that landscape, the race is far from over."
      }
    ]
  },
  {
    id: "ai-competitive-advantage",
    title: "AI Is Quietly Becoming the Real Competitive Advantage.",
    subtitle: "Not because not everyone has access to it—but because very few know how to use it well.",
    author: "Archit Gupta",
    authorAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=2d5016",
    date: "December 2025",
    category: "Technology",
    heroImage: articleHero,
    content: [
      {
        type: "paragraph",
        text: "For the last couple of years, AI has felt like that one overachiever in your group project—clearly impressive, slightly intimidating, and not always sure how to plug into real work. Fun to talk about. Easy to demo. Harder to actually use well."
      },
      {
        type: "paragraph",
        text: "That phase is officially over."
      },
      {
        type: "paragraph",
        text: "A recent enterprise AI report by OpenAI paints a clear picture: AI has quietly moved from \"cool experiment\" to core business infrastructure. The companies winning right now aren't the ones talking about AI the loudest—they're the ones embedding it into how work actually gets done."
      },
      {
        type: "paragraph",
        text: "And that shift has big implications for students, businesses, and honestly… for us as a club."
      },
      {
        type: "heading",
        text: "From Buzzwords to Business Impact"
      },
      {
        type: "paragraph",
        text: "Inside real organizations, AI isn't just writing emails or summarizing documents anymore. It's:"
      },
      {
        type: "list",
        items: [
          "Forecasting demand",
          "Optimizing staffing and inventory",
          "Powering customer service",
          "Automating repetitive operations",
          "Supporting financial and analytical decision-making"
        ]
      },
      {
        type: "paragraph",
        text: "Employees using AI consistently are saving close to an hour a day—not because they're working less, but because they're working smarter. Even more interesting? Many of them are now doing technical tasks they never thought they could—data analysis, workflow automation, even light coding."
      },
      {
        type: "highlight",
        text: "AI is expanding who gets to solve meaningful problems."
      },
      {
        type: "image",
        src: "seattle",
        alt: "Seattle skyline preparing for FIFA 2026"
      },
      {
        type: "heading",
        text: "The Real Divide Isn't Tech vs. Non-Tech"
      },
      {
        type: "paragraph",
        text: "One of the most striking insights from enterprise adoption trends is this: The biggest divide isn't between companies that \"have AI\" and those that don't."
      },
      {
        type: "paragraph",
        text: "It's between organizations that embed AI into workflows and those that use it occasionally."
      },
      {
        type: "paragraph",
        text: "The top-performing teams standardize their AI usage. They build repeatable tools. They treat AI like a teammate—not a toy. Meanwhile, others barely scratch the surface, even though they have access to the same technology."
      },
      {
        type: "paragraph",
        text: "This gap is growing. Fast. And that's exactly where opportunity lives."
      },
      {
        type: "heading",
        text: "Why This Matters for Small Businesses (with FIFA 2026 right around the corner)"
      },
      {
        type: "paragraph",
        text: "Now zoom out to small and medium businesses—restaurants, retail stores, local services. In 2026, Seattle will see a massive surge in demand due to the FIFA World Cup. For many small businesses, this will be the biggest operational stress test they've ever faced."
      },
      {
        type: "paragraph",
        text: "Most don't have:"
      },
      {
        type: "list",
        items: [
          "Sophisticated forecasting tools",
          "Dedicated analytics teams",
          "In-house tech or AI expertise"
        ]
      },
      {
        type: "paragraph",
        text: "But they do have real problems that AI is uniquely good at solving. This is where we the Foster students come in."
      },
      {
        type: "heading",
        text: "Our Vision: Learning by Building What Actually Matters"
      },
      {
        type: "paragraph",
        text: "At our core, the club exists to close this gap—from both sides."
      },
      {
        type: "paragraph",
        text: "We believe students learn best when they work on real business problems, not hypothetical case prompts that magically have clean data and perfect assumptions."
      },
      {
        type: "paragraph",
        text: "We also believe businesses don't need flashy AI—they need practical, usable solutions that fit their reality."
      },
      {
        type: "paragraph",
        text: "That's why our focus is on:"
      },
      {
        type: "list",
        items: [
          "Hands-on AI and tech projects",
          "Working directly with real businesses",
          "Translating classroom knowledge into operational impact",
          "Building tools people actually use",
          "And yes, most importantly—having fun while doing it."
        ]
      },
      {
        type: "image",
        src: "builders",
        alt: "Students collaborating on projects"
      },
      {
        type: "heading",
        text: "This Isn't a \"Tech Club.\" It's a Builder Community."
      },
      {
        type: "paragraph",
        text: "You don't need to be an AI expert. You don't need to code (though you can). What matters is curiosity, ownership, and a willingness to learn."
      },
      {
        type: "paragraph",
        text: "Whether you're into:"
      },
      {
        type: "list",
        items: [
          "Strategy & problem framing",
          "Marketing & storytelling",
          "Industry partnerships",
          "Operations & execution",
          "Tech, data, or product thinking"
        ]
      },
      {
        type: "paragraph",
        text: "There's space to contribute—and space to grow."
      },
      {
        type: "highlight",
        text: "You're not just adding a line to your resume. You're helping shape how businesses actually use AI—at a moment when it truly matters."
      },
      {
        type: "heading",
        text: "The SM 2026 Cohort Has a Chance to Be Different"
      },
      {
        type: "paragraph",
        text: "Every few years, a cohort gets remembered for doing something a little bolder."
      },
      {
        type: "paragraph",
        text: "Not just attending events—but building. Not just learning frameworks—but applying them. Not just talking about the future—but working on it."
      },
      {
        type: "paragraph",
        text: "We're building toward that."
      },
      {
        type: "paragraph",
        text: "If that sounds like something you want to be part of, keep an eye out. Opportunities to join, contribute, and build together are coming soon."
      },
      {
        type: "paragraph",
        text: "Until then—enjoy the holidays, recharge, and get ready. 2026 is going to be fun."
      }
    ]
  },
  {
    id: "genai-llm-process",
    title: "GenAI/LLMs Process Flow",
    subtitle: "A practical framework for introducing AI products and services to stakeholders",
    author: "Dan Blevins",
    authorAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=DB&backgroundColor=1e3a5f",
    date: "December 2025",
    category: "Technical",
    heroImage: articleGenaiProcess,
    content: [
      {
        type: "paragraph",
        text: "I use this process flow when first engaging with stakeholders and introducing new products, services, or ideas. While the title of this post is GenAI/LLMs, with a few tweaks this process flow can be used in many projects, technical and non-technical."
      },
      {
        type: "paragraph",
        text: "This post was made with inspiration from UW MSIS 503 taught by Professor Apurva Jain."
      },
      {
        type: "image",
        src: "genai-flowchart",
        alt: "GenAI/LLMs Process Flow Diagram"
      },
      {
        type: "heading",
        text: "Steps Explained"
      },
      {
        type: "heading",
        text: "Identify Problem Statement / Use Case"
      },
      {
        type: "paragraph",
        text: "This first step ensures that the proposed solution will actually solve the real business need, objectives, and KPIs. Without this in mind, it's so easy to work on the wrong idea, ask the wrong questions, and miscommunicate expectations."
      },
      {
        type: "heading",
        text: "Is GenAI Needed for the MVP?"
      },
      {
        type: "paragraph",
        text: "Once the problem statement/use case is clearly understood, it's best to clarify if GenAI is essential to deliver the basic functionality or a nice-to-have. In other words, can the core problem be solved without GenAI?"
      },
      {
        type: "heading",
        text: "No, GenAI is NOT Needed for MVP"
      },
      {
        type: "paragraph",
        text: "If GenAI is not needed to solve for the MVP, then consider simpler alternatives first. This will help the idea get to market faster and maintain limited resources. You could always add GenAI later."
      },
      {
        type: "heading",
        text: "Yes, GenAI IS Needed. Custom Solution or Pre-built?"
      },
      {
        type: "paragraph",
        text: "When the MVP needs GenAI, it's crucial to understand whether pre-built or third-party solutions could solve for the problem statement/use case. If the MVP doesn't need a custom solution, then consider simpler alternatives that scale with your problem statement/use case."
      },
      {
        type: "heading",
        text: "Custom Solution: Consider Data Sources, Frameworks, and Patterns"
      },
      {
        type: "paragraph",
        text: "Understanding all the custom and sensitive data sources to solve for the MVP is critical. You also want to consider project frameworks (AWS Bedrock, Hugging Face, LangChain, etc.) and common GenAI/LLM patterns (RAG, Prompt engineering, Semantic search, etc.) to solve for the MVP."
      },
      {
        type: "highlight",
        text: "The following steps are part of an iterative, continuous, constant process once the MVP is released to production."
      },
      {
        type: "heading",
        text: "Risks, Change Management, and Documentation"
      },
      {
        type: "paragraph",
        text: "Before getting your hands dirty with coding and implementing you'll want to consider these. Using all of your research to date, you'll want to finalize all of the risks, any change management involved, and ensure the relevant documentation is clean."
      },
      {
        type: "heading",
        text: "Security Review and Compliance"
      },
      {
        type: "paragraph",
        text: "From your research above, you'll want to connect with security and compliance teams to finalize security risks and safety considerations and recommendations."
      },
      {
        type: "heading",
        text: "Before Security Review: Use Fake Data and Test Models"
      },
      {
        type: "paragraph",
        text: "While the team is working on security and compliance reviews, they can also develop and test different models and processes by using easily accessible fake data. This fake data can be created using GenAI/LLM or through a pilot group. This increases development time and reduces bottlenecks."
      },
      {
        type: "heading",
        text: "Once Security is Approved: Use Real Data"
      },
      {
        type: "paragraph",
        text: "By using real data, you can continue to test and finalize your RAG and prompt engineering that the team's been developing using fake data up to this point."
      },
      {
        type: "heading",
        text: "Review User Feedback, KPIs, and Launch"
      },
      {
        type: "paragraph",
        text: "Now is the time to gather all of that user feedback from the pilot group, track KPIs to ensure they meet expectations, and launch to production when appropriate."
      },
      {
        type: "highlight",
        text: "Did I miss a step? Have clarification about a step? Enjoyed reading it? Let me know on LinkedIn: linkedin.com/in/dan-blevins"
      }
    ]
  },
  {
    id: "digital-advertising-myth",
    title: "The Myth of \"More Spend\" in Digital Advertising",
    subtitle: "Why paid search behaves less like a faucet and more like an investment portfolio",
    author: "Team 11 (MSBA Gold)",
    authorAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=T11&backgroundColor=c9a227",
    date: "January 2026",
    category: "Analytics",
    heroImage: articleDigitalAdvertising,
    colabLink: "https://colab.research.google.com/drive/1example",
    content: [
      {
        type: "paragraph",
        text: "Many businesses still treat paid search as a volume game: spend more, expect more. Our analysis of 800 search observations shows why this intuition fails and why paid search behaves less like a faucet and more like an investment portfolio."
      },
      {
        type: "highlight",
        text: "We found that doubling a budget rarely doubles sales; this is the law of diminishing returns."
      },
      {
        type: "heading",
        text: "The Intent Gap"
      },
      {
        type: "paragraph",
        text: "More revealing, however, is what doesn't drive performance. How much we pay and where the ad appears explain only a small share of revenue. User intent and creative language matter far more."
      },
      {
        type: "paragraph",
        text: "We call this an \"intent gap\" where high-cost keywords act as a quality signal. While many avoid expensive, competitive keywords, these are often the most profitable. High competition signals users are ready to buy."
      },
      {
        type: "paragraph",
        text: "Conversely, cheaper keywords like \"free download\" attract browsers who rarely convert."
      },
      {
        type: "heading",
        text: "Key Implications"
      },
      {
        type: "list",
        items: [
          "Generic search keywords can still play a role, but must earn their place through strict cost caps and controlled testing",
          "High-cost keywords often signal high-intent buyers ready to convert",
          "Ad position explains less revenue variance than user intent",
          "Budget allocation guided by user intent beats blanket spending increases"
        ]
      },
      {
        type: "highlight",
        text: "In digital advertising, a budget guided by user intent will always beat one that just spends more everywhere."
      },
      {
        type: "heading",
        text: "Research Team"
      },
      {
        type: "paragraph",
        text: "This analysis was conducted by Team 11 of the MSBA Gold Section: Tang Tumbahangphe, Amanda Lim, Arhum Nadeem, Suraj Gangaram, and Candace Juang."
      }
    ]
  }
];

export const upcomingArticles = [
  {
    title: "Leadership Lessons from Seattle's Top Executives",
    excerpt: "Insights and wisdom gathered from interviews with leading business figures in the Pacific Northwest.",
    author: "SMC Editorial Team", 
    date: "Coming Soon",
    category: "Leadership"
  },
  {
    title: "Navigating Your First Internship",
    excerpt: "A comprehensive guide for Foster students on making the most of internship opportunities.",
    author: "SMC Editorial Team",
    date: "Coming Soon",
    category: "Career"
  }
];
