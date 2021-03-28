/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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

const Wrapper = styled.div`
  animation: ${fadeIn} ${({ delay = 2 }:IFadeIn) => `${delay}s`};
`;

export default (WrappedComponent: React.ComponentType<any>) => (props: any) => (
  <Wrapper>
    <WrappedComponent {...props} />
  </Wrapper>
);
