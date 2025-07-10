// .storybook/preview.ts
import type { Preview } from '@storybook/nextjs-vite'

// 1. IMPORT YOUR GLOBAL CSS FILE
import '../src/app/globals.css'; // Adjust the path if it's different

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;