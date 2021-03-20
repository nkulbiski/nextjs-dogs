import {useSWRInfinite}  from 'swr'
import Card from 'components/dogs/card'

export default function Home() {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const getKey = () => ('https://dog.ceo/api/breeds/image/random/15')
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, { revalidateOnFocus: false })

  if (!data) return 'Loading...'
  return (
    <>
      <div>

      {data.map((dogs) => {
            return dogs.message.map((image:string) => <Card image={image} key={image} />)
          })}

      </div>
        <button onClick={() => setSize(size + 1)}>Load More</button>
    </>
  )
}