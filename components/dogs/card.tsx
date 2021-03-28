import styled from 'styled-components';
import Caption from 'components/dogs/caption';
import NextImage from 'next/image';
import fadeIn from 'components/hoc/fadeIn';
import PreloadImage from 'components/hoc/preloadImage';

export interface IDogCard {
    image: string,
    className?: string
}

const DogImage = fadeIn(PreloadImage(NextImage));

const card = ({ className, image }:IDogCard) => (
  <div className={className}>
    <DogImage src={image} width="600px" height="600px" objectFit="cover" priority />
    <Caption />
  </div>
);

export default styled(card)({
  background: '#000',
  margin: '5px',
  position: 'relative',
  textAlign: 'center',
});
