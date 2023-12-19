import prisma from '@/config/database';
import { FollowUpType, RequestSchemaTotalType } from '@/protocols';

async function postReady(code) {

      const updatedRealy = await prisma.request.update({
        where: { code: code },
        data: { ready: true },
    });

    return updatedRealy;
}


export const repositoryRealy = { postReady }
