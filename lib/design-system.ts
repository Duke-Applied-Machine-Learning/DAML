/**
 * Design System Constants
 * 
 * Centralized design tokens and constants for the DAML website.
 * These values should be used consistently across all components and pages
 * to maintain visual consistency and make updates easier.
 */

/**
 * Spacing Scale (8px base)
 * Use these values for consistent spacing throughout the application
 */
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '128px',
} as const;

/**
 * Typography Scale
 * Standardized font sizes, weights, and line heights for consistent typography
 * H1: 52-64px range (using 56px as standard)
 * H2: 36-40px range (using 36px)
 * H3: 24-28px range (using 28px)
 * Body: 16-18px range
 */
export const TYPOGRAPHY = {
  h1: {
    size: '56px',
    sizeMin: '52px',
    sizeMax: '64px',
    weight: 700,
    lineHeight: 1.1,
  },
  h2: {
    size: '36px',
    sizeMin: '36px',
    sizeMax: '40px',
    weight: 700,
    lineHeight: 1.15,
  },
  h3: {
    size: '28px',
    sizeMin: '24px',
    sizeMax: '28px',
    weight: 600,
    lineHeight: 1.2,
  },
  h4: {
    size: '22px',
    weight: 600,
    lineHeight: 1.3,
  },
  bodyLg: {
    size: '18px',
    lineHeight: 1.7,
  },
  body: {
    size: '16px',
    lineHeight: 1.6,
  },
  bodySm: {
    size: '14px',
    lineHeight: 1.5,
  },
} as const;

/**
 * Section Padding
 * Standardized padding for page sections
 * Hero sections: 160px top / 120px bottom
 * Standard sections: 120px top / 80px bottom
 */
export const SECTION_PADDING = {
  sm: '80px',
  md: '120px',
  lg: '160px',
  x: '6vw',
  hero: {
    top: '160px',
    bottom: '120px',
  },
  standard: {
    top: '120px',
    bottom: '80px',
  },
} as const;

/**
 * Color Palette
 * Primary brand colors and accent colors
 * Blue is primary, Purple (#9333ea) is the unified secondary accent color
 */
export const COLORS = {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  purple: {
    400: '#a855f7',
    500: '#9333ea',
    600: '#7e22ce',
    700: '#6b21a8',
  },
  rose: {
    500: '#fb7185',
    600: '#e11d48',
  },
  teal: {
    500: '#14b8a6',
    600: '#0d9488',
  },
} as const;

/**
 * Unified Accent Color
 * Secondary accent color used throughout the site
 */
export const ACCENT_COLOR = COLORS.purple[500];

/**
 * Background Gradients
 * Standardized gradient backgrounds for sections
 */
export const BACKGROUNDS = {
  dark: 'linear-gradient(135deg, #040b1f 0%, #0b1f3d 50%, #123263 100%)',
  light: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 40%, #e8f0ff 100%)',
  partnership: 'linear-gradient(135deg, rgba(8,18,49,1) 0%, rgba(30,41,59,0.95) 50%, rgba(37,99,235,0.9) 100%)',
  hero: 'linear-gradient(135deg, #1e3a5f 0%, #2a4d7c 50%, #3b82f6 100%)',
  ctaDark: 'linear-gradient(120deg, #040c24 0%, #0b2f5c 100%)',
  ctaGradient: 'linear-gradient(135deg, #1d4ed8 0%, #9333ea 100%)',
} as const;

/**
 * Card Styles
 * Standardized card styling tokens
 * All cards use: 20px radius, 24px padding, consistent shadows
 */
export const CARD_STYLES = {
  radius: '20px',
  padding: '24px',
  shadowBase: '0 22px 60px rgba(15, 23, 42, 0.12)',
  shadowHover: '0 32px 70px rgba(15, 23, 42, 0.18)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  hoverLift: '-1.5px', // translate-y value for hover lift effect
} as const;

/**
 * Animation Timing Constants
 * Standardized durations for animations across the site
 */
export const ANIMATIONS = {
  fadeInUp: {
    duration: '400ms',
    delay: '0ms',
    offset: '20px', // slide-up distance
  },
  cardHover: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  imageZoom: {
    duration: '400ms',
    scale: '1.03', // 3% zoom on hover
  },
  chipHover: {
    duration: '200ms',
  },
  scrollFade: {
    duration: '400ms',
    threshold: 0.1, // IntersectionObserver threshold
  },
} as const;

/**
 * Grid System Constants
 * 12-column grid system with standardized gutters
 */
export const GRID = {
  columns: 12,
  gutters: {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  columnWidths: {
    '2-col': 'repeat(2, 1fr)',
    '3-col': 'repeat(3, 1fr)',
    '4-col': 'repeat(4, 1fr)',
  },
} as const;

/**
 * Section Background Types
 */
export type SectionBackground = 'light' | 'dark' | 'gradient';

/**
 * Section Padding Sizes
 */
export type SectionPadding = 'sm' | 'md' | 'lg';

