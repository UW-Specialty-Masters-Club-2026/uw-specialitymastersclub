import { useEffect, useRef, useState } from "react";

type CopyBlockProps = {
  label: string;
  text: string;
  source?: string;
  /** Show the label as a file name (monospace, gold). */
  file?: boolean;
};

const CopyBlock = ({ label, text, source, file }: CopyBlockProps) => {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <figure className="copy-block">
      <figcaption className="copy-block__bar">
        <span className={file ? "copy-block__file" : "copy-block__label"}>{label}</span>
        <button type="button" className="copy-block__btn" onClick={copy}>
          {status === "copied" ? "Copied" : status === "failed" ? "Select & copy" : "Copy"}
          <span className="sr-only"> {label}</span>
        </button>
      </figcaption>
      <pre className="copy-block__text">{text}</pre>
      {source && <p className="copy-block__source">{source}</p>}
      <span className="sr-only" role="status">
        {status === "copied" ? `${label} copied to clipboard` : ""}
      </span>
    </figure>
  );
};

export default CopyBlock;
