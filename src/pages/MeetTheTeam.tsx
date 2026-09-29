import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Camera } from "lucide-react";

// Team member images
import SaranyaImg from "@/assets/team/Saranya.png";
import AkshayaImg from "@/assets/team/Akshaya.jpg";
import AlyssaImg from "@/assets/team/Alyssa.jpg";
import AngelaImg from "@/assets/team/Angela.jpeg";
import DivyaImg from "@/assets/team/Divya.jpeg";
import ElenaImg from "@/assets/team/Elena.jpg";
import KayleeImg from "@/assets/team/Kaylee.png";
import EmersonImg from "@/assets/team/Emerson.jpg";
import LalithaImg from "@/assets/team/Lalitha.png";
import SavleenImg from "@/assets/team/Savleen.jpeg";
import VyImg from "@/assets/team/Vy.jpg";
import RaeannImg from "@/assets/team/Raeann.jpg";

type Department = "all" | "leads" | "strategy" | "alumni" | "tech" | "casecomp" | "operations";
type MemberDepartment = Exclude<Department, "all">;
type Major = "MSBA" | "MSIS" | "MSCM";
interface TeamMember {
  name: string;
  role: string;
  departments: MemberDepartment[];
  major: Major;
  image: string | null;
  linkedin: string | null;
  isPlaceholder: boolean;
  isHead?: boolean;
}

const departments: { key: Department; label: string }[] = [
  { key: "all", label: "All" },
  { key: "leads", label: "SMC Leads" },
  { key: "strategy", label: "Core Strategy" },
  { key: "alumni", label: "Alumni Relations" },
  { key: "tech", label: "Tech Development" },
  { key: "casecomp", label: "Career & Case Comps" },
  { key: "operations", label: "Operations" },
];

const MeetTheTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState<Department>("all");

  const teamMembers: TeamMember[] = [
    // Strategy Core
    {
      name: "Sai Saranya Kannan",
      role: "President",
      departments: ["leads"],
      major: "MSBA",
      image: SaranyaImg,
      linkedin: "https://www.linkedin.com/in/saisaranyakannan",
      isPlaceholder: false
    },
    {
      name: "Kaylee Goulding",
      role: "VP / Secretary, Marketing & Communications",
      departments: ["leads"],
      major: "MSBA",
      image: KayleeImg,
      linkedin: "https://www.linkedin.com/in/kaylee-goulding",
      isPlaceholder: false
    },

    {
      name: "Savleen Kaur",
      role: "Strategy: Operations & Case Competitions",
      departments: ["strategy","casecomp","operations" ],
      major: "MSBA",
      image: SavleenImg,
      linkedin: "https://www.linkedin.com/in/savleenkaurmsba",
      isPlaceholder: false
    },
    {
      name: "Akshaya Jonnalagadda",
      role: "Strategy: AI & Tech and Alumni & Relations ",
      departments: ["strategy", "tech", "alumni"],
      major: "MSIS",
      image: AkshayaImg,
      linkedin: "https://www.linkedin.com/in/akshaya-jonnalagadda-00a30615a",
      isPlaceholder: false,
      isHead: true
    },

    // Function Leads — Marketing & Communications
    {
      name: "Vy Doan",
      role: "Marketing & Communications",
      departments: ["strategy"],
      major: "MSBA",
      image: VyImg,
      linkedin: "https://www.linkedin.com/in/vydoan10/",
      isPlaceholder: false,
      isHead: true
    },

    // Function Leads — AI & Tech
    {
      name: "Emerson Liu",
      role: "Head, AI & Tech",
      departments: ["tech"],
      major: "MSIS",
      image: EmersonImg,
      linkedin: "https://www.linkedin.com/in/emerson-liu-74a184352/"  ,
      isPlaceholder: false,
      isHead: true
    },

    // Function Leads — Alumni
    {
      name: "Lalitha Pammi",
      role: "Head, Alumni",
      departments: ["alumni"],
      major: "MSIS",
      image: LalithaImg,
      linkedin: "https://www.linkedin.com/in/lalitha-pammi",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Divya",
      role: "Head, Alumni",
      departments: ["alumni"],
      major: "MSIS",
      image: DivyaImg,
      linkedin: "https://www.linkedin.com/in/divya-rawal-pd/",
      isPlaceholder: false,
      isHead: true
    },

    // Function Leads — Case Competitions & Career
    {
      name: "Angela (Pin-Cheng) Tsao",
      role: "Head, Case Competitions & Career",
      departments: ["casecomp"],
      major: "MSIS",
      image: AngelaImg,
      linkedin: "https://www.linkedin.com/in/angela-tsao-903155353",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Raeann Liu",
      role: "Head, Case Competitions & Career",
      departments: ["casecomp"],
      major: "MSCM",
      image: RaeannImg,
      linkedin: "https://www.linkedin.com/in/raeann-liu/",
      isPlaceholder: false,
      isHead: true
    },

    // Function Leads — Operations
    {
      name: "Elena Quan",
      role: "Head, Operations",
      departments: ["operations"],
      major: "MSBA",
      image: ElenaImg,
      linkedin: "https://www.linkedin.com/in/xinyu-quan",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Alyssa Wang",
      role: "Head, Operations",
      departments: ["operations"],
      major: "MSBA",
      image: AlyssaImg,
      linkedin: "https://www.linkedin.com/in/alyssaw-ruoyu",
      isPlaceholder: false,
      isHead: true
    },
  ];
  const filteredMembers = activeFilter === "all"
    ? teamMembers
    : teamMembers.filter(m => m.departments.includes(activeFilter as MemberDepartment));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              MEET THE
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              CORE TEAM
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
            {departments.map((dept) => (
              <button
                key={dept.key}
                onClick={() => setActiveFilter(dept.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === dept.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* "All" view: flat grid of everyone. Filtered view: filtered team + leads & strategy below */}
          {activeFilter === "all" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-16 max-w-6xl mx-auto">
              {/* Filtered department members */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  {departments.find(d => d.key === activeFilter)?.label}
                  <div className="w-16 h-1 bg-gold mx-auto mt-2" />
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {filteredMembers.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                  ))}
                </div>
              </div>

             
            </div>
          )}

          {/* Join CTA */}
          <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-muted-foreground mb-4">
              Interested in joining the team?
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <Card
    className="card-hover bg-card border-0 shadow-lg slide-up overflow-hidden group"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <CardContent className="p-4 text-center">
      {/* Photo Container */}
      <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.isHead ? 'from-gold/30 to-primary/30' : 'from-primary/20 to-gold/20'} transform rotate-6 group-hover:rotate-12 transition-transform duration-300`} />
        <div className={`relative w-full h-full rounded-2xl overflow-hidden bg-muted shadow-md ${member.isHead ? 'ring-2 ring-gold' : ''}`}>
          {member.isPlaceholder ? (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <Camera className="w-12 h-12 text-muted-foreground/50" />
            </div>
          ) : (
            <img
              src={member.image!}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-base md:text-lg font-bold text-foreground mb-1 line-clamp-1">
        {member.name}
      </h3>
      <p className={`text-xs md:text-sm font-semibold uppercase tracking-wide mb-3 ${member.isHead ? 'text-gold' : 'text-gold/80'}`}>
        {member.role}
      </p>

      {/* LinkedIn */}
      {member.linkedin && !member.isPlaceholder && (
        <button
          className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors duration-200"
          onClick={() => window.open(member.linkedin!, '_blank')}
        >
          <Linkedin className="h-4 w-4" />
          <span className="text-xs font-medium">Connect</span>
        </button>
      )}
    </CardContent>
  </Card>
);

export default MeetTheTeam;
