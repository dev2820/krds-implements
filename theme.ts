const black = "#000000";
const white = "#ffffff";
const whiteAlpha = {
  50: "#ffffff0a",
  100: "#ffffff0f",
  200: "#ffffff14",
  300: "#ffffff29",
  400: "#ffffff3d",
  500: "#ffffff5c",
  600: "#ffffff7a",
  700: "#ffffffa3",
  800: "#ffffffcc",
  900: "#ffffffeb",
} as const;

const blackAlpha = {
  50: "#0000000a",
  100: "#0000000f",
  200: "#00000014",
  300: "#00000029",
  400: "#0000003d",
  500: "#0000005c",
  600: "#0000007a",
  700: "#000000a3",
  800: "#000000cc",
  900: "#000000eb",
} as const;

const grey = {
  50: "#fafafa",
  100: "#f0f0f0",
  150: "#e5e5e5",
  200: "#d8d8d8",
  300: "#cccccc",
  400: "#b0b0b0",
  500: "#989898",
  600: "#838383",
  700: "#606060",
  800: "#404040",
  900: "#262626",
} as const;

const red = {
  50: "#fff5f5",
  100: "#fed7d7",
  200: "#feb2b2",
  300: "#fc8181",
  400: "#f56565",
  500: "#e53e3e",
  600: "#c53030",
  700: "#9b2c2c",
  800: "#822727",
  900: "#63171b",
} as const;

const orange = {
  50: "#fffaf0",
  100: "#fff2e4",
  200: "#ffe7d4",
  300: "#ffc98f",
  400: "#fea775",
  500: "#fe7e43",
  600: "#d97000",
  700: "#9c4221",
  800: "#7b341e",
  900: "#652b19",
} as const;

const yellow = {
  50: "#fffff0",
  100: "#fefcbf",
  200: "#faf089",
  300: "#f6e05e",
  400: "#ecc94b",
  500: "#f7b500",
  600: "#b7791f",
  700: "#975a16",
  800: "#744210",
  900: "#5f370e",
} as const;

const green = {
  50: "#f0fff4",
  100: "#c6f6d5",
  200: "#9ae6b4",
  300: "#68d391",
  400: "#48bb78",
  500: "#38a169",
  600: "#25855a",
  700: "#276749",
  800: "#005246",
  900: "#1c4532",
} as const;

const teal = {
  50: "#e6fffa",
  100: "#b2f5ea",
  200: "#81e6d9",
  300: "#4fd1c5",
  400: "#38b2ac",
  500: "#319795",
  600: "#2c7a7b",
  700: "#285e61",
  800: "#234e52",
  900: "#1d4044",
} as const;

const blue = {
  50: "#ebf8ff",
  100: "#bee3f8",
  200: "#90cdf4",
  300: "#63b3ed",
  400: "#4299e1",
  500: "#0088ff",
  600: "#2b6cb0",
  700: "#2c5282",
  800: "#2a4365",
  900: "#09162d",
} as const;

const cyan = {
  50: "#edfdfd",
  100: "#c4f1f9",
  200: "#9decf9",
  300: "#76e4f7",
  400: "#0bc5ea",
  500: "#00b5d8",
  600: "#00a3c4",
  700: "#0987a0",
  800: "#086f83",
  900: "#065666",
} as const;

const purple = {
  50: "#faf5ff",
  100: "#e9d8fd",
  200: "#d6bcfa",
  300: "#b794f4",
  400: "#9f7aea",
  500: "#805ad5",
  600: "#6b46c1",
  700: "#553c9a",
  800: "#44337a",
  900: "#322659",
} as const;

const pink = {
  50: "#fff5f7",
  100: "#fed7e2",
  200: "#fbb6ce",
  300: "#f687b3",
  400: "#ed64a6",
  500: "#d53f8c",
  600: "#b83280",
  700: "#97266d",
  800: "#702459",
  900: "#521b41",
} as const;

const colors = {
  black,
  white,
  whiteAlpha,
  blackAlpha,
  grey,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  cyan,
  purple,
  pink,
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
