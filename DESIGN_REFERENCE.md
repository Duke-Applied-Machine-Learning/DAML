# DAML Website — Design Reference

## Brand Identity

**Organization:** Duke Applied Machine Learning (Duke AML)
**University:** Duke University
**Font:** Geist Sans (all weights) + Geist Mono (code/mono contexts)
**Logo:** `/public/logos/daml_logo.png` — used at 40×40px (nav), 32×32px (mobile nav), 28×28px (footer)

---

## Color Palette

### Primary
| Name | Hex | Role |
|------|-----|------|
| Duke Navy | `#012169` | Hero, footer, CTA anchors |
| Duke Royal Blue | `#00539B` | Links, primary buttons |
| Royal Blue Hover | `#00407A` | Button hover state |
| Text on Dark | `#F2F4F8` | All text on dark backgrounds |

### Extended Duke Palette (accent / graphic use)
| Name | Hex | Notes |
|------|-----|-------|
| Copper | `#C84E00` | **Primary accent** — kickers, card hover glow |
| Persimmon | `#E89923` | Warm secondary |
| Dandelion | `#FFD960` | |
| Piedmont | `#A1B70D` | Green |
| Eno | `#339898` | Teal |
| Magnolia | `#1D6363` | Dark teal |
| Prussian Blue | `#005587` | |
| Shale Blue | `#0577B1` | |
| Ironweed | `#993399` | |

### Light Surfaces
| Name | Hex | Usage |
|------|-----|-------|
| Hatteras | `#E2E6ED` | Section alternation, placeholder fills, hero gradient start |
| Whisper Gray | `#F3F2F1` | Default `bg-surface-base` |
| Ginger Beer | `#FCF7E5` | Warm light bg (available, not yet used) |
| Limestone | `#E5E5E5` | Dividers |

### Text / Dark Neutrals
| Name | Hex | Role |
|------|-----|------|
| Cast Iron | `#262626` | Primary body text |
| Graphite | `#666666` | Secondary text, hero subtitles on light bg |
| Granite | `#B5B5B5` | Disabled / placeholder |

### Semantic Surface Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--surface-base` | Whisper Gray `#F3F2F1` | Alternating section background |
| `--surface-duke` | Hatteras `#E2E6ED` | "What We Do" section |
| `--surface-alt` | `rgba(1,33,105,0.04)` | Very subtle navy tint |

---

## Typography

**Typeface:** Geist Sans (all body, headings, UI)

| Class | Size | Weight | Line Height | Color | Notes |
|-------|------|--------|-------------|-------|-------|
| `.h1` | clamp(42px → 72px) at 5vw | 700 | 1.1 | `rgb(15 23 42)` | Hero titles |
| `.h2` | clamp(30px → 46px) at 3.2vw | 650 | 1.15 | `rgb(15 23 42)` | Section titles |
| `.h3` | clamp(20px → 24px) at 2vw | 600 | 1.2 | `rgb(15 23 42)` | Card titles |
| `.section-heading` | clamp(28px → 44px) at 3vw | 600 | 1.2 | `rgb(15 23 42)` | Declarative section titles |
| `.body-lg` | 18px | — | 1.65 | `rgb(51 65 85)` | Hero/intro copy |
| `.body` | 16px | — | 1.6 | `rgb(51 65 85)` | Standard paragraph |
| `.meta` | 13px | 500 | — | `rgb(71 85 105)` | Labels, metadata |
| `.kicker` | 13px mobile / 14px desktop | 600 | — | **Copper `#C84E00`** | ALL CAPS, letter-spacing 0.07em |
| `.hero-sub` | 18px | — | 1.7 | Graphite (light bg) / `#F2F4F8` (dark bg) | Hero subtitle |

**On dark backgrounds** — apply `.on-dark` class: all headings/body inherit `#F2F4F8`, `.meta` becomes `rgba(255,255,255,0.75)`, `.kicker` becomes `rgba(255,255,255,0.70)`.

---

## Spacing & Layout

### Containers
| Class | Max Width | Gutters |
|-------|-----------|---------|
| `.container-content` | 1280px | 24px mobile / 48px desktop |
| `.container-wide` | 1440px | 24px mobile / 48px desktop |

### Section Padding Classes
| Class | Mobile (top/bottom) | Desktop (top/bottom) | Horizontal |
|-------|--------------------|--------------------|------------|
| `.section` | 64px | 96px | gutters |
| `.section-sm` | 48px | 48px | gutters |
| `.section-lg` | 80px | 120px | gutters |
| `.section-y` | 64px | 96px | none |
| `.section-y-lg` | 80px | 120px | none |

### Hero Padding
| Context | Top | Bottom | Min Height |
|---------|-----|--------|------------|
| Homepage | content at 18vh + 80px offset | 6rem | 105vh |
| Internal pages | 100px | 100px | — |
| Internal hero background | Hatteras `#E2E6ED` → white at 60% | | |

### Breakpoints
- **sm** 640px · **md** 768px (gutters, section padding switches) · **lg** 1024px (nav switches) · **xl** 1280px · **2xl** 1536px

---

## Background Gradients

