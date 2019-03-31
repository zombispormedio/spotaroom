import React from 'react';
import styled from '@emotion/styled';
import { hot } from 'react-hot-loader/root';
import { DataProvider } from './Data';
import { ThemeProvider } from '../Theme';
import AppBar from './AppBar';
import HomeCards from './HomeCards';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AppContent = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  flex: 1 1 auto;
  position: relative;
`;

const App = () => (
  <DataProvider>
    <ThemeProvider>
      <AppWrapper>
        <AppBar />
        <AppContent>
          <HomeCards />
        </AppContent>
      </AppWrapper>
    </ThemeProvider>
  </DataProvider>
);
export default hot(App);
