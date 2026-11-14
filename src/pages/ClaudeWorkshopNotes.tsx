import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/workshop/BackToTop";
import LearningNav from "@/components/workshop/LearningNav";
import { useScrollToHash } from "@/components/workshop/useScrollToHash";
import { WORKSHOP_PATH, workshop, workshopModules } from "@/data/claudeWorkshop";
import { notes, notesChapters, type NotesBlock, type RichText } from "@/data/claudeWorkshopNotes";
import paccarHallAutumn from "@/assets/paccar-hall-autumn.png";
import "@/styles/smc-reference.css";

const contents = notesChapters.map((c) => ({ id: c.id, num: c.num ?? undefined, title: c.title }));

const iconProps = {
  width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true,
};

const Rich = ({ value }: { value: RichText }) => {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if (part.href) {
          return (
            <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>
          );
        }
        return <em key={i}>{part.text}</em>;
      })}
    </>
  );
};

const Block = ({ block }: { block: NotesBlock }) => {
  switch (block.type) {
    case "p":
      return <p><Rich value={block.content} /></p>;
    case "q":
      return <p className="notes-question">{block.text}</p>;
    case "ul":
      return <ul>{block.items.map((item, i) => <li key={i}><Rich value={item} /></li>)}</ul>;
    case "figure":
      return (
        <figure className="notes-figure">
          <img src={block.image} alt="" width={block.width} height={block.height} loading="lazy" />
          <figcaption><Rich value={block.caption} /></figcaption>
        </figure>
      );
  }
};

/** Which workshop module a notes section belongs to, linked back to that module. */
const PathTag = ({ path }: { path: number }) => {
  const module = workshopModules[path - 1];
  return (
    <p className="notes-path">
      Learning path <Link to={`${WORKSHOP_PATH}#${module.id}`}>{module.num} · {module.title}</Link>
    </p>
  );
};

const ClaudeWorkshopNotes = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-smc-page">
      <Navbar />
      <main id="top" className="smc">
        <section className="hero workshop-hero" style={{ backgroundImage: `url(${paccarHallAutumn})` }}>
          <div className="workshop-hero__inner">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to={WORKSHOP_PATH}>Claude Workshop</Link></li>
                <li><span aria-current="page">Lecture notes</span></li>
              </ol>
            </nav>
            <p className="workshop-hero__eyebrow">Start here · Lecture notes</p>
            <h1 className="display workshop-hero__title">{notes.title}</h1>
            <p className="hero__lead workshop-hero__lead">
              The edited notes from the session, topic by topic. Each section links back to its module in the workshop guide.
            </p>
            <ul className="workshop-hero__facts">
              <li>
                <svg {...iconProps}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
                <span>Prof. {workshop.instructor} · {workshop.affiliation}</span>
              </li>
              <li>
                <svg {...iconProps}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                <span>{workshop.when}</span>
              </li>
            </ul>
            <div className="hero__actions">
              <a className="btn" href={`#${notesChapters[0].id}`}>Read the notes <span aria-hidden="true">→</span></a>
              <a className="btn btn--light" href={notes.recordingUrl} target="_blank" rel="noopener noreferrer">
                Watch the recording <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <div className="workshop">
          <aside className="workshop__side">
            <LearningNav title="Contents" items={contents} showProgress={false} />
          </aside>

          <div className="workshop__main">
            {notesChapters.map((chapter) => (
              <section key={chapter.id} id={chapter.id} className="module" aria-labelledby={`${chapter.id}-title`}>
                <h2 id={`${chapter.id}-title`} className="module__title">
                  {chapter.num && <span className="module__num">{chapter.num}. </span>}
                  {chapter.title}
                </h2>
                {chapter.sections.map((section) => (
                  <div key={section.id} className="notes-section">
                    <h3 id={section.id} className="module__h3">{section.title}</h3>
                    <PathTag path={section.path} />
                    <div className="prose">
                      {section.blocks.map((block, i) => <Block key={i} block={block} />)}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
        <BackToTop />
      </main>
      <div className="h-16" aria-hidden="true" />
      <Footer />
    </div>
  );
};

export default ClaudeWorkshopNotes;
