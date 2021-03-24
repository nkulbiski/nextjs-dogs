import { useSWRInfinite } from 'swr';
import { GetServerSideProps } from 'next';
import Gallery from 'components/dogs/gallery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { IDogs } from 'interfaces/idogs';

interface IProps {
  dogs: IDogs
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const getKey = (pageIndex: number) => (`https://dog.ceo/api/breeds/image/random/15?index=${pageIndex}`);

export default function Home({ dogs }:IProps) {
  const {
    data, size, setSize, isValidating,
  } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false,
  });

  const isRefreshing = isValidating && data && data.length === size;

  const { ref, inView } = useInView({ rootMargin: '500px 0px' });

  useEffect(() => {
    if (inView && !isRefreshing) { setSize(size + 1); }
  }, [inView, isRefreshing]);

  // workaround SWRInfinite intialdata bug to get dogs pre-loaded
  let images = [dogs];
  if (data) images = [dogs].concat(data);
  return (
    <>
      <Gallery data={images} />
      <div ref={ref} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dogs:IDogs = await fetcher(getKey(0));
  return { props: { dogs } };
};
