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

async function getRequest() {
  return await prisma.request.findMany({
    select: {
      idR: true,
      image: true,
      name: true,
      price: true,
      description: true,
      counter: true,
      observationText: true,
      total: true,
      nameClient: true,
      code: true,
      followUps: true,
      ready: true,
      error: true,
      createdAt: true
    },
  });
}

async function postError(code: number) {
    
  const updatedError = await prisma.request.update({
      where: {
          code,
      },
      data: {
          error: true,
      },
  });

  return updatedError;
}

async function deleteRequest(code: number) {
    
  const delet = await prisma.request.delete({
      where: {
          code,
      }
  });

  return deleteRequest;
}

export const repositoryRequest = { postRequest, getRequest, postError, deleteRequest }
