<h1 id="top" align="center">🍔 Lanches da Monique - Back-end 🍔</h1>

![](https://i.imgur.com/MdlhTQ6.png)

<h2>Tópicos:</h2>

- [Resumo do projeto](#summary)
- [Passo a passo](#stepByStep)
- [Ferramentas utilizadas](#decisions)
- [Deploy](#deploy)
---

<h2 id="summary">📝 Resumo do projeto</h2>

<br>

Essa é uma API RESTful cujo objetivo é mostrar a funcionalidade de um site que seja de comidas rápidas, foi desenvolvida com algumas funcionalidades simples de seleção de produtos, pagamento dos mesmo e organização na parte do preparo e entrega do produto.

<p align="right"><a href="#top">Voltar ao topo</a></p>

---

<h2 id="deploy">Deploy</h2>
<p>
- Se por acaso voce quiser ver o projeto completo tando a parte do Bach-end quanto o Front-end em aplicação esse é o link:




</p>

<br>
<p align="right"><a href="#top">Voltar ao topo</a></p>

---

<h2 id="stepByStep">🦶 Passo a passo</h2>

<br>


<details><summary>Como executar o projeto</summary>
<p>

<br>
 
```bash
# Faça o clone do repositório e entre na pasta do projeto:
$ git clone git@github.com:monique282/Fast-Food-Back.git

# Instale as dependências:
$ npm install

# Use o arquivo .env.example para criar o .env (é necessário ter uma conta no postgresql, se por acaso não tiver crie, na propriedade POSTGRES_DATABASE você coloca o nome do banco que desejar):

# Suba os dados do banco juntamente com o seed:
$ npx prisma migrate dev

# Rodar a aplicação:
$ npm run dev

````
</p>
</details>
<br>
<details><summary>Rodando local, indico o Vs Code</summary>
<p>

- Eu recomendo a estesão Thunder Client no VSCode

```bash
# Após a instalação abra a extensão, clique em "Collections", clique nos 3 pontos e selecione "Nell Collection" escolha o nome que deseja que possa te lembrar o projeto que esta vendo.

# Será aberto uma pasta com o nome desejado, ao posicionar o mouse em cima dela, será possível visualizar três pontos redondos, ao clicar nele selecione "New Request".

# Após isso será abeto uma caixa poder adicionar um nome que te lembre a que rota está se relacionado (exemplo: payment, esse nome vai te lembrar qualquer rota que se relaciona aos pagamentos).

# Após escolher o nome, será aberto um arquivo aonde tem alguns campos que você tera que preencher, um deles é um botão que ao ser clicado você poderá escolher qual o tipo de solicitação (GET, POST, DELET entre outros)

# No campo que tem escrito "Enter Url", você terá que colocar a url "http://localhost:3000/", após a / tera que colocar a rota específica que deseja testar.

# Lembrando que as rotas e explicações de cada uma podem ser vista na parte de "Como interagir com o projeto"
````
</p>
</details>
</p>
</details>

<details><summary>Rodando os testes</summary>
<p>

```bash
# Depois de ter feito a clonagem do repositório e a instalação das dependencias você pode rodar a baterias de testes que foi desenvolvida para ajudar.

# Use o arquivo .env.example para criar o .env.test (é necessário ter uma conta no postgresql, se por acaso não tiver crie, na propriedade POSTGRES_DATABASE você coloca o nome do banco que desejar lembrando que tem que ser diferente do .env).

# Para rodar os testes:
$ npm run test

````
</p>
</details>
</p>
<details><summary>Como interagir com o projeto</summary>
<p>

<details><summary>Utilizando o Thunder Client no VSCode</summary>
<p>

```bash
# Todos os nomes de rotas que eu colocar sera colocados como no exemplo: http://localhost:3000/nomedarota
```

<details><summary>Rota /home</summary>
<p>

- A rota /home que só pode ser feita um [GET], é feita para pegar todos os produtos registrados para vendo, lembrando que esse produtos foram colocados pelo seed. Exemplo abaixo de como vem a requisição.
```bash
[
  {
    "id": 1,
    "image": "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
    "name": "Classic Burguer",
    "price": 20,
    "description": "Pão, salada de tomate e alface, molho especial, queijo cheddar, 2 burguer 180g",
    "category": "SNACKS"
  },
  {
    "id": 2,
    "image": "https://hefood.com.br/wp-content/uploads/2022/09/202208300542_8pyr84dayyg.jpg.webp",
    "name": "Burger Hot",
    "price": 26,
    "description": "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
    "category": "SNACKS"
  },
]
```
</p>
</details>
<br>

<details><summary>Rota /request</summary>
<p>

- A rota /request que serve para registrar o pedido do cliente tem que ser um [POST], ele precisar ter que preencher o body, um exemplo de Body aceitável:

```bash
[
  {
    "ProductSpecific": {
      "id": 1,
      "image": "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
      "name": "Example Product",
      "price": 10.99,
      "description": "This is an example product."
    },
    "counter": 2,
    "followUp": [],
    "observationText": "Example observation text",
    "total": "30.97",
    "nameClient": "John Doe",
    "code": 483
  }
]

Lembrando que:
"ProductSpecific": se refere exatamente a um produto que esta disponivel para venda, então tem que ter os dados corretos de um produto.
"counter": se refere a quantidade desse produto que você deseja.
"followUp": se refere aos adicionais, que pode ter ou não, se não tiver coloque [], se por acaso tiver sera [{
    "id": 3,
    "item": "1x Molho acompanhamento Barbecue",
    "price": "R$1.00",
}]
 "id": se refere ao id fixo de cada adicional.
 "item": É o nome do adicional.
"price": é sempre um valor fixo de: "R$1.00".
"observationText": se refere a uma obeservação referente ao produto pedido (exemplo: tirar a cebola).
"total": se refere ao valor total do pedido.
"nameClient":se refere ao nome do cliente que vez o pedido
"code": se refere ao codigo do pedido.

```
- A rota /request que serve para solicitar através de um [GET] todos os pedidos feitos. Exemplo de um pedido realizado com sucesso.
```bash
[
  {
    "idR": 1,
    "image": "https://hefood.com.br/wp-content/uploads/2022/09/202208300542_8pyr84dayyg.jpg.webp",
    "name": "Burger Hot",
    "price": 26,
    "description": "Pão, molho especial, salada, cebola caramelizada e hamburger 180g",
    "counter": 1,
    "observationText": "",
    "total": "27.00",
    "nameClient": "1",
    "code": 2,
    "followUps": [
      {
        "idP": 1,
        "id": 3,
        "item": "1x Molho acompanhamento Barbecue",
        "price": "R$1.00",
        "requestId": 1
      }
    ],
    "ready": true,
    "error": false,
    "createdAt": "2024-01-28T15:04:57.207Z"
  }
]
```

- A rota /updateError que serve para informar que o preparo de um pedido deu erro, fazendo isso através de um [POST]. Sendo necessário informar o idR no body, essa informação é necessária para saber qual o produto que deu erro.

```bash
{
  "idR": 480
}
```
- A rota /updateDelete que serve para solicitar através de um [DELETE] a exclusão de um pedido específico do banco. Sendo necessário informar o idR no body, essa informação é necessária para saber qual o produto que deve ser excluído.
```bash
{
  "idR": 480
}
```

- A rota /updateError que serve para informar que a preparação de um pedido deu erro, fazendo isso através de um [POST]. Sendo necessário informar o idR no body, essa informação é necessária para saber qual o produto que deu erro

```bash
{
  "idR": 480
}
```
</p>
</details>
<br>
<details><summary>Rota /code</summary>
<p>

- A rota /code que só pode ser feita um [GET], é feita para pegar o idcode, que se refere ao code atual do, esse código e sobre os pedidos. Exemplo de como vem a requisição.
```bash
[
  {
    "id": 1,
    "idcode": 7
  }
]
```
- A rota /code que so pode ser feita um [POST], é feita para atualizar o idcode, que é feita toda vez que um pedido é feito o idcode é atualizado para o próximo número, assim não repetindo o idcode em nenhum pedido.
É necessário enviar o número que vai ser a sequência através do body como no exemplo abaixo.
```bash
{
  "idcode": 80
}
```
</p>
</details>
<br>
<details><summary>Rota /ready</summary>
<p>

- A rota /updateReady que só pode ser feita um [POST], é feita para atualizar se o pedido feito já foi preparado pela cozinha.
É necessário enviar o número do idcode que vai informar qual é o pedido que está pronto.
```bash
{
  "idcode": 482
}
```
</p>
</details>
<br>
</p>
</details>

<br>
</p>
</details>

<p align="right"><a href="#top">Voltar ao topo</a></p>

---

<h2 id="decisions">👨‍💻 Ferramentas utilizadas</h2>

<br>

<details><summary>Ferramentas Utilizadas</summary>
<p>

- [Prisma](https://www.prisma.io)
  - Optei por utilizar o prisma, que é mais compatível com o TypeScript, tornando inclusive o processo de escrever o código mais rápido por conta do auto-complete do VSCode.

<br>

- [TypeScript](https://www.typescriptlang.org)
  - Decidi usar o TypeScript pois imaginei que a aplicação teria várias integrações entre diferentes entidades do banco de dados, eu poderia economizar muito tempo com bugs e erros que só seriam descobertos mais tarde. 

<br>

- [joi](https://joi.dev)
  - A escolha do joi se deu principalmente por já estava familiarizado e sabia que iria me atender bem.
  - Além disso, torna o processo muito mais rápido, já tendo ferramentas prontas para validações padrão.

- [Jest](https://jestjs.io/pt-BR/)
  - Decidi usar o Jest que é um framework de teste, que oferece uma poderosa e abrangente suite de testes. Ao decidir utilizar o Jest em conjunto com o SuperTest,  escolhi uma combinação eficaz para realizar testes de integração em suas aplicações.

- [Node-thermal-printer](https://www.npmjs.com/package/node-thermal-printer)
  - Uma biblioteca que configura uma impressora térmica, que é um tipo de impressora que utiliza calor para produzir uma imagem ou texto em papel especial sensível ao calor. No contexto do Node.js, a biblioteca pode ser um módulo JavaScript projetado para facilitar a comunicação e o controle de impressoras térmicas usando Node.js.

</p>
</details>
<br>

<p align="right"><a href="#top">Voltar ao topo</a></p>

---

