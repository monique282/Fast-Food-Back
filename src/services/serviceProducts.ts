import { notFound } from "../errors/not-found-error";
import repositoryProducts from "../repositories/repositoryProducts";

async function getProducts() {
    const allProducts = await repositoryProducts.getProducts();
    if(allProducts.length === 0){
        throw notFound("Produtos não encontrados, recarregue a pagina, se o problema persistir entre em contato com o responsavel.")
    };
    return allProducts;
};

const serviceProducts = {
    getProducts
};

export default serviceProducts;
