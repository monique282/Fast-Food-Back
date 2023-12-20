import { getRequest, postRequest } from '@/controllers/controlllerRequest';
import { validateJoiForAll } from '@/middlewares/middlewaresValidate';
import { RequestSchemaTotal } from '@/schemas/schemasRequest';
import { Router } from 'express';

const RequestRouter = Router();

RequestRouter.post('/request', validateJoiForAll(RequestSchemaTotal), postRequest)
RequestRouter.get('/request', getRequest)

export { RequestRouter };

