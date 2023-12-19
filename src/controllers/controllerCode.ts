
import serviceCode from "@/services/serviceCode";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function getCode(req: Request, res: Response) {
    const code = await serviceCode.getCode();
    return res.status(httpStatus.OK).send(code);
}