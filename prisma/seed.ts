import prisma from "../src/config/database";

async function main() {
    await prisma.message.createMany({
        data: [
            {
                imagem: "strin;",
                name: "strin;",
                prince: 20.00,
                category: ""
            }
        ]
    });
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})