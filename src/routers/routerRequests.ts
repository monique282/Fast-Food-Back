import { Router } from 'express';

const RequestRouter = Router();

RequestRouter.post('/request', postRequest)

export { RequestRouter };
