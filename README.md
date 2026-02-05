# ☕ Artisanal Coffee & Chocolate

A premium, visually stunning website showcasing artisanal coffee and Belgian chocolate products. Built with Next.js 14, featuring advanced animations, interactive 3D effects, and Apple-inspired glassmorphism design.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Visual Design
- **Apple-style Glassmorphism** - Modern card designs with gradient mesh backgrounds and backdrop blur effects
- **Golden Color Palette** - Luxurious gold, amber, and warm tones throughout
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Breathing Effects** - Subtle pulsing animations on testimonial cards
- **Particle Backgrounds** - Dynamic particle systems for depth

### 🎯 Interactive Elements
- **3D Product Images** - Tilt-on-hover effects for product showcases
- **Interactive Roasting Slider** - Real-time visualization of coffee roast levels with:
  - Dynamic video filtering (brightness, contrast, sepia, saturation)
  - Temperature, time, color, and origin details
  - Emoji-enhanced descriptions
- **Magnetic Buttons** - Buttons that follow cursor movement
- **Custom Cursor** - Premium cursor with smooth animations
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 Responsive Design
- **Mobile-First** - Fully optimized for all screen sizes
- **Adaptive Layouts** - Grid systems that adjust from mobile to desktop
- **Touch-Friendly** - Optimized interactions for touch devices
- **Proper Padding** - Consistent spacing across all breakpoints

### 🎬 Sections

1. **Hero** - Massive animated text with parallax scrolling
2. **Marquee** - Infinite scrolling brand highlights
3. **Features** - Three-column showcase of craftsmanship (Single Origin, Artisan Roasted, Belgian Chocolate)
4. **Product Showcase** - Horizontal scrolling product cards with 3D effects
5. **Roasting Experience** - Interactive video-based roast level explorer
6. **Testimonials** - Apple-style glassmorphism cards with gradient backgrounds
7. **Newsletter** - Email subscription with gradient styling
8. **Footer** - Comprehensive footer with social links, contact info, and navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ArtisanalCoffee

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Google Fonts (Playfair Display, Montserrat, JetBrains Mono)
- **Icons**: Custom SVG icons

## 📁 Project Structure

```
ArtisanalCoffee/
├── app/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── RoastingExperience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── MagneticButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── GoldText.tsx
│   │   ├── Product3DImage.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── SteamEffect.tsx
│   │   └── CustomCursor.tsx
│   └── layout/
│       └── Navbar.tsx
├── lib/
│   ├── productImages.ts   # Product image paths
│   └── utils.ts           # Utility functions
├── public/
│   └── images/            # Product images and videos
└── hooks/
    └── useInView.ts       # Intersection Observer hook
```

## 🎨 Color Palette

```css
/* Gold Colors */
--gold-primary: #D4AF37
--gold-light: #F4E4BC
--gold-dark: #B8860B

/* Scarlet Accents */
--scarlet-primary: #C41E3A

/* Backgrounds */
--bg-primary: #0A0A0A
--bg-secondary: #141414
--bg-tertiary: #1E1E1E

/* Vibrant Accents */
--amber-400: #FBBF24
--yellow-300: #FDE047
--orange-400: #FB923C
```

## 🎭 Key Features Implementation

### Interactive Roasting Experience
- Real-time video filtering based on slider position
- Dynamic temperature, time, and origin information
- Smooth transitions between roast levels
- Colorful emoji-enhanced descriptions

### Apple Glassmorphism Cards
- Multi-layered gradient mesh backgrounds
- Backdrop blur effects
- Golden gradient borders
- Smooth hover state transitions

### Smooth Navigation
- Scroll-to-section functionality
- Smooth scrolling animations
- Active section highlighting
- Mobile-friendly navigation

## 📱 Mobile Optimizations

- Responsive padding system (`px-4 sm:px-6 md:px-12 lg:px-20`)
- Stacked button layouts on mobile
- Reduced negative margins for better mobile layout
- Proper viewport constraints (`max-width: 100vw`)
- Touch-optimized interactive elements

## 🎬 Animations

- **Fade In Up** - Entry animations for cards
- **Breathing** - Subtle scale pulsing (1.0 to 1.02)
- **Gradient Shift** - Animated gradient backgrounds
- **Parallax Scrolling** - Depth-based scroll effects
- **Magnetic Hover** - Cursor-following buttons
- **3D Tilt** - Mouse-reactive product images

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Zaphics. All rights reserved.

## 🤝 Credits

- **Design & Development**: Zaphics
- **Fonts**: Google Fonts
- **Images**: AI-generated product imagery

---

**Crafted with ❤️ and ☕**
