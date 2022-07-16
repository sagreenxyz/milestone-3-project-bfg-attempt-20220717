import { useRouter } from "next/router"
import useSWR from "swr"
import Card from "../../components/Card"


export default function Equipment_id () {
    //let data = ['mower', 'weed eater', 'back hoe', 'tractor']
    
    const router = useRouter()
    const equipment_id = router.query.equipment_id
    const equipment_category = router.query.equipment_category
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/equipment/', fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div>
            <h1>Equipment Category: {equipment_category}</h1>
            <h1>Equipment id: {equipment_id}</h1>
            <Card equipment = {data}/>
        </div>
    )
}