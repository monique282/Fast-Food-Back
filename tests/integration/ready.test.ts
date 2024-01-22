import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../helpers";
import {
  createReadyTrueRequest,
  createRequest,
} from "../factories/request.factory";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("Ready, Post ", () => {
  it("Returns 404, If the order code entered exists", async () => {
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
    const response = await server.post("/updateReady").send({
      code: 3,
    });
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual("Código do pedido não encontrado");
  });

  it("Returns 409, Order ready", async () => {
    await createReadyTrueRequest([
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
    const response = await server.post("/updateReady").send({
      code: 2,
    });
    expect(response.status).toBe(409);
    expect(response.body.message).toEqual("Pedido ja consta comp pronto");
  });

  it("Returns 201, Placing order as ready successfully", async () => {
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
    const response = await server.post("/updateReady").send({
      code: 2,
    });
    console.log(response.body);
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
