# Redline Tuning — Style Guide

## 1. Brand Principles

### Core Values
- **Minimalist**: Clean, uncluttered design that focuses attention on key conversion points
- **Performant**: Fast loading, optimized for mobile-first experience
- **Precision Engineering**: Every element serves a purpose, reflecting automotive precision
- **Trust & Authority**: Professional appearance that builds confidence in premium services

### Brand Personality
- Premium but approachable
- Technical expertise with clear communication  
- Reliable and meticulous attention to detail
- Performance-focused with aesthetic appreciation

## 2. Color Tokens (Tailwind Configuration)

### Primary Palette (Redline Brand)
```css
/* Brand Colors */
--brand-red: #ed1f42;         /* Primary brand red (R:237 G:31 B:66) */
--brand-off-black: #0f0f10;   /* Off-black (R:15 G:15 B:16) */
--brand-off-white: #fcedf3;   /* Off-white (R:252 G:237 B:243) */

/* Background Colors */
--bg-primary: #0f0f10;        /* Brand off-black */
--bg-surface: #1a1a1c;        /* Slightly lighter than primary */
--bg-elevated: #242426;       /* Elevated elements */

/* Accent Colors */
--accent-red: #ed1f42;        /* Brand red */
--accent-red-700: #c91a37;    /* Darker red for hover states */
--accent-red-900: #a1152c;    /* Darkest red for pressed states */

/* Neutral Colors */
--off-white: #fcedf3;         /* Brand off-white for text */
--gray-300: #D1D5DB;         /* Light gray text */
--gray-500: #6B7280;         /* Medium gray text */
--gray-700: #374151;         /* Dark gray text */

/* Utility Colors */
--border-color: #2a2a2c;     /* Lighter borders for better contrast */
--success: #10B981;          /* Success states */
--warning: #F59E0B;          /* Warning states */
--error: #EF4444;            /* Error states */
```

### Tailwind Custom Colors
```javascript
// tailwind.config.js
colors: {
  background: {
    primary: '#0f0f10',      // Brand off-black
    surface: '#1a1a1c',      // Slightly lighter
    elevated: '#242426'      // Elevated elements
  },
  accent: {
    red: {
      DEFAULT: '#ed1f42',     // Brand red
      700: '#c91a37',         // Hover state
      900: '#a1152c'          // Pressed state
    }
  },
  brand: {
    'off-white': '#fcedf3',   // Brand off-white
    'off-black': '#0f0f10',   // Brand off-black
    red: '#ed1f42'            // Brand red
  },
  border: {
    DEFAULT: '#2a2a2c'       // Better contrast borders
  }
}
```

## 3. Typography

### Font Stack
```css
/* Primary Font - Inter */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Headings Font - Urbanist (Alternative) */
font-family: 'Urbanist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Type Scale & Hierarchy
```css
/* Headings */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* 60px - H1 Hero */
.text-5xl { font-size: 3rem; line-height: 1; }        /* 48px - H1 Section */
.text-4xl { font-size: 2.25rem; line-height: 1.1; }   /* 36px - H2 */
.text-3xl { font-size: 1.875rem; line-height: 1.2; }  /* 30px - H3 */
.text-2xl { font-size: 1.5rem; line-height: 1.3; }    /* 24px - H4 */
.text-xl { font-size: 1.25rem; line-height: 1.4; }    /* 20px - H5 */

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.5; }   /* 18px - Large body */
.text-base { font-size: 1rem; line-height: 1.5; }     /* 16px - Normal body */
.text-sm { font-size: 0.875rem; line-height: 1.4; }   /* 14px - Small text */
.text-xs { font-size: 0.75rem; line-height: 1.3; }    /* 12px - Caption */
```

### Font Weights & Usage
- **font-bold (700)**: Headings, primary CTAs, important labels
- **font-semibold (600)**: Secondary headings, subheadings
- **font-medium (500)**: Button text, form labels, emphasized body text
- **font-normal (400)**: Regular body text, descriptions
- **font-light (300)**: Large display text (sparingly used)

### Letter Spacing
```css
.tracking-tight: -0.025em;    /* Headings */
.tracking-normal: 0em;        /* Body text */
.tracking-wide: 0.025em;      /* Button text, labels */
```

## 4. Spacing & Layout

### Spacing Scale (8px Baseline)
```css
/* Tailwind Spacing Units */
.space-1 { margin/padding: 0.25rem; }  /* 4px */
.space-2 { margin/padding: 0.5rem; }   /* 8px */
.space-3 { margin/padding: 0.75rem; }  /* 12px */
.space-4 { margin/padding: 1rem; }     /* 16px */
.space-6 { margin/padding: 1.5rem; }   /* 24px */
.space-8 { margin/padding: 2rem; }     /* 32px */
.space-12 { margin/padding: 3rem; }    /* 48px */
.space-16 { margin/padding: 4rem; }    /* 64px */
.space-24 { margin/padding: 6rem; }    /* 96px */
```

### Layout Containers
```css
/* Max Width Containers */
.max-w-7xl { max-width: 80rem; }      /* 1280px - Full width */
.max-w-6xl { max-width: 72rem; }      /* 1152px - Content width */
.max-w-4xl { max-width: 56rem; }      /* 896px - Text content */
.max-w-2xl { max-width: 42rem; }      /* 672px - Form width */
```

### Section Padding
```css
/* Desktop */
.section-padding-desktop: padding-top: 6rem; padding-bottom: 6rem;

