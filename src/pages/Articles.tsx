import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";

const Articles = () => {
  const featuredArticles = [
    {
      title: "The Future of AI in Business Education",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of business schools and preparing students for tomorrow's challenges.",
      author: "SMC Editorial Team",
      date: "Coming Soon",
      category: "Technology"
    },
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

      {/* Coming Soon Notice */}
      <section className="py-12 bg-gold/10">
        <div className="section-container">
          <div className="text-center">
            <span className="inline-block px-6 py-2 bg-gold text-primary rounded-full font-bold text-lg">
              🚀 Launching Soon
            </span>
            <p className="text-foreground/70 mt-4">
              Our editorial team is preparing exciting content for you. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Preview */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-foreground/70 text-lg">
            Preview of upcoming content from our writers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <article 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-6xl opacity-20 text-gold font-bold">
                  {index + 1}
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
