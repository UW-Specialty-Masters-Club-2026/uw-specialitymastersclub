import { ArrowLeft, FileText, Download, Calendar, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsletters = [
  {
    id: 3,
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 3",
    date: "February 2026",
    description: "The latest edition covering club updates, industry insights, and student stories from the Specialty Masters community.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_3.pdf",
    highlights: [
      "Latest Industry Trends & Insights",
      "Club Updates & Highlights",
      "Student Spotlights",
      "Upcoming Events & Opportunities"
    ]
  },
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
  const [selectedEdition, setSelectedEdition] = useState<string>("all");
  
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
          <div className="grid gap-8">
            {filteredNewsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* PDF Viewer - Left Side */}
                    <div className="lg:w-1/2 flex-shrink-0">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground">PDF Viewer</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <ChevronLeft className="w-3 h-3" />
                          Scroll pages
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                      <div className="h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden border border-border bg-white">
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

                    {/* Content - Right Side */}
                    <div className="flex-1 flex flex-col">
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
                        <ul className="grid grid-cols-1 gap-2">
                          {newsletter.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3 mt-auto">
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