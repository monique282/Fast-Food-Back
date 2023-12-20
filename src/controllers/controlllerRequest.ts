import { Request, Response } from 'express';
import httpStatus from 'http-status';
import serviceRequest from "../services/serviceRequest";
import { RequestSchemaTotalType } from '@/protocols';

export async function postRequest(req: Request, res: Response) {
    const choice = req.body as RequestSchemaTotalType[];
    console.log(choice);
    const result = await serviceRequest.postRequest(choice);

    return res.status(httpStatus.CREATED).send(result);
};

export async function getRequest(req: Request, res: Response) {
    const allRequest = await serviceRequest.getRequest()
    return res.status(httpStatus.OK).send(allRequest);
}

