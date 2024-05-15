import path from "path";
import { defineConfig, presetWind, presetIcons } from "unocss";

import { TOKEN } from "./theme";

const ICON_PATH = path.resolve(__dirname, "./src/assets/icons");

export default defineConfig({
  presets: [presetWind],
  theme: {
    ...TOKEN,
    colors: {
      primary: {
        ...TOKEN.colors.orange,
        DEFAULT: TOKEN.colors.orange[500],
      },
      success: {
        ...TOKEN.colors.green,
        DEFAULT: TOKEN.colors.green[600],
      },
      warning: {
        ...TOKEN.colors.yellow,
        DEFAULT: TOKEN.colors.yellow[500],
      },
      error: {
        ...TOKEN.colors.red,
        DEFAULT: TOKEN.colors.red[600],
      },
      info: {
        ...TOKEN.colors.blue,
        DEFAULT: TOKEN.colors.blue[500],
      },
      background: TOKEN.colors.grey[150],
      foreground: TOKEN.colors.black,
      grey: TOKEN.colors.grey,
      popover: {
        DEFAULT: TOKEN.colors.white,
        foreground: TOKEN.colors.black,
      },
      accordion: {
        icon: TOKEN.colors.black,
      },
      muted: {
        DEFAULT: TOKEN.colors.grey[300],
      },
    },
  },
});
