import { ArrowLeft, FileText, Download, Calendar, Maximize } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsletters = [
  {
    id: 2,
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 2",
    date: "January 2026",
    description: "Signals, Not Noise — What skills and tools are actually hiring-relevant in 2026. Features AI automation workshop insights, case competition updates, and unfiltered student perspectives.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_2.pdf",
    highlights: [
      "Technology Landscape & Emerging Trends",
      "Case Competitions: Strategy & Preparation",
      "Workshop #1: AI Automation Insights",
      "Student Opinion Page"
    ]
  },
  {
    id: 1,
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 1",
    date: "December 2025",
    description: "How Specialized Masters students are shaping the future of work. Features tech trends, case competition strategies, student opinions, and more.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_1.pdf",
    highlights: [
      "Technology Landscape & Emerging Trends",
      "Case Competitions: Strategy & Preparation",
      "Student Opinion Page",
      "About the Specialty Masters Club"
    ]
  }
];

const Newsletters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
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

          {/* Newsletter Grid */}
          <div className="grid gap-8">
            {newsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* PDF Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-24 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                        <FileText className="w-10 h-10 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
                          {newsletter.volume}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          {newsletter.date}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        {newsletter.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">
                        {newsletter.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-foreground mb-2">Inside this issue:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {newsletter.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
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
                          View PDF
                        </a>
                        <Link
                          to={`/pdf-reader?url=${encodeURIComponent(newsletter.pdfUrl)}&title=${encodeURIComponent(newsletter.title + ' - ' + newsletter.volume)}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Maximize className="w-4 h-4" />
                          Fullscreen Reader
                        </Link>
                        <a
                          href={newsletter.pdfUrl}
                          download
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Viewer - Scrollable */}
                <div className="border-t border-border">
                  <div className="bg-muted/50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-foreground">PDF Viewer</span>
                      <span className="text-xs text-muted-foreground">Scroll to read all pages</span>
                    </div>
                    <div className="h-[800px] w-full rounded-lg overflow-hidden border border-border bg-white">
                      <iframe
                        src={`${newsletter.pdfUrl}#view=FitH&scrollbar=1&toolbar=1&navpanes=0`}
                        className="w-full h-full"
                        title={newsletter.title}
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletters;
