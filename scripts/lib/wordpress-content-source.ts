import path from "node:path";
import { readdirSync, statSync } from "node:fs";
import { serializeDataMarker } from "../../src/lib/wordpress/contentBlocks";

const root = path.resolve(process.cwd());
const asset = (...parts: string[]) => path.join(root, "src", "assets", ...parts);
const publicFile = (...parts: string[]) => path.join(root, "public", ...parts);
const collectAssetFiles = (directory: string): string[] => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const current = path.join(directory, entry.name);
  return entry.isDirectory() ? collectAssetFiles(current) : /\.(png|jpe?g|webp|gif|svg)$/i.test(entry.name) ? [current] : [];
});

export type MigrationMedia = { key: string; filePath: string; title: string };
export type MigrationContent = {
  kind: "page" | "post";
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  content: string;
  mediaKey?: string;
};

export type WordPressContentSource = { media: MigrationMedia[]; content: MigrationContent[] };

const team = [
  ["sai-saranya-kannan", "Sai Saranya Kannan", "President", ["leads"], "MSBA", "team/Saranya.png", "https://www.linkedin.com/in/saisaranyakannan", true],
  ["kaylee-goulding", "Kaylee Goulding", "VP / Secretary, Marketing & Communications", ["leads"], "MSBA", "team/Kaylee.png", "https://www.linkedin.com/in/kaylee-goulding", true],
  ["savleen-kaur", "Savleen Kaur", "Strategy: Operations & Case Competitions", ["strategy", "casecomp", "operations"], "MSBA", "team/Savleen.jpeg", "https://www.linkedin.com/in/savleenkaurmsba", false],
  ["akshaya-jonnalagadda", "Akshaya Jonnalagadda", "Strategy: AI & Tech and Alumni & Relations", ["strategy", "tech", "alumni"], "MSIS", "team/Akshaya.jpg", "https://www.linkedin.com/in/akshaya-jonnalagadda-00a30615a", true],
  ["vy-doan", "Vy Doan", "Marketing & Communications", ["strategy"], "MSBA", "team/Vy.jpg", "https://www.linkedin.com/in/vydoan10/", true],
  ["emerson-liu", "Emerson Liu", "Head, AI & Tech", ["tech"], "MSIS", "team/Emerson.jpg", "https://www.linkedin.com/in/emerson-liu-74a184352/", true],
  ["lalitha-pammi", "Lalitha Pammi", "Head, Alumni", ["alumni"], "MSIS", "team/Lalitha.png", "https://www.linkedin.com/in/lalitha-pammi", true],
  ["divya-rawal", "Divya", "Head, Alumni", ["alumni"], "MSIS", "team/Divya.jpeg", "https://www.linkedin.com/in/divya-rawal-pd/", true],
  ["angela-tsao", "Angela (Pin-Cheng) Tsao", "Head, Case Competitions & Career", ["casecomp"], "MSIS", "team/Angela.jpeg", "https://www.linkedin.com/in/angela-tsao-903155353", true],
  ["raeann-liu", "Raeann Liu", "Head, Case Competitions & Career", ["casecomp"], "MSCM", "team/Raeann.jpg", "https://www.linkedin.com/in/raeann-liu/", true],
  ["elena-quan", "Elena Quan", "Head, Operations", ["operations"], "MSBA", "team/Elena.jpg", "https://www.linkedin.com/in/xinyu-quan", true],
  ["alyssa-wang", "Alyssa Wang", "Head, Operations", ["operations"], "MSBA", "team/Alyssa.jpg", "https://www.linkedin.com/in/alyssaw-ruoyu", true],
] as const;

const homepage = {
  hero: {
    title: "Specialty Masters Club",
    subtitle: "Empowering MSBA, MSIS, MSCM & Specialty Master's Students at UW Foster",
    image: "hero-students.jpg",
    primaryCta: "Join the Club",
    secondaryCta: "Upcoming Events",
  },
  logo: "smc-logo.png",
  about: {
    title: "About the Specialty Masters Club",
    paragraphs: [
      "The Specialty Masters Club (SMC) at the UW Foster School brings together students across MSBA, MSIS, MSCM, MSA and other specialized programs.",
      "Our mission is to create belonging, industry exposure, and skill-building opportunities through networking, competitions, and AI-driven projects.",
      "We foster a collaborative environment where specialty master's students can connect, grow, and prepare for successful careers in their respective fields.",
    ],
    image: "paccar-hall-autumn.png",
  },
  pillars: [
    { title: "Community & Connection", items: ["Cross-program mixers & meetups", "Social & cultural events", "Peer collaboration across Foster programs", "Strengthening belonging at Foster"] },
    { title: "Career & Competitions", items: ["Networking & Industry Engagement", "Career & Application Readiness", "Case Competitions", "AI Projects & Innovation Lab"] },
    { title: "Tech & AI Projects", items: ["Agentic AI experimentation & hands-on labs", "AI Safety Awareness collaborations", "Real-world Foster AI applications and ROI modeling"] },
  ],
  projects: [{ title: "AI Safety Workshop", location: "Seattle Public Library", description: "Community education on AI use & safety, bringing awareness and best practices to the public.", image: "ai-safety-workshop.jpg" }],
  contact: { email: "smcommittee@uw.edu", linkedin: "https://www.linkedin.com/company/uw-foster-specialty-masters-student-club//", instagram: "https://www.instagram.com/smclub_uw/" },
  newsletter: { title: "Newsletter", description: "Stay updated with the latest news, events, and opportunities from SMC" },
};

