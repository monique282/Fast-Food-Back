import supertest from 'supertest';
import app, { init } from '../../src/app';
import { cleanDb } from '../helpers';
import serviceCode from '../../src/services/serviceCode';

// jest.mock('../../src/services/serviceCode');

// const mockedGetCode = serviceCode.getCode as jest.Mock;
beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

describe('Code, Get', () => {
    it("Returns 400, If it is returning as expected", async () => {
      //  mockedGetCode.mockResolvedValueOnce(null);
        const response = await server.get('/code').send();
        console.log('Response Body:', response.body);
        console.log('Response Status:', response.status);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({});
    });
});
