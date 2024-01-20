import { Request, Response } from 'express';
import httpStatus from 'http-status';
import serviceReadt from '@/services/serviseReady';

export async function postReady(req: Request, res: Response) {
    const { code } = req.body

    const updateReady = await serviceReadt.postReady(code);

    return res.status(httpStatus.CREATED).send(updateReady);
}

