import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Globe, Camera } from "lucide-react";
import { useWordPressTeamQuery } from "@/lib/wordpress/hooks";
import type { TeamMember } from "@/lib/wordpress/types";

type Department = "all" | "leads" | "strategy" | "alumni" | "tech" | "casecomp" | "operations";
const departments: { key: Department; label: string }[] = [
  { key: "all", label: "All" }, { key: "leads", label: "SMC Leads" }, { key: "strategy", label: "Core Strategy" },
  { key: "alumni", label: "Alumni Relations" }, { key: "tech", label: "Tech Development" },
  { key: "casecomp", label: "Career & Case Comps" }, { key: "operations", label: "Operations" },
];

const MeetTheTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeFilter, setActiveFilter] = useState<Department>("all");
  const { data: teamMembers = [], isLoading, isError } = useWordPressTeamQuery();
  const filteredMembers = activeFilter === "all" ? teamMembers : teamMembers.filter((member) => member.departments.includes(activeFilter));

  return <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 slide-up"><h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">MEET THE</h1><h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">CORE TEAM</h2><div className="w-24 h-1 bg-gold mx-auto" /></div>
      <div className="flex flex-wrap justify-center gap-2 mb-12 slide-up">{departments.map((dept) => <button key={dept.key} onClick={() => setActiveFilter(dept.key)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === dept.key ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{dept.label}</button>)}</div>
      {isLoading && <p className="text-center text-muted-foreground py-12">Loading team from WordPress...</p>}
      {isError && <p className="text-center text-destructive py-12">Unable to load the team from WordPress.</p>}
      {!isLoading && !isError && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">{filteredMembers.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}</div>}
      {!isLoading && !isError && !filteredMembers.length && <p className="text-center text-muted-foreground py-12">No team members found.</p>}
      <div className="text-center mt-16 slide-up"><p className="text-muted-foreground mb-4">Interested in joining the team?</p><a href="/join" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Apply Now</a></div>
    </div></main>
    <Footer /><ScrollToTop />
  </div>;
};

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => <Card className="card-hover bg-card border-0 shadow-lg slide-up overflow-hidden group" style={{ animationDelay: `${index * 0.05}s` }}>
  <CardContent className="p-4 text-center"><div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4"><div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.isHead ? "from-gold/30 to-primary/30" : "from-primary/20 to-gold/20"} transform rotate-6 group-hover:rotate-12 transition-transform duration-300`} /><div className={`relative w-full h-full rounded-2xl overflow-hidden bg-muted shadow-md ${member.isHead ? "ring-2 ring-gold" : ""}`}>{member.isPlaceholder || !member.image ? <div className="w-full h-full flex items-center justify-center bg-muted"><Camera className="w-12 h-12 text-muted-foreground/50" /></div> : <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />}</div></div>
    <h3 className="text-base md:text-lg font-bold text-foreground mb-1 line-clamp-1">{member.name}</h3><p className={`text-xs md:text-sm font-semibold uppercase tracking-wide mb-3 ${member.isHead ? "text-gold" : "text-gold/80"}`}>{member.role}</p>
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {member.linkedin && !member.isPlaceholder && <button className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors duration-200" onClick={() => window.open(member.linkedin!, "_blank")}><Linkedin className="h-4 w-4" /><span className="text-xs font-medium">Connect</span></button>}
      {member.website && !member.isPlaceholder && <button className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors duration-200" onClick={() => window.open(member.website!, "_blank")}><Globe className="h-4 w-4" /><span className="text-xs font-medium">Website</span></button>}
    </div>
  </CardContent>
</Card>;

export default MeetTheTeam;