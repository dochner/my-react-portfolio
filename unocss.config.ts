import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
  shortcuts: [
    { row: "flex flex-wrap flex-row w-auto min-w-0 max-w-full" },
    { column: "flex flex-wrap flex-col h-auto min-h-0 max-h-full" },
    { "no-wrap": "flex-nowrap" },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetForms(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography({
      cssExtend: {
        "h1,h2,h3,h4,h5,h6": {
          "font-weight": "600",
        },
        "h1,h2,h3": {
          "letter-spacing": "-0.025em",
        },
        "h1,h2": {
          "line-height": "1.1",
        },
        "h3,h4,h5,h6": {
          "line-height": "1.2",
        },
        "h1": {
          "font-size": "2.25rem",
        },
        "h2": {
          "font-size": "1.875rem",
        },
        "h3": {
          "font-size": "1.5rem",
        },
      }
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
        display: [
          {
            name: "Poppins",
            weights: ["400", "500", "600", "700", "800"],
            italic: false,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
  theme: {
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "1240px",
      lg: "1440px",
      xl: "1920px",
      "2xl": "2560px",
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.8125rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      primary: {
        default: "#6366f1",
        100: "#e0e0fc",
        200: "#c1c2f9",
        300: "#a1a3f7",
        400: "#8285f4",
        500: "#6366f1",
        600: "#4f52c1",
        700: "#3b3d91",
        800: "#282960",
        900: "#141430",
      },
      secondary: {
        DEFAULT: "#a855f7",
        100: "#eeddfd",
        200: "#dcbbfc",
        300: "#cb99fa",
        400: "#b977f9",
        500: "#a855f7",
        600: "#8644c6",
        700: "#653394",
        800: "#432263",
        900: "#221131",
      },
      accent: {
        DEFAULT: "#ffc107",
        100: "#fff3cd",
        200: "#ffe69c",
        300: "#ffda6a",
        400: "#ffcd39",
        500: "#ffc107",
        600: "#cc9a06",
        700: "#997404",
        800: "#664d03",
        900: "#332701",
      },
      dark: {
        DEFAULT: "#1D1D20",
        page: "#121212",
        title: "#010D33",
      },
      positive: {
        100: "#d3f6e0",
        200: "#a8edc2",
        300: "#7ce5a3",
        400: "#51dc85",
        500: "#25d366",
        600: "#1ea952",
        700: "#167f3d",
        800: "#0f5429",
        900: "#072a14",
      },
      negative: {
        100: "#efcfce",
        200: "#df9e9d",
        300: "#cf6e6c",
        400: "#bf3d3b",
        500: "#af0d0a",
        600: "#8c0a08",
        700: "#690806",
        800: "#460504",
        900: "#230302",
      },
      info: {
        100: "#d3eafd",
        200: "#a6d5fa",
        300: "#7ac0f8",
        400: "#4dabf5",
        500: "#2196f3",
        600: "#1a78c2",
        700: "#145a92",
        800: "#0d3c61",
        900: "#071e31",
      },
      warning: {
        100: "#fff3cd",
        200: "#ffe69c",
        300: "#ffda6a",
        400: "#ffcd39",
        500: "#ffc107",
        600: "#cc9a06",
        700: "#997404",
        800: "#664d03",
        900: "#332701",
      },

      whatsapp: "#25D366",
    },
    spacing: {
      DEFAULT: "1rem",
      "0": "0px",
      none: "0px",
      auto: "auto",
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left".split(" "),
});
