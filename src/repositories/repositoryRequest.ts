import prisma from "../config/database";
import { RequestSchemaTotalType } from "../protocols";

async function postRequest(data: RequestSchemaTotalType[]): Promise<any[]> {
  const createdRequests: any[] = [];

  for (const requestData of data) {
    const {
      ProductSpecific,
      counter,
      followUp,
      observationText,
      total,
      nameClient,
      code,
    } = requestData;

    const { id, image, name, price, description } = ProductSpecific;

    const createdRequest = await prisma.request.create({
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

    createdRequests.push(createdRequest);
  }
  return createdRequests
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
      createdAt: true,
    },
  });
}

async function getRequestCode(code: number) {
  return await prisma.request.findMany({
    where: {
      code,
    },
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
      createdAt: true,
    },
  });
}

async function getRequestCodeExist(code: number) {
  const result = await prisma.request.findMany({
    where: {
      idR: code,
    },
  });
  return result;
}

async function postError(code: number) {
  const updatedError = await prisma.request.update({
    where: {
      idR: code,
    },
    data: {
      error: true,
    },
  });

  return updatedError;
}

async function deleteRequest(code: number) {
  const delet = await prisma.$transaction([
    prisma.followUp.deleteMany({
      where: {
        requestId: code,
      },
    }),
    prisma.request.delete({
      where: {
        idR: code,
      },
    }),
  ]);

  return delet;
}

export const repositoryRequest = {
  postRequest,
  getRequest,
  postError,
  deleteRequest,
  getRequestCodeExist,
  getRequestCode,
};
