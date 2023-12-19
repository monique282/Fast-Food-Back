import prisma from '@/config/database';
import { RequestSchemaTotalType } from '@/controllers/controlllerRequest';

async function postRequest(data: RequestSchemaTotalType[]): Promise<void> {
    for (const requestData of data) {
        const { ProductSpecific, counter, followUp, observationText, total } = requestData;
        const { id, image, name, price, description } = ProductSpecific;

        await prisma.requests.create({
            data: {
                id,
                image,
                name,
                price,
                description,
                counter,
                followUp: followUp ? {
                    create: followUp,
                } : undefined,
                observationText,
                total,
                name,
                code,
            },
        });
    }
}

export const repositoryRequest = { postRequest }
