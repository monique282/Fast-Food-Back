import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../helpers";
import {
  createErrorTrueRequest,
  createRequest,
} from "../factories/request.factory";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("Request, Post ", () => {
  it("Returns 409, If the order code entered exists", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.post("/request").send([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    expect(response.status).toBe(409);
    expect(response.body.message).toEqual("Código do pedido ja existe");
  });

  it("Returns 201, Placing the order successfully", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.post("/request").send([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 3,
      },
    ]);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      idR: expect.any(Number),
      id: expect.any(Number),
      image: expect.any(String),
      name: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      counter: expect.any(Number),
      observationText: expect.any(String),
      total: expect.any(String),
      nameClient: expect.any(String),
      code: expect.any(Number),
      ready: expect.any(Boolean),
      error: expect.any(Boolean),
      createdAt: expect.any(String),
    });
  });
});

describe("Request Error, Post", () => {
  it("Returns 404, If the informed order code exists, to report a production error", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.post("/updateError").send({
      code: 3,
    });
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual("Código do pedido não encontrado");
  });

  it("Returns 409, If error already counts as true", async () => {
    await createErrorTrueRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.post("/updateError").send({
      code: 2,
    });
    expect(response.status).toBe(409);
    expect(response.body.message).toEqual("Pedido ja consta com erro");
  });

  it("Returns 201, Placing the order with error successfully", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.post("/updateError").send({
      code: 2,
    });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      idR: expect.any(Number),
      id: expect.any(Number),
      image: expect.any(String),
      name: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      counter: expect.any(Number),
      observationText: expect.any(String),
      total: expect.any(String),
      nameClient: expect.any(String),
      code: expect.any(Number),
      ready: expect.any(Boolean),
      error: expect.any(Boolean),
      createdAt: expect.any(String),
    });
  });
});

describe("Request, Get ", () => {
  it("Returns 404, Taking orders, no orders", async () => {
    const response = await server.get("/request").send();
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual("Nenhum pedido no sistema");
  });

  it("Returns 200, Taking orders", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.get("/request").send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          idR: expect.any(Number),
          image: expect.any(String),
          name: expect.any(String),
          price: expect.any(Number),
          description: expect.any(String),
          counter: expect.any(Number),
          observationText: expect.any(String),
          total: expect.any(String),
          nameClient: expect.any(String),
          code: expect.any(Number),
          ready: expect.any(Boolean),
          error: expect.any(Boolean),
          createdAt: expect.any(String),
        }),
      ])
    );
  });
});

describe("Request, Delet ", () => {
  it("Returns 404, If the order code entered does not exist", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.delete("/updateDelete").send({
      code: 3,
    });
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual("Código do pedido não encontrado");
  });

  it("Returns 200, Successfully deleted", async () => {
    await createRequest([
      {
        ProductSpecific: {
          id: 1,
          image:
            "https://hefood.com.br/wp-content/uploads/2022/02/kjkjj-600x600.jpg",
          name: "Example Product",
          price: 10.99,
          description: "This is an example product.",
        },
        counter: 2,
        followUp: [],
        observationText: "Example observation text",
        total: "30.97",
        nameClient: "John Doe",
        code: 2,
      },
    ]);
    const response = await server.delete("/updateDelete").send({
      code: 2,
    });
    expect(response.status).toBe(200);
  });
});
