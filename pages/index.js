import { data } from "browserslist"
import Card from "../components/Card"



export default function Home() {
  let data = ['mower', 'weed eater', 'back hoe', 'tractor']
  


  return (
    <div className="bg-gray-600 flex">
      
      {data.map((x) => {
        return (
          <Card {...x}/>
        )
      })}
      
    </div>
  )
}
