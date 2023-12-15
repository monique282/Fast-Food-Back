import { Router } from 'express';

const ProductRouter = Router();

ProductRouter.get('/home', controllerProduct)

export { ProductRouter };
