import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, ExternalLink, Github, Sparkles, RefreshCw, AlertCircle, CheckCircle2, Upload } from "lucide-react";

const SKILLS_URL =
  "https://raw.githubusercontent.com/UW-Specialty-Masters-Club-2026/uw-foster-smc-claude-skills/main/skills.json";

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />

        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-gold" />
              </div>
            </div>
            <p className="text-gold font-semibold tracking-widest uppercase mb-4">
              Claude Skills Library
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              MAKE CLAUDE
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-8">
              WORK FOR YOU
            </h1>
            <div className="w-32 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready-made skills that turn Claude into a career coach, analyst,
              and study partner. Pick one, add it to Claude, and try it out.
            </p>
          </div>
        </div>
      </section>

      {/* How to add a skill */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto -mt-10 relative z-20 mb-16">
          <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Upload className="w-5 h-5 text-gold" />
              How to add a skill
            </h2>
            <ol className="space-y-3">
              {[
                <>Sign in at <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">claude.ai</a>.</>,
                <>Go to <span className="font-semibold text-foreground">Settings → Capabilities</span> and turn on <span className="font-semibold text-foreground">"Code execution and file creation"</span>.</>,
                <>Download a skill ZIP, then go to <span className="font-semibold text-foreground">Customize → Skills → + → Create skill → Upload a skill</span>.</>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-foreground/75 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Skill sections */}
      <section className="section-container pb-20">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 text-foreground/70">
            <RefreshCw className="w-8 h-8 text-gold animate-spin mb-4" />
            <p>Loading skills...</p>
          </div>
        )}

        {isError && (
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center py-20">
            <AlertCircle className="w-10 h-10 text-destructive mb-4" />
            <p className="text-foreground/75 mb-4">
              We couldn't load the skills list right now.
            </p>
            <a
              href="https://github.com/UW-Specialty-Masters-Club-2026/uw-foster-smc-claude-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
            >
              <Github className="w-4 h-4" />
              Browse the skills repo instead
            </a>
          </div>
        )}

        {!isLoading && !isError && data && (
          <div className="space-y-16">
            {data.categories.map((category) => {
              const skills = data.skills.filter((s) => s.category === category.id);
              if (skills.length === 0) return null;
              return (
                <div key={category.id}>
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {category.label}
                    </h2>
                    <div className="w-16 h-1 bg-gold rounded-full mt-3 mb-2" />
                    {category.note && (
                      <p className="text-foreground/60 text-sm">{category.note}</p>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                      <article
                        key={skill.id}
                        className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
                      >
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {skill.name}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                          {skill.description}
                        </p>

                        {skill.action === "download" && (
                          <div>
                            <a
                              href={skill.download_url}
                              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all hover:scale-[1.02]"
                            >
                              <Download className="w-4 h-4" />
                              Download ZIP
                            </a>
                            {skill.source_url && (
                              <a
                                href={skill.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 text-xs text-foreground/50 hover:text-gold transition-colors"
                              >
                                View skill ↗
                              </a>
                            )}
                            {skill.try_prompt && (
                              <div className="mt-4 bg-muted/60 border border-border rounded-lg p-3">
                                <span className="text-xs font-semibold text-gold block mb-1">
                                  Try it:
                                </span>
                                <span className="text-xs text-foreground/70 italic">
                                  "{skill.try_prompt}"
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {skill.action === "link" && skill.source_url && (
                          <a
                            href={skill.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all hover:scale-[1.02] self-start"
                          >
                            <Github className="w-4 h-4" />
                            Open on GitHub
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </a>
                        )}

                        {skill.action === "none" && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold self-start">
                            <CheckCircle2 className="w-4 h-4" />
                            Already in Claude
                          </span>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default SkillsLibrary;
