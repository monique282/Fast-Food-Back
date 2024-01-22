import prisma from "../config/database";

async function getCode() {
    return await prisma.code.findMany({});
};

async function updateCode(newCode: number) {
    const updatedCode = await prisma.code.update({
        where: { id: 1 },
        data: { idcode: newCode },
    });

    return updatedCode;
}

async function getCodeExist(newCode:number) {
    const codeExiste = await prisma.code.findMany({
        where: {
            idcode : newCode,
        }
    });
    return codeExiste
}

const repositoryCode = {
    getCode, updateCode, getCodeExist
};

export default repositoryCode;