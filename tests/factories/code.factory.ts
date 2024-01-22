import prisma from "../../src/config/database";

export async function createCode(code: number) {
    return await prisma.code.create({
        data: { idcode: code },
    });
}

