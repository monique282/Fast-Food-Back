import prisma from "@/config/database";

async function getCode() {
    return await prisma.code.findMany({});
};

const repositoryCode = {
    getCode
};

export default repositoryCode;