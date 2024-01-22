import prisma from "../src/config/database";

export async function cleanDb() {
  await prisma.request.deleteMany({})
  await prisma.code.deleteMany({})
  await prisma.product.deleteMany({})
};
