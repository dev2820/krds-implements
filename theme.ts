
const colors = {
  primary: {
    0: '#FFFFFF',
    5: '#EFF5FF',
    10: '#D3E1FB',
    20: '#A7C4F7',
    30: '#7CA6F3',
    40: '#5089EF',
    50: '#246BEB',
    60: '#1D56BC',
    70: '#16408D',
    80: '#0E2B5E',
    90: '#07152F',
    100: '#000000',
  },
  secondary: {
    0: '#FFFFFF',
    5: '#EDF1F5',
    10: '#CDD7E4',
    20: '#B4C4D6',
    30: '#99B0CB',
    40: '#2A5C96',
    50: '#003675',
    60: '#002B5E',
    70: '#002046',
    80: '#00162F',
    90: '#000B17',
    100: '#000000',
  },
  point: {
    0: '#FFFFFF',
    5: '#FDF2F3',
    10: '#FBD6D8',
    20: '#F5A3A8',
    30: '#F1747C',
    40: '#EC4651',
    50: '#E71825',
    60: '#89131E',
    70: '#8B0E16',
    80: '#5C0A0F',
    90: '#2E0507',
    100: '#000000',
  },
  grayscale: {
    0: '#FFFFFF',
    5: '#F8F8F8',
    10: '#F0F0F0',
    20: '#E4E4E4',
    30: '#D8D8D8',
    40: '#C6C6C6',
    50: '#8E8E8E',
    60: '#717171',
    70: '#555555',
    80: '#2D2D2D',
    90: '#1D1D1D',
    100: '#000000',
  },
  alpha: {
    10: '#E5E5E5',
    25: '#BFBFBF',
    50: '#808080',
    75: '#404040',
    100: '#000000'
  },
  danger: {
    0: '#FFFFFF',
    5: '#FEECF0',
    10: '#FCD4DE',
    20: '#F799B1',
    30: '#F36689',
    40: '#EF3E5E',
    50: '#EB003B',
    60: '#D50136',
    70: '#8D0023',
    80: '#5E0018',
    90: '#2F000C',
    100: '#000000',
  },
  warning: {
    0: '#FFFFFF',
    5: '#FFF8E9',
    10: '#FFEAC1',
    20: '#FFE2A7',
    30: '#FFD47C',
    40: '#FFC550',
    50: '#FFB724',
    60: '#98690A',
    70: '#66490E',
    80: '#4D370B',
    90: '#332507',
    100: '#000000',
  },
  success: {
    0: '#FFFFFF',
    5: '#EEF7F0',
    10: '#CEE9D4',
    20: '#B2DCBB',
    30: '#8CCA99',
    40: '#33A14B',
    50: '#008A1E',
    60: '#006E18',
    70: '#005312',
    80: '#00370C',
    90: '#002207',
    100: '#000000',
  },
  information: {
    0: '#FFFFFF',
    5: '#E9F0FF',
    10: '#D4E1FF',
    20: '#A9C3FF',
    30: '#7DA4FF',
    40: '#5286FF',
    50: '#2768FF',
    60: '#1F53CC',
    70: '#173E99',
    80: '#0C1F4D',
    90: '#040A1A',
    100: '#000000',
  },
} as const;

const screens = {
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

const breakpoints = {
  sm: "480.1px",
  md: "768.1px",
  lg: "992.1px",
  xl: "1280.1px",
  "2xl": "1536.1px",
} as const;

const fontFamily = {
  sans: "Pretendard, Spoqa Han Sans, Avenir, Helvetica, Arial,sans-serif",
} as const;

const fontSize = {
  "6xl": "3.75rem", // 60px
  "5xl": "3rem", // 48px
  "4xl": "2.25rem", // 36px
  "3xl": "1.875rem", // 30px
  "2xl": "1.5rem", // 24px
  xl: "1.25rem", // 20px
  lg: "1.125rem", // 18px
  md: "1rem", // 16px
  sm: "0.875rem", // 14px
  xs: "0.75rem", // 12px
} as const;

const fontWeight = {
  extrabold: "800",
  bold: "700",
  semibold: "600",
  medium: "500",
  normal: "400",
} as const;

const borderRadius = {
  none: "0rem", // 0px
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 20px
  full: "9999px",
} as const;

const animation = {
  keyframes: {
    beat: `{
        0% { transform: scale(1) }
        100% { transform: scale(1.5) }
      }`,
    pulse: `{
        0% { opacity: .5 }
        50% { opacity: 1 }
        100% { opacity: .5 }
    }`,
  },
} as const;

export const TOKEN = {
  screens,
  breakpoints,
  fontFamily,
  fontSize,
  fontWeight,
  colors,
  borderRadius,
  animation,
} as const;
