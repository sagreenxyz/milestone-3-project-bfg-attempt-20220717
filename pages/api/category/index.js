import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    res.status(200).json({ name: 'Home route for the categories' })
}