import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Camera } from "lucide-react";

// Team member images
import alexImg from "@/assets/team/alex.jpg";
import anushkaImg from "@/assets/team/anushka.jpg";
import huyImg from "@/assets/team/huy.jpg";
import nattImg from "@/assets/team/natt.jpg";
import paridhiImg from "@/assets/team/paridhi.jpeg";
import shivaniImg from "@/assets/team/shivani.jpg";
import venkatImg from "@/assets/team/venkat.jpeg";
import vinayakImg from "@/assets/team/vinayak.jpeg";
import louImg from "@/assets/team/lou.jpg";
import architImg from "@/assets/team/archit.jpg";
import zuhaibImg from "@/assets/team/zuhaib.jpg";
import hardikImg from "@/assets/team/hardik.jpg";

type Department = "all" | "leads" | "strategy" | "alumni" | "tech" | "casecomp" | "operations";

interface TeamMember {
  name: string;
  role: string;
  department: Department;
  image: string | null;
  linkedin: string | null;
  isPlaceholder: boolean;
  isHead?: boolean;
}

const departments: { key: Department; label: string }[] = [
  { key: "all", label: "All" },
  { key: "leads", label: "SMC Leads" },
  { key: "strategy", label: "Strategy" },
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
    // SMC Leads
    {
      name: "Archit Gupta",
      role: "Cofounder, President",
      department: "leads",
      image: architImg,
      linkedin: "https://www.linkedin.com/in/thearchitgupta",
      isPlaceholder: false
    },
    {
      name: "Anushka Mathur",
      role: "Cofounder, Secretary",
      department: "leads",
      image: anushkaImg,
      linkedin: "https://www.linkedin.com/in/anushka-mktg-analytics/",
      isPlaceholder: false
    },
    // Strategy
    {
      name: "Venkat Kowshik",
      role: "Editorial & Tech",
      department: "strategy",
      image: venkatImg,
      linkedin: "https://www.linkedin.com/in/venkat-kowshik-277a1b19a/",
      isPlaceholder: false
    },
    {
      name: "Lou Aranzabal",
      role: "Marketing & Communications",
      department: "strategy",
      image: louImg,
      linkedin: "https://www.linkedin.com/in/lourdesgaranzabal",
      isPlaceholder: false
    },
    {
      name: "Hardik Sharma",
      role: "Alumni & Tech",
      department: "strategy",
      image: hardikImg,
      linkedin: "https://www.linkedin.com/in/hdksrma/",
      isPlaceholder: false
    },
    // Alumni Relations
    {
      name: "Vinayak Malhotra",
      role: "Head, Alumni Relations",
      department: "alumni",
      image: vinayakImg,
      linkedin: "https://www.linkedin.com/in/vinayakm93/",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Mohd Zuhaib",
      role: "Head, Alumni Relations",
      department: "alumni",
      image: zuhaibImg,
      linkedin: "https://www.linkedin.com/in/mohdzuhaib98/",
      isPlaceholder: false,
      isHead: true
    },
    // Tech Development
    {
      name: "Natt S",
      role: "Head, Tech Development",
      department: "tech",
      image: nattImg,
      linkedin: "https://www.linkedin.com/in/natthapat-sakulborrirug/",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Alex Weng",
      role: "Head, Tech Development",
      department: "tech",
      image: alexImg,
      linkedin: "https://www.linkedin.com/in/alexweng97/",
      isPlaceholder: false,
      isHead: true
    },
    // Career & Case Comps
    {
      name: "Huy Nguyen",
      role: "Head, Career & Case Comps",
      department: "casecomp",
      image: huyImg,
      linkedin: "https://www.linkedin.com/in/huy-nguyen-m/",
      isPlaceholder: false,
      isHead: true
    },
    {
      name: "Paridhi Gupta",
      role: "Head, Career & Case Comps",
      department: "casecomp",
      image: paridhiImg,
      linkedin: "https://www.linkedin.com/in/paridhigupta1999/",
      isPlaceholder: false,
      isHead: true
    },
    // Operations
    {
      name: "Shivani Raut",
      role: "Head, Operations",
      department: "operations",
      image: shivaniImg,
      linkedin: "https://www.linkedin.com/in/raut-shivani/",
      isPlaceholder: false,
      isHead: true
    },
  ];

  const filteredMembers = activeFilter === "all" 
    ? teamMembers 
    : teamMembers.filter(m => m.department === activeFilter);

  // Group members by department for "all" view
  const groupedByDepartment = departments.slice(1).map(dept => ({
    ...dept,
    members: teamMembers.filter(m => m.department === dept.key)
  })).filter(group => group.members.length > 0);

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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === dept.key
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

              {/* Show Leads & Strategy below if not already the active filter */}
              {activeFilter !== "leads" && (
                <div className="slide-up">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                    SMC Leads
                    <div className="w-16 h-1 bg-gold mx-auto mt-2" />
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.filter(m => m.department === "leads").map((member, index) => (
                      <TeamCard key={index} member={member} index={index} />
                    ))}
                  </div>
                </div>
              )}
              {activeFilter !== "strategy" && (
                <div className="slide-up">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                    Strategy
                    <div className="w-16 h-1 bg-gold mx-auto mt-2" />
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.filter(m => m.department === "strategy").map((member, index) => (
                      <TeamCard key={index} member={member} index={index} />
                    ))}
                  </div>
                </div>
              )}
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
