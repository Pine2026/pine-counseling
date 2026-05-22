export const colors = {
  brand: "#2e4a3a",
  brandHover: "#1a201c",
  brandSubtle: "#e4ece5",
  bgPrimary: "#eae6dd",
  bgSecondary: "#e4ece5",
  bgTertiary: "#e1dacd",
  bgInverse: "#2e4a3a",
  textPrimary: "#1a1f1b",
  textSecondary: "#4a514b",
  textTertiary: "#8a9490",
  textOnDark: "#eae6dd",
  borderDefault: "#d9d2c5",
  borderStrong: "#2e4a3a",
  white: "#ffffff",
} as const;

export const fontFamily = {
  heading: "Space Grotesk",
  body: "DM Sans",
} as const;

export const fontSize = {
  xs: 11,
  sm: 12,
  md: 13,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 22,
  "4xl": 24,
  "5xl": 28,
  "6xl": 32,
  "7xl": 36,
  "8xl": 40,
  "9xl": 42,
  "10xl": 46,
  "11xl": 48,
  "12xl": 56,
} as const;

export const spacing = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 64, 80, 96, 120, 160, 200] as const;

export const layout = {
  contentWidth: 1120,
  maxWidth: 1440,
  gutterDesktop: 160,
  sectionPyDesktop: 100,
  sectionPyMobile: 64,
} as const;

export const radius = {
  xs: 4,
  sm: 6,
  md: 8,
  full: 100,
} as const;

export const navHeight = 72;

export const universities = [
  "Harvard",
  "Oxford",
  "MIT",
  "Sapienza Roma",
  "Amsterdam",
  "Sciences Po",
  "Edinburgh",
  "Padova",
  "KU Leuven",
  "TU Munich",
  "Coimbra Group",
] as const;

export const services = [
  {
    number: "01",
    title: "Personalised Consulting",
    body: "General advice yields general results. We provide a strategic framework for international success.",
    cta: "Discover Your Strategy",
  },
  {
    number: "02",
    title: "Application Process",
    body: "We develop application strategies aligned with the expectations of Ivy League, Russell Group and Coimbra Group.",
    cta: null,
  },
  {
    number: "03",
    title: "Interview Coaching",
    body: "We ensure you present yourself at your best in academic interviews — the defining stage of competitive application processes.",
    cta: "Meet Us",
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Individual Strategy",
    body: "We set aside standard templates. Every roadmap is uniquely designed according to your academic profile and goals.",
  },
  {
    number: "02",
    title: "Long-Term Perspective",
    body: "Many consultancies focus only on getting accepted. We look beyond that — matching students with programmes where they will truly thrive.",
  },
  {
    number: "03",
    title: "Full Transparency",
    body: "Facts, not promises. We maintain honest, open communication with families and students at every stage of the process.",
  },
] as const;

export const ecosystemCards = [
  {
    title: "Right Match",
    body: "Programmes are chosen for fit, not just acceptance.",
  },
  {
    title: "Global Reach",
    body: "Connections to leading international universities.",
  },
  {
    title: "Direct Access",
    body: "Secure messaging and instant feedback.",
  },
  {
    title: "Centralised Tracking",
    body: "Monitor all documents and deadlines in real time.",
  },
  {
    title: "Ongoing Support",
    body: "We're with you from the first assessment to the final application.",
  },
  {
    title: "Multilingual Support",
    body: "Consultancy is offered in both Turkish and English.",
  },
] as const;
