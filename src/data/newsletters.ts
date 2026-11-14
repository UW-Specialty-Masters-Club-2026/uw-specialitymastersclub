import type { Newsletter } from "@/lib/wordpress/types";

/**
 * Locally hosted newsletters, merged with the WordPress newsletter posts.
 * WordPress entries win when a slug exists in both places.
 */
export const localNewsletters: Newsletter[] = [
  {
    id: -4,
    slug: "vol-4",
    title: "Specialty Masters Club Newsletter",
    volume: "Vol. 4",
    date: "November 2026",
    description:
      "November ’26 issue — Ideas into Impact. A new academic year brings fresh ideas and opportunities for the Specialty Masters community.",
    pdfUrl: vol4Pdf.url,
    highlights: [
      "October Recap & Upcoming Events",
      "What's Happening in the Industry",
      "Case Competitions: Strategy & Preparation",
      "Community & Professional Growth",
    ],
  },
];
