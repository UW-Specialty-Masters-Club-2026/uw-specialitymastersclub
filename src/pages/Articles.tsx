import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";

const Articles = () => {
  const mainArticle = {
    title: "AI Is Quietly Becoming the Real Competitive Advantage.",
    subtitle: "Not because not everyone has access to it—but because very few know how to use it well.",
    author: "SMC Editorial Team",
    date: "December 2024",
    category: "Technology",
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
  };

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

      {/* Featured Article - Full Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <article className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
            <div className="h-64 bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <span className="text-9xl opacity-10 text-gold font-bold">01</span>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
                  {mainArticle.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <User className="w-4 h-4" />
                  <span>{mainArticle.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span>{mainArticle.date}</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {mainArticle.title}
              </h2>
              <p className="text-xl text-gold font-medium mb-8 italic">
                {mainArticle.subtitle}
              </p>
              
              <div className="prose prose-lg max-w-none">
                {mainArticle.content.map((block, index) => {
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
                  return null;
                })}
              </div>
            </div>
          </article>
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
                  0{index + 2}
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
