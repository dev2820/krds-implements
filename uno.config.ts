import { defineConfig, presetWind } from 'unocss';

import { TOKEN } from './theme';

export default defineConfig({
  presets: [presetWind],
  theme: {
    ...TOKEN,
    breakpoints: {
      ...TOKEN.screens,
    },
    maxWidth: {
      desktop: '1280px',
    },
    spacing: {
      ...TOKEN.spacing,
    },
    colors: {
      primary: {
        ...TOKEN.colors.primary,
        DEFAULT: TOKEN.colors.primary[50],
        hover: TOKEN.colors.primary[60],
        active: TOKEN.colors.primary[70],
        disabled: TOKEN.colors.grayscale[20],
      },
      secondary: {
        ...TOKEN.colors.secondary,
        DEFAULT: TOKEN.colors.secondary[50],
        hover: TOKEN.colors.secondary[60],
        active: TOKEN.colors.secondary[70],
        disabled: TOKEN.colors.grayscale[20],
      },
      point: {
        ...TOKEN.colors.point,
        DEFAULT: TOKEN.colors.point[50],
      },
      grayscale: {
        ...TOKEN.colors.grayscale,
        DEFAULT: TOKEN.colors.grayscale[10],
      },
      alpha: {
        ...TOKEN.colors.alpha,
      },
      danger: {
        ...TOKEN.colors.danger,
        DEFAULT: TOKEN.colors.danger[50],
      },
      warning: {
        ...TOKEN.colors.warning,
        DEFAULT: TOKEN.colors.warning[50],
      },
      success: '#008A1E',
      information: '#2768FF',
      background: {
        DEFAULT: TOKEN.colors.grayscale[0],
        layer1: TOKEN.colors.grayscale[5],
        layer2: TOKEN.colors.secondary[5],
      },
      disabled: TOKEN.colors.grayscale[20],
      border: {
        DEFAULT: TOKEN.colors.grayscale[40],
        input: TOKEN.colors.grayscale[60],
        active: TOKEN.colors.primary[50],
        invalid: TOKEN.colors.danger[50],
        danger: TOKEN.colors.danger[10],
        warning: TOKEN.colors.warning[10],
        success: TOKEN.colors.success[10],
        information: TOKEN.colors.information[10],
      },
      text: {
        disabled: TOKEN.colors.grayscale[50],
        body: TOKEN.colors.grayscale[90],
        title: TOKEN.colors.grayscale[90],
        detail: TOKEN.colors.grayscale[70],
        danger: TOKEN.colors.danger[60],
        warning: TOKEN.colors.warning[10],
        success: TOKEN.colors.success[10],
        information: TOKEN.colors.information[10],
      },
      surface: {
        danger: TOKEN.colors.danger[5],
        warning: TOKEN.colors.warning[5],
        success: TOKEN.colors.success[5],
        information: TOKEN.colors.information[5],
      },
      dimmed: TOKEN.colors.alpha[75],
    },
  },
});
