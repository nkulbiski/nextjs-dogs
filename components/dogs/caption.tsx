import React from 'react';
import styled from 'styled-components';
import randomProverb from 'utilities/randomProverb';

export interface ICaption {
className?: string
}

const Caption = ({ className }: ICaption) => (
  <p className={className}>
    {randomProverb()}
  </p>
);

const StyledCaption = styled(Caption)({
  color: '#fff',
  position: 'absolute',
  width: '100%',
  bottom: '0',
  margin: '0',
  background: '#000',
  opacity: '.8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '4em',
});

export default React.memo(StyledCaption);
