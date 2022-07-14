import { PrismaClient } from '@prisma/client';
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
    for (let i=0; i<10; i++) {
        await prisma.user.create({
            data: {
                email: `${faker.inter}`,
                name: "Joe Bob",
                rentals: {
                    create: [
                        {       name: "Air Compressor",
                                model: "P185",
                                manufacturer: "Doosan",
                                image: "https://media.sunbeltrentals.com/is/image/sunbeltrentals/catClass_0010030?fmt=webp",
                                category: "Air Compressors and Air Tools",
                                description: "Lorem ipsum..."},
                        {       name: "Double Drum Roller",
                                model: "AR13HAR",
                                manufacturer: "Multiquip",
                                image: "https://media.sunbeltrentals.com/is/image/sunbeltrentals/catClass_0220120?fmt=webp",
                                category: "Compaction",
                                description: "Lorem ipsum..."},
                    ],
                },
            },
        });
    }
}

main().catch (e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
