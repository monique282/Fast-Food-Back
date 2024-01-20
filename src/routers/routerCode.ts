
import { getCode, updateCode } from '../controllers/controllerCode';
import { validateJoiForAll } from '../middlewares/middlewaresValidate';
import { CodeSchema } from '../schemas/schemasRequest';
import { Router } from 'express';

const CodeRouter = Router();

CodeRouter.get('/code', getCode)
CodeRouter.post('/update', validateJoiForAll(CodeSchema), updateCode)

export { CodeRouter };
