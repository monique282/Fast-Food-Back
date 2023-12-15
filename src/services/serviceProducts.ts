import { Request, Response } from "express";


async function getProducts(req: Request, res: Response) {
    const allProducts = await repositoryProducts.getProducts();
    return allProducts;
};

const serviceProducts = {
    getProducts
};

export default serviceProducts;
