import prisma from '@/config/database';
import { RequestSchemaTotalType } from '@/protocols';

async function postRequest(data: RequestSchemaTotalType[]): Promise<void> {
  let createRequest: any;
  for (const requestData of data) {
    const { ProductSpecific, counter, followUp, observationText, total, nameClient, code } = requestData;
    const { id, image, name, price, description } = ProductSpecific;

    createRequest = await prisma.request.create({
      data: {
        id,
        image,
        name,
        price,
        description,
        counter,
        observationText,
        total,
        nameClient,
        code,
        followUps: {
          create: followUp,
        },
      },
    });
  }
  return createRequest
}


export const repositoryRequest = { postRequest }
