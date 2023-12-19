
import { validateJoiForAll } from '@/middlewares/middlewaresValidate';
import { Router } from 'express';

const RequestReady = Router();

RequestReady.post('/updateReady', validateJoiForAll(), )

export { RequestReady };

