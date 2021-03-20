import { useSWRInfinite } from 'swr';
import Card from 'components/dogs/card';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const getKey = (pageIndex: number) => (`https://dog.ceo/api/breeds/image/random/15?index=${pageIndex}`);

  const {
    data, size, setSize, isValidating,
  } = useSWRInfinite(getKey, fetcher, { revalidateOnFocus: false });

  const isRefreshing = isValidating && data && data.length === size;

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isRefreshing) { setSize(size + 1); }
  }, [inView, isRefreshing]);

  if (!data) return 'Loading...';
  return (
    <>
      <div>
        {data.map((dogs) => dogs.message.map((image:string) => <Card image={image} key={image} />))}
      </div>
      <div ref={ref} />
    </>
  );
}
