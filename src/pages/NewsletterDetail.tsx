import { ArrowLeft, FileText, Download, Calendar, Share2, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWordPressNewsletterBySlugQuery } from "@/lib/wordpress/hooks";

const NewsletterDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const { data: newsletter, isLoading } = useWordPressNewsletterBySlugQuery(slug);

  if (isLoading) return <div className="min-h-screen bg-background"><Navbar /><main className="pt-32 text-center">Loading newsletter from WordPress...</main><Footer /></div>;

  if (!newsletter) {
    return <Navigate to="/newsletters" replace />;
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/newsletters/${newsletter.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/newsletters"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Newsletters
          </Link>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
                  {newsletter.volume}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {newsletter.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {newsletter.title} — {newsletter.volume}
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">{newsletter.description}</p>
            </div>

            {/* Share button */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors self-start sm:self-auto"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
              {copied ? "Link Copied!" : "Copy Link"}
            </button>
          </div>

          {/* Highlights */}
          <div className="mb-8 p-4 bg-card border border-border rounded-xl">
            <h3 className="text-sm font-semibold text-foreground mb-3">Inside this issue:</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {newsletter.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* PDF Viewer */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">PDF Viewer</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" />
                Scroll pages
                <ChevronRight className="w-3 h-3" />
              </span>
            </div>
            <div className="h-[600px] lg:h-[800px] w-full rounded-lg overflow-hidden border border-border bg-white">
              <object
                data={`${newsletter.pdfUrl}#view=FitH&scrollbar=1&toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <embed
                  src={`${newsletter.pdfUrl}#view=FitH&scrollbar=1&toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                />
              </object>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={newsletter.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-primary-foreground font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Open in New Tab
            </a>
            <a
              href={newsletter.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsletterDetail;
