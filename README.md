# UW Specialty Masters Club

I want to build a full website for the **Specialty Masters Club (SMC)** at the **UW Foster School of Business**, designed for MSBA, MSIS, MSGF, MSA, and other specialty master’s students.

---------------------------------------------------
BRAND & STYLE
---------------------------------------------------
Use official UW-inspired branding:
- Husky Purple (#4B2E83)
- UW Gold (#B7A57A)
- Light Lavender (#E8E3F0)
- White (#FFFFFF)
- Dark Gray (#1F2937)

Typography: clean modern sans-serif, Google-style icons, subtle shadows, spacious layout.  
Max width: 1200px centered.  
Mobile responsive.  
Smooth fade and slide animations.  

---------------------------------------------------
SECTION 1 — HERO / LANDING
---------------------------------------------------
Create a full-width hero with:
- Background: image of UW Foster grad students collaborating.
- Dark purple gradient overlay.
- Headline: “Specialty Masters Club (SMC)”
- Subheadline: “Empowering MSBA, MSIS, MSGF & Specialty Master’s Students at UW Foster.”
- Buttons:
    1. “Join the Club” (gold filled)
    2. “Upcoming Events” (purple outline)
- Add smooth fade-in animation and soft button hover transitions.

---------------------------------------------------
SECTION 2 — ABOUT SMC
---------------------------------------------------
Two-column section (text left, image right).

Header: “About the Specialty Masters Club”

Body text (short paragraphs):
“The Specialty Masters Club (SMC) at the UW Foster School brings together students across MSBA, MSIS, MSGF, MSA and other specialized programs.  
Our mission is to create belonging, industry exposure, and skill-building opportunities through networking, competitions, and AI-driven projects.”

Add an image of PACCAR Hall or UW students in class.

Style: purple accents, gold underline under header.

---------------------------------------------------
SECTION 3 — OUR 3-PILLAR STRATEGY
---------------------------------------------------
Create 3 horizontal cards with icons, equal spacing, subtle shadows.

1. Community & Connection  
   - Cross-program mixers & meetups  
   - Social & cultural events  
   - Peer collaboration across Foster programs  
   - Strengthening belonging at Foster  

2. Career & Competitions (Coming Soon)  
   - Integrated platform combining AI product thinking + case competition prep  
   - Skill-building tracks launching soon:
       • AI product strategy  
       • Case competition frameworks  
       • Data-driven storytelling  
       • Foster AI Hackathon preparation (Jan 30)  
       • Google & analytics competitions  
   - Add a small “COMING SOON” badge to the card.  

3. Tech & AI Projects  
   - Agentic AI experimentation & hands-on labs  
   - AI Safety Awareness collaborations  
   - SMB readiness project for FIFA 2026  
   - Real-world Foster AI applications and ROI modeling  

Use purple + white cards with gold icon accents.

---------------------------------------------------
SECTION 4 — UPCOMING EVENTS
---------------------------------------------------
Three-card event section with dates, icons, and RSVP buttons.

Sample entries:
1. **Foster AI Hackathon — Jan 30**  
2. **Google Case Challenge Prep — Feb**  
3. **SMC Networking Mixer — March**

Each card contains:
- Date
- Short 2-line description
- Location
- Button: “RSVP”

---------------------------------------------------
SECTION 5 — HOW TO JOIN SMC
---------------------------------------------------
Create an info + CTA block.

3-step horizontal layout with icons:
Step 1 — Sign up using our SMC form  
Step 2 — Join the WhatsApp community  
Step 3 — Attend meetings & events  

Add a gold button: “Join the WhatsApp Group”  
Use a purple background with white text.

---------------------------------------------------
SECTION 6 — AI PROJECTS SHOWCASE
---------------------------------------------------
Four-card AI project grid with hover elevation.

Cards:
1. AI Safety Workshop (Seattle Public Library)  
   “Community education on AI use & safety.”

2. Waymo Safety Impact Data Project  
   “Predictive modeling using real-world autonomous vehicle datasets.”

3. SMB Tech Adoption for FIFA 2026  
   “Supporting local businesses with AI & automation readiness.”

4. Agentic AI Lab  
   “Hands-on experiments with multi-agent systems & autonomous decision-making.”

Use Google-style minimal icons.

---------------------------------------------------
SECTION 7 — MEET THE LEADERSHIP TEAM
---------------------------------------------------
Grid of 4–6 profile cards:
- Headshot  
- Name  
- Program (MSBA/MSIS/MSGF/etc.)  
- Role: President / VP Events / VP Projects / etc.  
- LinkedIn icon  

Design: rounded cards, soft shadows, gold highlights.

---------------------------------------------------
SECTION 8 — GALLERY
---------------------------------------------------
Photo gallery with 6 images in a 2×3 grid.

Images include:
- SMC mixers  
- Foster AI workshops  
- Seattle Public Library AI session  
- Case competition prep  
- Hackathon sessions  

Hover effect: purple overlay + white text captions.

---------------------------------------------------
SECTION 9 — PARTNERS & COLLABORATORS
---------------------------------------------------
Horizontal logo strip for partners:
- UW Foster  
- AI Awareness Society  
- Seattle Public Library  
- Industry partners (placeholder logos)

Style: grayscale logos with purple hover tint.

---------------------------------------------------
SECTION 10 — CONTACT
---------------------------------------------------
Create a contact block with:
- Email: smc-uw@foster.edu (placeholder)
- Buttons for “Join WhatsApp” and “Connect on LinkedIn”
- Contact form with name, UW email, message fields
- Column layout with iconography

---------------------------------------------------
FOOTER
---------------------------------------------------
Footer with deep Husky Purple background:
- Navigation links: About | Events | Join | Projects | Contact
- Address: UW Foster School of Business, Seattle, WA
- Copyright © 2026 Specialty Masters Club
- Thin gold top border

---------------------------------------------------
FUNCTIONAL REQUIREMENTS
---------------------------------------------------
- Fully mobile responsive  
- Smooth scroll for navigation  
- All buttons and links must be active  
- Use subtle hover animations  
- Accessible color contrast  
- Clean code structure  

Generate the complete multi-section website with UW branding, SMC identity, and modern design.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://uw-specialitymastersclub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35d999e6-dd34-4a41-9aca-7a40da57508c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Headless WordPress articles integration

The articles pages now read published posts from a WordPress/CampusPress REST API (`_embed` enabled for author, featured media, and categories).

### Public read configuration (Vite/browser-safe)

Set these in your local `.env` (or deployment env):

```bash
VITE_WP_API_BASE_URL="https://your-campuspress-site.example"
VITE_WP_POSTS_ENDPOINT="wp/v2/posts" # optional, defaults to wp/v2/posts
```

Notes:
- `VITE_WP_API_BASE_URL` must be the real CampusPress WordPress site URL.
- Slugs are used as route IDs (`/articles/:id`), so existing slugs like `ai-battleground` remain valid.

### One-time migration from `src/data/articles.ts`

A migration script is included to upload local article images to WordPress media and create/update posts idempotently by slug.

```bash
npm run migrate:wordpress-articles -- --dry-run
```

Run with writes enabled:

```bash
npm run migrate:wordpress-articles -- --no-dry-run
```

Server-side migration environment variables (never expose these in browser code):

```bash
WP_MIGRATION_BASE_URL="https://your-campuspress-site.example"
WP_MIGRATION_USERNAME="your-wordpress-username"
WP_MIGRATION_APP_PASSWORD="your-wordpress-application-password"

# optional endpoint overrides
WP_MIGRATION_POSTS_ENDPOINT="wp/v2/posts"
WP_MIGRATION_CATEGORIES_ENDPOINT="wp/v2/categories"
WP_MIGRATION_MEDIA_ENDPOINT="wp/v2/media"
WP_MIGRATION_DRY_RUN="true"
```

Migration conventions:
- `Article.id` -> WordPress post slug
- `subtitle` -> post excerpt
- `category` -> WordPress category (auto-created if missing)
- `heroImage` -> featured media
- `ContentBlock.highlight` -> `<blockquote class="smc-highlight" data-smc-highlight="true">...</blockquote>`
- metadata (`author`, `authorAvatar`, `colabLink`) is preserved in a `data-smc-meta` content marker so it can be parsed back without requiring ACF/plugins

Before running migration, you must provide:
1. The exact CampusPress WordPress site URL.
2. Confirmation that REST API writes/application passwords (or CampusPress-approved equivalent credentials) are enabled.
3. A valid migration credential (`WP_MIGRATION_USERNAME` + `WP_MIGRATION_APP_PASSWORD` or equivalent).
