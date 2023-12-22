import { getRequest, postError, postRequest } from '@/controllers/controlllerRequest';
import { validateJoiForAll } from '@/middlewares/middlewaresValidate';
import { ReadySchema, RequestSchemaTotal } from '@/schemas/schemasRequest';
import { Router } from 'express';

const RequestRouter = Router();

RequestRouter.post('/request', validateJoiForAll(RequestSchemaTotal), postRequest)
RequestRouter.get('/request', getRequest)
RequestRouter.post('/updateError', validateJoiForAll(ReadySchema), postError)

export { RequestRouter };

