import { data } from "browserslist"
import Card from "../components/Card"
import Side_Nav from "../components/Side_Nav"



export default function Home() {
  let data = ['mower', 'weed eater', 'back hoe', 'tractor', 'shovel', 'hammer', 'chain saw', 'bulldozer',]


  return (
    
    <div className="bg-gray-300 inline-flex">
      <div className="grid gap-4 grid-cols-4 ">
        {data.map((x) => {
          return (
            <Card name={x}/>
          )
        })}
      </div>
    </div>
  )
}
