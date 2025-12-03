# Red Industrial Neural - Personal Portfolio

A dark, industrial-grade showcase of intelligence and engineering — a hybrid between an AI research console, a cybersecurity operations terminal, and a modern developer's laboratory.

## 🎨 Design Philosophy

- **Industrial AI**: Sleek, dark surfaces and neural glows create a machine-learning lab atmosphere
- **Cybersecurity Edge**: Tactical red accents evoke red teaming, alert systems, and high-stakes operations
- **Precision Engineering**: Clean, grid-driven layouts optimized for clarity and technical depth
- **Atmospheric Identity**: Subtle metal/terminal inspiration without cliché "hacker theme"
- **Storytelling**: Each project presented as a case study with purpose, architecture, and impact

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.2** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11.0** - Animation library
- **PostCSS & Autoprefixer** - CSS processing

## 🎨 Color Palette

### Backgrounds
- `background`: #0A0A0B - Main page background
- `surface`: #161617 - Section backgrounds
- `card`: #1E1E20 - Card/component backgrounds

### Borders & Dividers
- `border`: #2C2C2F - Default borders

### Accents & Interactive
- `primary`: #C1121F - Main CTA buttons, active states
- `secondary`: #A60F1A - Hover states, secondary buttons
- `neural`: #FF003E - Glows, pulses, emphasis
- `steel`: #6F7278 - Inactive/disabled states

### Typography
- `textPrimary`: #E6E6E7 - Headings, main body text
- `textSecondary`: #9B9B9C - Subheadings, supporting text
- `textMuted`: #6B6B6C - Captions, timestamps, metadata

## 📁 Project Structure

```
PersonalPortfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation with active section tracking
│   │   ├── Hero.jsx         # Landing section with neural animation
│   │   ├── About.jsx        # Bio, skills matrix, values
│   │   ├── Projects.jsx     # Filterable project showcase
│   │   ├── Contact.jsx      # Contact form and methods
│   │   └── Footer.jsx       # Footer with social links
│   ├── styles/
│   │   └── index.css        # Global styles, Tailwind, custom effects
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── index.html               # HTML entry point
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies
├── SITEMAP.md              # Comprehensive site structure
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd PersonalPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Customization

All content is currently using placeholders. To customize:

### 1. Hero Section (`src/components/Hero.jsx`)
- Update headline and subheadline
- Add your role/identity statement
- Customize CTA button text

### 2. About Section (`src/components/About.jsx`)
- Fill in bio paragraph
- Add philosophy statement
- List your skills in each category
- Add experience timeline (optional)

### 3. Projects Section (`src/components/Projects.jsx`)
- Update project details:
  - Name, description, status
  - Tech stack
  - GitHub/demo links
  - Categories
- Add more projects to the array

### 4. Contact Section (`src/components/Contact.jsx`)
- Add email address
- Update social media links
- Configure form submission endpoint

### 5. Footer (`src/components/Footer.jsx`)
- Update copyright name
- Add social media URLs

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation with active section tracking
- ✅ Neural network particle animation on hero
- ✅ Project filtering by category
- ✅ Framer Motion animations throughout
- ✅ Industrial/cybersecurity aesthetic
- ✅ Contact form with validation
- ✅ Custom CSS effects (glows, metallic textures, grid overlays)
- ✅ Monospace fonts for technical feel
- ✅ Red accent color system

## 🔮 Future Enhancements

- [ ] Blog section for technical writeups
- [ ] Project detail modal/pages
- [ ] Resume/CV download
- [ ] Form backend integration
- [ ] Analytics integration
- [ ] Custom cursor effects
- [ ] WebGL background effects
- [ ] Project search functionality
- [ ] Dark/light mode toggle (optional)

## 📄 License

All rights reserved © 2025

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

---

**Built with precision. Engineered with intensity.**
