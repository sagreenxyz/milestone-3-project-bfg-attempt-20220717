import prisma from "../../../lib/prisma"

export default async function handler(req, res) {

    const { equipmentId } = req.query

    try {
        const equipmentFound = await prisma.equipment.findOne({
            where: {id: equipmentId}
        })
        res.status(200).json(equipmentFound)
    } catch (err) {
        res.status(500).json({error: `could not find data for equipment ID: ${equipmentId}`})
    }

}