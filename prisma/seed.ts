import prisma from "../src/config/database";

async function main() {
    await prisma.product.createMany({
        data: [
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
                name: "Classic Burguer",
                prince: 20.00,
                description: "Pão, salada de tomate e alface, molho especial, queijo cheddar, 2 burguer 180g",
                category: "FOLLOWUP"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
                name: "Burger Hot",
                prince: 26.00,
                description: "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
                category: "FOLLOWUP"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/09/202207060520_c6l8ailsyr.jpg.webp",
                name: "Burguer Salada",
                prince: 32.00,
                description: "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
                category: "FOLLOWUP"
            },
            /////////////////////////////////////////

            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/guarana-mini.png.webp",
                name: "Guaraná Min",
                prince: 3.20,
                description: "200ml",
                category: "DRINK"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/COCA-MINI.png.webp",
                name: "Coca Mini",
                prince: 3.50,
                description: "200ml",
                category: "DRINK"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/delle.jpg",
                name: "Suco Del Valle",
                prince: 5.00,
                description: "400ml",
                category: "DRINK"
            },
            //////////////////////////////////////////////////////////////////
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/D_NQ_NP_770023-O.jpg.webp",
                name: "Chocotino",
                prince: 3.20,
                description: "200ml",
                category: "DRINK"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/COCA-MINI.png.webp",
                name: "Coca Mini",
                prince: 3.50,
                description: "200ml",
                category: "DRINK"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/delle.jpg",
                name: "Suco Del Valle",
                prince: 5.00,
                description: "400ml",
                category: "DRINK"
            },
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