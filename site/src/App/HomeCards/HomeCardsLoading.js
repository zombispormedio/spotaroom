import React from 'react';
import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeCardsLoading = () => (
  <LoadingContainer>Loading homes...</LoadingContainer>
);

export default HomeCardsLoading;
