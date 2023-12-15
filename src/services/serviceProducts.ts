import repositoryProducts from "@/repositories/repositoryProducts";

async function getProducts() {
    const allProducts = await repositoryProducts.getProducts();
    return allProducts;
};

const serviceProducts = {
    getProducts
};

export default serviceProducts;
