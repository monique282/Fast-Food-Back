import prisma from '@/config/database';
import { FollowUpType, RequestSchemaTotalType } from '@/protocols';

async function postRequest(data: RequestSchemaTotalType[]): Promise<void> {
    for (const requestData of data) {
        const { ProductSpecific, counter, followUp, observationText, total, nameClient, code } = requestData;
        const { id, image, name, price, description } = ProductSpecific;

        await prisma.request.create({
            data: {
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
}


export const repositoryRequest = { postRequest }
