/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import useImageLoaded from 'hooks/useImageLoaded';

const PreloadImage = (Component: React.ComponentType<any>) => (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const loaded = useImageLoaded(props.src);

  if (!loaded) return (<Component src="/1x1-00000000.png" {...props} />);

  return (<Component {...props} />);
};

export default PreloadImage;
