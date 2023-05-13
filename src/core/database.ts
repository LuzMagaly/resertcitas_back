import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const main = async () => {
}

main().catch((e) => { throw e }).finally(async () => { await prisma.$disconnect() })