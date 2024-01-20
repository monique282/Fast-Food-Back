import { badRequestError } from "@/errors";
import repositoryProducts from "@/repositories/repositoryProducts";

async function getProducts() {
    const allProducts = await repositoryProducts.getProducts();
    if(!allProducts){
        throw badRequestError
    };
    return allProducts;
};

const serviceProducts = {
    getProducts
};

export default serviceProducts;
