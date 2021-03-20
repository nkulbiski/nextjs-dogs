import { useSWRInfinite } from 'swr';
import Card from 'components/dogs/card';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const getKey = (pageIndex: number) => (`https://dog.ceo/api/breeds/image/random/15?index=${pageIndex}`);

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, { revalidateOnFocus: false });

  if (!data) return 'Loading...';
  return (
    <>
      <div>
        {data.map((dogs) => dogs.message.map((image:string) => <Card image={image} key={image} />))}

      </div>
      <button type="button" onClick={() => setSize(size + 1)}>Load More</button>
    </>
  );
}
