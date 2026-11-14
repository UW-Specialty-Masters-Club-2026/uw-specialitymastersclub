import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy } from "pdfjs-dist/legacy/build/pdf.mjs";
import workerUrl from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url";

// Rendering pages ourselves works everywhere; <object>/<embed> PDFs show
// nothing (or only page one) on iOS Safari and Android browsers.
// The legacy build keeps older Safari versions working.
GlobalWorkerOptions.workerSrc = workerUrl;

type PageProps = { doc: PDFDocumentProxy; pageNumber: number; width: number; ratio: number };

const PdfPage = ({ doc, pageNumber, width, ratio: initialRatio }: PageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isNear, setIsNear] = useState(false);
  const [ratio, setRatio] = useState(initialRatio);

  // Only fetch and draw a page once it is close to the visible area.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNear || !width) return;
    let cancelled = false;
    let task: ReturnType<Awaited<ReturnType<PDFDocumentProxy["getPage"]>>["render"]> | undefined;
    doc.getPage(pageNumber).then((page) => {
      const canvas = canvasRef.current;
      if (cancelled || !canvas) return;
      const base = page.getViewport({ scale: 1 });
      setRatio(base.height / base.width);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale: (width / base.width) * pixelRatio });
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      task = page.render({ canvas, viewport });
      task.promise.catch(() => {
        // Cancelled by a resize or unmount; the next render replaces it.
      });
    });
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [doc, pageNumber, width, isNear]);

  return (
    <div ref={wrapperRef} className="bg-white shadow-sm" style={{ aspectRatio: `1 / ${ratio}` }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        role="img"
        aria-label={`Page ${pageNumber} of ${doc.numPages}`}
      />
    </div>
  );
};

type PdfPagesProps = {
  url: string;
  title: string;
  className?: string;
};

/** Scrollable stack of PDF pages rendered with pdf.js. */
const PdfPages = ({ url, title, className = "" }: PdfPagesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [firstRatio, setFirstRatio] = useState(Math.SQRT2);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setStatus("loading");
    setDoc(null);
    // Range requests let pdf.js fetch just the pages being viewed.
    const task = getDocument({ url, disableAutoFetch: true });
    let cancelled = false;
    task.promise
      .then(async (loaded) => {
        const first = await loaded.getPage(1);
        if (cancelled) return;
        const base = first.getViewport({ scale: 1 });
        setFirstRatio(base.height / base.width);
        setDoc(loaded);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
      task.destroy();
    };
  }, [url]);

  return (
    <div className={`overflow-y-auto bg-muted p-3 sm:p-4 ${className}`} role="document" aria-label={title}>
      <div ref={containerRef} className="mx-auto flex max-w-3xl flex-col gap-3 sm:gap-4">
        {status === "loading" && <p className="py-12 text-center text-sm text-muted-foreground">Loading PDF…</p>}
        {status === "error" && (
          <p className="py-12 text-center text-sm text-muted-foreground">
            This PDF couldn’t be displayed here.{" "}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-gold underline">
              Open it in a new tab
            </a>
            .
          </p>
        )}
        {doc &&
          Array.from({ length: doc.numPages }, (_, i) => (
            <PdfPage key={i + 1} doc={doc} pageNumber={i + 1} width={width} ratio={firstRatio} />
          ))}
      </div>
    </div>
  );
};

export default PdfPages;
