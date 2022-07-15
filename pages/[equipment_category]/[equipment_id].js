import { useRouter } from "next/router"
import Card from "../../components/Card"

export default function Equipment_id () {
    let data = ['mower', 'weed eater', 'back hoe', 'tractor']
    
    const router = useRouter()
    const equipment_id = router.query.equipment_id
    const equipment_category = router.query.equipment_category

    let item = data[equipment_id]
    
    return (
        <div>
            <h1>Equipment Category: {equipment_category}</h1>
            <h1>Equipment id: {equipment_id}</h1>
            <Card name={item} />
        </div>
    )
}