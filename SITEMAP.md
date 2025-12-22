# Portfolio Sitemap — "Red Industrial Neural"

## Design Philosophy
Dark industrial-grade AI research console meets cybersecurity operations terminal. Heavy dark palette with tactical red accents. Precision engineering aesthetic with atmospheric depth.

---

## Site Structure

### 1. **Navigation Bar** (Global - Sticky)
**Component:** `Header.jsx`
**Position:** Fixed top, semi-transparent with backdrop blur
**Elements:**
- Logo/Wordmark (left)
- Navigation Links (right)
  - Home
  - About
  - Projects
  - Contact
- Mobile hamburger menu (< 768px)

**Interactions:**
- Hover: Red underline animation on nav items
- Scroll: Background opacity increases after scroll threshold
- Active state: Red accent on current section

---

### 2. **Hero Section** (Landing Page)
**Component:** `Hero.jsx`
**Theme:** Neural AI laboratory entrance
**Layout:** Full viewport height, centered content

**Elements:**
- Main headline: ""
- Subheadline/Role: ""
- Brief identity statement: ""
- Animated neural pulse effect in background
- CTA Buttons:
  - Primary: "View Projects" → scrolls to projects
  - Secondary: "Get In Touch" → scrolls to contact
- Subtle particle/grid overlay effect

**Visual Details:**
- Large typography with red accent on key words
- Pulsing red glow effects
- Metallic texture overlay on background
- Smooth fade-in animations on load

---

### 3. **About Section**
**Component:** `About.jsx`
**Theme:** Technical dossier / system briefing
**Layout:** Two-column layout (desktop), stacked (mobile)

**Elements:**

#### Left Column:
- Profile image/avatar placeholder (optional)
- Name and title
- Bio paragraph: ""
- Philosophy statement: ""
- Key principles/values list:
  - Privacy-first engineering
  - Local-inference AI systems
  - Offensive security mindset
  - [Add more]

#### Right Column:
- **Skills Matrix** (organized by category)
  - **AI/ML Systems:**
    - 
  - **Cybersecurity:**
    - 
  - **Development:**
    - 
  - **Tools & Platforms:**
    - 

- **Experience Timeline** (optional)
  - Position/Role
  - Company/Project
  - Duration
  - Key contributions

**Visual Details:**
- Skills displayed as industrial tags/chips with red borders
- Hover effect: Glow/pulse on skill items
- Section dividers with red accent lines
- Monospace font for technical details

---

### 4. **Projects Section**
**Component:** `Projects.jsx`
**Theme:** Intelligence-grade case files
**Layout:** Grid layout with filter options

**Filter Bar:**
- All Projects
- AI/ML
- Cybersecurity
- Tools & Infrastructure
- Open Source

**Project Card Structure:**
**Component:** `ProjectCard.jsx`

**Elements per project:**
- Status indicator: [Active / Archived / In Development]
- Project thumbnail/icon
- Project name
- Category tags
- Brief description (2-3 lines)
- Tech stack icons
- "View Details" button

**Hover State:**
- Card lifts with shadow
- Red border glow
- Slightly increased brightness

**Project Detail Modal/Page:**
**Component:** `ProjectDetail.jsx`

**Structure:**
- Project header
  - Name
  - Status badge
  - Links (GitHub, Demo, Documentation)
- Mission statement: ""
- Problem & solution overview: ""
- Architecture diagram placeholder
- Technical implementation details: ""
- Key features list:
  - 
- Tech stack breakdown
- Challenges & learnings: ""
- Results/Impact: ""
- Screenshots/media gallery
- Related projects (if applicable)

**Featured Projects (placeholders):**

1. **A.R.A. (AI Research Assistant)**
   - Category: AI/ML
   - Status: Active
   - Description: ""
   - Tech Stack: 
   - Key Features:

2. **Auralens**
   - Category: AI/ML, Audio Processing
   - Status: 
   - Description: ""
   - Tech Stack:
   - Key Features:

3. **C2 Server Infrastructure**
   - Category: Cybersecurity, Infrastructure
   - Status:
   - Description: ""
   - Tech Stack:
   - Key Features:

4. **[Project 4]**
   - Category:
   - Status:
   - Description: ""
   - Tech Stack:
   - Key Features:

5. **[Project 5]**
   - Category:
   - Status:
   - Description: ""
   - Tech Stack:
   - Key Features:

---

### 5. **Contact Section**
**Component:** `Contact.jsx`
**Theme:** Secure communication terminal
**Layout:** Centered, narrow column

**Elements:**
- Section headline: ""
- Optional message: ""
- Contact options:
  - Email: 
  - GitHub: 
  - LinkedIn: 
  - Twitter/X: 
  - [Other platforms]

**Contact Form (optional):**
- Name field
- Email field
- Message textarea
- Submit button: "Transmit Message"
- Form validation with red error states
- Success message after submission

**Visual Details:**
- Industrial terminal aesthetic
- Red accent borders on form fields
- Glow effect on focus
- Monospace font for input fields
- Animated "typing" cursor effect (optional)

---

### 6. **Footer**
**Component:** `Footer.jsx`
**Position:** Bottom of page

