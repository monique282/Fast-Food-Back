import prisma from "../src/config/database";

async function main() {
    await prisma.product.createMany({
        data: [
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
                name: "Classic Burguer",
                prince: 20.00,
                description: "Pão, salada de tomate e alface, molho especial, queijo cheddar, 2 burguer 180g",
                category: "SNACKS"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
                name: "Burger Hot",
                prince: 26.00,
                description: "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
                category: "SNACKS"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/09/202207060520_c6l8ailsyr.jpg.webp",
                name: "Burguer Salada",
                prince: 32.00,
                description: "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
                category: "SNACKS"
            },
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
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/08/aka2.png.webp",
                name: "Açaí Mix",
                prince: 18.00,
                description: "Açaí com granola e Banana 250ml",
                category: "DESSERT"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/D_NQ_N1675_042019-O.jpg.webp",
                name: "Shake Açaí Puro",
                prince: 23.00,
                description: "Açaí Puro 350ml",
                category: "DESSERT"
            },
            {
                image: "https://hefood.com.br/wp-content/uploads/2022/02/023-MLB29847341675_042019-O.jpg.webp",
                name: "Petit Gâteau",
                prince: 18.00,
                description: "Chocolate",
                category: "DESSERT"
            },
            {
                image: "https://blog.taqi.com.br/wp-content/uploads/2015/10/cebola-empanada.jpg",
                name: "Anéis Fritos de Cebola",
                prince: 20.00,
                description: "300ml",
                category: "FOLLOW"
            },
            {
                image: "https://img77.uenicdn.com/image/upload/v1573233963/service_images/shutterstock_273398612.jpg",
                name: "Batata Frita",
                prince: 25.00,
                description: "500ml",
                category: "FOLLOW"
            },
            {
                image: "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2830-f47e5adf8eb5a87325a0e1bdce629f36.jpg",
                name: "Molho de Alho",
                prince: 15.00,
                description: "100ml",
                category: "FOLLOW"
            },
            {
                image: "https://orlario.com.vc/wp-content/uploads/2023/01/324723649_745555743197754_1967394126866060848_n-1-1024x952.jpg",
                name: "Burger Hot + Batata Frita + Molho de Alho",
                prince: 20.00,
                description: "Burger Hot: Pão, salada de tomate e alface, molho especial, queijo cheddar, 2 burguer 180g | Batata Frita: 500ml / Molho de Alho: 100ml",
                category: "COMBOO"
            },
            {
                image: "https://acdn.mitiendanube.com/stores/690/117/products/kit-lanche-preto-montado1-3270a4cc61382daea415672032847567-640-0.jpg",
                name: "Classic Burguer + Batata Frita + Coca Mini",
                prince: 45.00,
                description: "Classic Burguer: Pão, salada de tomate e alface, molho especial, queijo cheddar, 2 burguer 180g | Batata Frita: 500ml | Coca Mini: 200ml",
                category: "COMBOO"
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