import prisma from '@/config/database';
import { FollowUpType, RequestSchemaTotalType } from '@/protocols';

async function postReady() {

    //   const updatedRealy = await prisma.request.update({
    //     where: { id: 1 },
    //     // data: { idcode: newCode },
    // });

    // return updatedRealy;
}


export const repositoryRealy = { postReady }
