import { Router } from 'express';

const ProductRouter = Router();

ProductRouter.get('/home', getProduct)

export { ProductRouter };
