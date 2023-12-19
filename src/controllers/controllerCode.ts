
import serviceCode from "@/services/serviceCode";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getCode(req: Request, res: Response) {
    const code = await serviceCode.getCode();
    return res.status(httpStatus.OK).send(code);
}

export async function updateCode(req: Request, res: Response) {
    const updatedCode = req.body;
    const newCode = (parseInt(updatedCode)) - 1
    console.log(updatedCode)
    console.log(newCode)
    const result = await serviceCode.updateCode(updatedCode, newCode);

    return res.status(httpStatus.CREATED).send(result);
}

export type Code = {
    id: number;
};