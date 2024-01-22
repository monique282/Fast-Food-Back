import prisma from "../../src/config/database";
import { RequestSchemaTotalType } from "../../src/protocols";

async function createRequest(data: RequestSchemaTotalType[]): Promise<void> {
    for (const requestData of data) {
      const { ProductSpecific, counter, followUp, observationText, total, nameClient, code } = requestData;
      const { id, image, name, price, description } = ProductSpecific;
  
      await prisma.request.create({
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
            create: followUp
          },
        },
      });
    }
  };

  async function createReadyTrueRequest(data: RequestSchemaTotalType[]): Promise<void> {
    for (const requestData of data) {
      const { ProductSpecific, counter, followUp, observationText, total, nameClient, code } = requestData;
      const { id, image, name, price, description } = ProductSpecific;
  
      await prisma.request.create({
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
            create: followUp
          },
        },
      });
    }
  }
  
  
  export { createRequest, createReadyTrueRequest };
