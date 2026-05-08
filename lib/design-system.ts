/**
 * Design System Constants — Duke Brand Aligned
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

export const TYPOGRAPHY = {
  h1: { size: '56px', sizeMin: '42px', sizeMax: '72px', weight: 700, lineHeight: 1.1 },
  h2: { size: '36px', sizeMin: '30px', sizeMax: '46px', weight: 650, lineHeight: 1.15 },
  h3: { size: '24px', sizeMin: '20px', sizeMax: '24px', weight: 600, lineHeight: 1.2 },
  h4: { size: '20px', weight: 600, lineHeight: 1.3 },
  bodyLg: { size: '18px', lineHeight: 1.65 },
  body: { size: '16px', lineHeight: 1.6 },
  bodySm: { size: '14px', lineHeight: 1.5 },
} as const;

export const SECTION_PADDING = {
  sm: '64px',
  md: '96px',
  lg: '120px',
  x: '48px',
  hero: { top: '120px', bottom: '100px' },
  standard: { top: '96px', bottom: '96px' },
} as const;

/** Official Duke University Brand Colors */
export const COLORS = {
  // Primary
  navy: '#012169',       // Duke Navy — hero, footer, CTA anchors
  royal: '#00539B',      // Duke Royal Blue — links, primary actions
  royalHover: '#00407A', // Darker royal for hover states

  // Extended Palette — accents and graphic use
  copper: '#C84E00',     // Duke Copper — accent highlights, card hover glow
  persimmon: '#E89923',  // Duke Persimmon — warm secondary
  dandelion: '#FFD960',  // Duke Dandelion
  piedmont: '#A1B70D',   // Duke Piedmont (green)
  eno: '#339898',        // Duke Eno (teal)
  magnolia: '#1D6363',   // Duke Magnolia (dark teal)
  prussianBlue: '#005587',
  shaleBlue: '#0577B1',
  ironweed: '#993399',

  // Light Surfaces
  hatteras: '#E2E6ED',   // Duke Hatteras — subtle blue-tinted section bg
  whisperGray: '#F3F2F1',// Duke Whisper Gray — lightest section bg
  gingerBeer: '#FCF7E5', // Duke Ginger Beer — warm light bg
  dogwood: '#988675',
  shackleford: '#DAD0C6',

  // Text / Dark
  castIron: '#262626',   // Duke Cast Iron — primary dark text
  graphite: '#666666',   // Duke Graphite — secondary text
  granite: '#B5B5B5',    // Duke Granite — disabled/placeholder
  limestone: '#E5E5E5',  // Duke Limestone — dividers
} as const;

export const ACCENT_COLOR = COLORS.copper;

export const BACKGROUNDS = {
  heroHome: 'linear-gradient(160deg, #0d5278 0%, #0d4f7a 55%, #111827 100%)',
  heroInternal: `linear-gradient(180deg, ${COLORS.hatteras} 0%, #ffffff 60%)`,
  ctaDark: `linear-gradient(160deg, ${COLORS.navy}, #001a4a)`,
  sectionLight: '#ffffff',
  sectionAlt: COLORS.whisperGray,
  sectionDuke: COLORS.hatteras,
} as const;

export const CARD_STYLES = {
  radius: '1.5rem',
  padding: '24px',
  shadow: '0 20px 40px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)',
  shadowHover: '0 28px 56px rgba(15, 23, 42, 0.12), 0 8px 20px rgba(15, 23, 42, 0.06)',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  hoverLift: '-4px',
} as const;

export const ANIMATIONS = {
  fadeInUp: { duration: '450ms', delay: '50ms', offset: '16px' },
  cardHover: { duration: '200ms', easing: 'ease' },
  imageZoom: { duration: '300ms', scale: '1.05' },
  transition: { duration: '200ms', easing: 'ease-out' },
} as const;

export const GRID = {
  columns: 12,
  gutters: { sm: '16px', md: '24px', lg: '32px', xl: '48px' },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
} as const;

export type SectionBackground = 'light' | 'dark' | 'gradient';
export type SectionPadding = 'sm' | 'md' | 'lg';
