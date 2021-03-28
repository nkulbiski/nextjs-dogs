import styled from 'styled-components';
import Caption from 'components/dogs/caption';
import Image from 'next/image';
import fadeIn from 'components/animation/fadeIn';

export interface IDogCard {
    image: string,
    className?: string
}

const FadeInDogImage = fadeIn(Image);

const card = ({ className, image }:IDogCard) => (
  <div className={className}>
    <FadeInDogImage src={image} width="600px" height="600px" objectFit="cover" priority />
    <Caption />
  </div>
);

export default styled(card)({
  background: '#000',
  margin: '5px',
  position: 'relative',
  textAlign: 'center',
});
