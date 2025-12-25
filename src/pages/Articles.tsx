import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, User, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import articleHero from "@/assets/article-ai-hero.jpg";
import articleSeattle from "@/assets/article-seattle-fifa.jpg";
import articleBuilders from "@/assets/article-builders.jpg";
import articleBattleground from "@/assets/article-ai-battleground.jpg";
import articlePartnerships from "@/assets/article-partnerships.jpg";
import articleGenaiProcess from "@/assets/article-genai-process.jpg";
import articleGenaiFlowchart from "@/assets/article-genai-flowchart.png";

type ContentBlock = {
  type: "paragraph" | "heading" | "list" | "highlight" | "image";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
};

type Article = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  category: string;
  heroImage: string;
  content: ContentBlock[];
};

const Articles = () => {
  const [expandedArticle, setExpandedArticle] = useState<string | null>("ai-battleground");

  const articles: Article[] = [
    {
      id: "ai-battleground",
      title: "The AI Battleground Is Bigger Than Models — It's About Winning Trust, Utility, and Cultural Relevance",
      subtitle: "Opinion",
      author: "Anushka Mathur",
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
    }
  ];

  const upcomingArticles = [
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

  const getImageSrc = (src: string) => {
    switch (src) {
      case "seattle": return articleSeattle;
      case "builders": return articleBuilders;
      case "partnerships": return articlePartnerships;
      case "genai-flowchart": return articleGenaiFlowchart;
      default: return articleBuilders;
    }
  };

  const renderArticleContent = (article: Article) => (
    <div className="prose prose-lg max-w-none">
      {article.content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-foreground/80 mb-4 leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h3 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
              {block.text}
            </h3>
          );
        }
        if (block.type === "list" && block.items) {
          return (
            <ul key={index} className="list-disc list-inside text-foreground/80 mb-4 space-y-2 pl-4">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "highlight") {
          return (
            <div key={index} className="bg-gold/10 border-l-4 border-gold p-6 my-8 rounded-r-lg">
              <p className="text-gold font-semibold text-lg italic">
                {block.text}
              </p>
            </div>
          );
        }
        if (block.type === "image" && block.src) {
          return (
            <div key={index} className="my-10 -mx-8 md:-mx-12">
              <img 
                src={getImageSrc(block.src)} 
                alt={block.alt || "Article image"} 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                <Newspaper className="w-10 h-10 text-gold" />
              </div>
            </div>
            <p className="text-gold font-semibold tracking-widest uppercase mb-4">
              Articles & Opinions
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
              YOUR
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-gold mb-2">
              MONTHLY
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              DOPAMINE DOSE
            </h1>
            <div className="w-32 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Insights, opinions, and stories from the SMC community. 
              Fresh perspectives on business, technology, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List - Side by Side */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg flex flex-col"
            >
              {/* Article Header - Always Visible */}
              <div 
                className="cursor-pointer"
                onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
              >
                <div className="h-56 md:h-64 relative overflow-hidden">
                  <img 
                    src={article.heroImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 brightness-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-gold/30 text-gold rounded-full text-xs font-medium backdrop-blur-sm">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-white">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-white">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-3 drop-shadow-lg">
                      {article.title}
                    </h2>
                    <p className="text-gold font-medium italic text-sm line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Expand/Collapse Indicator */}
                <div className="flex items-center justify-center py-3 bg-card border-t border-border/50">
                  <span className="text-foreground/60 text-xs mr-2">
                    {expandedArticle === article.id ? "Click to collapse" : "Click to read more"}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gold transition-transform duration-300 ${
                      expandedArticle === article.id ? "rotate-180" : ""
                    }`} 
                  />
                </div>
              </div>

              {/* Article Content - Expandable */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedArticle === article.id ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 md:p-8 border-t border-border/50">
                  {renderArticleContent(article)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Upcoming Articles Preview */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coming <span className="text-gold">Soon</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-foreground/70 text-lg">
            More articles from our writers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingArticles.map((article, index) => (
            <article 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-6xl opacity-20 text-gold font-bold">
                  0{index + 3}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container">
        <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Contribute?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're looking for passionate writers to share their insights on business, 
              technology, leadership, and student life. Join our editorial team!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc-o8C836NmjLx2ACf1QKpsGz4_1Jxi91O5yhbwY23-yVvLkg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 rounded-full font-bold hover:bg-gold/90 transition-all hover:scale-105"
            >
              Apply to Write
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
