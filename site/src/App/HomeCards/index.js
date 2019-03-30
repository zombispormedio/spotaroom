import React from 'react';
import styled from '@emotion/styled';
import HomeCard from './HomeCard';
import HomeCardsLoading from './HomeCardsLoading';
import { useHomeCards } from './hooks';

const HomeCardsContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-top: 1rem;
  > div {
    margin-bottom: 1rem;
  }
`;

const HomeCards = () => {
  const { loading, data } = useHomeCards();
  if (!data || loading) return <HomeCardsLoading />;

  return (
    <HomeCardsContainer>
      {data.map(item => (
        <HomeCard key={item.id} {...item} />
      ))}
    </HomeCardsContainer>
  );
};

HomeCards.propTypes = {};

export default HomeCards;
