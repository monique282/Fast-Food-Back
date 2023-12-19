import prisma from '@/config/database';

async function postReady(code: number) {
    const updatedRealy = await prisma.request.update({
        where: {
            code: code,
        },
        data: {
            ready: true,
        },
    });

    return updatedRealy;
}

export const repositoryRealy = { postReady };