**Elements:**
- Copyright notice: "© 2025 [Your Name]. All rights reserved."
- Quick links:
  - GitHub
  - LinkedIn
  - Email
- Optional: "Built with React + Vite + Tailwind" credit
- Optional: Privacy statement or note

**Visual Details:**
- Dark background with subtle border-top
- Small text in textMuted color
- Social icons with red hover state

---

## Component Hierarchy

```
App.jsx
├── Header.jsx
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
├── Hero.jsx
│   ├── AnimatedBackground
│   └── CTAButtons
├── About.jsx
│   ├── BioSection
│   ├── SkillsMatrix
│   └── Timeline (optional)
├── Projects.jsx
│   ├── FilterBar
│   ├── ProjectGrid
│   │   └── ProjectCard.jsx (multiple)
│   └── ProjectDetail.jsx (modal/separate)
├── Contact.jsx
│   ├── ContactInfo
│   └── ContactForm (optional)
└── Footer.jsx
    ├── SocialLinks
    └── Copyright
```

---

## Page Flow & User Journey

1. **Entry:** User lands on Hero section
   - Immediate atmospheric impact with neural background
   - Clear CTA to explore projects or contact

2. **Scroll:** Smooth scroll through sections
   - About section provides context on who you are
   - Projects section showcases work as case files
   - Contact section provides clear next steps

3. **Interaction:** Users can:
   - Filter projects by category
   - Click project cards to view details
   - Submit contact form or click direct links
   - Navigate via fixed header

4. **Exit:** User leaves with clear understanding of:
   - Your technical identity
   - Your core projects and capabilities
   - How to reach you

---

## Design Patterns & Interactions

### Hover Effects
- Navigation items: Red underline slide-in
- Project cards: Lift + red border glow
- Buttons: Brightness increase + subtle scale
- Skills chips: Red glow pulse
- Social icons: Color shift to primary red

### Transitions
- Section entry: Fade-in + slide-up (staggered)
- Project detail: Modal slide-in from right
- Page scroll: Smooth scroll behavior
- Filter change: Fade-out/fade-in grid items

### Loading States
- Initial page load: Hero fade-in sequence
- Project filtering: Skeleton cards during transition
- Form submission: Loading spinner on button

### Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (adjusted grid, some stacking)
- Desktop: > 1024px (full layout, multi-column)

---

## Technical Implementation Notes

### State Management
- Current section tracker for active nav state
- Project filter state
- Mobile menu open/close state
- Modal/detail view state
- Contact form state

### Performance
- Lazy load project images
- Intersection Observer for scroll animations
- Debounced scroll events
- Optimized bundle with code splitting

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states with visible indicators
- Alt text on images
- Proper heading hierarchy

### SEO
- Meta tags in index.html
- Open Graph tags for social sharing
- Semantic structure
- Descriptive page title

---

## Color Usage Guide

### Backgrounds
- `background` (#0A0A0B): Main page background
- `surface` (#161617): Section backgrounds
- `card` (#1E1E20): Card/component backgrounds

### Borders & Dividers
- `border` (#2C2C2F): Default borders and dividers

### Accents & Interactive
- `primary` (#C1121F): Main CTA buttons, active states
- `secondary` (#A60F1A): Hover states, secondary buttons
- `neural` (#FF003E): Glows, pulses, emphasis
- `steel` (#6F7278): Inactive/disabled states

### Typography
- `textPrimary` (#E6E6E7): Headings, main body text
- `textSecondary` (#9B9B9C): Subheadings, supporting text
- `textMuted` (#6B6B6C): Captions, timestamps, metadata

---

## Typography System

### Fonts
- **Sans Serif:** Inter (primary UI font)
- **Monospace:** Fira Code (code, technical details, terminal aesthetic)

### Scale
- **H1 (Hero):** 4xl-6xl, font-bold
- **H2 (Section titles):** 3xl-4xl, font-bold
- **H3 (Subsections):** 2xl-3xl, font-semibold
- **Body:** base-lg, font-normal
- **Small/Caption:** sm-xs, font-light

---

## Animation Library

### Framer Motion Variants
- `fadeIn`: Opacity 0 → 1
- `slideUp`: TranslateY(20px) → 0 with fade
- `staggerContainer`: Parent for staggered children
- `pulseGlow`: Continuous subtle scale + opacity pulse
- `hoverLift`: Y-axis lift on hover

---

## Asset Placeholders

### Images Needed
- Profile photo/avatar (optional)
- Project screenshots (multiple per project)
- Project icons/logos
- Architecture diagrams
- Background textures/patterns

### Icons
- Social media icons (GitHub, LinkedIn, etc.)
- Tech stack icons (React, Python, Docker, etc.)
- Status indicators (active, archived)
- Navigation icons (hamburger, close)

---

## Future Enhancements (Optional)

- [ ] Blog section for technical writeups
- [ ] Dark/light mode toggle (though dark is core to brand)
- [ ] Resume/CV download button
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Custom cursor with red trail effect
- [ ] Sound effects on interactions (subtle)
- [ ] WebGL background effects
- [ ] Project search functionality
- [ ] View counter per project

---

**End of Sitemap**
