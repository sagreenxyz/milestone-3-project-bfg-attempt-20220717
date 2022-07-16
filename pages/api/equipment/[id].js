import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

    const { id } = req.query

    try {
        //findUnique not findOne
        const equipmentFound = await prisma.equipment.findUnique({
            where: {id: parseInt(equipmentId)}
        })
        res.status(200).json(equipmentFound)
    } catch (err) {
        res.status(500).json({error: `could not find data for equipment ID: ${equipmentId}`})
    }

}