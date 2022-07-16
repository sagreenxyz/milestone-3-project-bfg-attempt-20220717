import { data } from "browserslist"
import Card from "../components/Card"
import Side_Nav from "../components/Side_Nav"
import useSWR from 'swr'


export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/equipment', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading...</div>

  return (
    
    <div className="bg-gray-300 inline-flex">
      <div className="grid gap-4 grid-cols-4 ">
        {data.map((item) => {
          return (
            <Card equipment={item}/>
          )
        })}
      </div>
    </div>
  )
}
