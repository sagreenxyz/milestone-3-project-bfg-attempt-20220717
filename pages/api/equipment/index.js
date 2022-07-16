import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Handler(req, res) {
    const equipmentFound = await prisma.equipment.findMany({
    })
    res.status(200).json(equipmentFound)

    // res.status(200).json({name:"Home equipment route"})
}