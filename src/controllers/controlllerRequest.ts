import { Request, Response } from 'express';
import httpStatus from 'http-status';
import serviceRequest from "@/services/serviceRequest";

export async function postRequest(req: Request, res: Response) {
  const  choice  = req.body as RequestSchemaTotalType;

  const result = await serviceRequest.postRequest(choice);

  return res.status(httpStatus.CREATED).send(result);
}

type FollowUpType = {
    id: number;
    item: string;
    price: string;
  };
  
  type RequestSchemaType = {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
  };
  
  type RequestSchemaTotalType = {
    ProductSpecific: RequestSchemaType;
    counter: number;
    followUp?: FollowUpType;
    observationText: string;
    total: string;
  };