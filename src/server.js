import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const equipmentFound = await prisma.equipment.findMany({
    })
    res.json(equipmentFound)
  })

const server = app.listen(4000, () =>
  console.log(`🚀 Server launched at: http://localhost:4000 🚀`))