const media: MigrationMedia[] = [
  { key: "hero-students.jpg", filePath: asset("hero-students.jpg"), title: "SMC hero students" },
  { key: "paccar-hall-autumn.png", filePath: asset("paccar-hall-autumn.png"), title: "PACCAR Hall at UW Foster" },
  { key: "ai-safety-workshop.jpg", filePath: asset("ai-safety-workshop.jpg"), title: "AI Safety Workshop" },
  ...team.map(([, name, , , , file]) => ({ key: file, filePath: asset(file), title: name })),
  { key: "newsletter-vol-1.pdf", filePath: publicFile("newsletters", "Specialty_Masters_Club_Newsletter_VOL_1.pdf"), title: "SMC Newsletter Vol. 1" },
  { key: "newsletter-vol-2.pdf", filePath: publicFile("newsletters", "Specialty_Masters_Club_Newsletter_VOL_2.pdf"), title: "SMC Newsletter Vol. 2" },
  { key: "newsletter-vol-3.pdf", filePath: publicFile("newsletters", "Specialty_Masters_Club_Newsletter_VOL_3.pdf"), title: "SMC Newsletter Vol. 3" },
];

for (const filePath of collectAssetFiles(path.join(root, "src", "assets"))) {
  const key = path.relative(path.join(root, "src", "assets"), filePath);
  if (!media.some((item) => item.key === key) && statSync(filePath).size > 0) media.push({ key, filePath, title: path.basename(filePath) });
}

export const createWordPressContentSource = (): WordPressContentSource => {
  const content: MigrationContent[] = [
    { kind: "page", slug: "smc-homepage", title: "SMC Homepage Content", content: serializeDataMarker("homepage", homepage) },
    { kind: "page", slug: "smc-partners", title: "SMC Partners", content: serializeDataMarker("partners", [
      { name: "UW Foster", logo: "https://foster.uw.edu/wp-content/uploads/2018/09/Foster-logo-purple.png" },
      { name: "AI Awareness Society", logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=AI+Awareness" },
      { name: "Seattle Public Library", logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=SPL" },
      { name: "Industry Partners", logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=Partners" },
    ]) },
    ...team.map(([slug, name, role, departments, major, file, linkedin, website, isHead]) => ({
      kind: "post" as const,
      slug,
      title: name,
      category: "smc-team",
      excerpt: role,
      content: serializeDataMarker("team", { role, departments, major, linkedin,website, isPlaceholder: false, isHead, image: file }),
      mediaKey: file,
    })),
    { kind: "post", slug: "vol-1", title: "Specialty Masters Club Newsletter", category: "smc-newsletter", excerpt: "How Specialized Masters students are shaping the future of work.", content: serializeDataMarker("newsletter", { volume: "Vol. 1", highlights: ["Technology Landscape & Emerging Trends", "Case Competitions: Strategy & Preparation", "Student Opinion Page", "About the Specialty Masters Club"], pdfKey: "newsletter-vol-1.pdf" }) },
    { kind: "post", slug: "vol-2", title: "Specialty Masters Club Newsletter", category: "smc-newsletter", excerpt: "Signals, Not Noise — What skills and tools are actually hiring-relevant in 2026.", content: serializeDataMarker("newsletter", { volume: "Vol. 2", highlights: ["Technology Landscape & Emerging Trends", "Case Competitions: Strategy & Preparation", "Workshop #1: AI Automation Insights", "Student Opinion Page"], pdfKey: "newsletter-vol-2.pdf" }) },
    { kind: "post", slug: "vol-3", title: "Specialty Masters Club Newsletter", category: "smc-newsletter", excerpt: "The latest edition covering club updates, industry insights, and student stories.", content: serializeDataMarker("newsletter", { volume: "Vol. 3", highlights: ["Latest Industry Trends & Insights", "Club Updates & Highlights", "Student Spotlights", "Upcoming Events & Opportunities"], pdfKey: "newsletter-vol-3.pdf" }) },
    { kind: "post", slug: "ai-safety-workshop", title: "AI Safety Workshop", category: "smc-gallery", content: serializeDataMarker("gallery", { alt: "AI Safety Workshop at Seattle Public Library" }), mediaKey: "ai-safety-workshop.jpg" },
  ];
  return { media, content };
};
