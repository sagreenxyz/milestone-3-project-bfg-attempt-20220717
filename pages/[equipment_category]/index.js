import { useRouter } from "next/router"
import Card from "../../components/Card"
import useSWR from "swr"

function equipment_category() {
    // let data = ['mower', 'weed eater', 'back hoe', 'tractor', 'shovel', 'hammer', 'chain saw', 'bulldozer',]
    // const router = useRouter()
    // const category_name = router.query.equipment_category
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/equipment', fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading...</div>

    
    return (
        <div className="bg-gray-300">
            <h1 className="text-xl">Category: {category_name}</h1>
            <div className="grid gap-4 grid-cols-4 ">
                <Card name={category_name}/>
            </div>
      </div>
    )
}

export default equipment_category