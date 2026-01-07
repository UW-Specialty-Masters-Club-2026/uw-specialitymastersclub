import { ArrowLeft, Download, Maximize, Minimize } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PdfReader = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("url") || "";
  const title = searchParams.get("title") || "PDF Viewer";
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            to="/newsletters" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Newsletters
          </Link>
          <span className="text-muted-foreground">|</span>
          <h1 className="text-lg font-semibold text-foreground truncate max-w-md">
            {title}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-border text-foreground rounded-lg hover:bg-accent transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </a>
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-gold text-primary-foreground rounded-lg hover:bg-gold/90 transition-colors"
          >
            {isFullscreen ? (
              <>
                <Minimize className="w-4 h-4" />
                <span className="hidden sm:inline">Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize className="w-4 h-4" />
                <span className="hidden sm:inline">Fullscreen</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1 bg-muted">
        {pdfUrl ? (
          <iframe
            src={`${pdfUrl}#view=FitH&scrollbar=1&toolbar=1&navpanes=1`}
            className="w-full h-full"
            title={title}
            style={{ border: 'none', minHeight: 'calc(100vh - 60px)' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">No PDF specified</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfReader;
