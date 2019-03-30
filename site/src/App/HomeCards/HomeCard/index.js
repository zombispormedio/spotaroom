import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { mq } from '../../../Theme';
import { Card, CardContent, CardImage } from './Card';
import { Button, ButtonGroup } from './Button';

const HomeTitle = styled.h3`
  margin: 0;
  font-size: 2rem;
  margin-right: 3rem;
  ${mq.mobile} {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Price = styled.span`
  font-family: 'Luckiest Guy', cursive;
  background-color: #000;
  color: ${props => props.theme.accent};
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 2.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  ${mq.mobile} {
    justify-content: flex-end;
    width: 100%;
  }
`;

const HomeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${mq.mobile} {
    flex-direction: column;
  }
`;

const HomeCard = ({ title, photoUrls, currencySymbol, pricePerMonth }) => (
  <Card>
    <CardImage src={photoUrls.homecardHidpi} />
    <CardContent>
      <HomeInfo>
        <HomeTitle> {title}</HomeTitle>

        <PriceContainer>
          <Price>
            {pricePerMonth}
            {currencySymbol}
          </Price>
        </PriceContainer>
      </HomeInfo>
      <ButtonGroup>
        <Button>Book now!</Button>
        <Button secondary onlyDesktop>
          More details
        </Button>
      </ButtonGroup>
    </CardContent>
  </Card>
);

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  photoUrls: PropTypes.shape({
    homecardHidpi: PropTypes.string
  }).isRequired,
  currencySymbol: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.string.isRequired
};

export default HomeCard;
