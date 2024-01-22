import { getProducts } from '../controllers/controllerProduct';
import { Router } from 'express';

const ProductRouter = Router();

ProductRouter.get('/home', getProducts)

export { ProductRouter };
