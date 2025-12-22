# Visual Assets Guide

## 📁 Recommended File Structure

```
public/
├── favicon.ico
├── og-image.png (Open Graph image for social sharing)
├── images/
│   ├── profile.jpg (optional profile photo)
│   └── logo.svg (optional custom logo)
└── projects/
    ├── ara-thumbnail.png
    ├── ara-screenshot-1.png
    ├── ara-screenshot-2.png
    ├── auralens-thumbnail.png
    ├── auralens-screenshot-1.png
    ├── c2-thumbnail.png
    └── ...
```

---

## 🎨 Image Specifications

### Open Graph Image (`og-image.png`)
- **Dimensions**: 1200 x 630 px
- **Format**: PNG or JPG
- **Purpose**: Social media preview when link is shared
- **Content suggestions**:
  - Your name/logo
  - "Red Industrial Neural" tagline
  - Dark background (#0A0A0B)
  - Red accent highlights (#C1121F)

### Favicon
- **Dimensions**: 32x32, 64x64, 128x128 px (multiple sizes)
- **Format**: ICO or PNG
- **Style**: Simple monogram or logo
- **Colors**: Red (#C1121F) on dark background

### Profile Photo (Optional)
- **Dimensions**: 400 x 400 px (square)
- **Format**: JPG or PNG
- **Style**: Professional, high contrast
- **Treatment**: Can be grayscale with red accent overlay

### Project Thumbnails
- **Dimensions**: 800 x 600 px (4:3 ratio)
- **Format**: PNG or JPG
- **Style**: 
  - Screenshot of interface/terminal
  - Architecture diagram
  - Dark theme with red accents
  - High contrast for readability

### Project Screenshots
- **Dimensions**: 1920 x 1080 px (16:9 ratio)
- **Format**: PNG for UI, JPG for photos
- **Quantity**: 2-4 per project
- **Content**:
  - Key features in action
  - Architecture diagrams
  - Code snippets (if relevant)
  - Terminal outputs

---

## 🎨 Design Guidelines

### Color Treatment
- Keep backgrounds dark (#0A0A0B - #1E1E20)
- Use red accents (#C1121F, #FF003E) sparingly for emphasis
- Add subtle metallic/steel overlays for industrial feel
- Ensure text has sufficient contrast (WCAG AA minimum)

### Typography in Images
- **Headings**: Inter Bold or similar sans-serif
- **Code/Terminal**: Fira Code or similar monospace
- **Accent text**: Red color for emphasis

### Visual Style
- **Industrial aesthetic**: Metal textures, grids, technical diagrams
- **Neural theme**: Node networks, connection lines, particle effects
- **Cybersecurity vibe**: Terminal windows, command prompts, hex patterns
- **Minimal noise**: Clean, precise, purposeful design

---

## 🛠️ Tools & Resources

### Image Creation Tools
- **Figma** - UI mockups and designs
- **Photoshop** - Photo editing and compositing
- **Canva** - Quick social media graphics
- **Excalidraw** - Architecture diagrams
- **Carbon** - Code screenshot tool (carbon.now.sh)

### Icon Resources
- **Lucide Icons** - Clean, minimal icons
- **Heroicons** - Tailwind-compatible icons
- **Font Awesome** - Comprehensive icon library
- **Simple Icons** - Brand/tech logos

### Stock Resources (if needed)
- **Unsplash** - High-quality free photos
- **Pexels** - Free stock photos
- **Subtle Patterns** - Texture overlays

---

## 🔧 Implementation

### Adding Images to Components

#### Profile Image in About Section
```jsx
// In src/components/About.jsx
<div className="mb-6">
  <img 
    src="/images/profile.jpg" 
    alt="Profile" 
    className="w-48 h-48 rounded-lg border-2 border-primary object-cover"
  />
</div>
```

#### Project Thumbnails
```jsx
// In src/components/Projects.jsx - Add to project card
<div className="mb-4 overflow-hidden rounded-lg border border-border">
  <img 
    src={`/projects/${project.id}-thumbnail.png`}
    alt={project.name}
    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
```

#### Logo in Header
```jsx
// In src/components/Header.jsx
<div className="flex items-center gap-2">
  <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" />
  <span className="text-2xl font-bold">Your Name</span>
</div>
```

---

## 🎯 Priority Asset List

### Essential (Start Here)
1. ✅ Favicon (for browser tab)
2. ✅ Open Graph image (for link sharing)
3. ✅ 3-5 project thumbnails (key projects)

### Important (Phase 2)
4. Profile photo (if you want to show your face)
5. Additional project screenshots
6. Custom logo/wordmark

### Optional (Nice to Have)
7. Background textures/patterns
8. Custom icons
9. Video demos (for projects)
10. Architecture diagrams

---

## 📐 CSS Image Treatments

### Neural Glow Effect on Images
```css
.image-glow {
  box-shadow: 0 0 30px rgba(193, 18, 31, 0.3);
  border: 1px solid rgba(193, 18, 31, 0.5);
}

.image-glow:hover {
  box-shadow: 0 0 40px rgba(193, 18, 31, 0.5);
}
```

### Metallic Overlay
```css
.metallic-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.02) 0px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

---

## 🚀 Quick Setup

1. **Create public directories**:
```bash
mkdir -p public/images public/projects
```

2. **Add placeholder images** (or use real ones):
   - Download or create assets
   - Save to appropriate directories
   - Update component references

3. **Update index.html** favicon link:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

4. **Test locally**:
```bash
npm run dev
```

---

## 📝 Notes

- All images in `public/` are served from root `/`
- Optimize images before deployment (use tools like TinyPNG, ImageOptim)
- Consider lazy loading for project images
- Use WebP format for better compression (with fallbacks)
- Keep total asset size under 5MB for fast loading

---

**Asset Status**: 🔄 Waiting for visual assets | Structure ready for implementation
