import { Request, Response } from 'express';
import httpStatus from 'http-status';
import serviceRequest from "../services/serviceRequest";
import { RequestSchemaTotalType } from '../protocols';

export async function postRequest(req: Request, res: Response) {
    const choice = req.body as RequestSchemaTotalType[];
    const result = await serviceRequest.postRequest(choice);
    return res.status(httpStatus.CREATED).send(result);
};

export async function getRequest(req: Request, res: Response) {
    const allRequest = await serviceRequest.getRequest()
    return res.status(httpStatus.OK).send(allRequest);
};

export async function postError(req: Request, res: Response) {
    const { code } = req.body
    const updateError = await serviceRequest.postError(code);
    return res.status(httpStatus.CREATED).send(updateError);
};

export async function deleteRequest(req: Request, res: Response) {
    const { code } = req.body
    await serviceRequest.deleteRequest(code);
    return res.sendStatus(httpStatus.OK);
};

