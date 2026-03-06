export interface Newsletter {
  id: number;
  slug: string;
  title: string;
  volume: string;
  date: string;
  description: string;
  pdfUrl: string;
  highlights: string[];
}

export const newsletters: Newsletter[] = [
  {
    id: 3,
    slug: "vol-3",
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 3",
    date: "February 2026",
    description: "The latest edition covering club updates, industry insights, and student stories from the Specialty Masters community.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_3.pdf",
    highlights: [
      "Latest Industry Trends & Insights",
      "Club Updates & Highlights",
      "Student Spotlights",
      "Upcoming Events & Opportunities"
    ]
  },
  {
    id: 2,
    slug: "vol-2",
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 2",
    date: "January 2026",
    description: "Signals, Not Noise — What skills and tools are actually hiring-relevant in 2026. Features AI automation workshop insights, case competition updates, and unfiltered student perspectives.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_2.pdf",
    highlights: [
      "Technology Landscape & Emerging Trends",
      "Case Competitions: Strategy & Preparation",
      "Workshop #1: AI Automation Insights",
      "Student Opinion Page"
    ]
  },
  {
    id: 1,
    slug: "vol-1",
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 1",
    date: "December 2025",
    description: "How Specialized Masters students are shaping the future of work. Features tech trends, case competition strategies, student opinions, and more.",
    pdfUrl: "/newsletters/Specialty_Masters_Club_Newsletter_VOL_1.pdf",
    highlights: [
      "Technology Landscape & Emerging Trends",
      "Case Competitions: Strategy & Preparation",
      "Student Opinion Page",
      "About the Specialty Masters Club"
    ]
  }
];
