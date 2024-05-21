/** @type { import('@storybook/react').Preview } */
import type { Preview } from '@storybook/react';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

import "../src/global.css"

import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default preview;
