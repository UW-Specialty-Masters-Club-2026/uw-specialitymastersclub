import { ArrowLeft, Calendar, ArrowRight, Share2, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWordPressNewslettersQuery } from "@/lib/wordpress/hooks";
import type { Newsletter } from "@/lib/wordpress/types";

const NewsletterCard = ({ newsletter }: { newsletter: Newsletter }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/newsletters/${newsletter.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Link
      to={`/newsletters/${newsletter.slug}`}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail — styled cover preview */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-32 h-32 border border-gold/40 rounded-full" />
          <div className="absolute bottom-8 right-8 w-48 h-48 border border-gold/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold/20 rounded-full" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-6">
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full mb-3 backdrop-blur-sm border border-gold/30">
            {newsletter.volume}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
            SMC Newsletter
          </h3>
          <p className="text-sm text-white/60">{newsletter.date}</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-0.5 bg-gold/20 text-gold text-xs font-medium rounded-full">
            {newsletter.volume}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {newsletter.date}
          </span>
        </div>

        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
          {newsletter.title}
        </h2>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {newsletter.description}
        </p>

        {/* Highlights */}
        <ul className="mb-4 space-y-1.5">
          {newsletter.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all">
            Read Newsletter
            <ArrowRight className="w-4 h-4" />
          </span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
    </Link>
  );
};

const Newsletters = () => {
  const [selectedEdition, setSelectedEdition] = useState<string>("all");
  const { data: newsletters = [], isLoading, isError } = useWordPressNewslettersQuery();

  const filteredNewsletters = selectedEdition === "all"
    ? newsletters
    : newsletters.filter(n => n.volume === selectedEdition);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/#newsletter"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SMC Newsletters
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest news, insights, and stories from the Specialty Masters Club community.
            </p>
          </div>

          {isLoading && <p className="text-muted-foreground mb-8">Loading newsletters from WordPress...</p>}
          {isError && <p className="text-destructive mb-8">Unable to load newsletters from WordPress.</p>}

          {/* Edition Filter */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground">Filter by Edition:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEdition("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedEdition === "all"
                    ? "bg-gold text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All Editions
              </button>
              {newsletters.map((newsletter) => (
                <button
                  key={newsletter.id}
                  onClick={() => setSelectedEdition(newsletter.volume)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedEdition === newsletter.volume
                      ? "bg-gold text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {newsletter.volume}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNewsletters.map((newsletter) => (
              <NewsletterCard key={newsletter.id} newsletter={newsletter} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletters;
