import prisma from "../src/config/database";

async function main() {
    await prisma.message.createMany({
        data: [
            {
                imagem: "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
                name: "Classic Burguer;",
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