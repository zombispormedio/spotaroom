import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../Theme';

const AppBarContainer = styled.div`
  height: 5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondaryText};
`;

const NavBarLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const NavBarContainer = styled.div`
  ${mq.mobile} {
    display: none;
  }
`;

const AppNavBar = () => (
  <NavBarContainer>
    <NavBarLink href="#">The company</NavBarLink>-
    <NavBarLink href="#">How we work</NavBarLink>-
    <NavBarLink href="#">Contact us</NavBarLink>
  </NavBarContainer>
);

const AppBar = () => (
  <AppBarContainer>
    <h1>Spotaroom</h1>
    <AppNavBar />
  </AppBarContainer>
);

AppBar.propTypes = {};

export default AppBar;
