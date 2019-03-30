import styled from '@emotion/styled';
import { mq } from '../../../Theme';

export const Card = styled.div`
  background-color: ${props => props.theme.lightGrey};
  display: flex;
  ${mq.mobile} {
    flex-direction: column;
  }
  padding: 2rem;
`;

export const CardContent = styled.div`
  background-color: ${props => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mq.mobile} {
    & > div {
      margin-bottom: 1rem;
    }
  }
`;

export const CardImage = styled.img`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  width: auto;
  height: 10rem;
  margin-right: 2rem;
  ${mq.mobile} {
    width: 100%;
    height: 100%;
    margin-right: inherit;
    margin-bottom: 2rem;
  }
`;