| Context | Gradient |
|---------|----------|
| Homepage hero | `radial(30% 20%, #0d6a94→transparent)` + `radial(70% 80%, #0d4f7a→transparent)` + `linear(160deg, #0d5278, #0d4f7a)` |
| Internal page hero | `linear(180deg, #E2E6ED 0%, #ffffff 60%)` |
| CTA / Footer band | `linear(160deg, #012169, #001a4a)` |
| Brand navy gradient | `linear(135deg, #00163d, #012169, #111827)` |
| Mission statement column | `linear(135deg, #012169, #001a4a)` |

---

## Components

### Buttons
| Variant | Background | Text | Border | Height | Notes |
|---------|-----------|------|--------|--------|-------|
| `cta` | Royal Blue `#00539B` | Cream `#f0efe5` | none | 48px | Shadow: `0 6px 18px rgba(0,83,155,0.25)` |
| `cta-outline` | transparent → Navy on hover | Navy `#012169` | 1.5px Navy | 48px | Light bg contexts |
| `cta-outline-dark` | transparent → `white/20` on hover | Cream | 1px cream/60% | 48px | On dark bg |

All CTA buttons: **pill shape** (`border-radius: 9999px`), px-6, font-size 16px, weight 600.

### Cards (`.card-elevated`)
- Radius: **24px**
- Border: `1px solid rgba(15,23,42,0.08)`
- Shadow: `0 20px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)`
- **Hover:** lift `translateY(-4px)`, copper glow border `rgba(200,78,0,0.55)`, shadow `0 24px 56px rgba(200,78,0,0.2)`
- Transition: 200ms ease on transform, shadow, border-color

### Navbar
- Height: **64px**
- **Transparent state** (homepage, pre-scroll): no bg, white text/logo
- **Solid state** (scrolled or any internal page): `bg-white/95` + `backdrop-blur-sm` + subtle shadow
- Active page indicator: Hatteras `#E2E6ED` pill background on current link
- Switches to mobile hamburger + slide-in sheet at **1024px**

### Footer
- Background: `linear-gradient(160deg, #012169, #001a4a)`
- Three columns: Logo + copyright · Quick nav links · Social icons (LinkedIn, Instagram)
- Social icon hover: LinkedIn → `#0A66C2`, Instagram → gradient `#ff7a59→#c13584`

---

## Motion & Animation

| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Fade up (`.animate-fade-up`) | 450ms | `cubic-bezier(0.22,1,0.36,1)` | Opacity 0→1, Y +16px→0 |
| Stagger group (child 1–4) | 450ms | same | Delays: 50/130/210/290ms |
| Hero rotator slide in/out | 600ms | `cubic-bezier(0.2,0.9,0.2,1)` | Horizontal swipe of rotating text |
| Tech stack scroll | 30s | `linear` | Infinite left-scroll, pauses on hover |
| Link/button transitions | 180–200ms | `ease-out` | Color, bg, shadow, transform |
| Card hover | 200ms | `ease` | Transform + shadow |
| Image zoom | 300ms | `ease-in-out` | Scale 1→1.05 on hover |
| Scroll-triggered fade | — | `IntersectionObserver` | threshold 0.2, fires once |

---

## Decorative System

All decorative elements are absolutely positioned, `pointer-events-none` overlays.

| Element | Colors | Notes |
|---------|--------|-------|
| **DotGrid** | Royal Blue at 7–13% opacity | 24px repeat dot grid |
| **GeometricLines** | Royal Blue + Copper (60%) at 10% | ±45° crossing lines, 40px spacing |
| **GradientMeshOrb** | Royal Blue + Copper (50%) | Radial soft glow, sizes: 200/400/600px |
| **SlantedDivider** | Royal Blue at 20% | 1px height, skewed -15°, fades L→R |
| **Mesh SVG** (hero) | Copper `#C84E00`, 1.2px stroke | Wavy wireframe grid, opacity 0.82 |

---

## Page Structure

| Page | Hero Kicker | H1 | Background Rhythm |
|------|-------------|----|--------------------|
| Homepage | "Duke Student Organization" | "Duke Applied Machine Learning" | Dark hero → Hatteras → Whisper Gray → Navy CTA |
| Mission | "About us" | "Mission" | Light hero → White → Subtle Navy Tint → Navy CTA |
| Education | "Learning" | "Training Programs" | Light hero → Whisper Gray → White → Whisper Gray → Navy CTA |
| Projects | "Portfolio" | "Projects" | Light hero → Whisper Gray → White → Footer |
| Team | "People" | "The team" | Light hero → Whisper Gray → White → Navy CTA |
| Partner With Us | "Collaborate" | "Partner With Us" | Light hero → Whisper Gray → White → Navy → Navy CTA |

---

## Asset Inventory (`/public/logos/`)

**ML / Cloud:** PyTorch · TensorFlow · AWS · Google Cloud · Colab · Docker · NumPy · Pandas · SQL · OpenAI · Gemini
**Languages:** Python · C++ · JavaScript · R
**Tools:** Jupyter
**Platforms:** Coursera · Udemy
**Universities:** Duke · Harvard · Stanford · Yale · MIT
**Other:** JPMC · Unity
