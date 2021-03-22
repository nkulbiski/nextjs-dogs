import styled, { keyframes } from 'styled-components';

export interface IFadeIn {
  delay?: number
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default styled.div`
  animation: ${fadeIn} ${({ delay = 5 }:IFadeIn) => `${delay}s`};
`;
