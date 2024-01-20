import prisma from "@/config/database";

export async function cleanDb() {
  await prisma.request.deleteMany({});
  await prisma.code.deleteMany({});
};
