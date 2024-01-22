
import { postReady } from '../controllers/controllerReady';
import { validateJoiForAll } from '../middlewares/middlewaresValidate';
import { ReadySchema } from '../schemas/schemasRequest';
import { Router } from 'express';

const RequestReady = Router();

RequestReady.post('/updateReady', validateJoiForAll(ReadySchema), postReady)

export { RequestReady };

