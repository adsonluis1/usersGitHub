import type { Preview } from "@storybook/react";


import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  `;


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    GlobalStyles
    })]
};

export default preview;
