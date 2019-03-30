import React from 'react';
import { Global, css } from '@emotion/core';
import variables from './variables';

export default () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html,
      body,
      #root {
        height: 100%;
      }

      body {
        color: ${variables.primaryText};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
      }
    `}
  />
);
