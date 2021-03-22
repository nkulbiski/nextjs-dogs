import styled from 'styled-components';
import Card from 'components/dogs/card';

export interface IGallery {
    className?: string
    data: Array<IDogs> | null
}

export interface IDogs {
  message: Array<string>
}

const Gallery = ({ className, data }:IGallery) => {
  let dogs: JSX.Element[] | JSX.Element = (<div>Loading...</div>);

  if (data) {
    dogs = data.map((images) => (
      images.message.map((image) => <Card image={image} key={image} />))).flat();
  }

  return (
    <div className={className} id="gallery">
      {dogs}
    </div>
  );
};

export default styled(Gallery)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gridGap: '1rem',
});