/* Tablet */
.section-padding-tablet: padding-top: 4rem; padding-bottom: 4rem;

/* Mobile */
.section-padding-mobile: padding-top: 3rem; padding-bottom: 3rem;
```

## 5. Component Styles

### Button Components
```css
/* Primary Button */
.btn-primary {
  @apply bg-accent-red hover:bg-accent-red-700 text-white font-semibold;
  @apply px-8 py-4 rounded-lg transition-all duration-200;
  @apply hover:transform hover:-translate-y-0.5 hover:shadow-lg;
  @apply focus:ring-2 focus:ring-accent-red focus:ring-opacity-50;
}

/* Secondary Button */
.btn-secondary {
  @apply border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white;
  @apply px-8 py-4 rounded-lg font-semibold transition-all duration-200;
  @apply hover:transform hover:-translate-y-0.5;
}

/* Ghost Button */
.btn-ghost {
  @apply text-gray-300 hover:text-white font-medium;
  @apply px-6 py-3 rounded-lg transition-colors duration-200;
  @apply hover:bg-white hover:bg-opacity-5;
}
```

### Card Components
```css
.card {
  @apply bg-background-surface rounded-2xl p-8;
  @apply border border-border shadow-lg;
  @apply hover:transform hover:-translate-y-1 transition-all duration-300;
}

.card-elevated {
  @apply bg-background-elevated rounded-2xl p-8;
  @apply shadow-2xl border border-border;
}
```

### Form Elements
```css
/* Input Fields */
.input {
  @apply w-full px-4 py-3 bg-background-surface border border-border rounded-lg;
  @apply text-white placeholder-gray-500 focus:border-accent-red;
  @apply focus:ring-2 focus:ring-accent-red focus:ring-opacity-20;
  @apply transition-all duration-200;
}

/* Input Error State */
.input-error {
  @apply border-error focus:border-error focus:ring-error;
}

/* Label */
.label {
  @apply block text-sm font-medium text-gray-300 mb-2;
}

/* Error Message */
.error-message {
  @apply text-error text-sm mt-1 font-medium;
}
```

### Badge Components
```css
.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold;
}

.badge-success {
  @apply bg-success bg-opacity-20 text-success;
}

.badge-accent {
  @apply bg-accent-red bg-opacity-20 text-accent-red;
}
```

## 6. Interactive States

### Hover Effects
```css
/* Elevation Hover */
.hover-elevate {
  @apply hover:transform hover:-translate-y-1 hover:shadow-lg;
  @apply transition-all duration-200 ease-out;
}

/* Glow Hover */
.hover-glow {
  @apply hover:shadow-lg hover:shadow-accent-red/25;
  @apply transition-shadow duration-300;
}

/* Scale Hover */
.hover-scale {
  @apply hover:scale-105 transition-transform duration-200;
}
```

### Focus States
```css
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-accent-red;
  @apply focus:ring-opacity-50 focus:ring-offset-2;
  @apply focus:ring-offset-background-primary;
}
```

### Disabled States
```css
.disabled {
  @apply opacity-50 cursor-not-allowed;
  @apply hover:transform-none hover:shadow-none;
}
```

## 7. Motion & Animation

### Transition Durations
```css
.duration-fast: 150ms;     /* Quick feedback */
.duration-normal: 200ms;   /* Standard interactions */
.duration-slow: 300ms;     /* Smooth transitions */
.duration-slower: 500ms;   /* Page transitions */
```

### Easing Functions
```css
.ease-out: cubic-bezier(0, 0, 0.2, 1);        /* Standard easing */
.ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);   /* Smooth both ways */
.ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Subtle bounce */
```

### Common Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger Animation */
.stagger-children > * {
  animation: fadeInUp 0.5s ease-out;
  animation-fill-mode: both;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

## 8. Imagery Guidelines

### Photography Style
- **Lighting**: High contrast, dramatic lighting that emphasizes details
- **Composition**: Clean, uncluttered backgrounds with focus on the car
- **Color Grading**: Slightly desaturated with enhanced reds to match brand
- **Before/After**: Consistent lighting and angles for comparison shots

### Image Specifications
```css
/* Hero Images */
.hero-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  filter: brightness(0.7) contrast(1.1);
}

