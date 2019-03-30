import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import variables from './variables';
import GlobalStyles from './globals';

export const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={variables}>
    <GlobalStyles />
    {children}
  </EmotionThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
