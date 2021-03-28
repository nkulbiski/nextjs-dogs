import { useEffect, useState } from 'react';

const useImageLoaded = (src:string) => {
  const [loaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const mainImage = new Image();
    mainImage.src = src;

    mainImage.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return loaded;
};

export default useImageLoaded;
