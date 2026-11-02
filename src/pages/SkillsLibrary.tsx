import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WORKSHOP_PATH, workshop } from "@/data/claudeWorkshop";
import workshopPoster from "@/assets/workshop-claude-poster.jpeg";
import "@/styles/smc-reference.css";

const SKILLS_URL =
  "https://raw.githubusercontent.com/UW-Specialty-Masters-Club-2026/uw-foster-smc-claude-skills/main/skills.json";
const SKILLS_REPO = "https://github.com/UW-Specialty-Masters-Club-2026/uw-foster-smc-claude-skills";

interface SkillCategory {
  id: string;
  label: string;
  note?: string;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  action: "download" | "link" | "none";
  download_url?: string;
  source_url?: string;
  try_prompt?: string;
}

interface SkillsData {
  updated?: string;
  repo?: string;
  categories: SkillCategory[];
  skills: Skill[];
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <li className="card">
    <h3 className="card__title">{skill.name}</h3>
    <p className="muted">{skill.description}</p>
    {skill.try_prompt && (
      <p className="try"><strong>Try it:</strong> “{skill.try_prompt}”</p>
    )}
    <div className="card__actions">
      {skill.action === "download" && (
        <>
          <a className="btn btn--small" href={skill.download_url} target="_blank" rel="noopener noreferrer">Download ZIP</a>
          {skill.source_url && (
            <a href={skill.source_url} target="_blank" rel="noopener noreferrer">View skill ↗</a>
          )}
        </>
      )}
      {skill.action === "link" && skill.source_url && (
        <a href={skill.source_url} target="_blank" rel="noopener noreferrer">Open on GitHub ↗</a>
      )}
    </div>
  </li>
);

const SkillsLibrary = () => {
  const [data, setData] = useState<SkillsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(SKILLS_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: SkillsData = await res.json();
        if (!cancelled) {
          setData(json);
          setIsLoading(false);
        }
      } catch {
        if (!cancelled) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-smc-page">
      <Navbar />
      <main className="smc skills-page">
        <p className="eyebrow">Claude skills library</p>
        <h1 className="display">Make Claude work for you</h1>
        <p className="muted lead">
          Ready-made skills that turn Claude into a career coach, analyst, and study partner. Pick one, add it to Claude, and try it out.
        </p>

        <section className="feature-card" aria-labelledby="workshop-card">
          <img
            src={workshopPoster}
            alt={`Workshop poster: ${workshop.title}, led by Professor ${workshop.instructor}`}
            width={1081}
            height={1400}
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Claude workshop · Start here</p>
            <h2 id="workshop-card">{workshop.title}</h2>
            <p>
              With Prof. {workshop.instructor}, {workshop.affiliation}. A self-paced guide to building your AI digital twin and chief of staff: model choice, context engineering, dashboards, tool integrations and your first vibecoded app.
            </p>
            <Link className="btn" to={WORKSHOP_PATH}>Start here <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="card" aria-labelledby="how">
          <h2 id="how" style={{ marginTop: 0 }}>How to add a skill</h2>
          <ol className="steps">
            <li>Sign in at <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a>.</li>
            <li>Go to Settings → Capabilities and turn on “Code execution and file creation”.</li>
            <li>Download a skill ZIP, then go to Customize → Skills → + → Create skill → Upload a skill.</li>
          </ol>
        </section>

        {isLoading && <p className="muted">Loading skills…</p>}

        {isError && (
          <p className="muted">
            We couldn’t load the skills list right now.{" "}
            <a href={SKILLS_REPO} target="_blank" rel="noopener noreferrer">Browse the skills repo instead ↗</a>
          </p>
        )}

        {data?.categories.map((category) => {
          const skills = data.skills.filter((s) => s.category === category.id);
          if (skills.length === 0) return null;
          return (
            <section key={category.id}>
              <h2 className="section-title">{category.label}</h2>
              {category.note && <p className="muted">{category.note}</p>}
              <ul className="card-grid">
                {skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
              </ul>
            </section>
          );
        })}
      </main>
      <div className="h-16" aria-hidden="true" />
      <Footer />
    </div>
  );
};

export default SkillsLibrary;