/* Gallery Images */
.gallery-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 1rem;
}

/* Before/After Slider */
.comparison-image {
  aspect-ratio: 16/10;
  object-fit: cover;
}
```

### Image Optimization
- WebP format with JPEG fallback
- Responsive images with multiple sizes
- Lazy loading for below-fold content
- Proper alt text for accessibility

## 9. Background Styling

### Background Styles

#### Gradient Background
```css
.gradient-background {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(237, 31, 66, 0.15),
    transparent 50%
  ),
  radial-gradient(
    ellipse 60% 80% at 80% 120%,
    rgba(237, 31, 66, 0.1),
    transparent 50%
  ),
  #0f0f10;
}
```

#### Carbon Fiber Background
```css
.carbon-fiber-bg {
  background: url('/images/bg.jpg') center/cover,
              radial-gradient(
                ellipse 80% 50% at 50% -20%,
                rgba(237, 31, 66, 0.2),
                transparent 50%
              ),
              #0f0f10;
  background-blend-mode: multiply, normal, normal;
}
```

**Usage**: Apply carbon fiber background to premium sections like Services to enhance the automotive feel while maintaining readability with the red accent overlay.

## 10. Accessibility & Contrast

### Color Contrast Ratios
- **Normal Text (16px)**: Minimum 4.5:1 contrast ratio
- **Large Text (18px+ or bold 14px+)**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 for borders and focus indicators

### Contrast Validation
```css
/* High Contrast Combinations */
.text-white on .bg-background-primary    /* 21:1 ratio ✓ */
.text-gray-300 on .bg-background-primary /* 7.2:1 ratio ✓ */
.text-accent-red on .bg-background-primary /* 4.8:1 ratio ✓ */
.text-white on .bg-accent-red            /* 5.1:1 ratio ✓ */
```

### Focus Indicators
```css
.focus-visible {
  outline: 2px solid #EF233C;
  outline-offset: 2px;
}
```

## 11. Content Guidelines (Romanian Microcopy)

### Tone of Voice
- **Direct**: Clear, action-oriented language
- **Professional**: Technical expertise without jargon
- **Confident**: Assertive about quality and results
- **Helpful**: Focus on customer benefits

### Heading Patterns
```
H1: [Service] — [Benefit] în [Location]
Example: "Redline Tuning — Performance & Care în București"

H2: [Action Verb] + [Specific Benefit]
Example: "Păstrează-ți mașina ca nouă"

H3: [Feature] pentru [Target Audience]
Example: "Ceramic Coating pentru protecție maximă"
```

### CTA Language
- **Primary**: "Cere ofertă", "Rezervă acum", "Contactează-ne"
- **Secondary**: "Află mai mult", "Vezi galeria", "Sună acum"
- **Urgency**: "Programează-te azi", "Ofertă limitată"

### Form Labels (Romanian)
- Nume și prenume *
- Număr de telefon *
- Adresa de email
- Marca, model și anul mașinii
- Alege pachetul dorit *
- Preferi să te contactăm prin
- Intervalul preferat pentru contact
- Observații suplimentare
- Sunt de acord cu politica de confidențialitate *

### Error Messages
- "Te rugăm să completezi acest câmp"
- "Numărul de telefon nu este valid"
- "Adresa de email nu este validă"
- "Te rugăm să accepți termenii și condițiile"

### Success Messages
- "Mulțumim! Te vom contacta în curând."
- "Cererea ta a fost trimisă cu succes."
- "Un specialist te va suna în maxim 2 ore."

## 12. Responsive Design Breakpoints

### Breakpoint System
```css
/* Mobile First Approach */
.sm   /* 640px and up */
.md   /* 768px and up */
.lg   /* 1024px and up */
.xl   /* 1280px and up */
.2xl  /* 1536px and up */
```

### Component Responsiveness
```css
/* Typography Scale Responsive */
.responsive-heading {
  @apply text-4xl md:text-5xl lg:text-6xl;
  @apply leading-tight md:leading-tight lg:leading-none;
}

/* Spacing Responsive */
.responsive-padding {
  @apply px-4 md:px-8 lg:px-12;
  @apply py-12 md:py-16 lg:py-24;
}

/* Grid Responsive */
.responsive-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  @apply gap-6 md:gap-8 lg:gap-12;
}
```
