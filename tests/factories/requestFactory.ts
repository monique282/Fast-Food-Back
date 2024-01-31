import prisma from "../../src/config/database";
import { RequestSchemaTotalType } from "../../src/protocols";

async function createRequest(
  data: RequestSchemaTotalType[]
): Promise<any[]> {
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
  return createdRequests;
}

async function createReadyTrueRequest(
  data: RequestSchemaTotalType[]
): Promise<any[]> {
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
        ready: true,
        followUps: {
          create: followUp,
        },
      },
    });

    createdRequests.push(createdRequest);
  }
  return createdRequests;
}

async function createErrorTrueRequest(
  data: RequestSchemaTotalType[]
): Promise<any[]> {
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
        error: true,
        followUps: {
          create: followUp,
        },
      },
    });

    createdRequests.push(createdRequest);
  }
  return createdRequests;
}

export { createRequest, createReadyTrueRequest, createErrorTrueRequest };
