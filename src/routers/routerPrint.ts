
import { PostPrint } from '@/controllers/controllerPrinter';
import { Router } from 'express';

const PrintRouter = Router();

PrintRouter.post('/printReceipt', PostPrint)

export { PrintRouter };