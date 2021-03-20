import styled from 'styled-components';
import FadeIn from 'components/animation/fadeIn';
import Image from 'next/image';

export interface IDogCard {
    image: string,
    className?: string
}

const card = ({ className, image }:IDogCard) => (
  <div className={className}>
    <FadeIn>
      <Image src={image} width="400px" height="400px" priority />
    </FadeIn>
  </div>
);

export default styled(card)({
  display: 'inline-block',
  background: 'black',
  margin: '5px',
  img: {
    objectFit: 'cover',

  },
});
