import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { articles, getImageSrc, type ContentBlock } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="section-container pt-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-foreground/70 mb-8">The article you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate("/articles")}
            className="inline-flex items-center gap-2 text-gold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = (block: ContentBlock, index: number) => {
    if (block.type === "paragraph") {
      return (
        <p key={index} className="text-foreground/80 mb-6 leading-relaxed text-lg">
          {block.text}
        </p>
      );
    }
    if (block.type === "heading") {
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
          {block.text}
        </h2>
      );
    }
    if (block.type === "list" && block.items) {
      return (
        <ul key={index} className="list-disc list-inside text-foreground/80 mb-6 space-y-3 pl-4 text-lg">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    if (block.type === "highlight") {
      return (
        <div key={index} className="bg-gold/10 border-l-4 border-gold p-6 my-10 rounded-r-lg">
          <p className="text-gold font-semibold text-xl italic">
            {block.text}
          </p>
        </div>
      );
    }
    if (block.type === "image" && block.src) {
      return (
        <div key={index} className="my-12">
          <img 
            src={getImageSrc(block.src)} 
            alt={block.alt || "Article image"} 
            className="w-full max-h-[500px] object-contain rounded-xl shadow-lg"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={article.heroImage} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate("/articles")}
              className="inline-flex items-center gap-2 text-gold hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </button>
            
            <span className="inline-block px-3 py-1 bg-gold text-primary rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-foreground/70 italic mb-6">
              {article.subtitle}
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src={article.authorAvatar} 
                alt={article.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-foreground/60 text-sm">{article.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-container">
        <div className="max-w-3xl mx-auto py-12">
          {article.content.map((block, index) => renderContent(block, index))}
        </div>
      </article>

      {/* Back to Articles CTA */}
      <section className="section-container pb-20">
        <div className="max-w-3xl mx-auto text-center border-t border-border pt-12">
          <button 
            onClick={() => navigate("/articles")}
            className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 rounded-full font-bold hover:bg-gold/90 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Articles
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
