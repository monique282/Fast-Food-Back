import prisma from '@/config/database';
import { FollowUpType, RequestSchemaTotalType } from '@/protocols';

async function postRequest(data: RequestSchemaTotalType[]): Promise<void> {
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
                followUps: followUp ? {
                    create: followUp,
                } : undefined,
                observationText,
                total,
                nameClient,  
                code,      
            },
        });
    }
}


export const repositoryRequest = { postRequest }
