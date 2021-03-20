import styled from 'styled-components';
import FadeIn from 'components/animation/fadeIn';
import Caption from 'components/dogs/caption';
import Image from 'next/image';

export interface IDogCard {
    image: string,
    className?: string
}

const card = ({ className, image }:IDogCard) => (
  <div className={className}>
    <FadeIn>
      <Image src={image} width="400px" height="400px" priority />
      <Caption />
    </FadeIn>
  </div>
);

export default styled(card)({
  display: 'inline-block',
  background: '#000',
  margin: '5px',
  position: 'relative',
  img: {
    objectFit: 'cover',

  },
});
