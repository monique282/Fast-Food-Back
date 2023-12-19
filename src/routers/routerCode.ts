
import { getCode } from '@/controllers/controllerCode';
import { Router } from 'express';

const CodeRouter = Router();

CodeRouter.get('/code', getCode)

export { CodeRouter };
