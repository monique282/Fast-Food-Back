import app from "../src/app";
import httpStatus from "http-status";
import { describe } from "node:test";
import supertest from "supertest";

const api = supertest(app);

describe("Integration Test", () => {
    it("Return 200, Ok running!", async () => {
        const { text, status } = await api.get("/health");
        expect(status).toBe(httpStatus.OK);
        expect(text).toBe("Ok running! ")
    })
})