/** @type { import('@storybook/react').Preview } */
import type { Preview } from '@storybook/react';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

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
        <link></link>
        <Story />
      </div>
    ),
  ],
};

export default preview;
