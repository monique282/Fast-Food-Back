import prisma from "../config/database";

async function getProducts() {
    return await prisma.product.findMany({});
};

const repositoryProducts = {
    getProducts
};

export default repositoryProducts;