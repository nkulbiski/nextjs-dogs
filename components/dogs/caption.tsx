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
  margin: '0',
  padding: '15px',
  bottom: '0',
  background: '#000',
});

export default React.memo(StyledCaption);
