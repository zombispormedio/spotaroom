import styled from '@emotion/styled';
import { mq } from '../../../Theme';

export const Button = styled.div`
  cursor: pointer;
  font-family: 'Luckiest Guy', cursive;
  text-align: center;
  transition: color 0.25s ease-out 0s;
  padding: 0.5rem 2rem;
  color: ${props => props.theme.secondaryText};
  background-color: ${props =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  border-bottom: 4px solid
    ${props =>
      props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};

  &:hover {
    background-color: ${props =>
      props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};
  }
  ${props =>
    props.onlyDesktop &&
    `
      ${mq.mobile} {
        display: none;
      }
  `}
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: flex-end;
  & div:first-of-type {
    margin-right: 1.5rem;
  }
  ${mq.mobile} {
    justify-content: center;
    margin-top: inherit;
    & div:first-of-type {
      margin-right: inherit;
    }

    & div {
      flex: 1;
    }
  }
`;
